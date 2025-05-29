import React from 'react';
import './Frontend.css';
import image6 from '../../assets/6.png'; // adjust path if needed

export const frontendProjects = [
  {
    title: 'Folklore WP Plugin',
    tagline: 'Directory browsing made easier.',
    duration: 'Jan 2025 – Present',
    tech: 'PHP, SCSS, JS, WordPress Hooks',
    footerText: 'this proj',
    images: [image6]
  },
  {
    title: 'Career Cupid',
    tagline: 'Matching careers to personalities through design.',
    duration: 'Sep 2023',
    tech: 'Figma, Notion, SurveyMonkey',
    link: 'https://drive.google.com/file/d/197BKYaPxJ_8sN4zhQL7rzrWNJO-0vhIA/view'
  },
  {
    title: 'AIMS Website',
    tagline: 'The digital home for our RSO.',
    duration: 'Sept 2024 – Present',
    tech: 'WordPress',
    link: 'https://aims.ischool.uw.edu/'
  },
  {
    title: 'Hunch Website',
    tagline: 'Turn book ideas into conversations.',
    duration: 'Mar 2022 – Apr 2023',
    tech: 'React, Firebase, Figma',
    link: 'https://hunch.in/'
  },
  {
    title: 'PlotX Website',
    tagline: 'Predict the future, decentralized.',
    duration: 'Jul 2022 – Aug 2023',
    tech: 'Next.js, Styled Components, Web3.js',
    link: 'https://plotx.io/'
  }
];

const Frontend = ({ project }) => {
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

        <div className="row"><strong>Duration:</strong> {project.duration}</div>
        <div className="row"><strong>Tools:</strong> {project.tech}</div>

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

export default Frontend;
