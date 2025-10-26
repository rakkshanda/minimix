import React from 'react';
import './Frontend.css';

export const productProjects = [
  {
    title: 'Netflix',
    tagline: 'Retention strategy through binge experience optimization.',
    description: 'Product case study focused on engagement-driven features for Netflix users.',
    duration: 'Apr 2023 – May 2023',
    tech: 'Figma, Excel, User Research',
    type: 'Product Case Study',
    agency: 'Independent Study',
    objective: 'Improve retention and binge rate by recommending relevant next-episode experiences.',
    process: 'Analyzed user feedback, ideated personalized nudges, designed mobile-first UI.',
    audience: 'Casual mobile Netflix users under 30'
  },
  {
    title: 'Duolingo',
    tagline: 'Gamified nudges to boost daily learning streaks.',
    description: 'Retention-driven case study around gamification and user personas.',
    duration: 'Jun 2023 – Jul 2023',
    tech: 'Figma, Surveys, A/B Testing',
    type: 'UX Strategy',
    agency: 'Personal Project',
    objective: 'Improve user retention for Duolingo’s daily learners',
    process: 'Studied user streak behavior and designed “streak shield” mechanics',
    audience: 'Language learners who stop after 3 days'
  },
  {
    title: 'Career Cupid',
    tagline: 'Matching careers to personalities through design.',
    description: 'A matchmaking-style career tool built during the Tapia Designathon.',
    duration: 'Sep 2023',
    tech: 'Figma, Notion, SurveyMonkey',
    type: 'Hackathon Project',
    agency: 'Tapia Conference',
    objective: 'Help job seekers discover roles based on values and work styles',
    process: 'Built match system with visual profile cards and sliders',
    audience: 'College seniors exploring first jobs',
     link: 'https://drive.google.com/file/d/197BKYaPxJ_8sN4zhQL7rzrWNJO-0vhIA/view' 
  },
  {
    title: 'ClaimRunner',
    tagline: 'Streamlining legal small claims in auto disputes.',
    description: 'Legal claim assistant app to guide users through automobile disputes.',
    duration: 'Mar 2024 – Apr 2024',
    tech: 'React, SCSS, JSON',
    type: 'Web App',
    agency: 'Capstone',
    objective: 'Help users check claim eligibility and submit court-ready forms',
    process: 'Built multi-step form with eligibility logic and downloadable output',
    audience: 'Auto owners with unresolved accidents'
  },
  {
    title: 'Hackathon RevereXR',
    tagline: 'Recreating civil rights history with immersive storytelling.',
    description: 'Runner-up XR hack to build empathy through interactive history.',
    duration: 'Jan 2024',
    tech: 'Unity, Figma, Adobe Aero',
    type: 'XR Prototype',
    agency: 'RevereXR Hackathon',
    objective: 'Let users walk through civil rights protests in VR',
    process: 'Created VR narrative flow + rough spatial walkthrough',
    audience: 'Students ages 13–20 in history courses'
  }
];

const Product = ({ project }) => {
  if (!project) return null;

  return (
    <div className="frontend-project-wrapper">
      <div className="frontend-left">
        <h2>{project.title}</h2>
        <p className="tagline">{project.tagline}</p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="view-link-button"
          >
            View Here
          </a>
        )}

        {/* <div className="row"><strong>Timeline:</strong> {project.duration}</div> */}
        {/* <div className="row"><strong>Tools:</strong> {project.tech}</div> */}
        <div className="row"><strong>Type:</strong> {project.type}</div>
        <div className="row"><strong>Agency:</strong> {project.agency}</div>

        <div className="section"><h4>Objective</h4><p>{project.objective}</p></div>
        <div className="section"><h4>Process</h4><p>{project.process}</p></div>
        <div className="section"><h4>Audience</h4><p>{project.audience}</p></div>

        {project.footerText && (
          <div className="footer-section">
            <p>{project.footerText}</p>
          </div>
        )}

        {project.images && project.images.length > 0 && (
          <div className="image-gallery">
            {project.images.map((img, index) => (
              <img key={index} src={img} alt={`Screenshot ${index + 1}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
