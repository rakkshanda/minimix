import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import '../App.css';
import './Portfolio.css';
import { frontendProjects, productProjects } from './projects/allProjects';
import Frontend from './projects/Frontend';
import Product from './projects/Product';

const Portfolio = ({ isProduct = false }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedTitle = queryParams.get('project');

  // Choose the right project list based on route
  const projectList = isProduct ? productProjects : frontendProjects;

  const [activeProject, setActiveProject] = useState(() => {
    const match = projectList.find(p => p.title === selectedTitle);
    return match || null;
  });

  useEffect(() => {
    const match = projectList.find(p => p.title === selectedTitle);
    if (match) setActiveProject(match);
  }, [selectedTitle, projectList]);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  return (
    <>
      <Navbar />
      <div className="portfolio-layout">
        <div className="portfolio-header">
          <h1 className="portfolio-name">
           Rakshanda is a software developer based in Seattle.
          </h1>
          <p className="portfolio-bio">
          I’m passionate about building products that connect people, simplify workflows, and make technology feel effortless.
          </p>
        </div>
        
        <div className="image-sidebar">
          {projectList.map((proj, idx) => (
            <div 
              key={idx} 
              className="project-item"
              onClick={() => setActiveProject(proj)}
            >
              <div className="project-header">
                <div className="project-info">
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-category">{proj.type === 'frontend' ? 'Frontend Development' : 'Product Design'}</p>
                </div>
                <p className="project-tagline">{proj.data.tagline}</p>
              </div>
              
              <div className="project-thumb">
                <img src={proj.image} alt={proj.title} />
              </div>
            </div>
          ))}
        </div>
        
        {activeProject && (
          <div 
            className="project-details-modal"
            onClick={(e) => {
              if (e.target.className === 'project-details-modal') {
                setActiveProject(null);
              }
            }}
          >
            <div className="modal-content">
              <button className="close-modal" onClick={() => setActiveProject(null)}>×</button>
              {activeProject.type === 'frontend' ? (
                <Frontend project={activeProject.data} />
              ) : (
                <Product project={activeProject.data} />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;
