export type SocialLink = {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail' | 'phone' | 'whatsapp' | 'twitter' | 'globe';
};

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/malik-abdurehman-14', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdurehman-zafar14/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:abdurehmanzafar.work@gmail.com', icon: 'mail' },
  { label: 'WhatsApp', href: 'https://wa.me/923244748625', icon: 'whatsapp' },
];
