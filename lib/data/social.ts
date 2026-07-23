export type SocialLink = {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail' | 'phone' | 'whatsapp' | 'twitter' | 'globe';
};

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:hello@alexcarter.dev', icon: 'mail' },
  { label: 'WhatsApp', href: 'https://wa.me/10000000000', icon: 'whatsapp' },
];
