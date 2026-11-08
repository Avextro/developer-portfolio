import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

function NavBar() {
  return (
    <nav className="relative flex w-full items-center justify-between px-8 py-4">
      {/* Logo */}
      <img src="/logo.png" alt="Logo" />

      {/* Navigation */}
      <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
      </div>

      {/* Contact links */}
      <div className="flex items-center gap-2">
        <a
          href="https://au.linkedin.com/in/leighton-cook-b98650219"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="rounded p-2 transition-colors hover:bg-surface-hover"
        >
          <FaLinkedinIn className="h-5 w-5" />
        </a>

        <a
          href="https://github.com/avextro"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="rounded p-2 transition-colors hover:bg-surface-hover"
        >
          <SiGithub className="h-5 w-5" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
