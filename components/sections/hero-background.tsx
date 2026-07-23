'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Animated neural network / floating orbs hero background using canvas
export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const bgX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const bgY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; c: string }[] = [];
    const colors = ['#38bdf8', '#22d3ee', '#a855f7', '#818cf8'];
    const count = 60;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 0.5,
        c: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.c;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid bg-grid-fade" />

      {/* Gradient blobs */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-electric/20 blur-[120px] animate-blob"
      />
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-purple/20 blur-[120px] animate-blob"
      />
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-cyan/15 blur-[100px] animate-blob"
      />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-60" />

      {/* Animated rings */}
      <div className="absolute right-[8%] top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="relative h-[420px] w-[420px]">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-white/5"
              style={{ scale: 1 - i * 0.18 }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 40 + i * 10, repeat: Infinity, ease: 'linear' }}
            >
              <div
                className="absolute h-2 w-2 rounded-full"
                style={{
                  top: '-4px',
                  left: '50%',
                  background: i === 0 ? '#38bdf8' : i === 1 ? '#22d3ee' : i === 2 ? '#a855f7' : '#818cf8',
                  boxShadow: `0 0 20px ${i === 0 ? '#38bdf8' : i === 1 ? '#22d3ee' : i === 2 ? '#a855f7' : '#818cf8'}`,
                }}
              />
            </motion.div>
          ))}
          {/* Center glow */}
          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-electric/40 to-purple/40 blur-2xl" />
          <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-electric to-cyan opacity-80 blur-xl" />
        </div>
      </div>

      {/* Light beams */}
      <div className="absolute left-1/2 top-0 h-[600px] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-electric/20 to-transparent" />
      <div className="absolute left-1/4 top-0 h-[400px] w-px bg-gradient-to-b from-transparent via-purple/15 to-transparent" />
    </div>
  );
}
