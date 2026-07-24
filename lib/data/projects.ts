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
    id: 'hire-my-teacher',
    title: 'Hire My Teacher',
    description:
      'HireMyTeacher is a digital recruitment platform designed to connect teachers, schools, and colleges worldwide. The platform allows educators to create professional profiles, apply directly to verified institutions, and communicate seamlessly with employers. Schools can post jobs, evaluate applicants, and hire talent from any country — all through a unified system.',
    longDescription:
      'Developed a scalable recruitment platform featuring role-based dashboards, subscriptions, profile management, and job applications.',
    category: 'SaaS',
    image:
      '/projects/hire-my-teacher.png',
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'TypeScript'],
    liveUrl: 'https://hiremyteachers.com/',
    caseStudyUrl: '#',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'futureino-teachnologies',
    title: 'Futureinno Teachnologies',
    description:
      'FutureInno Technologies is a software development and AI automation company that helps businesses streamline operations, accelerate growth, and build scalable digital products. Specializing in custom software, SaaS platforms, AI agents, web and mobile applications, cloud solutions, and business automation, the company delivers end-to-end technology solutions tailored to the unique needs of startups, SMEs, and enterprises worldwide.',
    longDescription:
      'A React Native application featuring property search, agent profiles, saved listings, and personalized dashboards.',
    category: 'Web Apps',
    image:
      '/projects/futureinno.png',
    tags: ['React Native', 'TypeScript', 'Node.js'],
    liveUrl: 'https://www.thefutureinno.com/',
    caseStudyUrl: '#',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'sherawala-groups',
    title: 'Sherawala Groups',
    description:
      'Sheranwala Group is a trusted name in Pakistan’s real estate sector, dedicated to building expansive, secure, and modern communities. They specialize in residential and mixed-use developments — combining thoughtful design, sustainable practices, and high construction standards to deliver premium living experiences.',
    longDescription:
      'A full-stack booking platform that allows users to compare parking services, make secure online payments, and manage bookings through an intuitive interface.',
    category: 'Web Apps',
    image:
      '/projects/sherawala.png',
    tags: ['Next.js', 'Node.js', 'Stripe', 'TypeScript'],
    liveUrl: 'https://www.sheranwala.com/',
    caseStudyUrl: '#',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'alliance-group-bodyshop',
    title: 'Alliance Group BodyShop',
    description:
      'Alliance Group Bodyshop is a professional automotive repair and bodywork specialist providing comprehensive vehicle repair and maintenance services. The workshop specializes in accident repairs, scratch and dent removal, car body restoration, mechanical repairs, tire services, and performance upgrades—delivering high-quality workmanship, reliable service, and fast turnaround to keep vehicles in peak condition.',
    longDescription:
      'A complete production management solution with project tracking, workflow management, vendor assignments, and reporting.',
    category: 'Web Apps',
    image:
      '/projects/alliance.png',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
    liveUrl: 'https://alliancegroupbodyshop.netlify.app/',
    caseStudyUrl: '#',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'mejuri',
    title: 'Mejuri',
    description:
      'Mejuri disrupts traditional jewelry retail with a direct-to-consumer model offering ethically-crafted 14k gold and diamond pieces at accessible price points. The brand empowers self-purchase through minimalist designs, transparent pricing, and a community-driven "Wear Mejuri Everyday" ethos.',
    longDescription:
      'A modern LMS built for organizations to deliver online education through interactive dashboards and subscription-based learning.',
    category: 'E-commerce',
    image:
      '/projects/mejuri.png',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    liveUrl: 'https://mejuri.com/world/en/',
    caseStudyUrl: '#',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'cloud-design-lab',
    title: 'Cloud Design Lab',
    description:
      'Cloud Design Lab is an AI solutions and digital innovation company that helps businesses accelerate growth through intelligent automation and custom technology solutions. Specializing in AI-powered applications, workflow automation, custom software, and digital transformation, the company delivers scalable, user-centric solutions that improve productivity, streamline operations, and drive long-term business success.',
    longDescription:
      'Built a scalable e-commerce platform with responsive design, payment integration, and a seamless shopping experience.',
    category: 'Web Apps',
    image:
      '/projects/cloud-design.png',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    liveUrl: 'https://www.clouddesignlab.com/',
    caseStudyUrl: '#',
    githubUrl: '',
    featured: false,
  },
  {
    id: 'smileOn-ppecialist-pental-paractice',
    title: 'SmileOn Specialist Dental Paractice',
    description:
      'SmileOn is one of Lahores leading multi-specialty dental clinics, offering comprehensive oral healthcare through a team of experienced dental specialists. The clinic provides advanced treatments including dental implants, cosmetic dentistry, orthodontics, veneers, teeth whitening, root canal therapy, and preventive dental care—delivering patient-focused treatment with modern technology and high clinical standards.',
    longDescription:
      'A full-stack booking platform that allows users to compare parking services, make secure online payments, and manage bookings through an intuitive interface.',
    category: 'Web Apps',
    image:
      '/projects/smile.png',
    tags: ['Next.js', 'Node.js', 'Stripe', 'TypeScript'],
    liveUrl: 'https://smileon.pk/?gad_source=1&gad_campaignid=22098982968&gbraid=0AAAAACe0J1mdEJAmVUQD18HJm7Ee7k4gx&gclid=CjwKCAjwmozTBhAeEiwAkEGZzhVABWcFvkUR5e6348-4L56wiJAMknxv-1v2RbI9sFHTs56DgRI5kBoCcE0QAvD_BwE',
    caseStudyUrl: '#',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'azar-plastic-surgery',
    title: 'Azar Plastic Surgery',
    description:
      'Azar Plastic Surgery Clinic is a premium aesthetic and plastic surgery clinic specializing in cosmetic, reconstructive, and facial enhancement procedures. Led by an experienced consultant plastic surgeon, the clinic offers advanced treatments including rhinoplasty, hair transplant, liposuction, tummy tuck, facelift, eyelid surgery, and body contouring—combining modern surgical techniques with personalized care to deliver natural-looking, confidence-boosting results.',
    longDescription:
      'A full-stack booking platform that allows users to compare parking services, make secure online payments, and manage bookings through an intuitive interface.',
    category: 'Web Apps',
    image:
      '/projects/surgery.png',
    tags: ['Next.js', 'Node.js', 'Stripe', 'TypeScript'],
    liveUrl: 'https://azarplast.com/rhinoplasty-surgery/?gad_source=1&gad_campaignid=23606400672&gbraid=0AAAABC9IYpDNTyHdR_vRMOitxl62Ac2c4&gclid=CjwKCAjwmozTBhAeEiwAkEGZzleX3ZresR5-hqvCgLV8G0BYZvrLjRJLGt3F32EmFN8ZQY70NC11ahoCFxwQAvD_BwE',
    caseStudyUrl: '#',
    githubUrl: '',
    featured: true,
  },
];