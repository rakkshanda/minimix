import CaseStudyTemplate from './CaseStudyTemplate';
import eag from '../assets/eag.gif';
import emerald from '../assets/Emerald.png';

const SpeedIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const BrainIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9.5 2a2.5 2.5 0 0 1 5 0"/><path d="M12 2v20"/><path d="M5 8a7 7 0 0 0 7 7 7 7 0 0 0 7-7"/><path d="M5 8H2m20 0h-3"/>
  </svg>
);
const ChartIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);
const FilterIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
);
const BotIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>
  </svg>
);

const config = {
  bodyClass: 'marketpulse-page',
  accent: '#c94f7c',
  eyebrow: 'MarketPulse / Emerald Advisors',
  title: 'Cutting analyst research time in half with a smart news sidebar.',
  lede: 'A Chrome extension that overlays curated, AI-enriched financial news directly on the firm\'s stock dashboard - no tab switching, no context loss.',
  heroImage: eag,
  heroImageAlt: 'MarketPulse Chrome extension interface showing financial news with sentiment tags',
  snapshot: [
    { label: 'Role',     value: 'Software Engineer, Front-end' },
    { label: 'Client',   value: 'Emerald Advisors, Bellevue WA' },
    { label: 'Type',     value: 'Chrome Extension + AI Tooling' },
    { label: 'Duration', value: 'May 2025 - Aug 2025' },
    { label: 'Tools',    value: 'JavaScript, Node.js, Chrome Extension APIs, Financial News APIs, OpenAI API' },
  ],
  outcomes: [
    { icon: <SpeedIcon />, value: '50%',   label: 'reduction in analyst research time',     sub: 'Measured across the team post-launch' },
    { icon: <FilterIcon />, value: '3',    label: 'filter dimensions',                      sub: 'Sentiment, date range, and impact score' },
    { icon: <ChartIcon />, value: '1',     label: 'panel, zero tab switches',               sub: 'Full research workflow stays in the dashboard' },
    { icon: <BotIcon />,   value: 'AI',    label: 'in-panel chatbot with cited sources',    sub: 'TL;DRs, risk highlights, follow-up Q&A' },
    { icon: <BrainIcon />, value: 'Live',  label: 'real-time news from multiple providers', sub: 'Aggregated and deduplicated on load' },
  ],
  tldr: 'Analysts at Emerald Advisors were losing hours daily toggling between tabs, manually filtering irrelevant articles, and copy-pasting content into separate tools for summaries. I built a Chrome extension that injects a sidebar directly into the firm\'s stock dashboard - pulling live financial news, tagging each article with AI-generated sentiment (bullish/bearish/neutral), and letting analysts sort by impact and date. A follow-up ChatGPT-powered chat panel lets them ask questions about any article and get TL;DRs, risk highlights, and cited sources without leaving the page. Research time dropped 50%.',
  discovery: {
    heading: 'Analysts were drowning in tabs, not data.',
    intro: 'The problem was described to me as "we need better news." After spending a day shadowing the team, it was clearly a workflow problem, not a content problem.',
    methods: [
      'Observed analyst workflows across two full trading sessions',
      'Counted tab switches per research task (averaged 15+ per session)',
      'Reviewed internal Slack threads where analysts shared news links manually',
      'Interviewed 3 analysts about their biggest daily friction points',
    ],
    findings: [
      { title: '15+ tab switches per research session.', body: 'Analysts would open a ticker, then leave the dashboard to search for news, then come back, then leave again for a summary tool.' },
      { title: 'Manual filtering was error-prone.', body: 'Analysts were missing critical updates because there was no way to filter by relevance or impact for a specific ticker.' },
      { title: 'No unified sentiment view.', body: 'Bullish vs. bearish signal was being assessed manually, article by article, with no consistent framework.' },
      { title: 'Copy-pasting created mistakes.', body: 'Moving text between tabs for AI summaries introduced transcription errors and broke the research flow entirely.' },
    ],
  },
  ideation: {
    heading: 'Keep analysts in the dashboard. Bring everything to them.',
    hmw: 'How might we surface curated, AI-enriched news directly in the analyst\'s existing workflow - without requiring any context switching or new tool adoption?',
    archDecisions: [
      { decision: 'Chrome extension over standalone app', why: 'Analysts already live in the browser dashboard - an extension requires zero behavior change' },
      { decision: 'Sidebar overlay, not a new tab', why: 'Keeps the trading UI fully visible while research happens in parallel' },
      { decision: 'Multi-provider news aggregation', why: 'Single source had coverage gaps - combining providers gave more complete ticker coverage' },
      { decision: 'OpenAI for summaries and chat', why: 'Fast iteration, good quality on financial text, familiar interface for the team' },
      { decision: 'Sentiment labeling at ingest, not on demand', why: 'Pre-tagging keeps the UI instant - no wait on click' },
    ],
  },
  design: {
    heading: 'Dense, scannable, instant.',
    intro: 'Financial analysts parse information under time pressure. Every design decision prioritized speed of comprehension over visual flourish.',
    components: [
      { title: 'News sidebar overlay', body: 'A fixed-width panel injected via the extension that never obscures the trading UI. Pulls live news from multiple financial APIs on load, deduplicates, and sorts by recency.' },
      { title: 'Sentiment badge system', body: 'Each article gets a color-coded badge (green/red/gray for bullish/bearish/neutral) generated by the AI pipeline at ingest. Analysts can scan sentiment across 10 articles in under 5 seconds.' },
      { title: 'Date and impact filters', body: 'Dropdown filters for time range and estimated market impact let analysts triage breaking news vs. background reading instantly.' },
      { title: 'In-panel ChatGPT assistant', body: 'A collapsible chat panel powered by OpenAI lets analysts ask follow-up questions about any article. Responses include TL;DRs, risk highlights, and inline citations - all without leaving the dashboard.' },
    ],
    images: [
      { src: eag, alt: 'MarketPulse sidebar with sentiment-tagged financial news' },
      { src: emerald, alt: 'Emerald Advisors dashboard with extension overlay' },
    ],
  },
  reflection: {
    heading: 'The right tool is the one analysts already have open.',
    intro: 'The biggest risk was adoption - a new tool requires behavior change. The extension model eliminated that risk by meeting analysts exactly where they already were.',
    workedWell: [
      { title: 'Extension model removed the adoption barrier.', body: 'Because it injected into an existing page, there was nothing new to open, remember, or switch to. Analysts started using it the same day it shipped.' },
      { title: 'Pre-tagged sentiment made the data instantly parseable.', body: 'Color-coded badges meant analysts could assess the tone of a news cycle in seconds. The visual shorthand turned a 2-minute scan into a 10-second one.' },
      { title: 'In-panel chat removed the last reason to leave the page.', body: 'Before the chatbot, analysts would still tab out for AI summaries. After, the full research loop was closed inside one panel.' },
    ],
    wouldChange: [
      { title: 'Build alert thresholds earlier.', body: 'Analysts wanted to be notified when a ticker crossed a sentiment threshold. I shipped filtering first - alerts would have been higher impact.' },
      { title: 'Add news source credibility scoring.', body: 'Not all financial news sources are equal. A source-quality signal would have helped analysts triage faster.' },
      { title: 'Track which articles led to trades.', body: 'Without outcome data, it\'s hard to prove which news sources were actually predictive. Connecting the extension to the trade log would close that loop.' },
    ],
    nextSteps: [
      'Custom per-ticker alert thresholds that trigger push notifications',
      'Historical sentiment trend view per ticker over time',
      'Integration with internal research notes for a complete analyst workspace',
      'Source credibility scoring based on historical accuracy',
    ],
  },
  nextCase: { path: '/huggingface', label: 'HuggingFace Redesign' },
};

export default function MarketPulseCaseStudy() {
  return <CaseStudyTemplate config={config} />;
}
