import React from 'react';

const STEPS = [
  {
    n: '01',
    title: 'Connect',
    body: 'Grant notification access. No rules, no setup.',
    accent: 'text-focus',
    bar: 'bg-focus/20',
  },
  {
    n: '02',
    title: 'Score',
    body: 'Every ping rated High, Medium, or Low — with the reason why.',
    accent: 'text-focus',
    bar: 'bg-focus/40',
  },
  {
    n: '03',
    title: 'Breathe',
    body: 'Urgent gets through. The rest waits in your digest.',
    accent: 'text-focus',
    bar: 'bg-focus/70',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5">
        <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-focus">
          How it works
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
          Three steps to calm.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {STEPS.map(({ n, title, body, accent, bar }) => (
            <div key={n}>
              <div className={`h-1 w-10 rounded-full ${bar}`} />
              <span className={`mt-5 block text-xs font-bold tabular-nums ${accent}`}>{n}</span>
              <h3 className="mt-1.5 font-sans text-lg font-bold tracking-tight text-ink">{title}</h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-ink/55">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
