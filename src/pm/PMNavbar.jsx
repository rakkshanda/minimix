// PM-site navbar. Mirrors components/Navbar.jsx structure and reuses its styles,
// minus the tech-site dropdown and /product routes.
import React, { useState } from 'react';
import '../components/Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const PMNavbar = ({ activeSection }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const isHome = location.pathname === '/';

  const handleWorkClick = (e) => {
    if (!isHome) return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleAboutClick = (e) => {
    if (!isHome) return;
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const offsetPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="hamburger" onClick={toggleMobileMenu}>
          ☰
        </button>
        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="portfolio-wrapper">
            <div className="portfolio-parent">
              <Link
                to="/"
                className={`portfolio-link ${isHome && activeSection === 'portfolio' ? 'active' : ''}`}
                onClick={handleWorkClick}
              >
                Work
              </Link>
            </div>
          </div>
          <Link
            to="/"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={handleAboutClick}
          >
            About
          </Link>
          <a
            href="https://linkedin.com/in/rakkshanda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.rakkshanda.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tech Portfolio
          </a>
        </div>
      </div>
    </nav>
  );
};

export default PMNavbar;
