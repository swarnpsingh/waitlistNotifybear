import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/* Single scroll-reveal primitive used across every section so the whole page
   animates with one consistent voice: a quiet rise + fade, once, on entry. */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  className,
  as = 'div',
  ...rest
}) {
  const reducedMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      initial={reducedMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}
