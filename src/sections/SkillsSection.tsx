import Container from "../components/Container";
import SkillGroupCard from "../components/SkillsGroupCard";
import { skillGroups } from "../data/skillGroupData";

function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <Container>
        <h2 id="skills-title">Skills</h2>
        <p className="skills-intro">
          Technologies and tools I use to build, test and deliver software.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillGroupCard key={group.name} group={group} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SkillsSection;
