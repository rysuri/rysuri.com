import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import serverless from "serverless-http";
import { Resend } from "resend";

const app = express();

// ==============================
// CORS (Safari-safe)
// ==============================
app.use(
  cors({
    origin: [
      "https://rysuri.com",
      "https://www.rysuri.com",
      "https://redrockstaging.com",
      "https://www.redrockstaging.com",
      
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  }),
);

app.use(express.json());

// ==============================
// MONGO CONNECTION
// ==============================
let isConnected = false;
const connectToDatabase = async () => {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
  });
  isConnected = true;
  console.log("✅ MongoDB connected");
};

// ==============================
// MODELS
// ==============================
const commentSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});
const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

const stagingInquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  service: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});
const StagingInquiry =
  mongoose.models.StagingInquiry ||
  mongoose.model("StagingInquiry", stagingInquirySchema);

// ==============================
// ROUTES
// ==============================
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "API is running" });
});

// --- Portfolio contact (unchanged) ---
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields required." });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "rysu986@gmail.com",
      replyTo: email,
      subject: `rysuri.com/contact - New message from ${name}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send message." });
  }
});

// --- Red Rock Staging contact ---
app.post("/contact/staging", async (req, res) => {
  const { name, email, phone, address, service, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  try {
    // Send email
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.STAGING_EMAIL,
      replyTo: email,
      subject: `redrockstaging.com - New inquiry from ${name}`,
      html: `
        <h2>New Staging Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Property Address:</strong> ${address || "Not provided"}</p>
        <p><strong>Service Interested In:</strong> ${service || "Not specified"}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send message." });
  }
});

// ==============================
// ORIGINAL ROUTES
// ==============================
app.get("/comments", async (req, res) => {
  try {
    await connectToDatabase();
    const comments = await Comment.find().sort({ timestamp: -1 });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comments." });
  }
});

app.post("/comments", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ error: "All fields required." });

  try {
    await connectToDatabase();
    const newComment = new Comment({ name, email, message });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Failed to save comment." });
  }
});

// ==============================
// LAMBDA HANDLER
// ==============================
export const handler = serverless(app);
