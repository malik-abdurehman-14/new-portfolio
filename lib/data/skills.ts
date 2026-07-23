export type SkillCategory = {
  id: string;
  name: string;
  icon: string;
  color: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    icon: 'Layout',
    color: '#38bdf8',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    id: 'backend',
    name: 'Backend Development',
    icon: 'Server',
    color: '#22d3ee',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'REST APIs', level: 90 },
      { name: 'Authentication & Security', level: 85 },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    icon: 'Smartphone',
    color: '#a855f7',
    skills: [
      { name: 'React Native', level: 88 },
      { name: 'Expo', level: 85 },
      { name: 'Android & iOS Apps', level: 84 },
      { name: 'Push Notifications', level: 82 },
    ],
  },
  {
    id: 'database',
    name: 'Databases',
    icon: 'Database',
    color: '#fbbf24',
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'PostgreSQL', level: 86 },
      { name: 'Firebase', level: 85 },
      { name: 'Prisma ORM', level: 84 },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud & Deployment',
    icon: 'Cloud',
    color: '#34d399',
    skills: [
      { name: 'Vercel', level: 92 },
      { name: 'AWS', level: 82 },
      { name: 'Docker', level: 80 },
      { name: 'CI/CD Pipelines', level: 78 },
    ],
  },
  {
    id: 'tools',
    name: 'Development Tools',
    icon: 'Wrench',
    color: '#818cf8',
    skills: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'Postman', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma to Code', level: 86 },
    ],
  },
  {
    id: 'integrations',
    name: 'APIs & Integrations',
    icon: 'Plug',
    color: '#f472b6',
    skills: [
      { name: 'Stripe Payments', level: 85 },
      { name: 'Third-Party APIs', level: 90 },
      { name: 'Webhooks', level: 86 },
      { name: 'OAuth Integration', level: 82 },
    ],
  },
  {
    id: 'performance',
    name: 'Quality & Performance',
    icon: 'Gauge',
    color: '#fb7185',
    skills: [
      { name: 'Responsive Design', level: 94 },
      { name: 'Performance Optimization', level: 88 },
      { name: 'SEO Best Practices', level: 84 },
      { name: 'Cross-Browser Testing', level: 88 },
    ],
  },
];
