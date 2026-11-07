export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
  accent?: 'blue' | 'indigo' | 'violet' | 'emerald';
}

export interface FeaturedProject {
  id: string;
  title: string;
  shortTitle: string;
  badge: string;
  impactMetric: string;
  company?: string;
  dates?: string;
  description: string;
  technologies: string[];
  playStoreUrl: string;
  /**
   * Optional path to a real screenshot in `public/assets/projects/...`.
   * Leave empty to render the custom engineered visual preview.
   */
  screenshot?: string;
  screenshotAlt?: string;
  visualTheme: 'printer' | 'webrtc' | 'deepsearch' | 'logomaker';
  featuredPriority?: boolean;
}

export interface SecondaryProject {
  title: string;
  category: string;
  playStoreUrl: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  employmentType?: string;
  summary: string;
  highlights: string[];
  technologies?: string[];
  keyMetrics?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: string[];
}

export interface AchievementItem {
  metric: string;
  title: string;
  description: string;
  tag: string;
}

export interface EngineeringPillar {
  title: string;
  description: string;
  iconName: 'code' | 'layers' | 'zap' | 'compass';
}

export const siteConfig = {
  name: 'Shah Saud',
  title: 'Senior Android Engineer',
  eyebrow: 'Senior Android Engineer · Mobile Product Builder',
  tagline:
    'Building production Android products with Kotlin, Jetpack Compose and modern mobile architecture.',
  supportingDescription:
    '5+ years building and shipping Android applications across consumer, AI, productivity, connectivity and real-time communication products.',
  primaryPositioning:
    'Senior Android Engineer focused on building production-grade Android applications using Kotlin, Jetpack Compose, modern Android architecture, real-time communication, AI integrations, connectivity, and performance-focused engineering.',
  experienceYears: '5+ Years',
  location: 'Islamabad, Pakistan',
  availabilityStatus: 'Available for New Opportunities',
  availabilityFormats: [
    'Remote',
    'Hybrid',
    'On-site',
    'International Opportunities',
    'Visa-Sponsored Opportunities',
  ],
  recentEmploymentNote: 'Most recent role concluded in October 2026',
  contact: {
    email: 'shah.saud.5872@gmail.com',
    linkedin: 'https://www.linkedin.com/in/shaahsaud/',
    /**
     * Configure your GitHub profile URL here (e.g. 'https://github.com/your-username').
     * Kept empty by default so no username is fabricated.
     * The UI displays a visible GitHub link that routes to this URL when set.
     */
    github: '',
  },
  resume: {
    filePath: 'https://drive.google.com/file/d/19oIZY1Gm3fXUhW2yM8ZS00QHb5mBVK_C/view?usp=sharing',
    downloadFilename: 'Shah-Saud-Senior-Android-Engineer-Resume.pdf',
  },
  seo: {
    title: 'Shah Saud | Senior Android Engineer',
    description:
      'Shah Saud is a Senior Android Engineer with 5+ years of experience building production Android applications with Kotlin, Jetpack Compose, WebRTC, modern architecture and AI-powered products.',
    /**
     * Set your final GitHub Pages URL here once deployed
     * (e.g., 'https://username.github.io/repository/')
     */
    canonicalUrl: '',
  },
};

export const heroMetrics: MetricItem[] = [
  {
    value: '5+ Years',
    label: 'Senior Android Engineering',
    sublabel: 'Production Kotlin, Java & Compose',
    accent: 'blue',
  },
  {
    value: '100+ Apps',
    label: 'Products Built & Shipped',
    sublabel: 'Consumer, client & enterprise apps',
    accent: 'indigo',
  },
  {
    value: '1M+ Installs',
    label: 'Google Play Scale',
    sublabel: 'High-scale production architecture',
    accent: 'emerald',
  },
  {
    value: 'AI-Driven',
    label: 'Fast Dev & Code Quality',
    sublabel: 'Claude, Antigravity, Copilot & CLI',
    accent: 'violet',
  },
];

export const aboutContent = {
  heading: 'About Me',
  paragraphs: [
    "I'm a Senior Android Engineer with 5+ years of experience building and shipping production Android applications across client projects and product-based companies.",
    "Throughout my career, I've worked on a wide range of mobile products across different domains, contributing to and delivering 100+ Android applications across consumer releases, client-specific solutions, and internal products.",
    "I've worked extensively with Kotlin, Java, Android SDK, Jetpack Compose, MVVM, Clean Architecture, Coroutines/Flow, REST APIs, Firebase, Room, Bluetooth, WebRTC and mobile performance.",
    'One of my notable products, Smart Printer, surpassed 1M+ installs. I also built a WebRTC-based screen-mirroring SDK from the ground up, achieving sub-100ms latency.',
    'I focus on building clean, maintainable and reliable applications while delivering features quickly. My daily workflow combines disciplined Git version control (branching strategies, pull requests, code reviews and release management) with Android CLI tooling and AI coding assistants — including Claude, Antigravity and GitHub Copilot — to accelerate implementation, debugging and iteration without compromising engineering quality.',
    "I'm currently open to Senior Android Engineer, Android Engineer and Mobile Engineer opportunities — remote, hybrid or onsite.",
  ],
  quickFacts: [
    '5+ Years Senior Android Engineering',
    '100+ Android Apps Built & Contributed To',
    'Kotlin · Java · Android SDK · Android CLI',
    'Jetpack Compose & Material Design',
    'MVVM & Clean Architecture',
    'Git Version Control · PRs & Code Reviews',
    'AI Workflow: Claude · Antigravity · Copilot',
    'Remote / Hybrid / On-site Ready',
  ],
  productBreadth: {
    title: 'Client & Internal Product Experience',
    subtitle:
      'Worked across 100+ Android applications overall, spanning internal company products, client-specific applications, consumer-facing apps, and monetized mobile products.',
    headlineDistinctions: [
      { label: 'Core Stack', value: 'Kotlin · Compose · SDK' },
      { label: 'Architecture', value: 'MVVM · Clean Arch' },
      { label: 'Career Scope', value: '100+ Android Apps' },
      { label: 'Fast Delivery', value: 'AI Agents · Git · CLI' },
    ],
    domains: [
      'Internal company applications and products',
      'Client projects and client-specific requirements',
      'Consumer-facing applications',
      'Monetized Android applications',
      'AI-powered products',
      'Productivity and utility applications',
      'Smart TV, casting and remote-control applications',
      'Bluetooth/connectivity products',
      'GPS and weather applications',
      'Printing, OCR and document applications',
      'Creative/design applications',
      'Real-time communication and screen-mirroring products',
    ],
  },
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'smart-printer',
    title: 'Smart Printer & Scanner — 1M+ Downloads',
    shortTitle: 'Smart Printer & Scanner',
    badge: 'Flagship Consumer Product',
    impactMetric: '1M+ Downloads',
    company: 'JanBark Technologies',
    dates: 'September 2024 – October 2026',
    description:
      'Built and maintained a production Android printing application that surpassed 1M+ downloads. Worked on wireless printing, IPP/AirPrint, OCR, document and photo printing, Bluetooth connectivity, cloud integrations, and multiple productivity features.',
    technologies: [
      'Kotlin',
      'Android',
      'IPP',
      'AirPrint',
      'OCR',
      'Bluetooth',
      'Printing',
      'Cloud Integrations',
    ],
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.go.smart.printer.mobile.printshare.app',
    screenshot: '',
    screenshotAlt:
      'Smart Printer & Scanner Android application interface preview showing wireless IPP/AirPrint discovery and OCR scanning pipeline',
    visualTheme: 'printer',
    featuredPriority: true,
  },
  {
    id: 'screen-mirroring',
    title: 'Screen Mirroring & Cast to TV',
    shortTitle: 'Screen Mirroring & Cast to TV',
    badge: 'Real-Time Systems & SDK Engineering',
    impactMetric: 'Sub-100ms Latency',
    company: 'Ninesol Technologies',
    dates: 'March 2023 – December 2023',
    description:
      'Built an Android screen-mirroring and casting application with real-time screen sharing, media casting and Smart TV connectivity. Developed a WebRTC-based screen-mirroring SDK from the ground up, achieving sub-100ms latency while focusing on performance, stability and reliable real-time communication.',
    technologies: [
      'Kotlin',
      'Java',
      'Android SDK',
      'WebRTC',
      'Real-Time Communication',
      'Smart TV / Casting',
    ],
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.go.mirror.cast.smart.tv.screen.mirroring',
    screenshot: '',
    screenshotAlt:
      'Screen Mirroring & Cast to TV Android application and WebRTC low-latency streaming architecture preview',
    visualTheme: 'webrtc',
    featuredPriority: true,
  },
  {
    id: 'deepsearch-ai',
    title: 'DeepSearch AI Assistant',
    shortTitle: 'DeepSearch AI Assistant',
    badge: 'AI Product Engineering',
    impactMetric: 'AI Discovery & Workflows',
    company: 'JanBark Technologies',
    dates: 'July 2026 – September 2026',
    description:
      'Built and maintained an AI-powered Android application for deep search, intelligent information discovery and AI-assisted answers. Worked on the Android product experience, API integration, AI workflows, performance and reliability while delivering a modern, user-friendly interface.',
    technologies: [
      'Kotlin',
      'Android',
      'AI Integrations',
      'APIs',
      'Modern Android UI',
    ],
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.sd.ai.deep.search.assistant.app',
    screenshot: '',
    screenshotAlt:
      'DeepSearch AI Assistant Android application interface preview showing multi-step query synthesis and structured answers',
    visualTheme: 'deepsearch',
  },
  {
    id: 'ai-logo-maker',
    title: 'AI Logo Maker',
    shortTitle: 'AI Logo Maker',
    badge: 'Complex UI & Interactive Canvas',
    impactMetric: 'Interactive SVG Editor',
    description:
      'Built and maintained a feature-rich Android logo design application with an interactive SVG editor and creative design tools. Worked on complex editing workflows, custom UI components, asset manipulation, performance optimization, and a smooth user experience for creating and customizing professional designs.',
    technologies: [
      'Kotlin',
      'Android',
      'SVG',
      'Interactive Editor',
      'UI/UX',
      'Asset Manipulation',
      'Design Tools',
    ],
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.sda.create.design.logo.maker',
    screenshot: '',
    screenshotAlt:
      'AI Logo Maker Android application preview showing custom SVG vector editor, layer management, and bezier manipulation',
    visualTheme: 'logomaker',
  },
];

export const moreProjects: SecondaryProject[] = [
  {
    title: 'Universal TV Remote Controller',
    category: 'Smart TV & Connectivity',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.universal.tv.remote.control.smart.tv.remote.controller',
    tags: ['Smart TV', 'Wi-Fi / IR', 'Android'],
  },
  {
    title: 'Document Scanner / PDF Maker',
    category: 'Productivity & Documents',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.sd.docment.scanner.pdf.maker',
    tags: ['Document Scanning', 'PDF', 'OCR'],
  },
  {
    title: 'Bluetooth Auto Connect / Finder',
    category: 'Connectivity & Hardware',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.bluetooth.device.autoconnect.finder',
    tags: ['Bluetooth', 'BLE', 'Device Discovery'],
  },
  {
    title: 'Smart Printer (Mobile Print & Scan)',
    category: 'Printing & Utility',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.smart.printer.photos.scan.documents.mobile.printer',
    tags: ['Wireless Printing', 'Scanning', 'Documents'],
  },
  {
    title: 'AI Home Workout',
    category: 'AI & Health Utility',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.sda.ai.home.workout.lose.weigh.app',
    tags: ['AI Workflows', 'Fitness', 'Modern UI'],
  },
  {
    title: 'Text-to-Voice Translator',
    category: 'Language & Speech',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.sd.text.to.voice.translator',
    tags: ['TTS', 'Translation APIs', 'Audio'],
  },
  {
    title: 'Sleep Tracker & Recorder',
    category: 'Health & Background Services',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.sda.sleep.tracker.recorder.monitor',
    tags: ['Audio Monitoring', 'Background Work', 'Analytics'],
  },
  {
    title: 'Video Downloader / Story Saver',
    category: 'Media Utility',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.sd.download.all.video.downloader.save.story.saver',
    tags: ['Media Handling', 'Downloads', 'Storage'],
  },
  {
    title: 'Amharic Keyboard (Geez Typing)',
    category: 'Input Method & Localization',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.sd.amharic.keyboard.geez.typing',
    tags: ['Custom IME', 'Input Service', 'Localization'],
  },
  {
    title: 'English Malayalam Keyboard',
    category: 'Input Method & Localization',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.unidroid.english.malayalam.language.keyboard.typing',
    tags: ['Custom IME', 'Multilingual UI', 'Android SDK'],
  },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    id: 'janbark',
    company: 'JanBark Technologies',
    role: 'Senior Android Developer',
    period: 'January 2024 – October 2026',
    location: 'Islamabad, Pakistan',
    employmentType: 'Full-time',
    summary:
      'Owned end-to-end development of production Android applications across multiple consumer and utility products, delivering 30+ applications at JanBark (and contributing to 100+ applications across overall career).',
    keyMetrics: ['1M+ Installs on Smart Printer', '30+ Apps at JanBark', 'End-to-End Architecture'],
    highlights: [
      'Smart Printer — wireless printing, IPP/AirPrint, OCR, Bluetooth connectivity and multiple productivity features; surpassed 1M+ installs.',
      'Built and maintained Screen Recorder applications, SVG Editor / Logo & Invitation Maker, and AI Home Decoration and Object Detection applications.',
      'Delivered Bluetooth, Screen Mirroring and Smart TV Remote applications, GPS-based and Weather applications, plus Deep Search AI and AI Tutor applications.',
      'Contributed to additional consumer and monetized Android applications across diverse product categories.',
      'Improved development velocity through architecture standardization and efficient development practices, while resolving performance and stability issues including ANRs and background-processing problems.',
      'Used AI coding agents (Claude, Antigravity, GitHub Copilot) alongside Android CLI and structured Git version control workflows to accelerate implementation, debugging and feature delivery while maintaining strict code quality and engineering standards.',
    ],
    technologies: [
      'Kotlin',
      'Java',
      'Jetpack Compose',
      'MVVM',
      'Clean Architecture',
      'Coroutines / Flow',
      'Room',
      'REST APIs',
      'Firebase',
      'Bluetooth',
      'Git Version Control',
      'Android CLI',
      'Claude / Antigravity / Copilot',
      'Performance Optimization',
    ],
  },
  {
    id: 'ninesol',
    company: 'Ninesol Technologies',
    role: 'Android Developer',
    period: 'May 2023 – December 2023',
    location: 'Islamabad, Pakistan',
    summary:
      'Architected and developed a WebRTC-based Android screen-mirroring SDK from the ground up for real-time video streaming.',
    keyMetrics: ['Sub-100ms WebRTC Latency', '~40% Reduction in QA Bugs', 'Led 2–4 Developers'],
    highlights: [
      'Achieved sub-100ms latency for real-time screen mirroring.',
      'Worked on Android TV and casting-related functionality, focusing on real-time communication, performance and reliability.',
      'Led and mentored a team of 2–4 developers and contributed to improving code-review and development practices.',
      'Reduced QA-reported bugs by approximately 40% through improved implementation, testing and debugging practices.',
      'Implemented systematic crash tracking and error-handling practices to improve production stability.',
    ],
    technologies: [
      'Kotlin',
      'Java',
      'Android SDK',
      'WebRTC',
      'MVVM',
      'REST APIs',
      'Real-Time Communication',
    ],
  },
  {
    id: 'isystech',
    company: 'ISYSTECH IT Solutions Pvt Ltd',
    role: 'Android Developer',
    period: 'May 2022 – April 2023',
    summary:
      'Developed and maintained enterprise Android applications for client and business requirements, with a focus on reliability, performance and maintainable code.',
    highlights: [
      'Built Android applications using Kotlin/Java, Android SDK, REST APIs and RxJava.',
      'Integrated and consumed REST APIs while handling real-world network, data and application edge cases.',
      'Implemented unit and integration tests to improve release confidence and reduce regressions.',
      'Investigated and resolved critical production issues, including application crashes and functional defects.',
      'Optimized UI rendering and application performance to provide smoother user experiences.',
      'Collaborated with team members through Git-based development and code reviews.',
    ],
    technologies: [
      'Kotlin',
      'Java',
      'Android SDK',
      'REST APIs',
      'RxJava',
      'Unit & Integration Testing',
      'Git',
    ],
  },
  {
    id: 'numl',
    company: 'Center for Mobile Research — NUML',
    role: 'Junior Android Developer',
    period: 'September 2021 – April 2022',
    summary:
      'Worked on Android application development while building a strong foundation in production mobile development and software engineering practices.',
    highlights: [
      'Developed reusable Android modules and UI components to reduce code duplication and improve maintainability.',
      'Implemented Android interfaces following Material Design principles and responsive UI practices.',
      'Applied Android lifecycle and component best practices to build reliable applications.',
      'Worked with Java/Kotlin and Android SDK while debugging and improving application behaviour.',
      'Collaborated with the development team on feature implementation, bug fixing and application improvements.',
    ],
    technologies: [
      'Kotlin',
      'Java',
      'Android SDK',
      'Material Design',
      'Android Lifecycle',
      'UI Components',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'android',
    title: 'Android & CLI Tooling',
    subtitle: 'Platform, Modern UI & Command-Line Workflow',
    skills: [
      'Android SDK',
      'Android Development',
      'Jetpack Compose',
      'Android CLI',
      'ADB & Shell Tooling',
      'Jetpack',
      'Material Design',
      'Android Architecture',
      'Android UI',
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Primary Production Languages',
    skills: ['Kotlin', 'Java'],
  },
  {
    id: 'architecture',
    title: 'Architecture & Concurrency',
    subtitle: 'Scalable App Structure & Reactive State',
    skills: ['MVVM', 'Clean Architecture', 'Coroutines', 'Flow'],
  },
  {
    id: 'data-networking',
    title: 'Data & Networking',
    subtitle: 'Persistence, APIs & Cloud Services',
    skills: ['Retrofit', 'REST APIs', 'Room', 'SQLite', 'Firebase', 'RxJava'],
  },
  {
    id: 'advanced-connectivity',
    title: 'Advanced & Connectivity',
    subtitle: 'Protocols, Media & Hardware Integration',
    skills: [
      'WebRTC',
      'Bluetooth',
      'IPP',
      'AirPrint',
      'OCR',
      'Smart TV / Casting',
      'Real-time communication',
    ],
  },
  {
    id: 'engineering',
    title: 'Git, AI Tools & Engineering Quality',
    subtitle: 'Version Control, AI Agents, CLI & Stability',
    skills: [
      'Git Version Control',
      'GitFlow & Pull Requests',
      'Claude',
      'Antigravity',
      'GitHub Copilot',
      'Android CLI',
      'Gradle',
      'CI/CD',
      'Unit & Integration Testing',
      'Performance & ANR Optimization',
      'Crash Debugging',
    ],
  },
];

export const achievements: AchievementItem[] = [
  {
    metric: '1M+',
    title: '1M+ App Downloads',
    description: 'Smart Printer & Scanner surpassed 1M+ downloads on Google Play.',
    tag: 'Consumer Scale',
  },
  {
    metric: '<100ms',
    title: 'Sub-100ms WebRTC',
    description:
      'Built a WebRTC-based Android screen-mirroring SDK from the ground up achieving sub-100ms latency.',
    tag: 'Real-Time Systems',
  },
  {
    metric: '100+ Apps',
    title: 'Multi-Domain Product Delivery',
    description:
      'Built, contributed to, and shipped 100+ Android applications across consumer products, client solutions, internal tools, and custom SDKs.',
    tag: 'Delivery Breadth',
  },
  {
    metric: 'End-to-End',
    title: 'Product Engineering',
    description:
      'Worked end-to-end across architecture, implementation, APIs, UI, performance, debugging, release and maintenance.',
    tag: 'Ownership',
  },
  {
    metric: '2–4 Devs',
    title: 'Technical Leadership',
    description:
      'Led and mentored a team of 2–4 developers at Ninesol Technologies while elevating code-review standards.',
    tag: 'Mentorship',
  },
  {
    metric: '~40%',
    title: 'Quality Improvement',
    description:
      'Reduced QA-reported bugs by approximately 40% at Ninesol through systematic testing and debugging practices.',
    tag: 'Production Stability',
  },
];

export const aiWorkflowContent = {
  heading: 'Modern Engineering Workflow: Git, Android CLI & AI Agents',
  badge: 'AI-Assisted, Engineer-Led Development',
  description:
    'I combine structured Git version control (clean branching strategies, pull requests, peer code reviews and release tagging) and Android CLI automation with modern AI coding tools — including Claude, Antigravity and GitHub Copilot. I leverage these tools to accelerate implementation, debugging, refactoring and iteration while maintaining full engineering ownership of architecture, technical decisions, testing and production reliability.',
  tools: ['Git Version Control', 'Android CLI', 'Claude', 'Antigravity', 'GitHub Copilot', 'Gradle & ADB'],
  pillars: [
    'Disciplined Git version control: feature branching, clean commit history, PR reviews & release management',
    'Android CLI, ADB & Gradle command-line workflows for rapid builds, UI inspection & device testing',
    'AI-assisted velocity with Claude, Antigravity & GitHub Copilot under strict engineer-led architecture & QA',
  ],
};

export const engineeringApproach: EngineeringPillar[] = [
  {
    title: 'Clean & Scalable Code',
    description: 'Maintainable, testable and production-ready Android code.',
    iconName: 'code',
  },
  {
    title: 'Modern Android Stack',
    description: 'Kotlin, Jetpack Compose, Coroutines and modern Android architecture.',
    iconName: 'layers',
  },
  {
    title: 'Performance First',
    description: 'Smooth, responsive and resource-efficient applications.',
    iconName: 'zap',
  },
  {
    title: 'Product Mindset',
    description: 'Focus on user value, reliability, quality and real-world impact.',
    iconName: 'compass',
  },
];
