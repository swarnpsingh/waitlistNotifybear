import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: '100%', label: 'On-device processing — nothing leaves your phone' },
  { value: '<60s', label: 'From install to your first prioritized notification' },
  { value: '3', label: 'Priority tiers replace an endless, noisy feed' },
  { value: '0', label: 'Rules to write or categories to configure' },
];

export default function ProofSection() {
  return (
    <section id="proof" className="relative overflow-hidden bg-ink" style={{ padding: '96px 32px' }}>
      <div className="hex-watermark" />
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-bell">Built different</p>
          <h2 className="font-display font-medium text-cream" style={{ fontSize: 'clamp(2rem, 3.6vw, 2.75rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            The numbers behind the calm.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              viewport={{ once: true, margin: '-60px' }}
              className="text-center lg:text-left"
            >
              <p className="font-display font-medium text-bell" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1 }}>
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-snug text-cream/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
