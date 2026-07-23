'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FileText, Github, Star } from 'lucide-react';
import { projects, projectCategories, type ProjectCategory } from '@/lib/data/projects';
import { SectionHeader } from '@/components/shared/section-header';
import { TiltCard } from '@/components/shared/tilt-card';
import { cn } from '@/lib/utils';

type Filter = 'All' | ProjectCategory;

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All');

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-electric/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Featured Work"
          title={
            <>
              Projects that <span className="text-gradient-blue">deliver results</span>
            </>
          }
          description="A selection of AI systems, automations, and web experiences built for clients worldwide."
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                'relative rounded-full px-5 py-2 text-sm font-medium transition-colors',
                filter === cat ? 'text-white' : 'text-white/50 hover:text-white/80'
              )}
            >
              {filter === cat && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-electric/20 to-purple/20 border border-white/20"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard max={6} className="h-full">
                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur transition-colors hover:border-white/20">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />

                      {/* Category badge */}
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                          {project.category}
                        </span>
                      </div>

                      {/* Featured star */}
                      {project.featured && (
                        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-electric/30 bg-electric/10 px-2.5 py-1 text-xs font-medium text-electric backdrop-blur">
                          <Star className="h-3 w-3 fill-electric" />
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/50">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="mt-5 flex items-center gap-3">
                        <a
                          href={project.liveUrl}
                          className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-electric to-cyan px-4 py-2 text-xs font-semibold text-white transition-transform hover:scale-105"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live Demo
                        </a>
                        <a
                          href={project.caseStudyUrl}
                          className="flex items-center gap-1.5 rounded-lg border border-white/10 px-4 py-2 text-xs font-semibold text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          Case Study
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-colors hover:bg-white/5 hover:text-white"
                          aria-label="GitHub"
                        >
                          <Github className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* Glow border on hover */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ boxShadow: 'inset 0 0 0 1px rgba(56,189,248,0.2), 0 0 40px -10px rgba(56,189,248,0.3)' }} />
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
