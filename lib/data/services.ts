export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  features: string[];
  accent: string; // hex color
};

export const services: Service[] = [
  {
    id: 'ai-voice-agents',
    title: 'AI Voice Agents',
    description:
      'Human-quality voice agents that handle inbound and outbound calls, schedule appointments, and qualify leads 24/7.',
    icon: 'PhoneCall',
    features: ['Vapi & Retell integration', 'Natural conversation flow', 'CRM auto-sync', 'Multi-language support'],
    accent: '#38bdf8',
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots',
    description:
      'Context-aware chatbots trained on your knowledge base that resolve support tickets, capture leads, and boost conversions.',
    icon: 'MessageSquare',
    features: ['RAG-powered answers', 'Website + WhatsApp + Telegram', 'Human handoff', 'Analytics dashboard'],
    accent: '#22d3ee',
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description:
      'Eliminate repetitive work with custom automation pipelines connecting your tools, data, and teams seamlessly.',
    icon: 'Workflow',
    features: ['n8n & Make.com builds', 'Email & document automation', 'Approval flows', 'Error monitoring'],
    accent: '#a855f7',
  },
  {
    id: 'website-development',
    title: 'Website Development',
    description:
      'High-performance, conversion-focused websites and web apps built with modern frameworks and premium design.',
    icon: 'Code2',
    features: ['Next.js & React', 'SEO optimized', '100/100 Lighthouse', 'Headless CMS'],
    accent: '#818cf8',
  },
  {
    id: 'crm-integration',
    title: 'CRM Integration',
    description:
      'Connect your AI agents and automations to HubSpot, Salesforce, or any CRM for a single source of truth.',
    icon: 'Users',
    features: ['Bi-directional sync', 'Custom field mapping', 'Pipeline automation', 'Lead enrichment'],
    accent: '#34d399',
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    description:
      'Robust integrations between any services — payment, communication, data, and third-party APIs — built to scale.',
    icon: 'Plug',
    features: ['REST & GraphQL', 'OAuth & webhooks', 'Rate-limit handling', 'Retry & logging'],
    accent: '#fbbf24',
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    description:
      'End-to-end automation of your operations — from lead capture to invoicing — so your team focuses on growth.',
    icon: 'Rocket',
    features: ['Process auditing', 'End-to-end pipelines', 'Reporting & alerts', 'Team training'],
    accent: '#f472b6',
  },
  {
    id: 'custom-ai-solutions',
    title: 'Custom AI Solutions',
    description:
      'Bespoke AI systems tailored to your business — from internal copilots to specialized models and agents.',
    icon: 'BrainCircuit',
    features: ['Custom agent architecture', 'Fine-tuned models', 'Private deployments', 'Ongoing optimization'],
    accent: '#c084fc',
  },
];
