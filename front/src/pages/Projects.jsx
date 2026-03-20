import ProjectCard from "../components/ProjectCard";
import "../css/pages/Projects.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import projects from "../data/projects";

function Portfolio() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Projects | Ry Suriyathep";
  }, []);

  return (
    <div className="portfolio">
      <div className="header">
        <div className="name">
          <p>Ry Suriyathep's</p>
        </div>
        <h1>Featured Projects</h1>
      </div>

      <div className="showcase">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            onClick={() => navigate(`/projects/${project.slug}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
