import EducationCard from "../components/EducationCard";
import { educationList } from "../data/educationData";

function EducationSection() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title">Education</h2>
        <div className="projects-grid">
          {educationList.map((education) => (
            <EducationCard education={education} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
