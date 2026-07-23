export type Technology = {
  name: string;
  icon: string; // short label for the badge
  color: string;
};

export const technologies: Technology[] = [
  { name: 'Next.js', icon: 'Nx', color: '#FFFFFF' },
  { name: 'React', icon: 'Re', color: '#61DAFB' },
  { name: 'React Native', icon: 'RN', color: '#61DAFB' },
  { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
  { name: 'Node.js', icon: 'Nd', color: '#83CD29' },
  { name: 'Express.js', icon: 'Ex', color: '#FFFFFF' },
  { name: 'MongoDB', icon: 'MG', color: '#47A248' },
  { name: 'PostgreSQL', icon: 'PG', color: '#336791' },
  { name: 'Firebase', icon: 'FB', color: '#FFCA28' },
  { name: 'Redux', icon: 'Rx', color: '#764ABC' },
  { name: 'Tailwind CSS', icon: 'TW', color: '#38BDF8' },
  { name: 'GitHub', icon: 'GH', color: '#FFFFFF' },
];
