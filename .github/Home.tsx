import useReveal from "../hooks/useReveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export default function Home() {
  useReveal();

  return (
    <section className="home-modern">

      <div className="hero-modern reveal">
        <div className="intro">
          <h3>KATIE DUBOIS</h3>
          <h1 className="highlight">
            <span className="highlighted">Software Engineer</span>
          </h1>
          <p>
            Crafting modern, user-focused applications with clean design and scalable code.
          </p>
          <div className="btn-group">
            <a href="projects" className="btn">View My Work</a>

                <a
                  href="/KatieDubois_Resume.pdf"
                  className="btn secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
          </div>
        </div>

        <div className="visual">
          <div className="image-wrapper">
            <div className="image-circle"></div>
          </div>
        </div>
      </div>


      <div className="about-preview reveal">
        <h2>About Me</h2>
        <p>
          I’m a software engineer passionate about building clean, accessible, and scalable
          applications. With experience across front-end and back-end, I love turning
          ideas into polished, user-friendly solutions.
        </p>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Python</span>
          <span>Azure SQL</span>
        </div>
      </div>

      <div className="featured-projects reveal">
        
        <h2>Featured Projects</h2>

          <div className="project-grid">

            <div className="project-card">
              <div className="card-icons">
                <FontAwesomeIcon icon={faFolderOpen} className="folder-icon" />
                <div className="links">
                  <a href="https://github.com/kndubois/FinTrack" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                    <FontAwesomeIcon icon={faGithub}/>
                  </a>

                  <a href="/projects" className="icon-link" title="View Project">
                    <FontAwesomeIcon icon={faInfoCircle}/>
                  </a>
                </div>
              </div>

              <h3>FinTrack</h3>
              <p>A personal finance tracker</p>

              <div className="tech-stack">
                <span>Python</span>
                <span>Azure SQL</span>
              </div>
            </div>

            <div className="project-card">
              <div className="card-icons">
                <FontAwesomeIcon icon={faFolderOpen} className="folder-icon" />
                <div className="links">
                  <a href="https://github.com/kndubois/TravelPlanner" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                    <FontAwesomeIcon icon={faGithub}/>
                  </a>

                  <a href="/projects" className="icon-link" title="View Project">
                    <FontAwesomeIcon icon={faInfoCircle}/>
                  </a>
                </div>
              </div>

              <h3>TravelPlanner</h3>
              <p>A trip itinerary website</p>

              <div className="tech-stack">
                <span>Node.js</span>
                <span>Express</span>
                <span>SQLite</span>
              </div>
            </div>

            <div className="project-card">
              <div className="card-icons">
                <FontAwesomeIcon icon={faFolderOpen} className="folder-icon" />
                <div className="links">
                  <a href="https://github.com/kndubois/LaPalma" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                    <FontAwesomeIcon icon={faGithub}/>
                  </a>

                  <a href="/projects" className="icon-link" title="View Project">
                    <FontAwesomeIcon icon={faInfoCircle}/>
                  </a>
                </div>
              </div>

              <h3>LaPalma</h3>
              <p>A hotel booking website</p>

              <div className="tech-stack">
                <span>Coming</span>
                <span>Soon</span>
              </div>
            </div>

          </div>
        <a href="/projects" className="btn secondary">See All Projects</a>
      </div>


    </section>
  );
}
