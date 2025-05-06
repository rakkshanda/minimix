// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleSubmenu = (menu) =>
    setActiveSubmenu(activeSubmenu === menu ? null : menu);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
        setActiveSubmenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const goToPortfolio = (tab, project) => {
    navigate(`/portfolio?tab=${tab}&project=${encodeURIComponent(project)}`);
    setShowDropdown(false);
    setActiveSubmenu(null);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="hamburger" onClick={toggleMobileMenu}>
          ☰
        </button>
        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>About Me</Link>
          <a
            href="https://linkedin.com/in/rakkshanda/"
            target="_blank"
            rel="noopener noreferrer"
          >LinkedIn</a>
          <a
            href="https://github.com/rakkshanda"
            target="_blank"
            rel="noopener noreferrer"
          >GitHub</a>

          <div className="portfolio-wrapper" ref={dropdownRef}>
            <div className="portfolio-parent" onClick={toggleDropdown}>
              <Link to="/portfolio" className="portfolio-link">Portfolio</Link>
              <span className="dropdown-arrow">▾</span>
            </div>

            {showDropdown && (
              <div className="dropdown-menu">
                <div className="submenu">
                  <div className="submenu-title" onClick={() => toggleSubmenu('frontend')}>Frontend Projects</div>
                  {activeSubmenu === 'frontend' && (
                    <div className="sub-submenu">
                      <div onClick={() => goToPortfolio('frontend', 'KPI Dashboard')}>KPI Dashboard</div>
                      <div onClick={() => goToPortfolio('frontend', 'GitHub Metrics Tool')}>GitHub Metrics Tool</div>
                      <div onClick={() => goToPortfolio('frontend', 'Folklore WP Plugin')}>Folklore WP Plugin</div>
                      <div onClick={() => goToPortfolio('frontend', 'AIMS Website')}>AIMS Website</div>
                      <div onClick={() => goToPortfolio('frontend', 'Hunch Website')}>Hunch Website</div>
                      <div onClick={() => goToPortfolio('frontend', 'PlotX Website')}>PlotX Website</div>
                    </div>
                  )}
                </div>
                <div className="submenu">
                  <div className="submenu-title" onClick={() => toggleSubmenu('pm')}>Product Management Projects</div>
                  {activeSubmenu === 'pm' && (
                    <div className="sub-submenu">
                      <div onClick={() => goToPortfolio('product', 'Netflix')}>Netflix</div>
                      <div onClick={() => goToPortfolio('product', 'Duolingo')}>Duolingo</div>
                      <div onClick={() => goToPortfolio('product', 'Career Cupid')}>Career Cupid</div>
                      <div onClick={() => goToPortfolio('product', 'ClaimRunner')}>ClaimRunner</div>
                      <div onClick={() => goToPortfolio('product', 'Hackathon RevereXR')}>Hackathon RevereXR</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="logo">Rakshanda.</div>
      </div>
    </nav>
  );
};

export default Navbar;
