import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Play, SlidersHorizontal, Smartphone } from 'lucide-react';
import { PLAY_STORE_URL } from '../../constants/links';

const CAPABILITIES = [
  {
    icon: SlidersHorizontal,
    title: 'It scores by your priority, not a preset',
    copy: "Every notification gets read and scored the moment it lands. What counts as urgent is learned from you — how you actually respond — not from a fixed rule or a category someone else picked.",
  },
  {
    icon: Cpu,
    title: 'It runs entirely on your device',
    copy: 'The model that reads your notifications runs on your phone. Notification content never reaches a server. That is how the app is built, not a policy we ask you to trust.',
  },
  {
    icon: Play,
    title: 'It is live on Google Play',
    copy: 'Notifybear is available now on Android. Install it, create your account, and grant notification access — it starts scoring right away. No waitlist, no early access.',
  },
  {
    icon: Smartphone,
    title: 'You can tell it you are busy',
    copy: "Heading into a meeting? Switch it on yourself, and Notifybear holds the non-urgent ones. When you're free, it hands you a summary of what came in while you were gone.",
  },
];

export default function TodaySection() {
  return (
    <section id="today" className="bg-cream" style={{ padding: '96px 32px' }}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-[560px]"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-focus">In the app today</p>
          <h2
            className="mb-5 font-display font-medium text-ink"
            style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}
          >
            What Notifybear does right now.
          </h2>
          <p className="text-[0.95rem] leading-relaxed text-ink/55">
            Everything on this page is in the app you can install today. If you're already using
            Notifybear, none of this is new — it's the same app, described for what it's actually for.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {CAPABILITIES.map(({ icon: Icon, title, copy }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              viewport={{ once: true, margin: '-60px' }}
              className="flex gap-5"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-focus">
                <Icon size={19} color="#fff" strokeWidth={2.25} />
              </span>
              <div>
                <h3 className="mb-2 text-[1.05rem] font-bold leading-snug text-ink">{title}</h3>
                <p className="text-[0.85rem] leading-relaxed text-ink/55">{copy}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-light"
          >
            Download on Play Store
          </a>
          <p className="mt-4 text-xs font-medium text-ink/40">Free on Android. Android only, for now.</p>
        </motion.div>
      </div>
    </section>
  );
}
