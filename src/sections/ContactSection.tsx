function ContactSection() {
  return (
    <section id="contact">
      <div className="container">
        <h2 id="contact-title">Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:leightoncookdev@gmail.com">
            leightoncookdev@gmail.com
          </a>
        </p>

        <h3 id="links-title">Links</h3>
        <div className="contact-links">
          <a href="https://github.com/avextro" target="_blank">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/leighton-cook-b98650219/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
