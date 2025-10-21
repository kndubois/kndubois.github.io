import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faCalendarAlt, faUserTie, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  const projects = [
    {
      name: "FinTrack",
      desc:
        "Personal finance tracker that logs transactions, analyzes spending, and surfaces budget insights with clean, modular architecture.",
      meta: { role: "Backend Dev", year: "2025", status: "Complete" },
      highlights: [
        "Clean architecture + patterns (Factory/Observer) for extensibility",
        "Azure SQL schema optimized with indexes & parameterized queries",
        "Currency conversion via external API with rate caching",
      ],
      tech: ["Python", "Azure SQL", "REST API", "Factory Pattern", "Observer Pattern"],
      demo: "#",
      github: "https://github.com/kndubois/FinTrack",
    },
    {
      name: "TravelPlanner",
      desc:
        "Full-stack itinerary builder where users plan trips across flights, rail, and road — fast CRUD, server-rendered templates.",
      meta: { role: "Full-stack", year: "2025", status: "Active" },
      highlights: [
        "Express + Mustache SSR for quick loads and SEO",
        "Structured routing & middleware for auth/validation",
        "SQLite storage with relational trip/segment models",
      ],
      tech: ["Node.js", "Express", "Mustache", "SQLite"],
      demo: "#",
      github: "https://github.com/kndubois/TravelPlanner",
    },
    {
      name: "LaPalma",
      desc:
        "Responsive hotel booking platform showcasing tropical-inspired design, modern UI components, and a dynamic booking flow for suites and amenities.",
      meta: { role: "Full-stack", year: "2023", status: "In Progress" },
      highlights: [
        "Next.js architecture with reusable components and server routes",
        "Booking forms with calendar integration and client/server validation",
        "Responsive, accessible layout styled with modern SCSS and subtle animations"
      ],
      tech: ["Next.js", "React", "TypeScript", "SCSS", "HTML", "CSS", "JavaScript", "Vite", "REST API"],
      demo: "#",
      github: "https://github.com/kndubois/LaPalma",
    },
    {
      name: "Meat Meals",
      desc:
        "Meal & weight tracker focused on sustainable loss — daily intake summaries, nutrition lookup, and progress trends.",
      meta: { role: "Full-stack", year: "2025", status: "Complete" },
      highlights: [
        "Nutrition data via Spoonacular with request throttling",
        "Azure SQL for logs + weekly roll-ups and macros",
        "Simple UX: add meals fast, see actionable summaries",
      ],
      tech: ["Python", "JavaScript", "HTML", "CSS", "Azure SQL", "Spoonacular API"],
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

              <div className="meta">
                <span>
                  <FontAwesomeIcon icon={faUserTie} />
                  {p.meta.role}
                </span>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  {p.meta.year}
                </span>
                <span>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  {p.meta.status}
                </span>
              </div>

              <p>{p.desc}</p>

              <ul className="highlights">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

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
