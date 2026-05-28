import { useState, useEffect, useRef } from "react";
import makeapostit from "../assets/media/makeapostit-screenshot.png";
import makeapostitgif from "../assets/videos/makeapostit-showcase.gif";
import scholarchips from "../assets/media/scholarchips-sc.png";
import scholarchipsgif from "../assets/videos/scholarchips-showcase.gif";

const projects = [
  {
    title: "makeapost.it",
    description:
      "A fullstack web app for creating and sharing posts, built with React and Supabase.",
    tags: ["React", "Supabase", "PostgreSQL", "OAuth2.0"],
    link: "https://makeapost.it",
    repo: "https://github.com/rysuri/makeapost.it",
    slug: "/projects",
    thumbnail: makeapostit,
    gif: makeapostitgif,
  },
  {
    title: "ScholarChips",
    description:
      "A gamified attendance platform built with React, Node.js, and Supabase — submitted to Rebel Hacks 2026.",
    tags: ["React", "Node.js", "Express.js"],
    repo: "https://github.com/ignacioparraparra/ScholarChips",
    slug: "/projects/",
    thumbnail: scholarchips,
    gif: scholarchipsgif,
  },
];

const CONSTRAINED = "max-w-[1092px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-0";

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

function ProjectCard({ project, delay = 0 }) {
  const [hovered, setHovered] = useState(false);
  const ref = useReveal(0.1);

  return (
    <a
      ref={ref}
      href={project.slug}
      // target="_blank"
      rel="noopener noreferrer"
      className="project-card bg-white border border-blue-100 rounded-xl overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      style={{ "--card-delay": `${delay}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative w-full overflow-hidden bg-neutral-100"
        style={{ minHeight: "260px", aspectRatio: "16/9" }}
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: hovered ? 1 : 0 }}
        />
        <img
          src={project.gif}
          alt={`${project.title} preview`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: hovered ? 0 : 1 }}
        />
      </div>

      <div className="flex flex-col gap-4 p-8 flex-1">
        <h3 className="font-semibold text-lg text-neutral-800">{project.title}</h3>
        <p className="text-[15px] text-neutral-500 leading-relaxed flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-400 border border-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 pt-1 text-sm text-neutral-400">
          {project.link && (
            <>
              <span
                onClick={(e) => { e.preventDefault(); window.open(project.link, "_blank"); }}
                className="hover:text-neutral-900 transition-colors cursor-pointer"
              >
                Live ↗
              </span>
              <span>·</span>
            </>
          )}
          <span
            onClick={(e) => { e.preventDefault(); window.open(project.repo, "_blank"); }}
            className="hover:text-neutral-900 transition-colors cursor-pointer"
          >
            GitHub ↗
          </span>
        </div>
      </div>
    </a>
  );
}

function ProjectsSection() {
  const headerRef = useReveal(0.2);
  const buttonRef = useReveal(0.5);

  return (
    <>
      <style>{`
        @keyframes blueprint-slide {
          from { background-position: 0px 0px, 0px 0px; }
          to   { background-position: 40px 40px, 40px 40px; }
        }

        .reveal-header {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal-header.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.55s ease, transform 0.55s ease,
                      box-shadow 0.3s ease;
          transition-delay: var(--card-delay, 0s);
        }
        .project-card.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-button {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          transition-delay: 0.35s;
        }
        .reveal-button.revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div
        id="projects"
        className="relative w-full border-y border-blue-200/60 py-28 pb-40 overflow-hidden"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: `
            linear-gradient(rgba(99,149,220,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,149,220,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px, 40px 40px",
          backgroundAttachment: "fixed",
          animation: "blueprint-slide 6s linear infinite",
        }}
      >
        {/* Soft vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 50%, rgba(220,230,242,0.5) 100%)",
          }}
        />

        <div className={`${CONSTRAINED} relative z-10`}>
          <div ref={headerRef} className="reveal-header text-center mb-14">
            <h2 className="text-2xl font-bold text-neutral-800">
              Highlighted Projects
            </h2>
            <p className="text-sm text-blue-400/80 mt-2">
              A few things I've built and shipped.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} delay={i * 0.12} />
            ))}
          </div>

          <div ref={buttonRef} className="reveal-button text-center mt-10">
            <a
              href="/projects"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm text-blue-500 hover:text-blue-700 transition-colors border border-blue-200 hover:border-blue-400 bg-white/70 px-5 py-2.5 rounded-full"
            >
              View all projects ↗
            </a>
          </div>
        </div>
      </div >
    </>
  );
}

export default ProjectsSection;