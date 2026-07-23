export type Stat = {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: string;
  color: string;
};

export const stats: Stat[] = [
  {
    id: 'projects',
    label: 'Projects Completed',
    value: 120,
    suffix: '+',
    icon: 'FolderCheck',
    color: '#38bdf8',
  },
  {
    id: 'hours-saved',
    label: 'Hours Saved for Clients',
    value: 15000,
    suffix: '+',
    icon: 'Clock',
    color: '#22d3ee',
  },
  {
    id: 'automations',
    label: 'Business Automations',
    value: 200,
    suffix: '+',
    icon: 'Workflow',
    color: '#a855f7',
  },
  {
    id: 'satisfaction',
    label: 'Client Satisfaction',
    value: 100,
    suffix: '%',
    icon: 'Heart',
    color: '#34d399',
  },
];
