import { useState, useEffect } from "react";
import useReveal from "../hooks/useReveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  useReveal();

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const titles = [
    "Software Engineer",
    "Frontend Engineer",
    "Backend Engineer",
    "Full Stack Engineer",
    "Python Engineer",
    "React Engineer",
  ];

  useEffect(() => {
    if (index === titles.length) setIndex(0);

    const current = titles[index];
    const timeout = setTimeout(() => {
      setText(
        deleting ? current.substring(0, subIndex - 1) : current.substring(0, subIndex + 1)
      );
      setSubIndex(subIndex + (deleting ? -1 : 1));

      if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, titles]);

  return (
    <section className="home-modern">
      <div className="hero-modern reveal">
        <div className="intro">
          <h3 aria-label="Katie Dubois, Software Engineer">KATIE DUBOIS</h3>
          <h1>
            <span className="highlighted">{text}</span>
            <span className="cursor">|</span>
          </h1>
          <p>
            Crafting modern, user-focused applications with clean design and scalable code.
          </p>
          <div className="btn-group">
            <a href="/projects" className="btn" aria-label="View projects">
              View My Work
            </a>
            <a
              href="/KatieDubois_Resume.pdf"
              className="btn secondary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View resume"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="visual">
          <div className="image-wrapper">
            <div
              className="image-circle"
              role="img"
              aria-label="Profile picture of Katie Dubois"
            ></div>
          </div>
        </div>
      </div>

      <div className="about-preview reveal">
        <h2>About Me</h2>
        <p>
          I'm a software engineer passionate about building clean, accessible, and scalable
          applications. With expertise in both front-end and back-end development, I transform
          ideas into polished, user-friendly solutions.
        </p>
        <div className="skills">
          {["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Python", "Azure SQL"].map(
            (skill) => (
              <span key={skill}>{skill}</span>
            )
          )}
        </div>
      </div>

      <div className="featured-projects reveal">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          {[
            {
              title: "FinTrack",
              description: "A personal finance tracker",
              github: "https://github.com/kndubois/FinTrack",
              tech: ["Python", "Azure SQL"],
            },
            {
              title: "TravelPlanner",
              description: "A trip itinerary website",
              github: "https://github.com/kndubois/TravelPlanner",
              tech: ["Node.js", "Express", "SQLite"],
            },
            {
              title: "LaPalma",
              description: "A hotel booking website",
              github: "https://github.com/kndubois/LaPalma",
              tech: ["Coming", "Soon"],
            },
          ].map((project) => (
            <div className="project-card" key={project.title}>
              <div className="card-icons">
                <FontAwesomeIcon icon={faFolderOpen} className="folder-icon" aria-hidden="true" />
                <div className="links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`View ${project.title} on GitHub`}
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href="/projects"
                    className="icon-link"
                    title={`View ${project.title} details`}
                    aria-label={`View ${project.title} details`}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                  </a>
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <a href="/projects" className="btn secondary" aria-label="See all projects">
          See All Projects
        </a>
      </div>
    </section>
  );
}