import React from 'react';

const STATS = [
  { value: '100%', label: 'runs on-device' },
  { value: '0', label: 'servers see your content' },
  { value: '<1s', label: 'to score a notification' },
];

export default function PrivacyBand() {
  return (
    <section id="privacy" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="ink-card relative overflow-hidden rounded-3xl px-6 py-14 ring-1 ring-white/10 sm:px-12 sm:py-16">
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#8FAAF0]">
            Privacy
          </span>
          <h2 className="mt-3 max-w-[20ch] font-display text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
            Your notifications never leave your phone.
          </h2>
          <p className="mt-4 max-w-[48ch] text-[0.95rem] leading-relaxed text-white/60">
            The model runs on your device. That&apos;s architecture, not a policy promise.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <span className="font-sans text-4xl font-bold tabular-nums tracking-tight text-[#8FAAF0]">
                  {value}
                </span>
                <p className="mt-1.5 text-[0.84rem] leading-snug text-white/55">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
