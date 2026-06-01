import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './ClaimRunnerCaseStudy.css';
import claimrunner from '../assets/claimrunner.png';
import claimpt from '../assets/gifs/claimpt.gif';
import { navigateWithTransition } from '../utils/viewTransition';

const EASE = [0.22, 1, 0.36, 1];

const proofPoints = [
  { value: '5/6', label: 'survey participants cited lack of legal knowledge', sub: 'Structured 6-person survey' },
  { value: '33', label: 'email signups',  },
];

const painPoints = [
  { point: 'Lack of legal knowledge', cited: '5 / 6' },
  { point: 'Complicated paperwork', cited: '5 / 6' },
  { point: 'Anxiety or intimidation', cited: '5 / 6' },
  { point: 'Unclear jurisdiction rules', cited: '4 / 6' },
  { point: 'Process is time-consuming', cited: '3 / 6' },
];

const qualThemes = [
  { theme: '"Don\'t know where to start"', detail: 'Entry-point confusion before any paperwork is touched' },
  { theme: 'Steps and requirements feel unclear', detail: 'Users can\'t tell what\'s required vs. optional' },
  { theme: 'Paperwork is overwhelming', detail: 'Volume and legalese, not the difficulty of the dispute itself' },
  { theme: 'Fear of making mistakes', detail: 'Procedural errors voiding their case is the dominant anxiety' },
  { theme: 'Strong desire for step-by-step guidance', detail: 'Explicit asks, not inferred needs' },
];

const sentimentBreakdown = [
  { label: 'Mostly negative', detail: 'Process confusion, frustration, "gave up and ate the loss"', weight: 72 },
  { label: 'Neutral', detail: 'Procedural questions without strong affect', weight: 20 },
  { label: 'Positive', detail: 'Almost always retrospective, "now that I\'ve done it once, it\'s fine"', weight: 8 },
];

const competitors = [
  { category: 'Lawyer marketplaces', examples: 'LegalZoom, Rocket Lawyer', gap: 'Optimized for hiring representation, not self-execution' },
  { category: 'Court-published guides', examples: 'County court PDFs, .gov pages', gap: 'Information-dense, not action-sequenced' },
  { category: 'General AI assistants', examples: 'ChatGPT, Claude', gap: 'Answer questions but don\'t manage state, files, or deadlines' },
];

const productSurfaces = [
  { pain: '"Don\'t know where to start"', surface: 'Eligibility checker' },
  { pain: '"Steps and requirements unclear"', surface: 'AI ClaimBuilder, guided chat' },
  { pain: '"Paperwork is overwhelming"', surface: 'Automated case building + form filing' },
  { pain: '"Fear of making mistakes"', surface: 'Evidence analyzer + validation gates' },
  { pain: '"What happens at the hearing?"', surface: 'Trial preparation module' },
];

const workedWell = [
  { title: 'Constraint-driven research design.', body: 'The interview pivot wasn\'t a downgrade. It produced two independent validation streams, which is methodologically stronger than a single cohort. Triangulation beats depth when you\'re at the "is this real?" stage.' },
  { title: 'Coding Reddit by hand was worth the time.', body: 'Automated sentiment APIs would have missed the nuance. The difference between "this is hard" and "this is hard and I gave up" is the entire product opportunity.' },
  { title: 'The data did the talking in team alignment.', body: 'A 6-person founding team will have 6 product opinions. A shared, auditable dataset turned product debates into "what does the data show?" conversations.' },
];

const wouldChange = [
  { title: 'n=6 is too small for the survey.', body: 'The Reddit corpus carried more weight, and I should have been clearer about that asymmetry with the team. Next iteration: target n=30+ on the survey.' },
];

const nextSteps = [
  '10 pilot users recruited through Legal Aid partnerships (the original interview channel, now used for active product testing)',
  'Customer interviews, finally happening now with a working prototype to react to instead of an abstract concept',
  'Backend architecture plan, moving from prototype to scalable infrastructure',
  'Evidence upload, implement and test the analyzer pipeline end-to-end',
  'Iterate and test product based on pilot feedback',
];

const CLAIMRUNNER_TABS = [
  { id: 'overview',    label: 'Overview'    },
  { id: 'discovery',   label: 'Discovery'   },
  { id: 'validation',  label: 'Prototype'  },
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

const ClaimRunnerCaseStudy = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('overview');
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('claimrunner-page');
    return () => document.body.classList.remove('claimrunner-page');
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
      for (let i = CLAIMRUNNER_TABS.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(CLAIMRUNNER_TABS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(CLAIMRUNNER_TABS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <main className="claimrunner-case-study">
        <button
          type="button"
          className="claimrunner-home-button"
          onClick={() => navigateWithTransition(navigate, '/portfolio')}
        >
          ← HOME
        </button>

        <div className="claimrunner-tabs-header">
          <div className="claimrunner-tabs-shell">
            <div className="claimrunner-tabs">
              {CLAIMRUNNER_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`claimrunner-tab-button ${activeTab === tab.id ? 'active' : ''}`}
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
            className="claimrunner-top-button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            BACK TO TOP ↑
          </button>
        )}

        {/* ── OVERVIEW ── */}
        <section id="overview" className="claimrunner-hero">
          <Reveal className="claimrunner-hero-copy">
            <p className="claimrunner-eyebrow">ClaimRunner AI / Case Study</p>
            <h1>Closing the justice gap in small claims, one guided step at a time.</h1>
            <p className="claimrunner-lede">
              ClaimRunner AI is an end-to-end platform that helps self-represented litigants navigate
              small claims court, including eligibility checking, case building, evidence analysis, form filing,
              and trial prep. I led the customer discovery work during our iStartup Lab Sprint.
            </p>
            <div className="claimrunner-hero-actions">
              <a
                href="https://www.claimrunner.ai/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="claimrunner-primary-link"
              >
                View live site ↗
              </a>
             
            </div>
          </Reveal>

          <Reveal className="claimrunner-hero-visual" delay={0.1}>
            <div className="claimrunner-screen">
              <img src={claimrunner} alt="ClaimRunner AI interface" />
            </div>
            <div className="claimrunner-snapshot-strip">
              {[
                { label: 'Role', value: 'Full-Stack Developer' },
                { label: 'Type', value: 'Product / UX Research' },
                { label: 'Tech Stack', value: 'React, Python, AWS' },
                { label: 'Live site', value: 'claimrunner.ai', link: 'https://www.claimrunner.ai' },
              ].map((item) => (
                <div key={item.label} className="claimrunner-snapshot-cell">
                  <span className="claimrunner-snapshot-label">{item.label}</span>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="claimrunner-snapshot-value claimrunner-snapshot-link">
                      {item.value}
                    </a>
                  ) : (
                    <span className="claimrunner-snapshot-value">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="claimrunner-proof-grid">
          {proofPoints.map((item, index) => (
            <Reveal key={item.label} delay={0.08 * index} className="claimrunner-proof-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <p>{item.sub}</p>
            </Reveal>
          ))}
        </section>

        {/* ── DISCOVERY ── */}
        <section id="discovery" className="claimrunner-story-section">
          <Reveal className="claimrunner-section-intro">
            <p className="claimrunner-kicker">01 / Discovery</p>
            <p>
              Small claims court is supposed to be the accessible tier of the justice system. In practice,
              most filers represent themselves, and most of them describe the experience as confusing,
              intimidating, and procedurally opaque. We needed evidence about what exactly users were stuck on, in their own
              words, fast enough to inform the prototype.
            </p>
          </Reveal>

          <div className="claimrunner-data-layout">
            <Reveal className="claimrunner-pain-block" delay={0.06}>
              <p className="claimrunner-kicker">Quantitative findings, survey</p>
              <div className="claimrunner-pain-table">
                <div className="claimrunner-pain-head">
                  <span>Pain point</span>
                  <span>Cited by</span>
                </div>
                {painPoints.map((row) => (
                  <div key={row.point} className="claimrunner-pain-row">
                    <span>{row.point}</span>
                    <span className="claimrunner-pain-count">{row.cited}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="claimrunner-themes-block" delay={0.08}>
              <p className="claimrunner-kicker">Qualitative themes, cross-source</p>
              <p className="claimrunner-themes-sub">Same five themes surfaced in both the survey and Reddit corpus.</p>
              <ul className="claimrunner-themes-list">
                {qualThemes.map((t) => (
                  <li key={t.theme}>
                    <strong>{t.theme}</strong>
                    <span>{t.detail}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>


        </section>

        {/* ── VALIDATION ── */}
        <section id="validation" className="claimrunner-story-section">
          <Reveal className="claimrunner-section-intro">
            <p className="claimrunner-kicker">03 / Prototype</p>
          </Reveal>

          <Reveal className="claimrunner-story-section claimrunner-story-section--prototype" delay={0.08}>
            <Reveal className="claimrunner-section-intro">
            </Reveal>
            <div className="claimrunner-prototype-frame">
              <img src={claimpt} alt="ClaimRunner prototype preview" />
              <a
                href="https://preview--my-case-bot.lovable.app/auth"
                target="_blank"
                rel="noopener noreferrer"
                className="claimrunner-prototype-link"
              >
                View prototype ↗
              </a>
            </div>
          </Reveal>

         
        </section>


        <nav className="claimrunner-next-case" aria-label="Next">
          <Reveal>
            <p className="claimrunner-kicker">Next</p>
            <button
              type="button"
              className="claimrunner-next-button"
              onClick={() => navigateWithTransition(navigate, '/career-cupid')}
            >
              Career Cupid &rarr;
            </button>
          </Reveal>
        </nav>
      </main>
    </>
  );
};

export default ClaimRunnerCaseStudy;
