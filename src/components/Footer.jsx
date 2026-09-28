import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-accent-line"></div>

      <div className="footer-container">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">AK</Link>
          <p>Full Stack Developer building modern<br />and user-friendly web applications.</p>
          <span className="footer-tag">AMAL_KRISHNA_DN — 2026</span>
        </div>

        <div className="footer-nav">
          <span className="footer-col-label">Navigate</span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-social">
          <span className="footer-col-label">Connect</span>
          <a href="https://github.com/amalkrishnadn" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/amal-krishna-dn" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:amalkrish.dev.work@gmail.com">
            Email
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 Amal Krishna. All rights reserved.</span>
        <span className="footer-tech">REACT · VITE · JS</span>
      </div>

    </footer>
  );
};

export default Footer;