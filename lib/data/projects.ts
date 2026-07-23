export type ProjectCategory =
  | 'Websites'
  | 'Web Apps'
  | 'Mobile Apps'
  | 'SaaS'
  | 'E-commerce';

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  image: string;
  tags: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

export const projectCategories: ('All' | ProjectCategory)[] = [
  'All',
  'Websites',
  'Web Apps',
  'Mobile Apps',
  'SaaS',
  'E-commerce',
];

export const projects: Project[] = [
  {
    id: 'airport-parking-platform',
    title: 'Airport Parking Platform',
    description:
      'A responsive airport parking comparison and booking platform with secure payments and real-time reservations.',
    longDescription:
      'A full-stack booking platform that allows users to compare parking services, make secure online payments, and manage bookings through an intuitive interface.',
    category: 'Web Apps',
    image:
      'https://images.pexels.com/photos/210344/pexels-photo-210344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'Node.js', 'Stripe', 'TypeScript'],
    liveUrl: '#',
    caseStudyUrl: '#',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'teacher-recruitment-platform',
    title: 'Teacher Recruitment Platform',
    description:
      'A global recruitment platform connecting schools with qualified teachers through a modern SaaS solution.',
    longDescription:
      'Developed a scalable recruitment platform featuring role-based dashboards, subscriptions, profile management, and job applications.',
    category: 'SaaS',
    image:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'TypeScript'],
    liveUrl: '#',
    caseStudyUrl: '#',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'production-management-system',
    title: 'Production Management System',
    description:
      'A custom business application for managing production workflows, vendors, and project operations.',
    longDescription:
      'A complete production management solution with project tracking, workflow management, vendor assignments, and reporting.',
    category: 'Web Apps',
    image:
      'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
    liveUrl: '#',
    caseStudyUrl: '#',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'learning-management-system',
    title: 'Learning Management System',
    description:
      'An online learning platform with courses, student dashboards, assessments, and progress tracking.',
    longDescription:
      'A modern LMS built for organizations to deliver online education through interactive dashboards and subscription-based learning.',
    category: 'SaaS',
    image:
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    liveUrl: '#',
    caseStudyUrl: '#',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'real-estate-mobile-app',
    title: 'Real Estate Mobile App',
    description:
      'A cross-platform mobile application for browsing, searching, and managing property listings.',
    longDescription:
      'A React Native application featuring property search, agent profiles, saved listings, and personalized dashboards.',
    category: 'Mobile Apps',
    image:
      'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Native', 'TypeScript', 'Node.js'],
    liveUrl: '#',
    caseStudyUrl: '#',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'ecommerce-store',
    title: 'Premium E-commerce Store',
    description:
      'A modern online shopping platform with secure checkout, product management, and order tracking.',
    longDescription:
      'Built a scalable e-commerce platform with responsive design, payment integration, and a seamless shopping experience.',
    category: 'E-commerce',
    image:
      'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    liveUrl: '#',
    caseStudyUrl: '#',
    githubUrl: '',
    featured: false,
  },
];