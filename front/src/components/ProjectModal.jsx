import React, { useState } from "react";
import { X, Globe, Github, Youtube } from "lucide-react";
import "../css/components/ProjectModal.css";

function ProjectModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  // Use the images array from the project
  const images = project.images || [project.thumbnail];
  const description = project.detailed_description || project.description;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-image-container">
          <img
            src={images[currentImageIndex]}
            alt={project.title}
            className="modal-image"
          />
          {images.length > 1 && (
            <>
              <button
                className="modal-nav-btn modal-nav-prev"
                onClick={handlePrevImage}
              >
                &#8249;
              </button>
              <button
                className="modal-nav-btn modal-nav-next"
                onClick={handleNextImage}
              >
                &#8250;
              </button>
            </>
          )}
        </div>

        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>

          <p className="modal-description">{description}</p>

          {project.technologies && project.technologies.length > 0 && (
            <div className="modal-tech-section">
              <h3 className="modal-tech-title">Technologies</h3>
              <div className="modal-tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech} className="modal-tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="modal-actions">
            {project.website && (
              <a
                className="modal-btn"
                href={project.website}
                target="_blank"
                rel="noreferrer"
              >
                <Globe className="modal-icon" />
                Website
              </a>
            )}
            {project.showcase && (
              <a
                className="modal-btn modal-btn--show"
                href={project.showcase}
                target="_blank"
                rel="noreferrer"
              >
                <Youtube className="modal-icon-show" />
                Showcase
              </a>
            )}
            {project.source && (
              <a
                className="modal-btn modal-btn--muted"
                href={project.source}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="modal-icon-git" />
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
