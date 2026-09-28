import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <NavLink to="/" className="logo" onClick={closeMenu}>
          AK
        </NavLink>

        <div className="navbar-status">
          <span className="status-dot"></span>
          <span className="status-text">Available</span>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger ${menuOpen ? "open" : ""}`}></span>
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li>
            <NavLink to="/" onClick={closeMenu} end>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/skills" onClick={closeMenu}>
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" onClick={closeMenu}>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>

        </ul>

      </div>
    </nav>
  );
};

export default Navbar;