import React from 'react';
import { motion } from 'framer-motion';

const POINTS = [
  {
    label: 'A Focus Mode follows a rule you wrote.',
    copy: "You decide in advance which apps and which people get through, and the rule holds until you change it. But the message that matters today isn't always from the person you allow-listed last month. Notifybear learns what you actually treat as urgent, from your own behaviour, and keeps adjusting.",
  },
  {
    label: 'Do Not Disturb just goes quiet.',
    copy: "It stops the buzzing and stops there. Everything that arrived is still sitting in one undifferentiated pile when you come back. Notifybear tells you what happened while you were away — what mattered, and why it decided that.",
  },
];

export default function DifferentiationSection() {
  return (
    <section id="difference" className="relative overflow-hidden bg-ink" style={{ padding: '96px 32px' }}>
      <div className="hex-watermark" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-[620px]"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-bell">The difference</p>
          <h2
            className="mb-5 font-display font-medium text-cream"
            style={{ fontSize: 'clamp(2rem, 3.6vw, 2.75rem)', lineHeight: 1.12, letterSpacing: '-0.02em' }}
          >
            Your phone already has Focus Mode. This isn't that.
          </h2>
          <p className="text-[0.95rem] leading-relaxed text-cream/55">
            Focus Modes and Do Not Disturb are useful. They're also blunt in two specific ways.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12">
          {POINTS.map(({ label, copy }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: '-60px' }}
              className="border-t border-white/10 pt-7"
            >
              <h3 className="mb-3 text-[1.05rem] font-bold leading-snug text-cream">{label}</h3>
              <p className="text-[0.85rem] leading-relaxed text-cream/55">{copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
