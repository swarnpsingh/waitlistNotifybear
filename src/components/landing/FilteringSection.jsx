import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp } from 'lucide-react';
import FilteringCanvas from './FilteringCanvas';

function ScoredPreview() {
  return (
    <div className="flex h-[132px] w-full flex-col justify-center gap-2.5 rounded-2xl bg-white px-4 shadow-[0_4px_16px_rgba(22,41,79,0.08)]">
      <div className="flex items-center justify-between">
        <span className="text-[0.7rem] font-semibold text-ink">Bank Alert</span>
        <span className="rounded-full bg-bell/20 px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-[0.05em] text-bell-dark">High</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
        <div className="h-full w-[86%] rounded-full bg-bell" />
      </div>
      <span className="text-[0.6rem] font-medium uppercase tracking-[0.04em] text-ink/35">86% confidence</span>
    </div>
  );
}

function ReasonPreview() {
  return (
    <div className="flex h-[132px] w-full flex-col justify-center gap-2 rounded-2xl bg-white px-4 shadow-[0_4px_16px_rgba(22,41,79,0.08)]">
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-focus/15">
          <Sparkles size={12} className="text-focus" strokeWidth={2.5} />
        </span>
        <span className="text-[0.7rem] font-semibold text-ink">Why this matters</span>
      </div>
      <p className="text-[0.68rem] leading-snug text-ink/55">
        Meeting starts in 15 min — you're the host.
      </p>
    </div>
  );
}

function LearningPreview() {
  return (
    <div className="flex h-[132px] w-full flex-col justify-center gap-2.5 rounded-2xl bg-white px-4 shadow-[0_4px_16px_rgba(22,41,79,0.08)]">
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-ink/8">
          <TrendingUp size={12} className="text-ink/60" strokeWidth={2.5} />
        </span>
        <span className="text-[0.7rem] font-semibold text-ink">Accuracy this week</span>
      </div>
      <svg viewBox="0 0 120 34" className="h-8 w-full">
        <polyline
          points="0,30 20,24 40,26 60,16 80,18 100,8 120,6"
          fill="none"
          stroke="#2F5FD6"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

const COLUMNS = [
  {
    id: 'scored',
    Preview: ScoredPreview,
    heading: 'Every ping, scored.',
    copy: 'Each notification is scored High, Medium, or Low the instant it lands — no manual sorting, no missed signal.',
  },
  {
    id: 'reason',
    Preview: ReasonPreview,
    heading: 'Context, not guesses.',
    copy: "A one-line reason rides along with every High-priority alert, so you know exactly why it surfaced.",
  },
  {
    id: 'learning',
    Preview: LearningPreview,
    heading: 'Gets sharper over time.',
    copy: 'The model adapts to how you actually respond — opens, swipes, ignores — entirely on your device.',
  },
];

export default function FilteringSection() {
  return (
    <section id="filtering" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 pt-24 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-[500px] text-left"
        >
          <h2
            className="mb-4 font-display font-medium text-ink"
            style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}
          >
            Why Notifybear knows what matters.
          </h2>
          <p className="text-[0.95rem] leading-relaxed text-ink/55">
            Notifybear connects to your notification stream, scores what matters, and tells you why — continuously, quietly, on-device.
          </p>
        </motion.div>
      </div>

      <div className="mt-14">
        <FilteringCanvas />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {COLUMNS.map(({ id, Preview, heading, copy }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <Preview />
              <h3 className="mb-2 mt-5 text-[1.05rem] font-bold text-ink">{heading}</h3>
              <p className="text-[0.85rem] leading-relaxed text-ink/55">{copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
