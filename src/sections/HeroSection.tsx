function HeroSection() {
  return (
    <section id="hero">
      <div className="container">
        <h1>Hi, I'm Leighton Cook</h1>

        <h2 id="hero-title">Full Stack Developer</h2>

        <p>
          I design, build and deliver software across applications, web
          platforms and backend systems.
        </p>

        <div className="hero-actions">
          <a href="#projects">View my projects</a>
          <a href="/assets/pdf/resume.pdf" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
