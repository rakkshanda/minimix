import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './FolkloreCaseStudy.css';
import folklore from '../assets/folklore.png';
import folklore2 from '../assets/6.png';
import lofi1 from '../assets/folklore/lofi1.png';
import lofi2 from '../assets/folklore/lofi2.png';
import persona1 from '../assets/folklore/persona1.png';
import persona2 from '../assets/folklore/persona2.png';
import persona3 from '../assets/folklore/persona 3.png';
import { navigateWithTransition } from '../utils/viewTransition';

const EASE = [0.22, 1, 0.36, 1];

const FOLKLORE_TABS = [
  { id: 'overview',             label: 'Overview'       },
  { id: 'product-requirements', label: 'Product Req.'   },
  { id: 'user-research',        label: 'User Research'  },
  { id: 'personas',             label: 'Personas'       },
  { id: 'low-fi',               label: 'Low-Fi'         },
  { id: 'high-fi',              label: 'High-Fi'        },
  { id: 'development',          label: 'Development'    },
  { id: 'testing',              label: 'User Testing'   },
  { id: 'reflection',           label: 'Reflection'     },
];

const snapshotItems = [
  { label: 'Role',     value: 'Front-End Developer' },
  { label: 'For',   value: 'University of Washington' },
  { label: 'Type',     value: 'WordPress plugin' },
  { label: 'Duration', value: 'Jan 2025 – Aug 2025' },
  { label: 'Tools',    value: 'WordPress, PHP, jQuery' },
  { label: 'Live',     value: 'View plugin ↗', link: 'https://www.washington.edu/docs/plugins/uw-directory-plugin/directory-example/' },
];

const OutcomeIcons = {
  system: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 18v2" />
    </svg>
  ),
  research: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
  features: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <path d="M7 7h.01" />
      <path d="M17 7h.01" />
      <path d="M7 17h.01" />
      <path d="M17 17h.01" />
    </svg>
  ),
  grid: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
};

const outcomes = [
  {
    iconKey: 'system',
    value: 'UW-wide',
    label: 'reusable plugin model',
    sub: 'Standardized directory plugin that any UW department can adopt.',
  },
  {
    iconKey: 'research',
    value: '38',
    label: 'survey participants',
    sub: 'Students, staff, and professors informed the feature set.',
  },
  {
    iconKey: 'features',
    value: 'Top 3',
    label: 'validated core features',
    sub: 'Filtering, keyword search, and contact links ranked highest.',
  },
  {
    iconKey: 'grid',
    value: '65.8%',
    label: 'preferred grid view',
    sub: 'Validated the default layout direction over list view.',
  },
];

const prdObjectives = [
  'Enable users to easily search and access the UW directory',
  'Provide an intuitive UI/UX for efficient search and filtering',
  'Integrate smoothly with university web platforms',
];

const prdTargetAudience = [
  'Students',
  'Faculty and staff members',
  'Administrative personnel',
];

const prdKeyFeatures = [
  'Search functionality by name, department, or role',
  'Advanced filters by department, role, and campus location',
  'Profile view with contact information, office location, and department',
];

const prdFunctional = [
  'Implement search by name, department, and role',
  'Display profile details including name, contact, office location, and department',
  'Implement advanced search filters for department, role, and campus',
  'Ensure a responsive design across devices',
];




const researchStats = [
  { stat: '94%',   label: 'viewed directories on laptop or desktop, with mobile a meaningful secondary case' },
  { stat: '71%',   label: 'said their primary use was finding contact information' },
  { stat: '68.4%', label: 'ranked filtering by category (role, department, skills) as a top-3 feature' },
  { stat: '57.9%', label: 'ranked keyword search functionality as a top-3 feature' },
  { stat: '50%',   label: 'ranked links to email, LinkedIn, and websites as a top-3 feature' },
  { stat: '65.8%', label: 'preferred grid view over list view' },
];

const researchRecs = [
  'Add fuzzy search and suggestions',
  'Include profile picture, first name, last name, hyperlinked contact info, website, role/title, and department on each card',
  'Show last-updated metadata',
  'Automate updating information through a database',
  'Allow flexible content per card',
  'Provide filters based on card information',
  'Default to grid view with a toggle to list',
  'On expand, show the full bio',
];

const personaProfiles = [
  {
    name: 'Emily Chen',
    pronouns: '(she/her)',
    img: persona1,
    quote: '"I need to find resources quickly so I can focus on my studies."',
    biography: 'Emily is a 20-year-old undergraduate student majoring in Computer Science at the University of Washington. She is highly tech-savvy and balances a busy schedule of classes, internships, and extracurricular activities. Her academic success depends on her ability to access faculty and resources quickly. As a third year student approaching graduation, she uses people directories to connect with grad students for research opportunities and connect with her advisor.',
    traits: ['Curious', 'Ambitious', 'Tech-savvy'],
    facts: [
      { label: 'Work/title', value: 'Student' },
      { label: 'Age', value: '20' },
      { label: 'Website usage', value: 'Highly active' },
    ],
    needs: [
      'Quickly find contact information for professors, TAs, and staff members.',
      'Navigate the directory easily, especially on mobile devices.',
      'Access information to schedule meetings.',
    ],
    frustrations: [
      'Difficulty navigating the current directory on mobile.',
      'Search results lack clarity and role-specific filtering.',
      'Limited user-friendly features.',
    ],
    considerations: [
      'Needs a responsive and mobile-friendly interface.',
      'Role-based filters (faculty, staff, student) for efficient searches.',
      "Integration with the university's existing system that makes navigation familiar.",
    ],
  },
  {
    name: 'Dr. Michael Lee',
    pronouns: '(he/him)',
    img: persona2,
    quote: '"A clear and accessible system makes my day easier."',
    biography: 'Dr. Michael Lee is a 45-year-old Associate Professor in the Informatics department. With over 15 years at the University of Washington, he frequently communicates with students, staff, and research collaborators. He needs reliable tools for managing his professional profile and locating resources efficiently.',
    traits: ['Organized', 'Analytical', 'Approachable'],
    facts: [
      { label: 'Work/title', value: 'Associate Professor' },
      { label: 'Age', value: '45' },
      { label: 'Website usage', value: 'Highly active' },
    ],
    needs: [
      'Easily update his profile information for accuracy.',
      'Locate administrative and faculty contacts.',
      'Use an intuitive system that saves time.',
    ],
    frustrations: [
      'Complex procedures to update profile details.',
      'Cluttered and hard-to-navigate search results.',
      'Lack of user support when technical issues arise.',
    ],
    considerations: [
      'Ensure the ability to edit and update profile details seamlessly.',
      'Create a clear role-based category system.',
      'User-friendly interface with minimal technical barriers.',
    ],
  },
  {
    name: '3. Sarah Martinez',
    pronouns: '(she/her)',
    img: persona3,
    quote: '"I need quick access to the right information for the people I support."',
    biography: 'Sarah is a 35-year-old administrative assistant in the College of Engineering. She has been working at the University of Washington for 8 years and supports faculty and students. Her responsibilities require her to frequently access the directory to connect others with resources.',
    traits: ['Efficient', 'Friendly', 'Resourceful'],
    facts: [
      { label: 'Work/title', value: 'Administrative Assistant' },
      { label: 'Age', value: '35' },
      { label: 'Website usage', value: 'Highly active' },
    ],
    needs: [
      'Quickly search and retrieve contact information by department.',
      'Provide students with accurate and timely support.',
      'Manage frequently contacted lists for efficiency.',
    ],
    frustrations: [
      'Inefficient filters for narrowing down results.',
      'Repetitive tasks due to lack of saved or quick-access options.',
      'Difficulty finding specific department-based information.',
    ],
    considerations: [
      'Implement advanced filtering options (e.g., by department, role).',
      'Quick-access shortcuts for repeated use cases.',
      'Reliable system with minimal downtime.',
    ],
  },
];

const loFiDecisions = [
  'Move away from animations; use modal, toggle, and new-page patterns instead',
  'Build filter and search as primary interactions',
  'Capture basic information per card: name, role, department, email',
  'Allow custom input fields for additional details',
];

const hiFiFeatures = [
  'Advanced filters by department and role',
  'Toggleable views: grid versus table',
  'Defined card components with profile photo, name, role, department, contact info, and a "View Profile" CTA',
];

const devFeatures = [
  'Categories filter dropdown for narrowing the directory by department',
  'Search field with real-time, search-as-you-type results',
  'Grid and list view toggle',
  'Card components rendering profile photo, name, role, department, contact info, and a View Profile button',
  'Sorted by department, with controls for adjusting display order',
];

const testingTasks = [
  { task: 'Task 1: Add a person to the directory',              tested: 'CMS-side editing flow for content editors' },
  { task: 'Task 2: Use search to find a specific person',       tested: 'Search reliability and speed' },
  { task: 'Task 3: Filter people by department',                tested: 'Filter clarity and discoverability' },
  { task: 'Task 4: Switch to list view and find more about Liam', tested: 'View-toggle interaction and profile expansion' },
];

const testingQuotes = [
  '"Really likes the modals, they have a clean feel"',
  '"Looks pretty straightforward"',
  '"Can we change the order of the way entries appear, alphabetical or leadership first? We want to be able to control that."',
];

const reflectionWorked = [
  // 'The PRD up front saved weeks of back-and-forth later. Every design and dev decision had a document to point at.',
  'Letting the survey data drive the feature set, not the other way around. The grid-vs-list toggle, filter categories, and contact-link emphasis all came from real numbers.',
  'Building on the UW CMS testing site helped stakeholders give better feedback on a real plugin than they would have on a Figma file.',
  'The grid view worked well as the default because it made profiles feel easier to scan, while the list view still supported users who wanted a more compact layout.',
];

function Reveal({ children, delay = 0, className = '' }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 28 }}
      animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

function PersonaCarousel({ personas }) {
  const [idx, setIdx] = useState(0);
  const persona = personas[idx];
  const prev = () => setIdx((i) => (i - 1 + personas.length) % personas.length);
  const next = () => setIdx((i) => (i + 1) % personas.length);

  return (
    <div className="folklore-persona-carousel">
      <button type="button" className="folklore-persona-arrow folklore-persona-arrow--prev" onClick={prev} aria-label="Previous persona">&#8592;</button>

      <Reveal key={persona.name} className="folklore-persona-board">
        <article className="folklore-persona-poster">
          <div className="folklore-persona-sidebar">
            <div className="folklore-persona-portrait-frame">
              <img src={persona.img} alt={persona.name} className="folklore-persona-poster-img" />
            </div>
            <div className="folklore-persona-identity">
              <h3>{persona.name}</h3>
              <p className="folklore-persona-pronouns">{persona.pronouns}</p>
              <p className="folklore-persona-quote">{persona.quote}</p>
            </div>
            <dl className="folklore-persona-facts">
              {persona.facts.map((fact) => (
                <div key={`${persona.name}-${fact.label}`} className="folklore-persona-fact-row">
                  <dt>{fact.label}:</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="folklore-persona-main">
            <div className="folklore-persona-biography-panel">
              <h3>Biography</h3>
              <p>{persona.biography}</p>
            </div>

            <div className="folklore-persona-content">
              <div className="folklore-persona-content-main">
                <div className="folklore-persona-traits">
                  <span>Personality traits:</span>
                  <div className="folklore-persona-tag-list">
                    {persona.traits.map((trait) => (
                      <span key={`${persona.name}-${trait}`} className="folklore-persona-tag">{trait}</span>
                    ))}
                  </div>
                </div>

                <div className="folklore-persona-section-block">
                  <h4>Needs + goals</h4>
                  <ul className="folklore-persona-list">
                    {persona.needs.map((item) => <li key={`${persona.name}-need-${item}`}>{item}</li>)}
                  </ul>
                </div>

                <div className="folklore-persona-section-block">
                  <h4>Frustrations</h4>
                  <ul className="folklore-persona-list">
                    {persona.frustrations.map((item) => <li key={`${persona.name}-frustration-${item}`}>{item}</li>)}
                  </ul>
                </div>
              </div>

              <aside className="folklore-persona-considerations">
                <h4>Technical challenges + considerations</h4>
                {persona.considerations.map((item) => (
                  <p key={`${persona.name}-consideration-${item}`}>{item}</p>
                ))}
              </aside>
            </div>
          </div>
        </article>
      </Reveal>

      <button type="button" className="folklore-persona-arrow folklore-persona-arrow--next" onClick={next} aria-label="Next persona">&#8594;</button>

      <div className="folklore-persona-dots">
        {personas.map((p, i) => (
          <button key={p.name} type="button" className={`folklore-persona-dot${i === idx ? ' active' : ''}`} onClick={() => setIdx(i)} aria-label={p.name} />
        ))}
      </div>
    </div>
  );
}

const FolkloreCaseStudy = () => {
  const navigate = useNavigate();
  const tabRefs = React.useRef([]);
  const [activeTab, setActiveTab] = React.useState('overview');
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('folklore-page');
    return () => document.body.classList.remove('folklore-page');
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 120;
    window.scrollTo({ top, behavior: 'smooth' });
    setActiveTab(sectionId);
  };

  const handleTabKeyDown = (e, idx) => {
    const last = FOLKLORE_TABS.length - 1;
    let next = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); next = (idx + 1) % FOLKLORE_TABS.length; }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); next = (idx - 1 + FOLKLORE_TABS.length) % FOLKLORE_TABS.length; }
    else if (e.key === 'Home') { e.preventDefault(); next = 0; }
    else if (e.key === 'End') { e.preventDefault(); next = last; }
    if (next !== null) { tabRefs.current[next]?.focus(); scrollToSection(FOLKLORE_TABS[next].id); }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 120);
      const scrollPos = window.scrollY + 180;
      for (let i = FOLKLORE_TABS.length - 1; i >= 0; i--) {
        const section = document.getElementById(FOLKLORE_TABS[i].id);
        if (section && section.offsetTop <= scrollPos) {
          setActiveTab(FOLKLORE_TABS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="folklore-case-study">
      <button
        type="button"
        className="folklore-home-button"
        onClick={() => navigateWithTransition(navigate, '/portfolio')}
      >
        ← HOME
      </button>

      <div className="folklore-tabs-header" role="navigation" aria-label="Case study navigation">
        <div className="folklore-tabs-shell">
          <div role="tablist" aria-label="Case study sections" className="folklore-tabs">
            {FOLKLORE_TABS.map((tab, idx) => (
              <button
                key={tab.id}
                ref={(el) => { tabRefs.current[idx] = el; }}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                tabIndex={activeTab === tab.id ? 0 : -1}
                className={`folklore-tab-button${activeTab === tab.id ? ' active' : ''}`}
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
          className="folklore-top-button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          BACK TO TOP ↑
        </button>
      )}

      {/* ── 01 OVERVIEW ── */}
      <section id="overview" className="folklore-hero" role="tabpanel" aria-labelledby="tab-overview" tabIndex={0}>
        <Reveal className="folklore-hero-copy">
          <p className="folklore-eyebrow">Folklore / Frontend project </p>
          <h1>A standardized WordPress directory plugin for the University of Washington.</h1>
          <p className="folklore-lede">
            Folklore rethinks the UW directory as a faster, clearer tool for finding
            contact and department information, with a plugin that any department can adopt.
          </p>
        </Reveal>

        <Reveal className="folklore-hero-visual" delay={0.08}>
          <div className="folklore-screen folklore-screen--connected">
            <img src={folklore} alt="Folklore directory interface showing grid view with profile cards" />
          </div>
          <div className="folklore-snapshot-strip">
            {snapshotItems.map((item) => (
              <div key={item.label} className="folklore-snapshot-cell">
                <span className="folklore-meta-label">{item.label}</span>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="folklore-meta-link">
                    {item.value}
                  </a>
                ) : (
                  <span className="folklore-meta-value">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="folklore-hero-outcomes">
          <p className="folklore-outcomes-label">Outcomes at a glance</p>
          <div className="folklore-outcomes-grid">
            {outcomes.map((item, i) => (
              <Reveal key={item.label} delay={0.05 * i} className="folklore-outcome-card">
                <div className="folklore-outcome-icon">{OutcomeIcons[item.iconKey]}</div>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <p>{item.sub}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 PRODUCT REQUIREMENTS ── */}
      <section id="product-requirements" className="folklore-section" role="tabpanel" aria-labelledby="tab-product-requirements" tabIndex={0}>
        <Reveal className="folklore-section-intro">
          <p className="folklore-kicker">02 / Product Requirements</p>
          <p>
            Before any design or code, I helped document what the plugin needed to do, who it served, and which constraints were non-negotiable.
          </p>
        </Reveal>

        <Reveal className="folklore-prd-grid" delay={0.06}>
          <div className="folklore-prd-group">
            <h3>Objectives</h3>
            <ul className="folklore-bullet-list">
              {prdObjectives.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="folklore-prd-group">
            <h3>Target Audience</h3>
            <ul className="folklore-bullet-list">
              {prdTargetAudience.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="folklore-prd-group">
            <h3>Key Features</h3>
            <ul className="folklore-bullet-list">
              {prdKeyFeatures.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="folklore-prd-group">
            <h3>Functional Requirements</h3>
            <ul className="folklore-bullet-list">
              {prdFunctional.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

       

       
        </Reveal>
      </section>

      {/* Timeline & Roadmap section hidden for now. */}

      {/* ── 03 USER RESEARCH ── */}
      <section id="user-research" className="folklore-section" role="tabpanel" aria-labelledby="tab-user-research" tabIndex={0}>
        <Reveal className="folklore-section-intro">
          <p className="folklore-kicker">03 / User Research</p>
          <h2>Survey results helped shape the features</h2>
          <p>
TThe survey conducted with 38 participants resulted in a clear feature direction, with users prioritizing filtering, keyword search, contact links, and a grid-based layout.  </p>
        </Reveal>

        <Reveal className="folklore-stat-grid" delay={0.06}>
          {researchStats.map((s) => (
            <div key={s.stat} className="folklore-stat-card">
              <span className="folklore-stat-number">{s.stat}</span>
              <p className="folklore-stat-label">{s.label}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.08}>
          <div className="folklore-goals-panel" style={{ marginTop: '24px' }}>
            <p className="folklore-meta-label" style={{ marginBottom: '16px' }}>Recommendations from the data</p>
            <ul className="folklore-bullet-list">
              {researchRecs.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* ── 04 PERSONAS ── */}
      <section id="personas" className="folklore-section" role="tabpanel" aria-labelledby="tab-personas" tabIndex={0}>
        <Reveal className="folklore-section-intro">
          <p className="folklore-kicker">04 / User Personas</p>
          <h2>Three personas helped translate research into frontend decisions</h2>
        </Reveal>

        <PersonaCarousel personas={personaProfiles} />
      </section>

      {/* ── 05 LOW-FI ── */}
      <section id="low-fi" className="folklore-section" role="tabpanel" aria-labelledby="tab-low-fi" tabIndex={0}>
        <Reveal className="folklore-section-intro">
          <p className="folklore-kicker">05 / Low-Fidelity Prototype</p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="folklore-lowfi-gallery" style={{ marginTop: '24px' }}>
            <div className="folklore-screen folklore-screen--alt">
              <img src={lofi1} alt="Low-fidelity wireframe showing grid-based people directory cards" />
            </div>
            <div className="folklore-screen folklore-screen--alt">
              <img src={lofi2} alt="Low-fidelity wireframe showing alternate directory layout exploration" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── 06 HIGH-FI ── */}
      <section id="high-fi" className="folklore-section" role="tabpanel" aria-labelledby="tab-high-fi" tabIndex={0}>
        <Reveal className="folklore-section-intro">
          <p className="folklore-kicker">06 / High-Fidelity Prototype</p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="folklore-screen folklore-screen--alt" style={{ marginTop: '24px' }}>
            <img src={folklore2} alt="High-fidelity Figma prototype frames showing grid view, list view, and filter panel" />
          </div>
        </Reveal>

      </section>

      {/* ── 07 DEVELOPMENT ── */}
      <section id="development" className="folklore-section" role="tabpanel" aria-labelledby="tab-development" tabIndex={0}>
        <Reveal className="folklore-section-intro">
          <p className="folklore-kicker">07 / Development</p>
        </Reveal>
        <Reveal delay={0.04}>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#2f2f2f', margin: 0 }}>
            I developed the plugin on a WordPress CMS testing site using PHP and jQuery, turning the research-backed feature plan into an interactive directory experience. The build included real-time search, department-based filtering, grid and list view options, and reusable profile card components. Deploying it early on a testing site allowed stakeholders to interact with the plugin, test real workflows, and give feedback before launch.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="folklore-stack-block">
            <p className="folklore-stack-label">Tech stack</p>
            <div className="folklore-stack-pills">
              {['PHP', 'jQuery', 'WordPress', 'SCSS', 'ACF', 'Isotope'].map((t) => (
                <span key={t} className="folklore-stack-pill">{t}</span>
              ))}
            </div>
          </div>
        </Reveal>

      </section>

      {/* ── 08 USER TESTING ── */}
      <section id="testing" className="folklore-section" role="tabpanel" aria-labelledby="tab-testing" tabIndex={0}>
        <Reveal className="folklore-section-intro">
          <p className="folklore-kicker">08 / User Testing</p>
          <h2>Task-based usability test</h2>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="folklore-table-scroll">
            <table className="folklore-task-table">
              <thead>
                <tr>
                  <th scope="col">Task</th>
                </tr>
              </thead>
              <tbody>
                {testingTasks.map((row) => (
                  <tr key={row.task}>
                    <td>{row.task}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="folklore-quote-grid" style={{ marginTop: '24px' }}>
            {testingQuotes.map((q, i) => (
              <blockquote key={i} className="folklore-quote">
                <p>{q}</p>
              </blockquote>
            ))}
          </div>
        </Reveal>

      </section>

      {/* ── 09 REFLECTION ── */}
      <section id="reflection" className="folklore-section" role="tabpanel" aria-labelledby="tab-reflection" tabIndex={0}>
        <Reveal className="folklore-section-intro">
          <p className="folklore-kicker">09 / Reflection</p>
        </Reveal>

        <Reveal className="folklore-testing-grid" delay={0.06}>
          <div className="folklore-testing-card">
            <h3 className="folklore-reflection-heading">What worked</h3>
            <ul className="folklore-bullet-list">
              {reflectionWorked.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="folklore-testing-card">
            <h3 className="folklore-reflection-heading">Challenges</h3>
            <ul className="folklore-bullet-list">
              <li>Keeping the design clean while adding enough text and context for accessibility.</li>
              <li>Handling longer bios and names without making the profile cards feel crowded.</li>
              <li>Designing modal views that could show more detail while still feel easy to scan.</li>
              <li>Managing shared SCSS styles and deciding when to reuse existing UW patterns versus when custom styling was needed.</li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* ── Next ── */}
      <nav className="folklore-next-case" aria-label="Next">
        <Reveal>
          <p className="folklore-kicker">Next</p>
          <button
            type="button"
            className="folklore-next-button"
            onClick={() => navigateWithTransition(navigate, '/aims')}
          >
            AIMS UW →
          </button>
        </Reveal>
      </nav>
    </main>
  );
};

export default FolkloreCaseStudy;
