import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Projects | Ry Suriyathep";
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-10">Featured Projects</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default Projects;
