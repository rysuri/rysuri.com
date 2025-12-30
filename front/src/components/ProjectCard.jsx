import React from "react";
import "../css/components/ProjectCard.css";

import { Globe, Github, Youtube } from "lucide-react";

function ProjectCard({
  title,
  description,
  thumbnail,
  technologies = [],
  website,
  source,
  showcase,
  onClick,
}) {
  return (
    <article
      className="card-container project-show"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className="gallery-container">
        <img src={thumbnail} alt={title} className="card-img" />
      </div>

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>

        {technologies && technologies.length > 0 && (
          <div className="tech-list" aria-hidden>
            {technologies.map((t) => (
              <span key={t} className="tech-badge">
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="card-actions">
          {website && (
            <a
              className="card-btn"
              href={website}
              target="_blank"
              rel="noreferrer"
            >
              <Globe className="info-icon" />
              Website
            </a>
          )}
          {showcase && (
            <a
              className="card-btn"
              href={showcase}
              target="_blank"
              rel="noreferrer"
            >
              <Youtube className="info-icon-show" />
              Showcase
            </a>
          )}
          {source && (
            <a
              className="card-btn card-btn--muted"
              href={source}
              target="_blank"
              rel="noreferrer"
            >
              <Github className="info-icon-git" />
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default React.memo(ProjectCard);
