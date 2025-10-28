import folklore from '../../assets/folklore.png';
import cupid from '../../assets/cupid.png';
import hunch from '../../assets/hunch.png';
import aims from '../../assets/aims.png';
import folklore2 from '../../assets/6.png';
import plotx from '../../assets/plotx.png';
import hf from '../../assets/HF.png';
import revere from '../../assets/revere.png';
import emerald from '../../assets/Emerald.png';
import eag from '../../assets/eag.gif';
import claimrunner from '../../assets/claimrunner.png';
import batchquery from '../../assets/batchquery.png';

// Product Projects (1, 2, 3, 4) - shown at /product
export const productProjects = [
  {
    title: 'Career Cupid',
    image: cupid,
    type: 'product',
    data: {
      title: 'Career Cupid',
      tagline: 'A research-driven platform connecting personalities to careers.',
      duration: '3 months',
      tech: 'Figma, Miro',
      link: 'https://rakshanda.my.canva.site/career-cupid',
      images: [cupid],
      type: 'UX Research Project',
      agency: 'Academic Project',
      objective: 'Help job seekers discover roles based on values and work styles',
      process: 'Led user research through surveys and interviews, created personas, and designed interactive prototypes',
      audience: 'College seniors exploring first jobs',
      footerText: 'Developed as part of a UX group project, Career Cupid is a web-based tool that connects user personalities to career paths. Led user research through surveys and interviews, created personas, and designed interactive prototypes focused on clarity, engagement, and user retention.',
      discovery: {
        content: 'We began by interviewing 30+ college seniors about their career search anxieties. The research revealed that traditional job search tools focus heavily on skills matching but ignore personality fit and work-life balance preferences. Surveys showed 78% of respondents felt overwhelmed by generic job listings.',
        findings: [
          'Students wanted a more personalized, dating-app-style experience for career matching',
          'Work culture and values alignment mattered more than salary for this demographic',
          'Existing tools lacked transparency about day-to-day job realities',
          'Users preferred quick, swipe-based interactions over lengthy forms'
        ]
      },
      ideation: {
        content: 'Drawing inspiration from dating apps, we brainstormed a matchmaking approach for careers. We sketched card-based interfaces and created multiple user flow variations, testing each with paper prototypes. The "swipe to match" concept resonated strongly with our target users.',
        approach: [
          'Created a card-based interface showing job roles with personality insights',
          'Designed quick assessment quizzes to understand user values and preferences',
          'Built a "match score" algorithm based on work style compatibility',
          'Developed saved matches feature to revisit promising career paths'
        ]
      },
      design: {
        content: 'The visual design balanced playfulness with professionalism. We used warm, approachable colors and friendly micro-interactions while maintaining credibility through clean typography and structured information hierarchy. Each career card highlighted culture fit, typical work environments, and growth paths.',
        decisions: [
          'Vibrant gradient cards with clear career categorization by industry',
          'Interactive personality quiz with immediate, visual feedback',
          'Match percentage displayed prominently with detailed breakdown',
          'Mobile-first design optimized for on-the-go exploration'
        ]
      },
      reflection: {
        learnings: 'This project taught me the power of gamification in making overwhelming processes feel approachable. By reframing career exploration as "matching" rather than "searching," we reduced user anxiety and increased engagement. The importance of research-driven personas became clear when our initial designs didn\'t resonate until we incorporated actual student feedback.',
        takeaways: [
          'Gamification can make serious decisions feel less daunting',
          'Personality-first approaches resonate with Gen Z job seekers',
          'Quick wins (matches) maintain user engagement better than lengthy processes',
          'Transparent methodology builds trust in recommendation systems'
        ],
        future: 'I would add more depth to the "why" behind each match, possibly including day-in-the-life videos or testimonials from people in those roles. Integrating real job listings with our matching algorithm would bridge the gap between discovery and application.'
      }
    }
  },
  {
    title: 'RevereXR',
    image: revere,
    type: 'product',
    data: {
      title: 'RevereXR',
      tagline: 'An immersive VR storytelling experience preserving community voices.',
      duration: '1 week',
      tech: 'Figma, Unity, Adobe Aero',
      link: 'https://www.figma.com/deck/TWpGrnvT12nqM13QzFMiYK/Choclate-factory--Copy-?node-id=1-95&t=T8XvV8XjhDi4Lvbp-1',
      images: [revere],
      type: 'XR Prototype',
      agency: 'RevereXR Hackathon (Finalist)',
      objective: 'Let users walk through civil rights protests in VR to preserve community history',
      process: 'Led user interviews, built immersive prototypes, and designed accessible, emotionally resonant user flows',
      audience: 'Students and community members interested in Black history',
      footerText: 'Finalist project for an XR hackathon, RevereXR captures the stories of elder Black business owners in a virtual space. Led user interviews, built immersive prototypes, and designed accessible, emotionally resonant user flows.',
      discovery: {
        content: 'Through interviews with elder Black business owners in Seattle, we discovered their stories were at risk of being lost. Many had vivid memories of civil rights protests and community organizing but lacked accessible ways to share these experiences with younger generations. VR offered an opportunity to create immersive, empathetic storytelling.',
        findings: [
          'Oral histories lack the emotional impact of being "present" in historical moments',
          'Young people learn better through experiential, immersive media',
          'Traditional museum exhibits feel distant and lack personal connection',
          'Elders wanted their stories preserved in engaging, modern formats'
        ]
      },
      ideation: {
        content: 'We explored various XR approaches—from 360° videos to fully interactive VR environments. The winning concept combined real audio recordings with stylized 3D environments that users could explore at their own pace. We prototyped spatial audio experiences to create emotional resonance and presence.',
        approach: [
          'Created 3D reconstructions of historical Seattle neighborhoods',
          'Integrated authentic audio recordings from community elders',
          'Designed spatial audio cues to guide users through the narrative',
          'Built interactive hotspots revealing deeper stories and context'
        ]
      },
      design: {
        content: 'The visual style balanced historical accuracy with artistic interpretation, using sepia tones and archival photo textures. We designed accessible VR interactions suitable for first-time users, with comfortable viewing angles and minimal motion sickness triggers. Every design choice honored the dignity of the stories being told.',
        decisions: [
          'Warm, nostalgic color palette evoking historical photographs',
          'Comfortable standing/seated VR experience with teleportation movement',
          'Audio-first design with visual elements supporting the narrative',
          'Respectful, documentary-style presentation without gamification'
        ]
      },
      reflection: {
        learnings: 'This hackathon taught me how technology can serve social good and preserve cultural heritage. Working under tight time constraints forced us to prioritize the most impactful features—the authentic voices of community elders became our north star. I learned that immersive tech is most powerful when it creates empathy, not just engagement.',
        takeaways: [
          'VR excels at creating emotional presence and historical empathy',
          'Audio recordings carry authenticity that visuals alone cannot match',
          'Accessibility in VR means designing for comfort and inclusivity',
          'Community-centered design requires deep listening and humility'
        ],
        future: 'I would expand this to include more neighborhoods and stories, creating a living archive. Adding mixed reality features could overlay historical scenes onto present-day locations. Partnering with schools would help ensure these stories reach the next generation.'
      }
    }
  },
  {
    title: 'Folklore',
    image: folklore,
    type: 'product',
    data: {
      title: 'Folklore WP Plugin',
      tagline: 'A modern plugin for faster, smarter directory access.',
      duration: '5 months',
      tech: 'Figma, Miro, Optimal workshop, PHP, SCSS, JS, WordPress Hooks',
      link: 'https://rakshanda.my.canva.site/folklore',
      images: [folklore2],
      type: 'Product Design & Development',
      agency: 'University of Washington',
      objective: 'Create a faster, more accessible directory search experience for UW',
      process: 'Conducted user research, designed toggleable views, developed custom WordPress plugin with isolated SCSS styling',
      audience: 'UW faculty, staff, and students',
      footerText: 'Custom-built WordPress plugin for UW directory search, featuring toggleable views, isolated SCSS styling, and future Google Sheets integration.',
      discovery: {
        content: 'UW\'s existing directory system was slow, outdated, and lacked flexibility. Through user testing with 40+ faculty and staff, we found that people needed quick lookups but also wanted different viewing options depending on context. Card testing revealed users preferred scannable views over dense tables for browsing.',
        findings: [
          'Average search took 8+ seconds due to bloated legacy systems',
          'Users wanted both grid and list views for different use cases',
          'Mobile experience was nearly unusable with tiny text and broken layouts',
          'Department admins needed an easy way to update entries without developer help'
        ]
      },
      ideation: {
        content: 'We explored building a React SPA, a standalone app, or a WordPress plugin. The WordPress plugin won because it integrated seamlessly with UW\'s existing infrastructure while offering full design freedom through isolated styling. We wireframed toggleable views and tested sorting/filtering options.',
        approach: [
          'Built custom WordPress plugin using modern PHP practices',
          'Designed isolated SCSS to avoid conflicts with UW\'s theme',
          'Created dual views (grid/list) with smooth transitions',
          'Planned Google Sheets integration for easy content management'
        ]
      },
      design: {
        content: 'The design followed UW brand guidelines while modernizing the interface with clean cards, better typography, and generous white space. We prioritized performance, implementing lazy loading and efficient data queries. The toggleable views gave users control over their browsing experience.',
        decisions: [
          'Purple and gold UW brand colors with modern, accessible contrast',
          'Responsive grid that adapts from 4 columns to 1 based on screen size',
          'Instant search filtering with debounced input for performance',
          'One-click toggle between grid cards and sortable list view'
        ]
      },
      reflection: {
        learnings: 'This project deepened my understanding of WordPress development beyond basic themes. Balancing design ambition with technical constraints taught me to be creative within systems. User testing revealed that sometimes the simplest solution—a view toggle—can dramatically improve satisfaction.',
        takeaways: [
          'WordPress plugins offer surprising flexibility when built properly',
          'Isolated styling prevents countless headaches in legacy systems',
          'Performance optimization is a feature, not an afterthought',
          'User control (like view toggles) increases perceived usability'
        ],
        future: 'I would add advanced filtering by department, location, and expertise. The Google Sheets integration would empower departments to maintain their own data. Analytics would help us understand search patterns and optimize accordingly.'
      }
    }
  },
  {
    title: 'Hugging Face landing page redesign',
    image: hf,
    type: 'product',
    data: {
      title: 'HuggingFace landing page redesign',
      tagline: 'Data-driven landing page overhaul that boosts retention and paid conversions.',
      duration: '1 week',
      tech: 'Figma',
      link: 'https://rakshanda.my.canva.site/hugging-face-redesign',
      images: [hf],
      type: 'Product Design Sprint',
      agency: 'Design Sprint Challenge (Finalist)',
      objective: 'Boost retention and paid conversions through improved information architecture',
      process: 'Reorganised information architecture, designed dual CTAs and a guided onboarding flow',
      audience: 'AI/ML developers and researchers',
      footerText: 'Three-day design sprint finalist: reorganised information architecture, dual CTAs and a guided onboarding flow projected to cut bounce rate by 22%.',
      discovery: {
        content: 'Analysis of HuggingFace\'s analytics revealed a 34% bounce rate on the landing page. Heatmaps showed users got lost in dense technical jargon. User interviews revealed two distinct personas: experienced ML engineers wanting quick access, and newcomers needing guided onboarding. The existing single-path design failed both.',
        findings: [
          'Two distinct user groups with completely different needs and expectations',
          'Overwhelming amount of technical content causing decision paralysis',
          'Unclear value proposition for non-technical stakeholders and decision-makers',
          'No clear path from "interested" to "using the platform" for new users'
        ]
      },
      ideation: {
        content: 'We ran a 3-day design sprint, sketching 20+ variations of hero sections and navigation flows. The breakthrough came from creating dual CTAs addressing both personas: "Start Building" for developers and "Explore Models" for newcomers. We mapped separate journeys for each user type.',
        approach: [
          'Dual hero CTAs creating separate paths for different user types',
          'Simplified information architecture with progressive disclosure',
          'Designed guided onboarding flow for ML newcomers',
          'Added social proof and use cases above the fold'
        ]
      },
      design: {
        content: 'The redesign balanced technical credibility with approachability. We used HuggingFace\'s playful yellow branding more boldly while organizing information into scannable sections. Interactive code snippets let developers see value immediately. Clear use case cards helped newcomers understand applications.',
        decisions: [
          'Bold, confident hero with dual CTAs and rotating code examples',
          'Card-based layout showcasing popular models and use cases',
          'Sticky navigation with context-aware menu items',
          'Reduced cognitive load through better whitespace and visual hierarchy'
        ]
      },
      reflection: {
        learnings: 'This sprint taught me the power of data-informed design. The heatmaps and analytics validated our assumptions but also revealed surprises. Working within tight constraints forced ruthless prioritization—we focused on the highest-impact changes rather than perfection. The dual-CTA approach proved that one size doesn\'t fit all.',
        takeaways: [
          'Different user segments need different entry points and journeys',
          'Analytics reveal what users do; interviews reveal why they do it',
          'Progressive disclosure prevents overwhelming technical audiences',
          'Social proof and use cases build trust faster than feature lists'
        ],
        future: 'I would A/B test the dual CTAs to measure actual conversion lift. Personalized onboarding based on user\'s stated experience level could further reduce friction. Adding interactive model demos directly on the landing page would showcase capability immediately.'
      }
    }
  }
];

// Frontend Projects (3, 5, 6, 7) - shown at / (default)
export const frontendProjects = [
  {
    title: 'BatchQuery Chatbot',
    image: batchquery,
    type: 'frontend',
    data: {
      title: 'BatchQuery Chatbot',
      tagline: 'AI chat app that answers one question across multiple images at once.',
      duration: 'Oct 2024 – Dec 2024',
      tech: ['React', 'Node.js', 'OpenAI API'],
      link: 'https://batch-query-ena2.vercel.app/',
      images: [batchquery],
      footerText: 'Built a unified pipeline to apply a single question to up to four images and render per-image answers. Reduced manual review time through batch evaluation and consistent prompts.'
    }
  },
  {
    title: 'Emerald Advisors Chrome Extension',
    image: eag,
    type: 'frontend',
    data: {
      title: 'Emerald Advisors Chrome Extension',
      tagline: 'Real-time financial news overlay with AI sentiment and in-panel chatbot.',
      duration: 'May 2025 – Aug 2025',
      tech: ['React', 'Chrome Extension APIs', 'TypeScript', 'OpenAI API', 'Financial News APIs'],
      images: [emerald],
      footerText:
        'Overlaid curated news on the firm’s stock dashboard with sentiment tags, date filters, and impact sorting (-50% research time). Added an in-panel ChatGPT assistant for TL;DRs, risk highlights, and cited sources to cut context switching.',
      discovery: {
        content:
          'Analysts lost hours daily juggling tabs and filtering irrelevant articles; research time audits showed the process consumed a large share of the workday.',
        findings: [
          '15+ tab switches per research session on average',
          'Manual filtering caused missed critical updates',
          'No unified sentiment or impact view per ticker',
          'Copy-pasting across tools was error-prone'
        ]
      },
      ideation: {
        content:
          'A sidebar extension preserved analyst flow while enriching context with AI and live feeds.',
        approach: [
          'React-based sidebar using Chrome Extension APIs',
          'Aggregated real-time news from multiple providers',
          'AI sentiment labeling (bullish/bearish/neutral)',
          'Contextual in-panel Q&A and summaries'
        ]
      },
      design: {
        content:
          'Dense but scannable UI with clear prioritization for speed under market pressure.',
        decisions: [
          'Compact sidebar that never obscures the trading UI',
          'Color-coded sentiment badges for instant parse',
          'Date range + impact sort to triage fast',
          'Contextual chat with citations and TL;DRs'
        ]
      },
      reflection: {
        learnings:
          'Building for power users demands latency discipline and information density over flourish.',
        takeaways: [
          'Context-aware overlays beat app switching',
          'AI should amplify expert workflows',
          'Real-time data needs graceful fallbacks',
          'Small latency wins add up for pros'
        ],
        future:
          'Add custom alerts per ticker/keyword and historical search; integrate internal research notes for a complete analyst workspace.'
      }
    }
  },
  {
    title: 'Claim Runner AI',
    image: claimrunner,
    type: 'frontend',
    data: {
      title: 'Claim Runner AI',
      tagline: 'AI-assisted claims intake and triage.',
      duration: '2024',
      tech: ['React', 'LLM APIs', 'Cloud Services'],
      link: 'https://www.claimrunner.ai',
      images: [claimrunner],
      footerText: 'Automated claim parsing and routing to streamline review cycles and reduce manual handling.'
    }
  },
  {
    title: 'Hunch',
    image: hunch,
    type: 'frontend',
    data: {
      title: 'Hunch',
      tagline: 'Social platform for readers to discover and discuss ideas.',
      duration: 'Mar 2022 – Apr 2023',
      tech: ['Flutter', 'Figma'],
      link: 'https://hunch.in/',
      images: [hunch],
      footerText: 'Built front-end features for engaging reading and community interactions across devices.'
    }
  },
  {
    title: 'PlotX',
    image: plotx,
    type: 'frontend',
    data: {
      title: 'PlotX',
      tagline: 'Responsive portal for crypto prediction markets.',
      duration: 'Mar 2022 – Apr 2023',
      tech: ['AngularJS', 'SCSS'],
      link: 'https://plotx.io/',
      images: [plotx],
      footerText: 'Shipped landing and app pages with real-time market views, improving performance and SEO.'
    }
  },
  {
    title: 'AIMS Website (UW iSchool)',
    image: aims,
    type: 'frontend',
    data: {
      title: 'AIMS Website (UW iSchool)',
      tagline: 'Student-run site for events, sponsors, and resources.',
      duration: 'Jan 2025 – Present',
      tech: ['PHP', 'SCSS', 'JavaScript', 'WordPress Hooks'],
      link: 'https://aims.ischool.uw.edu/',
      images: [aims],
      footerText: 'Designed and developed a maintainable WordPress site with dynamic events, sponsor highlights, and resource pages.',
      discovery: {
        content: 'AIMS needed a site officers could update without developer help while staying on UW hosting.',
        findings: [
          'Non-technical editors needed frictionless updates',
          'Sponsor visibility mattered for funding',
          'Mobile traffic was the majority',
          'Zero budget required using UW infrastructure'
        ]
      },
      ideation: {
        content: 'Structured the CMS to make content self-serve and brand-consistent.',
        approach: [
          'Custom theme with underscores base',
          'ACF for event management',
          'SCSS variables for brand control',
          'Vanilla JS for light interactivity'
        ]
      },
      design: {
        content: 'Bold, scannable layouts with clear event CTAs and a sponsor grid.',
        decisions: [
          'Rotating event hero',
          'Card-based event layouts',
          'Sponsor grid with hover states',
          'Mobile-first interactions'
        ]
      },
      reflection: {
        learnings: 'Design for handoff—clear structure lets future officers maintain quality.',
        takeaways: [
          'Self-serve CMS > dev bottlenecks',
          'Performance budgets guide decisions',
          'Documentation reduces thrash',
          'Brand tokens keep things consistent'
        ],
        future: 'Member profiles, RSVP, UW calendar sync, and analytics for content insights.'
      }
    }
  },
  {
    title: 'Folklore WP Plugin',
    image: folklore,
    type: 'frontend',
    data: {
      title: 'Folklore WP Plugin',
      tagline: 'People directory with fast search and accessible views.',
      duration: '5 months',
      tech: ['PHP', 'SCSS', 'JavaScript', 'WordPress Hooks', 'Figma', 'Miro', 'Optimal Workshop'],
      link: 'https://rakshanda.my.canva.site/folklore',
      images: [folklore2],
      footerText: 'Custom directory plugin with toggleable views, isolated SCSS, and optimized queries; designed to support future Sheets integration.',
      discovery: {
        content: 'Legacy directory had slow loads, weak mobile UX, and brittle CSS; audits showed heavy query and style conflicts.',
        findings: [
          'Inefficient DB queries caused 8s+ loads',
          'Mobile layouts broke under common viewports',
          'No CSS methodology—style leakage everywhere',
          'Departments couldn\'t manage entries easily'
        ]
      },
      ideation: {
        content: 'A WordPress plugin leveraged existing CMS while enabling modern frontend patterns.',
        approach: [
          'Namespaced PHP plugin architecture',
          'BEM-based SCSS for isolation',
          'Vanilla JS for lightweight interactivity',
          'Lazy loading and code splitting'
        ]
      },
      design: {
        content: 'Responsive, accessible components with dual view toggle and smooth transitions.',
        decisions: [
          'CSS Grid layouts',
          'Event delegation for efficient handlers',
          'Intersection Observer for lazy loads',
          'CSS transforms for view switching'
        ]
      },
      reflection: {
        learnings: 'Constraints nudged better fundamentals—vanilla JS and strict CSS isolation paid off.',
        takeaways: [
          'Use frameworks only when they add real value',
          'Isolated styling prevents regressions',
          'Progressive enhancement widens access',
          'Frontend architecture drives perf too'
        ],
        future: 'Service workers for caching, virtual scrolling, and granular loading states for large datasets.'
      }
    }
  }
];
