import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Globe, Github, Youtube, ArrowLeft } from "lucide-react";

import projects from "../data/projects";
import "../css/pages/Projects.css";

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
      <div className="portfolio">
        <div className="header">
          <p>Project not found</p>
          <h1>Sorry, we could not locate this project.</h1>
          <button className="btn-back" onClick={() => navigate("/projects")}>
            Go back to projects
          </button>
        </div>
      </div>
    );
  }

  const images =
    project.images && project.images.length
      ? project.images
      : [project.thumbnail];
  const description = project.detailed_description || project.description;

  return (
    <div className="portfolio project-detail-page">
      <div className="header">
        <button className="btn-back" onClick={() => navigate("/projects")}>
          <ArrowLeft size={16} /> Back to Projects
        </button>

        <div className="name">
          <p>Project Overview</p>
        </div>
        <h1>{project.title}</h1>
      </div>

      <div className="project-detail-content">
        <div className="project-detail-media">
          <img src={images[0]} alt={project.title} className="card-img" />
        </div>

        <div className="project-detail-body">
          <p className="card-description">{description}</p>

          {project.technologies && project.technologies.length > 0 && (
            <div className="tech-list" aria-hidden>
              {project.technologies.map((t) => (
                <span key={t} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="card-actions">
            {project.website && (
              <a
                className="card-btn"
                href={project.website}
                target="_blank"
                rel="noreferrer"
              >
                <Globe className="info-icon" /> Website
              </a>
            )}
            {project.showcase && (
              <a
                className="card-btn"
                href={project.showcase}
                target="_blank"
                rel="noreferrer"
              >
                <Youtube className="info-icon-show" /> Showcase
              </a>
            )}
            {project.source && (
              <a
                className="card-btn card-btn--muted"
                href={project.source}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="info-icon-git" /> Source
              </a>
            )}
          </div>

          {images.length > 1 && (
            <div className="project-gallery">
              {images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="project-gallery-image"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
