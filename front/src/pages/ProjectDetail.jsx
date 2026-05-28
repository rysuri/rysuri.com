import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Globe, Github, Youtube, ArrowLeft } from "lucide-react";
import projects from "../data/projects";

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

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const imageRef = useReveal(0.1);
  const descRef = useReveal(0.1);
  const screenshotsRef = useReveal(0.1);

  const project =
    projects.find((p) => String(p.slug) === String(slug)) ||
    projects.find((p) => String(p.id) === String(slug));

  useEffect(() => {
    document.title = project
      ? `${project.title} | Ry Suriyathep`
      : "Project Not Found | Ry Suriyathep";
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xs tracking-widest uppercase text-neutral-400 mb-3">404</p>
          <h1 className="text-2xl font-bold text-neutral-800 mb-6">Project not found</h1>
          <button
            className="flex items-center gap-1.5 text-sm px-5 py-2.5 border border-neutral-200 rounded-full hover:bg-neutral-100 transition-colors mx-auto"
            onClick={() => navigate("/projects")}
          >
            <ArrowLeft size={14} /> Back to projects
          </button>
        </div>
      </div>
    );
  }

  const images = project.images?.length ? project.images : [project.thumbnail];
  const description = project.detailed_description || project.description;

  return (
    <>
      <style>{`
        /* Hero elements — load animations, staggered */
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-back    { animation: heroFadeUp 0.4s ease forwards; animation-delay: 0.05s; opacity: 0; }
        .hero-label   { animation: heroFadeUp 0.4s ease forwards; animation-delay: 0.15s; opacity: 0; }
        .hero-title   { animation: heroFadeUp 0.5s ease forwards; animation-delay: 0.25s; opacity: 0; }
        .hero-tags    { animation: heroFadeUp 0.5s ease forwards; animation-delay: 0.35s; opacity: 0; }
        .hero-links   { animation: heroFadeUp 0.5s ease forwards; animation-delay: 0.45s; opacity: 0; }

        /* Body — slide in from sides on scroll */
        .body-image {
          opacity: 0;
          transform: translateX(-24px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .body-image.revealed { opacity: 1; transform: translateX(0); }

        .body-desc {
          opacity: 0;
          transform: translateX(24px);
          transition: opacity 0.65s ease, transform 0.65s ease;
          transition-delay: 0.1s;
        }
        .body-desc.revealed { opacity: 1; transform: translateX(0); }

        /* Screenshots — fade up on scroll */
        .screenshots-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .screenshots-reveal.revealed { opacity: 1; transform: translateY(0); }

        .screenshot-item {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          transition-delay: var(--shot-delay, 0s);
        }
        .screenshot-item.revealed { opacity: 1; transform: translateY(0); }
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
            <button
              className="hero-back flex items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-700 transition-colors mb-10"
              onClick={() => navigate("/projects")}
            >
              <ArrowLeft size={13} /> Back to Projects
            </button>

            <p className="hero-label text-[10px] font-semibold tracking-[0.15em] text-blue-400 uppercase mb-3">
              Project Overview
            </p>
            <h1 className="hero-title text-4xl font-bold tracking-tight text-neutral-900 mb-5">
              {project.title}
            </h1>

            <div className="hero-tags flex flex-wrap gap-1.5 mb-6">
              {project.technologies?.map((t) => (
                <span key={t} className="text-[11px] font-medium px-2.5 py-0.5 bg-blue-50 text-blue-400 border border-blue-100 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            <div className="hero-links flex gap-5">
              {project.website && (
                <a className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors border border-neutral-200 bg-white/80 hover:border-neutral-400 px-4 py-2 rounded-full" href={project.website} target="_blank" rel="noreferrer">
                  <Globe size={13} /> Live Site
                </a>
              )}
              {project.showcase && (
                <a className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors border border-neutral-200 bg-white/80 hover:border-neutral-400 px-4 py-2 rounded-full" href={project.showcase} target="_blank" rel="noreferrer">
                  <Youtube size={13} /> Showcase
                </a>
              )}
              {project.source && (
                <a className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors border border-neutral-200 bg-white/80 hover:border-neutral-400 px-4 py-2 rounded-full" href={project.source} target="_blank" rel="noreferrer">
                  <Github size={13} /> Source
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className={`${CONSTRAINED} py-20`}>
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-16 items-start">

            <div ref={imageRef} className="body-image rounded-xl overflow-hidden border border-neutral-200 shadow-sm">
              <img
                src={images[0]}
                alt={project.title}
                className="w-full object-cover"
              />
            </div>

            <div ref={descRef} className="body-desc flex flex-col gap-8 pt-1">
              <div>
                <p className="text-[10px] tracking-[0.15em] uppercase text-neutral-400 mb-4">About</p>
                <p className="text-base text-neutral-600 leading-loose">{description}</p>
              </div>

              {project.features?.length > 0 && (
                <div>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-neutral-400 mb-4">Features</p>
                  <ul className="flex flex-col gap-3">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-base text-neutral-600 leading-relaxed">
                        <span className="text-blue-300 mt-0.5">↳</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Additional screenshots */}
          {images.length > 1 && (
            <div ref={screenshotsRef} className="screenshots-reveal mt-20">
              <p className="text-[10px] tracking-[0.15em] uppercase text-neutral-400 mb-6">Screenshots</p>
              <div className="grid sm:grid-cols-2 gap-6">
                {images.map((src, idx) => (
                  <ScreenshotItem key={idx} src={src} title={project.title} idx={idx} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function ScreenshotItem({ src, title, idx }) {
  const ref = useReveal(0.1);
  return (
    <div
      ref={ref}
      className="screenshot-item rounded-xl overflow-hidden border border-neutral-200 shadow-sm"
      style={{ "--shot-delay": `${idx * 0.1}s` }}
    >
      <img src={src} alt={`${title} screenshot ${idx + 1}`} className="w-full object-cover" />
    </div>
  );
}

export default ProjectDetail;