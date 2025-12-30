import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaDiscord } from "react-icons/fa";
import "../css/pages/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
    <div className="contact">
      <h2 className="header">Contact Me</h2>

      <div className="direct-contact">
        {/* <p className="direct-contact-intro">Or reach out directly:</p> */}
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/rysuri/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin size={20} />
            <span>rysuri</span>
          </a>
          <a href="mailto:rysu986@gmail.com" className="contact-link">
            <FaEnvelope size={20} />
            <span>rysu986@gmail.com</span>
          </a>
          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaDiscord size={20} />
            <span>rysuri.com</span>
          </a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
