export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Mitchell',
    role: 'Business Owner',
    company: 'BrightSmile Dental',
    content:
      'Abdurehman developed a modern and responsive website that clearly presents our services and makes it easier for patients to contact our team. He communicated well throughout the project and delivered exactly what we needed.',
    avatar:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
    rating: 5,
  },
  {
    id: 't2',
    name: 'James Okonkwo',
    role: 'Operations Manager',
    company: 'FlowMart E-commerce',
    content:
      'He helped us build a fast and user-friendly e-commerce platform with a smooth checkout experience. The website performs well across devices, and the overall development quality was excellent.',
    avatar:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Elena Rossi',
    role: 'Founder',
    company: 'Lumina SaaS',
    content:
      'Abdurehman understood our product vision and transformed it into a polished SaaS platform. He handled both frontend and backend development professionally and always remained responsive to feedback.',
    avatar:
      'https://images.pexels.com/photos/4158298/pexels-photo-4158298.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
    rating: 5,
  },
  {
    id: 't4',
    name: 'David Chen',
    role: 'Product Manager',
    company: 'Apex Realty',
    content:
      'The property platform was delivered with a clean interface, reliable functionality, and excellent responsiveness. He paid close attention to the user experience and technical details throughout development.',
    avatar:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
    rating: 5,
  },
  {
    id: 't5',
    name: 'Priya Sharma',
    role: 'Project Director',
    company: 'Vertex Media',
    content:
      'Working with Abdurehman was smooth from start to finish. He provided regular updates, responded quickly to requested changes, and delivered a professional product that matched our requirements.',
    avatar:
      'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
    rating: 5,
  },
];
