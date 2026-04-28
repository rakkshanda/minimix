import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './AIMSCaseStudy.css';
import aims from '../assets/aims.png';
import aims1 from '../assets/aims1.png';
import { navigateWithTransition } from '../utils/viewTransition';

const EASE = [0.22, 1, 0.36, 1];

const outcomes = [
  { value: '80%', label: 'reduction in event-publishing time', sub: 'avg. 25 min → 5 min, across 6 officers' },
  { value: '98', label: 'Lighthouse accessibility score', sub: 'up from 71; zero critical axe violations' },
  { value: '3×', label: 'event RSVPs in Q1', sub: 'post-launch vs. the prior quarter' },
  { value: '62%', label: 'of traffic is mobile', sub: 'bounce rate dropped 58% → 31%' },
  { value: '0', label: 'developer tickets', sub: 'first 8 weeks post-CMS handoff' },
];

const snapshot = [
  { label: 'Role', value: 'Lead UX Designer & Frontend Developer (solo)' },
  { label: 'Client', value: 'Association of Information Management Students, UW iSchool' },
  { label: 'Type', value: 'RSO website redesign + custom WordPress theme' },
  { label: 'Duration', value: 'Jan 2025 – Present' },
  { label: 'Tools', value: 'Figma, PHP, SCSS, JavaScript, WordPress, ACF Pro, Lighthouse, axe DevTools' },
  { label: 'Live site', value: 'aims.ischool.uw.edu', link: 'https://aims.ischool.uw.edu/' },
];

const researchMethods = [
  'Stakeholder interviews with 5 of 8 officers (President, VP, Events Lead, Outreach, Treasurer)',
  'Heuristic evaluation against Nielsen\'s 10 heuristics',
  'Analytics review of 12 months of GA data',
  'Competitive benchmark against UW HCDE RSO, MSIM Student Council, and 10 other iSchool RSOs nationally',
  'Accessibility audit using axe DevTools and WAVE on the legacy site',
];

const findings = [
  { title: 'A confidence problem, not a skills problem.', body: 'Officers knew Google Docs, Canva, Notion. Not HTML, image dimensions, or what a "featured image" was. The CMS spoke developer.' },
  { title: 'Mobile was the majority case.', body: '62% of GA sessions were on mobile, but the legacy nav broke under 480px and event cards overflowed the viewport.' },
  { title: 'UW infrastructure was a hard constraint.', body: 'Hosted on UW\'s WordPress multisite — no plugin freedom, no custom server config, no budget for paid services.' },
  { title: 'Accessibility wasn\'t optional.', body: 'The iSchool\'s accessibility liaison had flagged the legacy site twice. Fixing it was a precondition, not a stretch goal.' },
];

const personas = [
  { name: 'Maya', role: 'VP of Events', need: 'Publish 2–4 events per week, has never used WordPress, lives in her phone.' },
  { name: 'Jordan', role: 'Prospective Student', need: 'Visiting on mobile during an info session — wants to know "is this org for me?" in under 30 seconds.' },
  { name: 'Dr. Patel', role: 'Faculty Advisor', need: 'Checks quarterly to verify the org is active and brand-compliant.' },
];

const concepts = [
  { name: 'A — Squarespace migration', pros: 'Familiar editing UX', cons: 'UW won\'t host externally; brand kit limitations', chosen: false },
  { name: 'B — Off-the-shelf WP theme + page builder', pros: 'Fast to ship', cons: 'Bloated, accessibility debt, hard to enforce brand', chosen: false },
  { name: 'C — Custom _s theme + ACF Pro', pros: 'Full control of accessibility, performance, brand; structured editing UX', cons: 'Higher build cost upfront', chosen: true },
];

const designPrinciples = [
  { number: '01', title: 'Officer-first', body: 'If an officer can\'t publish in under 5 minutes on a phone, redesign the form.' },
  { number: '02', title: 'Mobile canonical', body: 'Design mobile first, scale up. 62% of users never see the desktop view.' },
  { number: '03', title: 'Accessibility by default', body: 'Every component ships WCAG 2.2 AA. Not a feature — a baseline.' },
  { number: '04', title: 'Brand via tokens', body: 'Make it impossible to use an off-brand color. Consistency from code, not policing.' },
];

const a11yChecks = [
  { check: 'Color contrast', tool: 'axe DevTools', result: 'All text ≥ 4.5:1, large text ≥ 3:1' },
  { check: 'Keyboard nav', tool: 'Manual', result: 'Full traversal, no traps' },
  { check: 'Screen reader', tool: 'VoiceOver (iOS), NVDA (Win)', result: 'Landmark structure announces correctly' },
  { check: 'Reduced motion', tool: 'Manual', result: 'All animation respects user preference' },
  { check: 'Lighthouse a11y', tool: 'Chrome DevTools', result: '98 / 100' },
];

const techStack = [
  { name: '_s (underscores)', reason: 'Clean slate, no opinions, easy to make accessible.' },
  { name: 'ACF Pro', reason: 'The content modeling layer. Worth every penny of the license.' },
  { name: 'SCSS 7-1 architecture', reason: 'Tokens, mixins, base, components — single source of truth.' },
  { name: 'Vanilla JS', reason: 'No jQuery, no React. ~12KB of JS total. Keeps handoff simple.' },
  { name: 'sass + terser only', reason: 'No heavy build pipeline — understandable for any future student dev.' },
];

const handoffDocs = [
  '15-page Officer Handbook (PDF) walking through every editing task with screenshots',
  '2-minute Loom video for each of the 8 most common tasks',
  'Inline ACF description fields with a one-line "what goes here" hint on every group',
  'Theme README with file-tree explanations and a full token reference',
];

const workedWell = [
  { title: 'Constraints were a gift.', body: '"No budget, UW hosting only, must be accessible" eliminated dozens of architectural debates before they started.' },
  { title: 'Handoff-driven design made the product better.', body: 'Forcing every editing flow through ACF made me think harder about content structure than I would have for a developer-maintained site.' },
  { title: 'Tokens are leverage.', body: 'When UW updated its accent palette in March, the change was one file. One variable, everywhere.' },
];

const wouldChange = [
  { title: 'Ship analytics earlier.', body: 'GA4 went in at week 6 instead of day 1. I have less baseline data than I\'d like.' },
  { title: 'Simplify the ACF schema sooner.', body: 'Separate "short" and "long" description fields — officers ignored the long one. Consolidated in v1.1.' },
  { title: 'Account for image weight.', body: 'Officers uploaded 4MB phone photos. Auto-resize/compress shipped in v1.2; should have been v1.0.' },
];

const nextSteps = [
  'Member profile pages with role history and LinkedIn-style timelines',
  'RSVP flow native to the site (currently links out to Google Forms)',
  'UW calendar sync via iCal feed from the events post type',
  'Analytics dashboard in WP admin so officers see which content matters',
  'Light/dark mode using the existing token system (mostly free if done right)',
];

const AIMS_TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'discovery', label: 'Discovery' },
  { id: 'ideation', label: 'Ideation' },
  { id: 'design', label: 'Design' },
  { id: 'build', label: 'Build & Handoff' },
  { id: 'reflection', label: 'Reflection' },
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

const AIMSCaseStudy = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('overview');
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('aims-page');
    return () => document.body.classList.remove('aims-page');
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const headerOffset = 120;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    setActiveTab(sectionId);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 120);
      const scrollPosition = window.scrollY + 180;
      for (let i = AIMS_TABS.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(AIMS_TABS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(AIMS_TABS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <main className="aims-case-study">
        <button
          type="button"
          className="aims-home-button"
          onClick={() => navigateWithTransition(navigate, '/portfolio')}
        >
          ← HOME
        </button>

        <div className="aims-tabs-header">
          <div className="aims-tabs-shell">
            <div className="aims-tabs">
              {AIMS_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`aims-tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(tab.id)}
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
            className="aims-top-button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            BACK TO TOP ↑
          </button>
        )}

        {/* HERO */}
        <section id="overview" className="aims-hero">
          <Reveal className="aims-hero-copy">
            <p className="aims-eyebrow">AIMS UW / Case Study</p>
            <h1>Rebuilding AIMS so any officer can publish, not just the one who knows WordPress.</h1>
            <p className="aims-lede">
              A solo redesign of the Association of Information Management Students website. Custom WordPress
              theme, ACF content model, zero developer tickets in the first eight weeks after handoff.
            </p>
            <div className="aims-hero-actions">
              <a
                href="https://aims.ischool.uw.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="aims-primary-link"
              >
                View live site ↗
              </a>
            </div>
          </Reveal>

          <Reveal className="aims-hero-visual" delay={0.1}>
            <div className="aims-screen">
              <img src={aims} alt="AIMS UW website" />
            </div>
            <div className="aims-snapshot-strip">
              {snapshot.map((item) => (
                <div key={item.label} className="aims-snapshot-cell">
                  <span className="aims-snapshot-label">{item.label}</span>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="aims-snapshot-value aims-snapshot-link">
                      {item.value}
                    </a>
                  ) : (
                    <span className="aims-snapshot-value">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* OUTCOMES */}
        <section className="aims-outcomes-grid">
          {outcomes.map((item, i) => (
            <Reveal key={item.label} delay={0.06 * i} className="aims-outcome-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <p>{item.sub}</p>
            </Reveal>
          ))}
        </section>

        {/* TL;DR */}
        <section className="aims-tldr">
          <Reveal>
            <p className="aims-kicker">TL;DR</p>
            <p className="aims-tldr-body">
              AIMS was running on a WordPress site that only one officer could update — and she was graduating.
              I rebuilt it as a custom theme on the _s base with ACF Pro content models designed around how
              non-technical officers think, not how WordPress works. SCSS design tokens enforce UW brand without
              policing. Every component ships WCAG 2.2 AA. The handoff was the design: officers now run the site
              with zero engineering involvement.
            </p>
          </Reveal>
        </section>

        {/* DISCOVERY */}
        <section id="discovery" className="aims-story-section">
          <Reveal className="aims-section-intro">
            <p className="aims-kicker">01 / Discovery</p>
            <h2>The ask was "make it look better." The real problem was survivability.</h2>
            <p>
              When the AIMS president emailed in January, the ask was "the website looks dated." That was
              the symptom. The actual problem surfaced in the first 20 minutes: only one officer in the
              eight-person leadership team felt comfortable touching the site. When she graduated in June,
              the org would lose its only path to publishing.
            </p>
          </Reveal>

          <div className="aims-research-layout">
            <Reveal className="aims-research-card" delay={0.06}>
              <p className="aims-kicker">Research methods</p>
              <ul>
                {researchMethods.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="aims-quote-panel" delay={0.1}>
              <p className="aims-quote-mark">"</p>
              <p>
                I'd rather just not post the event than figure out how to add it.
                By the time I figure out the photo sizing, the event is over.
              </p>
              <span>— Events Lead, AIMS</span>
            </Reveal>
          </div>

          <Reveal className="aims-findings-block" delay={0.08}>
            <p className="aims-kicker">Four findings that shaped everything</p>
            <div className="aims-findings-grid">
              {findings.map((f, i) => (
                <div key={f.title} className="aims-finding-item">
                  <span className="aims-finding-num">{String(i + 1).padStart(2, '0')}</span>
                  <strong>{f.title}</strong>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="aims-personas-block" delay={0.08}>
            <p className="aims-kicker">Personas (condensed)</p>
            <div className="aims-personas-grid">
              {personas.map((p) => (
                <div key={p.name} className="aims-persona-card">
                  <div className="aims-persona-header">
                    <strong>{p.name}</strong>
                    <span>{p.role}</span>
                  </div>
                  <p>{p.need}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* IDEATION */}
        <section id="ideation" className="aims-story-section">
          <Reveal className="aims-section-intro">
            <p className="aims-kicker">02 / Ideation</p>
            <h2>The editing experience is the product.</h2>
          </Reveal>

          <Reveal className="aims-hmw" delay={0.06}>
            <p className="aims-hmw-label">How might we</p>
            <p className="aims-hmw-body">
              build a website that an officer with zero technical experience can confidently update on a
              Tuesday night, while still meeting UW brand and accessibility standards?
            </p>
          </Reveal>

          <Reveal className="aims-concepts-block" delay={0.08}>
            <p className="aims-kicker">Three concepts considered</p>
            <div className="aims-concepts-table">
              <div className="aims-concepts-head">
                <span>Concept</span>
                <span>Pros</span>
                <span>Cons</span>
                <span>Decision</span>
              </div>
              {concepts.map((c) => (
                <div key={c.name} className={`aims-concepts-row${c.chosen ? ' chosen' : ''}`}>
                  <span>{c.name}</span>
                  <span>{c.pros}</span>
                  <span>{c.cons}</span>
                  <span className={`aims-concept-verdict${c.chosen ? ' chosen' : ''}`}>
                    {c.chosen ? '✓ Chosen' : '✕ Rejected'}
                  </span>
                </div>
              ))}
            </div>
            <p className="aims-concept-rationale">
              Concept C won because a page builder gives officers infinite rope; a custom ACF content model
              gives them a guided form with the right fields in the right order, and validation when
              something's wrong.
            </p>
          </Reveal>

          <Reveal className="aims-ia-block" delay={0.08}>
            <p className="aims-kicker">Information architecture</p>
            <p>Sketched on paper, validated with three officers via card-sort over Zoom. One surprise: "Resources" moved from a footer link to top-nav — officers said prospective students kept asking for it on the legacy site.</p>
            <div className="aims-ia-diagram">
              <div className="aims-ia-node aims-ia-root">Home</div>
              <div className="aims-ia-connector" />
              <div className="aims-ia-branches">
                {['Events', 'About', 'Sponsors', 'Resources', 'Join'].map((n) => (
                  <div key={n} className="aims-ia-node">{n}</div>
                ))}
              </div>
              <div className="aims-ia-sub">
                <span>Events sub-nav</span>
                <div className="aims-ia-pills">
                  {['Upcoming', 'Past', 'Featured'].map((p) => (
                    <span key={p} className="aims-ia-pill">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* DESIGN */}
        <section id="design" className="aims-story-section">
          <Reveal className="aims-section-intro">
            <p className="aims-kicker">03 / Design</p>
            <h2>Four principles. One sticky note. No exceptions.</h2>
          </Reveal>

          <div className="aims-principles-grid">
            {designPrinciples.map((p, i) => (
              <Reveal key={p.number} delay={0.05 * i} className="aims-principle-card">
                <span className="aims-principle-num">{p.number}</span>
                <strong>{p.title}</strong>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="aims-tokens-block" delay={0.08}>
            <p className="aims-kicker">Design system — SCSS tokens</p>
            <p>One file. No hard-coded colors anywhere in the codebase. When UW updated its accent palette in March, the change was a single-file edit.</p>
            <pre className="aims-code-block">{`// _tokens.scss — single source of truth
$uw-purple:        #4b2e83;
$uw-gold:          #b7a57a;
$uw-metallic-gold: #85754d;

$space-1: 0.25rem;  $space-2: 0.5rem;
$space-3: 1rem;     $space-4: 1.5rem;
$space-5: 2.5rem;

$breakpoints: (
  sm: 480px,
  md: 768px,
  lg: 1024px,
  xl: 1280px
);`}</pre>
          </Reveal>

          <Reveal className="aims-screens-block" delay={0.08}>
            <p className="aims-kicker">Live site</p>
            <div className="aims-screens-grid">
              <img src={aims} alt="AIMS homepage" className="aims-screen-img" />
              <img src={aims1} alt="AIMS secondary view" className="aims-screen-img" />
            </div>
          </Reveal>

          <Reveal className="aims-a11y-block" delay={0.08}>
            <p className="aims-kicker">Accessibility audit</p>
            <div className="aims-a11y-table">
              <div className="aims-a11y-head">
                <span>Check</span>
                <span>Tool</span>
                <span>Result</span>
              </div>
              {a11yChecks.map((row) => (
                <div key={row.check} className="aims-a11y-row">
                  <span>{row.check}</span>
                  <span>{row.tool}</span>
                  <span className="aims-a11y-pass">{row.result}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* BUILD */}
        <section id="build" className="aims-story-section">
          <Reveal className="aims-section-intro">
            <p className="aims-kicker">04 / Build & Handoff</p>
            <h2>The CMS is the design. Documentation makes it last.</h2>
          </Reveal>

          <div className="aims-stack-grid">
            {techStack.map((item, i) => (
              <Reveal key={item.name} delay={0.05 * i} className="aims-stack-card">
                <strong>{item.name}</strong>
                <p>{item.reason}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="aims-handoff-block" delay={0.08}>
            <p className="aims-kicker">Handoff documentation</p>
            <ul>
              {handoffDocs.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* REFLECTION */}
        <section id="reflection" className="aims-story-section">
          <Reveal className="aims-section-intro">
            <p className="aims-kicker">05 / Reflection</p>
            <h2>The most important design artifact wasn't a screen.</h2>
            <p>
              It was the ACF schema — the thing officers see every Tuesday night when they sit down to
              publish. Designing for the people who maintain the product, not just the people who use it,
              is a discipline worth keeping.
            </p>
          </Reveal>

          <div className="aims-reflection-grid">
            <Reveal className="aims-reflection-col" delay={0.04}>
              <p className="aims-kicker">What worked</p>
              {workedWell.map((w) => (
                <div key={w.title} className="aims-reflection-item">
                  <strong>{w.title}</strong>
                  <p>{w.body}</p>
                </div>
              ))}
            </Reveal>

            <Reveal className="aims-reflection-col" delay={0.08}>
              <p className="aims-kicker">What I'd do differently</p>
              {wouldChange.map((w) => (
                <div key={w.title} className="aims-reflection-item">
                  <strong>{w.title}</strong>
                  <p>{w.body}</p>
                </div>
              ))}
            </Reveal>

            <Reveal className="aims-reflection-col" delay={0.12}>
              <p className="aims-kicker">What's next (v2)</p>
              <ul className="aims-next-list">
                {nextSteps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
};

export default AIMSCaseStudy;
