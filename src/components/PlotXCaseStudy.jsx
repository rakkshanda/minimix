import CaseStudyTemplate from './CaseStudyTemplate';
import plotx from '../assets/plotx.png';

const UsersIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const EngageIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
);
const BoltIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const TimerIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const TrophyIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
  </svg>
);

const config = {
  bodyClass: 'plotx-page',
  accent: '#c94f7c',
  eyebrow: 'PlotX / Case Study',
  title: 'Scaling a real-time crypto quiz engine to 100K+ concurrent users.',
  lede: 'A gamified prediction market platform built on React and WebSockets - live leaderboards, countdown timers, and a quiz engine that stayed fast under heavy load.',
  liveLink: 'https://plotx.io/',
  liveLinkText: 'View live site',
  heroImage: plotx,
  heroImageAlt: 'PlotX crypto prediction platform interface',
  snapshot: [
    { label: 'Role',     value: 'Software Engineer, Front-end' },
    { label: 'Client',   value: 'PlotX' },
    { label: 'Type',     value: 'Frontend Development' },
    { label: 'Duration', value: 'Jun 2022 - Aug 2023' },
    { label: 'Tools',    value: 'React, WebSockets, SCSS, AngularJS' },
    { label: 'Live site', value: 'plotx.io', link: 'https://plotx.io/' },
  ],
  outcomes: [
    { icon: <UsersIcon />,  value: '100K+', label: 'concurrent users supported',        sub: 'Real-time quiz engine under live load' },
    { icon: <EngageIcon />, value: '20%',   label: 'increase in user engagement',       sub: 'Post-launch vs. prior quarter' },
    { icon: <BoltIcon />,   value: '<100ms',label: 'UI update latency via WebSockets',  sub: 'Countdown and score updates in real time' },
    { icon: <TimerIcon />,  value: 'Live',  label: 'countdown timers per active round', sub: 'Synced across all connected clients' },
    { icon: <TrophyIcon />, value: 'Top 3', label: 'leaderboard visible at all times',  sub: 'Gamified ranking drives re-engagement' },
  ],
  tldr: 'PlotX is a crypto-fantasy trivia platform where users predict market outcomes in real-time quiz rounds. I built and scaled the front-end quiz engine using React and WebSockets, handling 100K+ concurrent users with synchronized countdown timers, live score updates, and a gamified leaderboard. The challenge was keeping the UI consistent and fast across all connected clients while the server pushed rapid state changes. The result was a 20% lift in engagement driven by the competitive, real-time format.',
  discovery: {
    heading: 'Users wanted competition, not just predictions.',
    intro: 'PlotX had a prediction market mechanic that worked, but session depth was low. Users would place one prediction and leave. The data pointed to a lack of hooks that kept people in a session.',
    methods: [
      'Reviewed session depth analytics - average session was under 2 minutes',
      'Analyzed drop-off points across the prediction flow',
      'Benchmarked real-time quiz formats from gaming and fintech competitors',
      'Reviewed user feedback threads requesting "more ways to compete"',
    ],
    findings: [
      { title: 'Single predictions felt low-stakes.', body: 'One prediction per session gave users no reason to stay. A quiz round format created urgency and a reason to see results.' },
      { title: 'Leaderboards are the strongest retention hook in gaming.', body: 'Competitive ranking gives users a reason to return, beat their score, and stay for the next round.' },
      { title: 'Countdown timers create commitment.', body: 'A visible timer shifts the mental frame from "I\'ll do this later" to "I need to answer now." Urgency drives completion.' },
      { title: 'Real-time sync was a hard requirement, not a nice-to-have.', body: 'If one user sees the countdown at 5 seconds and another at 8, the competition feels broken. Millisecond consistency across clients was non-negotiable.' },
    ],
  },
  ideation: {
    heading: 'A quiz engine that feels like a live game, not a form.',
    hmw: 'How might we build a prediction experience that keeps users engaged for a full quiz session, competing in real time, on a platform that needs to scale to 100K+ simultaneous participants?',
    archDecisions: [
      { decision: 'WebSockets over polling', why: 'Polling at quiz-round latency would have hammered the server. WebSockets pushed updates instantly at near-zero overhead' },
      { decision: 'React for UI state', why: 'Rapid, granular state updates (timer ticks, score changes, question transitions) are exactly what React\'s reconciler handles well' },
      { decision: 'Client-side timer with server sync', why: 'Running the countdown client-side prevents jank; periodic server sync prevents drift across clients' },
      { decision: 'Optimistic leaderboard updates', why: 'Show the user\'s own score change instantly; reconcile the full board on server confirmation to keep it feeling live' },
    ],
  },
  design: {
    heading: 'Fast, competitive, and consistent across 100K screens.',
    intro: 'Every component was designed to communicate urgency and progress without distracting from the prediction itself.',
    components: [
      { title: 'Real-time quiz engine', body: 'The core loop: question appears, countdown starts, user submits, score updates, next question. All transitions driven by WebSocket events with React handling local state between pushes.' },
      { title: 'Synchronized countdown timer', body: 'A client-side interval drives the visual countdown for smoothness. A server heartbeat corrects drift every 5 seconds, keeping all 100K+ clients within one second of each other.' },
      { title: 'Gamified leaderboard', body: 'Top 3 positions visible at all times with animated rank changes. User\'s own rank always pinned at the bottom of the visible list. Updates triggered on each round resolution.' },
      { title: 'Landing and marketing pages', body: 'Shipped landing and app pages using AngularJS and a structured SCSS architecture, improving performance, cross-browser compatibility, and SEO alongside the quiz feature work.' },
    ],
  },
  reflection: {
    heading: 'Scale forces honesty about every architectural shortcut.',
    intro: '100K concurrent users is a number that exposes every assumption. The WebSocket architecture held up; a few early UI decisions didn\'t.',
    workedWell: [
      { title: 'WebSocket-first from day one.', body: 'Starting with a real-time transport instead of retrofitting polling meant the architecture was honest about its requirements from the beginning.' },
      { title: 'Gamification metrics were direct and measurable.', body: 'Engagement up 20% is a clean signal. Leaderboards and timers created the competitive loop that drove it.' },
      { title: 'React\'s rendering model handled rapid state well.', body: 'Timer ticks, score diffs, and question transitions all fired rapidly and the UI stayed smooth because reconciliation was surgical.' },
    ],
    wouldChange: [
      { title: 'Load test the WebSocket layer earlier.', body: 'The 100K ceiling was discovered close to launch. Earlier stress testing would have surfaced connection pooling issues with more runway to fix them.' },
      { title: 'Abstract the timer into a shared hook sooner.', body: 'Three different components duplicated countdown logic before I extracted it. Should have been a hook from the first use.' },
    ],
    nextSteps: [
      'Seasonal tournaments with bracket-style elimination rounds',
      'Per-user performance analytics and prediction history',
      'Mobile app version with push notifications for round starts',
      'Crypto reward integration for top leaderboard finishers',
    ],
  },
  nextCase: { path: '/hunch', label: 'Hunch' },
};

export default function PlotXCaseStudy() {
  return <CaseStudyTemplate config={config} />;
}
