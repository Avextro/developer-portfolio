import Carousel from "../components/Carousel";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projectData";

function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title">Projects</h2>

        <Carousel>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default ProjectsSection;
