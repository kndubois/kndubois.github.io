import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
import Toggle from "./components/Toggle";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function Layout() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="layout">
      <button
        className="hamburger"
        aria-label="Toggle navigation menu"
        onClick={() => setNavOpen(!navOpen)}
        aria-expanded={navOpen}
      >
        <span className="hamburger-icon">☰</span>
      </button>

      <aside className={`sidebar ${navOpen ? "show-nav" : ""}`}>
        <div className="logo">
          <a href="/" aria-label="Home">
            K
          </a>
        </div>

        <nav>
          <ul>
            <li>
              <a href="/" onClick={() => setNavOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="/projects" onClick={() => setNavOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" onClick={() => setNavOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="socials">
          <a
            href="mailto:katiedubois@hotmail.com"
            aria-label="Email Katie Dubois"
            title="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a
            href="https://github.com/kndubois"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            aria-label="Visit Katie Dubois's GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/katiedubois0502/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            aria-label="Visit Katie Dubois's LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </aside>

      <div className="theme-toggle-wrapper">
        <Toggle />
      </div>

      <main className="content">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;