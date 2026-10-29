import type { Education } from "../types/education";
import "./EducationCard.css";

interface EducationCardProps {
  education: Education;
}

function EducationCard({ education }: EducationCardProps) {
  return (
    <article className="education-card">
      <h3>{education.qualification}</h3>
      <p>{education.institution}</p>
      <p>Major: {education.major}</p>
      <p>Minors: {education.minors}</p>
      <p>
        {education.startDate}-{education.endDate}
      </p>
      {!education.completed && <p>Incomplete</p>}
    </article>
  );
}

export default EducationCard;
