import type { Experience } from "../types/experience";
import Card from "./Card";

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="experience-card">
      <h3>
        {experience.role} - {experience.company}
      </h3>
      <p>
        {experience.startDate} - {experience.endDate ?? "Current"}
      </p>
      {experience.context ?? <p>{experience.context}</p>}
      <p>{experience.highlights}</p>
    </Card>
  );
}

export default ExperienceCard;
