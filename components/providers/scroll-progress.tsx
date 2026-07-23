'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[90] h-[3px] origin-left"
      style={{
        scaleX,
        background:
          'linear-gradient(90deg, #38bdf8 0%, #22d3ee 35%, #a855f7 70%, #818cf8 100%)',
      }}
    />
  );
}
