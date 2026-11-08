import Container from "../components/Container";
import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../data/experienceData";

function ExperiencesSection() {
  return (
    <section id="Experiences" aria-labelledby="Experiences-title">
      <Container>
        <h2 id="Experiences-title">Experience</h2>

        <div className="Experiences-grid">
          {experiences.map((experience) => (
            <ExperienceCard experience={experience} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ExperiencesSection;
