'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { services } from '@/lib/data/services';
import { SectionHeader } from '@/components/shared/section-header';
import { StaggerContainer, StaggerItem } from '@/components/shared/reveal';
import { DynamicIcon } from '@/components/shared/dynamic-icon';
import { TiltCard } from '@/components/shared/tilt-card';

export function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              What I can <span className="text-gradient-blue">build for you</span>
            </>
          }
          description="From modern websites and scalable web applications to cross-platform mobile apps — complete development solutions built for performance, usability, and growth."
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <TiltCard max={8} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur transition-colors hover:border-white/20"
                >
                  {/* Glow on hover */}
                  <div
                    className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                    style={{ background: service.accent }}
                  />

                  {/* Animated border top */}
                  <div
                    className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)` }}
                  />

                  <div
                    className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${service.accent}15`, border: `1px solid ${service.accent}30` }}
                  >
                    <DynamicIcon name={service.icon} className="h-6 w-6" />
                    <span
                      className="absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-30"
                      style={{ background: service.accent }}
                    />
                  </div>

                  <h3 className="font-display text-lg font-bold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {service.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-white/40">
                        <Check className="h-3.5 w-3.5 shrink-0" style={{ color: service.accent }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
