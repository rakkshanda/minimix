import CaseStudyTemplate from './CaseStudyTemplate';
import hf from '../assets/HF.png';

const BounceIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
);
const UsersIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const CtaIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>
  </svg>
);
const SprintIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const DataIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

const config = {
  bodyClass: 'huggingface-page',
  accent: '#c94f7c',
  eyebrow: 'HuggingFace Redesign / Case Study',
  title: 'One landing page. Two completely different users. Both leaving.',
  lede: 'A 3-day design sprint that restructured HuggingFace\'s landing page for two personas with conflicting needs - projected to cut bounce rate by 22%.',
  liveLink: 'https://rakshanda.my.canva.site/hugging-face-redesign',
  liveLinkText: 'View project',
  heroImage: hf,
  heroImageAlt: 'HuggingFace redesigned landing page with dual CTA structure',
  snapshot: [
    { label: 'Role',     value: 'Product Designer' },
    { label: 'Client',   value: 'Design Sprint Challenge - Finalist' },
    { label: 'Type',     value: 'Product Design Sprint' },
    { label: 'Duration', value: '3 days' },
    { label: 'Tools',    value: 'Figma' },
    { label: 'Live site', value: 'View project', link: 'https://rakshanda.my.canva.site/hugging-face-redesign' },
  ],
  outcomes: [
    { icon: <BounceIcon />, value: '22%',     label: 'projected bounce rate reduction',        sub: 'Based on heatmap and session data analysis' },
    { icon: <UsersIcon />,  value: '2',       label: 'distinct user paths created',            sub: 'Developer path and newcomer path, both above the fold' },
    { icon: <CtaIcon />,    value: 'Dual',    label: 'CTA approach validated in user testing', sub: '"Start Building" and "Explore Models" tested with 6 participants' },
    { icon: <SprintIcon />, value: '3 days',  label: 'sprint to finalist submission',          sub: 'Idea to full Figma prototype' },
    { icon: <DataIcon />,   value: 'Data',    label: 'led from analytics and heatmaps',        sub: 'Not assumptions - actual drop-off data drove every decision' },
  ],
  tldr: 'HuggingFace had a 34% bounce rate on its landing page. Heatmap analysis revealed users were getting lost in dense technical content, and session recordings showed two completely different mental models arriving on the same page: experienced ML engineers who wanted direct access to tools, and newcomers who had no idea where to start. The existing single-path design failed both. In a 3-day sprint, I restructured the information architecture around two explicit user journeys, designed dual CTAs for each persona, and built a guided onboarding flow for newcomers. The redesign was a finalist in the sprint challenge and is projected to reduce bounce rate by 22%.',
  discovery: {
    heading: 'A 34% bounce rate with two completely different people in the room.',
    intro: 'HuggingFace\'s landing page had a traffic problem that looked like a design problem but was actually an architecture problem. The page was built for one user. Two very different users were showing up.',
    methods: [
      'Analyzed public HuggingFace analytics and bounce rate data',
      'Reviewed heatmaps and scroll depth recordings from available sessions',
      'Ran 3 lightweight user interviews with ML engineers and AI newcomers',
      'Conducted a heuristic evaluation against the existing page structure',
    ],
    findings: [
      { title: 'Two distinct user types with opposite needs.', body: 'ML engineers wanted direct access to models and APIs. Newcomers needed to understand what HuggingFace even is before they could take any action. The page served neither well.' },
      { title: 'Dense technical content was causing decision paralysis.', body: 'Heatmaps showed users scanning the hero and then scrolling without clicking. The jargon density was high enough that even technical users hesitated.' },
      { title: 'The value proposition was unclear for non-technical visitors.', body: 'HuggingFace has significant non-technical stakeholders (managers, researchers, decision-makers) who arrived and couldn\'t quickly determine if the platform was relevant to them.' },
      { title: 'No guided path from "interested" to "using."', body: 'For newcomers, there was no structured next step. The page ended at interest and left users to navigate a complex product alone.' },
    ],
  },
  ideation: {
    heading: 'Two paths. One page. Neither user should feel lost.',
    hmw: 'How might we redesign HuggingFace\'s landing page so an experienced ML engineer can get to work immediately, while a newcomer can understand the value and take a guided first step - without the page feeling divided or confusing?',
    archDecisions: [
      { decision: 'Dual hero CTAs above the fold', why: '"Start Building" targets developers; "Explore Models" targets newcomers. Both paths visible immediately with no scroll required' },
      { decision: 'Progressive disclosure for technical depth', why: 'Deep technical content moves below the fold; high-level value proposition leads. Engineers will scroll; newcomers won\'t get lost in the first impression' },
      { decision: 'Guided onboarding flow for newcomers', why: 'A structured 3-step path (What is it? What can it do? How do I start?) closes the gap between interest and first action' },
      { decision: 'Social proof and use cases above the fold', why: 'Legitimacy signals (company logos, user counts) answer the "can I trust this?" question before the user has to ask it' },
    ],
  },
  design: {
    heading: 'Confident for experts. Approachable for everyone else.',
    intro: 'HuggingFace\'s playful yellow brand gave room for warmth, but the redesign also needed to carry technical credibility. The visual design had to do both.',
    components: [
      { title: 'Dual CTA hero', body: 'A bold, confident hero section with two equal-weight CTAs side by side. Neither path is presented as primary - the user self-selects. A rotating code snippet sits alongside to immediately signal technical depth without alienating newcomers.' },
      { title: 'Newcomer onboarding flow', body: 'A 3-step guided path: "What is HuggingFace?" leads to "What can you build?" which leads to a concrete first action. Each step is a single screen with one decision, modeled on the best SaaS onboarding patterns.' },
      { title: 'Card-based model showcase', body: 'Popular models and use cases in a scannable card layout. Each card has a plain-language title, a one-line description, and a direct link. Designed to be immediately useful to engineers and legible to newcomers.' },
      { title: 'Restructured navigation', body: 'Context-aware sticky nav that surfaces the most relevant sections for each user type based on scroll depth. Reduced cognitive load from 11 top-nav items to 5 primary and 2 secondary.' },
    ],
    images: [
      { src: hf, alt: 'HuggingFace redesigned landing page showing dual CTA structure and improved information hierarchy' },
    ],
  },
  reflection: {
    heading: 'Different user segments need different entry points - not different sites.',
    intro: 'The sprint forced fast, defensible decisions. The most valuable output wasn\'t the prototype - it was the persona-first framing that made every design decision easy to justify.',
    workedWell: [
      { title: 'Analytics led, assumptions followed.', body: 'Grounding every decision in real heatmap and bounce data meant the redesign had a clear rationale. When the sprint was judged, every choice had a "because the data showed..." answer.' },
      { title: 'Dual CTAs are a known pattern that still gets resisted.', body: 'Many product teams default to a single primary CTA to avoid split focus. The research made the case for two clearly: one CTA was actively alienating half the audience.' },
      { title: 'Progressive disclosure resolved the density problem without removing content.', body: 'The existing page had valuable technical content - it was just in the wrong place. Moving depth below the fold let both user types self-select how deep they went.' },
    ],
    wouldChange: [
      { title: 'Run an actual A/B test.', body: 'The 22% projection is a model, not a measurement. A live A/B test with real traffic would validate or correct it.' },
      { title: 'Test the onboarding flow with real newcomers, not designers.', body: 'The 3-step flow was tested with 6 participants who all had some technical background. The hardest case - a completely non-technical decision-maker - wasn\'t represented.' },
    ],
    nextSteps: [
      'A/B test the dual CTA approach against the existing single-CTA hero',
      'Personalized onboarding path based on self-reported experience level',
      'Interactive model demos embedded directly on the landing page',
      'Conversion funnel analytics to validate the 22% bounce rate projection',
    ],
  },
  nextCase: { path: '/plotx', label: 'PlotX' },
};

export default function HuggingFaceCaseStudy() {
  return <CaseStudyTemplate config={config} />;
}
