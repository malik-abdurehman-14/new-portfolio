'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react';
import { HeroBackground } from './hero-background';
import { Magnetic } from '@/components/shared/magnetic';

const rotatingTexts = [
  'Building Websites That Perform',
  'Developing Mobile Apps That Scale',
  'Creating Powerful SaaS Solutions',
  'Turning Ideas into Digital Products',
];

const titles = [
  'Next.js Developer',
  'React Native Developer',
  'Node.js Developer',
  'TypeScript Developer',
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left content */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Available for new projects
          </motion.div>

          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-sm font-medium uppercase tracking-[0.3em] text-electric"
            >
              Hello, I&apos;m Abdurehman Malik
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl text-balance"
            >
              Building Modern
              <br />
              <span className="text-gradient-blue animate-gradient"> Digital Products</span>
            </motion.h1>
          </div>

          {/* Rotating text */}
          <div className="flex h-9 items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2 text-lg font-medium text-white/80 sm:text-xl"
              >
                <Sparkles className="h-5 w-5 text-cyan" />
                {rotatingTexts[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Title pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap gap-2"
          >
            {titles.map((title) => (
              <span
                key={title}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/60 backdrop-blur"
              >
                {title}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <Magnetic>
              <button
                onClick={() => scrollTo('#projects')}
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-electric to-cyan px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Magnetic>
            <Magnetic>
              <button
                onClick={() => scrollTo('#contact')}
                className="flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </button>
            </Magnetic>
            {/* <Magnetic>
              <button
                onClick={() => scrollTo('#contact')}
                className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-sm font-semibold text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                <Download className="h-4 w-4" />
                Resume
              </button>
            </Magnetic> */}
          </motion.div>

          {/* Mini stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-8 pt-4"
          >
            {[
  { value: '40+', label: 'Projects Completed' },
  { value: '4+', label: 'Years Experience' },
  { value: '20+', label: 'Happy Clients' },
].map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-white/40">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden h-[500px] items-center justify-center lg:flex"
        >
          <div className="relative h-80 w-80">
            {/* Core orb */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-electric via-cyan to-purple opacity-90 blur-2xl"
            />
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-electric to-cyan shadow-[0_0_60px_rgba(56,189,248,0.6)]" />

            {/* Orbiting nodes */}
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const angle = (i / 6) * Math.PI * 2;
              const radius = 130;
              return (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20 + i * 3, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: 'center' }}
                >
                  <div
                    className="absolute h-4 w-4 rounded-full"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${(angle * 180) / Math.PI}deg) translateX(${radius}px)`,
                      background: i % 2 === 0 ? '#38bdf8' : '#a855f7',
                      boxShadow: `0 0 16px ${i % 2 === 0 ? '#38bdf8' : '#a855f7'}`,
                    }}
                  />
                </motion.div>
              );
            })}

            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-white/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-8 rounded-full border border-dashed border-white/10"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="h-2 w-1 rounded-full bg-electric"
          />
        </div>
      </motion.div>
    </section>
  );
}
