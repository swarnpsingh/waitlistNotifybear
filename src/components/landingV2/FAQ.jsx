import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Reveal, { Kicker } from './Reveal';

const ITEMS = [
  {
    q: 'Does anything leave my phone?',
    a: 'No. The scoring model runs entirely on-device. Notification content is never uploaded, and no account is required for it to work.',
  },
  {
    q: 'How does it learn what’s urgent to me?',
    a: 'It watches which notifications you open, dismiss, or act on — and adjusts. The more you use it, the sharper the gate gets. You can always correct a verdict.',
  },
  {
    q: 'Will I miss something important?',
    a: 'Nothing is deleted. “Needs you” breaks through immediately; everything else is grouped or held and stays one tap away in the app.',
  },
  {
    q: 'What about battery?',
    a: 'Scoring is lightweight and event-driven — it only runs the instant a notification arrives, so the impact is negligible.',
  },
  {
    q: 'Which platform is it on?',
    a: 'Notifybear is on Android today, available now on Google Play.',
  },
];

function Row({ item, open, onToggle }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-display text-lg font-medium tracking-tight text-cream sm:text-xl">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-cream/70"
        >
          <Plus size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 text-sm leading-relaxed text-cream/55 sm:text-base">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative bg-night-deep py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <Kicker>FAQ</Kicker>
          <h2
            className="mt-5 font-display font-medium leading-[1.05] text-cream"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}
          >
            Good questions.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          {ITEMS.map((item, i) => (
            <Row key={item.q} item={item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
