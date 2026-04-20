import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Globe, Github, Youtube, ArrowLeft } from "lucide-react";
import projects from "../data/projects";

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

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
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-neutral-500 mb-2">Project not found</p>
        <h1 className="text-2xl font-bold mb-6">Sorry, we could not locate this project.</h1>
        <button
          className="flex items-center gap-1.5 text-sm px-4 py-2 border border-neutral-300 rounded hover:bg-neutral-100 transition-colors"
          onClick={() => navigate("/projects")}
        >
          <ArrowLeft size={15} /> Go back to projects
        </button>
      </div>
    );
  }

  const images = project.images?.length ? project.images : [project.thumbnail];
  const description = project.detailed_description || project.description;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <button
        className="flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-8"
        onClick={() => navigate("/projects")}
      >
        <ArrowLeft size={15} /> Back to Projects
      </button>

      <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-2">Project Overview</p>
      <h1 className="text-3xl font-bold mb-8">{project.title}</h1>

      <div className="grid md:grid-cols-2 gap-10">
        <img src={images[0]} alt={project.title} className="w-full rounded-lg object-cover" />

        <div className="flex flex-col gap-5">
          <p className="text-sm text-neutral-600 leading-relaxed">{description}</p>

          {project.technologies?.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 bg-neutral-100 rounded-full text-neutral-600">
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-4 mt-1">
            {project.website && (
              <a className="flex items-center gap-1.5 text-sm hover:underline" href={project.website} target="_blank" rel="noreferrer">
                <Globe size={14} /> Website
              </a>
            )}
            {project.showcase && (
              <a className="flex items-center gap-1.5 text-sm hover:underline" href={project.showcase} target="_blank" rel="noreferrer">
                <Youtube size={14} /> Showcase
              </a>
            )}
            {project.source && (
              <a className="flex items-center gap-1.5 text-sm text-neutral-500 hover:underline" href={project.source} target="_blank" rel="noreferrer">
                <Github size={14} /> Source
              </a>
            )}
          </div>
        </div>
      </div>

      {images.length > 1 && (
        <div className="grid sm:grid-cols-2 gap-4 mt-10">
          {images.map((src, idx) => (
            <img key={idx} src={src} alt={`${project.title} screenshot ${idx + 1}`} className="rounded-lg w-full object-cover" />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
