export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h1>My Projects</h1>
      <div className="project-list">

        <div className="project-card">
          <h2>FinTrack</h2>
          <p>A personal finance tracker.</p>
          <div className="tech-stack">
            <span>Python</span>
            <span>Azure SQL</span>
          </div>
          <div className="buttons">
            <a href="#" target="_blank" className="btn-card">Live Demo</a>
            <a href="https://github.com/kndubois/FinTrack" target="_blank" className="btn-card secondary">View Source</a>
          </div>
        </div>

        <div className="project-card">
          <h2>TravelPlanner</h2>
          <p>A trip itinerary app.</p>
          <div className="tech-stack">
            <span>Node.js</span>
            <span>Express</span>
            <span>Mustache</span>
          </div>
          <div className="buttons">
            <a href="#" target="_blank" className="btn-card">Live Demo</a>
            <a href="https://github.com/kndubois/TravelPlanner" target="_blank" className="btn-card secondary">View Source</a>
          </div>
        </div>

        <div className="project-card">
          <h2>Meat Meals</h2>
          <p>A weight loss meal tracker.</p>
          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>Azure SQL</span>
          </div>
          <div className="buttons">
            <a href="#" target="_blank" className="btn-card">Live Demo</a>
            <a href="https://github.com/kndubois/MeatMeals" target="_blank" className="btn-card secondary">View Source</a>
          </div>
        </div>

      </div>
    </section>
  );
}
