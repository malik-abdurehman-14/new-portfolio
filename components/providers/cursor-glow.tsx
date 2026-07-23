'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.5 });

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX - 250);
      y.set(e.clientY - 250);
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
    };
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[100] h-[500px] w-[500px] rounded-full"
      style={{
        x: springX,
        y: springY,
        background:
          'radial-gradient(circle, rgba(56,189,248,0.08) 0%, rgba(168,85,247,0.04) 40%, transparent 70%)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s',
      }}
    />
  );
}
