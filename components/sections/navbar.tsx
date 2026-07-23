'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ArrowUpRight } from 'lucide-react';
import { navLinks } from '@/lib/data/nav';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 20);
      if (current > 100 && current > lastScroll.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScroll.current = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
          scrolled ? 'py-3' : 'py-5'
        )}
      >
        <nav
          className={cn(
            'mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300',
            scrolled
              ? 'glass-strong shadow-[0_8px_30px_rgba(0,0,0,0.4)]'
              : 'border border-transparent'
          )}
        >
          <button
            onClick={() => handleNav('#home')}
            className="group flex items-center gap-2"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-purple">
              <Sparkles className="h-5 w-5 text-white" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-electric to-purple opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Alex<span className="text-electric">.</span>
            </span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={cn(
                  'relative rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                  activeSection === link.href
                    ? 'text-white'
                    : 'text-white/50 hover:text-white/80'
                )}
              >
                {activeSection === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-white/10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav('#contact')}
              className="hidden rounded-xl bg-gradient-to-r from-electric to-cyan px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105 active:scale-95 sm:block"
            >
              Let's Talk
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl glass text-white md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 h-full w-[80%] max-w-sm border-l border-white/10 bg-[#0a0a0a] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold text-white">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass text-white"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-8 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    onClick={() => handleNav(link.href)}
                    className={cn(
                      'flex items-center justify-between rounded-xl px-4 py-3.5 text-left text-base font-medium transition-colors',
                      activeSection === link.href
                        ? 'bg-white/10 text-white'
                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                    )}
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 opacity-40" />
                  </motion.button>
                ))}
              </div>
              <button
                onClick={() => handleNav('#contact')}
                className="mt-6 w-full rounded-xl bg-gradient-to-r from-electric to-cyan px-5 py-3.5 text-sm font-semibold text-white"
              >
                Let's Talk
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
