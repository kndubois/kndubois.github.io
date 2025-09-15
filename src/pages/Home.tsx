import useReveal from "../hooks/useReveal";

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
          <a href="projects" className="btn">View My Work</a>
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
          <span>React</span>
          <span>Next.js</span>
          <span>Python</span>
          <span>Azure SQL</span>
        </div>
      </div>

      <div className="featured-projects reveal">
        <h2>Featured Projects</h2>
        <div className="project-teasers">
          <div className="teaser">
            <h3>FinTrack</h3>
            <p>A personal finance tracker built with Python and Azure SQL.</p>
            <a href="/projects" className="link">View Project →</a>
          </div>
          <div className="teaser">
            <h3>TravelPlanner</h3>
            <p>A trip itinerary app built with Node.js and Express.</p>
            <a href="/projects" className="link">View Project →</a>
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
