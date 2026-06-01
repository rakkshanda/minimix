import CaseStudyTemplate from './CaseStudyTemplate';
import hunch from '../assets/hunch.png';
import hunch1 from '../assets/hunch1.png';
import h1 from '../assets/hunch/IMG_7248.PNG';
import h2 from '../assets/hunch/IMG_7249.PNG';
import h3 from '../assets/hunch/IMG_7250.PNG';
import h4 from '../assets/hunch/IMG_7251.PNG';
import h5 from '../assets/hunch/IMG_7252.PNG';
import h6 from '../assets/hunch/IMG_7254.PNG';

const config = {
  bodyClass: 'hunch-page',
  accent: '#c94f7c',
  eyebrow: 'Hunch',
  title: 'Building the app for Hunch',
  lede: 'A behavior-driven personalization layer for Hunch, a social discovery app - analyzing what users engaged with to surface content and people they\'d actually want to see.',
  liveLink: 'https://hunch.in/',
  liveLinkText: 'View',
  heroImage: hunch,
  heroImageAlt: 'Hunch social discovery app interface',
  snapshot: [
    { label: 'Role',      value: 'Software Engineer, Front-end' },
    { label: 'Client',    value: 'Hunch' },
    { label: 'Type',      value: 'Mobile App' },
    { label: 'Duration',  value: 'Jan 2023 - Aug 2023' },
    { label: 'Tools',     value: 'React' },
    { label: 'Live site', value: 'hunch.in', link: 'https://hunch.in/' },
  ],
  reflection: {
    heading: 'Personalization only works if users notice it.',
    intro: 'The technical work was straightforward. The harder problem was making the personalization feel visible enough that users understood the feed was changing for them.',
    workedWell: [
      { title: 'Behavior signals were a better input than surveys.', body: 'Passive signal collection (time-on-card, skips, interactions) gave a richer and more honest picture of user interests than any explicit preference form would have.' },
      { title: 'Flutter\'s single codebase paid off immediately.', body: 'Shipping the same reading card and interaction components on both iOS and Android without divergence saved significant QA time and kept the experience consistent.' },
      { title: 'Day 7 retention as the north star kept the team aligned.', body: 'A single metric everyone understood made tradeoff decisions easy. If a feature didn\'t plausibly move Day 7, it didn\'t get prioritized.' },
    ],
    wouldChange: [
      { title: 'Show users the personalization is happening.', body: 'Users didn\'t always notice the feed was changing. A subtle "based on your interests" label would have made the personalization legible and rewarded engagement.' },
      { title: 'A/B test the signal weights earlier.', body: 'The relative weight given to skips vs. time-on-card vs. likes was set by intuition initially. Earlier experimentation would have found the optimal mix faster.' },
    ],
  },
  development: {
    label: 'App',
    columns: 3,
    images: [
      { src: h1, alt: 'Hunch app screen 1' },
      { src: h2, alt: 'Hunch app screen 2' },
      { src: h3, alt: 'Hunch app screen 3' },
      { src: h4, alt: 'Hunch app screen 4' },
      { src: h5, alt: 'Hunch app screen 5' },
      { src: h6, alt: 'Hunch app screen 6' },
    ],
  },
  nextCase: { path: '/claimrunner', label: 'Claim Runner AI' },
};

export default function HunchCaseStudy() {
  return <CaseStudyTemplate config={config} />;
}
