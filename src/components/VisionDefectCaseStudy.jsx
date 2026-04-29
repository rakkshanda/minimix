import CaseStudyTemplate from './CaseStudyTemplate';
import batchquery from '../assets/batchquery.png';

const BatchIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);
const SpeedIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
);
const EyeIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);
const ConsistentIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>
);
const UploadIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
  </svg>
);

const config = {
  bodyClass: 'visiondefect-page',
  accent: '#c94f7c',
  eyebrow: 'VisionDefect AI / Case Study',
  title: 'Ask one question. Get answers for every image.',
  lede: 'A multimodal batch analysis tool that applies a single prompt across up to four product images - surfacing defects, inconsistencies, and classifications in one pass.',
  liveLink: 'https://batch-query-ena2.vercel.app/',
  liveLinkText: 'View live site',
  heroImage: batchquery,
  heroImageAlt: 'VisionDefect AI interface showing batch image analysis',
  snapshot: [
    { label: 'Role',     value: 'Full-stack Developer' },
    { label: 'Type',     value: 'AI Tool / Personal Project' },
    { label: 'Duration', value: 'Oct 2024 - Dec 2024' },
    { label: 'Tools',    value: 'React, Node.js, OpenAI API, Vercel' },
    { label: 'Live site', value: 'batch-query-ena2.vercel.app', link: 'https://batch-query-ena2.vercel.app/' },
  ],
  outcomes: [
    { icon: <BatchIcon />,      value: '4',      label: 'images analyzed in one request',      sub: 'Batch pipeline, not sequential calls' },
    { icon: <SpeedIcon />,      value: 'Faster', label: 'review time vs. image-by-image method', sub: 'One prompt replaces four separate sessions' },
    { icon: <EyeIcon />,        value: 'Visual', label: 'defect detection across product types', sub: 'Works on manufactured goods, packaging, textiles' },
    { icon: <ConsistentIcon />, value: 'Consistent', label: 'structured output per image',     sub: 'Same schema every time - no prompt drift' },
    { icon: <UploadIcon />,     value: 'Drag',   label: 'and drop multi-image upload',          sub: 'Handles JPEG, PNG, WebP up to 10MB each' },
  ],
  tldr: 'Teams reviewing product photos for defects or inconsistencies had to upload images one at a time, repeat the same prompt for each, and manually compare results across separate sessions. VisionDefect AI solves that by letting a user upload up to four images, ask one question, and receive structured per-image diagnostics in a single response. The batch pipeline maps one prompt to all images in parallel, returns consistent output schemas, and surfaces results side by side for easy comparison. Built with React on the front end, Node.js handling the OpenAI API orchestration, and deployed on Vercel.',
  discovery: {
    heading: 'Repeating the same question four times is not a workflow.',
    intro: 'The trigger for this project was watching a QA team review product photography. Every image required opening a new chat session, re-entering the same prompt, and mentally tracking results across browser tabs.',
    methods: [
      'Observed a QA team reviewing a batch of 40 product images over one session',
      'Counted prompt repetitions and tab switches per review cycle',
      'Reviewed existing AI tools - all required one image per session',
      'Mapped the exact friction points in the current manual workflow',
    ],
    findings: [
      { title: 'The same question was being typed 4-6 times per product set.', body: 'Every image got the same prompt. There was no tool that could apply one question across a batch - so users repeated it manually every time.' },
      { title: 'Inconsistent judgments emerged from session drift.', body: 'Reviewing image 1 in a fresh session and image 4 thirty minutes later introduced framing differences in the AI\'s responses, making comparison unreliable.' },
      { title: 'Side-by-side comparison was impossible.', body: 'With results spread across separate browser sessions, spotting patterns across a product batch required manual note-taking.' },
      { title: 'No fast way to compare issues at scale.', body: 'For batches larger than 4, the manual process took hours. The bottleneck was repetition, not analysis.' },
    ],
  },
  ideation: {
    heading: 'One question. Parallel evaluation. Consistent output.',
    hmw: 'How might we let a user ask one question about a set of product images and receive clear, comparable, per-image answers in a single workflow - without any prompt repetition?',
    archDecisions: [
      { decision: 'Parallel API calls per image', why: 'Sequential processing would be slow; parallel calls per image keep total response time near that of a single call' },
      { decision: 'Structured output schema enforced in the prompt', why: 'Consistent JSON structure per image makes results directly comparable and removes response variance' },
      { decision: 'Client-side upload handling with base64 encoding', why: 'No file storage needed - images encoded client-side and passed directly to the API, keeping the architecture simple and cost-free to run' },
      { decision: 'Side-by-side result layout', why: 'The core user need is comparison - the layout had to make differences immediately visible without scrolling' },
    ],
  },
  design: {
    heading: 'Upload, ask, compare.',
    intro: 'The entire UI reduces to three actions. Complexity was deliberately kept out of the interface and handled in the pipeline.',
    components: [
      { title: 'Multi-image upload', body: 'Drag-and-drop zone accepting up to four images simultaneously. Each image previews inline before submission so users can verify the set before sending. Handles JPEG, PNG, and WebP.' },
      { title: 'Unified prompt input', body: 'A single text field for the question that applies to all images. Intentionally simple - the whole point is that you type it once. Placeholder examples guide first-time users.' },
      { title: 'Parallel batch pipeline', body: 'Node.js orchestration layer sends one API call per image in parallel, enforcing a consistent output schema via the system prompt. Results arrive within seconds of each other.' },
      { title: 'Side-by-side results view', body: 'Structured per-image results displayed in a grid. Each result card shows the image, the AI\'s classification, defects found, and confidence level. Differences across the batch are immediately scannable.' },
    ],
    images: [
      { src: batchquery, alt: 'VisionDefect AI batch analysis results showing four images with per-image diagnostics' },
    ],
  },
  reflection: {
    heading: 'Batch workflows save time proportionally to how often you repeat them.',
    intro: 'The tool is narrow by design. It does one thing - batch multimodal analysis - and the constraint is a feature. Every use case that tried to broaden it made it worse.',
    workedWell: [
      { title: 'Parallel calls kept latency near single-image speed.', body: 'For users coming from sequential workflows, getting four results in the time it used to take one felt like magic. The architecture choice had a direct, perceivable UX benefit.' },
      { title: 'Structured output eliminated post-processing.', body: 'By enforcing a consistent JSON schema in the system prompt, results were directly comparable without any parsing or reformatting on the client.' },
      { title: 'Narrow scope kept the UX clean.', body: 'Restricting to four images and one prompt prevented feature creep that would have bloated the interface. The constraint became the product\'s clearest selling point.' },
    ],
    wouldChange: [
      { title: 'Add bounding-box highlight overlays.', body: 'The AI identifies defect locations in text, but marking them visually on the image would make the tool significantly more useful for QA teams.' },
      { title: 'Export results to CSV or PDF.', body: 'Users reviewing large batches wanted to share results with their team. A one-click export would complete the workflow.' },
    ],
    nextSteps: [
      'Visual bounding-box overlays highlighting detected defect regions',
      'Batch sizes beyond four with queue-based processing',
      'Exportable reports in CSV and PDF for QA team sharing',
      'Domain-specific prompt templates for common product categories',
    ],
  },
  nextCase: { path: '/portfolio', label: 'Back to portfolio' },
};

export default function VisionDefectCaseStudy() {
  return <CaseStudyTemplate config={config} />;
}
