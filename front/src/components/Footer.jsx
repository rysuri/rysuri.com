import {
  Linkedin,
  Youtube,
  Github,
  FileText,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import resumePDF from "../assets/media/ry-suriyathep-resume.pdf";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-100 mt-auto">
      <div className="max-w-[1200px] mx-auto px-8 xl:px-0 py-12">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-10 border-b border-neutral-100">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
            <span className="font-bold tracking-widest text-sm">
              SURIYATHEP
            </span>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Software engineer based in Las Vegas, Nevada. Constantly learning.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
              Pages
            </p>
            <Link
              to="/"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
              Links
            </p>
            <a
              href="https://github.com/rysuri"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              GitHub <ArrowUpRight size={12} />
            </a>
            <a
              href="https://www.linkedin.com/in/rysuri/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              LinkedIn <ArrowUpRight size={12} />
            </a>
            <a
              href="https://www.youtube.com/@ryvsu"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              YouTube <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
              Contact
            </p>
            <a
              href="mailto:rysu986@gmail.com"
              className="flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <Mail size={13} /> rysu986@gmail.com
            </a>
            <a
              href={resumePDF}
              download="ry-suriyathep-resume.pdf"
              className="flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <FileText size={13} /> Download Resume
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            <strong className="text-neutral-600">rysuri</strong> powered 2025–
            {currentYear}
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/rysuri/"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/rysuri"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.youtube.com/@ryvsu"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
