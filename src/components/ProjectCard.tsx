import "./ProjectCard.css";

interface ProjectCardProps {
  name: string;
  description: string;
}

function ProjectCard({ name, description }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  );
}

export default ProjectCard;
