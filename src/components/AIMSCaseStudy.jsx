import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './AIMSCaseStudy.css';
import aims from '../assets/aims.png';
import aims1 from '../assets/aims1.png';
import aimsGif from '../assets/gifs/aims.gif';
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
  { label: 'Role', value: 'Frontend Developer ' },
  { label: 'For', value: 'UW iSchool' },
  { label: 'Type', value: 'WordPress theme' },
  { label: 'Duration', value: 'Jan 2025 – Aug 2025' },
  { label: 'Tools', value: 'Figma, WordPress' },
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
  { title: 'UW infrastructure was a hard constraint.', body: 'Hosted on UW\'s WordPress multisite, with no plugin freedom, no custom server config, and no budget for paid services.' },
  { title: 'Accessibility wasn\'t optional.', body: 'The iSchool\'s accessibility liaison had flagged the legacy site twice. Fixing it was a precondition, not a stretch goal.' },
];

const personas = [
  { name: 'Maya', role: 'VP of Events', need: 'Publish 2–4 events per week, has never used WordPress, lives in her phone.' },
  { name: 'Jordan', role: 'Prospective Student', need: 'Visiting on mobile during an info session and wants to know "is this org for me?" in under 30 seconds.' },
  { name: 'Dr. Patel', role: 'Faculty Advisor', need: 'Checks quarterly to verify the org is active and brand-compliant.' },
];

const concepts = [
  { name: 'A, Squarespace migration', pros: 'Familiar editing UX', cons: 'UW won\'t host externally; brand kit limitations', chosen: false },
  { name: 'B, Off-the-shelf WP theme + page builder', pros: 'Fast to ship', cons: 'Bloated, accessibility debt, hard to enforce brand', chosen: false },
  { name: 'C, Custom _s theme + ACF Pro', pros: 'Full control of accessibility, performance, brand; structured editing UX', cons: 'Higher build cost upfront', chosen: true },
];

const designPrinciples = [
  { number: '01', title: 'Officer-first', body: 'If an officer can\'t publish in under 5 minutes on a phone, redesign the form.' },
  { number: '02', title: 'Mobile canonical', body: 'Design mobile first, scale up. 62% of users never see the desktop view.' },
  { number: '03', title: 'Accessibility by default', body: 'Every component ships WCAG 2.2 AA. Not a feature, a baseline.' },
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
  { name: 'SCSS 7-1 architecture', reason: 'Tokens, mixins, base, components, with a single source of truth.' },
  { name: 'Vanilla JS', reason: 'No jQuery, no React. ~12KB of JS total. Keeps handoff simple.' },
  { name: 'sass + terser only', reason: 'No heavy build pipeline, understandable for any future student dev.' },
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
  { title: 'Simplify the ACF schema sooner.', body: 'Separate "short" and "long" description fields. Officers ignored the long one. Consolidated in v1.1.' },
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
  { id: 'overview',   label: 'Overview'   },
  { id: 'live-site',  label: 'Live Site'  },
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
            <p className="aims-eyebrow">AIMS UW / Frontend </p>
            <h1>Rebuilding the AIMS website for student leaders </h1>
            <p className="aims-lede">
             A redesign of the Association of Information Management Students website, built so student leaders could update content easily and maintain the site for years after handoff.
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

        {/* LIVE SITE */}
        <section id="live-site" className="aims-story-section">
          <Reveal className="aims-section-intro">
            <p className="aims-kicker">01 / Live Site</p>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="aims-screens-grid">
              <img src={aims1} alt="AIMS UW secondary view" className="aims-screen-img" />
              <img src={aimsGif} alt="AIMS UW interaction demo" className="aims-screen-img aims-screen-img--large" />
            </div>
          </Reveal>
        </section>

        {/* REFLECTION */}
        <section id="reflection" className="aims-story-section">
          <Reveal className="aims-section-intro">
            <p className="aims-kicker">02 / Reflection</p>
          </Reveal>

          <div className="aims-reflection-grid">
            <Reveal className="aims-reflection-col" delay={0.04}>
              <p className="aims-kicker">What worked</p>
              <ul className="aims-next-list">
                <li>Rebuilding the site gave AIMS a clearer and more professional student-facing presence.</li>
                <li>Events became easier to organize, update, and highlight for students.</li>
                <li>The new page structure made it easier for students to find events, updates, and organization information.</li>
                <li>The layout was built with handoff in mind, making it easier for future student leaders to maintain.</li>
              </ul>
            </Reveal>

            <Reveal className="aims-reflection-col" delay={0.08}>
              <p className="aims-kicker">Challenges</p>
              <ul className="aims-next-list">
                <li>Planning success metrics earlier, like form submissions and user drop-off.</li>
                <li>Organizing events, resources, people, and updates so students could find information quickly.</li>
                <li>Improving the site through feedback instead of treating launch as the final step.</li>
              </ul>
            </Reveal>
          </div>
        </section>

        <nav className="aims-next-case" aria-label="Next">
          <Reveal>
            <p className="aims-kicker">Next</p>
            <button
              type="button"
              className="aims-next-button"
              onClick={() => navigateWithTransition(navigate, '/marketpulse')}
            >
              Portfolio Insights &rarr;
            </button>
          </Reveal>
        </nav>
      </main>
    </>
  );
};

export default AIMSCaseStudy;
