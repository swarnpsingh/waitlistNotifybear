import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Cpu, ShieldCheck } from 'lucide-react';
import { PLAY_STORE_URL } from '../../constants/links';
import BackgroundScene from './BackgroundScene';

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const item = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
      };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-night-deep px-5 py-32 text-center"
    >
      <BackgroundScene />

      {/* readability veil */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(7,11,20,0.55),transparent_75%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex w-full max-w-3xl flex-col items-center"
      >
        <motion.div
          variants={item}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] py-1.5 pl-2 pr-4 backdrop-blur-sm"
        >
          <span className="rounded-full bg-bell px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.08em] text-ink">
            Notifybear
          </span>
          <span className="text-xs font-medium text-cream/70">On-device AI · Android</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display font-medium leading-[0.98] text-cream"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', letterSpacing: '-0.04em' }}
        >
          AI Attention
          <br />
          <em className="text-bell">Gatekeeper</em>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-[540px] text-base leading-relaxed text-cream/60 sm:text-lg"
        >
          Every notification gets scored by what <span className="font-medium text-cream/90">you</span> actually
          treat as urgent — held, delayed, or let through, with a reason. Entirely on your phone.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-11 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-bell px-8 py-4 text-sm font-bold text-ink transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-10px_rgba(245,197,24,0.55)]"
          >
            Get it on Google Play
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#how"
            className="inline-flex items-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-cream/80 transition-colors hover:bg-white/5"
          >
            See how it works
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
        >
          {[
            { icon: Cpu, label: '100% on-device' },
            { icon: ShieldCheck, label: 'Content never leaves your phone' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-cream/55">
              <Icon size={15} strokeWidth={2} className="text-bell" />
              <span className="text-xs font-medium tracking-tight">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
