import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Navbar from './Navbar';
import '../App.css';
import './Portfolio.css';
import './About.css';
import { frontendProjects, productProjects } from './projects/allProjects';
import profileImage from '../assets/image.png';
import { navigateWithTransition } from '../utils/viewTransition';

const EASE = [0.22, 1, 0.36, 1];

function AnimatedWords({ text, delay, className, style }) {
  const reduced = useReducedMotion();
  const words = text.split(' ');
  return (
    <div className={`hero-line${className ? ' ' + className : ''}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: '70%' }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE, delay: delay + i * 0.07 }}
          style={{ display: 'inline-block', marginRight: '0.28em', ...style }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

const Portfolio = ({ isProduct = false }) => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('portfolio');
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const slugify = (title) => title.toLowerCase().replace(/\s+/g, '-');
  const getProjectPath = (project) => {
    if (project.title === 'Claim Runner AI') return '/claimrunner';
    if (project.title === 'AIMS UW') return '/aims';
    if (project.title === 'Folklore') return '/folklore';
    if (project.title === 'South Project') return '/south-project';
    if (project.title === 'Career Cupid') return '/career-cupid';
    if (project.title === 'MarketPulse') return '/marketpulse';
    if (project.title === 'Hugging Face landing page redesign') return '/iengage';
    if (project.title === 'iEngage × Hugging Face') return '/iengage';
    if (project.title === 'PlotX') return '/plotx';
    if (project.title === 'Hunch') return '/hunch';
    if (project.title === 'VisionDefect AI') return '/visiondefect';
    return `/project/${slugify(project.title)}`;
  };

  const buildProjectList = () => {
    if (!isProduct) return frontendProjects;

    const combined = [
      ...frontendProjects.slice(0, 3),  // Folklore, AIMS, South Project
      ...productProjects,               // Career Cupid, RevereXR, HuggingFace
      ...frontendProjects.slice(3)      // PlotX, Hunch, Financial news, Claim Runner, Career Cupid, Product Chatbot
    ];

    const seen = new Set();
    return combined.filter((proj) => {
      const slug = slugify(proj.title);
      if (seen.has(slug)) return false;
      seen.add(slug);
      return true;
    });
  };

  // Restore scroll position when returning from a case study
  useEffect(() => {
    const saved = sessionStorage.getItem('portfolioScrollY');
    if (saved) {
      window.scrollTo(0, parseInt(saved, 10));
      sessionStorage.removeItem('portfolioScrollY');
    }
  }, []);

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutTop = aboutSection.getBoundingClientRect().top;
        // If about section is in viewport (considering navbar height)
        if (aboutTop <= 200) {
          setActiveSection('about');
        } else {
          setActiveSection('portfolio');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Choose the right project list based on route
  // Product page shows custom order: frontendProjects (first 3) + productProjects + frontendProjects (rest)
  const projectList = buildProjectList();

  return (
    <>
      <Navbar activeSection={activeSection} />
      <div className="portfolio-layout">
        <div className="portfolio-header">
        

          <h1 className="hero-heading">
            <AnimatedWords text="Front-end developer," delay={0.5} />
            <AnimatedWords text="crafting accessible," delay={0.9} className="hero-line--accent" />
            <AnimatedWords text="thoughtful experiences." delay={1.3} />
          </h1>

          <motion.p
            className="hero-lede"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 1.8 }}
          >
            I build interfaces people can use, with WordPress, React, and a commitment to accessible, standards-based code.
          </motion.p>
        </div>
        
        <div className="image-sidebar">
          {projectList.map((proj, idx) => {
            const projectPath = getProjectPath(proj);
            return (
              <div
                key={idx}
                className="project-item"
                onClick={() => {
                  sessionStorage.setItem('portfolioScrollY', window.scrollY.toString());
                  navigateWithTransition(navigate, projectPath);
                }}
              >
                <div className="project-header">
                  <div className="project-info">
                    <h3 className="project-title">{proj.title}</h3>
                    {/* <p className="project-category">{proj.type === 'frontend' ? 'Frontend Development' : 'Product Design'}</p> */}
                  </div>
                  <p className="project-tagline">{proj.data.tagline}</p>
                </div>

                <div
                  className="project-thumb"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {proj.data.link && (
                    <a
                      href={proj.data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-live-button"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Live
                    </a>
                  )}
                  <img
                    src={hoveredIdx === idx && proj.hoverImage ? proj.hoverImage : proj.image}
                    alt={proj.title}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div id="about" className="about-section-portfolio">
          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">
I enjoy building digital experiences that feel clear, inviting, and genuinely helpful. My work blends thoughtful design with practical engineering, always with a focus on making everyday interactions smoother and more meaningful.              </p>

              <p className="about-middle">
                Outside work, I like to explore new coffee shops around the city, experiment with different brewing methods, travel to new places, and spend time with friends and family.
              </p>

              <p className="about-closing">
                Thank you for stopping by!
              </p>
            </div>

            <div className="about-image">
              <img src={profileImage} alt="Rakshanda" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
