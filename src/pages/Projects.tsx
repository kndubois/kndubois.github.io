import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  const projects = [
    {
      name: "FinTrack",
      desc: "A personal finance tracker.",
      tech: ["Python", "Azure SQL"],
      demo: "#",
      github: "https://github.com/kndubois/FinTrack",
    },
    {
      name: "TravelPlanner",
      desc: "A trip itinerary app.",
      tech: ["Node.js", "Express", "Mustache"],
      demo: "#",
      github: "https://github.com/kndubois/TravelPlanner",
    },
    {
      name: "Meat Meals",
      desc: "A weight loss meal tracker.",
      tech: ["HTML", "Python", "Azure SQL"],
      demo: "#",
      github: "https://github.com/kndubois/MeatMeals",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h1>Projects</h1>
        <div className="project-list">
          {projects.map((p) => (
            <article key={p.name} className="project-card">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                title={`View ${p.name} on GitHub`}
              >
                <FontAwesomeIcon icon={faFolderOpen} />
              </a>

              <h2>{p.name}</h2>
              <p>{p.desc}</p>

              <div className="tech-stack">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="buttons">
                <a href={p.demo} target="_blank" className="btn-card">
                  Live Demo
                </a>
                <a href={p.github} target="_blank" className="btn-card secondary">
                  View Source
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
