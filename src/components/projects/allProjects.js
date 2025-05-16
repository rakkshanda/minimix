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
      tagline: 'Directory browsing made easier.',
      duration: 'Jan 2025 – Present',
      tech: 'PHP, SCSS, JS, WordPress Hooks',
      link: '',
      images: [folklore2]

    }
  },
    {
    title: 'AIMS website',
    image: aims,
    type: 'frontend',
    data: {
      title: 'AIMS website',
      tagline: 'Directory browsing made easier.',
      duration: 'Jan 2025 – Present',
      tech: 'PHP, SCSS, JS, WordPress Hooks',
      link: 'https://aims.ischool.uw.edu/',
      images: [aims]
    }
  },
  {
    title: 'Career Cupid',
    image: cupid,
    type: 'frontend',
    data: {
      title: 'Career Cupid',
      tagline: 'Matching careers to personalities through design.',
      duration: 'Sep 2023',
      tech: 'Figma, Notion, SurveyMonkey',
      // link: 'https://drive.google.com/file/d/197BKYaPxJ_8sN4zhQL7rzrWNJO-0vhIA/view',
      link:'https://testingtestingonetwothreeforsphproject.my.canva.site/career-cupid',
     images: [cupid]

    }
  },
  {
    title: 'Hunch Website',
    image: hunch,
    type: 'frontend',
    data: {
      title: 'Hunch Website',
      tagline: 'Turn book ideas into conversations.',
      duration: 'Mar 2022 – Apr 2023',
      tech: 'Flutter, Figma',
      link: 'https://hunch.in/',
      // footerText: 'this proj',
      images: [hunch]
    }
  },
   {
    title: 'PlotX website',
    image: plotx,
    type: 'frontend',
    data: {
      title: 'PlotX website',
      tagline: 'Directory browsing made easier.',
      duration: 'Mar 2022 – Apr 2023',
      tech: 'AngularJS, SCSS',
      link: 'https://plotx.io/',
      images: [plotx]
    }
  },
];
