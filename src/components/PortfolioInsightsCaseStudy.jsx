import CaseStudyTemplate from './CaseStudyTemplate';
import ealogo from '../assets/ealogo.png';
import eag from '../assets/eag.gif';

const config = {
  bodyClass: 'marketpulse-page',
  accent: '#1a5c2e',
  eyebrow: 'Emerald Advisors / Frontend Case Study',
  title: 'Building a browser extension for faster financial news research.',
  lede: 'A front-end browser extension that brings stock-related news, filters, summaries, and a chatbot panel into an existing analyst dashboard.',
  heroImage: ealogo,
  heroImageAlt: 'Emerald Advisors logo',
  snapshot: [
    { label: 'Role',     value: 'Frontend Engineer / Practicum Developer' },
    { label: 'For',      value: 'Emerald Advisors' },
    { label: 'Type',     value: 'Browser Extension / Dashboard Overlay' },
    { label: 'Duration', value: 'May 2025 - Aug 2025' },
    { label: 'Tools',    value: 'JavaScript, Node.js, Browser Extension APIs, Financial News APIs, OpenAI API' },
    { label: 'View',     value: 'View on GitHub ↗', link: 'https://github.com/rakkshanda/EA-Chrome-extension/tree/main' },
  ],
  tldr: 'For my practicum, I worked at Emerald Advisorsas the main technical contributor on a browser extension that supported financial research inside an existing stock dashboard. The extension added a popup overlay where analysts could view relevant news, filter articles, scan sentiment labels, and use an AI-powered chat panel for summaries and follow-up questions. My focus was the front-end implementation: building the extension UI, rendering API data, handling article states, organizing the popup overlay layout, and making the tool feel useful without forcing users to leave their existing workflow.',
  discovery: {
    heading: 'Narrowing the scope to one workflow problem',
    intro: 'The initial ask was broad, with several possible directions like news research, summaries, filters, and chatbot support. Since the practicum timeline was limited, we narrowed the scope to one clear problem: reducing context switching during stock research. We focused the extension on bringing relevant news, filters, summaries, and chatbot support directly into the analyst’s existing dashboard.',
  },
  ideation: {
    heading: 'A popup overlay extension made the most sense for the workflow.',
    hmw: 'How might we bring relevant financial news and AI-assisted summaries into the existing dashboard without asking analysts to change tools?',
    archDecisions: [
      { decision: 'browser extension instead of standalone app', why: 'A standalone app would require users to leave the dashboard. The extension allowed the feature to live directly on top of the existing workflow.' },
      { decision: 'Sidebar overlay', why: 'A popup overlay gave users access to news and chat while keeping the main dashboard visible.' },
      { decision: 'API-driven article cards', why: 'Article data could be fetched, normalized, and rendered into consistent cards with title, source, date, sentiment, and actions.' },
      { decision: 'Filters in the panel', why: 'Date, impact, and sentiment filters helped keep the interface usable when there were many articles.' },
    ],
  },
  design: {
    heading: 'The interface needed to be compact, readable, and easy to scan.',
    intro: 'Because the extension lived inside an existing dashboard, the UI had to be useful without taking over the page. I focused on hierarchy, spacing, card structure, filter placement, and clear interaction states.',
    components: [
      { title: 'Injected popup overlay layout', body: 'I implemented a popup overlay-style interface that could sit alongside the dashboard. The layout kept the extension contained, so users could access news and chat without losing the context of the page they were already viewing.' },
      { title: 'Article card UI', body: 'Each article was rendered as a structured card with the most important information first: title, source, date, sentiment, and summary/action controls. This made the news feed easier to scan than a raw API response or long text list.' },
      { title: 'Filtering controls', body: 'I added front-end controls for narrowing articles by date, impact, and sentiment. The goal was to help users move from a broad list of articles to a smaller, more relevant set of results.' },
      { title: 'AI chat panel', body: 'I built a chat section inside the extension where users could ask follow-up questions and receive summaries or risk highlights. The challenge was making the chat feel connected to the article workflow rather than like a separate tool.' },
      { title: 'Loading and empty states', body: 'I paid attention to states like loading, no results, and unavailable data so the extension did not feel broken when an API response was slow or when no articles matched the selected filters.' },
    ],
  },
  development: {
    images: [
      { src: eag, alt: 'Portfolio Insights browser extension in action' },
    ],
    techStack: ['JavaScript', 'Node.js'],
  },
  reflection: {
    intro: 'The biggest challenge was not just building features, but making them fit into an existing workflow. Because this was a short practicum project with multiple stakeholders, I also had to balance scope, technical feasibility, and front-end quality.',
    workedWell: [
      { title: 'Narrowed to one clear workflow problem.', body: 'Focusing on reducing context switching during stock research gave the project a concrete direction.' },
      { title: 'Popup overlay over a separate app.', body: 'Analysts stayed inside their existing dashboard instead of switching to a new tool.' },
      { title: 'Structured article cards.', body: 'Turned raw financial news API data into readable cards with title, source, date, sentiment, and action controls.' },
      { title: 'Filters reduced noise.', body: 'Date, impact, and sentiment filters let users scan a smaller, more relevant set of articles.' },
      { title: 'Compact, scannable UI.', body: 'The extension added value without taking over the dashboard.' },
    ],
    wouldChange: [
      { title: 'Scope was too broad at the start.', body: 'The initial stakeholder ask covered several directions. The team had to narrow multiple ideas into one realistic first version.' },
      { title: 'Short timeline made scope control critical.', body: 'The practicum timeline was limited, so decisions about what to cut had to be made early.' },
      { title: 'Multiple stakeholders with competing ideas.', body: 'Balancing different expectations while protecting technical feasibility was an ongoing challenge.' },
      { title: 'Compact UI inside an existing dashboard.', body: 'Designing a layout that fit without overwhelming the user required constant tradeoffs.' },
    ],
  },
  nextCase: { path: '/plotx', label: 'PlotX' },
};

export default function MarketPulseCaseStudy() {
  return <CaseStudyTemplate config={config} />;
}
