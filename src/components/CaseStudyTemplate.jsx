import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './CaseStudyTemplate.css';
import { navigateWithTransition } from '../utils/viewTransition';

const EASE = [0.22, 1, 0.36, 1];

const CS_TABS = [
  { id: 'overview',   label: 'Overview'      },
  { id: 'discovery',  label: 'Discovery'     },
  { id: 'ideation',   label: 'Ideation'      },
  { id: 'design',     label: 'Design & Build' },
  { id: 'reflection', label: 'Reflection'    },
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

function Placeholder({ label = 'Content coming soon.' }) {
  return <div className="cs-placeholder-block">{label}</div>;
}

const CaseStudyTemplate = ({ config = {} }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('overview');
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  const {
    bodyClass = 'cs-page-instance',
    accent = '#c94f7c',
    eyebrow = 'Case Study',
    title = 'Project title coming soon.',
    lede = '',
    liveLink = null,
    liveLinkText = 'View live site',
    heroImage = null,
    heroImageAlt = 'Project screenshot',
    snapshot = [],
    outcomes = [],
    tldr = '',
    discovery = {},
    ideation = {},
    design = {},
    reflection = {},
    nextCase = null,
  } = config;

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('cs-page', bodyClass);
    return () => {
      document.body.classList.remove('cs-page', bodyClass);
    };
  }, [bodyClass]);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 120, behavior: 'smooth' });
    setActiveTab(sectionId);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 120);
      const pos = window.scrollY + 180;
      for (let i = CS_TABS.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(CS_TABS[i].id);
        if (section && section.offsetTop <= pos) { setActiveTab(CS_TABS[i].id); break; }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="cs-case-study" style={{ '--cs-accent': accent }}>
      <button type="button" className="cs-home-button" onClick={() => navigateWithTransition(navigate, '/portfolio')}>
        &larr; HOME
      </button>

      <div className="cs-tabs-header">
        <div className="cs-tabs-shell">
          <div className="cs-tabs">
            {CS_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`cs-tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => scrollToSection(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {showBackToTop && (
        <button type="button" className="cs-top-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          BACK TO TOP
        </button>
      )}

      {/* OVERVIEW */}
      <section id="overview" className="cs-hero">
        <Reveal className="cs-hero-copy">
          <p className="cs-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {lede && <p className="cs-lede">{lede}</p>}
          {liveLink && (
            <div className="cs-hero-actions">
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="cs-primary-link">
                {liveLinkText} &rarr;
              </a>
            </div>
          )}
        </Reveal>

        <Reveal className="cs-hero-visual" delay={0.1}>
          {heroImage && (
            <div className="cs-screen">
              <img src={heroImage} alt={heroImageAlt} />
            </div>
          )}
          {snapshot.length > 0 && (
            <div className={`cs-snapshot-strip${!heroImage ? ' cs-snapshot-strip--no-hero' : ''}`}>
              {snapshot.map((item) => (
                <div key={item.label} className="cs-snapshot-cell">
                  <span className="cs-snapshot-label">{item.label}</span>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="cs-snapshot-value cs-snapshot-link">
                      {item.value}
                    </a>
                  ) : (
                    <span className="cs-snapshot-value">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </Reveal>
      </section>

      {/* OUTCOMES */}
      {outcomes.length > 0 && (
        <section className="cs-outcomes-grid" aria-label="Project outcomes">
          {outcomes.map((item, i) => (
            <Reveal key={item.label} delay={0.06 * i} className="cs-outcome-card">
              {item.icon && <div className="cs-outcome-icon">{item.icon}</div>}
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <p>{item.sub}</p>
            </Reveal>
          ))}
        </section>
      )}

      {/* TL;DR */}
      {tldr && (
        <section className="cs-tldr">
          <Reveal>
            <p className="cs-kicker">TL;DR</p>
            <p className="cs-tldr-body">{tldr}</p>
          </Reveal>
        </section>
      )}

      {/* DISCOVERY */}
      <section id="discovery" className="cs-story-section">
        <Reveal className="cs-section-intro">
          <p className="cs-kicker">01 / Discovery</p>
          <h2>{discovery.heading || 'Research and findings.'}</h2>
          {discovery.intro && <p>{discovery.intro}</p>}
        </Reveal>

        {discovery.methods?.length > 0 ? (
          <Reveal className="cs-research-card" delay={0.06}>
            <p className="cs-kicker">Research methods</p>
            <ul>{discovery.methods.map((m) => <li key={m}>{m}</li>)}</ul>
          </Reveal>
        ) : (
          <Placeholder label="Research methods - content coming soon." />
        )}

        {discovery.findings?.length > 0 ? (
          <Reveal className="cs-findings-block" delay={0.08}>
            <p className="cs-kicker">What I learned</p>
            <div className="cs-findings-grid">
              {discovery.findings.map((f, i) => (
                <div key={f.title} className="cs-finding-item">
                  <span className="cs-finding-num">{String(i + 1).padStart(2, '0')}</span>
                  <strong>{f.title}</strong>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        ) : (
          <Placeholder label="Key findings - content coming soon." />
        )}
      </section>

      {/* IDEATION */}
      <section id="ideation" className="cs-story-section">
        <Reveal className="cs-section-intro">
          <p className="cs-kicker">02 / Ideation</p>
          <h2>{ideation.heading || 'Framing the design challenge.'}</h2>
        </Reveal>

        {ideation.hmw ? (
          <Reveal className="cs-hmw" delay={0.06}>
            <p className="cs-hmw-label">How might we</p>
            <p className="cs-hmw-body">{ideation.hmw}</p>
          </Reveal>
        ) : (
          <Placeholder label="HMW statement - content coming soon." />
        )}

        {ideation.archDecisions?.length > 0 ? (
          <Reveal className="cs-arch-block" delay={0.08}>
            <p className="cs-kicker">Key decisions</p>
            <div className="cs-arch-table" role="table" aria-label="Key decisions">
              <div className="cs-arch-head" role="row">
                <span role="columnheader">Decision</span>
                <span role="columnheader">Why</span>
              </div>
              {ideation.archDecisions.map((row) => (
                <div key={row.decision} className="cs-arch-row" role="row">
                  <span role="cell">{row.decision}</span>
                  <span role="cell">{row.why}</span>
                </div>
              ))}
            </div>
          </Reveal>
        ) : (
          <Placeholder label="Key decisions table - content coming soon." />
        )}
      </section>

      {/* DESIGN & BUILD */}
      <section id="design" className="cs-story-section">
        <Reveal className="cs-section-intro">
          <p className="cs-kicker">03 / Design & Build</p>
          <h2>{design.heading || 'Key components and decisions.'}</h2>
          {design.intro && <p>{design.intro}</p>}
        </Reveal>

        {design.budget?.length > 0 && (
          <Reveal className="cs-budget-block" delay={0.06}>
            <p className="cs-kicker">Performance budget</p>
            <div className="cs-budget-table" role="table" aria-label="Performance budget">
              <div className="cs-budget-head" role="row">
                <span role="columnheader">Metric</span>
                <span role="columnheader">Target</span>
              </div>
              {design.budget.map((row) => (
                <div key={row.metric} className="cs-budget-row" role="row">
                  <span role="cell">{row.metric}</span>
                  <span role="cell" className="cs-budget-target">{row.target}</span>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        {design.components?.length > 0 ? (
          <Reveal className="cs-components-block" delay={0.08}>
            <p className="cs-kicker">Key components</p>
            <div className="cs-components-grid">
              {design.components.map((c, i) => (
                <div key={c.title} className="cs-component-card">
                  <span className="cs-component-num">{String(i + 1).padStart(2, '0')}</span>
                  <strong>{c.title}</strong>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        ) : (
          <Placeholder label="Component breakdowns - content coming soon." />
        )}

        {design.a11y?.length > 0 && (
          <Reveal className="cs-a11y-block" delay={0.08}>
            <p className="cs-kicker">Accessibility</p>
            <ul className="cs-a11y-list">
              {design.a11y.map((note) => <li key={note}>{note}</li>)}
            </ul>
          </Reveal>
        )}

        {design.images?.length > 0 && (
          <Reveal className="cs-screen-block" delay={0.08}>
            <p className="cs-kicker">Live site</p>
            <div className="cs-screens-grid">
              {design.images.map((img) => (
                <img key={img.src} src={img.src} alt={img.alt} className="cs-screen-img" />
              ))}
            </div>
          </Reveal>
        )}
      </section>

      {/* REFLECTION */}
      <section id="reflection" className="cs-story-section">
        <Reveal className="cs-section-intro">
          <p className="cs-kicker">04 / Reflection</p>
          <h2>{reflection.heading || 'What I learned.'}</h2>
          {reflection.intro && <p>{reflection.intro}</p>}
        </Reveal>

        <div className="cs-reflection-grid">
          <Reveal className="cs-reflection-col" delay={0.04}>
            <p className="cs-kicker">What worked</p>
            {reflection.workedWell?.length > 0
              ? reflection.workedWell.map((w) => (
                  <div key={w.title} className="cs-reflection-item">
                    <strong>{w.title}</strong>
                    <p>{w.body}</p>
                  </div>
                ))
              : <p style={{ fontSize: 14, color: '#aaa' }}>Content coming soon.</p>
            }
          </Reveal>

          <Reveal className="cs-reflection-col" delay={0.08}>
            <p className="cs-kicker">What I'd do differently</p>
            {reflection.wouldChange?.length > 0
              ? reflection.wouldChange.map((w) => (
                  <div key={w.title} className="cs-reflection-item">
                    <strong>{w.title}</strong>
                    <p>{w.body}</p>
                  </div>
                ))
              : <p style={{ fontSize: 14, color: '#aaa' }}>Content coming soon.</p>
            }
          </Reveal>

          <Reveal className="cs-reflection-col cs-reflection-col--dark" delay={0.12}>
            <p className="cs-kicker">What's next</p>
            {reflection.nextSteps?.length > 0
              ? (
                <ul className="cs-next-list">
                  {reflection.nextSteps.map((s) => <li key={s}>{s}</li>)}
                </ul>
              )
              : <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Content coming soon.</p>
            }
          </Reveal>
        </div>
      </section>

      {/* NEXT CASE STUDY */}
      {nextCase && (
        <nav className="cs-next-case" aria-label="Next case study">
          <Reveal>
            <p className="cs-kicker">Next case study</p>
            <button
              type="button"
              className="cs-next-button"
              onClick={() => navigateWithTransition(navigate, nextCase.path)}
            >
              {nextCase.label} &rarr;
            </button>
          </Reveal>
        </nav>
      )}
    </main>
  );
};

export default CaseStudyTemplate;
