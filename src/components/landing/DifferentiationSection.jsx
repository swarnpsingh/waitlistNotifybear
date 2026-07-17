import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const ROWS = [
  {
    label: 'How it decides what matters',
    focusMode: 'Follows a rule you wrote in advance, for a fixed list of apps and people.',
    notifybear: "Learns what you actually treat as urgent from your own behaviour — and keeps adjusting.",
  },
  {
    label: 'When you come back',
    focusMode: 'Everything that arrived is one undifferentiated pile. You start from zero.',
    notifybear: 'A short summary of what happened while you were away — and why it mattered.',
  },
  {
    label: 'Getting set up',
    focusMode: 'Configure allow-lists per app, per contact, per hour — and keep updating them.',
    notifybear: 'Nothing to configure. Grant access once, and it starts scoring immediately.',
  },
];

function ComparisonRow({ row, index }) {
  const reducedMotion = useReducedMotion();
  return (
    <div>
      <Reveal delay={index * 0.06} y={12} className="mb-3 text-center">
        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-cream/40">
          {row.label}
        </span>
      </Reveal>
      <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr] sm:gap-0">
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 sm:rounded-r-none"
      >
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
            <X size={11} className="text-cream/40" strokeWidth={3} />
          </span>
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-cream/35">Focus Mode</span>
        </div>
        <p className="text-[0.88rem] leading-relaxed text-cream/55">{row.focusMode}</p>
      </motion.div>

      <div className="vs-divider z-10 mx-auto -my-3 sm:my-0 sm:-mx-[22px] sm:self-center">VS</div>

      <motion.div
        initial={reducedMotion ? false : { opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: index * 0.06 + 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl border border-bell/25 p-6 sm:rounded-l-none"
        style={{ background: 'linear-gradient(135deg, rgba(245,197,24,0.1) 0%, rgba(47,95,214,0.08) 100%)' }}
      >
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-bell/25">
            <Check size={11} className="text-bell" strokeWidth={3} />
          </span>
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-bell">Notifybear</span>
        </div>
        <p className="text-[0.88rem] font-medium leading-relaxed text-cream/85">{row.notifybear}</p>
      </motion.div>
      </div>
    </div>
  );
}

export default function DifferentiationSection() {
  return (
    <section id="difference" className="relative overflow-hidden bg-ink py-20 sm:py-24">
      <div className="hex-watermark" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-[-140px] h-[420px] w-[420px] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(245,197,24,0.12) 0%, rgba(245,197,24,0) 65%)',
          filter: 'blur(44px)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 h-[380px] w-[380px] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(47,95,214,0.16) 0%, rgba(47,95,214,0) 65%)',
          filter: 'blur(44px)',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeader
          index="05"
          eyebrow="The difference"
          tone="dark"
          align="center"
          title="Your phone already has Focus Mode. This isn't that."
          sub="Focus Modes and Do Not Disturb are useful. They're also blunt in the same two ways."
          className="mx-auto"
        />

        <div className="mt-16 flex flex-col gap-5 sm:gap-6">
          {ROWS.map((row, i) => (
            <ComparisonRow key={row.label} row={row} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
