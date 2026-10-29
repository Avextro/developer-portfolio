import HeroSection from "./sections/HeroSection";

function App() {
  return (
    <main>
      <HeroSection></HeroSection>
      <footer>
        <p>© {new Date().getFullYear()} Leighton Cook</p>
      </footer>
    </main>
  );
}

export default App;
