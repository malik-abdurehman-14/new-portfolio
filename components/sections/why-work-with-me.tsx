'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { stats } from '@/lib/data/stats';
import { DynamicIcon } from '@/components/shared/dynamic-icon';
import { Reveal } from '@/components/shared/reveal';

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setCount(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-white sm:text-5xl">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function WhyWorkWithMe() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center font-display text-4xl font-bold tracking-tight text-white sm:text-5xl text-balance">
            Why work with <span className="text-gradient-blue">me</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.id} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur transition-colors hover:border-white/20">
                <div
                  className="absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: stat.color }}
                />
                <div
                  className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}30` }}
                >
                  <DynamicIcon name={stat.icon} className="h-7 w-7" />
                </div>
                <CountUp value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm text-white/50">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
