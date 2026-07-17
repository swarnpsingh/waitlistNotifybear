import React from 'react';
import Reveal from './Reveal';

/* Consistent editorial section opener: numbered eyebrow rule, serif title, sub.
   `tone` switches between the cream and ink backgrounds. */
export default function SectionHeader({
  index,
  eyebrow,
  title,
  sub,
  tone = 'light',
  align = 'left',
  className = '',
}) {
  const dark = tone === 'dark';
  const centered = align === 'center';

  return (
    <Reveal className={`${centered ? 'mx-auto text-center' : ''} max-w-[640px] ${className}`}>
      <div className={`mb-5 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        {index && (
          <span
            className={`font-mono text-[0.7rem] font-semibold tracking-[0.08em] ${
              dark ? 'text-bell' : 'text-focus'
            }`}
          >
            {index}
          </span>
        )}
        <span className={`h-px w-8 ${dark ? 'bg-bell/60' : 'bg-focus/50'}`} aria-hidden />
        <p
          className={`text-xs font-bold uppercase tracking-[0.18em] ${
            dark ? 'text-bell' : 'text-focus'
          }`}
        >
          {eyebrow}
        </p>
      </div>

      <h2
        className={`font-display font-medium ${dark ? 'text-cream' : 'text-ink'}`}
        style={{ fontSize: 'clamp(2rem, 3.6vw, 2.9rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}
      >
        {title}
      </h2>

      {sub && (
        <p
          className={`mt-5 text-[0.95rem] leading-relaxed ${
            dark ? 'text-cream/55' : 'text-ink/55'
          } ${centered ? 'mx-auto max-w-[480px]' : 'max-w-[560px]'}`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}
