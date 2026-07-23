export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What types of projects do you work on?',
    answer:
      'I work on business websites, web applications, SaaS platforms, mobile apps, e-commerce solutions, dashboards, backend APIs, and third-party integrations. I can also improve or extend existing digital products.',
  },
  {
    id: 'faq-2',
    question: 'How long does a typical project take?',
    answer:
      'The timeline depends on the project scope and complexity. A standard website may take 2–4 weeks, while custom web applications, SaaS platforms, and mobile apps usually require more time. I provide a clear timeline before development begins.',
  },
  {
    id: 'faq-3',
    question: 'Which technologies do you use?',
    answer:
      'I primarily work with React, Next.js, TypeScript, Node.js, Express.js, React Native, MongoDB, PostgreSQL, Firebase, Tailwind CSS, and modern cloud deployment platforms.',
  },
  {
    id: 'faq-4',
    question: 'Do you work with international clients?',
    answer:
      'Yes. I work remotely with clients from different countries and manage communication through scheduled meetings, regular progress updates, and project management tools.',
  },
  {
    id: 'faq-5',
    question: 'How do you price development projects?',
    answer:
      'Pricing depends on the features, design requirements, integrations, timeline, and overall complexity. After reviewing your requirements, I provide a clear project estimate with scope, timeline, and deliverables.',
  },
  {
    id: 'faq-6',
    question: 'Can you work on an existing project?',
    answer:
      'Yes. I can review existing code, fix bugs, improve performance, add new features, redesign interfaces, integrate APIs, and help complete unfinished web or mobile applications.',
  },
  {
    id: 'faq-7',
    question: 'Do you provide support after launch?',
    answer:
      'Yes. I provide post-launch support for bug fixes, updates, performance improvements, deployment assistance, and ongoing maintenance based on the project requirements.',
  },
  {
    id: 'faq-8',
    question: 'Can you integrate third-party services?',
    answer:
      'Yes. I can integrate payment gateways, authentication providers, maps, email services, notifications, analytics tools, cloud storage, and other platforms that provide APIs or webhooks.',
  },
];