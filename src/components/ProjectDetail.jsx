import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';
import { frontendProjects, productProjects } from './projects/allProjects';

const ProjectDetail = ({ isProduct = false }) => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const slugify = (title) => title.toLowerCase().replace(/\s+/g, '-');

  // Set body background to black for this page
  React.useEffect(() => {
    document.body.style.backgroundColor = '#000';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  // Scroll to top when page loads
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const buildProjectList = () => {
    if (!isProduct) return frontendProjects;

    const combined = [
      ...frontendProjects.slice(0, 3),
      ...productProjects,
      ...frontendProjects.slice(3)
    ];

    const seen = new Set();
    return combined.filter((proj) => {
      const slug = slugify(proj.title);
      if (seen.has(slug)) return false;
      seen.add(slug);
      return true;
    });
  };

  // Product page shows custom order: frontendProjects (first 3) + productProjects + frontendProjects (rest)
  const projectList = buildProjectList();
  const project = projectList.find(p => 
    slugify(p.title) === projectId
  );

  const tabs = [
    { id: 'overview', label: project?.data.title.toUpperCase() || 'OVERVIEW' },
    { id: 'discovery', label: 'Discovery' },
    { id: 'ideation', label: 'Ideation' },
    { id: 'design', label: 'Design' },
    { id: 'reflection', label: 'Reflection' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveTab(sectionId);
    }
  };

  // Update active tab on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map(tab => tab.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tabs]);

  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="project-detail-content" style={{ marginTop: '140px' }}>
          <p style={{ color: '#999' }}>Project not found</p>
          <button 
            className="back-button" 
            onClick={() => navigate(-1)}
            style={{ marginTop: '20px', display: 'inline-block' }}
          >
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="project-detail-container">
        <button className="back-button-outside" onClick={() => navigate(-1)}>
          ← HOME
        </button>
        
        <div className="project-detail-header">
          <div className="project-detail-header-content">
            <div className="project-tabs">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <button className="back-to-top-outside" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          BACK TO TOP ↑
        </button>

        <div className="project-detail-content">
          <div id="overview" className="overview-section">
            <div className="overview-left">
                <h1 className="project-main-title">{project.data.title}</h1>
                
                <div className="project-brief">
                  <h3>BRIEF</h3>
                  <p>{project.data.tagline}</p>
                </div>

                <div className="project-info-grid">
                  <div className="info-column">
                    <div className="info-block">
                      <h4>SCOPE</h4>
                      <p>{project.data.type}</p>
                    </div>
                    
                    <div className="info-block">
                      <h4>TEAM</h4>
                      <p>{project.data.agency}</p>
                    </div>
                  </div>

                  <div className="info-column">
                    <div className="info-block">
                      <h4>DURATION</h4>
                      <p>{project.data.duration}</p>
                    </div>

                    {project.data.tech && (
                      <div className="info-block">
                        <h4>TOOLS</h4>
                        <p>{Array.isArray(project.data.tech) ? project.data.tech.join(', ') : project.data.tech}</p>
                      </div>
                    )}
                  </div>
                </div>

                {project.data.objective && (
                  <div className="project-section">
                    <h4>OBJECTIVE</h4>
                    <p>{project.data.objective}</p>
                  </div>
                )}

                {project.data.process && (
                  <div className="project-section">
                    <h4>PROCESS</h4>
                    <p>{project.data.process}</p>
                  </div>
                )}

                {project.data.audience && (
                  <div className="project-section">
                    <h4>TARGET AUDIENCE</h4>
                    <p>{project.data.audience}</p>
                  </div>
                )}

                {project.data.link && (
                  <a
                    href={project.data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-button"
                  >
                    View here →
                  </a>
                )}

                {project.data.footerText && (
                  <div className="project-footer">
                    <p>{project.data.footerText}</p>
                  </div>
                )}
              </div>

              <div className="overview-right">
                {project.data.images && project.data.images.length > 0 && (
                  <div className="project-images">
                    {project.data.images.map((img, index) => (
                      <img key={index} src={img} alt={`${project.data.title} screenshot ${index + 1}`} />
                    ))}
                  </div>
                )}
              </div>
            </div>

          {project.data.discovery && (
            <div id="discovery" className="tab-content section-spacing">
              <h2>Discovery</h2>
              <div className="section-content">
                {project.data.discovery.content && (
                  <>
                    <h3>Research & Analysis</h3>
                    <p>{project.data.discovery.content}</p>
                  </>
                )}
                {project.data.discovery.findings && project.data.discovery.findings.length > 0 && (
                  <>
                    <h3>Key Findings</h3>
                    <ul>
                      {project.data.discovery.findings.map((finding, index) => (
                        <li key={index}>{finding}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          )}

          {project.data.ideation && (
            <div id="ideation" className="tab-content section-spacing">
              <h2>Ideation</h2>
              <div className="section-content">
                {project.data.ideation.content && (
                  <>
                    <h3>Brainstorming & Concept Development</h3>
                    <p>{project.data.ideation.content}</p>
                  </>
                )}
                {project.data.ideation.approach && project.data.ideation.approach.length > 0 && (
                  <>
                    <h3>Solution Approach</h3>
                    <ul>
                      {project.data.ideation.approach.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          )}

          {project.data.design && (
            <div id="design" className="tab-content section-spacing">
              <h2>Design + Refinement</h2>
              <div className="section-content">
                {project.data.design.content && (
                  <>
                    <h3>Visual Design & Implementation</h3>
                    <p>{project.data.design.content}</p>
                  </>
                )}
                {project.data.design.decisions && project.data.design.decisions.length > 0 && (
                  <>
                    <h3>Design Decisions</h3>
                    <ul>
                      {project.data.design.decisions.map((decision, index) => (
                        <li key={index}>{decision}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          )}

          {project.data.reflection && (
            <div id="reflection" className="tab-content section-spacing">
              <h2>Reflection</h2>
              <div className="section-content">
                {project.data.reflection.learnings && (
                  <>
                    <h3>Learnings & Impact</h3>
                    <p>{project.data.reflection.learnings}</p>
                  </>
                )}
                {project.data.reflection.takeaways && project.data.reflection.takeaways.length > 0 && (
                  <>
                    <h3>Key Takeaways</h3>
                    <ul>
                      {project.data.reflection.takeaways.map((takeaway, index) => (
                        <li key={index}>{takeaway}</li>
                      ))}
                    </ul>
                  </>
                )}
                {project.data.reflection.future && (
                  <>
                    <h3>What I'd Do Differently</h3>
                    <p>{project.data.reflection.future}</p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
