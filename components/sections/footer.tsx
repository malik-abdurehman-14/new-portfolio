'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { socialLinks } from '@/lib/data/social';
import { contactInfo } from '@/lib/data/contact';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  whatsapp: Mail,
  twitter: Sparkles,
  globe: Sparkles,
  phone: Mail,
};

export function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 py-12">
      {/* Animated divider */}
      <div className="absolute left-0 top-0 h-px w-full overflow-hidden">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="h-full w-1/2 bg-gradient-to-r from-transparent via-electric to-transparent"
        />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-purple">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="font-display text-lg font-bold text-white">
              Abdurehman<span className="text-electric">.</span>
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon] ?? Sparkles;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all hover:border-white/20 hover:text-white hover:shadow-glow"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollTop}
            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/60 transition-all hover:border-white/20 hover:text-white"
          >
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Back to top
          </button>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Abdurehman Malik.
          </p>
          <p className="text-xs text-white/40">
            Built with Next.js, Framer Motion &amp; GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}
