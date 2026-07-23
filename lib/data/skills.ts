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
    name: 'Frontend',
    icon: 'Layout',
    color: '#38bdf8',
    skills: [
      { name: 'React / Next.js', level: 98 },
      { name: 'TypeScript', level: 95 },
      { name: 'Tailwind CSS', level: 96 },
      { name: 'Framer Motion / GSAP', level: 90 },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: 'Server',
    color: '#22d3ee',
    skills: [
      { name: 'Node.js / Express', level: 94 },
      { name: 'Python / FastAPI', level: 88 },
      { name: 'REST & GraphQL APIs', level: 92 },
      { name: 'WebSockets / Realtime', level: 85 },
    ],
  },
  {
    id: 'automation',
    name: 'Automation',
    icon: 'Workflow',
    color: '#a855f7',
    skills: [
      { name: 'n8n / Make.com', level: 96 },
      { name: 'Zapier / Pipedream', level: 90 },
      { name: 'Custom Workflow Engines', level: 88 },
      { name: 'Cron / Queue Systems', level: 84 },
    ],
  },
  {
    id: 'ai',
    name: 'AI',
    icon: 'BrainCircuit',
    color: '#818cf8',
    skills: [
      { name: 'OpenAI / Claude / LLMs', level: 95 },
      { name: 'RAG Pipelines', level: 90 },
      { name: 'Vapi / Voice Agents', level: 92 },
      { name: 'LangChain / Agents', level: 87 },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud',
    icon: 'Cloud',
    color: '#34d399',
    skills: [
      { name: 'AWS / Vercel', level: 90 },
      { name: 'Docker / Containers', level: 85 },
      { name: 'CI/CD Pipelines', level: 88 },
      { name: 'Edge Functions', level: 86 },
    ],
  },
  {
    id: 'database',
    name: 'Database',
    icon: 'Database',
    color: '#fbbf24',
    skills: [
      { name: 'PostgreSQL / Supabase', level: 93 },
      { name: 'Redis / Vector DBs', level: 84 },
      { name: 'Prisma / Drizzle', level: 90 },
      { name: 'Pinecone / pgvector', level: 82 },
    ],
  },
  {
    id: 'integrations',
    name: 'Integrations',
    icon: 'Plug',
    color: '#f472b6',
    skills: [
      { name: 'Stripe / Payments', level: 91 },
      { name: 'HubSpot / Salesforce', level: 85 },
      { name: 'Slack / Notion / GSuite', level: 89 },
      { name: 'Webhooks / OAuth', level: 92 },
    ],
  },
];
