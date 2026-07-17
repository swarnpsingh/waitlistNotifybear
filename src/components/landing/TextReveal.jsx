import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/* Splits text into words and reveals them left-to-right as the block scrolls
   into view — used for the handful of headline/manifesto lines that should
   feel spoken rather than just faded in. */
export default function TextReveal({ text, className, wordClassName, delay = 0, as = 'p', style }) {
  const reducedMotion = useReducedMotion();
  const Component = motion[as] ?? motion.p;
  const words = text.split(' ');

  if (reducedMotion) {
    const Plain = as;
    return <Plain className={className} style={style}>{text}</Plain>;
  }

  return (
    <Component className={className} style={style} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden" aria-hidden="true">
          <motion.span
            className={`inline-block ${wordClassName ?? ''}`}
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              delay: delay + i * 0.035,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
