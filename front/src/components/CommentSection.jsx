import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import serverless from "serverless-http";
import { Resend } from "resend";

import Anthropic from "@anthropic-ai/sdk";
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const app = express();

// ==============================
// CORS
// ==============================
app.use(
  cors({
    origin: [
      "https://rysuri.com",
      "https://www.rysuri.com",
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

// ==============================
// AI MODERATION
// ==============================
const MAX_NAME_CHARS = 50;
const MAX_COMMENT_CHARS = 500;
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_CALLS = 30;

let moderationCallCount = 0;
let rateLimitWindowStart = Date.now();

const moderateComment = async (name, message) => {
  // --- Rate limit check ---
  const now = Date.now();
  if (now - rateLimitWindowStart > RATE_LIMIT_WINDOW_MS) {
    moderationCallCount = 0;
    rateLimitWindowStart = now;
  }
  if (moderationCallCount >= RATE_LIMIT_MAX_CALLS) {
    console.warn("Moderation rate limit hit — rejecting comment.");
    return 0; // fail closed
  }
  moderationCallCount++;

  // --- Truncate inputs ---
  const safeName = name.slice(0, MAX_NAME_CHARS);
  const safeMessage = message.slice(0, MAX_COMMENT_CHARS);

  try {
    const response = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 10,
      system:
        "You are a comment moderator for a developer's personal portfolio website. Given a name and message, reply with ONLY the digit 1 (accept) or ONLY the digit 0 (reject). Accept comments that are genuine, respectful, playful, casual, or even mildly profane — adults are welcome here. Reject only comments that are spam, ads, hate speech, slurs, graphic/sexual content, targeted harassment, or pure gibberish with no real message. When in doubt, accept it. No explanation, no punctuation — just 1 or 0.",
      messages: [
        {
          role: "user",
          content: `Name: ${safeName} \nMessage: ${safeMessage} `,
        },
      ],
    });

    const result = response.content[0]?.text?.trim();
    return result === "1" ? 1 : 0; // anything unexpected = reject
  } catch (error) {
    console.error("Moderation error:", error);
    return 0; // fail closed
  }
};

// ==============================
// ROUTES
// ==============================
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "API is running" });
});

// --- Portfolio Contact Form ---
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
      subject: `rysuri.com / contact - New message from ${name} `,
      html: `< p > <strong>From:</strong> ${name} (${email})</p > <p>${message}</p>`,
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send message." });
  }
});

// ==============================
// Comment Section Routes
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

  if (name.length > MAX_NAME_CHARS || message.length > MAX_COMMENT_CHARS)
    return res.status(400).json({ error: "Input exceeds allowed length." });

  console.log(`[moderation] Checking comment from "${name}"...`);
  const moderation = await moderateComment(name, message);
  console.log(`[moderation] Result for "${name}": ${moderation}`);

  if (moderation !== 1) {
    console.warn(`[moderation] Rejected comment from "${name}": "${message}"`);
    return res.status(400).json({
      error: "Your comment was flagged by my moderation system and could not be posted."
    });
  }

  try {
    await connectToDatabase();
    const newComment = new Comment({ name, email, message });
    await newComment.save();
    console.log(`[moderation] Comment saved from "${name}"`);
    res.status(201).json(newComment);
  } catch (error) {
    console.error("[db] Failed to save comment:", error.message);
    res.status(500).json({ error: "Failed to save comment. Please try again." });
  }
});

// ==============================
// LAMBDA HANDLER
// ==============================
export const handler = serverless(app);
