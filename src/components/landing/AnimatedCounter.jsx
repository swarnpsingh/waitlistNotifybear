import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

/* Counts up from 0 to `value` once the element enters the viewport. Pure
   rAF-driven number, no motion values needed since we render text each frame. */
export default function AnimatedCounter({ value, duration = 1.4, suffix = '', prefix = '', decimals = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(reducedMotion ? value : 0);

  useEffect(() => {
    if (!isInView || reducedMotion) return;
    let raf;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value, duration, reducedMotion]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
