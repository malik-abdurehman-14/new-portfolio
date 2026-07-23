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
    value: 40,
    suffix: '+',
    icon: 'FolderCheck',
    color: '#38bdf8',
  },
  {
    id: 'experience',
    label: 'Years of Experience',
    value: 4,
    suffix: '+',
    icon: 'BriefcaseBusiness',
    color: '#22d3ee',
  },
  {
    id: 'technologies',
    label: 'Technologies Used',
    value: 20,
    suffix: '+',
    icon: 'Code2',
    color: '#a855f7',
  },
  {
    id: 'clients',
    label: 'Happy Clients',
    value: 25,
    suffix: '+',
    icon: 'Users',
    color: '#34d399',
  },
];
