// PM landing page. Same layout/animation as components/Portfolio.jsx, driven by pmProjects.
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PMNavbar from './PMNavbar';
import '../App.css';
import '../components/Portfolio.css';
import '../components/About.css';
import { pmProjects } from './pmProjects';
import profileImage from '../components/raksseattle.png';
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

function RotatingHeroLine({ phrases, className, style }) {
  const reduced = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (reduced || phrases.length <= 1) return undefined;

    const intervalId = window.setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, [phrases, reduced]);

  return (
    <motion.div
      key={phrases[phraseIndex]}
      className={`hero-line${className ? ' ' + className : ''}`}
      initial={reduced ? false : { opacity: 0, y: '20%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: EASE }}
      style={{ display: 'block', ...style }}
    >
      {phrases[phraseIndex]}
    </motion.div>
  );
}

const HERO_PHRASES = [
  'coordinating cross-functional',
  'de-risking complex',
  'sequencing dependent',
  'delivering on-schedule',
  'aligning stakeholder-heavy'
];

const PMPortfolio = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('portfolio');
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    document.title = 'Rakshanda — Program Management Portfolio';
  }, []);

  // Restore scroll position when returning from a case study
  useEffect(() => {
    const saved = sessionStorage.getItem('pmScrollY');
    if (saved) {
      window.scrollTo(0, parseInt(saved, 10));
      sessionStorage.removeItem('pmScrollY');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        setActiveSection(aboutSection.getBoundingClientRect().top <= 200 ? 'about' : 'portfolio');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <PMNavbar activeSection={activeSection} />
      <div className="portfolio-layout">
        <div className="portfolio-header">
          <h1 className="hero-heading">
            <RotatingHeroLine phrases={HERO_PHRASES} className="hero-line--accent" />
            <AnimatedWords text="programs." delay={1.3} />
          </h1>
        </div>

        <div className="image-sidebar">
          {pmProjects.map((proj, idx) => {
            const projectLink = proj.data.link;
            const linkLabel = proj.data.linkLabel ?? (projectLink?.includes('github.com') ? 'View Code' : 'View Live');
            return (
              <div
                key={proj.slug}
                className="project-item"
                onClick={() => {
                  sessionStorage.setItem('pmScrollY', window.scrollY.toString());
                  navigateWithTransition(navigate, `/case/${proj.slug}`);
                }}
              >
                <div className="project-header">
                  <div className="project-info">
                    <h3 className="project-title">{proj.title}</h3>
                  </div>
                  <p className="project-tagline">{proj.data.tagline}</p>
                </div>

                <div
                  className="project-thumb"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {projectLink && (
                    <a
                      href={projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-live-button"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {linkLabel}
                    </a>
                  )}
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{ opacity: hoveredIdx === idx && proj.hoverImage ? 0 : 1 }}
                  />
                  {proj.hoverImage && (
                    <img
                      src={proj.hoverImage}
                      alt={proj.title}
                      className="thumb-gif"
                      style={{ opacity: hoveredIdx === idx ? 1 : 0 }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div id="about" className="about-section-portfolio">
          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">
                I run programs where the hard part is everything between the plan and the ship date —
                dependencies nobody owns, stakeholders who each think their request is the priority,
                and dates that were set before anyone asked what was feasible. My background is in
                building software end to end, so I can tell an optimistic estimate from a real one and
                spot the dependency that will quietly become the critical path.
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

export default PMPortfolio;
