import React, { useState } from 'react';
import Navbar from './Navbar';
import '../App.css';
import './Portfolio.css';
import { allProjects } from './projects/allProjects';
import Frontend from './projects/Frontend';
import Product from './projects/Product';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(allProjects[0]);

  return (
    <>
      <Navbar />
      <div className="portfolio-layout">
        <aside className="image-sidebar">
          {allProjects.map((proj, idx) => (
            <div
              key={idx}
              className={`project-thumb ${proj.title === activeProject.title ? 'selected' : ''}`}
              onClick={() => setActiveProject(proj)}
            >
              <img src={proj.image} alt={proj.title} />
              <div className="hover-title">{proj.title}</div>
            </div>
          ))}
        </aside>

        <main className="portfolio-content">
          <div className="project-details">
            {activeProject.type === 'frontend' ? (
              <Frontend project={activeProject.data} />
            ) : (
              <Product project={activeProject.data} />
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Portfolio;
