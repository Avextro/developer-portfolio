import Carousel from "../components/Carousel";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projectData";

function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <Container>
        <h2 id="projects-title">Projects</h2>

        <Carousel>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

export default ProjectsSection;
