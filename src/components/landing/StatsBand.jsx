import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import Reveal from './Reveal';
import TextReveal from './TextReveal';

const STATS = [
  { value: 41, suffix: '', label: 'notifications filtered on an average day' },
  { value: 3, suffix: '', label: 'that actually needed you' },
  { value: 92, suffix: '%', label: 'priority accuracy after one week' },
  { value: 24, suffix: '/7', label: 'scoring — offline, always on' },
];

/* Full-bleed navy break between the marquee and the "why this exists" argument.
   Pure statement of scale before the product story gets nuanced. */
export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
      <div className="hex-watermark" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.14) 0%, rgba(245,197,24,0) 68%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <TextReveal
          as="h2"
          text="The math behind the calm."
          className="mx-auto mb-14 max-w-lg text-center font-display font-medium text-cream"
          style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)', letterSpacing: '-0.02em' }}
        />

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 sm:gap-x-4">
          {STATS.map(({ value, suffix, label }, i) => (
            <Reveal key={label} delay={i * 0.08} className="relative text-center sm:border-l sm:border-white/10 sm:first:border-l-0">
              <div className="font-display text-4xl font-semibold text-bell sm:text-5xl">
                <AnimatedCounter value={value} suffix={suffix} />
              </div>
              <p className="mx-auto mt-3 max-w-[160px] text-[0.78rem] leading-snug text-cream/50">
                {label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
