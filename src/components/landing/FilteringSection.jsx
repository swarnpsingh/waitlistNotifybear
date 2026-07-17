import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Calendar,
  Landmark,
  Mail,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Youtube,
} from 'lucide-react';
import mascot from '../../assets/icon-mascot.png';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const INCOMING = [
  { id: 'bank', icon: Landmark, bg: '#1f7a4d', text: 'Debit flagged as unusual' },
  { id: 'calendar', icon: Calendar, bg: '#2F5FD6', text: 'Standup in 15 min' },
  { id: 'whatsapp', icon: MessageCircle, bg: '#25D366', text: 'Mom: dinner Sunday?' },
  { id: 'gmail', icon: Mail, bg: '#EA4335', text: 'Flash sale — 40% off' },
  { id: 'youtube', icon: Youtube, bg: '#FF0000', text: 'New upload for you' },
];

const LANES = [
  { label: 'High', count: 2, width: '86%', barClass: 'bg-bell', chipClass: 'bg-bell/16 text-bell' },
  { label: 'Medium', count: 1, width: '42%', barClass: 'bg-focus-light', chipClass: 'bg-focus/25 text-[#8FAAF0]' },
  { label: 'Low', count: 41, width: '16%', barClass: 'bg-white/25', chipClass: 'bg-white/10 text-cream/45' },
];

/* The pipeline: pings drift in on the left, the core pulses in the middle,
   and the right side shows where they end up. Everything reveals on scroll;
   the only perpetual motion is the quiet pulse of the core. */
function FilterFlow() {
  const reducedMotion = useReducedMotion();

  return (
    <Reveal y={32} className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-ink px-6 py-10 sm:px-10 sm:py-12">
      <div className="hex-watermark" />
      <div className="card-glow-base" />

      <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-6">
        {/* Incoming */}
        <div>
          <p className="mb-4 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-cream/35">
            Everything that lands
          </p>
          <div className="space-y-2.5">
            {INCOMING.map(({ id, icon: Icon, bg, text }, i) => (
              <motion.div
                key={id}
                initial={reducedMotion ? false : { opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: 0.15 + i * 0.09, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2.5 rounded-xl bg-white/6 px-3 py-2 ring-1 ring-white/8"
              >
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-[7px]" style={{ background: bg }}>
                  <Icon size={12} color="#fff" strokeWidth={2.25} />
                </span>
                <span className="truncate text-[0.75rem] font-medium text-cream/75">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative">
            {!reducedMotion && (
              <>
                <span className="core-ring" />
                <span className="core-ring core-ring-delay" />
              </>
            )}
            <motion.div
              initial={reducedMotion ? false : { scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.4, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-20 w-20 items-center justify-center rounded-[26px] bg-ink-dark ring-1 ring-white/15"
              style={{ boxShadow: '0 0 50px 12px rgba(245,197,24,0.22)' }}
            >
              <img src={mascot} alt="" className="h-11 w-11 object-contain" />
            </motion.div>
          </div>
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-cream/40">
            Scored on-device
          </span>
        </div>

        {/* Prioritized */}
        <div>
          <p className="mb-4 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-cream/35 md:text-right">
            What you actually see
          </p>
          <div className="space-y-4">
            {LANES.map(({ label, count, width, barClass, chipClass }, i) => (
              <motion.div
                key={label}
                initial={reducedMotion ? false : { opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: 0.55 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-1.5 flex items-center justify-between">
                  <span className={`rounded-full px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-[0.07em] ${chipClass}`}>
                    {label}
                  </span>
                  <span className="text-[0.68rem] font-semibold text-cream/45">
                    {count} {count === 1 ? 'ping' : 'pings'}
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
                  <motion.div
                    initial={reducedMotion ? false : { width: 0 }}
                    whileInView={{ width }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ delay: 0.7 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className={`h-full rounded-full ${barClass}`}
                    style={reducedMotion ? { width } : undefined}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-4 text-[0.72rem] leading-relaxed text-cream/40 md:text-right">
            Low stays available — it just stops interrupting you.
          </p>
        </div>
      </div>
    </Reveal>
  );
}

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
      <div className="mx-auto max-w-6xl px-5 pt-8 sm:px-8 sm:pt-12">
        <SectionHeader
          index="02"
          eyebrow="How it decides"
          title="Why Notifybear knows what matters."
          sub="Notifybear connects to your notification stream, scores what matters, and tells you why — continuously, quietly, on-device."
        />
      </div>

      <div className="mt-14 px-5 sm:px-8">
        <FilterFlow />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {COLUMNS.map(({ id, Preview, heading, copy }, i) => (
            <Reveal key={id} delay={i * 0.1}>
              <Preview />
              <h3 className="mb-2 mt-5 text-[1.05rem] font-bold text-ink">{heading}</h3>
              <p className="text-[0.85rem] leading-relaxed text-ink/55">{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
