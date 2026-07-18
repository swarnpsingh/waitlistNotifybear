import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

/** Scroll-triggered fade/slide-in. Wrap any block; children stagger optionally. */
export default function Reveal({ children, delay = 0, y = 28, className = '', as = 'div' }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </MotionTag>
  );
}

/** Small heading kicker used across sections. */
export function Kicker({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-bell">
      <span className="h-px w-6 bg-bell/50" />
      {children}
    </span>
  );
}
