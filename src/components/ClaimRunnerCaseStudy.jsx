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
  { value: '50', label: 'Reddit threads coded by hand', sub: 'r/Seattle web-crawler pass' },
  { value: '33', label: 'email signups in first weeks', sub: 'Organic, zero paid promotion' },
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
  { theme: 'Paperwork is overwhelming', detail: 'Volume and legalese — not the difficulty of the dispute itself' },
  { theme: 'Fear of making mistakes', detail: 'Procedural errors voiding their case is the dominant anxiety' },
  { theme: 'Strong desire for step-by-step guidance', detail: 'Explicit asks, not inferred needs' },
];

const sentimentBreakdown = [
  { label: 'Mostly negative', detail: 'Process confusion, frustration, "gave up and ate the loss"', weight: 72 },
  { label: 'Neutral', detail: 'Procedural questions without strong affect', weight: 20 },
  { label: 'Positive', detail: 'Almost always retrospective — "now that I\'ve done it once, it\'s fine"', weight: 8 },
];

const competitors = [
  { category: 'Lawyer marketplaces', examples: 'LegalZoom, Rocket Lawyer', gap: 'Optimized for hiring representation, not self-execution' },
  { category: 'Court-published guides', examples: 'County court PDFs, .gov pages', gap: 'Information-dense, not action-sequenced' },
  { category: 'General AI assistants', examples: 'ChatGPT, Claude', gap: 'Answer questions but don\'t manage state, files, or deadlines' },
];

const productSurfaces = [
  { pain: '"Don\'t know where to start"', surface: 'Eligibility checker' },
  { pain: '"Steps and requirements unclear"', surface: 'AI ClaimBuilder — guided chat' },
  { pain: '"Paperwork is overwhelming"', surface: 'Automated case building + form filing' },
  { pain: '"Fear of making mistakes"', surface: 'Evidence analyzer + validation gates' },
  { pain: '"What happens at the hearing?"', surface: 'Trial preparation module' },
];

const workedWell = [
  { title: 'Constraint-driven research design.', body: 'The interview pivot wasn\'t a downgrade — it produced two independent validation streams, which is methodologically stronger than a single cohort. Triangulation beats depth when you\'re at the "is this real?" stage.' },
  { title: 'Coding Reddit by hand was worth the time.', body: 'Automated sentiment APIs would have missed the nuance — the difference between "this is hard" and "this is hard and I gave up" is the entire product opportunity.' },
  { title: 'The data did the talking in team alignment.', body: 'A 6-person founding team will have 6 product opinions. A shared, auditable dataset turned product debates into "what does the data show?" conversations.' },
];

const wouldChange = [
  { title: 'n=6 is too small for the survey.', body: 'The Reddit corpus carried more weight, and I should have been clearer about that asymmetry with the team. Next iteration: target n=30+ on the survey.' },
  { title: 'Stratify the Reddit sample.', body: 'I pulled the most recent 50 threads. A stratified sample across years and dispute types would catch edge cases — landlord-tenant vs. consumer disputes have different pain profiles.' },
  { title: 'Sentiment coding needs a second coder.', body: 'All 50 threads were coded by me alone. Inter-rater reliability would make the sentiment claims defensible to a skeptical investor.' },
];

const nextSteps = [
  '10 pilot users recruited through Legal Aid partnerships (the original interview channel, now used for active product testing)',
  'Customer interviews — finally happening, now with a working prototype to react to instead of an abstract concept',
  'Backend architecture plan — moving from prototype to scalable infrastructure',
  'Evidence upload — implement and test the analyzer pipeline end-to-end',
  'Iterate and test product based on pilot feedback',
];

const CLAIMRUNNER_TABS = [
  { id: 'overview',    label: 'Overview'    },
  { id: 'discovery',   label: 'Discovery'   },
  { id: 'ideation',    label: 'Ideation'    },
  { id: 'validation',  label: 'Validation'  },
  { id: 'reflection',  label: 'Reflection'  },
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
              small claims court — eligibility checking, case building, evidence analysis, form filing,
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
            <div className="claimrunner-snapshot-strip">
              {[
                { label: 'Role', value: 'Full-Stack Developer & Designer' },
                { label: 'Sprint', value: 'iStartup Lab — 4 weeks' },
                { label: 'Type', value: 'Product / UX Research' },
                { label: 'Tech Stack', value: 'React, Python, AWS' },
                { label: 'Team', value: 'Cole DuBois, Nathan Lee, Khoa Luong, Rakshanda Bhure, Samridh Bhattacharjee, Anjali Abhilash' },
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

        <section className="claimrunner-tldr">
          <Reveal>
            <p className="claimrunner-kicker">TL;DR</p>
            <p className="claimrunner-tldr-body">
              When our planned user interviews collapsed against a 4-week timeline, I designed a
              two-track research approach — a structured survey plus a Reddit web-crawler with manual
              coding — that produced more independent signal than interviews alone would have. The data
              reframed our product thesis: users weren't asking for legal expertise, they were asking
              for a process they could follow without making mistakes. That insight now anchors our
              positioning.
            </p>
          </Reveal>
        </section>

        {/* ── DISCOVERY ── */}
        <section id="discovery" className="claimrunner-story-section">
          <Reveal className="claimrunner-section-intro">
            <p className="claimrunner-kicker">01 / Discovery</p>
            <h2>The problem behind the problem.</h2>
            <p>
              Small claims court is supposed to be the accessible tier of the justice system. In practice,
              most filers represent themselves — and most of them describe the experience as confusing,
              intimidating, and procedurally opaque. That was our hypothesis going in. But a hypothesis
              isn't a product. We needed evidence about what exactly users were stuck on, in their own
              words, fast enough to inform the prototype.
            </p>
          </Reveal>

          <Reveal className="claimrunner-pivot-block" delay={0.06}>
            <p className="claimrunner-kicker">Research methods — and the pivot that saved them</p>
            <div className="claimrunner-pivot-cards">
              <div className="claimrunner-pivot-card claimrunner-pivot-card--original">
                <span className="claimrunner-pivot-label">Original plan</span>
                <p>8–10 user interviews with self-represented litigants in King County, recruited through Legal Aid contacts.</p>
                <div className="claimrunner-pivot-verdict">✕ Collapsed</div>
              </div>
              <div className="claimrunner-pivot-card claimrunner-pivot-card--actual">
                <span className="claimrunner-pivot-label">What actually happened</span>
                <p>Legal Aid scheduling cycles run longer than our sprint. Cold-recruiting people in active legal disputes is ethically and logistically heavy.</p>
                <div className="claimrunner-pivot-note">
                  <strong>The pivot — two parallel tracks:</strong>
                  <ul>
                    <li><strong>Structured survey (n=6)</strong> — mixed quantitative ranking of pain points with open-ended qualitative prompts</li>
                    <li><strong>Web-crawler analysis of r/Seattle</strong> — ~50 comments manually coded for theme and sentiment</li>
                  </ul>
                  <p className="claimrunner-pivot-insight">The pivot was a feature, not a bug. Two independent sources produced convergent findings — a stronger validation signal than interviews alone. Anonymous Reddit posters can't mirror what a researcher wants to hear.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="claimrunner-data-layout">
            <Reveal className="claimrunner-pain-block" delay={0.06}>
              <p className="claimrunner-kicker">Quantitative findings — survey</p>
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
              <p className="claimrunner-kicker">Qualitative themes — cross-source</p>
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

          <Reveal className="claimrunner-sentiment-block" delay={0.08}>
            <p className="claimrunner-kicker">Reddit sentiment breakdown — 50 coded threads</p>
            <div className="claimrunner-sentiment-bars">
              {sentimentBreakdown.map((s) => (
                <div key={s.label} className="claimrunner-sentiment-row">
                  <div className="claimrunner-sentiment-meta">
                    <strong>{s.label}</strong>
                    <span>{s.detail}</span>
                  </div>
                  <div className="claimrunner-sentiment-bar-track">
                    <div
                      className="claimrunner-sentiment-bar-fill"
                      style={{ width: `${s.weight}%` }}
                    />
                    <span className="claimrunner-sentiment-pct">{s.weight}%</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="claimrunner-big-quote" delay={0.08}>
            <p className="claimrunner-quote-mark">"</p>
            <p className="claimrunner-quote-text">
              I read the court website three times and still wasn't sure if I was filing in the right
              division. I gave up and just absorbed the $400.
            </p>
            <span>— Coded Reddit thread, r/Seattle</span>
          </Reveal>


          <Reveal className="claimrunner-reframe-card" delay={0.06}>
            <p className="claimrunner-kicker">The reframing insight</p>
            <p>
              The single most important finding wasn't in any one data point — it was the gestalt.
              Users weren't asking for legal advice. They were asking for a process they could trust.
              Lawyers translate legal complexity into legal answers. Our users wanted the complexity
              sequenced into actions.
            </p>
            <div className="claimrunner-reframe-split">
              <div className="claimrunner-reframe-from">
                <span>Old framing</span>
                <p>Legal information platform</p>
              </div>
              <div className="claimrunner-reframe-arrow">→</div>
              <div className="claimrunner-reframe-to">
                <span>New framing</span>
                <p>Guided execution engine</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── IDEATION ── */}
        <section id="ideation" className="claimrunner-story-section">
          <Reveal className="claimrunner-section-intro">
            <p className="claimrunner-kicker">02 / Ideation</p>
            <h2>Defining who we're building for — and what already exists.</h2>
          </Reveal>

          <Reveal className="claimrunner-icp-block" delay={0.06}>
            <p className="claimrunner-kicker">Ideal customer profile</p>
            <div className="claimrunner-icp-grid">
              <div className="claimrunner-icp-card">
                <span>Who</span>
                <p>Self-represented individuals — no legal counsel, by choice or cost</p>
              </div>
              <div className="claimrunner-icp-card">
                <span>Behaviour</span>
                <p>Digitally comfortable — online forms, chat interfaces, no technical anxiety</p>
              </div>
              <div className="claimrunner-icp-card">
                <span>Awareness</span>
                <p>Already knows small claims is the right venue — not educating on the what, only the how</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="claimrunner-jtbd" delay={0.08}>
            <h3>Job to be done</h3>
            <p>
              "Help me complete my small claims case with confidence, without wasting time or making mistakes."
            </p>
          </Reveal>

          <Reveal className="claimrunner-why-block" delay={0.06}>
            <p className="claimrunner-kicker">Why they struggle (synthesized from the data)</p>
            <div className="claimrunner-why-grid">
              {[
                'The process is procedural and hard to follow without a map',
                'Steps and requirements are unclear at the point of decision',
                'No structured guidance between "I have a dispute" and "I\'m in court"',
                'Paperwork volume swamps the underlying dispute',
              ].map((w, i) => (
                <div key={i} className="claimrunner-why-card">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <p>{w}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="claimrunner-comp-block" delay={0.08}>
            <p className="claimrunner-kicker">Competitive landscape</p>
            <div className="claimrunner-comp-table">
              <div className="claimrunner-comp-head">
                <span>Category</span>
                <span>Examples</span>
                <span>Gap they leave</span>
              </div>
              {competitors.map((c) => (
                <div key={c.category} className="claimrunner-comp-row">
                  <span>{c.category}</span>
                  <span>{c.examples}</span>
                  <span>{c.gap}</span>
                </div>
              ))}
              <div className="claimrunner-comp-row claimrunner-comp-row--wedge">
                <span>ClaimRunner AI</span>
                <span>—</span>
                <span>Assembles, files, and manages the case as a stateful workflow</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="claimrunner-surfaces-block" delay={0.08}>
            <p className="claimrunner-kicker">Pain → product surface mapping</p>
            <p className="claimrunner-surfaces-sub">The discovery data mapped almost directly onto a product surface.</p>
            <div className="claimrunner-surfaces-table">
              {productSurfaces.map((s, i) => (
                <div key={i} className="claimrunner-surface-row">
                  <div className="claimrunner-surface-pain">{s.pain}</div>
                  <div className="claimrunner-surface-arrow">→</div>
                  <div className="claimrunner-surface-product">{s.surface}</div>
                </div>
              ))}
            </div>
          </Reveal>

       
        </section>

        {/* ── VALIDATION ── */}
        <section id="validation" className="claimrunner-story-section">
          <Reveal className="claimrunner-section-intro">
            <p className="claimrunner-kicker">03 / Validation & Traction</p>
            <h2>The sprint ended with momentum, not just slides.</h2>
            <p>
              Beyond the qualitative work, we ran a parallel validation track to test demand before
              committing to the full product build.
            </p>
          </Reveal>

          <Reveal className="claimrunner-validation-methods" delay={0.06}>
            <p className="claimrunner-kicker">How we validated demand</p>
            <div className="claimrunner-validation-cards">
              {[
                { num: '01', title: 'Live landing page', body: 'claimrunner.ai with mailing list signup — low-friction utility that doubles as lead capture' },
                { num: '02', title: 'Eligibility checker', body: 'Single-purpose entry point built and deployed during the sprint' },
                { num: '03', title: 'Updated CaseBuilder MVP', body: 'Evidence analyzer integrated and pressure-tested against sprint findings' },
              ].map((v) => (
                <div key={v.num} className="claimrunner-validation-card">
                  <span>{v.num}</span>
                  <strong>{v.title}</strong>
                  <p>{v.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="claimrunner-signal-block" delay={0.08}>
            <p className="claimrunner-kicker">Early signal</p>
            <div className="claimrunner-signal-grid">
              <div className="claimrunner-signal-stat">
                <strong>33</strong>
                <span>email signups in the first weeks of the site being live, sourced organically through limited promotion</span>
              </div>
              <div className="claimrunner-signal-stat">
                <strong>2×</strong>
                <span>independent research streams produced convergent findings — triangulation beats a single cohort</span>
              </div>
              <div className="claimrunner-signal-stat claimrunner-signal-stat--quote">
                <p>
                  When the language users use on Reddit is the language on your homepage, conversion friction drops.
                  Our qualitative quotes are now direct copy on the site.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="claimrunner-story-section claimrunner-story-section--prototype" delay={0.08}>
            <Reveal className="claimrunner-section-intro">
              <p className="claimrunner-kicker">Prototype</p>
              <h2>The concept was already moving beyond research into a working structure.</h2>
              <p>
                An AI claim builder, chat-based guidance, a case manager dashboard, and evidence upload.
                The product is intentionally operational: it helps users do the work, not just read about it.
              </p>
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

        {/* ── REFLECTION ── */}
        <section id="reflection" className="claimrunner-story-section">
          <Reveal className="claimrunner-section-intro">
            <p className="claimrunner-kicker">04 / Reflection</p>
            <h2>Methodological flexibility under sprint pressure is the muscle worth training.</h2>
            <p>
              The most valuable research artifact wasn't the survey results — it was the decision to run
              two methods in parallel after the first one broke. And the reframing — from "legal
              information" to "guided execution" — was the kind of insight that only shows up when you
              let the data contradict your starting hypothesis.
            </p>
          </Reveal>

          <div className="claimrunner-reflection-grid">
            <Reveal className="claimrunner-reflection-col" delay={0.04}>
              <p className="claimrunner-kicker">What worked</p>
              {workedWell.map((w) => (
                <div key={w.title} className="claimrunner-reflection-item">
                  <strong>{w.title}</strong>
                  <p>{w.body}</p>
                </div>
              ))}
            </Reveal>

            <Reveal className="claimrunner-reflection-col" delay={0.08}>
              <p className="claimrunner-kicker">What I'd do differently</p>
              {wouldChange.map((w) => (
                <div key={w.title} className="claimrunner-reflection-item">
                  <strong>{w.title}</strong>
                  <p>{w.body}</p>
                </div>
              ))}
            </Reveal>

            <Reveal className="claimrunner-reflection-col claimrunner-reflection-col--dark" delay={0.12}>
              <p className="claimrunner-kicker">What's next (4 weeks)</p>
              <ul className="claimrunner-next-list">
                {nextSteps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Reveal>
          </div>

         
        </section>
      </main>
    </>
  );
};

export default ClaimRunnerCaseStudy;
