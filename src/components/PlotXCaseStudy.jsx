import CaseStudyTemplate from './CaseStudyTemplate';
import plotx from '../assets/plotx.png';
import plotxGif from '../assets/gifs/plotx.gif';

const config = {
  bodyClass: 'plotx-page',
  accent: '#c94f7c',
  eyebrow: 'PlotX',
  title: 'Scaling a real-time crypto quiz engine to 100K+ concurrent users.',
  lede: 'A gamified prediction market platform built on React and WebSockets - live leaderboards, countdown timers, and a quiz engine that stayed fast under heavy load.',
  liveLink: 'https://plotx.io/',
  liveLinkText: 'View',
  heroImage: plotx,
  heroImageAlt: 'PlotX crypto prediction platform interface',
  snapshot: [
    { label: 'Role',      value: 'Software Engineer, Front-end' },
    { label: 'Client',    value: 'PlotX' },
    { label: 'Type',      value: 'Frontend Development' },
    { label: 'Duration',  value: 'Jun 2022 - Aug 2023' },
    { label: 'Tools',     value: 'React' },
    { label: 'Live site', value: 'plotx.io', link: 'https://plotx.io/' },
  ],
  reflection: {
    heading: 'Scale forces honesty about every architectural shortcut.',
    workedWell: [
      { title: 'WebSocket-first from day one.', body: 'Starting with a real-time transport instead of retrofitting polling meant the architecture was honest about its requirements from the beginning.' },
      { title: 'Gamification metrics were direct and measurable.', body: 'Engagement up 20% is a clean signal. Leaderboards and timers created the competitive loop that drove it.' },
      { title: 'React\'s rendering model handled rapid state well.', body: 'Timer ticks, score diffs, and question transitions all fired rapidly and the UI stayed smooth because reconciliation was surgical.' },
    ],
    wouldChange: [
      { title: 'Load test the WebSocket layer earlier.', body: 'The 100K ceiling was discovered close to launch. Earlier stress testing would have surfaced connection pooling issues with more runway to fix them.' },
      { title: 'Abstract the timer into a shared hook sooner.', body: 'Three different components duplicated countdown logic before I extracted it. Should have been a hook from the first use.' },
    ],
  },
  development: {
    label: 'Website',
    images: [
      { src: plotxGif, alt: 'PlotX live website' },
    ],
  },
  nextCase: { path: '/hunch', label: 'Hunch' },
};

export default function PlotXCaseStudy() {
  return <CaseStudyTemplate config={config} />;
}
