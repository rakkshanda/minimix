// Program management portfolio data — used only by the /pm build (REACT_APP_SITE=pm).
// The tech portfolio reads from src/components/projects/allProjects.js and is untouched.

import folklore2 from '../assets/6.png';
import hunch from '../assets/hunch.png';
import aims from '../assets/aims.png';
import plotx from '../assets/plotx.png';
import hf from '../assets/HF.png';
import eag from '../assets/eag.gif';
import claimrunner from '../assets/claimrunner.png';
import sp from '../assets/sp2.png';
import cc from '../assets/cc.gif';
import spGif from '../assets/gifs/sp.gif';
import aimsGif from '../assets/gifs/aims.gif';
import plotxGif from '../assets/gifs/plotx.gif';
import claimGif from '../assets/gifs/claimw.gif';

export const pmProjects = [
  {
    slug: 'south-project',
    title: 'South Project',
    image: sp,
    hoverImage: spGif,
    data: {
      title: 'South Project',
      tagline: 'Ran a donor platform rebuild against a fixed enrollment deadline nobody could move.',
      type: 'Program Management',
      duration: '2024',
      role: 'Program Manager',
      team: 'Design, engineering, nonprofit program lead, volunteer coordinators',
      context: 'South Project TX — Young Moms Work & Wellness Bridge',
      stakeholders: 'Program leadership, volunteer staff, donors, engineering partners',
      link: 'https://southprojecttx.com',
      linkLabel: 'View live',
      images: [sp],
      situation: {
        content:
          'The donation platform had to be rebuilt, and the date was set by something outside the project: an enrollment drive for the Young Moms Work & Wellness Bridge program that was already scheduled and already promoted. That inverted the usual planning question. Scope was the only variable I had, so my first job was establishing what the program could actually absorb before the date, and getting leadership to agree to that boundary in writing rather than discovering it in week six.',
        findings: [
          'The launch date was externally fixed by an already-promoted enrollment drive — scope was the only lever',
          'Requests arrived from three directions (program staff, board, volunteers) with no shared intake or ranking',
          'Payment processing and hosting sat with an external vendor whose timeline I did not control',
          'Accessibility compliance was mandatory, so it could not be treated as a post-launch cleanup phase'
        ]
      },
      plan: {
        content:
          'I split the work into a must-ship core and a clearly labeled second phase, and got that split signed off before build started — which meant later requests had somewhere to go besides the critical path. The vendor dependency drove the sequence: anything touching payment went first, so integration problems surfaced while there was still room to react rather than in launch week.',
        decisions: [
          'Two-phase scope agreed and documented up front, so late requests had a destination other than "no"',
          'Vendor-dependent work front-loaded to expose integration risk early, when it was still cheap',
          'Single intake path for requests from program, board, and volunteers, ranked against the launch date',
          'Accessibility built into the definition of done rather than scheduled as a phase that could slip',
          'A weekly written status to leadership, so scope conversations happened before decisions, not after'
        ]
      },
      delivery: {
        content:
          'The program ran on a short weekly cycle with a standing risk list I reviewed with the team every week — three or four live items, each with an owner and a trigger point for escalation. The hardest week was a vendor integration delay that put the payment path at risk; because it had been sequenced early, we had slack to absorb it by deferring a phase-two item instead of moving the date. Coordinating volunteer content contributors alongside paid engineers meant running two different cadences and buffering the handoffs between them.',
        practices: [
          'Weekly delivery cycle with a standing risk review — owner and escalation trigger per item',
          'Vendor delay absorbed by deferring phase-two scope, holding the fixed launch date',
          'Separate cadences for volunteer contributors and engineering, with buffered handoffs',
          'Launch readiness checklist covering accessibility, payment path, and content sign-off',
          'Decisions logged as they were made, so no one relitigated a settled tradeoff'
        ]
      },
      outcomes: {
        content:
          'The platform shipped on the date the enrollment drive needed, and the program it supported enrolled 100 mothers into the Young Moms Work & Wellness Bridge. Nothing was cut in the last week, because the cuts had been agreed months earlier.',
        results: [
          'Launched on a fixed, externally-set date with no last-minute descoping',
          '100 mothers enrolled into the Young Moms Work & Wellness Bridge program',
          'Vendor slippage absorbed without moving the date or dropping compliance work',
          'Accessibility requirements met at launch instead of retrofitted afterward'
        ],
        learnings:
          'Agreeing what gets cut before you need to cut it is the whole job. By the time a program is behind, every remaining item has a defender — the tradeoffs have to be settled while they are still hypothetical.',
        next:
          'Move the second phase into a scheduled release train rather than an ad-hoc backlog, and add a lightweight dependency check for the next vendor engagement.'
      }
    }
  },
  {
    slug: 'folklore',
    title: 'Folklore',
    image: folklore2,
    data: {
      title: 'Folklore',
      tagline: 'Coordinated a directory rollout across departments that had all stopped trusting the old one.',
      type: 'Program Management',
      duration: '5 months',
      role: 'Program Manager',
      team: 'Cross-functional team of 4, plus departmental stakeholders and university IT',
      context: 'University of Washington — directory platform',
      stakeholders: 'Department administrators, university IT, communications, end users',
      link: 'https://www.washington.edu/docs/plugins/uw-directory-plugin/directory-example/',
      linkLabel: 'View live',
      images: [folklore2],
      situation: {
        content:
          'The existing directory took over eight seconds to load and had failed its users long enough that every department had quietly built its own spreadsheet. That made this a rollout program more than a build program: the technical work was finite, but adoption meant getting departments to give up workarounds they had spent years perfecting, and each one had a different reason for keeping theirs.',
        findings: [
          'Load times above 8 seconds had already pushed departments onto private spreadsheets',
          'Every department had a different workaround, so there was no single migration path to design',
          'University IT owned the hosting environment, adding an approval dependency to the timeline',
          'Accessibility compliance was a hard gate for a public university — non-negotiable, not prioritizable'
        ]
      },
      plan: {
        content:
          'I ran discovery across departments first and turned the recurring complaints into a ranked backlog, which gave me something specific to point at when a stakeholder asked why their request was not in scope. The plan sequenced departments deliberately: start with the ones whose data was cleanest, so early migrations went smoothly and gave later, more skeptical departments something real to look at.',
        decisions: [
          'Departmental discovery converted into one ranked backlog, so scope debates cited evidence, not seniority',
          'Rollout sequenced by data readiness — easiest departments first to build a track record',
          'IT approval treated as a scheduled dependency with its own lead time, not an afterthought',
          'Advanced filtering explicitly deferred when the timeline tightened, with the rationale circulated'
        ]
      },
      delivery: {
        content:
          'Over five months the real work was communication: a standing update to department contacts, a documented migration path per department, and a single owner for questions so people were not chasing four different answers. When the timeline compressed, I cut advanced filtering rather than compress testing, and I told stakeholders why before they noticed it was missing — a deferral you announce is a decision, one they discover is a failure.',
        practices: [
          'Standing written updates to department contacts throughout the five-month program',
          'A documented migration path per department instead of one generic rollout plan',
          'Single named owner for stakeholder questions, preventing conflicting answers',
          'Scope cuts communicated ahead of discovery, with the reasoning attached',
          'Accessibility verification held as a release gate rather than a parallel workstream'
        ]
      },
      outcomes: {
        content:
          'The rebuilt directory replaced the shadow spreadsheets it was competing against, and shipped as a documented, reusable pattern other university teams could adopt without repeating the discovery work.',
        results: [
          'Load time cut from 8s+, removing the reason departments had defected in the first place',
          'Departments migrated off private spreadsheets onto a single source of truth',
          'Delivered as a documented pattern reusable by other university teams',
          'Accessibility compliance met at launch, clearing the university gate on schedule'
        ],
        learnings:
          'Adoption is a program deliverable with its own plan, not something that happens after launch. The sequencing decision — easy departments first — did more for uptake than any feature in the backlog.',
        next:
          'Usage data on search behavior to justify the deferred filtering work, and a documented intake path for the next set of departments.'
      }
    }
  },
  {
    slug: 'aims-uw',
    title: 'AIMS UW',
    image: aims,
    hoverImage: aimsGif,
    data: {
      title: 'AIMS UW',
      tagline: 'Built a program that survives its own team turning over every year.',
      type: 'Program Management',
      duration: 'Jan 2025 – Present',
      role: 'Program Manager',
      team: 'Student volunteer team with annually rotating org officers',
      context: 'AIMS — UW iSchool student community',
      stakeholders: 'Rotating student officers, iSchool faculty contacts, sponsors, UW IT',
      link: 'https://aims.ischool.uw.edu/',
      linkLabel: 'View live',
      images: [aims],
      situation: {
        content:
          'Every previous version of the AIMS site had died the same way: the one officer who knew how to update it graduated. The brief was a redesign; the actual program problem was continuity. A volunteer team on an academic calendar, a stakeholder group that fully replaces itself each year, zero budget, and university hosting constraints — the deliverable had to keep working after everyone who built it was gone.',
        findings: [
          'Annual officer turnover reset all operational knowledge, and content went stale within months',
          'Volunteer capacity fluctuated with the academic calendar — midterms and finals were dead zones',
          'Zero budget ruled out paid tooling and any recurring cost',
          'University hosting and brand standards were fixed constraints, with UW IT as an external dependency'
        ]
      },
      plan: {
        content:
          'I planned the program around the calendar rather than against it, putting demanding work in the low-load weeks and keeping the mid-quarter stretches light. Success was defined as officers updating content with no developer involved, which set the scope: fewer, simpler content types that a first-time editor could not break, and a handoff package treated as a shipping requirement rather than documentation debt.',
        decisions: [
          'Milestones scheduled around the academic calendar, avoiding midterm and finals capacity troughs',
          'Success defined as unassisted officer updates, not launch date or visual refresh',
          'Editable surface deliberately constrained so a new officer could not break the site',
          'Handoff documentation scoped as a deliverable with its own acceptance criteria',
          'UW IT touchpoints identified early and scheduled with lead time built in'
        ]
      },
      delivery: {
        content:
          'Running a volunteer team means you cannot rely on assignment — you rely on clarity and short commitments, so a contributor who disappears for two weeks does not block anyone. I kept work in small independent chunks with visible ownership, and ran the officer handoff as a rehearsed exercise: officers performed real updates themselves while we watched, which is where the documentation gaps actually showed up.',
        practices: [
          'Work broken into small independent chunks so volunteer absences did not create blockers',
          'Visible ownership and short commitments in place of assigned deadlines',
          'Handoff rehearsed with officers performing live updates, exposing gaps in the docs',
          'Brand and accessibility standards enforced through shared tokens rather than review',
          'Recurring update responsibilities written down and assigned to officer roles, not people'
        ]
      },
      outcomes: {
        content:
          'Officers publish events and sponsor updates on their own, and the site stayed current through a full officer transition — the exact point where earlier versions had died.',
        results: [
          'Officers publish independently, with no developer in the loop for routine updates',
          'Site survived an officer transition, unlike every previous version',
          'Zero recurring cost maintained on university hosting',
          'Operating knowledge transferred to roles rather than individuals'
        ],
        learnings:
          'When your team rotates out annually, handoff is the product. Rehearsing it — making officers do the real task while we watched — found gaps that no amount of documentation review would have.',
        next:
          'A standing annual onboarding session at officer transition, plus light analytics so officers can see which content earns attention.'
      }
    }
  },
  {
    slug: 'portfolio-insights',
    title: 'Portfolio Insights',
    image: eag,
    data: {
      title: 'Portfolio Insights',
      tagline: 'Delivered an AI research tool inside a fixed four-month window with vendor dependencies.',
      type: 'Program Management',
      duration: 'May 2025 – Aug 2025',
      role: 'Program Manager',
      team: 'Engineering, design, and external data providers',
      context: 'Financial research tooling — browser extension',
      stakeholders: 'Analyst end users, engineering, third-party news and data vendors',
      link: 'https://github.com/rakkshanda/EA-Chrome-extension/tree/main',
      linkLabel: 'View code',
      images: [eag],
      situation: {
        content:
          'A four-month window, a user group whose time is expensive to borrow, and a build that depended on third-party news feeds and an AI provider — none of which I controlled. Analysts were losing 15+ tab switches per research session, so the value was clear; the program risk was concentrated entirely in the external dependencies and in a fixed end date that could not absorb a discovery detour.',
        findings: [
          'Fixed four-month window with no option to extend',
          'Core functionality depended on external news feeds and an AI provider — rate limits and outages were live risks',
          'Analyst availability for validation was scarce and had to be booked well ahead',
          'Browser extension review added a release step with a queue time outside our control'
        ]
      },
      plan: {
        content:
          'I sequenced every external dependency to the front of the schedule. Feed integration and the AI provider were validated in the first weeks specifically so that if one failed, we would be choosing an alternative in month one instead of month three. Analyst validation sessions were booked in advance against the calendar rather than requested when we happened to be ready, because scarce stakeholder time will not appear on demand.',
        decisions: [
          'External dependencies validated first, so failures surfaced while alternatives were still viable',
          'Analyst validation sessions booked to the calendar in advance rather than scheduled on readiness',
          'Scope split into a must-ship core and a deferrable second tier, agreed before build',
          'Extension review queue time built into the schedule as a known fixed cost',
          'Fallback behaviour for feed outages specified as a requirement, not left to runtime luck'
        ]
      },
      delivery: {
        content:
          'The program ran in short cycles with a live risk register; the dependency risks stayed on it all the way to launch rather than being closed once integration worked, because a vendor that works in June can still rate-limit you in August. When the contextual Q&A work threatened the core timeline, I moved it to the second tier rather than compressing testing on the primary path — the pre-agreed scope split made that a five-minute conversation instead of a negotiation.',
        practices: [
          'Live risk register with vendor dependencies kept open through launch, not closed at integration',
          'Short delivery cycles with scope checked against the fixed end date each cycle',
          'Q&A functionality moved to the second tier when it threatened the core path',
          'Graceful degradation verified against simulated feed failures before release',
          'Requirements for AI output — sourcing, consistency — written as testable acceptance criteria'
        ]
      },
      outcomes: {
        content:
          'The tool shipped inside the window with its core intact, and the tab-switching loop that had defined analyst research sessions was gone. The dependency-first sequencing was what made the date achievable.',
        results: [
          'Delivered within the fixed four-month window with the core scope intact',
          'Analyst research consolidated in-workflow, removing the 15+ tab-switch loop',
          'Vendor risk contained through early validation and specified fallback behaviour',
          'AI output met sourcing criteria as a release condition, earning analyst trust'
        ],
        learnings:
          'Dependencies you do not own belong at the front of the schedule, not wherever they fit the build order. Every week you delay validating them is a week of your own slack you have already spent.',
        next:
          'Formalize vendor SLAs and monitoring, and carry the second-tier scope into a planned follow-on release.'
      }
    }
  },
  {
    slug: 'plotx',
    title: 'PlotX',
    image: plotx,
    hoverImage: plotxGif,
    data: {
      title: 'PlotX',
      tagline: 'Coordinated launch surfaces across marketing, design, and engineering on a campaign calendar.',
      type: 'Program Management',
      duration: 'Mar 2022 – Apr 2023',
      role: 'Program Manager, launch surfaces',
      team: 'Marketing, design, engineering',
      context: 'PlotX — prediction and quiz platform',
      stakeholders: 'Marketing and campaign owners, design, engineering, leadership',
      link: 'https://plotx.io/',
      linkLabel: 'View live',
      images: [plotx],
      situation: {
        content:
          'Campaign dates were set by marketing, and the public-facing surfaces had to be ready when the spend started — which meant the schedule was driven by a calendar the delivery team did not own. Requests arrived directly from several stakeholders with no shared queue, so engineering was absorbing changes late and the same messaging decision kept getting made differently in different places.',
        findings: [
          'Campaign dates set externally by marketing, with paid spend starting on schedule regardless of readiness',
          'Requests reached engineering through several channels with no shared queue or ranking',
          'No single source of truth for messaging, so the same decision was re-made inconsistently',
          'Late-arriving changes were landing after review, compressing QA against a hard date'
        ]
      },
      plan: {
        content:
          'I put a single intake and a change cutoff in place, tied to the campaign calendar: requests after the cutoff went to the next cycle unless someone escalated deliberately. That converted a stream of interruptions into a plannable queue, and gave marketing a predictable date to work back from rather than an open-ended one to push against.',
        decisions: [
          'Single intake queue replacing direct-to-engineering requests from multiple stakeholders',
          'Change cutoff tied to each campaign date, with a deliberate escalation path for genuine exceptions',
          'One approved messaging source of truth, so copy decisions were made once',
          'Review and QA windows scheduled as fixed blocks rather than whatever time remained'
        ]
      },
      delivery: {
        content:
          'Each campaign cycle ran the same way — intake, build, review, cutoff, launch — so stakeholders learned the rhythm and stopped negotiating it. Holding the cutoff was the recurring test: the first few times it was uncomfortable, and after that the requests arrived earlier on their own, which was the actual goal.',
        practices: [
          'Repeatable cycle per campaign so stakeholders could plan against a known rhythm',
          'Cutoff enforced consistently, which pulled request timing earlier over subsequent cycles',
          'Cross-team review with design, marketing, and engineering in one pass instead of serial handoffs',
          'Launch checklist run before each campaign start, covering performance and mobile',
          'Post-campaign notes captured to inform the next cycle\'s plan'
        ]
      },
      outcomes: {
        content:
          'Launch surfaces were ready when campaigns started, and the coordination overhead dropped as the cycle became predictable rather than negotiated each time.',
        results: [
          'Launch readiness aligned to campaign dates without last-minute compression',
          'Request chaos replaced by a single queue with a visible cutoff',
          'Messaging consistency maintained across surfaces from one approved source',
          'Rework reduced as stakeholders adapted to the cycle and submitted earlier'
        ],
        learnings:
          'A process only works if you hold it the first few times it is inconvenient. The cutoff changed behaviour not because it was announced but because it was enforced when someone senior tested it.',
        next:
          'Extend the intake and cutoff model to the remaining campaign surfaces, and track cycle-over-cycle rework to prove the process is earning its overhead.'
      }
    }
  },
  {
    slug: 'hunch',
    title: 'Hunch',
    image: hunch,
    data: {
      title: 'Hunch',
      tagline: 'Kept a multi-platform mobile release train running against app store queues.',
      type: 'Program Management',
      duration: 'Mar 2022 – Apr 2023',
      role: 'Program Manager, mobile releases',
      team: 'Mobile engineering, backend, design, QA',
      context: 'Hunch — social networking platform',
      stakeholders: 'Mobile and backend engineering, design, QA, leadership',
      link: 'https://hunch.in/',
      linkLabel: 'View live',
      images: [hunch],
      situation: {
        content:
          'Mobile releases involve a step you cannot expedite: app store review. Work was being declared done at code complete, which meant the actual ship date was whatever the review queue decided, and coordination across mobile, backend, and design was happening after the fact. Features were also being planned before the instrumentation existed to tell whether previous ones had worked.',
        findings: [
          'App store review added unpredictable queue time between code complete and users',
          'Mobile, backend, and design work was coordinated reactively rather than sequenced',
          'Backend dependencies surfaced mid-cycle, stalling client work already underway',
          'Features were planned without instrumentation in place to evaluate the previous release'
        ]
      },
      plan: {
        content:
          'I moved the team onto a release train with dates that counted backwards from store availability, not from code complete — so review queue time was inside the plan instead of a surprise at the end. Backend dependencies were identified and scheduled ahead of the client work that consumed them, and instrumentation was sequenced before the features it was meant to measure.',
        decisions: [
          'Release train scheduled backwards from store availability, absorbing review queue time',
          'Backend dependencies mapped and scheduled ahead of dependent client work',
          'Instrumentation sequenced before the features it needed to evaluate',
          'A defined cut line per release — work not ready by the date rolled to the next train, not the date'
        ]
      },
      delivery: {
        content:
          'The train made the tradeoff explicit every cycle: miss the cut, catch the next one. That was easier to hold than case-by-case negotiation because the next train was always visible and close. Cross-team coordination moved to a single sequencing conversation per cycle rather than continuous ad-hoc escalation between mobile and backend.',
        practices: [
          'Fixed cut line per release, with rollover to the next train instead of date movement',
          'One sequencing conversation per cycle across mobile, backend, and design',
          'Submission prepared and buffered ahead of the target availability date',
          'Defect triage with agreed severity thresholds for what blocks a release',
          'Release notes and rollout status communicated on a predictable cadence'
        ]
      },
      outcomes: {
        content:
          'Releases became predictable enough to plan around, and the review queue stopped being the thing that decided the date. Teams could commit to a train instead of guessing at a ship day.',
        results: [
          'Predictable release cadence with store review time inside the plan',
          'Backend blockers surfaced before they stalled client work mid-cycle',
          'Scope pressure resolved by rolling work forward rather than moving dates',
          'Instrumentation available to evaluate releases before the next was planned'
        ],
        learnings:
          'A regular train is easier to hold than a negotiated date, because missing it costs one cycle instead of a quarter. The predictability is what makes people accept the cut line.',
        next:
          'Tighten the train cadence as confidence grows, and add automated pre-submission checks to shave preparation time.'
      }
    }
  },
  {
    slug: 'claim-runner-ai',
    title: 'Claim Runner AI',
    image: claimrunner,
    hoverImage: claimGif,
    data: {
      title: 'Claim Runner AI',
      tagline: 'Stood up a 0→1 program where the biggest risk was shipping something confidently wrong.',
      type: 'Program Management',
      duration: '2024',
      role: 'Program Manager',
      team: 'Founding team — engineering, design, legal advisor',
      context: 'Claim Runner AI — small claims management',
      stakeholders: 'Founding team, legal advisor, early users',
      link: 'https://www.claimrunner.ai',
      linkLabel: 'View live',
      images: [claimrunner],
      situation: {
        content:
          'A new build in a domain where a wrong answer costs a real person their claim. That put an unusual item at the top of the risk register: not schedule slip, but shipping guidance that sounds authoritative and is incorrect. The program also depended on a legal advisor who was not full-time, so every review was a scheduled dependency rather than something available on demand.',
        findings: [
          'The primary program risk was incorrect guidance reaching users, not delivery delay',
          'Legal review was a part-time external dependency requiring advance scheduling',
          'A small founding team meant no capacity buffer — one person blocked was the workstream blocked',
          'Scope could expand indefinitely across claim types, so a boundary had to be set and defended'
        ]
      },
      plan: {
        content:
          'I planned review checkpoints around the advisor\'s availability rather than assuming it, booking them ahead of the work that would need them. Scope was capped at a narrow set of claim types deliberately, so the review burden stayed inside what one part-time advisor could actually absorb — breadth would have meant either unreviewed output or a stalled schedule.',
        decisions: [
          'Legal review checkpoints scheduled around advisor availability, ahead of the work needing them',
          'Claim-type coverage capped so review load stayed within part-time advisor capacity',
          'A hard scope boundary between procedural guidance and legal advice, agreed and documented',
          'Correctness gates placed before launch readiness rather than parallel to it'
        ]
      },
      delivery: {
        content:
          'The risk register led every check-in, with correctness at the top rather than buried under schedule items. Where the system was uncertain, deferral paths were specified as requirements and verified before release. Coverage expansion was structured as an explicit decision with its own review, so growth could not happen by drift.',
        practices: [
          'Risk register reviewed at every check-in with correctness ranked above schedule',
          'AI output boundaries and deferral paths specified as testable acceptance criteria',
          'Scope expansion gated behind an explicit decision with its own review step',
          'Launch readiness treated as a checklist with a named owner per item',
          'Real claim scenarios used for validation before any coverage was widened'
        ]
      },
      outcomes: {
        content:
          'The product launched inside a boundary it could defend — useful within its scope, explicit about its limits, and structured so expanding coverage requires a decision rather than happening quietly.',
        results: [
          'Launched with a documented, defensible scope boundary',
          'Legal review kept off the critical path through advance scheduling',
          'Product limitations surfaced in the interface rather than buried in terms',
          'Coverage expansion structured as a reviewed decision, preventing scope drift'
        ],
        learnings:
          'Not every program\'s top risk is the schedule. Ranking correctness above the date on the register changed what got reviewed first, and it should have been obvious sooner than it was.',
        next:
          'Expand coverage in reviewed increments, and add outcome tracking to learn where guidance held up in real use.'
      }
    }
  },
  {
    slug: 'career-cupid',
    title: 'Career Cupid',
    image: cc,
    data: {
      title: 'Career Cupid',
      tagline: 'Ran research operations for 30+ participants inside a single academic term.',
      type: 'Program Management',
      duration: '3 months',
      role: 'Program Manager / Research Lead',
      team: 'Student team of 4',
      context: 'Academic product project',
      stakeholders: 'Faculty reviewers, student team, research participants',
      link: 'https://rakshanda.my.canva.site/career-cupid',
      linkLabel: 'View',
      images: [cc],
      situation: {
        content:
          'Three months, four students with competing coursework, fixed faculty review dates, and a research plan that needed 30+ participants who had no obligation to show up. The binding constraint was not the work itself — it was participant scheduling, which had a long lead time and would have quietly consumed the term if it were not planned first.',
        findings: [
          'Participant recruitment and scheduling had the longest lead time of any activity in the plan',
          'Team capacity fluctuated with coursework deadlines across four different schedules',
          'Faculty review dates were fixed and non-negotiable milestones',
          'Analysis could not start until interviews completed, creating a hard sequence in a short term'
        ]
      },
      plan: {
        content:
          'Recruitment started in week one, before the research protocol was finalized, because participants were the long pole and everything downstream sat behind them. I worked backwards from the fixed faculty review dates to set internal milestones with real buffer, and sized scope to the team\'s realistic capacity around midterms rather than to the calendar\'s nominal weeks.',
        decisions: [
          'Recruitment started before protocol finalization, since participants gated everything downstream',
          'Internal milestones set backwards from fixed faculty review dates, with buffer built in',
          'Scope sized to realistic capacity around coursework, not to nominal available weeks',
          'Interview scheduling batched to compress the analysis-blocked period'
        ]
      },
      delivery: {
        content:
          '30+ interviews and a survey ran to schedule because recruitment had a head start and sessions were batched rather than booked as people became available. Synthesis was shared as it emerged instead of held for a single reveal, which meant the team was aligned continuously and faculty reviews became checkpoints on known work rather than presentations of surprises.',
        practices: [
          '30+ participant interviews plus survey distribution delivered on schedule',
          'Sessions batched to compress the period where analysis was blocked',
          'Findings shared continuously rather than saved for a single synthesis milestone',
          'Clear ownership per workstream so parallel work did not collide across four schedules',
          'Faculty reviews used as checkpoints on visible progress, not first reveals'
        ]
      },
      outcomes: {
        content:
          'The team hit every faculty milestone and finished the term with validated findings rather than an unfinished research plan — the common failure mode for term-length projects that start recruiting late.',
        results: [
          'All fixed faculty milestones met within the three-month term',
          '30+ interviews and survey completed on schedule',
          'Findings validated with target users before build effort was committed',
          'Team stayed aligned through continuous synthesis rather than end-loaded reporting'
        ],
        learnings:
          'Identify the longest-lead item and start it before you feel ready. Waiting for a finished protocol would have cost two weeks we did not have, and the protocol changed after the first interviews anyway.',
        next:
          'Reuse the recruitment pipeline for follow-up validation, and template the schedule for the next term-length research program.'
      }
    }
  },
  {
    slug: 'hugging-face',
    title: 'Hugging Face',
    image: hf,
    data: {
      title: 'Hugging Face',
      tagline: 'Facilitated a time-boxed sprint to a prioritized, adoptable set of recommendations.',
      type: 'Program Management',
      duration: 'Sprint format',
      role: 'Program Manager / Facilitator',
      team: 'Sprint team with design and research partners',
      context: 'Self-directed product teardown and redesign',
      stakeholders: 'Sprint team, usability test participants, reviewers',
      link: 'https://rakshanda.my.canva.site/hugging-face-redesign',
      linkLabel: 'View',
      images: [hf],
      situation: {
        content:
          'A fixed sprint window with an open-ended problem — a platform dense enough that the scope could have expanded indefinitely. Time-boxed work fails in a predictable way: the team explores broadly, runs out of days, and produces something interesting that nobody can act on. The program job was to force convergence early enough that the output was prioritized rather than merely thorough.',
        findings: [
          'The problem space was open-ended enough to absorb any amount of time available',
          'The sprint window was fixed, so scope was the only adjustable variable',
          'Usability sessions had to be scheduled inside a window that left room to act on findings',
          'Output would be worthless without prioritization — a long flat list is not adoptable'
        ]
      },
      plan: {
        content:
          'I set a convergence point at the midpoint and structured the sprint around it: diverge, then commit to a defined user journey and stop exploring. Usability sessions were scheduled early enough that findings could still change the recommendations, since research that lands after the deadline is documentation, not input.',
        decisions: [
          'Explicit midpoint convergence, after which the journey under study was locked',
          'Usability sessions scheduled early enough for findings to still influence the output',
          'Recommendations required to trace to an observed failure — no unsupported proposals',
          'Output format fixed as an impact-versus-effort ranking, defined before the work started'
        ]
      },
      delivery: {
        content:
          'The sprint ran to the convergence point on schedule, and everything after it was synthesis and ranking rather than further exploration. Deciding the output format up front shaped what got collected along the way — the team gathered effort signals and failure evidence during research because they knew both were needed for the final ranking.',
        practices: [
          'Convergence held at the midpoint, ending exploration on schedule',
          'Findings synthesized continuously so the deadline met a draft, not a blank page',
          'Every recommendation traced to a documented usability failure',
          'Impact and effort captured during research because the output format required them',
          'Recommendations sequenced for incremental adoption rather than all-or-nothing'
        ]
      },
      outcomes: {
        content:
          'The sprint produced a ranked, evidence-backed set of recommendations that could be picked up incrementally — each traceable to a specific place users got lost, and ordered by return on effort.',
        results: [
          'Delivered within the fixed sprint window with prioritized output, not a flat list',
          'Every recommendation traceable to an observed usability failure',
          'Changes ranked by impact against implementation effort for incremental adoption',
          'Convergence discipline prevented the usual time-boxed sprawl'
        ],
        learnings:
          'Deciding the output format before the work starts changes what the team collects while doing it. The effort estimates existed at the end only because the format demanded them at the start.',
        next:
          'Validate the proposed structure with a tree test, and template this sprint format for future time-boxed evaluations.'
      }
    }
  }
];

export const getPmProject = (slug) => pmProjects.find((project) => project.slug === slug);
