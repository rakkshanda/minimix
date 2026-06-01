import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './SouthProjectCaseStudy.css';
import sp from '../assets/sp2.png';
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
  { iconKey: 'speed',  value: '35%',    label: 'improvement in page load speed',},
  { iconKey: 'mobile', value: '20%',    label: 'increase in mobile engagement', },
  { iconKey: 'users',  value: '10K+',   label: 'monthly users served' },
  { iconKey: 'form',   value: '<2 min', label: 'event signup time'},
];

const visibleOutcomes = outcomes.slice(0, 4);

const snapshot = [
  { label: 'Role', value: 'Front-end Developer' },
  { label: 'Company', value: 'South Project TX' },
  { label: 'Type', value: 'Full website overhaul + ongoing development' },
  { label: 'Duration', value: 'Sept 2025 – Present' },
  { label: 'Tools', value: 'WordPress, Elementor, PHP, SCSS, JavaScript' },
  { label: 'Live site', value: 'southprojecttx.com', link: 'https://southprojecttx.com' },
];

const researchMethods = [
  'Reviewed existing event pages to identify layout, content, and registration flow inconsistencies',
  'Created a prioritized update list based on my page review and feedback from the manager',
  'Worked closely with the manager, who had clear priorities for what each event page needed to include',
  'Checked site stats and saw that mobile users made up a large share of visitors, so I focused on a mobile-first experience',
  'Tested event pages and registration forms on a phone to catch friction points before publishing updates',
];

const findings = [
  {
    title: 'Most traffic came from mobile users.',
    body: 'The analytics dashboard showed that a large share of users were visiting and registering from mobile devices, so the event experience needed to be designed with mobile users in mind.',
  },
  {
    title: 'Event pages were the #1 entry point',
    body: 'Since many visitors were landing directly on event pages, the layout, content order, and registration flow needed to be clear, consistent, and easy to use on mobile.',
  },
  {
    title: 'Event content was spread across multiple sources.',
    body: 'Updating an event meant editing four different places: the homepage cards, event page and the menu',
  },
];

const archDecisions = [

  {
    decision: 'Create a consistent event page structure',
    why: 'Event pages needed the same content flow, button placement, and registration path so visitors could quickly understand the event and know how to sign up.',
  },
 
  {
    decision: 'Build with a mobile-first approach',
    why: 'The analytics dashboard showed that many users were visiting and registering from mobile devices, so I prioritized mobile layout, spacing, button size, and form usability.',
  },
  {
    decision: 'Add quick registration access for important events',
    why: 'For high-priority events, I added a homepage modal so visitors could register faster without searching through multiple pages.',
  },
  {
    decision: 'Keep the visual system aligned with the brand',
    why: 'All updates needed to stay consistent with South Project TX’s pink and white brand style, including buttons, links, highlights, and homepage sections.',
  },
    {
    decision: 'Add SEO tags to blogs and monthly content updates',
    why: 'I added SEO titles, descriptions, and tags to blog posts, and helped keep monthly blogs updated so the site content stayed current and easier to discover.',
  },
   {
    decision: 'Update menus for clearer navigation',
    why: 'I updated the site menus so blogs, programs, events, and donation pages were easier to find and better highlighted for visitors.',
  },
   {
    decision: 'Use reusable sections for event updates',
    why: 'Event details were appearing in multiple places, including homepage cards, event pages, and the menu, so reusable patterns would have helped keep the content more consistent and easier to maintain.',
  },
];

const components = [
  {
    title: 'Event page updates',
    body: 'Updated event pages so they followed a more consistent structure, including clear event details, stronger CTA placement, and a smoother registration path across pages.',
  },
  {
    title: 'Registration forms',
    body: 'Set up and tested registration forms for events, with a focus on mobile usability, clear field labels, spacing, and making the signup flow easier to complete on a phone.',
  },
  {
    title: 'Homepage registration modal',
    body: 'Added a quick registration modal for important events so visitors could sign up directly from the homepage without searching through multiple pages.',
  },
  {
    title: 'Homepage content updates',
    body: 'Updated homepage stats, event highlights, and visual sections to better show the impact of South Project TX’s programs while staying aligned with the pink and white brand system.',
  },
  {
    title: 'Navigation updates',
    body: 'Updated the site menus to make Events, Programs, News & Updates, and donation-related pages easier to find from the main navigation.',
  },
  {
    title: 'Blog and SEO updates',
    body: 'Updated monthly blog content and added SEO titles, descriptions, and tags so posts were better organized and easier to discover.',
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
  {
    title: 'A consistent event structure made updates easier.',
    body: 'Creating a repeatable structure for event pages helped keep event details, CTAs, and registration forms more consistent across the site.',
  },
  {
    title: 'Mobile testing helped catch small usability issues.',
    body: 'Testing the pages and forms on a phone helped me notice spacing, button placement, and readability issues before updates were published.',
  },
  {
    title: 'Homepage updates made key information easier to find.',
    body: 'Updating homepage stats, event highlights, and quick registration access helped visitors find important information faster while keeping the page aligned with the brand.',
  },
];

const wouldChange = [
  {
    title: 'Avoiding unnecessary overengineering',
    body: 'I researched ways to update event content across multiple areas from one source, but after reviewing the effort and the team’s actual workflow, I decided it was not worth overengineering at that stage.',
  },
  {
    title: 'Resolving homepage server 500 errors',
    body: 'A bigger technical challenge was that homepage updates sometimes caused a server 500 error. I tried several fixes, including checking plugins and deleting revisions, before finding a stable solution.',
  },
  {
    title: 'Fixing the issue with a clean homepage version',
    body: 'The fix that worked was duplicating the homepage so the team could start with a clean revision history. This resolved the issue and made future homepage updates more stable.',
  },
];
const nextSteps = [
  'Fix Contact Us page so visitors can quickly reach the right team for event questions, program support, partnerships, or donations',
  'Add a moderated comment section to blog posts to encourage community engagement while keeping the site safe and manageable for the team',
  'Redesign the homepage navigation bar for clearer browsing, and refine page-wide font sizing, spacing, and visual alignment for a more polished layout',
  'Strengthen blog and event SEO with better page titles, meta descriptions, image alt text, and internal links between related content',
];

const SP_TABS = [
  { id: 'overview',   label: 'Overview'     },
  { id: 'discovery',  label: 'Discovery'    },
  { id: 'ideation',   label: 'Ideation'     },
  { id: 'design',     label: 'Development' },
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
  <p className="sp-eyebrow">South Project TX / Frontend </p>
  <h1>Building a more usable, mobile-friendly WordPress site for a nonprofit community.</h1>
  <p className="sp-lede">
    Improved event pages, registration forms, homepage content, navigation, and blog SEO so visitors
    could find key information faster and the team could maintain updates more easily.
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
          {visibleOutcomes.map((item, i) => (
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
              redesigned the event signup flow so a young mom on a phone can actually
              register without friction.On event sign up page there is a lot of monthly users. I also preiodically update blogs and events pages an dI am responsible for homepage updates.
            </p>
          </Reveal>
        </section>

        {/* ── DISCOVERY ── */}
        <section id="discovery" className="sp-story-section">
          <Reveal className="sp-section-intro">
            <p className="sp-kicker">01 / Discovery</p>
            <h2>Improving the event experience.</h2>
            <p>
              When I started updating the Events section, I noticed that each event page needed a more consistent structure and registration flow. Since events are one of the main ways South Project TX connects with its community, I focused on making the pages easier to scan, keeping the layout consistent across events, and setting up clear registration forms for each one. I also tested the flow on mobile to make sure users could register without confusion.

For important events, I added a homepage modal so visitors could quickly register without having to search through the site. I also updated homepage stats to better highlight the program’s impact and made sure all design updates stayed aligned with the nonprofit’s pink and white brand system, including pink buttons, links, and visual accents.
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
            <h2>Framing the development challenge.</h2>
          </Reveal>

          <Reveal className="sp-hmw" delay={0.06}>
            <p className="sp-hmw-label">How might we</p>
            <p className="sp-hmw-body">
            How might we build a consistent, mobile-first event flow that improves registration access, keeps event content easier to maintain, and stays aligned with South Project TX’s brand system?
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
  <p>
    Updated the navigation so the most important visitor paths were easier to find, including events,
    programs, partner information, and monthly blog updates.
  </p>

  <div className="sp-ia-diagram" aria-label="Information architecture diagram">
    <div className="sp-ia-node sp-ia-root">Home</div>
    <div className="sp-ia-connector" aria-hidden="true" />

    <div className="sp-ia-branches">
      {['About', 'Events', 'Partner with Us', 'News & Updates', 'Merchandise', 'Programs'].map((n) => (
        <div
          key={n}
          className={`sp-ia-node${
            n === 'Events' || n === 'Programs' || n === 'News & Updates' ? ' sp-ia-node--highlight' : ''
          }`}
        >
          {n}
        </div>
      ))}
    </div>

    <div className="sp-ia-note">
      <strong>Key changes:</strong> Events, Programs, and News & Updates were made more visible in the
      main navigation so visitors could find event registration, program details, and monthly blog content
      more easily.
    </div>
  </div>
</Reveal>

        </section>

        {/* ── DESIGN & BUILD ── */}
        <section id="design" className="sp-story-section">
          <Reveal className="sp-section-intro">
             <p className="sp-kicker">03 / Development</p>
    <h2>Frontend updates, content structure, and mobile improvements.</h2>
    <p>
      I focused on improving the pages and flows visitors interacted with most, including event pages,
      registration forms, homepage updates, navigation, and blog content. The goal was to make the site
      easier to use on mobile, easier to maintain in WordPress, and consistent with South Project TX’s
      pink and white brand system.
    </p>
          </Reveal>

     

          <Reveal className="sp-components-block" delay={0.08}>
            <p className="sp-kicker">Key frontend updates</p>
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
    <h2>What this project taught me about building maintainable nonprofit websites.</h2>
    <p>
      This project showed me how small frontend and content-structure improvements can make a big difference
      for a nonprofit team. The most important work was making event
      updates easier to manage, improving the mobile experience, and keeping the site consistent as new blogs,
      events, and homepage updates were added over time.
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
      <p className="sp-kicker">Challenges</p>
      {wouldChange.map((w) => (
        <div key={w.title} className="sp-reflection-item">
          <strong>{w.title}</strong>
          <p>{w.body}</p>
        </div>
      ))}
    </Reveal>

    <Reveal className="sp-reflection-col sp-reflection-col--dark" delay={0.12}>
      <p className="sp-kicker">Next steps</p>
      <ul className="sp-next-list">
        {nextSteps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </Reveal>
  </div>
</section>

        {/* ── Next ── */}
        <nav className="sp-next-case" aria-label="Next">
          <Reveal>
            <p className="sp-kicker">Next</p>
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
