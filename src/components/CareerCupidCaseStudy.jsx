import CaseStudyTemplate from './CaseStudyTemplate';
import cc from '../assets/cc.gif';

const ResearchIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const UsersIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const SwipeIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
  </svg>
);
const OverwhelmedIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);
const MatchIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const config = {
  bodyClass: 'career-cupid-page',
  accent: '#c94f7c',
  eyebrow: 'Career Cupid / Case Study',
  title: 'What if finding a career felt more like finding a match?',
  lede: 'A research-driven UX project that reframed career exploration as a personality-first matching experience for college seniors overwhelmed by generic job boards.',
  liveLink: 'https://rakshanda.my.canva.site/career-cupid',
  liveLinkText: 'View project',
  heroImage: cc,
  heroImageAlt: 'Career Cupid swipe-based career discovery interface',
  snapshot: [
    { label: 'Role',     value: 'UX Researcher + Interaction Designer' },
    { label: 'Client',   value: 'Academic Group Project' },
    { label: 'Type',     value: 'UX Research + Interaction Design' },
    { label: 'Duration', value: '3 months' },
    { label: 'Tools',    value: 'Figma, Miro, Optimal Workshop' },
    { label: 'Live site', value: 'View prototype', link: 'https://rakshanda.my.canva.site/career-cupid' },
  ],
  outcomes: [
    { icon: <ResearchIcon />, value: '30+',  label: 'college seniors interviewed',              sub: 'Across majors and career stages' },
    { icon: <OverwhelmedIcon />, value: '78%', label: 'felt overwhelmed by generic job listings', sub: 'Survey finding across 30 participants' },
    { icon: <SwipeIcon />,    value: 'Swipe', label: 'based career discovery flow',             sub: 'Card interface inspired by dating app patterns' },
    { icon: <MatchIcon />,    value: 'Match', label: 'score based on values, not just skills',  sub: 'Work culture and personality alignment weighted equally' },
    { icon: <UsersIcon />,    value: '3',     label: 'validated personas driving design decisions', sub: 'Derived from interview synthesis' },
  ],
  tldr: 'Career Cupid is an academic UX group project that started from a single observation: traditional job boards optimize for skills matching and completely ignore personality fit, work culture alignment, and work-life balance preferences - which turned out to be what college seniors actually cared about most. I led the user research track, conducting 30+ interviews with college seniors and synthesizing the findings into three personas. The core insight that shaped the design: users didn\'t want to search for jobs. They wanted someone (or something) to match them. We reframed the entire experience around a card-based, swipe-based matching mechanic and built an interactive prototype in Figma.',
  discovery: {
    heading: 'Students weren\'t bad at job searching. The tools were bad at understanding them.',
    intro: 'Before sketching a single screen, I spent four weeks in research mode - interviewing seniors, running surveys, and observing how people actually used LinkedIn, Indeed, and Handshake.',
    methods: [
      'Semi-structured interviews with 30+ college seniors across 8 majors',
      'Survey measuring pain points ranked by frequency and severity',
      'Observational study: watched 6 participants conduct a real job search',
      'Competitive analysis of LinkedIn, Indeed, Handshake, and Glassdoor',
      'Card sorting exercise to understand how students mentally categorize careers',
    ],
    findings: [
      { title: '78% felt overwhelmed by generic job listings.', body: 'The volume of results was the first barrier, not the quality of any single listing. Students described opening 20 tabs and closing all of them.' },
      { title: 'Work culture mattered more than salary.', body: 'When asked to rank what they cared about in a first job, students consistently ranked "culture fit" and "values alignment" above compensation. No existing tool surfaced this signal.' },
      { title: 'Students wanted to be matched, not to search.', body: 'The most consistent theme across interviews was passivity - students described their ideal experience as "something that just tells me what I\'d be good at." The mental model was closer to dating apps than job boards.' },
      { title: 'Existing tools lacked transparency about day-to-day reality.', body: 'Job descriptions communicate requirements and responsibilities. Almost none communicated what Tuesday at 2pm actually feels like in that role - which is what students wanted to know.' },
    ],
  },
  ideation: {
    heading: 'Stop making students act like recruiters. Match them instead.',
    hmw: 'How might we redesign the career exploration experience so that a college senior discovers roles that fit who they are - not just what they\'ve done - in a format that feels engaging rather than overwhelming?',
    archDecisions: [
      { decision: 'Card-based swipe mechanic over search', why: 'Search requires users to know what they\'re looking for. Cards present options one at a time, lowering cognitive load and creating a clear decision per card' },
      { decision: 'Personality quiz as the entry point', why: 'Collecting values and work style preferences upfront means first results are already personalized - no cold start problem' },
      { decision: 'Match score, not ranking', why: 'A percentage match externalizes the "why" and invites exploration rather than a definitive yes/no ranking that feels authoritative' },
      { decision: 'Save and revisit over apply now', why: 'College seniors are exploring, not deciding. A "save match" action respects the exploratory mindset and reduces commitment anxiety' },
    ],
  },
  design: {
    heading: 'Playful enough to feel approachable. Structured enough to feel credible.',
    intro: 'The visual design had to balance warmth and engagement (so students wouldn\'t feel like they were doing homework) with clarity and credibility (so they\'d trust the results).',
    components: [
      { title: 'Career match cards', body: 'Each card surfaced: role title, industry, a one-sentence "what you\'d actually do," a culture-fit score, and three values tags. Designed for 5-second comprehension. Swipe right to save, left to skip.' },
      { title: 'Personality quiz onboarding', body: 'A 7-question interactive quiz that established work style, collaboration preference, and values alignment before showing any results. Results updated immediately on each answer.' },
      { title: 'Match score breakdown', body: 'Tapping a saved match revealed a breakdown: which values aligned, which didn\'t, and why the score was what it was. Transparency was a deliberate design choice to build trust.' },
      { title: 'Saved matches dashboard', body: 'A lightweight comparison view showing all saved roles side by side on the dimensions that mattered most to the user. Helped students have more informed conversations with advisors.' },
    ],
    images: [
      { src: cc, alt: 'Career Cupid swipe-based career matching interface with match score and values breakdown' },
    ],
  },
  reflection: {
    heading: 'Reframing the problem is the most important design move.',
    intro: 'We started with "help students find jobs better." We shipped a product around "help students understand what kind of work they\'d actually be happy doing." Those are different problems with very different solutions.',
    workedWell: [
      { title: 'Research-first kept us from building the obvious thing.', body: 'The obvious solution was a better search interface. Research revealed the actual problem was framing - students didn\'t know what to search for. That insight changed everything.' },
      { title: 'Gamification reduced anxiety around a high-stakes decision.', body: 'Framing career exploration as a matching game lowered the perceived stakes of each interaction. Students described the prototype as "fun" - which is not a word usually associated with job searching.' },
      { title: 'Transparent match scores built more trust than opaque recommendations.', body: 'Early prototypes just showed a match percentage. When we added the breakdown, participants said they trusted the results more - even when the score was lower.' },
    ],
    wouldChange: [
      { title: 'Test with students who are actively job searching, not just exploring.', body: 'Most participants were juniors in exploration mode. Testing with seniors under active deadline pressure would surface very different usability issues.' },
      { title: 'Connect to real job listings.', body: 'The biggest gap between the prototype and a real product is that "save match" ends at the career level, not at an actual open role. Integrating live listings would complete the loop.' },
    ],
    nextSteps: [
      'Integration with LinkedIn and Handshake job listings to bridge discovery to application',
      'Day-in-the-life video content from people in matched roles',
      'Advisor sharing - let students send match results to their career advisor',
      'Alumni match network - connect students with alumni in their matched career paths',
    ],
  },
  nextCase: { path: '/marketpulse', label: 'MarketPulse / Emerald Advisors' },
};

export default function CareerCupidCaseStudy() {
  return <CaseStudyTemplate config={config} />;
}
