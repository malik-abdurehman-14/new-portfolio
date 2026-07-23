export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  icon: string;
};

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Full Stack Web & Mobile App Developer',
    company: 'Freelance & Remote Projects',
    period: '2026 — Present',
    description:
      'Building complete web and mobile products for clients, from responsive user interfaces and backend APIs to databases, integrations, and deployment.',
    achievements: [
      'Developed responsive websites, web applications, and cross-platform mobile apps',
      'Built secure backend APIs, authentication systems, and database architecture',
      'Integrated payment gateways, third-party APIs, notifications, and cloud services',
    ],
    icon: 'Code2',
  },
  {
    id: 'exp-2',
    role: 'Full Stack Developer',
    company: 'Company Name',
    period: '2025 — 2026',
    description:
      'Worked on full-stack applications using modern JavaScript technologies while collaborating with designers, developers, and project stakeholders.',
    achievements: [
      'Developed reusable frontend components using React and Next.js',
      'Built and maintained backend services with Node.js and Express.js',
      'Improved application performance, responsiveness, and code quality',
    ],
    icon: 'Layers3',
  },
  {
    id: 'exp-3',
    role: 'Frontend Developer',
    company: 'Company Name',
    period: '2024 — 2025',
    description:
      'Created responsive and interactive user interfaces from design files with a strong focus on usability, performance, and visual accuracy.',
    achievements: [
      'Converted Figma designs into responsive web interfaces',
      'Built reusable components and mobile-friendly layouts',
      'Resolved browser compatibility and frontend performance issues',
    ],
    icon: 'Layout',
  },
  {
    id: 'exp-4',
    role: 'Junior Web Developer',
    company: 'Company Name',
    period: '2023 — 2024',
    description:
      'Started my professional development journey by building websites, learning modern frameworks, and contributing to frontend and backend tasks.',
    achievements: [
      'Developed responsive pages using HTML, CSS, and JavaScript',
      'Worked with APIs, forms, databases, and basic backend functionality',
      'Used Git and GitHub for version control and team collaboration',
    ],
    icon: 'Monitor',
  },
];
