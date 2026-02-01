import "../css/components/Footer.css";

import { Linkedin, Youtube, Github, FileText } from "lucide-react";
import resumePDF from "../assets/media/ry-suriyathep-resume.pdf";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        <strong>rysuri</strong> powered 2025-{currentYear}
      </p>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/rysuri/"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/rysuri"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <Github />
        </a>
        <a
          href="https://www.youtube.com/@ryvsu"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <Youtube />
        </a>
        <a
          href={resumePDF}
          download="ry-suriyathep-resume.pdf"
          className="link"
        >
          <FileText />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
