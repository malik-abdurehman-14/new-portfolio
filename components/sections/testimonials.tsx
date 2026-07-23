'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';
import { SectionHeader } from '@/components/shared/section-header';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple/5 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title={
            <>
              What clients <span className="text-gradient-blue">say</span>
            </>
          }
          description="Real feedback from founders and teams I've worked with."
        />

        <div className="relative mt-16">
          <div className="relative min-h-[320px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur sm:p-12"
              >
                <Quote className="absolute right-8 top-8 h-16 w-16 text-white/5" />

                <div className="flex gap-1">
                  {Array.from({ length: testimonials[index].rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-electric text-electric" />
                  ))}
                </div>

                <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
                  &ldquo;{testimonials[index].content}&rdquo;
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={testimonials[index].avatar}
                    alt={testimonials[index].name}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-electric/30"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-display text-base font-bold text-white">
                      {testimonials[index].name}
                    </div>
                    <div className="text-sm text-white/50">
                      {testimonials[index].role}, {testimonials[index].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => paginate(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-8 bg-electric' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
