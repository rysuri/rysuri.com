import { useState, useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaDiscord } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = "Contact | Ry Suriyathep";
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Message sent.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("Cannot connect to server. Email me ASAP. rysu986@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>

      {/* Direct links */}
      <div className="flex flex-col gap-3 mb-10">
        <a
          href="https://www.linkedin.com/in/rysuri/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm hover:underline"
        >
          <FaLinkedin size={16} /> rysuri
        </a>

        <div className="relative flex items-center gap-2">
          <a
            href="#"
            className="flex items-center gap-2 text-sm hover:underline"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText("rysu986@gmail.com").then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              });
            }}
          >
            <FaEnvelope size={16} /> rysu986 [at] gmail [dot] com
          </a>
          {copied && (
            <span className="text-xs text-neutral-400 ml-1">Copied!</span>
          )}
        </div>

        <a
          href="https://discord.com/channels/@me"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm hover:underline"
        >
          <FaDiscord size={16} /> rysuri.com
        </a>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-neutral-300 rounded px-3 py-2 text-sm outline-none focus:border-neutral-600"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-neutral-300 rounded px-3 py-2 text-sm outline-none focus:border-neutral-600"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          className="border border-neutral-300 rounded px-3 py-2 text-sm outline-none focus:border-neutral-600 resize-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="self-start px-5 py-2 bg-neutral-900 text-white text-sm rounded hover:bg-neutral-700 transition-colors disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
