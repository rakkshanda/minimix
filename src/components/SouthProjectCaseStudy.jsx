import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './SouthProjectCaseStudy.css';
import sp from '../assets/sp.png';
import spGif from '../assets/gifs/sp.gif';
import { navigateWithTransition } from '../utils/viewTransition';

const EASE = [0.22, 1, 0.36, 1];

const OutcomeIcons = {
  speed: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2a10 10 0 1 1-6.88 17.24" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  mobile: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  users: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  form: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="13" y2="17" />
    </svg>
  ),
  a11y: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="4" r="2" />
      <path d="M12 8v4m0 0-3 5m3-5 3 5" />
      <path d="M9 12H6m12 0h-3" />
    </svg>
  ),
};

const outcomes = [
  { iconKey: 'speed',  value: '35%',    label: 'improvement in page load speed', sub: 'Avg. 4.2s → 2.7s on mobile, measured via Lighthouse' },
  { iconKey: 'mobile', value: '20%',    label: 'increase in mobile engagement',  sub: 'Sessions over 30s, post-launch quarter' },
  { iconKey: 'users',  value: '10K+',   label: 'monthly users served',           sub: 'On donation and event pages without performance degradation' },
  { iconKey: 'form',   value: '<2 min', label: 'event signup time',              sub: 'Down from 4+ minutes after form redesign' },
  { iconKey: 'a11y',   value: '94',     label: 'Lighthouse Accessibility score', sub: 'Meaningful for an audience navigating sites under stress' },
];

const snapshot = [
  { label: 'Role', value: 'Front-end Developer' },
  { label: 'Client', value: 'South Project TX - 501(c)(3) supporting young mothers' },
  { label: 'Type', value: 'Full website overhaul + ongoing development' },
  { label: 'Duration', value: 'Sept 2025 – Present' },
  { label: 'Tools', value: 'WordPress, Elementor, PHP, SCSS, JavaScript, ACF' },
  { label: 'Live site', value: 'southprojecttx.com', link: 'https://southprojecttx.com' },
];

const researchMethods = [
  'Stakeholder interviews with the executive director, program manager, and 2 mentors',
  'Analytics review of 6 months of GA data - bounce rates, device split, drop-off points',
  'Heuristic walkthrough of the event signup flow on a $200 Android phone (the realistic device for our audience)',
  'Content audit of every page, with a "what does this page do?" tag for each',
  'Accessibility audit with axe DevTools and manual screen reader testing',
];

const findings = [
  { title: '78% of traffic was mobile.', body: 'The desktop-first layout was hurting the majority case.' },
  { title: 'Event pages were the #1 entry point,', body: 'but the signup CTA averaged 1,400px below the fold on mobile.' },
  { title: 'The content team was bottlenecked.', body: 'Updating an event meant editing four different places: the homepage carousel, the events page, a hardcoded sidebar, and the footer.' },
  { title: 'Trust matters more than polish for this audience.', body: 'A site that loads slowly or asks for too much info reads as untrustworthy when you\'re already cautious about who knows you\'re a young mom.' },
  { title: 'Donation flow had a different audience.', body: 'Donors are skewed older and desktop. The site had to serve two viewports and two emotional registers.' },
];

const archDecisions = [
  { decision: 'Keep WordPress, replace the theme', why: 'Content team already trained; switching CMS would have stalled the project' },
  { decision: 'Elementor for marketing pages, custom blocks for repeating content', why: 'Marketing flexibility for the team, performance discipline for high-traffic templates' },
  { decision: 'Custom event post type with ACF', why: 'Single source of truth - homepage, events page, and signup all pull from one record' },
  { decision: 'Mobile-first build, progressive enhancement upward', why: '78% of traffic deserved 100% of the design attention' },
  { decision: 'Form state persistence in localStorage', why: 'Solves the "baby cried and the form reset" problem - the literal user need' },
];

const performanceBudget = [
  { metric: 'Total page weight', target: 'Under 1 MB on event pages' },
  { metric: 'Largest Contentful Paint', target: 'Under 2.5s on mobile 4G' },
  { metric: 'Render-blocking JS', target: 'None in the head' },
  { metric: 'Image format', target: 'WebP with width-appropriate srcset' },
];

const components = [
  {
    title: 'Event signup flow',
    body: 'The single highest-impact change. Before: 11 fields across one long form. After: 4 required fields, 3 optional, progressive disclosure, autosave to localStorage, and a clear "you can finish this later on the same device" affordance. Time-to-complete on mobile dropped from 4+ minutes to under 2.',
  },
  {
    title: 'Homepage hero',
    body: 'Replaced an auto-rotating slider (3 hero images, ~800KB total) with a single static hero plus a featured event card. Saved 600KB and removed an accessibility liability - auto-rotating carousels are hard to do well, and unnecessary here.',
  },
  {
    title: 'Event card grid',
    body: 'Pulls from the custom event post type. Each card surfaces date, time, format (in-person/virtual), and a one-tap RSVP. Content team adds an event once; it appears everywhere it should.',
  },
  {
    title: 'Donation flow',
    body: 'Persistent header button, dedicated landing page with trust signals (501(c)(3) status, board info, financial transparency link), and a streamlined Stripe-backed form. Designed for the desktop donor without compromising mobile.',
  },
];

const a11yNotes = [
  'All interactive elements meet 44×44px tap target minimum',
  'Form errors announced via aria-live="polite"',
  'Color contrast ≥ 4.5:1 throughout, verified with axe',
  'Reduced-motion support on every animation',
  'Screen reader tested with VoiceOver (iOS) and TalkBack (Android) - the actual devices the audience uses',
];

const workedWell = [
  { title: 'Designing for the real device.', body: 'Building on a budget Android, not a MacBook, made every performance decision concrete.' },
  { title: 'The form persistence change was small code, huge impact.', body: 'A few lines of localStorage solved the single biggest user complaint. Not all wins require big rewrites.' },
  { title: 'Two audiences, two registers, one site.', body: 'Splitting the donation and event flows into distinct mental models - without splitting the codebase - kept maintenance simple.' },
];

const wouldChange = [
  { title: 'Ship analytics events for the form earlier.', body: 'I have time-to-complete data from week 6 onward, not from launch. Baseline matters.' },
  { title: 'Clearer rules for the Elementor / custom-block split.', body: 'Content team occasionally rebuilds something in Elementor that already exists as a block. Documentation gap, not a tech gap.' },
  { title: 'Image upload education should have been day one.', body: 'Phone-camera images at 4MB were silently degrading mobile performance. I added auto-compression in v1.2; should have been v1.0.' },
];

const nextSteps = [
  'Spanish-language version - a meaningful share of the target audience is bilingual, and the site is currently English-only',
  'Mentor-mentee matching flow as a logged-in experience',
  'Resource library with downloadable PDFs, filtered by topic',
  'SMS reminders for registered events - meeting the audience on the channel they actually use',
];

const SP_TABS = [
  { id: 'overview',   label: 'Overview'     },
  { id: 'discovery',  label: 'Discovery'    },
  { id: 'ideation',   label: 'Ideation'     },
  { id: 'design',     label: 'Design & Build' },
  { id: 'reflection', label: 'Reflection'   },
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

const SouthProjectCaseStudy = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('overview');
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('sp-page');
    return () => document.body.classList.remove('sp-page');
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 120;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    setActiveTab(sectionId);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 120);
      const scrollPosition = window.scrollY + 180;
      for (let i = SP_TABS.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(SP_TABS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(SP_TABS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <main className="sp-case-study">
        <button
          type="button"
          className="sp-home-button"
          onClick={() => navigateWithTransition(navigate, '/portfolio')}
        >
          ← HOME
        </button>

        <div className="sp-tabs-header">
          <div className="sp-tabs-shell">
            <div className="sp-tabs">
              {SP_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`sp-tab-button ${activeTab === tab.id ? 'active' : ''}`}
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
            className="sp-top-button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            BACK TO TOP ↑
          </button>
        )}

        {/* ── OVERVIEW ── */}
        <section id="overview" className="sp-hero">
          <Reveal className="sp-hero-copy">
            <p className="sp-eyebrow">South Project TX / Case Study</p>
            <h1>Rebuilding a nonprofit's public-facing site to support 10K+ monthly users.</h1>
            <p className="sp-lede">
              Ship event signups young moms can complete in under two minutes, and cut page load times by 35%.
            </p>
            <div className="sp-hero-actions">
              <a
                href="https://southprojecttx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="sp-primary-link"
              >
                View live site ↗
              </a>
            </div>
          </Reveal>

          <Reveal className="sp-hero-visual" delay={0.1}>
            <div className="sp-screen">
              <img src={sp} alt="South Project TX website homepage" />
            </div>
            <div className="sp-snapshot-strip">
              {snapshot.map((item) => (
                <div key={item.label} className="sp-snapshot-cell">
                  <span className="sp-snapshot-label">{item.label}</span>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="sp-snapshot-value sp-snapshot-link">
                      {item.value}
                    </a>
                  ) : (
                    <span className="sp-snapshot-value">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── OUTCOMES ── */}
        <section className="sp-outcomes-grid" aria-label="Project outcomes">
          {outcomes.map((item, i) => (
            <Reveal key={item.label} delay={0.06 * i} className="sp-outcome-card">
              <div className="sp-outcome-icon">{OutcomeIcons[item.iconKey]}</div>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <p>{item.sub}</p>
            </Reveal>
          ))}
        </section>

        {/* ── TL;DR ── */}
        <section className="sp-tldr">
          <Reveal>
            <p className="sp-kicker">TL;DR</p>
            <p className="sp-tldr-body">
              South Project TX is a Texas-based nonprofit that helps young mothers build stable, independent lives
              through mentorship, workshops, and community events. When I joined, the site was slow, hard to update,
              and the event signup flow was burying the call-to-action three scrolls deep. I led a full overhaul -
              restructured information architecture, rebuilt theme components for performance and accessibility, and
              redesigned the event signup flow so a young mom on a phone with two minutes between feedings can actually
              register without friction. The site now supports 10K+ monthly users without breaking a sweat, and the
              content team can publish events without filing a developer ticket.
            </p>
          </Reveal>
        </section>

        {/* ── DISCOVERY ── */}
        <section id="discovery" className="sp-story-section">
          <Reveal className="sp-section-intro">
            <p className="sp-kicker">01 / Discovery</p>
            <h2>The problem behind the problem.</h2>
            <p>
              The brief was "the site needs to be faster and look better." The actual problem surfaced when I
              shadowed the program manager for an afternoon: young moms were calling the office to register for
              events because they couldn't get through the website form on their phones. That's not a styling
              problem. That's a product failure for the exact people the org exists to serve.
            </p>
          </Reveal>

          <Reveal className="sp-research-card" delay={0.06}>
            <p className="sp-kicker">Research methods</p>
            <ul>
              {researchMethods.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="sp-findings-block" delay={0.08}>
            <p className="sp-kicker">What I learned</p>
            <div className="sp-findings-grid">
              {findings.map((f, i) => (
                <div key={f.title} className="sp-finding-item">
                  <span className="sp-finding-num">{String(i + 1).padStart(2, '0')}</span>
                  <strong>{f.title}</strong>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

        </section>

        {/* ── IDEATION ── */}
        <section id="ideation" className="sp-story-section">
          <Reveal className="sp-section-intro">
            <p className="sp-kicker">02 / Ideation</p>
            <h2>Framing the design challenge.</h2>
          </Reveal>

          <Reveal className="sp-hmw" delay={0.06}>
            <p className="sp-hmw-label">How might we</p>
            <p className="sp-hmw-body">
              build a site that loads instantly on a budget Android, lets a young mom register for an event in
              under two minutes, and lets the content team publish without engineering help - while also serving
              older desktop donors?
            </p>
          </Reveal>

          <Reveal className="sp-arch-block" delay={0.08}>
            <p className="sp-kicker">Architectural decisions</p>
            <div className="sp-arch-table" role="table" aria-label="Architectural decisions">
              <div className="sp-arch-head" role="row">
                <span role="columnheader">Decision</span>
                <span role="columnheader">Why</span>
              </div>
              {archDecisions.map((row) => (
                <div key={row.decision} className="sp-arch-row" role="row">
                  <span role="cell">{row.decision}</span>
                  <span role="cell">{row.why}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="sp-ia-block" delay={0.08}>
            <p className="sp-kicker">Information architecture</p>
            <p>Restructured around what users actually came to do, not how the org was internally organized:</p>
            <div className="sp-ia-diagram" aria-label="Information architecture diagram">
              <div className="sp-ia-node sp-ia-root">Home</div>
              <div className="sp-ia-connector" aria-hidden="true" />
              <div className="sp-ia-branches">
                {['About', 'Programs', 'Events', 'Partner', 'News', 'Donate'].map((n) => (
                  <div key={n} className={`sp-ia-node${n === 'Events' || n === 'Donate' ? ' sp-ia-node--highlight' : ''}`}>{n}</div>
                ))}
              </div>
              <div className="sp-ia-note">
                <strong>Key changes:</strong> Events promoted to top-nav (was buried under "Programs") · Donate got a persistent header button (was a footer link)
              </div>
            </div>
          </Reveal>

        </section>

        {/* ── DESIGN & BUILD ── */}
        <section id="design" className="sp-story-section">
          <Reveal className="sp-section-intro">
            <p className="sp-kicker">03 / Design & Build</p>
            <h2>Performance budget and key components.</h2>
            <p>
              I set a hard budget on day one and held every PR against it.
            </p>
          </Reveal>

          <Reveal className="sp-budget-block" delay={0.06}>
            <p className="sp-kicker">Performance budget</p>
            <div className="sp-budget-table" role="table" aria-label="Performance budget">
              <div className="sp-budget-head" role="row">
                <span role="columnheader">Metric</span>
                <span role="columnheader">Target</span>
              </div>
              {performanceBudget.map((row) => (
                <div key={row.metric} className="sp-budget-row" role="row">
                  <span role="cell">{row.metric}</span>
                  <span role="cell" className="sp-budget-target">{row.target}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="sp-components-block" delay={0.08}>
            <p className="sp-kicker">Key components rebuilt</p>
            <div className="sp-components-grid">
              {components.map((c, i) => (
                <div key={c.title} className="sp-component-card">
                  <span className="sp-component-num">{String(i + 1).padStart(2, '0')}</span>
                  <strong>{c.title}</strong>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="sp-a11y-block" delay={0.08}>
            <p className="sp-kicker">Accessibility</p>
            <ul className="sp-a11y-list">
              {a11yNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="sp-screen-block" delay={0.08}>
            <p className="sp-kicker">Live site</p>
            <div className="sp-screens-grid">
              <img src={sp} alt="South Project TX homepage" className="sp-screen-img" />
              <img src={spGif} alt="South Project TX event signup flow animation" className="sp-screen-img" />
            </div>
          </Reveal>
        </section>

        {/* ── REFLECTION ── */}
        <section id="reflection" className="sp-story-section">
          <Reveal className="sp-section-intro">
            <p className="sp-kicker">04 / Reflection</p>
            <h2>The most important design decision was deciding whose problem to solve first.</h2>
            <p>
              The brief was "make it faster and prettier." The user was "a young mom on a 3-year-old phone with
              90 seconds to register before the baby wakes up." Designing for the second framing produced a site
              that also satisfied the first - but the reverse wouldn't have been true.
            </p>
          </Reveal>

          <div className="sp-reflection-grid">
            <Reveal className="sp-reflection-col" delay={0.04}>
              <p className="sp-kicker">What worked</p>
              {workedWell.map((w) => (
                <div key={w.title} className="sp-reflection-item">
                  <strong>{w.title}</strong>
                  <p>{w.body}</p>
                </div>
              ))}
            </Reveal>

            <Reveal className="sp-reflection-col" delay={0.08}>
              <p className="sp-kicker">What I'd do differently</p>
              {wouldChange.map((w) => (
                <div key={w.title} className="sp-reflection-item">
                  <strong>{w.title}</strong>
                  <p>{w.body}</p>
                </div>
              ))}
            </Reveal>

            <Reveal className="sp-reflection-col sp-reflection-col--dark" delay={0.12}>
              <p className="sp-kicker">What's next</p>
              <ul className="sp-next-list">
                {nextSteps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Reveal>
          </div>

        </section>

        {/* ── NEXT CASE STUDY ── */}
        <nav className="sp-next-case" aria-label="Next case study">
          <Reveal>
            <p className="sp-kicker">Next case study</p>
            <button
              type="button"
              className="sp-next-button"
              onClick={() => navigateWithTransition(navigate, '/aims')}
            >
              AIMS UW - RSO website rebuild ↗
            </button>
          </Reveal>
        </nav>
      </main>
    </>
  );
};

export default SouthProjectCaseStudy;
