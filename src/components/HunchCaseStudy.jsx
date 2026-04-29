import CaseStudyTemplate from './CaseStudyTemplate';
import hunch from '../assets/hunch.png';
import hunch1 from '../assets/hunch1.png';

const RetentionIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
);
const MatchIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const MobileIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="2" width="14" height="20" rx="2"/>
    <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none"/>
  </svg>
);
const BehaviorIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
  </svg>
);
const NotifIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);

const config = {
  bodyClass: 'hunch-page',
  accent: '#c94f7c',
  eyebrow: 'Hunch / Case Study',
  title: 'Building the matching engine that kept users coming back.',
  lede: 'A behavior-driven personalization layer for Hunch, a social discovery app - analyzing what users engaged with to surface content and people they\'d actually want to see.',
  liveLink: 'https://hunch.in/',
  liveLinkText: 'View live site',
  heroImage: hunch,
  heroImageAlt: 'Hunch social discovery app interface',
  snapshot: [
    { label: 'Role',     value: 'Software Engineer, Front-end' },
    { label: 'Client',   value: 'Hunch' },
    { label: 'Type',     value: 'Mobile App / Social Platform' },
    { label: 'Duration', value: 'Jun 2022 - Aug 2023' },
    { label: 'Tools',    value: 'React, Node.js, Flutter, Figma' },
    { label: 'Live site', value: 'hunch.in', link: 'https://hunch.in/' },
  ],
  outcomes: [
    { icon: <RetentionIcon />, value: '15%',       label: 'improvement in user retention',       sub: 'Post-matching-engine rollout' },
    { icon: <MatchIcon />,     value: 'Behavior',  label: 'driven personalized match generation', sub: 'Based on interaction signals, not just profile data' },
    { icon: <MobileIcon />,    value: 'iOS + Android', label: 'Flutter build, one codebase',     sub: 'Consistent UI across both platforms' },
    { icon: <BehaviorIcon />,  value: 'Real-time', label: 'feed updates on interaction signals',  sub: 'Feed reorders as users engage' },
    { icon: <NotifIcon />,     value: 'Push',      label: 'notification patterns for new matches', sub: 'Accessible, non-intrusive notification flows' },
  ],
  tldr: 'Hunch is a social discovery app where users connect around shared interests. Retention was the core problem - users would sign up, browse a generic feed, and leave. I built the front-end matching engine using React and Node.js that analyzed user behavior (what they liked, skipped, and spent time on) to generate personalized matches and reorder the discovery feed in real time. User retention improved 15% after rollout. I also built and shipped front-end features in Flutter including accessible reading cards, community interaction flows, and notification patterns optimized for both Android and iOS.',
  discovery: {
    heading: 'Generic feeds don\'t build habits.',
    intro: 'Hunch\'s early retention data showed a classic social app pattern: strong Day 1 numbers, steep drop-off by Day 7. The feed felt the same on every visit, which removed the reason to return.',
    methods: [
      'Reviewed Day 1 / Day 7 / Day 30 retention cohort data',
      'Analyzed which content categories had the highest interaction rates',
      'Mapped the user flow from signup to first meaningful connection',
      'Reviewed session length distributions to identify engagement depth',
    ],
    findings: [
      { title: 'The feed was static.', body: 'New users saw the same ranked content as returning users. There was no signal that the app was learning what they liked.' },
      { title: 'Interaction data was being captured but not used.', body: 'Likes, skips, time-on-card, and comment actions were all logged - but none of it fed back into what each user saw next.' },
      { title: 'Day 7 retention was the critical drop-off point.', body: 'Users who made it past Day 7 had meaningfully higher long-term retention. The first week was the window to prove the app was worth returning to.' },
      { title: 'Personalization was table stakes for the target demographic.', body: 'Gen Z users compared every social feed to TikTok and Instagram. A non-personalized feed read as unsophisticated and not worth their time.' },
    ],
  },
  ideation: {
    heading: 'The feed should get smarter every time someone uses it.',
    hmw: 'How might we use the behavior data we\'re already capturing to make the discovery feed feel personal from the first session - and visibly improve with every interaction?',
    archDecisions: [
      { decision: 'Behavior signals over explicit preferences', why: 'Users don\'t fill out preference forms. What they actually do is a stronger signal than what they say they want.' },
      { decision: 'Client-side feed reordering', why: 'Immediate visual feedback on interaction builds the perception that the app is responsive and learning' },
      { decision: 'Node.js matching service', why: 'Kept the match-generation logic server-side for freshness, with client-side caching to avoid latency on feed open' },
      { decision: 'Flutter for cross-platform UI', why: 'Single codebase for iOS and Android with near-native performance reduced build time and ensured consistency' },
    ],
  },
  design: {
    heading: 'Every interaction teaches the feed something.',
    intro: 'The front-end work spanned two tracks: the matching engine integration and the core UI components that made interactions feel responsive and accessible.',
    components: [
      { title: 'Matching engine front-end', body: 'Built the React layer that consumed match recommendations from the Node.js service and re-ranked feed items in real time. A skip counted as a negative signal; time-on-card and likes counted as positive. The feed visibly adapted.' },
      { title: 'Accessible reading cards', body: 'The core content unit of the app. Built in Flutter with proper semantic labels, tap targets meeting 44px minimum, and readable contrast ratios across light and dark modes.' },
      { title: 'Community interaction flows', body: 'Comment threads, reaction pickers, and share flows built for speed and one-handed use. Every interactive element visible and reachable in the thumb zone.' },
      { title: 'Notification patterns', body: 'Push notification flows designed to be useful rather than noisy - grouped by type, actionable from the notification itself, with clear opt-down controls.' },
    ],
    images: [
      { src: hunch,  alt: 'Hunch social app discovery feed' },
      { src: hunch1, alt: 'Hunch app interaction and community view' },
    ],
  },
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
    nextSteps: [
      'Explicit interest tags that users can add to seed cold-start personalization',
      'A "why am I seeing this?" explainability layer for the feed',
      'Cross-community match recommendations beyond a user\'s followed categories',
      'Collaborative filtering to surface content liked by similar users',
    ],
  },
  nextCase: { path: '/visiondefect', label: 'VisionDefect AI' },
};

export default function HunchCaseStudy() {
  return <CaseStudyTemplate config={config} />;
}
