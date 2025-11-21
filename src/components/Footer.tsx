import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>Let’s Connect</h3>
        <p>
          Whether it’s a project, opportunity, or just to say hello —
          I’d love to hear from you.
        </p>
        <div className="footer-socials">
          <a
            href="mailto:katiedubois@hotmail.com"
            aria-label="Email"
            title="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="https://github.com/kndubois"
            aria-label="GitHub"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/katiendubois/"
            aria-label="LinkedIn"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Katie Dubois. All rights reserved.</p>
      </div>
    </footer>
  );
}