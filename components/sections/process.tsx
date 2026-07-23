'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/lib/data/process';
import { SectionHeader } from '@/components/shared/section-header';
import { DynamicIcon } from '@/components/shared/dynamic-icon';

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="How I Work"
          title={
            <>
              A proven <span className="text-gradient-cyan">process</span>
            </>
          }
          description="A structured approach that ensures every project is delivered on time, on budget, and beyond expectations."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              {/* Connector line */}
              {i < processSteps.length - 1 && (
                <div className="absolute -right-2 top-12 hidden h-px w-4 bg-gradient-to-r from-white/20 to-transparent lg:block" />
              )}

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/5">
                <div className="absolute right-3 top-3 font-display text-3xl font-bold text-white/5">
                  0{step.step}
                </div>
                <div className="relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-purple/20 border border-white/10">
                  <DynamicIcon name={step.icon} className="h-5 w-5 text-electric" />
                </div>
                <h3 className="font-display text-base font-bold text-white">{step.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/50">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
