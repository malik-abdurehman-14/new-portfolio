export type ProcessStep = {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: 'discovery',
    step: 1,
    title: 'Discovery',
    description: 'We discuss your goals, challenges, and vision to define the project scope clearly.',
    icon: 'Search',
  },
  {
    id: 'research',
    step: 2,
    title: 'Research',
    description: 'I analyze your systems, competitors, and industry to design the optimal solution.',
    icon: 'Microscope',
  },
  {
    id: 'design',
    step: 3,
    title: 'Design',
    description: 'I create wireframes, flows, and architecture — refining until everything feels right.',
    icon: 'PenTool',
  },
  {
    id: 'development',
    step: 4,
    title: 'Development',
    description: 'Clean, scalable code is written with regular updates and feedback checkpoints.',
    icon: 'Code2',
  },
  {
    id: 'testing',
    step: 5,
    title: 'Testing',
    description: 'Rigorous QA across devices, edge cases, and performance benchmarks ensures reliability.',
    icon: 'ShieldCheck',
  },
  {
    id: 'deployment',
    step: 6,
    title: 'Deployment',
    description: 'Seamless launch with monitoring, documentation, and zero-downtime delivery.',
    icon: 'Rocket',
  },
  {
    id: 'support',
    step: 7,
    title: 'Support',
    description: 'Ongoing optimization, updates, and improvements keep your system ahead of the curve.',
    icon: 'LifeBuoy',
  },
];
