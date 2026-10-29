import HeroSection from "./sections/HeroSection";
import Footer from "./components/Footer";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import EducationSection from "./sections/EducationSection";
import ExperiencesSection from "./sections/ExperienceSection";

function App() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <ExperiencesSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
