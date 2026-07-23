'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faqItems } from '@/lib/data/faq';
import { SectionHeader } from '@/components/shared/section-header';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [open, setOpen] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Frequently asked <span className="text-gradient-cyan">questions</span>
            </>
          }
          description="Helpful answers about my development services, project process, timelines, pricing, and ongoing support."
        />

        <div className="mt-12 flex flex-col gap-3">
          {faqItems.map((item) => {
            const isOpen = open === item.id;
            return (
              <div
                key={item.id}
                className={cn(
                  'overflow-hidden rounded-2xl border bg-white/[0.02] backdrop-blur transition-colors',
                  isOpen ? 'border-white/20' : 'border-white/10'
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display text-base font-semibold text-white">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors',
                      isOpen ? 'border-electric/30 bg-electric/10 text-electric' : 'border-white/10 text-white/50'
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-white/50">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
