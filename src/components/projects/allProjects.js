import folklore from '../../assets/folklore.png';
import cupid from '../../assets/cupid.png';
import hunch from '../../assets/hunch.png';
import aims from '../../assets/aims.png';
import folklore2 from '../../assets/6.png';
import plotx from '../../assets/plotx.png';
import hf from '../../assets/HF.png';
import revere from '../../assets/revere.png';
import emerald from '../../assets/Emerald.png';
import eag from '../../assets/eag.gif';

// Product Projects (1, 2, 3, 4) - shown at /product
export const productProjects = [
  {
    title: 'Career Cupid',
    image: cupid,
    type: 'product',
    data: {
      title: 'Career Cupid',
      tagline: 'A research-driven platform connecting personalities to careers.',
      duration: '3 months',
      tech: 'Figma, Miro',
      link: 'https://rakshanda.my.canva.site/career-cupid',
      images: [cupid],
      type: 'UX Research Project',
      agency: 'Academic Project',
      objective: 'Help job seekers discover roles based on values and work styles',
      process: 'Led user research through surveys and interviews, created personas, and designed interactive prototypes',
      audience: 'College seniors exploring first jobs',
      footerText: 'Developed as part of a UX group project, Career Cupid is a web-based tool that connects user personalities to career paths. Led user research through surveys and interviews, created personas, and designed interactive prototypes focused on clarity, engagement, and user retention.'
    }
  },
  {
    title: 'RevereXR',
    image: revere,
    type: 'product',
    data: {
      title: 'RevereXR',
      tagline: 'An immersive VR storytelling experience preserving community voices.',
      duration: '1 week',
      tech: 'Figma, Unity, Adobe Aero',
      link: 'https://www.figma.com/deck/TWpGrnvT12nqM13QzFMiYK/Choclate-factory--Copy-?node-id=1-95&t=T8XvV8XjhDi4Lvbp-1',
      images: [revere],
      type: 'XR Prototype',
      agency: 'RevereXR Hackathon (Finalist)',
      objective: 'Let users walk through civil rights protests in VR to preserve community history',
      process: 'Led user interviews, built immersive prototypes, and designed accessible, emotionally resonant user flows',
      audience: 'Students and community members interested in Black history',
      footerText: 'Finalist project for an XR hackathon, RevereXR captures the stories of elder Black business owners in a virtual space. Led user interviews, built immersive prototypes, and designed accessible, emotionally resonant user flows.'
    }
  },
  {
    title: 'Folklore',
    image: folklore,
    type: 'product',
    data: {
      title: 'Folklore WP Plugin',
      tagline: 'A modern plugin for faster, smarter directory access.',
      duration: '5 months',
      tech: 'Figma, Miro, Optimal workshop, PHP, SCSS, JS, WordPress Hooks',
      link: 'https://rakshanda.my.canva.site/folklore',
      images: [folklore2],
      type: 'Product Design & Development',
      agency: 'University of Washington',
      objective: 'Create a faster, more accessible directory search experience for UW',
      process: 'Conducted user research, designed toggleable views, developed custom WordPress plugin with isolated SCSS styling',
      audience: 'UW faculty, staff, and students',
      footerText: 'Custom-built WordPress plugin for UW directory search, featuring toggleable views, isolated SCSS styling, and future Google Sheets integration.'
    }
  },
  {
    title: 'Hugging Face landing page redesign',
    image: hf,
    type: 'product',
    data: {
      title: 'HuggingFace landing page redesign',
      tagline: 'Data-driven landing page overhaul that boosts retention and paid conversions.',
      duration: '1 week',
      tech: 'Figma',
      link: 'https://rakshanda.my.canva.site/hugging-face-redesign',
      images: [hf],
      type: 'Product Design Sprint',
      agency: 'Design Sprint Challenge (Finalist)',
      objective: 'Boost retention and paid conversions through improved information architecture',
      process: 'Reorganised information architecture, designed dual CTAs and a guided onboarding flow',
      audience: 'AI/ML developers and researchers',
      footerText: 'Three-day design sprint finalist: reorganised information architecture, dual CTAs and a guided onboarding flow projected to cut bounce rate by 22%.'
    }
  }
];

// Frontend Projects (3, 5, 6, 7) - shown at / (default)
export const frontendProjects = [
  {
    title: 'Financial Browser Extension',
    image: eag,
    type: 'frontend',
    data: {
      title: 'Emerald Advisors Chrome Extension',
      tagline: 'Real-time financial news dashboard with AI-powered sentiment analysis.',
      duration: 'May 2025 – Aug 2025',
      tech: 'React, Chrome Extension API, Java, ChatGPT API, Financial APIs',
      images: [emerald],
      footerText: 'Built a Chrome extension with financial API integrations that overlaid the firm\'s stock dashboard, enabling instant curated news fetch with sentiment tags, date filters, and impact sorting. Reduced analyst research time by 50%. Added an in-panel AI chatbot for contextual follow-ups within the same article using a ChatGPT-powered interface, delivers TL;DRs, risk highlights, and cited sources directly in the panel, reducing analyst context-switching.'
    }
  },
  // {
  //   title: 'UW IT KPI Dashboard',
  //   image: aims,
  //   type: 'frontend',
  //   data: {
  //     title: 'UW IT KPI Dashboard',
  //     tagline: 'Real-time data visualization dashboard for tracking key performance metrics.',
  //     duration: 'Oct 2024 – Aug 2025',
  //     tech: 'React, React Charts, Data Visualization',
  //     images: [],
  //     footerText: 'Built a real-time KPI visualization dashboard with multi-graph views and interactive filters, enabling data-driven tracking of traffic, engagement, and conversions while reducing reporting prep time by 40%.'
  //   }
  // },
  {
    title: 'Folklore',
    image: folklore,
    type: 'frontend',
    data: {
      title: 'Folklore WP Plugin',
      tagline: 'People\'s directory search plugin following UW brand guidelines.',
      duration: '5 months',
      tech: 'Figma, Miro, Optimal workshop, PHP, SCSS, JS, WordPress Hooks',
      link: 'https://rakshanda.my.canva.site/folklore',
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
      footerText: 'Worked on Hunch\'s front-end to create engaging reading experiences and community features, promoting books and author conversations across devices.'
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
      footerText: 'Led front-end development for PlotX\'s landing and app pages, optimizing speed and SEO while delivering real-time crypto prediction interfaces.'
    }
  }
];
