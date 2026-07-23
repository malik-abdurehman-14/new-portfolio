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
    role: 'CEO',
    company: 'BrightSmile Dental',
    content:
      'Alex built our AI receptionist and it completely transformed our front desk. Patients can book 24/7, and our staff finally has breathing room. The quality of the voice agent is indistinguishable from a human.',
    avatar:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
    rating: 5,
  },
  {
    id: 't2',
    name: 'James Okonkwo',
    role: 'Head of Operations',
    company: 'FlowMart E-commerce',
    content:
      'We hired Alex to automate our order processing and inventory sync. What used to take our team 20 hours a week now runs automatically. The ROI was visible within the first month. Exceptional work.',
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
      'Alex delivered our SaaS platform ahead of schedule and the design quality is simply on another level. Investors consistently compliment the polish. He thinks like a product owner, not just a developer.',
    avatar:
      'https://images.pexels.com/photos/4158298/pexels-photo-4158298.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
    rating: 5,
  },
  {
    id: 't4',
    name: 'David Chen',
    role: 'CTO',
    company: 'Apex Realty',
    content:
      'The AI chatbot Alex built handles 70% of our property inquiries automatically. It understands context, qualifies leads, and syncs everything to our CRM. Our sales team only talks to warm leads now.',
    avatar:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
    rating: 5,
  },
  {
    id: 't5',
    name: 'Priya Sharma',
    role: 'Marketing Director',
    company: 'Vertex Media',
    content:
      'Our content pipeline went from 2 weeks per article to 2 hours. Alex built a multi-agent system that researches, drafts, and publishes. The output quality is so high our editors barely touch it.',
    avatar:
      'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
    rating: 5,
  },
];
