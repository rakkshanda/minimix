// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import mono from "../assets/monogram.png";


const Navbar = ({ activeSection }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleAboutClick = (e) => {
    const isPortfolioPage = location.pathname === '/portfolio' || location.pathname === '/' || location.pathname === '/product';
    
    if (isPortfolioPage) {
      e.preventDefault();
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const headerOffset = 100;
        const elementPosition = aboutSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setMobileMenuOpen(false);
    }
  };

  const handlePortfolioClick = (e) => {
    const isPortfolioPage = location.pathname === '/portfolio' || location.pathname === '/' || location.pathname === '/product';
    
    if (isPortfolioPage) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="hamburger" onClick={toggleMobileMenu}>
          ☰
        </button>
        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="portfolio-wrapper" >
            {/* <div className="portfolio-wrapper" ref={dropdownRef}>
            <div className="portfolio-parent" onClick={toggleDropdown}> */}
              <div className="portfolio-parent" >
              <Link 
                to="/portfolio" 
                className={`portfolio-link ${(location.pathname === '/portfolio' || location.pathname === '/' || location.pathname === '/product') && activeSection === 'portfolio' ? 'active' : ''}`}
                onClick={handlePortfolioClick}
              >
                Portfolio
              </Link>
              {/* <span className="dropdown-arrow">▾</span> */}
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
          <Link 
            to="/about" 
            className={location.pathname === '/about' || activeSection === 'about' ? 'active' : ''}
            onClick={handleAboutClick}
          >
            About
          </Link>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
