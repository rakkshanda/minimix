// Data-driven program management case study page. Reuses GenericCaseStudy styling
// with program sections: Situation & Scope → Plan & Alignment → Delivery & Risk → Outcomes.
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import '../components/GenericCaseStudy.css';
import './PMCaseStudy.css';
import { getPmProject } from './pmProjects';
import { navigateWithTransition } from '../utils/viewTransition';

const EASE = [0.22, 1, 0.36, 1];

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

const PMCaseStudy = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('overview');
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  const project = getPmProject(slug);

  const TABS = React.useMemo(() => {
    if (!project) return [];
    const tabs = [{ id: 'overview', label: 'Overview' }];
    if (project.data.situation) tabs.push({ id: 'situation', label: 'Situation' });
    if (project.data.plan) tabs.push({ id: 'plan', label: 'Plan' });
    if (project.data.delivery) tabs.push({ id: 'delivery', label: 'Delivery' });
    if (project.data.outcomes) tabs.push({ id: 'outcomes', label: 'Outcomes' });
    return tabs;
  }, [project]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('generic-cs-page');
    return () => document.body.classList.remove('generic-cs-page');
  }, []);

  React.useEffect(() => {
    if (project) document.title = `${project.data.title} — Program Case Study`;
  }, [project]);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 120);
      const scrollPosition = window.scrollY + 180;
      for (let i = TABS.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(TABS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(TABS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [TABS]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 120;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    setActiveTab(sectionId);
  };

  if (!project) {
    return (
      <div className="gcs-not-found">
        <p>Project not found.</p>
        <button type="button" onClick={() => navigateWithTransition(navigate, '/')}>← Back</button>
      </div>
    );
  }

  const { data } = project;

  return (
    <main className="gcs-main">
      <button
        type="button"
        className="gcs-home-button"
        onClick={() => navigateWithTransition(navigate, '/')}
      >
        ← HOME
      </button>

      <div className="gcs-tabs-header">
        <div className="gcs-tabs-shell">
          <div className="gcs-tabs">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`gcs-tab-button ${activeTab === tab.id ? 'active' : ''}`}
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
          className="gcs-top-button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          BACK TO TOP ↑
        </button>
      )}

      {/* OVERVIEW */}
      <section id="overview" className="gcs-hero">
        <Reveal className="gcs-hero-copy">
          <p className="gcs-eyebrow">{data.type} / Case Study</p>
          <h1>{data.title}</h1>
          <p className="gcs-lede">{data.tagline}</p>

          <div className="gcs-meta-strip">
            {data.role && (
              <div className="gcs-meta-cell">
                <span className="gcs-meta-label">Role</span>
                <span className="gcs-meta-value">{data.role}</span>
              </div>
            )}
            {data.duration && (
              <div className="gcs-meta-cell">
                <span className="gcs-meta-label">Timeline</span>
                <span className="gcs-meta-value">{data.duration}</span>
              </div>
            )}
            {data.team && (
              <div className="gcs-meta-cell">
                <span className="gcs-meta-label">Team</span>
                <span className="gcs-meta-value">{data.team}</span>
              </div>
            )}
            {data.context && (
              <div className="gcs-meta-cell">
                <span className="gcs-meta-label">Context</span>
                <span className="gcs-meta-value">{data.context}</span>
              </div>
            )}
            {data.stakeholders && (
              <div className="gcs-meta-cell">
                <span className="gcs-meta-label">Stakeholders</span>
                <span className="gcs-meta-value">{data.stakeholders}</span>
              </div>
            )}
          </div>

          {data.link && (
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="gcs-primary-link"
            >
              {data.linkLabel ? `${data.linkLabel} ↗` : 'View live ↗'}
            </a>
          )}
        </Reveal>

        <Reveal className="gcs-hero-visual" delay={0.1}>
          <div className="gcs-screen">
            <img src={project.image} alt={data.title} />
          </div>
        </Reveal>
      </section>

      {/* SITUATION */}
      {data.situation && (
        <section id="situation" className="gcs-section">
          <Reveal className="gcs-section-intro">
            <p className="gcs-kicker">01 / Situation &amp; Scope</p>
            <h2>What the program was up against.</h2>
            <p>{data.situation.content}</p>
          </Reveal>

          {data.situation.findings?.length > 0 && (
            <Reveal className="gcs-findings-block" delay={0.06}>
              <p className="gcs-kicker">Constraints and risks</p>
              <div className="gcs-findings-grid">
                {data.situation.findings.map((f, i) => (
                  <div key={i} className="gcs-finding-card">
                    <span className="gcs-finding-num">{String(i + 1).padStart(2, '0')}</span>
                    <p>{f}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </section>
      )}

      {/* PLAN */}
      {data.plan && (
        <section id="plan" className="gcs-section">
          <Reveal className="gcs-section-intro">
            <p className="gcs-kicker">02 / Plan &amp; Alignment</p>
            <h2>How the work was sequenced.</h2>
            <p>{data.plan.content}</p>
          </Reveal>

          {data.plan.decisions?.length > 0 && (
            <Reveal className="gcs-list-block" delay={0.06}>
              <p className="gcs-kicker">Planning decisions</p>
              <ul className="gcs-bullet-list">
                {data.plan.decisions.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Reveal>
          )}
        </section>
      )}

      {/* DELIVERY */}
      {data.delivery && (
        <section id="delivery" className="gcs-section">
          <Reveal className="gcs-section-intro">
            <p className="gcs-kicker">03 / Delivery &amp; Risk</p>
            <h2>How it was run.</h2>
            <p>{data.delivery.content}</p>
          </Reveal>

          {data.delivery.practices?.length > 0 && (
            <Reveal className="gcs-decisions-grid" delay={0.06}>
              {data.delivery.practices.map((d, i) => (
                <div key={i} className="gcs-decision-card">
                  <span className="gcs-decision-num">{String(i + 1).padStart(2, '0')}</span>
                  <p>{d}</p>
                </div>
              ))}
            </Reveal>
          )}

          {data.images?.length > 0 && (
            <Reveal className="gcs-image-block" delay={0.08}>
              <div className="gcs-image-grid">
                {data.images.map((img, i) => (
                  <img key={i} src={img} alt={`${data.title} screenshot ${i + 1}`} className="gcs-proj-img" />
                ))}
              </div>
            </Reveal>
          )}
        </section>
      )}

      {/* OUTCOMES */}
      {data.outcomes && (
        <section id="outcomes" className="gcs-section">
          <Reveal className="gcs-section-intro">
            <p className="gcs-kicker">04 / Outcomes &amp; Learnings</p>
            <h2>What it delivered.</h2>
            {data.outcomes.content && <p>{data.outcomes.content}</p>}
          </Reveal>

          {data.outcomes.results?.length > 0 && (
            <Reveal className="gcs-findings-block" delay={0.06}>
              <p className="gcs-kicker">Results</p>
              <div className="gcs-findings-grid">
                {data.outcomes.results.map((o, i) => (
                  <div key={i} className="gcs-finding-card">
                    <span className="gcs-finding-num">{String(i + 1).padStart(2, '0')}</span>
                    <p>{o}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          <div className="gcs-reflection-layout">
            {data.outcomes.learnings && (
              <Reveal className="gcs-takeaways-block" delay={0.08}>
                <p className="gcs-kicker">What I'd carry forward</p>
                <p>{data.outcomes.learnings}</p>
              </Reveal>
            )}

            {data.outcomes.next && (
              <Reveal className="gcs-future-block" delay={0.1}>
                <p className="gcs-kicker">What's next</p>
                <p className="gcs-future-text">{data.outcomes.next}</p>
              </Reveal>
            )}
          </div>
        </section>
      )}
    </main>
  );
};

export default PMCaseStudy;
