'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { experiences } from '@/lib/data/experience';
import { SectionHeader } from '@/components/shared/section-header';
import { DynamicIcon } from '@/components/shared/dynamic-icon';

function TimelineItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1"
      >
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur transition-colors hover:border-white/20">
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-electric/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative">
            <span className="text-xs font-mono text-electric">{exp.period}</span>
            <h3 className="mt-1 font-display text-lg font-bold text-white">{exp.role}</h3>
            <p className="text-sm font-medium text-white/60">{exp.company}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/50">{exp.description}</p>
            <ul className="mt-4 space-y-2">
              {exp.achievements.map((a) => (
                <li key={a} className="flex items-start gap-2 text-xs text-white/40">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-electric" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Center node */}
      <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a]">
        <div className="absolute inset-0 rounded-full bg-electric/20 blur-md" />
        <DynamicIcon name={exp.icon} className="relative h-6 w-6 text-electric" />
      </div>

      {/* Spacer for alignment */}
      <div className="flex-1" />
    </div>
  );
}

export function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Career Journey"
          title={
            <>
              My <span className="text-gradient-blue">experience</span> timeline
            </>
          }
          description="My journey building responsive websites, scalable web applications, backend systems, SaaS platforms, and cross-platform mobile apps."
        />

        <div ref={containerRef} className="relative mt-16">
          {/* Animated center line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/5 md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-electric via-cyan to-purple"
            />
          </div>

          {/* Mobile line */}
          <div className="absolute left-7 top-0 h-full w-px bg-white/5 md:hidden" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
