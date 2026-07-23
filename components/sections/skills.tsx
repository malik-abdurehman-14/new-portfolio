'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillCategories } from '@/lib/data/skills';
import { SectionHeader } from '@/components/shared/section-header';
import { StaggerContainer, StaggerItem } from '@/components/shared/reveal';
import { DynamicIcon } from '@/components/shared/dynamic-icon';

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-white/70">{name}</span>
        <span className="text-xs font-mono text-white/40">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            boxShadow: `0 0 10px ${color}60`,
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Skills & Expertise"
          title={
            <>
              A full-stack <span className="text-gradient-cyan">toolkit</span>
            </>
          }
          description="Deep expertise across the entire stack — from pixel-perfect frontends to AI infrastructure and cloud architecture."
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {skillCategories.map((cat) => (
            <StaggerItem key={cat.id}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur transition-colors hover:border-white/20"
              >
                <div
                  className="absolute -left-10 -top-10 h-32 w-32 rounded-full opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
                  style={{ background: cat.color }}
                />

                <div className="relative mb-5 flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}30` }}
                  >
                    <DynamicIcon name={cat.icon} className="h-5 w-5" />
                    <span
                      className="absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-20"
                      style={{ background: cat.color }}
                    />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{cat.name}</h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={cat.color}
                      delay={i * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
