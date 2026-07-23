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
    role: 'Founder & Lead AI Automation Engineer',
    company: 'Carter AI Studio',
    period: '2023 — Present',
    description:
      'Leading a boutique studio delivering AI automation and premium web experiences for international clients.',
    achievements: [
      'Shipped 40+ AI automation systems for clients across 4 continents',
      'Built voice agent infrastructure handling 10k+ calls monthly',
      'Maintained 100% client satisfaction across all engagements',
    ],
    icon: 'Rocket',
  },
  {
    id: 'exp-2',
    role: 'Senior Full Stack Developer',
    company: 'Nimbus Labs',
    period: '2021 — 2023',
    description:
      'Architected and built SaaS products from zero to launch, owning the full stack and design system.',
    achievements: [
      'Led development of a fintech SaaS used by 12k+ users',
      'Reduced page load times by 60% through performance optimization',
      'Established the component library and design system',
    ],
    icon: 'Code2',
  },
  {
    id: 'exp-3',
    role: 'Automation Engineer',
    company: 'FlowState Agency',
    period: '2019 — 2021',
    description:
      'Designed and deployed automation workflows that saved clients thousands of manual hours per month.',
    achievements: [
      'Automated 200+ business processes across 30+ clients',
      'Saved an estimated 15,000+ manual hours annually',
      'Pioneered the agency AI service offering',
    ],
    icon: 'Workflow',
  },
  {
    id: 'exp-4',
    role: 'Frontend Developer',
    company: 'Pixel Forge',
    period: '2017 — 2019',
    description:
      'Crafted pixel-perfect, animated marketing sites and web apps for startups and agencies.',
    achievements: [
      'Delivered 50+ marketing websites with premium animations',
      'Won 2 Awwwards honorable mentions',
      'Mentored junior developers on modern frontend practices',
    ],
    icon: 'Layout',
  },
];
