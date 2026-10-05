export const hero = {
  name: 'Alvin Edward Katabalwa',
  title: 'Software Developer',
  description:
    'I thrive on transforming concepts into reality, uniting software engineering, CAD design, and automotive expertise to drive innovation forward.',
  cta: 'View Projects'
}

export const about = {
  heading: 'About me',
  body:
    'I create applications that work smoothly across devices and assistive technologies. My process focuses on accessibility, performance, and maintainable code.',
  bullets: [
    'React + TypeScript development',
    'Responsive UI with Tailwind CSS',
    'Accessible navigation and semantic markup',
    'Performance-first build optimization'
  ]
}

export const projects = [
  { 
    slug: 'dynamic-portfolio-cms',
    title: 'Dynamic Portfolio CMS',
    description:
      'A responsive portfolio platform built with React and Tailwind, designed for easy content updates and fast page loads.',
    longDescription:
      'This project addresses the modern developer need for an ultra-fast, maintenance-free personal brand engine. By combining React’s declarative rendering with Tailwind CSS utilities, it strips out the typical bloat found in database-driven alternatives.',
    features: [
      'Zero-database content updates managed cleanly through type-safe TypeScript objects.',
      'Accessibility optimized layout featuring fully keyboard-navigable links and strict structural aria-labels.',
      'Optimized performance achieving high Core Web Vitals marks across mobile viewports.'
    ],
    tags: ['React', 'Tailwind', 'Accessibility'],
    link: '#projects'
  },
  { 
    slug:'performance-audit-dashboard',
    title: 'Performance Audit Dashboard',
    description:
      'Real-time monitoring dashboard that highlights opportunities to optimize scripts and images for faster rendering.',
      longDescription:
      'A highly responsive business intelligence suite mapping real-time performance parameters. It parses asset bundles on the fly, immediately reporting long-blocking scripts and layout shifters to give developers actionable diagnostic feedback.',
    features: [
      'Dynamic telemetry graphs built with responsive rendering pipelines.',
      'Intelligent heuristic scans that isolate bulky payload targets.',
      'Client-side caching configurations reducing recurring analytical database network overhead.'
    ],
    tags: ['Performance', 'Analytics', 'UX'],
    link: '#projects'
  },
  {
    slug:'cross-platform-web-interface',
    title: 'Cross-platform Web Interface',
    description:
      'A web experience designed to adapt gracefully on desktops, tablets, and mobile devices.',
    LongDescription:'A fluid UI development experiment testing layout resiliency across irregular viewport sizes, hardware profiles, and diverse assistive reading setups,',
    features: [
      'Comprehensive media query grids with custom responsive breakpoints.',
      'Hardware-accelerated CSS transition sequences running stutter-free on mobile devices.',
      'Adaptive color schemes matching user operating system preferences cleanly.'
    ],
    tags: ['Responsive', 'Design', 'Mobile-first'],
    link: '#projects'
  }
]

export const skills = [
  {
    title: "Mobile App Architecture",
    description: "Flutter, Dart, state management, cross-platform, modular/decoupled layers, responsive UI design."
  },
  {
    title: "Backend & Data Integraion",
    description: "Firebase, service proxy patterns, REST APIs, real-time sync, secure auth flow."
  },
  {
    title: "Resource Management Systems",
    description: "Tracking dashboards, assest & inventory workflows, modular operational tools, digital marketplaces."
  },
  {
  title: "Modern Web Development",
  description: "Next.js, React, Tailwind CSS, responsive layouts, accessible UI/UX, client-side performance."
  },
]

export const contact = {
  heading: 'Let’s build something together',
  button: 'Contact Me'
}
