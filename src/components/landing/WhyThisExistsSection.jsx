import React, { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { BellOff, BellRing } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const TRAPS = [
  {
    icon: BellRing,
    number: '01',
    title: 'Leave it on',
    copy: "Every message lands the second it arrives. A delivery update interrupts you the same way a client escalation does, and you break focus a few dozen times a day to check which one it was.",
    accent: '#E1306C',
    accentSoft: 'rgba(225,48,108,0.12)',
  },
  {
    icon: BellOff,
    number: '02',
    title: 'Turn it off',
    copy: "The room goes quiet, and so does everything you actually needed to know. You come out of the meeting to a stack of unread and no idea which one was waiting on you an hour ago.",
    accent: '#2F5FD6',
    accentSoft: 'rgba(47,95,214,0.12)',
  },
];

const CHATTER = ['WhatsApp', 'Slack', 'Gmail', 'Calendar', 'Bank', 'X', 'Instagram'];

/* Trap 1 visual: a jittering stack of colored bars — the "everything at once" overload. */
function OverloadVisual({ active }) {
  const reducedMotion = useReducedMotion();
  return (
    <div className="relative flex h-[220px] w-full max-w-[280px] flex-col justify-center gap-2">
      {CHATTER.map((label, i) => (
        <motion.div
          key={label}
          className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[0_4px_14px_rgba(22,41,79,0.08)]"
          style={{ marginLeft: (i % 3) * 10 }}
          animate={
            active && !reducedMotion
              ? { x: [0, i % 2 === 0 ? 2 : -2, 0], rotate: [0, i % 2 === 0 ? 0.6 : -0.6, 0] }
              : {}
          }
          transition={{ duration: 0.5 + (i % 3) * 0.15, repeat: active ? Infinity : 0, ease: 'easeInOut' }}
        >
          <span className="h-2 w-2 flex-shrink-0 rounded-full" style={{ background: '#E1306C' }} />
          <span className="text-[0.7rem] font-semibold text-ink/60">{label}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* Trap 2 visual: one muted card, everything else collapsed into a silent stack behind it. */
function SilenceVisual({ active }) {
  return (
    <div className="relative flex h-[220px] w-full max-w-[280px] items-center justify-center">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-[220px] rounded-2xl border border-ink/8 bg-white/60"
          style={{ height: 64, zIndex: 3 - i }}
          initial={false}
          animate={{
            y: active ? i * 10 : i * 6,
            scale: 1 - i * 0.05,
            opacity: 1 - i * 0.28,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
      <div className="relative z-10 flex w-[220px] flex-col items-center gap-1.5 rounded-2xl bg-ink px-5 py-4 text-center">
        <span className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-cream/40">
          Do Not Disturb
        </span>
        <span className="font-display text-lg font-medium text-cream">Silence.</span>
        <span className="text-[0.68rem] text-cream/45">14 unread, sorted by nothing</span>
      </div>
    </div>
  );
}

function TrapPanel({ trap, index, onActive }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-40% 0px -40% 0px' });
  const Icon = trap.icon;

  React.useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <div ref={ref} className="flex min-h-[62vh] items-center py-10">
      <Reveal
        y={28}
        className="grid w-full grid-cols-1 items-center gap-8 rounded-[32px] p-8 transition-colors duration-500 sm:grid-cols-2 sm:p-10"
        style={{ background: inView ? trap.accentSoft : 'transparent' }}
      >
        <div className="order-2 flex justify-center sm:order-1">
          {index === 0 ? <OverloadVisual active={inView} /> : <SilenceVisual active={inView} />}
        </div>
        <div className="order-1 sm:order-2">
          <span
            className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-500"
            style={{ background: inView ? trap.accent : 'rgba(22,41,79,0.06)' }}
          >
            <Icon size={19} className={inView ? 'text-white' : 'text-ink/50'} strokeWidth={2.25} />
          </span>
          <p className="mb-2 font-mono text-[0.7rem] font-semibold tracking-[0.08em] text-ink/35">
            {trap.number}
          </p>
          <h3 className="mb-3 text-[1.3rem] font-bold leading-snug text-ink">{trap.title}</h3>
          <p className="max-w-[380px] text-[0.9rem] leading-relaxed text-ink/60">{trap.copy}</p>
        </div>
      </Reveal>
    </div>
  );
}

export default function WhyThisExistsSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="why" className="relative bg-cream">
      <div className="mx-auto max-w-6xl px-5 pt-20 sm:px-8 sm:pt-24 lg:grid lg:grid-cols-[320px_1fr] lg:gap-12">
        {/* Sticky left rail */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeader
            index="01"
            eyebrow="Why this exists"
            title="When your work runs on messages, both options are bad."
            sub="If a client, a patient, a trade, or an on-call page can land on your phone at any hour, you can't miss the wrong message. But you also can't do real work while being tapped on the shoulder every four minutes."
          />
          <div className="mt-10 hidden flex-col gap-3 lg:flex">
            {TRAPS.map((trap, i) => (
              <button
                key={trap.title}
                type="button"
                onClick={() => {
                  document.getElementById(`trap-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="flex items-center gap-3 text-left"
              >
                <span
                  className="h-2 w-2 flex-shrink-0 rounded-full transition-all duration-300"
                  style={{
                    background: active === i ? trap.accent : 'rgba(22,41,79,0.15)',
                    transform: active === i ? 'scale(1.4)' : 'scale(1)',
                  }}
                />
                <span
                  className="text-xs font-semibold tracking-tight transition-colors duration-300"
                  style={{ color: active === i ? '#16294F' : 'rgba(22,41,79,0.35)' }}
                >
                  {trap.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Scroll-linked trap panels */}
        <div className="mt-8 lg:mt-0">
          {TRAPS.map((trap, i) => (
            <div key={trap.title} id={`trap-${i}`}>
              <TrapPanel trap={trap} index={i} onActive={setActive} />
            </div>
          ))}
        </div>
      </div>

      {/* Featured: the objection, answered */}
      <div className="px-5 pb-24 pt-4 sm:px-8">
        <Reveal
          y={28}
          as="blockquote"
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-ink px-7 py-14 sm:px-16 sm:py-20"
        >
          <div className="hex-watermark" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-[380px] w-[380px] rounded-full"
            style={{
              background: 'radial-gradient(circle at center, rgba(245,197,24,0.18) 0%, rgba(245,197,24,0) 65%)',
              filter: 'blur(40px)',
            }}
          />

          <div className="relative mx-auto max-w-[760px] text-center">
            <span aria-hidden className="mx-auto mb-6 block h-[3px] w-12 rounded-full bg-bell" />
            <p
              className="font-display font-medium text-cream"
              style={{ fontSize: 'clamp(1.5rem, 2.9vw, 2.35rem)', lineHeight: 1.28, letterSpacing: '-0.02em' }}
            >
              You can silence your phone during a meeting. What you can't do is silence it and
              still know, the moment you're free, whether anything urgent happened.
            </p>
            <p
              className="mt-7 font-display font-medium italic text-bell"
              style={{ fontSize: 'clamp(1.15rem, 2vw, 1.6rem)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
            >
              Full silence protects your meeting. It doesn't protect you from what you missed.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
