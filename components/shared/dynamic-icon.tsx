import {
  Layout, Server, Workflow, BrainCircuit, Cloud, Database, Plug,
  PhoneCall, MessageSquare, Code2, Users, Rocket,
  Search, Microscope, PenTool, ShieldCheck, LifeBuoy,
  FolderCheck, Clock, Heart, Star, ArrowRight, ArrowUpRight,
  Github, Linkedin, Mail, Phone, Globe, Sparkles, Zap,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Layout, Server, Workflow, BrainCircuit, Cloud, Database, Plug,
  PhoneCall, MessageSquare, Code2, Users, Rocket,
  Search, Microscope, PenTool, ShieldCheck, LifeBuoy,
  FolderCheck, Clock, Heart, Star, ArrowRight, ArrowUpRight,
  Github, Linkedin, Mail, Phone, Globe, Sparkles, Zap,
};

export function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Sparkles;
  return <Icon className={className} />;
}
