import { useGSAP } from "@gsap/react";
import resumePDF from "../assets/media/ry-suriyathep-resume.pdf";

function HeroSection() {
  return (
    <section className=" min-h-screen flex flex-col items-center justify-center text-center gap-4">
      <div
        id="hero-links"
        className="flex items-center gap-3 text-sm text-neutral-500"
      >
        <a
          className="hover:text-neutral-900 transition-colors"
          href={resumePDF}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
        <span>|</span>
        <a
          className="hover:text-neutral-900 transition-colors"
          href="https://www.youtube.com/@ryvsu"
          target="_blank"
        >
          Youtube
        </a>
        <span>|</span>
        <a
          className="hover:text-neutral-900 transition-colors"
          href="https://www.linkedin.com/in/rysuri"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
      <h1
        id="hero-name"
        className="text-4xl sm:text-4xl font-bold tracking-tight"
      >
        RY SURIYATHEP
      </h1>
      <p id="hero-tag" className="text-neutral-500 text-md">
        Software Engineer at UNLV
      </p>
    </section>
  );
}

export default HeroSection;
