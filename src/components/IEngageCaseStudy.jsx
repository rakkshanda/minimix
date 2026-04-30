import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './IEngageCaseStudy.css';
import hf from '../assets/HF.png';
import designThinkingImg from '../assets/huggingface/design thinking.png';
import personasImg from '../assets/huggingface/personas.png';
import { navigateWithTransition } from '../utils/viewTransition';

const EASE = [0.22, 1, 0.36, 1];
const ACCENT = '#c94f7c';

const IE_TABS = [
  { id: 'overview',  label: 'Overview'  },
  { id: 'process',   label: 'Process'   },
  { id: 'empathize', label: 'Empathize' },
  { id: 'define',    label: 'Define'    },
  { id: 'ideate',    label: 'Ideate'    },
  { id: 'design',    label: 'Design'    },
  { id: 'test',      label: 'Test'      },
  { id: 'summary',   label: 'Summary'   },
];

function Reveal({ children, delay = 0, className = '' }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 30 }}
      animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

const PERSONAS = [
  {
    name: 'Individual Developer',
    goal: 'Explore, fine-tune, or deploy models',
    needs: 'Clarity, fast access to models, code examples',
    painPoints: 'Overwhelming options, unclear entry point',
  },
  {
    name: 'Enterprise Team',
    goal: 'Evaluate premium offerings and security features',
    needs: 'Clear differentiation between free vs. paid tiers',
    painPoints: 'Key value props buried, no immediate demo path',
  },
  {
    name: 'Cloud / Tech Partner',
    goal: 'Integrate with the Hugging Face ecosystem',
    needs: 'API documentation, partner opportunities',
    painPoints: 'Integration benefits not highlighted, low discoverability',
  },
];

const INTERVIEWS = [
  {
    role: 'Individual Developer',
    name: 'Daniel Dickson',
    company: 'Software Engineer, New Relic',
    points: [
      { label: 'First impressions',    body: '"Hero image was confusing." No clear starting point, too much going on.' },
      { label: 'Exploration',          body: '"Inclined to browse, but nothing stood out." Models were buried in visual noise.' },
      { label: 'Conversion potential', body: '"I wanted to click \'Explore AI Apps\' first." CTA worked, but wasn\'t visually prioritized.' },
      { label: 'Suggestions',          body: 'Reduce clutter, simplify page layout, use clearer onboarding terms than "Spaces."' },
    ],
  },
  {
    role: 'Enterprise PM',
    name: 'Anonymous',
    company: 'Atlassian',
    points: [
      { label: 'Enterprise visibility',  body: '"Felt geared toward individual users." Enterprise section is buried and unclear.' },
      { label: 'Content expectations',   body: '"Where is the cost? What are the plans?" No pricing tiers, bundles, or contact options.' },
      { label: 'Trust & credibility',    body: '"Design looks modern, but messaging feels immature." Visuals strong; UX lacks enterprise polish.' },
      { label: 'Suggestions',            body: 'Add contact form and clearer enterprise path. Emphasize customer stories and value props like OpenAI does.' },
    ],
  },
  {
    role: 'Cloud Partner',
    name: 'Alex Kim',
    company: 'Solutions Architect (anonymous)',
    points: [
      { label: 'Integration readiness', body: '"It\'s hard to tell how Hugging Face plays with other platforms." No clear entry point for API access or tech partnerships.' },
      { label: 'Expectations',          body: '"If I wanted to deploy on top of HF infra, I wouldn\'t know who to talk to." Lacks content on infrastructure, SDK support, or partner incentives.' },
      { label: 'Suggestions',           body: 'Create a "For Partners" section. Include integration guides, API hub, and revenue-sharing model callout.' },
    ],
  },
];

const COMPETITIVE_HEADERS = ['Criteria', 'Hugging Face', 'OpenAI', 'Replicate', 'Vertex AI', 'Cohere'];
const COMPETITIVE_ROWS = [
  ['User Targeting',  '❌ General messaging',    '✅ Free, Pro, Team',             '✅ Devs vs. builders',         '✅ Enterprise use-cases',         '✅ Dev vs. Enterprise'],
  ['Free vs. Premium','❌ Unclear tiers',         '✅ Defined plans + CTAs',        '✅ Free credits vs. paid GPU', '✅ Enterprise-only',               '✅ Free vs. "Contact Sales"'],
  ['Hero Message',    '⚠ Vague tagline',          '✅ ChatGPT assistant',           '✅ "Run models in the cloud"', '✅ "Scale AI with Google"',        '✅ APIs & NLP use cases'],
  ['Onboarding UX',  '⚠ Spaces unclear',         '✅ Try button + quick paths',    '✅ "Try on Replicate" link',   '❌ Dense, not beginner-friendly',  '✅ Sandbox + easy start'],
];

const DATA_DECISIONS = [
  { insight: '47% bounce rate - nearly half of users leave without engaging',                     decision: 'Prioritized fast CTAs ("Get Started," "Demo") above the fold' },
  { insight: '5m 13s average visit duration - engagement is high among those who stay',           decision: 'Better segmentation to guide engaged users deeper' },
  { insight: '1B pageviews (+47% YoY) - usage is growing, experience must scale',               decision: 'Simplified landing structure to reduce navigation friction' },
  { insight: 'Spikes in unique visitors with MoM fluctuation - interest is there, inconsistent conversion', decision: 'Tailored flows for Developers, Enterprise, Partners' },
  { insight: '+84% MoM growth in non-Spaces visitors',                                            decision: 'Segmented content for each user type' },
  { insight: 'Pricing traffic low despite paid-tool interest',                                    decision: 'Surfaced pricing earlier in layout' },
  { insight: '"Spaces (public)" grew 50%, but non-Spaces dominates',                             decision: 'De-emphasized Spaces in onboarding - many users aren\'t ready to build yet' },
];

const MESSAGING = [
  { persona: 'Individual Developer', prop: 'Explore, build, and share AI models easily',         hero: 'For Developers: Unleash Your Creativity',      cta: 'Try in 1 click' },
  { persona: 'Enterprise Team',      prop: 'Secure, scalable ML collaboration tools',            hero: 'For Teams: Enhance Your Workflow',              cta: 'Request Enterprise Demo' },
  { persona: 'Cloud / Tech Partner', prop: 'Open integrations and partnership opportunities',     hero: 'For Partners: Collaborate and Innovate',        cta: 'View our API integrations' },
];

const TIMELINE = [
  { phase: 'Design prototyping and specs',           duration: '2 weeks' },
  { phase: 'Component development, CMS integration', duration: '2 months' },
  { phase: 'Final QA, accessibility fixes, and launch', duration: '1 month' },
];

const SUCCESS_METRICS = [
  { category: 'Performance', metrics: 'Page load time (≤ 2s), Core Web Vitals (LCP, CLS)' },
  { category: 'Acquisition', metrics: 'Total sessions by channel, new vs. returning visitor ratio' },
  { category: 'Engagement',  metrics: 'Bounce rate (overall and mobile), avg. time on page, scroll-depth %' },
  { category: 'Conversion',  metrics: 'CTA click-through rate, goal conversion rate, form completion / drop-off' },
];

const TEST_METHODS = [
  { method: 'Moderated user testing',              purpose: 'Evaluate design clarity in real time, ask follow-up questions to understand the experience' },
  { method: 'Unmoderated testing',                 purpose: 'Scale participant count by letting users perform tasks independently' },
  { method: 'A/B testing for iterative comparison', purpose: 'Compare page or element variations in real-world conditions for data-backed decisions' },
];

const SUMMARY_INSIGHTS = [
  'Segmented user paths for Developers, Enterprise, and Partners - reducing confusion at the entry point',
  'High-impact CTAs and onboarding prioritized based on bounce data and user interviews',
  'Trust signals added via testimonials and logos, reflecting enterprise feedback',
  'Clear pricing tiers to address confusion around the freemium model',
  'Interactive product showcase (Spaces demo) encouraging exploration and delivering instant value',
  'Streamlined navigation aligned with user behavior and information architecture insights',
];

const OUTCOMES = [
  { value: '3',    label: 'distinct user personas',        sub: 'Individual Developer, Enterprise Team, Cloud/Tech Partner - each with a tailored landing path' },
  { value: '3',    label: 'in-depth user interviews',      sub: 'Real practitioners from New Relic, Atlassian, and an anonymous cloud partner' },
  { value: '47%',  label: 'bounce rate on existing page',  sub: '1B pageviews (+47% YoY) directly informed structural decisions' },
  { value: '4',    label: 'competitors benchmarked',       sub: 'OpenAI, Replicate, Vertex AI, Cohere across 5 evaluation criteria' },
  { value: '3',    label: 'persona-specific message paths', sub: '"Unleash Your Creativity," "Enhance Your Workflow," "Collaborate and Innovate"' },
];

export default function IEngageCaseStudy() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const tabRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('cs-page', 'ien-page');
    return () => document.body.classList.remove('cs-page', 'ien-page');
  }, []);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 120, behavior: 'smooth' });
    setActiveTab(id);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 120);
      const pos = window.scrollY + 180;
      for (let i = IE_TABS.length - 1; i >= 0; i--) {
        const el = document.getElementById(IE_TABS[i].id);
        if (el && el.offsetTop <= pos) { setActiveTab(IE_TABS[i].id); break; }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabKeyDown = (e, idx) => {
    const last = IE_TABS.length - 1;
    let next = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      next = (idx + 1) % IE_TABS.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      next = (idx - 1 + IE_TABS.length) % IE_TABS.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      next = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      next = last;
    }
    if (next !== null) {
      tabRefs.current[next]?.focus();
      scrollToSection(IE_TABS[next].id);
    }
  };

  return (
    <main
      className="cs-case-study ien-case-study"
      style={{ '--cs-accent': ACCENT }}
      aria-label="iEngage × Hugging Face case study"
    >
      <button
        type="button"
        className="cs-home-button"
        onClick={() => navigateWithTransition(navigate, '/portfolio')}
      >
        &larr; HOME
      </button>

      {/* ── Tab navigation ── */}
      <div className="cs-tabs-header">
        <div className="cs-tabs-shell">
          <div
            className="cs-tabs"
            role="tablist"
            aria-label="Design Thinking phases"
          >
            {IE_TABS.map((tab, idx) => (
              <button
                key={tab.id}
                ref={(el) => { tabRefs.current[idx] = el; }}
                type="button"
                role="tab"
                id={`ien-tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`ien-panel-${tab.id}`}
                tabIndex={activeTab === tab.id ? 0 : -1}
                className={`cs-tab-button${activeTab === tab.id ? ' active' : ''}`}
                onClick={() => scrollToSection(tab.id)}
                onKeyDown={(e) => handleTabKeyDown(e, idx)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {showBackToTop && (
        <button
          type="button"
          className="cs-top-button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          BACK TO TOP
        </button>
      )}

      {/* ── 01 / OVERVIEW ── */}
      <section
        id="overview"
        role="tabpanel"
        aria-labelledby="ien-tab-overview"
        tabIndex={0}
        className="cs-hero"
      >
        <Reveal className="cs-hero-copy">
          <p className="cs-eyebrow">iEngage &times; Hugging Face / Case Study</p>
          <h1>Redefining the landing page experience.</h1>
          <p className="cs-lede">
            A condensed Design Thinking sprint to segment Hugging Face's homepage for three distinct user personas - grounding every design decision in interview data and analytics.
          </p>
          <div className="cs-hero-actions">
            <span className="ien-badge">iEngage &times; Hugging Face Case Competition</span>
          </div>
        </Reveal>

        <Reveal className="cs-hero-visual" delay={0.1}>
          <div className="cs-screen">
            <img src={hf} alt="Hugging Face landing page redesign preview" />
          </div>
          <div className="cs-snapshot-strip">
            {[
              { label: 'Role',        value: 'UX Researcher & Designer' },
              { label: 'Team',        value: 'Kristina Arike, Rakshanda Bhure, Jason Saldaña' },
              { label: 'Type',        value: 'iEngage × Hugging Face Case Competition' },
              { label: 'Format',      value: 'Design Thinking sprint, end to end' },
              { label: 'Tools',       value: 'Figma, Zoom, UserTesting, competitive analysis' },
              { label: 'Deliverable', value: 'Figma prototype + competition deck' },
            ].map((item) => (
              <div key={item.label} className="cs-snapshot-cell">
                <span className="cs-snapshot-label">{item.label}</span>
                <span className="cs-snapshot-value">{item.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Outcomes ── */}
      <section className="cs-outcomes-grid" aria-label="Project outcomes">
        {OUTCOMES.map((item, i) => (
          <Reveal key={item.label} delay={0.06 * i} className="cs-outcome-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <p>{item.sub}</p>
          </Reveal>
        ))}
      </section>

      {/* ── TL;DR ── */}
      <section className="cs-tldr" aria-label="Summary">
        <Reveal>
          <p className="cs-kicker">TL;DR</p>
          <p className="cs-tldr-body">
            Hugging Face's landing page treats every visitor as the same kind of user - but a solo developer exploring models, an enterprise PM evaluating a contract, and a cloud partner scoping integrations all need radically different things. Our team applied a condensed Design Thinking framework (Empathize &rarr; Define &rarr; Ideate &rarr; Design &rarr; Test) to redesign the landing page around three segmented user paths. We grounded the work in three user interviews, traffic analytics, and a four-company competitive scan. The result: a Figma prototype with persona-specific entry points, surfaced pricing, an interactive Spaces demo, and trust signals reflecting enterprise feedback.
          </p>
        </Reveal>
      </section>

      {/* ── 02 / PROCESS ── */}
      <section
        id="process"
        role="tabpanel"
        aria-labelledby="ien-tab-process"
        tabIndex={0}
        className="cs-story-section"
      >
        <Reveal className="cs-section-intro">
          <p className="cs-kicker">02 / Process</p>
          <h2>The Design Thinking framework.</h2>
          <p>Five phases, each with clear outputs - no step was skipped, even in a sprint format.</p>
        </Reveal>

        <Reveal className="ien-asset-frame" delay={0.08}>
          <img src={designThinkingImg} alt="Five-phase Design Thinking process diagram" className="ien-asset-image" />
        </Reveal>
      </section>

      {/* ── 03 / EMPATHIZE ── */}
      <section
        id="empathize"
        role="tabpanel"
        aria-labelledby="ien-tab-empathize"
        tabIndex={0}
        className="cs-story-section"
      >
        <Reveal className="cs-section-intro">
          <p className="cs-kicker">03 / Empathize</p>
          <h2>Meet the three personas.</h2>
          <p>We identified three fundamentally different visitor types arriving on the same page with incompatible expectations.</p>
        </Reveal>

        <Reveal className="ien-personas-grid" delay={0.06}>
          {PERSONAS.map((p) => (
            <div key={p.name} className="ien-persona-card">
              <strong className="ien-persona-name">{p.name}</strong>
              <dl className="ien-persona-dl">
                <dt>Goal</dt>       <dd>{p.goal}</dd>
                <dt>Needs</dt>      <dd>{p.needs}</dd>
                <dt>Pain points</dt><dd>{p.painPoints}</dd>
              </dl>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.08}>
          <p className="cs-kicker" style={{ marginTop: 48 }}>User interviews</p>
        </Reveal>

        <div className="ien-interviews-grid">
          {INTERVIEWS.map((interview, i) => (
            <Reveal key={interview.name} delay={0.06 * i} className="ien-interview-card">
              <div className="ien-interview-header">
                <span className="ien-interview-badge">{interview.role}</span>
                <div>
                  <strong>{interview.name}</strong>
                  <span className="ien-interview-company">{interview.company}</span>
                </div>
              </div>
              <ul className="ien-interview-points">
                {interview.points.map((pt) => (
                  <li key={pt.label}>
                    <span className="ien-point-label">{pt.label}</span>
                    <span className="ien-point-body">{pt.body}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="ien-card-block" delay={0.1}>
          <p className="cs-kicker">Cross-interview takeaways</p>
          <ul className="cs-a11y-list">
            <li>Lack of segmentation affects all personas - devs, enterprise buyers, and partners all feel the same root problem</li>
            <li>Enterprise and partnership pathways are hidden or absent</li>
            <li>Users want guided flows and better onboarding language</li>
            <li>Hugging Face's potential is strong, but its landing page does not scale with its audience maturity</li>
          </ul>
        </Reveal>

        <Reveal className="ien-asset-frame" delay={0.12}>
          <img src={personasImg} alt="Persona synthesis board for Hugging Face redesign" className="ien-asset-image" />
        </Reveal>
      </section>

      {/* ── 04 / DEFINE ── */}
      <section
        id="define"
        role="tabpanel"
        aria-labelledby="ien-tab-define"
        tabIndex={0}
        className="cs-story-section"
      >
        <Reveal className="cs-section-intro">
          <p className="cs-kicker">04 / Define</p>
          <h2>Framing the problem that actually matters.</h2>
        </Reveal>

        <Reveal className="cs-hmw" delay={0.06}>
          <p className="cs-hmw-label">Problem statement</p>
          <p className="cs-hmw-body">
            Hugging Face's current landing page does not effectively differentiate between user types or communicate the full value of its freemium and premium offerings. As the company scales its enterprise services and strategic partnerships, the existing experience fails to guide individual developers, enterprise teams, and partners toward relevant actions - ultimately limiting user engagement, conversions, and long-term adoption.
          </p>
        </Reveal>

      </section>

      {/* ── 05 / IDEATE ── */}
      <section
        id="ideate"
        role="tabpanel"
        aria-labelledby="ien-tab-ideate"
        tabIndex={0}
        className="cs-story-section"
      >
        <Reveal className="cs-section-intro">
          <p className="cs-kicker">05 / Ideate</p>
          <h2>Competitive analysis, data decisions, messaging.</h2>
        </Reveal>

        {/* Competitive analysis */}
        <Reveal className="ien-table-block" delay={0.06}>
          <p className="cs-kicker">Competitive analysis</p>
          <p className="ien-body-text" style={{ marginBottom: 18 }}>
            We benchmarked Hugging Face against four major players - proprietary foundation model providers (OpenAI, Cohere), full-stack enterprise platforms (Vertex AI), and lightweight model marketplaces (Replicate).
          </p>
          <div className="ien-table-scroll" role="region" aria-label="Competitive analysis" tabIndex={0}>
            <table className="ien-table">
              <thead>
                <tr>
                  {COMPETITIVE_HEADERS.map((h) => (
                    <th key={h} scope="col">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPETITIVE_ROWS.map((row) => (
                  <tr key={row[0]}>
                    <th scope="row">{row[0]}</th>
                    {row.slice(1).map((cell, ci) => (
                      <td key={ci}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Data-informed decisions */}
        <Reveal className="ien-table-block" delay={0.08}>
          <p className="cs-kicker">Data-informed design decisions</p>
          <p className="ien-body-text" style={{ marginBottom: 18 }}>
            We pulled Hugging Face traffic analytics and translated each insight into a concrete design decision.
          </p>
          <div className="ien-table-scroll" role="region" aria-label="Data-informed design decisions" tabIndex={0}>
            <table className="ien-table">
              <thead>
                <tr>
                  <th scope="col">Insight</th>
                  <th scope="col">Design decision</th>
                </tr>
              </thead>
              <tbody>
                {DATA_DECISIONS.map((row, i) => (
                  <tr key={i}>
                    <th scope="row">{row.insight}</th>
                    <td>{row.decision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Proposed IA */}
        <Reveal className="ien-card-block" delay={0.1}>
          <p className="cs-kicker">Proposed information architecture</p>
          <p className="ien-body-text">
            We structured the IA around segmented persona paths, with each section having a clear purpose and a defined role in the conversion funnel. Each persona's entry point routes to content optimized for their stage - exploration for developers, evaluation for enterprise, and integration for partners.
          </p>
        </Reveal>

        {/* Messaging strategy */}
        <Reveal className="ien-table-block" delay={0.12}>
          <p className="cs-kicker">Messaging strategy</p>
          <div className="ien-table-scroll" role="region" aria-label="Messaging strategy by persona" tabIndex={0}>
            <table className="ien-table">
              <thead>
                <tr>
                  <th scope="col">Persona</th>
                  <th scope="col">Value prop</th>
                  <th scope="col">Hero message</th>
                  <th scope="col">CTA</th>
                </tr>
              </thead>
              <tbody>
                {MESSAGING.map((row) => (
                  <tr key={row.persona}>
                    <th scope="row">{row.persona}</th>
                    <td>{row.prop}</td>
                    <td><em>{row.hero}</em></td>
                    <td><strong>{row.cta}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* ── 06 / DESIGN ── */}
      <section
        id="design"
        role="tabpanel"
        aria-labelledby="ien-tab-design"
        tabIndex={0}
        className="cs-story-section"
      >
        <Reveal className="cs-section-intro">
          <p className="cs-kicker">06 / Design</p>
          <h2>Prototype, stack, and success metrics.</h2>
          <p>High-fidelity Figma prototype of the redesigned landing page structured around persona-specific entry points.</p>
        </Reveal>

        {/* Tech stack */}
        <Reveal className="ien-card-block" delay={0.08}>
          <p className="cs-kicker">Tech stack</p>
          <ul className="cs-a11y-list">
            <li>Frontend built in React / Next.js (leveraging the existing Hugging Face design-system components)</li>
            <li>Tailwind CSS for rapid, consistent styling</li>
          </ul>
        </Reveal>

        {/* Timeline */}
        <Reveal className="ien-table-block" delay={0.1}>
          <p className="cs-kicker">Implementation timeline</p>
          <div className="ien-table-scroll" role="region" aria-label="Implementation timeline" tabIndex={0}>
            <table className="ien-table">
              <thead>
                <tr>
                  <th scope="col">Phase</th>
                  <th scope="col">Duration</th>
                </tr>
              </thead>
              <tbody>
                {TIMELINE.map((row) => (
                  <tr key={row.phase}>
                    <th scope="row">{row.phase}</th>
                    <td>{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Success metrics */}
        <Reveal className="ien-table-block" delay={0.12}>
          <p className="cs-kicker">Success metrics</p>
          <div className="ien-table-scroll" role="region" aria-label="Success metrics" tabIndex={0}>
            <table className="ien-table">
              <thead>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Metrics</th>
                </tr>
              </thead>
              <tbody>
                {SUCCESS_METRICS.map((row) => (
                  <tr key={row.category}>
                    <th scope="row">{row.category}</th>
                    <td>{row.metrics}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* ── 07 / TEST ── */}
      <section
        id="test"
        role="tabpanel"
        aria-labelledby="ien-tab-test"
        tabIndex={0}
        className="cs-story-section"
      >
        <Reveal className="cs-section-intro">
          <p className="cs-kicker">07 / Test</p>
          <h2>Proposed testing methods and ethics.</h2>
          <p>With a high-fidelity prototype, we'd recommend performing the following testing approaches.</p>
        </Reveal>

        <Reveal className="ien-test-grid" delay={0.06}>
          {TEST_METHODS.map((tm, i) => (
            <div key={tm.method} className="ien-test-card">
              <span className="ien-phase-num">{String(i + 1).padStart(2, '0')}</span>
              <strong>{tm.method}</strong>
              <p>{tm.purpose}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="ien-card-block" delay={0.08}>
          <p className="cs-kicker">Ethical considerations</p>
          <ul className="cs-a11y-list">
            <li>Be intentional about data collection - avoid unnecessary collection, make clear privacy disclosures</li>
            <li>Favor transparency - be clear about freemium vs. paid features, let users easily compare tiers</li>
            <li>Follow accessibility best practices - maintain standards and consider user diversity (novices to experienced teams) when writing copy</li>
            <li>Keep it authentic - verify testimonials and trust signals; don't exaggerate</li>
          </ul>
        </Reveal>
      </section>

      {/* ── 08 / SUMMARY ── */}
      <section
        id="summary"
        role="tabpanel"
        aria-labelledby="ien-tab-summary"
        tabIndex={0}
        className="cs-story-section"
      >
        <Reveal className="cs-section-intro">
          <p className="cs-kicker">08 / Summary</p>
          <h2>Research-backed insights that drove every decision.</h2>
          <p>
            We followed a Design Thinking approach to root our concept in user insight, business goals, and competitive awareness.
          </p>
        </Reveal>

        <Reveal className="ien-summary-grid" delay={0.06}>
          {SUMMARY_INSIGHTS.map((insight, i) => (
            <div key={i} className="ien-summary-card">
              <span className="ien-phase-num">{String(i + 1).padStart(2, '0')}</span>
              <p>{insight}</p>
            </div>
          ))}
        </Reveal>

      </section>

      {/* ── Next case study ── */}
      <nav className="cs-next-case" aria-label="Next case study">
        <Reveal>
          <p className="cs-kicker">Next case study</p>
          <button
            type="button"
            className="cs-next-button"
            onClick={() => navigateWithTransition(navigate, '/career-cupid')}
          >
            Career Cupid &rarr;
          </button>
        </Reveal>
      </nav>
    </main>
  );
}
