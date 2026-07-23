export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What types of AI automation projects do you take on?',
    answer:
      'I specialize in AI voice agents, chatbots, workflow automation, CRM integrations, custom AI solutions, and premium web development. If a project involves AI, automation, or building a high-quality digital product, I can help.',
  },
  {
    id: 'faq-2',
    question: 'How long does a typical project take?',
    answer:
      'Most AI automation projects take 2–4 weeks depending on complexity. Website builds range from 2–6 weeks. I provide a detailed timeline after our discovery call and stick to it.',
  },
  {
    id: 'faq-3',
    question: 'Do you work with clients internationally?',
    answer:
      'Yes. I work with clients across the globe — from North America to Europe, Asia, and Australia. All communication is handled asynchronously and via scheduled calls to accommodate time zones.',
  },
  {
    id: 'faq-4',
    question: 'What is your pricing model?',
    answer:
      'I offer fixed-price project quotes after understanding your requirements. This gives you budget certainty. For ongoing work, I also offer monthly retainer arrangements. Projects typically range from $5k to $50k+.',
  },
  {
    id: 'faq-5',
    question: 'Do you provide support after the project launches?',
    answer:
      'Absolutely. Every project includes 30 days of post-launch support for free. After that, I offer flexible maintenance and optimization plans to keep your systems running smoothly and improving over time.',
  },
  {
    id: 'faq-6',
    question: 'Can you integrate AI with my existing tools and CRM?',
    answer:
      'Yes — I have extensive experience integrating AI systems with HubSpot, Salesforce, Notion, Slack, Google Workspace, Stripe, and virtually any platform with an API. Custom integrations are one of my specialties.',
  },
];
