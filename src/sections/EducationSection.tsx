import Container from "../components/Container";
import EducationCard from "../components/EducationCard";
import { educationList } from "../data/educationData";

function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-title">
      <Container>
        <h2 id="education-title">Education</h2>
        <div className="projects-grid">
          {educationList.map((education) => (
            <EducationCard education={education} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default EducationSection;
