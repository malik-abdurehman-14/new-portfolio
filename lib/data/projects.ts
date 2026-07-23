export type ProjectCategory = 'AI' | 'Automation' | 'Web' | 'Voice Agents' | 'CRM';

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  image: string;
  tags: string[];
  liveUrl: string;
  caseStudyUrl: string;
  githubUrl: string;
  featured: boolean;
};

export const projectCategories: ('All' | ProjectCategory)[] = [
  'All',
  'AI',
  'Automation',
  'Web',
  'Voice Agents',
  'CRM',
];

export const projects: Project[] = [
  {
    id: 'neural-receptionist',
    title: 'Neural Receptionist',
    description:
      'AI voice agent that answers, screens, and schedules for a dental chain — handling 1,200+ calls weekly with human-level conversation.',
    longDescription:
      'A production voice agent built on Vapi with custom conversation routing, real-time CRM sync to HubSpot, and a fallback-to-human handoff. Reduced front-desk workload by 73%.',
    category: 'Voice Agents',
    image:
      'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Vapi', 'Node.js', 'HubSpot', 'Twilio'],
    liveUrl: '#',
    caseStudyUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 'leadgen-engine',
    title: 'LeadGen Engine',
    description:
      'End-to-end automation that captures, enriches, scores, and routes leads across 6 channels into a unified CRM pipeline.',
    longDescription:
      'An n8n-powered automation engine with AI lead scoring, automatic enrichment via Clearbit, and smart routing to the right sales rep. Increased qualified lead conversion by 41%.',
    category: 'Automation',
    image:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['n8n', 'OpenAI', 'HubSpot', 'Supabase'],
    liveUrl: '#',
    caseStudyUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 'support-copilot',
    title: 'Support Copilot',
    description:
      'RAG-powered support chatbot trained on 10k+ docs, resolving 68% of tickets autonomously with seamless human handoff.',
    longDescription:
      'A retrieval-augmented chatbot using pgvector + GPT-4o, deployed on web and WhatsApp. Includes an analytics dashboard for CSAT, deflection rate, and trending topics.',
    category: 'AI',
    image:
      'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'OpenAI', 'pgvector', 'WhatsApp'],
    liveUrl: '#',
    caseStudyUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 'fintrack-saas',
    title: 'FinTrack SaaS',
    description:
      'A full-stack SaaS dashboard for fintech startups — real-time analytics, Stripe billing, and multi-tenant architecture.',
    longDescription:
      'A premium SaaS platform with role-based access, Stripe subscription billing, live charts via Recharts, and a polished onboarding flow. Built for scale with Supabase + Next.js.',
    category: 'Web',
    image:
      'https://images.pexels.com/photos/210344/pexels-photo-210344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'Stripe', 'Supabase', 'Recharts'],
    liveUrl: '#',
    caseStudyUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 'crm-bridge',
    title: 'CRM Bridge',
    description:
      'Bi-directional sync between Salesforce and a custom internal tool, with real-time field mapping and conflict resolution.',
    longDescription:
      'A robust integration layer with OAuth, webhooks, and a rules engine for field mapping. Handles 50k+ records daily with zero downtime and full audit logging.',
    category: 'CRM',
    image:
      'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Salesforce', 'Node.js', 'OAuth', 'Redis'],
    liveUrl: '#',
    caseStudyUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 'content-pipeline',
    title: 'Content Pipeline AI',
    description:
      'Automated content engine that researches, drafts, and publishes SEO articles — from keyword to live post with zero manual steps.',
    longDescription:
      'A multi-agent system using Claude + GPT-4o that researches topics, drafts articles, generates images, and publishes to Webflow. Reduced content production cost by 80%.',
    category: 'AI',
    image:
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Claude', 'Make.com', 'Webflow', 'DALL-E'],
    liveUrl: '#',
    caseStudyUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];
