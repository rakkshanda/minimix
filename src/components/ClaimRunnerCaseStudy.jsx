import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './ClaimRunnerCaseStudy.css';
import claimrunner from '../assets/claimrunner.png';
import claimpt from '../assets/gifs/claimpt.gif';
import { navigateWithTransition } from '../utils/viewTransition';

const EASE = [0.22, 1, 0.36, 1];

const proofPoints = [
  { value: '5/6', label: 'survey participants cited lack of legal knowledge' },
  { value: '50', label: 'Reddit discussions reviewed in the webcrawler pass' },
  { value: '33', label: 'email signups captured after the sprint site went live' }
];

const researchSignals = [
  'Steps and requirements were unclear for most participants.',
  'Paperwork felt overwhelming, especially for self-represented users.',
  'Fear of making a mistake showed up repeatedly in both survey and Reddit language.',
  'Users wanted step-by-step guidance more than abstract legal information.'
];

const validationSteps = [
  {
    title: 'Initial plan',
    body: 'The team planned to validate the concept through user interviews, then pressure-test the workflow with direct feedback from people already considering small claims.'
  },
  {
    title: 'Constraint',
    body: 'Interview scheduling broke down inside the sprint timeline, so the original research plan was too slow to support product decisions.'
  },
  {
    title: 'Pivot',
    body: 'We switched to a fast mixed-method approach: a 6-person survey for direct signals and a webcrawler pass across 50 Reddit discussions from r/Seattle for real language and sentiment.'
  },
  {
    title: 'What that unlocked',
    body: 'Two independent sources pointed to the same pattern: the dispute was not the hard part. Navigating court steps, paperwork, and confidence gaps was.'
  }
];

const productModules = [
  'AI claim builder chat',
  'Case manager dashboard',
  'Evidence upload and analyzer',
  'Eligibility checker and guided filing flow',
  'Trial preparation support'
];

const nextSteps = [
  'Implement and test the evidence upload flow.',
  'Refine the updated case-builder MVP.',
  'Run customer interviews and iterative product tests.',
  'Bring in 10 pilot users for tighter feedback loops.',
  'Pair product validation with backend architecture planning and Legal Aid conversations.'
];

const CLAIMRUNNER_TABS = [
  { id: 'overview', label: 'ClaimRunner AI' },
  { id: 'problem', label: 'Problem' },
  { id: 'pivot', label: 'Pivot' },
  { id: 'audience', label: 'Audience' },
  { id: 'product', label: 'Product' },
  { id: 'prototype', label: 'Prototype' },
  { id: 'next-steps', label: 'Next Steps' }
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

    return () => {
      document.body.classList.remove('claimrunner-page');
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerOffset = 120;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

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

        <section id="overview" className="claimrunner-hero">
          <Reveal className="claimrunner-hero-copy">
            <p className="claimrunner-eyebrow">ClaimRunner AI / Case Study</p>
            <h1>Closing the justice gap in small claims, one guided step at a time.</h1>
            <p className="claimrunner-lede">
              ClaimRunner AI came out of a simple observation from the sprint deck:
              people were not short on motivation, they were short on clarity. The
              process felt bureaucratic, intimidating, and easy to get wrong. This
              concept reframed legal help as guided execution instead of more dense
              information.
            </p>

            <div className="claimrunner-hero-actions">
              <a
                href="https://www.claimrunner.ai/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="claimrunner-primary-link"
              >
                View live project
              </a>
              <p className="claimrunner-team">
                Team: Cole DuBois, Nathan Lee, Khoa Luong, Rakshanda Bhure,
                Samridh Bhattacharjee, Anjali Abhilash
              </p>
            </div>
          </Reveal>

          <Reveal className="claimrunner-hero-visual" delay={0.1}>
            <div className="claimrunner-screen">
              <img src={claimrunner} alt="ClaimRunner AI interface" />
            </div>
            <div className="claimrunner-thesis-card">
              <span>Core thesis</span>
              <p>
                Small claims users do not need more legal jargon. They need a calm,
                structured path through forms, evidence, and filing decisions.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="claimrunner-proof-grid">
          {proofPoints.map((item, index) => (
            <Reveal key={item.label} delay={0.08 * index} className="claimrunner-proof-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </Reveal>
          ))}
        </section>

        <section id="problem" className="claimrunner-story-section claimrunner-story-section--split">
          <Reveal className="claimrunner-section-intro">
            <p className="claimrunner-kicker">01 / The problem</p>
            <h2>Small claims is marketed as accessible. The lived experience says otherwise.</h2>
            <p>
              The strongest research signal in the deck was consistency. Across both
              direct survey responses and broader web discussions, users kept describing
              the same friction: unclear steps, confusing requirements, too much paperwork,
              and a persistent fear of making the wrong move.
            </p>
          </Reveal>

          <Reveal className="claimrunner-quote-panel" delay={0.08}>
            <p>
              “The biggest barrier is understanding and navigating the process, not
              the dispute itself.”
            </p>
          </Reveal>
        </section>

        <section className="claimrunner-signal-layout">
          <Reveal className="claimrunner-signal-card">
            <p className="claimrunner-kicker">Survey findings</p>
            <ul>
              {researchSignals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="claimrunner-signal-card claimrunner-signal-card--dark" delay={0.08}>
            <p className="claimrunner-kicker">Webcrawler findings</p>
            <h3>50 Reddit comments, mostly negative sentiment</h3>
            <p>
              The crawler analysis surfaced repeated frustration around process confusion,
              time burden, paperwork challenges, and uncertainty about requirements.
              Positive sentiment was rare. Neutral commentary existed, but the overall
              tone was dominated by friction and low confidence.
            </p>
          </Reveal>
        </section>

        <section id="pivot" className="claimrunner-story-section">
          <Reveal className="claimrunner-section-intro">
            <p className="claimrunner-kicker">02 / The pivot</p>
            <h2>We had to validate fast, so the research plan changed.</h2>
            <p>
              The deck documents a very practical sprint move: interviews were the
              original plan, but scheduling friction made them too slow. Instead of
              stalling, the team pivoted into a faster validation system that still
              preserved signal quality.
            </p>
          </Reveal>

          <div className="claimrunner-timeline">
            {validationSteps.map((step, index) => (
              <Reveal key={step.title} delay={0.07 * index} className="claimrunner-timeline-item">
                <span>{step.title}</span>
                <p>{step.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="audience" className="claimrunner-story-section claimrunner-story-section--panel">
          <Reveal className="claimrunner-section-intro">
            <p className="claimrunner-kicker">03 / Who this is for</p>
            <h2>A focused user: self-represented, digitally comfortable, and trying not to get lost.</h2>
            <p>
              ClaimRunner is not aimed at everyone with a legal issue. The ideal user
              profile in the deck is much narrower: people aware of small claims,
              comfortable using digital tools, but without legal representation or a
              reliable system for handling forms, deadlines, and evidence.
            </p>
          </Reveal>

          <Reveal className="claimrunner-jtbd" delay={0.08}>
            <h3>Job to be done</h3>
            <p>
              “Help me complete my small claims case with confidence, without wasting
              time or making mistakes.”
            </p>
          </Reveal>
        </section>

        <section id="product" className="claimrunner-story-section">
          <Reveal className="claimrunner-section-intro">
            <p className="claimrunner-kicker">04 / The product response</p>
            <h2>Turn a legal maze into a guided product flow.</h2>
            <p>
              The solution was framed as a system, not a single screen. The deck’s
              product direction combines guidance, automation, and evidence support so
              users can move from “I have a dispute” to “I know what to do next.”
            </p>
          </Reveal>

          <div className="claimrunner-module-grid">
            {productModules.map((module, index) => (
              <Reveal key={module} delay={0.05 * index} className="claimrunner-module-card">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{module}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="prototype" className="claimrunner-story-section claimrunner-story-section--prototype">
          <Reveal className="claimrunner-section-intro">
            <p className="claimrunner-kicker">05 / Prototype</p>
            <h2>The concept was already moving beyond research into a working structure.</h2>
            <p>
              The sprint deck shows a prototype direction with an AI claim builder,
              chat-based guidance, a case manager dashboard, and evidence upload. The
              product idea is intentionally operational: it helps users do the work,
              not just read about it.
            </p>
          </Reveal>

          <Reveal className="claimrunner-prototype-frame" delay={0.08}>
            <img src={claimpt} alt="ClaimRunner prototype preview" />
          </Reveal>
        </section>

        <section id="next-steps" className="claimrunner-story-section claimrunner-story-section--split">
          <Reveal className="claimrunner-section-intro">
            <p className="claimrunner-kicker">06 / Traction and next steps</p>
            <h2>The sprint ended with momentum, not just slides.</h2>
            <p>
              The deck closes with concrete forward motion: the website was already live,
              the mailing list was collecting signups, the case-builder MVP had been
              updated, and the next month was mapped around pilots, interviews, testing,
              and evidence workflow implementation.
            </p>
          </Reveal>

          <Reveal className="claimrunner-next-panel" delay={0.08}>
            <h3>Post-sprint focus</h3>
            <ul>
              {nextSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
            <p className="claimrunner-next-note">
              The deck also notes 33 email signups and a Legal Aid meeting in motion,
              which is exactly the kind of signal you want from an early, service-heavy
              product concept.
            </p>
          </Reveal>
        </section>
      </main>
    </>
  );
};

export default ClaimRunnerCaseStudy;
