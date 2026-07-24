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
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`
        relative grid grid-cols-[56px_minmax(0,1fr)] items-start gap-4
        md:grid-cols-[1fr_56px_1fr] md:items-center md:gap-8
      `}
    >
      {/* Card */}
      <motion.div
        initial={{
          opacity: 0,
          x: isLeft ? -40 : 40,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          col-start-2 w-full min-w-0
          md:col-auto
          ${isLeft ? 'md:col-start-1' : 'md:col-start-3'}
        `}
      >
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur transition-colors hover:border-white/20 sm:p-6">
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-electric/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative">
            <span className="font-mono text-xs text-electric">
              {exp.period}
            </span>

            <h3 className="mt-1 font-display text-base font-bold leading-snug text-white sm:text-lg">
              {exp.role}
            </h3>

            <p className="mt-1 text-sm font-medium text-white/60">
              {exp.company}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-white/50">
              {exp.description}
            </p>

            <ul className="mt-4 space-y-2">
              {exp.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex items-start gap-2 text-xs leading-relaxed text-white/40"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-electric" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Center node */}
      <div
        className={`
          relative z-10 col-start-1 row-start-1
          flex h-12 w-12 items-center justify-center
          justify-self-center rounded-full
          border border-white/10 bg-[#0a0a0a]
          md:col-start-2 md:h-14 md:w-14
        `}
      >
        <div className="absolute inset-0 rounded-full bg-electric/20 blur-md" />
        <DynamicIcon
          name={exp.icon}
          className="relative h-5 w-5 text-electric md:h-6 md:w-6"
        />
      </div>

      {/* Desktop spacer */}
      <div
        className={`
          hidden md:block
          ${isLeft ? 'md:col-start-3' : 'md:col-start-1'}
        `}
      />
    </div>
  );
}

export function Experience() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  );

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Career Journey"
          title={
            <>
              My{' '}
              <span className="text-gradient-blue">
                experience
              </span>{' '}
              timeline
            </>
          }
          description="My journey building responsive websites, scalable web applications, backend systems, SaaS platforms, and cross-platform mobile apps."
        />

        <div ref={containerRef} className="relative mt-12 sm:mt-16">
          {/* Desktop center line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/5 md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-electric via-cyan to-purple"
            />
          </div>

          {/* Mobile left line */}
          <div className="absolute left-7 top-0 h-full w-px -translate-x-1/2 bg-white/5 md:hidden">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-electric via-cyan to-purple"
            />
          </div>

          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.id}
                exp={exp}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}