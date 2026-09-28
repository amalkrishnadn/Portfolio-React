import { Link } from "react-router-dom";
import profileImage from "../assets/profile.png";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">

      {/* Animated background grid + lights */}
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-light hero-light-1"></div>
        <div className="hero-light hero-light-2"></div>
      </div>

      <div className="hero-container">

        {/* Left — text content */}
        <div className="hero-left">

          <div className="hero-meta">
            <span className="hero-meta-item">
              <span className="hero-meta-dot"></span>
              Full Stack Developer
            </span>
            <span className="hero-meta-sep">/</span>
            <span className="hero-meta-item">India</span>
          </div>

          <h1 className="hero-name">
            <span className="hero-name-line">Amal</span>
            <span className="hero-name-line">Krishna</span>
            <span className="hero-name-line hero-name-accent">D N</span>
          </h1>

          <p className="hero-description">
            I build responsive and user-friendly web applications using
            JavaScript, React, Node.js and MongoDB. I enjoy turning ideas
            into functional, modern web experiences.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary">
              <span>View Projects</span>
              <span className="btn-arrow">↗</span>
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/amalkrishnadn" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <span className="hero-divider">·</span>
            <a href="https://www.linkedin.com/in/amal-krishna-dn" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

        </div>

        {/* Right — image with futuristic frame */}
        <div className="hero-right">

          <div className="hero-image-frame">

            {/* Corner accents */}
            <span className="frame-corner frame-tl"></span>
            <span className="frame-corner frame-tr"></span>
            <span className="frame-corner frame-bl"></span>
            <span className="frame-corner frame-br"></span>

            {/* Technical labels */}
            <span className="frame-label frame-label-top">
              AMAL_KRISHNA_DN.JPG
            </span>
            <span className="frame-label frame-label-bottom">
              FULL STACK — 2026
            </span>

            {/* Scan line */}
            <div className="frame-scan"></div>

            <img src={profileImage} alt="Amal Krishna" />
          </div>

        </div>

      </div>

      {/* Bottom metadata bar */}
      <div className="hero-footer-bar">
        <span>NODE.JS · REACT · MONGODB</span>
        <span className="hero-footer-bar-right">PORTFOLIO v2.0</span>
      </div>

    </section>
  );
};

export default Hero;
