import React from 'react';
import { BellRing, Clock, Archive } from 'lucide-react';
import Reveal, { Kicker } from './Reveal';

const BUCKETS = [
  {
    icon: BellRing,
    tag: 'Needs you',
    accent: '#F5C518',
    glow: 'rgba(245,197,24,0.14)',
    title: 'Breaks through instantly',
    body: 'The standup you host. A flagged charge. Mom, when it actually matters. Scored high, delivered now.',
    examples: ['Standup in 15 min', 'Unusual charge · $84'],
  },
  {
    icon: Clock,
    tag: 'Can wait',
    accent: '#5C82E0',
    glow: 'rgba(92,130,224,0.14)',
    title: 'Grouped for later',
    body: 'Useful, not urgent. Held back and handed to you in a calm digest instead of buzzing mid-focus.',
    examples: ['Weekend plans?', '3 app updates'],
  },
  {
    icon: Archive,
    tag: 'Held',
    accent: '#8A93A6',
    glow: 'rgba(138,147,166,0.10)',
    title: 'Silenced quietly',
    body: 'Promos, streaks, noise. Kept out of your way — still there if you ever go looking.',
    examples: ['Flash sale · 40% off', 'You have a new badge'],
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden bg-night-deep py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Kicker>How it works</Kicker>
          <h2
            className="mt-5 font-display font-medium leading-[1.05] text-cream"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.03em' }}
          >
            Three doors. Every ping goes through <em className="text-bell">one.</em>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/55 sm:text-lg">
            The gatekeeper scores each notification against how you actually react — then routes it.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {BUCKETS.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.tag} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-night-soft/60 p-7 transition-colors duration-300 hover:border-white/20">
                  <div
                    className="pointer-events-none absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full opacity-70 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: `radial-gradient(circle, ${b.glow}, transparent 70%)` }}
                  />
                  <div className="relative">
                    <span
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: `${b.accent}1f`, color: b.accent }}
                    >
                      <Icon size={20} strokeWidth={2} />
                    </span>
                    <p
                      className="mt-5 text-[0.7rem] font-bold uppercase tracking-[0.14em]"
                      style={{ color: b.accent }}
                    >
                      {b.tag}
                    </p>
                    <h3 className="mt-1.5 font-display text-2xl font-medium tracking-tight text-cream">
                      {b.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream/55">{b.body}</p>

                    <div className="mt-6 flex flex-col gap-2 border-t border-white/8 pt-5">
                      {b.examples.map((ex) => (
                        <div key={ex} className="flex items-center gap-2.5">
                          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: b.accent }} />
                          <span className="text-[0.82rem] text-cream/45">{ex}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
