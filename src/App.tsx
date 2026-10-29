function App() {
  return (
    <>
      <header>
        <nav aria-label="Main navigation">
          <a href="#home">Leighton Cook</a>

          <div>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home">
          <p>Full Stack Developer</p>
          <h1>Hi, I'm Leighton.</h1>
          <p>Placeholder brief description</p>
          <a href="#projects">View my work</a>
        </section>

        <section id="about">
          <h2>About</h2>
          <p> Placeholder description</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
        </section>

        <section id="contact">
          <h2>Get in touch</h2>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Leighton Cook</p>
      </footer>
    </>
  );
}

export default App;
