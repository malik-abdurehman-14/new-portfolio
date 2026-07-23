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
    id: 'website-development',
    title: 'Website Development',
    description:
      'Modern, responsive, and high-performance websites designed to represent your brand and convert visitors into customers.',
    icon: 'Monitor',
    features: [
      'Responsive design',
      'SEO-friendly structure',
      'Fast loading speed',
      'Cross-browser compatibility',
    ],
    accent: '#38bdf8',
  },
  {
    id: 'web-application-development',
    title: 'Web Applications',
    description:
      'Custom web applications built around your business requirements with scalable architecture and seamless user experiences.',
    icon: 'PanelsTopLeft',
    features: [
      'Custom dashboards',
      'User authentication',
      'Role-based access',
      'Real-time functionality',
    ],
    accent: '#22d3ee',
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile applications for Android and iOS built with React Native and modern development practices.',
    icon: 'Smartphone',
    features: [
      'Android and iOS apps',
      'React Native development',
      'Push notifications',
      'App store deployment',
    ],
    accent: '#a855f7',
  },
  {
    id: 'saas-development',
    title: 'SaaS Development',
    description:
      'Scalable software-as-a-service platforms with subscriptions, dashboards, account management, and secure cloud architecture.',
    icon: 'Cloud',
    features: [
      'Subscription systems',
      'Multi-user dashboards',
      'Payment integration',
      'Scalable architecture',
    ],
    accent: '#818cf8',
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    description:
      'Secure and reliable backend systems that manage your application logic, users, databases, and business processes.',
    icon: 'Server',
    features: [
      'Node.js and Express',
      'Database architecture',
      'Authentication and security',
      'Performance optimization',
    ],
    accent: '#34d399',
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    description:
      'Reliable integration of payment gateways, communication platforms, maps, authentication, and third-party services.',
    icon: 'Plug',
    features: [
      'REST and GraphQL APIs',
      'Payment gateways',
      'OAuth authentication',
      'Webhooks and external APIs',
    ],
    accent: '#fbbf24',
  },
  {
    id: 'ecommerce-development',
    title: 'E-commerce Development',
    description:
      'Feature-rich online stores with secure payments, product management, order processing, and smooth shopping experiences.',
    icon: 'ShoppingCart',
    features: [
      'Product management',
      'Secure checkout',
      'Payment integration',
      'Order tracking',
    ],
    accent: '#f472b6',
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    description:
      'Ongoing technical support, performance improvements, bug fixes, updates, and feature enhancements for existing products.',
    icon: 'Wrench',
    features: [
      'Bug fixing',
      'Performance improvements',
      'Security updates',
      'New feature development',
    ],
    accent: '#c084fc',
  },
];
