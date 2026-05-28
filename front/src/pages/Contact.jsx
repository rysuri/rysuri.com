import { useState, useEffect, useRef } from "react";
import { FaEnvelope, FaLinkedin, FaDiscord } from "react-icons/fa";

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const headerRef = useReveal(0.2);
  const cardRef = useReveal(0.1);

  useEffect(() => {
    document.title = "Contact | Ry Suriyathep";
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

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
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
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
    <>
      <style>{`
        .contact-header-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .contact-header-reveal.revealed { opacity: 1; transform: translateY(0); }

        .contact-card-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
          transition-delay: 0.1s;
        }
        .contact-card-reveal.revealed { opacity: 1; transform: translateY(0); }

        .contact-input {
          width: 100%;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 9px 12px;
          font-size: 14px;
          outline: none;
          background: #ffffff;
          color: #1f2937;
          box-sizing: border-box;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .contact-input::placeholder { color: #9ca3af; }
        .contact-input:focus {
          border-color: #d1d5db;
          box-shadow: 0 0 0 3px rgba(0,0,0,0.04);
        }

        .contact-link-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #4b5563;
          text-decoration: none;
          padding: 4px 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          width: 100%;
          transition: color 0.15s ease;
        }
        .contact-link-row:hover { color: #111827; }

        .sent-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #16a34a;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 999px;
          padding: 4px 12px;
          animation: fadeInPop 0.3s ease forwards;
        }
        @keyframes fadeInPop {
          from { opacity: 0; transform: scale(0.9); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div className="min-h-screen w-full bg-neutral-50 flex flex-col items-center justify-center">
        <div className="max-w-[480px] mx-auto px-5 py-28 pb-40">

          {/* Header */}
          <div ref={headerRef} className="contact-header-reveal text-center mb-10">
            <h2 className="text-2xl font-bold text-neutral-800">Contact Me</h2>
            <p className="text-sm text-neutral-400 mt-2">
              I'm always open to new opportunities, collabs, or just a chat.
            </p>
          </div>

          {/* Single card */}
          <div ref={cardRef} className="contact-card-reveal bg-white border border-neutral-200 rounded-xl overflow-hidden">

            {/* Links section */}
            <div className="flex flex-col gap-3 px-6 py-5">
              <a
                href="https://www.linkedin.com/in/rysuri/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-row"
              >
                <FaLinkedin size={14} className="text-neutral-400 shrink-0" />
                <span>linkedin.com/in/rysuri</span>
                <span className="ml-auto text-xs text-neutral-300">↗</span>
              </a>

              <button
                className="contact-link-row"
                onClick={() => {
                  navigator.clipboard.writeText("rysu986@gmail.com").then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  });
                }}
              >
                <FaEnvelope size={14} className="text-neutral-400 shrink-0" />
                <span>rysu986@gmail.com</span>
                <span className="ml-auto text-xs transition-colors" style={{ color: copied ? "#16a34a" : "#d1d5db" }}>
                  {copied ? "Copied ✓" : "copy"}
                </span>
              </button>

              <a
                href="https://discord.com/channels/@me"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-row"
              >
                <FaDiscord size={14} className="text-neutral-400 shrink-0" />
                <span>rysuri.com</span>
                <span className="ml-auto text-xs text-neutral-300">↗</span>
              </a>
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-100" />

            {/* Form section */}
            <form className="flex flex-col gap-3 px-6 py-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="contact-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="contact-input"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="contact-input"
                style={{ resize: "none" }}
              />
              <div className="flex justify-center items-center gap-4 pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-black transition-colors border border-neutral-300 hover:border-neutral-600 bg-white px-5 py-2.5 rounded-full disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message ↗"}
                </button>
                {sent && <span className="sent-badge">✓ Sent!</span>}
              </div>
            </form>

          </div>
        </div >
      </div >
    </>
  );
}

export default Contact;