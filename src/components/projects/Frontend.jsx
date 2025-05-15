import React from 'react';
import './Frontend.css';

export const frontendProjects = [
  // {
  //   title: 'GitHub Metrics Tool',
  //   tagline: 'Track repo performance in one view.',
  //   description: 'This internal analytics dashboard was created to empower developers and engineering managers to visualize GitHub activity across multiple repositories. By aggregating commit frequency, pull request throughput, and issue resolution rates, the tool provides actionable insights to drive engineering velocity.',
  //   duration: 'Jan 2025 – Feb 2025',
  //   tech: 'Node.js, GitHub API, React, SCSS',
  //   objective: 'To simplify how developers understand repository health and team activity through meaningful visual metrics.',
  //   process: 'Integrated GitHub REST API with OAuth tokens, used ChartJS to plot trends, and applied conditional styling for activity alerts.',
  //   audience: 'Engineering managers, GitHub maintainers, and open-source contributors',
  // },
  {
    title: 'Folklore WP Plugin',
    tagline: 'Directory browsing made easier.',
    description: 'This WordPress plugin was developed for the University of Washington to help students, faculty, and staff search and browse the internal people directory with ease. Features include filterable categories, responsive grid and list views, and an admin interface for managing directory entries.',
    duration: 'Jan 2025 – Present',
    tech: 'PHP, SCSS, JS, WordPress Hooks',
    objective: 'Enable users to search, filter, and explore UW personnel details in an intuitive interface.',
    process: 'Created custom post types and taxonomies, developed filter dropdowns, and ensured the plugin followed accessibility guidelines.',
    audience: 'Current students, faculty administrators, prospective applicants'
     
  },
  // {
  //   title: 'KPI Dashboard',
  //   tagline: 'Visualizing university performance metrics.',
  //   description: 'An executive dashboard that consolidates performance indicators for departments within the university. It empowers leadership to track metrics like enrollment, retention, and research output through interactive data visualization panels.',
  //   duration: 'Oct 2024 – Dec 2024',
  //   tech: 'React, SCSS, React-Charts',
  //   objective: 'Reduce reporting bottlenecks by centralizing key performance data in one accessible interface.',
  //   process: 'Worked with stakeholders to determine data points, designed wireframes using Figma, and built chart components with React-Charts.',
  //   audience: 'University leadership, planning offices, department heads'
  // },
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
    title: 'AIMS Website',
    tagline: 'The digital home for our RSO.',
    description: 'The official website for the Association of Information Management Students (AIMS). Designed and maintained to promote events, attract new members, and facilitate communication with sponsors and the UW iSchool.',
    duration: 'Sept 2024 – Present',
    tech: 'WordPress',
    objective: 'Provide a centralized hub where members and sponsors can access event schedules, signup forms, and highlights.',
    process: 'Built responsive layouts, implemented an event calendar plugin, and integrated Google Forms for registrations.',
    audience: 'UW iSchool students, club officers, alumni, and industry partners',
          link: 'https://aims.ischool.uw.edu/' 

  },
  {
    title: 'Hunch Website',
    tagline: 'Turn book ideas into conversations.',
    description: 'Hunch is a passion project designed to rethink the social reading experience. It enables users to jot down reflections, create micro-reviews, and form clubs around themes rather than titles—making book discussions more organic.',
    duration: 'Mar 2022 – Apr 2023',
    tech: 'React, Firebase, Figma',
    objective: 'Create a lightweight Goodreads alternative centered on ideas, not just titles.',
    process: 'Built personas of casual readers, wireframed reading paths, and implemented Google Auth for login.',
    audience: 'Readers looking for deeper dialogue without traditional reviews',
     link: 'https://hunch.in/' 
  },
  {
    title: 'PlotX Website',
    tagline: 'Predict the future, decentralized.',
    description: 'This Web3 marketing site was built for PlotX—a decentralized prediction market protocol. The site aimed to onboard new users, explain crypto concepts, and feature upcoming prediction markets with embedded interactions.',
    duration: 'Jul 2022 – Aug 2023',
    tech: 'Next.js, Styled Components, Web3.js',
    objective: 'Simplify onboarding and highlight PlotX features for new blockchain users.',
    process: 'Created animated intro flows, explained tokenomics visually, and included wallet connect and FAQ sections.',
    audience: 'Crypto enthusiasts, DeFi traders, and Web3 newcomers',
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
        <div className="row"><strong>Timeline:</strong> {project.duration}</div>
        <div className="row"><strong>Tools:</strong> {project.tech}</div>

        <div className="section"><h4>Description</h4><p>{project.description}</p></div>
        <div className="section"><h4>Objective</h4><p>{project.objective}</p></div>
        <div className="section"><h4>Process</h4><p>{project.process}</p></div>
        <div className="section"><h4>Audience</h4><p>{project.audience}</p></div>
      </div>
    </div>
  );
};

export default Frontend;
