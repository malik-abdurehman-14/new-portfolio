export type Technology = {
  name: string;
  icon: string; // short label for the badge
  color: string;
};

export const technologies: Technology[] = [
  { name: 'OpenAI', icon: 'AI', color: '#10a37f' },
  { name: 'Claude', icon: 'Cl', color: '#d97757' },
  { name: 'n8n', icon: 'n8n', color: '#ea4b71' },
  { name: 'Vapi', icon: 'Vp', color: '#5cf2c2' },
  { name: 'Make', icon: 'Mk', color: '#6d00cc' },
  { name: 'Supabase', icon: 'SB', color: '#3ecf8e' },
  { name: 'React', icon: 'Re', color: '#61dafb' },
  { name: 'Next.js', icon: 'Nx', color: '#ffffff' },
  { name: 'Node.js', icon: 'Nd', color: '#83cd29' },
  { name: 'TypeScript', icon: 'TS', color: '#3178c6' },
  { name: 'Python', icon: 'Py', color: '#3776ab' },
  { name: 'GSAP', icon: 'Gs', color: '#88ce02' },
];
