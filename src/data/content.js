// EDIT ME: replace with your real Google Calendar appointment scheduling URL
export const BOOKING_URL = 'https://calendar.google.com/calendar/appointments/PLACEHOLDER'

// EDIT ME: drop your resume PDF in /public and update this path
export const RESUME_URL = `${import.meta.env.BASE_URL}resume.pdf`

// Hero and avatar photo used across the site
export const PHOTO_URL = `${import.meta.env.BASE_URL}1734945084082.png`

export const CONTACT = {
  email: 'theshivamnagi@gmail.com',
  linkedin: 'https://linkedin.com/in/nagishivam',
  linkedinLabel: 'linkedin.com/in/nagishivam',
}

// Rotating skill labels shown in the hero
export const SKILL_LABELS = [
  'Product Management',
  'UX Design',
  'Design Thinking',
  'Creator Platforms',
  'Product Ops',
]

export const METRICS = [
  { label: 'Brands', value: 264, suffix: '+' },
  { label: 'Creators', value: 16000, suffix: '+' },
  { label: 'Active users', value: 8500, suffix: '+' },
  { label: 'Search-to-campaign conversion', value: 27, suffix: '%' },
]

export const EXPERIENCE = [
  {
    range: 'May 2025 - Present',
    role: 'Associate Product Manager',
    org: 'Katha Ads',
    status: 'CURRENT',
  },
  {
    range: 'May 2024 - Aug 2024',
    role: 'Product Operations Intern',
    org: 'Pixelo Digital',
    status: 'COMPLETED',
  },
  {
    range: 'Jan 2024 - Apr 2024',
    role: 'NetSuite Software Developer Intern',
    org: 'GIR Software Services',
    status: 'COMPLETED',
  },
  {
    range: '2024',
    role: 'B.Tech, Information Technology',
    org: 'IK Gujral Punjab Technical University',
    status: 'COMPLETED',
  },
]

export const CASE_STUDIES = [
  {
    tag: 'CASE STUDY',
    kind: 'Web App',
    title: 'Creator Discovery Feature',
    // EDIT ME: drop a screenshot in /public/work and set e.g. `${import.meta.env.BASE_URL}work/discovery.png`
    image: null,
    problem: 'Brands struggled to find relevant creators, driving drop-off before campaign creation.',
    outcome: '27% lift in search-to-campaign conversion',
    problemDetail:
      'Placeholder - describe the core problem, who experienced it, and why it mattered to the business.',
    role: 'Placeholder - describe your specific responsibilities and scope on this project.',
    process: 'Placeholder - outline research, design iterations, and key decisions made along the way.',
    outcomeDetail:
      'Placeholder - describe the measurable outcome and business impact in more detail.',
  },
  {
    tag: 'SHIPPED',
    kind: 'Mobile App',
    title: 'Creator App Redesign',
    image: null,
    problem: 'Legacy creator app had inconsistent flows that slowed onboarding and daily usage.',
    outcome: '8,500+ active users onboarded to the redesigned app',
    problemDetail:
      'Placeholder - describe the core problem, who experienced it, and why it mattered to the business.',
    role: 'Placeholder - describe your specific responsibilities and scope on this project.',
    process: 'Placeholder - outline research, design iterations, and key decisions made along the way.',
    outcomeDetail:
      'Placeholder - describe the measurable outcome and business impact in more detail.',
  },
  {
    tag: 'SHIPPED',
    kind: 'Internal Tools',
    title: 'Internal Tools & Creator Ops',
    image: null,
    problem: 'Manual ops workflows across teams created bottlenecks in creator management at scale.',
    outcome: 'Supported ops across 264+ brand partnerships',
    problemDetail:
      'Placeholder - describe the core problem, who experienced it, and why it mattered to the business.',
    role: 'Placeholder - describe your specific responsibilities and scope on this project.',
    process: 'Placeholder - outline research, design iterations, and key decisions made along the way.',
    outcomeDetail:
      'Placeholder - describe the measurable outcome and business impact in more detail.',
  },
]

// Horizontal-scroll "Playground" - experiments & side projects.
// EDIT ME: swap `image` with a path like `${import.meta.env.BASE_URL}play/thing.png`
export const PLAYGROUND = [
  { title: 'Design System Tokens', tag: 'Experiment', image: null },
  { title: 'Creator Analytics Concept', tag: 'Concept', image: null },
  { title: 'Onboarding Micro-flows', tag: 'Prototype', image: null },
  { title: 'AI Brief Generator', tag: 'Vibe Code', image: null },
  { title: 'Campaign Dashboard', tag: 'Concept', image: null },
]

export const SKILLS = {
  product: [
    'Sprint Planning',
    'Backlog Prioritization',
    'Requirement Gathering',
    'Stakeholder Management',
    'Risk Management',
    'QA & Release Coordination',
    'Jira',
    'Metabase',
    'Google Analytics',
  ],
  design: [
    'Design Thinking',
    'User Journey Mapping',
    'Information Architecture',
    'Usability Testing',
    'Figma',
    'Canva',
  ],
}
