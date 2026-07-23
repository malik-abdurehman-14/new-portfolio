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
    description:
      'We discuss your goals, requirements, target users, and project expectations to define a clear scope.',
    icon: 'Search',
  },
  {
    id: 'planning',
    step: 2,
    title: 'Planning',
    description:
      'I define the features, user flows, technical architecture, timeline, and development roadmap.',
    icon: 'ClipboardList',
  },
  {
    id: 'design',
    step: 3,
    title: 'Design',
    description:
      'Wireframes and interface concepts are created to ensure a clear, intuitive, and user-friendly experience.',
    icon: 'PenTool',
  },
  {
    id: 'development',
    step: 4,
    title: 'Development',
    description:
      'The product is built with clean, scalable code while sharing regular progress updates for feedback.',
    icon: 'Code2',
  },
  {
    id: 'testing',
    step: 5,
    title: 'Testing',
    description:
      'The product is tested across devices, browsers, screen sizes, features, and common user scenarios.',
    icon: 'ShieldCheck',
  },
  {
    id: 'deployment',
    step: 6,
    title: 'Launch',
    description:
      'The final product is deployed, configured, reviewed, and prepared for real users.',
    icon: 'Rocket',
  },
  {
    id: 'support',
    step: 7,
    title: 'Support',
    description:
      'Ongoing support, updates, bug fixes, and improvements are provided based on your needs.',
    icon: 'LifeBuoy',
  },
];
