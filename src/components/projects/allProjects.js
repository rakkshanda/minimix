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
    title: 'Financial Browser Extension',
    image: eag,
    type: 'frontend',
    data: {
      title: 'Emerald Advisors Chrome Extension',
      tagline: 'Real-time financial news dashboard with AI-powered sentiment analysis.',
      duration: 'May 2025 – Aug 2025',
      tech: 'React, Chrome Extension API, Java, ChatGPT API, Financial APIs',
      images: [emerald],
      footerText: 'Built a Chrome extension with financial API integrations that overlaid the firm\'s stock dashboard, enabling instant curated news fetch with sentiment tags, date filters, and impact sorting. Reduced analyst research time by 50%. Added an in-panel AI chatbot for contextual follow-ups within the same article using a ChatGPT-powered interface, delivers TL;DRs, risk highlights, and cited sources directly in the panel, reducing analyst context-switching.',
      discovery: {
        content: 'Financial analysts at Emerald Advisors were spending hours each day manually researching news for their stock picks. They had to context-switch between multiple tabs, copy stock tickers, and sift through irrelevant articles. Time tracking revealed this research consumed 40% of their workday, reducing time for actual analysis.',
        findings: [
          'Analysts averaged 15+ tab switches per stock research session',
          'Manual news filtering led to missed critical information',
          'No centralized view of sentiment or news impact on stocks',
          'Copy-pasting between tools was error-prone and time-consuming'
        ]
      },
      ideation: {
        content: 'A browser extension emerged as the ideal solution—analysts could stay in their workflow while accessing enhanced functionality. We designed a sidebar overlay that pulled real-time news with AI-powered sentiment analysis. The ChatGPT integration would provide instant summaries and risk highlights.',
        approach: [
          'Chrome extension with React frontend and Java backend',
          'Real-time news aggregation from multiple financial APIs',
          'AI sentiment analysis tagging (bullish/bearish/neutral)',
          'In-panel chatbot for contextual article analysis and Q&A'
        ]
      },
      design: {
        content: 'The interface needed to be dense with information yet scannable. We used color-coded sentiment badges, sortable filters, and expandable article cards. The chatbot panel appeared contextually, allowing analysts to dig deeper without leaving the extension. Dark mode matched the firm\'s trading dashboard aesthetic.',
        decisions: [
          'Compact sidebar design that doesn\'t obscure the main dashboard',
          'Color-coded sentiment badges (green/red/gray) for instant scanning',
          'Date range filters and impact sorting for prioritization',
          'Contextual AI chat panel with cited sources and TL;DR summaries'
        ]
      },
      reflection: {
        learnings: 'Building for power users taught me that efficiency trumps aesthetics—analysts valued speed and information density over polish. The 50% time reduction proved that good tools amplify expertise rather than replace it. Working with financial APIs taught me the importance of data accuracy and real-time performance.',
        takeaways: [
          'Power users prefer information density to minimalism',
          'Context-aware tools beat standalone solutions',
          'AI augmentation works best when it enhances human expertise',
          'Real-time data requires robust error handling and fallbacks'
        ],
        future: 'I would add customizable alerts for specific stocks or keywords. Historical news search would help identify patterns over time. Integration with the firm\'s internal research notes would create a complete analyst workspace.'
      }
    }
  },
  // {
  //   title: 'UW IT KPI Dashboard',
  //   image: aims,
  //   type: 'frontend',
  //   data: {
  //     title: 'UW IT KPI Dashboard',
  //     tagline: 'Real-time data visualization dashboard for tracking key performance metrics.',
  //     duration: 'Oct 2024 – Aug 2025',
  //     tech: 'React, React Charts, Data Visualization',
  //     images: [],
  //     footerText: 'Built a real-time KPI visualization dashboard with multi-graph views and interactive filters, enabling data-driven tracking of traffic, engagement, and conversions while reducing reporting prep time by 40%.'
  //   }
  // },
  {
    title: 'Folklore',
    image: folklore,
    type: 'frontend',
    data: {
      title: 'Folklore WP Plugin',
      tagline: 'People\'s directory search plugin following UW brand guidelines.',
      duration: '5 months',
      tech: 'Figma, Miro, Optimal workshop, PHP, SCSS, JS, WordPress Hooks',
      link: 'https://rakshanda.my.canva.site/folklore',
      images: [folklore2],
      footerText: 'Custom-built WordPress plugin for UW directory search, featuring toggleable views, isolated SCSS styling, and future Google Sheets integration.',
      discovery: {
        content: 'The existing UW directory system suffered from slow load times, poor mobile responsiveness, and zero flexibility in how data was displayed. Technical analysis showed the legacy PHP codebase was bloated with unused dependencies, causing 8+ second load times.',
        findings: [
          'Performance bottleneck from inefficient database queries',
          'Mobile viewport rendering broke layouts completely',
          'No structured CSS methodology led to style conflicts',
          'Departments couldn\'t easily manage their own directory entries'
        ]
      },
      ideation: {
        content: 'We evaluated building a standalone React app, a static site generator, or a WordPress plugin. The WordPress plugin approach won because it leveraged UW\'s existing CMS infrastructure while allowing us to implement modern frontend practices with isolated SCSS and modular JavaScript.',
        approach: [
          'Modern WordPress plugin architecture with namespaced PHP',
          'BEM methodology for maintainable, conflict-free SCSS',
          'Vanilla JavaScript for interactivity without jQuery dependency',
          'Lazy loading and code splitting for optimal performance'
        ]
      },
      design: {
        content: 'From a frontend perspective, I focused on creating responsive, accessible components that worked seamlessly across devices. The dual-view toggle required careful state management and smooth transitions. Every interaction was optimized for performance—debounced search, lazy-loaded images, and efficient DOM manipulation.',
        decisions: [
          'CSS Grid for flexible, responsive layouts without media query hell',
          'Custom event delegation for efficient click handling',
          'Intersection Observer API for lazy loading directory entries',
          'CSS transforms for smooth view-switching animations'
        ]
      },
      reflection: {
        learnings: 'This project deepened my vanilla JavaScript skills and taught me when NOT to reach for a framework. The constraint of working within WordPress forced creative solutions—isolated styling prevented countless headaches. Performance optimization isn\'t just backend work; thoughtful frontend architecture makes the difference.',
        takeaways: [
          'Vanilla JS is powerful when you don\'t need framework overhead',
          'CSS isolation is critical when working within legacy systems',
          'Progressive enhancement ensures broader accessibility',
          'Small optimizations compound into significant performance gains'
        ],
        future: 'I would implement service workers for offline caching and faster subsequent loads. Virtual scrolling would improve performance with large datasets. More granular loading states would provide better user feedback during searches.'
      }
    }
  },
  {
    title: 'AIMS website',
    image: aims,
    type: 'frontend',
    data: {
      title: 'AIMS website',
      tagline: 'A student-led site to promote events and resources.',
      duration: 'Jan 2025 – Present',
      tech: 'PHP, SCSS, JS, WordPress Hooks',
      link: 'https://aims.ischool.uw.edu/',
      images: [aims],
      footerText: 'Designed and developed the official AIMS website for UW iSchool student organization, integrating dynamic content, sponsor highlights, and event pages.',
      discovery: {
        content: 'AIMS (Association for Information Systems students) needed a digital presence to promote events, showcase sponsors, and build community. As a student-run organization, they lacked technical resources and needed something maintainable by non-developers. WordPress emerged as the obvious choice for content management.',
        findings: [
          'Student officers needed to update events without developer help',
          'Sponsor visibility was crucial for funding and partnerships',
          'Mobile traffic would be high (students browsing on phones)',
          'Budget was $0—we had to work within UW\'s existing hosting'
        ]
      },
      ideation: {
        content: 'Within WordPress constraints, I focused on creating a vibrant, modern site that felt distinctly AIMS. We wireframed a homepage with prominent CTAs for upcoming events, a sponsor showcase grid, and easy-to-update resource pages. Custom post types would let officers manage events without touching code.',
        approach: [
          'Custom WordPress theme built on underscores starter theme',
          'Advanced Custom Fields for event management without coding',
          'SCSS with variables for brand consistency',
          'Vanilla JavaScript for interactive elements and animations'
        ]
      },
      design: {
        content: 'I designed bold, engaging layouts with the iSchool brand colors (purple and teal) while maintaining professional credibility. The events calendar used card-based UI for scannability. Sponsor logos were prominently displayed with hover effects. Every page loaded fast—under 2 seconds even on slow connections.',
        decisions: [
          'Hero section with rotating event announcements',
          'Card-based event layouts with clear date/time/location hierarchy',
          'Sponsor grid with hover states showcasing partnerships',
          'Mobile-first approach with touch-friendly interactive elements'
        ]
      },
      reflection: {
        learnings: 'Building for a student organization taught me to design for handoff—the code needed to be maintainable by my successors. WordPress\'s content management shines when properly structured with custom fields and clear documentation. Balancing visual impact with performance constraints improved my optimization skills.',
        takeaways: [
          'Design for the next developer, not just current requirements',
          'Content management systems succeed when clients can self-serve',
          'Performance budgets force creative optimization solutions',
          'Student projects are real projects—they deserve production-quality work'
        ],
        future: 'I would add member profiles to foster community connections. An event RSVP system would help officers gauge attendance. Integration with UW\'s calendar system would reduce duplicate data entry. Analytics would show which content drives the most engagement.'
      }
    }
  },
  {
    title: 'Hunch Website',
    image: hunch,
    type: 'frontend',
    data: {
      title: 'Hunch Website',
      tagline: 'A social platform for readers to discover and discuss ideas.',
      duration: 'Mar 2022 – Apr 2023',
      tech: 'Flutter, Figma',
      link: 'https://hunch.in/',
      images: [hunch],
      footerText: 'Worked on Hunch\'s front-end to create engaging reading experiences and community features, promoting books and author conversations across devices.'
    }
  },
  {
    title: 'PlotX website',
    image: plotx,
    type: 'frontend',
    data: {
      title: 'PlotX website',
      tagline: 'A responsive, data-rich portal for blockchain predictions.',
      duration: 'Mar 2022 – Apr 2023',
      tech: 'AngularJS, SCSS',
      link: 'https://plotx.io/',
      images: [plotx],
      footerText: 'Led front-end development for PlotX\'s landing and app pages, optimizing speed and SEO while delivering real-time crypto prediction interfaces.'
    }
  }
];
