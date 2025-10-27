import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';
import { frontendProjects, productProjects } from './projects/allProjects';

const ProjectDetail = ({ isProduct = false }) => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

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

  const projectList = isProduct ? productProjects : frontendProjects;
  const project = projectList.find(p => 
    p.title.toLowerCase().replace(/\s+/g, '-') === projectId
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
                        <p>{project.data.tech}</p>
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
                    View Full Case Study →
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

          <div id="discovery" className="tab-content section-spacing">
            <h2>Discovery</h2>
            <div className="section-content">
              <h3>Research & Analysis</h3>
              <p>
                The discovery phase began with comprehensive user research to understand pain points and opportunities. Through interviews, surveys, and competitive analysis, we identified key insights that shaped the project direction.
              </p>
              <p>
                We conducted stakeholder interviews to align on business goals and user needs. This helped establish clear success metrics and informed our design decisions throughout the project lifecycle.
              </p>
              <h3>Key Findings</h3>
              <ul>
                <li>Users needed a more intuitive and streamlined experience</li>
                <li>Existing solutions lacked proper accessibility features</li>
                <li>There was a gap in the market for this specific use case</li>
                <li>Performance and speed were critical to user satisfaction</li>
              </ul>
            </div>
          </div>

          <div id="ideation" className="tab-content section-spacing">
            <h2>Ideation</h2>
            <div className="section-content">
              <h3>Brainstorming & Concept Development</h3>
              <p>
                During the ideation phase, we explored multiple approaches to solve the identified problems. Using techniques like design thinking workshops and rapid prototyping, we generated diverse solutions and narrowed down to the most promising concepts.
              </p>
              <p>
                We created user flows and wireframes to visualize the experience, iterating based on team feedback and early user testing. This collaborative approach ensured we considered various perspectives and edge cases.
              </p>
              <h3>Solution Approach</h3>
              <ul>
                <li>Prioritized simplicity and ease of use in the core user journey</li>
                <li>Designed for accessibility from the ground up</li>
                <li>Focused on performance optimization and fast load times</li>
                <li>Created a scalable system that could grow with user needs</li>
              </ul>
            </div>
          </div>

          <div id="design" className="tab-content section-spacing">
            <h2>Design + Refinement</h2>
            <div className="section-content">
              <h3>Visual Design & Implementation</h3>
              <p>
                The design phase brought our concepts to life with high-fidelity mockups and interactive prototypes. We established a cohesive design system with reusable components, ensuring consistency across all touchpoints.
              </p>
              <p>
                Through iterative user testing and feedback sessions, we refined the interface, interaction patterns, and visual hierarchy. Each iteration brought us closer to a polished, user-centered solution.
              </p>
              <h3>Design Decisions</h3>
              <ul>
                <li>Clean, modern interface that puts content first</li>
                <li>Responsive design that works seamlessly across all devices</li>
                <li>Intuitive navigation with clear information architecture</li>
                <li>Thoughtful use of color, typography, and white space</li>
              </ul>
            </div>
          </div>

          <div id="reflection" className="tab-content section-spacing">
            <h2>Reflection</h2>
            <div className="section-content">
              <h3>Learnings & Impact</h3>
              <p>
                This project reinforced the importance of user-centered design and iterative development. By staying close to our users throughout the process, we were able to create a solution that truly addressed their needs.
              </p>
              <p>
                Working with cross-functional teams taught me the value of clear communication and collaborative problem-solving. The constraints we faced pushed us to be creative and find innovative solutions.
              </p>
              <h3>Key Takeaways</h3>
              <ul>
                <li>Early and frequent user testing prevents costly redesigns later</li>
                <li>Simple solutions are often the most effective</li>
                <li>Accessibility considerations benefit all users, not just those with disabilities</li>
                <li>Data-driven decisions lead to better outcomes than assumptions</li>
              </ul>
              <h3>What I'd Do Differently</h3>
              <p>
                If I could revisit this project, I would allocate more time for the discovery phase to dig deeper into edge cases. I'd also implement more robust analytics earlier to better measure the impact of our design decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;

