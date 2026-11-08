import type { Project } from "../types/project";
import Card from "./Card";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="project-card">
      <h3>{project.name}</h3>
      <img
        src={`https://via.placeholder.com/300x200?text=${encodeURIComponent(project.name)}`}
        alt={project.name}
      />
      <div className="project-card-context">
        <span>{project.role}</span>
        <span>{project.context}</span>
      </div>
      <p>{project.description}</p>
      <div className="project-card-technologies">
        {project.technologies.map((technology) => (
          <span key={technology.name}>
            {technology.icon && <technology.icon />}
          </span>
        ))}
      </div>
    </Card>
  );
}

export default ProjectCard;
