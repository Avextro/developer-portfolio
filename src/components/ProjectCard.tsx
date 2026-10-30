import Card from "./Card";

interface ProjectCardProps {
  name: string;
  description: string;
}

function ProjectCard({ name, description }: ProjectCardProps) {
  return (
    <Card className="project-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </Card>
  );
}

export default ProjectCard;
