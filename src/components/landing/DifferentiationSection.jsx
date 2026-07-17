import React from 'react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const POINTS = [
  {
    number: '01',
    label: 'A Focus Mode follows a rule you wrote.',
    copy: "You decide in advance which apps and which people get through, and the rule holds until you change it. But the message that matters today isn't always from the person you allow-listed last month. Notifybear learns what you actually treat as urgent, from your own behaviour, and keeps adjusting.",
  },
  {
    number: '02',
    label: 'Do Not Disturb just goes quiet.',
    copy: "It stops the buzzing and stops there. Everything that arrived is still sitting in one undifferentiated pile when you come back. Notifybear tells you what happened while you were away — what mattered, and why it decided that.",
  },
];

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

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeader
          index="04"
          eyebrow="The difference"
          tone="dark"
          title="Your phone already has Focus Mode. This isn't that."
          sub="Focus Modes and Do Not Disturb are useful. They're also blunt in two specific ways."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12">
          {POINTS.map(({ number, label, copy }, i) => (
            <Reveal key={label} delay={i * 0.1} className="border-t border-white/10 pt-7">
              <span className="mb-4 block font-mono text-[0.7rem] font-semibold tracking-[0.08em] text-bell/70">
                {number}
              </span>
              <h3 className="mb-3 text-[1.05rem] font-bold leading-snug text-cream">{label}</h3>
              <p className="text-[0.85rem] leading-relaxed text-cream/55">{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
