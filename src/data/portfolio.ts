export type ExperienceItem = {
  company: string
  role: string
  period: string
  highlights: string[]
}

export type ProjectItem = {
  id: string
  number: string
  title: string
  problem: string
  role: string
  stack: string[]
  overview: string
  approach: string
  result: string
  liveUrl?: string
  githubUrl?: string
}

export const profile = {
  name: 'Vignesh Palanichamy',
  headline: 'FULL STACK × CREATIVE DEVELOPER',
  subline: 'I BUILD DIGITAL PRODUCTS, SYSTEMS & INTERACTIVE EXPERIENCES.',
  roles: ['FULL STACK DEVELOPER', 'CREATIVE WEB DEVELOPER', 'THREE.JS / WEBGL']
}

export const about = {
  summary:
    'Full Stack Developer focused on building fast, scalable and user-friendly web applications.',
  stack: ['React.js', 'Next.js', 'Node.js', 'MongoDB'],
  explores: ['Three.js', 'WebGL', 'interactive web experiences'],
  focus:
    'Enjoys solving real-world problems and turning ideas into practical digital products.'
}

export const experiences: ExperienceItem[] = [
  {
    company: 'Fusion Space',
    role: 'Software Developer Intern',
    period: 'Feb 2025 – Present',
    highlights: ['Building scalable product features', 'Improving usability and responsiveness', 'Collaborating in real development workflows']
  },
  {
    company: 'NextOneSolution',
    role: 'Full Stack Web Developer Intern',
    period: 'Dec 2023 – Jan 2025',
    highlights: ['Implemented frontend and backend features', 'Worked across React/Next.js and Node.js', 'Contributed to production-facing modules']
  },
  {
    company: 'THE RECIPROCAL SOLUTIONS',
    role: 'Software Engineer Intern',
    period: 'Sep 2023 – Dec 2023',
    highlights: ['Delivered initial engineering contributions', 'Supported website and feature implementation', 'Built foundations for later full-stack work']
  }
]

export const skills = {
  LANGUAGES: ['JavaScript', 'Python'],
  FRONTEND: ['Next.js', 'React.js', 'Three.js', 'HTML5', 'Tailwind CSS', 'Bootstrap'],
  BACKEND: ['Node.js', 'Express.js'],
  DATABASE: ['Firebase', 'MongoDB'],
  'VERSION CONTROL': ['Git', 'GitHub'],
  '3D': ['Three.js', 'Blender', '3D-related libraries']
}

export const skillLinks: Array<[string, string]> = [
  ['React.js', 'Next.js'],
  ['JavaScript', 'Node.js'],
  ['Three.js', '3D-related libraries'],
  ['Node.js', 'MongoDB']
]

export const projects: ProjectItem[] = [
  {
    id: 'zenith-mentor',
    number: '01',
    title: 'ZENITH MENTOR',
    problem: 'Needed a coding practice platform with real-time execution and test-case evaluation.',
    role: 'Built full-stack product features and interactive UX.',
    stack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Judge0 API'],
    overview: 'Coding practice platform focused on interactive learning and real-time verification.',
    approach: 'Integrated code editor workflows with API-driven execution and structured challenge flows.',
    result: 'Delivered a practical learning platform with execution and validation loops.',
    githubUrl: 'https://github.com/vignesh-palanichamy'
  },
  {
    id: 'reciprocal-solutions',
    number: '02',
    title: 'THE RECIPROCAL SOLUTIONS',
    problem: 'Required a dynamic client-facing website with modern interaction quality.',
    role: 'Implemented frontend architecture and visual execution.',
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    overview: 'Dynamic client website emphasizing clarity and responsive behavior.',
    approach: 'Composed reusable UI blocks with clean routing and scalable styling conventions.',
    result: 'Delivered production-ready experience for real client communication.',
    githubUrl: 'https://github.com/vignesh-palanichamy'
  },
  {
    id: 'cognoid',
    number: '03',
    title: 'COGNOID',
    problem: 'Needed multiple production websites with consistent engineering quality.',
    role: 'Contributed to full-stack delivery for two company websites.',
    stack: ['Next.js', 'Node.js', 'MongoDB'],
    overview: 'Two production-ready websites designed for company use cases.',
    approach: 'Used modular full-stack workflows for stability, speed, and maintainability.',
    result: 'Released reliable websites with strong baseline performance.',
    githubUrl: 'https://github.com/vignesh-palanichamy'
  },
  {
    id: 'relationswork',
    number: '04',
    title: 'RELATIONSWORK',
    problem: 'Needed a secure content and blogging platform with admin workflows.',
    role: 'Built feature flows for content publishing and authentication.',
    stack: ['Next.js', 'Authentication', 'Admin CMS'],
    overview: 'Website with blogging system, secure authentication, and admin blog management.',
    approach: 'Implemented guarded content paths and practical admin publishing controls.',
    result: 'Delivered manageable content operations with secure access.',
    githubUrl: 'https://github.com/vignesh-palanichamy'
  }
]

export const education = [
  {
    title: 'B.Tech Industrial Biotechnology',
    place: 'Government College of Technology',
    period: '2023–2027',
    note: 'Expected Graduation: 2027'
  },
  {
    title: 'Higher Secondary Certificate',
    place: 'MCTRM Higher Secondary School',
    period: '2023'
  },
  {
    title: 'Secondary School Leaving Certificate',
    place: 'MCTRM Higher Secondary School',
    period: '2020'
  }
]

export const achievements = [
  'Node.js – Udemy (2023)',
  'AI-Powered Student Assistance Chatbot — SIH 2024 (Selected at College Level)'
]

export const contacts = {
  email: 'mailto:hello@example.com',
  github: 'https://github.com/vignesh-palanichamy',
  linkedin: 'https://www.linkedin.com/',
  resume: '#'
}
