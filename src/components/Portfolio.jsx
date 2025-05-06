import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../App.css';
import './Portfolio.css';
import { useSearchParams } from 'react-router-dom';
import Frontend, { frontendProjects } from './projects/Frontend';
import Product, { productProjects } from './projects/Product';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [activeProject, setActiveProject] = useState(frontendProjects[0]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    const projectParam = searchParams.get('project');

    if (tabParam === 'product') {
      setActiveTab('product');
      const found = productProjects.find(
        (p) => p.title === decodeURIComponent(projectParam)
      );
      if (found) setActiveProject(found);
    } else {
      setActiveTab('frontend');
      const found = frontendProjects.find(
        (p) => p.title === decodeURIComponent(projectParam)
      );
      if (found) setActiveProject(found);
    }
  }, [searchParams]);

  const handleTabClick = (type, project) => {
    setActiveTab(type);
    setActiveProject(project);
    setSearchParams({ tab: type, project: encodeURIComponent(project.title) });
  };

  const currentProjects = activeTab === 'frontend' ? frontendProjects : productProjects;

  return (
    <>
      <Navbar />
      <div className="portfolio-layout">
        <aside className="sidebar">
          <button
            className={activeTab === 'frontend' ? 'active' : ''}
            onClick={() => handleTabClick('frontend', frontendProjects[0])}
          >
            Frontend
          </button>
          <button
            className={activeTab === 'product' ? 'active' : ''}
            onClick={() => handleTabClick('product', productProjects[0])}
          >
            Product
          </button>
        </aside>

        <main className="portfolio-content">
          <div className="tabs">
            {currentProjects.map((proj) => (
              <button
                key={proj.title}
                className={`tab ${proj.title === activeProject.title ? 'active' : ''}`}
                onClick={() => handleTabClick(activeTab, proj)}
              >
                {proj.title}
              </button>
            ))}
          </div>

          <div className="project-details">
            {activeTab === 'frontend' ? (
              <Frontend project={activeProject} />
            ) : (
              <Product project={activeProject} />
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Portfolio;
