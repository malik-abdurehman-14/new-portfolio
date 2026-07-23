'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Award } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/shared/reveal';

const pillars = [
  {
    icon: Target,
    title: 'My Approach',
    description:
      'I focus on understanding each project’s goals and building reliable web and mobile solutions that are fast, user-friendly, and aligned with real business needs.',
    color: '#38bdf8',
  },
  {
    icon: Eye,
    title: 'My Focus',
    description:
      'My goal is to create modern digital products that combine clean design, strong functionality, excellent performance, and a seamless user experience.',
    color: '#a855f7',
  },
  {
    icon: Award,
    title: 'Experience',
    description:
      'Experienced in developing responsive websites, scalable web applications, SaaS platforms, APIs, dashboards, and cross-platform mobile applications.',
    color: '#22d3ee',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="About Me"
          title={
            <>
              Turning ideas into powerful
              <br />
              <span className="text-gradient-blue">web and mobile products</span>
            </>
          }
          description="I'm a full-stack web and mobile app developer focused on building fast, scalable, and user-friendly digital products using modern technologies."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Story + image */}
          <Reveal className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img
                src="/my-img.jpeg"
                alt="Workspace"
                className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-electric to-purple text-white font-bold">
                  AM
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-white">Abdurehman Malik</div>
                  <div className="text-xs text-white/60">Full Stack Web & Mobile App Developer</div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-white/60">
              <p className="leading-relaxed">
                I’m a full-stack developer passionate about transforming ideas
                into modern, functional, and high-performing digital products.
                I work across both frontend and backend development to build
                complete solutions, from responsive user interfaces to secure
                APIs, databases, and server-side systems.
              </p>
              <p className="leading-relaxed">
                I also develop cross-platform mobile applications that deliver
                smooth and consistent experiences across Android and iOS. My
                focus is always on writing clean, maintainable code and creating
                products that are scalable, reliable, and easy to use.
              </p>
            </div>
          </Reveal>

          {/* Pillars */}
          <StaggerContainer className="flex flex-col gap-6" stagger={0.12}>
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur transition-colors hover:border-white/20"
                >
                  <div
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                    style={{ background: p.color }}
                  />
                  <div className="relative flex items-start gap-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                      style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}
                    >
                      <p.icon className="h-6 w-6" style={{ color: p.color }} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/50">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
