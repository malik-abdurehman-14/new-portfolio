'use client';

import { technologies } from '@/lib/data/technologies';
import { Reveal } from '@/components/shared/reveal';

export function Technologies() {
  const doubled = [...technologies, ...technologies];

  return (
    <section className="relative border-y border-white/5 bg-white/[0.01] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-10 text-center text-sm font-medium uppercase tracking-[0.3em] text-white/40">
            Trusted Technologies &amp; Tools I Work With
          </p>
        </Reveal>
      </div>

      <div className="marquee-pause relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#050505] to-transparent" />

        <div className="flex w-max animate-marquee gap-6">
          {doubled.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-4 backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-white/5"
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
                style={{
                  background: `${tech.color}20`,
                  border: `1px solid ${tech.color}40`,
                  color: tech.color,
                }}
              >
                {tech.icon}
              </div>
              <span className="font-display text-lg font-semibold text-white/70 transition-colors group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
