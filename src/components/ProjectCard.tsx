import type { Project } from "../types/project";
import Card from "./Card";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="project-card flex h-120 w-[320px] shrink-0 flex-col">
      <h3 className="h-18">{project.name}</h3>
      <img
        className="select-none"
        draggable={false}
        src={`https://via.placeholder.com/300x200?text=${encodeURIComponent(project.name)}`}
        alt={project.name}
      />
      <div className="project-card-context">
        <p>Role: {project.role}</p>
        <p>Context: {project.context}</p>
      </div>
      <p>{project.description}</p>
      <div className="project-card-technologies flex gap-1">
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
