'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Award } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/shared/reveal';

const pillars = [
  {
    icon: Target,
    title: 'Mission',
    description:
      'To help businesses unlock their full potential by building intelligent AI systems that save time, reduce costs, and create exceptional customer experiences.',
    color: '#38bdf8',
  },
  {
    icon: Eye,
    title: 'Vision',
    description:
      'A world where every business — regardless of size — can leverage enterprise-grade AI automation to compete and win in their market.',
    color: '#a855f7',
  },
  {
    icon: Award,
    title: 'Experience',
    description:
      '7+ years building for startups and enterprises. 120+ projects shipped. Specialized in AI, automation, and premium web experiences.',
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
              I turn complex problems into
              <br />
              <span className="text-gradient-blue">elegant AI solutions</span>
            </>
          }
          description="I'm a full-stack developer and AI automation engineer who blends technical depth with design sensibility to build systems that feel effortless."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Story + image */}
          <Reveal className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                alt="Workspace"
                className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-electric to-purple text-white font-bold">
                  AC
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-white">Alex Carter</div>
                  <div className="text-xs text-white/60">AI Engineer & Developer</div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-white/60">
              <p className="leading-relaxed">
                I started as a frontend developer obsessed with craft and animation. Over the
                years, I expanded into full-stack engineering and then into AI — building voice
                agents, chatbots, and automation systems that genuinely move the needle for
                businesses.
              </p>
              <p className="leading-relaxed">
                Today I run a boutique studio helping clients worldwide deploy AI systems that
                handle real work — from answering calls to automating entire workflows. I treat
                every project like a product: designed beautifully, built to scale, and obsessed
                over until it feels effortless.
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
