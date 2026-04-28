import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import './GenericCaseStudy.css';
import { frontendProjects, productProjects } from './projects/allProjects';
import { navigateWithTransition } from '../utils/viewTransition';

const EASE = [0.22, 1, 0.36, 1];

const slugify = (title) => title.toLowerCase().replace(/\s+/g, '-');

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

const GenericCaseStudy = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('overview');
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  const allProjects = [...frontendProjects, ...productProjects];
  const seen = new Set();
  const deduped = allProjects.filter((p) => {
    const s = slugify(p.title);
    if (seen.has(s)) return false;
    seen.add(s);
    return true;
  });
  const project = deduped.find((p) => slugify(p.title) === slug);

  const TABS = React.useMemo(() => {
    if (!project) return [];
    const tabs = [{ id: 'overview', label: 'Overview' }];
    if (project.data.discovery) tabs.push({ id: 'discovery', label: 'Discovery' });
    if (project.data.ideation)  tabs.push({ id: 'ideation',  label: 'Ideation'  });
    if (project.data.design)    tabs.push({ id: 'design',    label: 'Design'    });
    if (project.data.reflection) tabs.push({ id: 'reflection', label: 'Reflection' });
    return tabs;
  }, [project]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('generic-cs-page');
    return () => document.body.classList.remove('generic-cs-page');
  }, []);

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
        <button type="button" onClick={() => navigateWithTransition(navigate, '/portfolio')}>← Back</button>
      </div>
    );
  }

  const { data } = project;
  const techArray = Array.isArray(data.tech) ? data.tech : data.tech ? [data.tech] : [];

  return (
    <>
      <main className="gcs-main">
        <button
          type="button"
          className="gcs-home-button"
          onClick={() => navigateWithTransition(navigate, '/portfolio')}
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
            <p className="gcs-eyebrow">{data.type || project.type} / Case Study</p>
            <h1>{data.title || project.title}</h1>
            <p className="gcs-lede">{data.tagline}</p>

            <div className="gcs-meta-strip">
              {data.duration && (
                <div className="gcs-meta-cell">
                  <span className="gcs-meta-label">Duration</span>
                  <span className="gcs-meta-value">{data.duration}</span>
                </div>
              )}
              {techArray.length > 0 && (
                <div className="gcs-meta-cell">
                  <span className="gcs-meta-label">Tech</span>
                  <span className="gcs-meta-value">{techArray.join(', ')}</span>
                </div>
              )}
              {data.agency && (
                <div className="gcs-meta-cell">
                  <span className="gcs-meta-label">Context</span>
                  <span className="gcs-meta-value">{data.agency}</span>
                </div>
              )}
              {data.audience && (
                <div className="gcs-meta-cell">
                  <span className="gcs-meta-label">Audience</span>
                  <span className="gcs-meta-value">{data.audience}</span>
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
                View live ↗
              </a>
            )}
          </Reveal>

          <Reveal className="gcs-hero-visual" delay={0.1}>
            <div className="gcs-screen">
              <img src={project.image} alt={data.title} />
            </div>
            {data.footerText && (
              <div className="gcs-summary-card">
                <span className="gcs-meta-label">Summary</span>
                <p>{data.footerText}</p>
              </div>
            )}
          </Reveal>
        </section>

        {/* DISCOVERY */}
        {data.discovery && (
          <section id="discovery" className="gcs-section">
            <Reveal className="gcs-section-intro">
              <p className="gcs-kicker">01 / Discovery</p>
              <h2>Understanding the problem space.</h2>
              <p>{data.discovery.content}</p>
            </Reveal>

            {data.discovery.findings && data.discovery.findings.length > 0 && (
              <Reveal className="gcs-findings-block" delay={0.06}>
                <p className="gcs-kicker">Key findings</p>
                <div className="gcs-findings-grid">
                  {data.discovery.findings.map((f, i) => (
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

        {/* IDEATION */}
        {data.ideation && (
          <section id="ideation" className="gcs-section">
            <Reveal className="gcs-section-intro">
              <p className="gcs-kicker">02 / Ideation</p>
              <h2>Shaping the approach.</h2>
              <p>{data.ideation.content}</p>
            </Reveal>

            {(data.ideation.approach || data.ideation.decisions) && (
              <Reveal className="gcs-list-block" delay={0.06}>
                <p className="gcs-kicker">Approach</p>
                <ul className="gcs-bullet-list">
                  {(data.ideation.approach || data.ideation.decisions || []).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            )}
          </section>
        )}

        {/* DESIGN */}
        {data.design && (
          <section id="design" className="gcs-section">
            <Reveal className="gcs-section-intro">
              <p className="gcs-kicker">03 / Design</p>
              <h2>Key decisions.</h2>
              <p>{data.design.content}</p>
            </Reveal>

            {data.design.decisions && data.design.decisions.length > 0 && (
              <Reveal className="gcs-decisions-grid" delay={0.06}>
                {data.design.decisions.map((d, i) => (
                  <div key={i} className="gcs-decision-card">
                    <span className="gcs-decision-num">{String(i + 1).padStart(2, '0')}</span>
                    <p>{d}</p>
                  </div>
                ))}
              </Reveal>
            )}

            {data.images && data.images.length > 0 && (
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

        {/* REFLECTION */}
        {data.reflection && (
          <section id="reflection" className="gcs-section">
            <Reveal className="gcs-section-intro">
              <p className="gcs-kicker">04 / Reflection</p>
              <h2>What I took away.</h2>
              {data.reflection.learnings && <p>{data.reflection.learnings}</p>}
            </Reveal>

            <div className="gcs-reflection-layout">
              {data.reflection.takeaways && data.reflection.takeaways.length > 0 && (
                <Reveal className="gcs-takeaways-block" delay={0.06}>
                  <p className="gcs-kicker">Takeaways</p>
                  <ul className="gcs-bullet-list">
                    {data.reflection.takeaways.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </Reveal>
              )}

              {data.reflection.future && (
                <Reveal className="gcs-future-block" delay={0.1}>
                  <p className="gcs-kicker">What's next</p>
                  <p className="gcs-future-text">{data.reflection.future}</p>
                </Reveal>
              )}
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default GenericCaseStudy;
