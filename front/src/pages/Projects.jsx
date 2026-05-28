import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const CONSTRAINED = "max-w-[1092px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-0";

function useFadeIn(selector) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}

function Projects() {
  const navigate = useNavigate();

  useFadeIn(".fade-up");

  useEffect(() => {
    document.title = "Projects | Ry Suriyathep";
  }, []);

  return (
    <>
      <style>{`
        @keyframes hero-fade {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-animate {
          opacity: 0;
          animation: hero-fade 0.6s ease forwards;
        }
        .hero-animate:nth-child(1) { animation-delay: 0.05s; }
        .hero-animate:nth-child(2) { animation-delay: 0.15s; }
        .hero-animate:nth-child(3) { animation-delay: 0.25s; }

        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .fade-up:nth-child(2) { transition-delay: 0.1s; }
      `}</style>

      <div className="min-h-screen bg-neutral-50">

        {/* Hero banner */}
        <div
          className="relative w-full border-b border-blue-200/60 overflow-hidden"
          style={{
            backgroundColor: "#ffffff",
            backgroundImage: `
              linear-gradient(rgba(99,149,220,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,149,220,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(220,230,242,0.6) 100%)" }} />

          <div className={`${CONSTRAINED} relative z-10 pt-32 pb-16`}>
            <p className="hero-animate text-[10px] font-semibold tracking-[0.15em] text-blue-400 uppercase mb-3">
              Portfolio
            </p>
            <h1 className="hero-animate text-4xl font-bold tracking-tight text-neutral-900 mb-3">
              Highlighted Projects
            </h1>
            <p className="hero-animate text-sm text-neutral-500">
              {projects.length} projects shown. Click any to explore in more detail.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className={`${CONSTRAINED} py-16`}>
          <div className="grid sm:grid-cols-2 gap-3">
            {projects.map((project) => (
              <div key={project.id} className="fade-up">
                <ProjectCard
                  {...project}
                  onClick={() => navigate(`/projects/${project.slug}`)}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

export default Projects;