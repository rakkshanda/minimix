import React from 'react';
import { standardizeLocation } from '../utils/locationUtils';
import './WorkExperience.css';

// Sample work experience data - locations will be automatically standardized
const workExperienceData = [
  {
    id: 1,
    company: 'Emerald Advisors Group',
    location: 'seattle',  // Will be standardized to "Seattle, WA"
    role: 'Software Developer',
    duration: 'May 2025 – Aug 2025',
    description: 'Built Chrome extension with real-time financial news overlay and AI sentiment analysis.',
    technologies: ['React', 'TypeScript', 'Chrome APIs', 'OpenAI API']
  },
  {
    id: 2,
    company: 'University of Washington',
    location: 'Seattle, WA',  // Already standardized
    role: 'Web Developer',
    duration: 'Jan 2025 – Present',
    description: 'Developed WordPress sites and custom plugins for university departments.',
    technologies: ['WordPress', 'PHP', 'SCSS', 'JavaScript']
  }
  // Add more experiences as needed
];

const WorkExperience = () => {
  return (
    <div className="work-experience-container">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-list">
        {workExperienceData.map((job) => {
          // Standardize location automatically
          const standardizedLocation = standardizeLocation(job.location);
          
          return (
            <div key={job.id} className="experience-card">
              <div className="experience-header">
                <div className="experience-title-section">
                  <h3 className="company-name">{job.company}</h3>
                  <p className="job-role">{job.role}</p>
                </div>
                <div className="experience-meta">
                  <p className="location">{standardizedLocation}</p>
                  <p className="duration">{job.duration}</p>
                </div>
              </div>
              
              <p className="job-description">{job.description}</p>
              
              {job.technologies && job.technologies.length > 0 && (
                <div className="technologies">
                  {job.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperience;

