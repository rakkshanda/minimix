import folklore from '../../assets/folklore.png';
import cupid from '../../assets/cupid.png';
import hunch from '../../assets/hunch.png';
import aims from '../../assets/aims.png';
import folklore2 from '../../assets/6.png';
import plotx from '../../assets/plotx.png';

export const allProjects = [
  {
    title: 'Folklore',
    image: folklore,
    type: 'frontend',
    data: {
      title: 'Folklore WP Plugin',
      tagline: 'A modern plugin for faster, smarter directory access.',
      duration: 'Jan 2025 – Present',
      tech: 'PHP, SCSS, JS, WordPress Hooks',
      link: '',
      images: [folklore2],
      footerText: 'Custom-built WordPress plugin for UW directory search, featuring toggleable views, isolated SCSS styling, and future Google Sheets integration.'
    }
  },
  {
    title: 'AIMS website',
    image: aims,
    type: 'frontend',
    data: {
      title: 'AIMS website',
      tagline: 'A student-led site to promote events and resources.',
      duration: 'Jan 2025 – Present',
      tech: 'PHP, SCSS, JS, WordPress Hooks',
      link: 'https://aims.ischool.uw.edu/',
      images: [aims],
      footerText: 'Designed and developed the official AIMS website for UW iSchool student organization, integrating dynamic content, sponsor highlights, and event pages.'
    }
  },
  {
    title: 'Career Cupid',
    image: cupid,
    type: 'frontend',
    data: {
      title: 'Career Cupid',
      tagline: 'A research-driven platform connecting personalities to careers.',
      duration: 'Sep 2023',
      tech: 'Figma, Notion, SurveyMonkey',
      link: 'https://testingtestingonetwothreeforsphproject.my.canva.site/career-cupid',
      images: [cupid],
      footerText: 'Developed as a capstone UX project, Career Cupid maps user personalities to ideal careers using visual storytelling and data from surveys and interviews.'
    }
  },
  {
    title: 'Hunch Website',
    image: hunch,
    type: 'frontend',
    data: {
      title: 'Hunch Website',
      tagline: 'A social platform for readers to discover and discuss ideas.',
      duration: 'Mar 2022 – Apr 2023',
      tech: 'Flutter, Figma',
      link: 'https://hunch.in/',
      images: [hunch],
      footerText: 'Worked on Hunch’s front-end to create engaging reading experiences and community features, promoting books and author conversations across devices.'
    }
  },
  {
    title: 'PlotX website',
    image: plotx,
    type: 'frontend',
    data: {
      title: 'PlotX website',
      tagline: 'A responsive, data-rich portal for blockchain predictions.',
      duration: 'Mar 2022 – Apr 2023',
      tech: 'AngularJS, SCSS',
      link: 'https://plotx.io/',
      images: [plotx],
      footerText: 'Led front-end development for PlotX’s landing and app pages, optimizing speed and SEO while delivering real-time crypto prediction interfaces.'
    }
  },
];
