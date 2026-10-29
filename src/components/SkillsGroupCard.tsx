import type { SkillGroup } from "../types/skillGroup";
import "./SkillGroupCard.css";

interface SkillGroupCardProps {
  group: SkillGroup;
}

function SkillGroupCard({ group }: SkillGroupCardProps) {
  return (
    <article className="skill-group-card">
      <h3>{group.name}</h3>

      {group.technologies && (
        <ul className="skill-tags">
          {group.technologies.map((technology) => (
            <li key={technology.name}>{technology.name}</li>
          ))}
        </ul>
      )}

      {group.skills && (
        <ul className="skill-list">
          {group.skills.map((skill) => (
            <li key={skill.name}>
              <span>{skill.name}</span>
              {skill.level && (
                <span className="skill-level">{skill.level}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default SkillGroupCard;
