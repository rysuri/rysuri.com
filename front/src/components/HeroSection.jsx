import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import resumePDF from "../assets/media/ry-suriyathep-resume.pdf";

function HeroSection() {
  useGSAP(() => {
    gsap.from("#hero-tag", { y: 20, opacity: 0, duration: 0.7 });
    gsap.from("#hero-name", { opacity: 0, duration: 1.5 });
    gsap.from("#hero-links", { y: -20, opacity: 0, duration: 0.7 });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center text-center py-24 gap-4">
      <div
        id="hero-links"
        className="flex items-center gap-3 text-sm text-neutral-500"
      >
        <a
          className="hover:text-neutral-900 transition-colors"
          href={resumePDF}
          target="_blank"
          download="ry-suriyathep-resume.pdf"
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
        className="text-4xl sm:text-6xl font-bold tracking-tight"
      >
        RY P. SURIYATHEP
      </h1>
      <p id="hero-tag" className="text-neutral-500 text-lg">
        Software Engineer at UNLV
      </p>
    </section>
  );
}

export default HeroSection;
