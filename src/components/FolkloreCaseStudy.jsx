import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './FolkloreCaseStudy.css';
import folklore from '../assets/folklore.png';
import folklore2 from '../assets/6.png';
import { navigateWithTransition } from '../utils/viewTransition';

const EASE = [0.22, 1, 0.36, 1];

const FOLKLORE_TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'research', label: 'Research' },
  { id: 'personas', label: 'Personas' },
  { id: 'goals', label: 'Goals' },
  { id: 'low-fi', label: 'Low-Fi' },
  { id: 'high-fi', label: 'High-Fi' },
  { id: 'iterations', label: 'Iterations' },
  { id: 'development', label: 'Development' },
  { id: 'testing', label: 'Testing' },
  { id: 'outcome', label: 'Outcome' },
  { id: 'reflection', label: 'Reflection' },
];

const researchInsights = [
  'People often started with a rough guess, not an exact name, so broad result lists quickly became noise.',
  'Users wanted to narrow by department or role instead of rewriting the same query over and over.',
  'Frequent users cared less about visual flourish and more about getting to the right contact without second-guessing the system.',
];

const personas = [
  {
    name: 'Sarah Martinez',
    role: 'Undergraduate student',
    body: 'Sarah usually arrives with partial information: maybe a department name, maybe a role, rarely the exact person. She needs the directory to help her close the gap quickly.',
    bullets: [
      'Looks for advising, financial aid, or department contacts under time pressure',
      'Needs clear department context to know she is in the right place',
      'Gets frustrated when search returns too many loosely related results',
    ],
  },
  {
    name: 'David Chen',
    role: 'Administrative staff member',
    body: 'David uses directory tools repeatedly during the week. He is not exploring. He is trying to complete a task and move on.',
    bullets: [
      'Searches for internal contacts many times a week',
      'Relies on predictable filters and clean result grouping',
      'Values speed and consistency over extra interface detail',
    ],
  },
];

const goals = [
  'Reduce the time it takes to reach the right person or department',
  'Make results easier to scan at a glance',
  'Support both search-first and browse-first behaviors',
  'Cut down on repeated searches caused by vague result sets',
];

const lowFiIdeas = [
  'Structured result cards with department and role visible immediately',
  'Clear separation between broad search and refined filtering',
  'Simple list and grid exploration patterns to test different reading behaviors',
];

const highFiFeatures = [
  'Filtering by department, role, and related categories',
  'Toggleable grid and table views for different browsing styles',
  'A cleaner visual hierarchy that made names, departments, and contact details easier to distinguish',
];

const iterations = [
  'Simplified the navigation flow so users did not have to backtrack as often',
  'Reworked labels and grouping to reduce ambiguity around departments and roles',
  'Adjusted spacing and card structure to improve scan speed',
  'Refined result organization so comparisons felt more deliberate, not accidental',
];

const buildPoints = [
  'Built in a CMS-based environment using PHP and jQuery',
  'Focused on preserving the clarity of the design in a real content system',
  'Kept interactions lightweight so the experience stayed fast and maintainable',
];

const testingOutcomes = [
  'Users completed common lookup tasks faster',
  'Participants reported less confusion about what to click next',
  'Filtering and result structure were consistently called out as improvements',
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

function Illustration({ text }) {
  return (
    <div className="folklore-illustration">
      <span>{text}</span>
    </div>
  );
}

const FolkloreCaseStudy = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('overview');
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('folklore-page');
    return () => document.body.classList.remove('folklore-page');
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
      for (let i = FOLKLORE_TABS.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(FOLKLORE_TABS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
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

      <div className="folklore-tabs-header">
        <div className="folklore-tabs-shell">
          <div className="folklore-tabs">
            {FOLKLORE_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`folklore-tab-button ${activeTab === tab.id ? 'active' : ''}`}
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
          className="folklore-top-button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          BACK TO TOP ↑
        </button>
      )}

      <section id="overview" className="folklore-hero">
        <Reveal className="folklore-hero-copy">
          <p className="folklore-eyebrow">Folklore / Case Study</p>
          <h1>Improving how university users find the right people and departments.</h1>
          <p className="folklore-lede">
            Folklore rethinks the University of Washington directory as a faster,
            clearer tool for finding contact and department information. The goal
            was simple: help people get to the right result without fighting the
            system along the way.
          </p>

          <div className="folklore-meta-strip">
            <div className="folklore-meta-cell">
              <span className="folklore-meta-label">Role</span>
              <span className="folklore-meta-value">UX Designer + Front-End Developer</span>
            </div>
            <div className="folklore-meta-cell">
              <span className="folklore-meta-label">Stack</span>
              <span className="folklore-meta-value">PHP, jQuery, CMS-based environment</span>
            </div>
            <div className="folklore-meta-cell">
              <span className="folklore-meta-label">Focus</span>
              <span className="folklore-meta-value">Search clarity, structured browsing, information hierarchy</span>
            </div>
            <div className="folklore-meta-cell">
              <span className="folklore-meta-label">Live example</span>
              <a
                href="https://www.washington.edu/docs/plugins/uw-directory-plugin/directory-example/"
                target="_blank"
                rel="noopener noreferrer"
                className="folklore-meta-link"
              >
                View live ↗
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="folklore-hero-visual" delay={0.08}>
          <div className="folklore-screen">
            <img src={folklore} alt="Folklore directory interface" />
          </div>
          <Illustration text="[Illustration: Hero mockup of final UI or dashboard]" />
        </Reveal>
      </section>

      <section id="problem" className="folklore-section">
        <Reveal className="folklore-section-intro">
          <p className="folklore-kicker">01 / Problem</p>
          <h2>Finding the right contact took more work than it should.</h2>
          <p>
            The old experience made a straightforward task feel messy. People often
            knew roughly what they needed, but the system responded with broad,
            loosely related results that forced them into trial and error.
          </p>
          <p>
            Instead of guiding users toward the right person or department, the
            directory kept making them restart, refine, and second-guess.
          </p>
          <ul className="folklore-bullet-list">
            <li>Search results were too general to be useful quickly</li>
            <li>Users often had to repeat or rewrite searches</li>
            <li>Department-specific information was difficult to spot in context</li>
          </ul>
        </Reveal>
        <Reveal delay={0.06}>
          <Illustration text="[Illustration: Screenshot of current system or messy search results]" />
        </Reveal>
      </section>

      <section id="research" className="folklore-section">
        <Reveal className="folklore-section-intro">
          <p className="folklore-kicker">02 / Research</p>
          <h2>The issue was not missing information. It was the path to it.</h2>
          <p>
            I spoke with students, staff, and professors to understand how they
            approached directory searches and where the friction showed up. Some
            were occasional users looking for a single office. Others relied on the
            tool repeatedly during the week.
          </p>
          <p>
            Across those conversations, one pattern kept surfacing: users were not
            asking for more content. They wanted a better route to the content that
            already existed.
          </p>
        </Reveal>

        <Reveal className="folklore-card-grid" delay={0.06}>
          {researchInsights.map((item, index) => (
            <div key={index} className="folklore-insight-card">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.08}>
          <Illustration text="[Illustration: Survey results chart or summary graphic]" />
        </Reveal>
      </section>

      <section id="personas" className="folklore-section">
        <Reveal className="folklore-section-intro">
          <p className="folklore-kicker">03 / Personas</p>
          <h2>Two very different users, one shared need: less friction.</h2>
          <p>
            The personas helped clarify an important distinction. Some users needed
            reassurance and context. Others needed speed above all else. The design
            had to work for both without becoming bloated.
          </p>
        </Reveal>

        <Reveal className="folklore-persona-grid" delay={0.06}>
          {personas.map((persona) => (
            <article key={persona.name} className="folklore-persona-card">
              <h3>{persona.name}</h3>
              <p className="folklore-persona-role">{persona.role}</p>
              <p>{persona.body}</p>
              <ul className="folklore-bullet-list">
                {persona.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </Reveal>

        <Reveal delay={0.08}>
          <Illustration text="[Illustration: Persona card UI]" />
        </Reveal>
      </section>

      <section id="goals" className="folklore-section">
        <Reveal className="folklore-section-intro">
          <p className="folklore-kicker">04 / Goals</p>
          <h2>Make the directory feel structured, not exhausting.</h2>
          <p>
            The direction stayed intentionally practical. Every design choice had to
            reduce effort, improve scan speed, or help users trust they were heading
            toward the right result.
          </p>
        </Reveal>

        <Reveal className="folklore-goals-panel" delay={0.06}>
          <ul className="folklore-bullet-list">
            {goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <Illustration text="[Illustration: Simple diagram showing “before vs after” flow]" />
        </Reveal>
      </section>

      <section id="low-fi" className="folklore-section">
        <Reveal className="folklore-section-intro">
          <p className="folklore-kicker">05 / Low-Fidelity Design</p>
          <h2>Start with structure before polish.</h2>
          <p>
            Early wireframes focused on hierarchy, grouping, and the relationship
            between search and browsing. The main question at this stage was not
            what the UI looked like, but how it should think.
          </p>
        </Reveal>

        <Reveal className="folklore-card-grid" delay={0.06}>
          {lowFiIdeas.map((idea, index) => (
            <div key={idea} className="folklore-note-card">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{idea}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.08}>
          <Illustration text="[Illustration: Low-fidelity wireframes]" />
        </Reveal>
      </section>

      <section id="high-fi" className="folklore-section">
        <Reveal className="folklore-section-intro">
          <p className="folklore-kicker">06 / High-Fidelity Prototype</p>
          <h2>Turn structure into a calmer, more legible interface.</h2>
          <p>
            Once the layout direction felt solid, the high-fidelity prototype
            refined visual hierarchy and interaction patterns. The goal was to make
            names, roles, and departments easier to distinguish without loading the
            interface with unnecessary noise.
          </p>
        </Reveal>

        <Reveal className="folklore-feature-list" delay={0.06}>
          <ul className="folklore-bullet-list">
            {highFiFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="folklore-split-visual" delay={0.08}>
          <div className="folklore-screen folklore-screen--alt">
            <img src={folklore2} alt="Folklore high-fidelity screens" />
          </div>
          <Illustration text="[Illustration: High-fidelity UI screens]" />
        </Reveal>
      </section>

      <section id="iterations" className="folklore-section">
        <Reveal className="folklore-section-intro">
          <p className="folklore-kicker">07 / Iterations</p>
          <h2>Small refinements made the experience feel more deliberate.</h2>
          <p>
            Feedback did not point to one dramatic redesign. It pointed to a series
            of smaller improvements that made the experience easier to read and
            easier to trust.
          </p>
        </Reveal>

        <Reveal className="folklore-card-grid" delay={0.06}>
          {iterations.map((item, index) => (
            <div key={item} className="folklore-iteration-card">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.08}>
          <Illustration text="[Illustration: Before/after comparison]" />
        </Reveal>
      </section>

      <section id="development" className="folklore-section">
        <Reveal className="folklore-section-intro">
          <p className="folklore-kicker">08 / Development</p>
          <h2>Build the experience inside a real content system, not a perfect sandbox.</h2>
          <p>
            Implementation happened in a CMS-based environment using PHP and jQuery.
            The challenge was not just reproducing the mockups. It was preserving
            clarity while working within real data, real constraints, and real
            maintenance needs.
          </p>
        </Reveal>

        <Reveal className="folklore-build-panel" delay={0.06}>
          <ul className="folklore-bullet-list">
            {buildPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <Illustration text="[Illustration: Screenshot of working prototype]" />
        </Reveal>
      </section>

      <section id="testing" className="folklore-section">
        <Reveal className="folklore-section-intro">
          <p className="folklore-kicker">09 / User Testing</p>
          <h2>The redesign reduced hesitation as much as it reduced clicks.</h2>
          <p>
            Testing showed that users were not just moving faster. They also seemed
            less unsure about where to go next. That mattered. A directory should
            feel dependable, not like a puzzle.
          </p>
        </Reveal>

        <Reveal className="folklore-testing-grid" delay={0.06}>
          {testingOutcomes.map((outcome) => (
            <div key={outcome} className="folklore-testing-card">
              <p>{outcome}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.08}>
          <Illustration text="[Illustration: Testing session or feedback highlights]" />
        </Reveal>
      </section>

      <section id="outcome" className="folklore-section">
        <Reveal className="folklore-section-intro">
          <p className="folklore-kicker">10 / Outcome</p>
          <h2>A directory that feels more direct, more structured, and easier to trust.</h2>
          <p>
            Folklore turned a frustrating lookup flow into a more focused directory
            tool. Users could move from a broad question to a relevant contact with
            less guesswork, fewer repeated searches, and better context around what
            they were seeing.
          </p>
          <p>
            The end result was intentionally restrained. It did not need to feel
            flashy. It needed to feel useful.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <Illustration text="[Illustration: Final interface in use, showing polished results and filter interactions]" />
        </Reveal>
      </section>

      <section id="reflection" className="folklore-section">
        <Reveal className="folklore-section-intro">
          <p className="folklore-kicker">11 / Reflection</p>
          <h2>Better structure can change the whole experience.</h2>
          <p>
            This project reinforced how much impact can come from reorganizing
            information instead of adding more of it. Clearer labels, stronger
            grouping, and a more purposeful browsing model changed the experience
            more than any visual flourish could have.
          </p>
          <p>
            It also reminded me that when people call a tool “hard to use,” what
            they often mean is: “it makes me work too hard for something simple.”
            Folklore worked because it took that complaint seriously.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <Illustration text="[Illustration: Reflection slide or summary graphic tying together process and outcomes]" />
        </Reveal>
      </section>
    </main>
  );
};

export default FolkloreCaseStudy;
