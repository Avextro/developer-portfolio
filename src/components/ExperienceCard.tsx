import type { Experience } from "../types/experience";
import "./ExperienceCard.css";

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="experience-card">
      <h3>
        {experience.role} - {experience.company}
      </h3>
      <p>
        {experience.startDate} - {experience.endDate ?? "Current"}
      </p>
      {experience.context ?? <p>{experience.context}</p>}
      <p>{experience.highlights}</p>
    </article>
  );
}

export default ExperienceCard;
