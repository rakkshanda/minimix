import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../App.css';
import './Portfolio.css';
import './About.css';
import { frontendProjects, productProjects } from './projects/allProjects';
import profileImage from '../assets/image.png';

const Portfolio = ({ isProduct = false }) => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('portfolio');

  const slugify = (title) => title.toLowerCase().replace(/\s+/g, '-');

  const buildProjectList = () => {
    if (!isProduct) return frontendProjects;

    const combined = [
      ...frontendProjects.slice(0, 3),  // Delivery, Emerald, Folklore
      ...productProjects,               // Career Cupid, RevereXR, HuggingFace
      ...frontendProjects.slice(3)      // ClaimRunner, Hunch, PlotX, AIMS
    ];

    const seen = new Set();
    return combined.filter((proj) => {
      const slug = slugify(proj.title);
      if (seen.has(slug)) return false;
      seen.add(slug);
      return true;
    });
  };

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
          <h1 className="portfolio-name">
           {/* Rakshanda is a {isProduct ? 'program manager' : 'software developer'}. */}
          </h1>
          <p className="portfolio-bio">
          I'm passionate about building products that connect people, simplify workflows, and make technology feel effortless.
          </p>
        </div>
        
        <div className="image-sidebar">
          {projectList.map((proj, idx) => {
            const projectSlug = slugify(proj.title);
            const basePath = isProduct ? '/product' : '/portfolio';
            
            return (
              <div 
                key={idx} 
                className="project-item"
                onClick={() => navigate(`${basePath}/${projectSlug}`)}
              >
                <div className="project-header">
                  <div className="project-info">
                    <h3 className="project-title">{proj.title}</h3>
                    {/* <p className="project-category">{proj.type === 'frontend' ? 'Frontend Development' : 'Product Design'}</p> */}
                  </div>
                  <p className="project-tagline">{proj.data.tagline}</p>
                </div>
                
                <div className="project-thumb">
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
                  <img src={proj.image} alt={proj.title} />
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
