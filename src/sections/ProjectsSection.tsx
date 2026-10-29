import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projectData";

function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
