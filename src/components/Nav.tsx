import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <h2 className="logo">My Portfolio</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}