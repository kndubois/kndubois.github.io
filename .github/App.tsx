import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function Layout() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="layout">
      <button
        className="hamburger"
        aria-label="Toggle menu"
        onClick={() => setNavOpen(!navOpen)}
      >
        ☰
      </button>

      <aside className={`sidebar ${navOpen ? "show-nav" : ""}`}>
        <div className="logo"><a href="/">K</a></div>

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
          <a href="mailto:katiedubois@hotmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer" title="Email">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>

          <a href="https://github.com/kndubois" target="_blank" rel="noreferrer" title="GitHub">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/kndubois/" target="_blank" rel="noreferrer" title="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </aside>

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
