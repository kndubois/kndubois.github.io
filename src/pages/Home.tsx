import useReveal from "../hooks/useReveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  useReveal();

  return (
    <section className="home-modern">

      <div className="hero-modern reveal">
        <div className="intro">
          <h3>KATIE DUBOIS</h3>
          <h1>
            Software <span className="highlight">Engineer</span>
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
          <span>React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Python</span>
          <span>Azure SQL</span>
        </div>
      </div>

      <div className="featured-projects reveal">
        <h2>Featured Projects</h2>
        <div className="project-teasers">
          <div className="teaser">
            <a href="/projects" className="icon-link" title="View Project">
              <FontAwesomeIcon icon={faInfoCircle} size="lg" />
            </a>
            <h3>FinTrack</h3>
            <p>A personal finance tracker built with Python and Azure SQL.</p>
          </div>
          <div className="teaser">
            <a href="/projects" className="icon-link" title="View Project">
              <FontAwesomeIcon icon={faInfoCircle} size="lg" />
            </a>
            <h3>TravelPlanner</h3>
            <p>A trip itinerary app built with Node.js and Express.</p>
          </div>
        </div>
        <a href="/projects" className="btn secondary">See All Projects</a>
      </div>


      <div className="contact-cta reveal">
        <h2>Let’s Work Together</h2>
        <p>Have an idea or opportunity in mind? Feel free to reach out.</p>
        <a href="/contact" className="btn">Contact Me</a>
      </div>
    </section>
  );
}
