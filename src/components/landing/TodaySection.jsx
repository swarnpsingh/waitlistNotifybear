import React from 'react';
import { Cpu, Play, SlidersHorizontal, Smartphone } from 'lucide-react';
import { PLAY_STORE_URL } from '../../constants/links';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const CAPABILITIES = [
  {
    icon: SlidersHorizontal,
    number: '01',
    title: 'It scores by your priority, not a preset',
    copy: "Every notification gets read and scored the moment it lands. What counts as urgent is learned from you — how you actually respond — not from a fixed rule or a category someone else picked.",
  },
  {
    icon: Cpu,
    number: '02',
    title: 'It runs entirely on your device',
    copy: 'The model that reads your notifications runs on your phone. Notification content never reaches a server. That is how the app is built, not a policy we ask you to trust.',
  },
  {
    icon: Play,
    number: '03',
    title: 'It is live on Google Play',
    copy: 'Notifybear is available now on Android. Install it, create your account, and grant notification access — it starts scoring right away. No waitlist, no early access.',
  },
  {
    icon: Smartphone,
    number: '04',
    title: 'You can tell it you are busy',
    copy: "Heading into a meeting? Switch it on yourself, and Notifybear holds the non-urgent ones. When you're free, it hands you a summary of what came in while you were gone.",
  },
];

export default function TodaySection() {
  return (
    <section id="today" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="03"
          eyebrow="In the app today"
          title="What Notifybear does right now."
          sub="Everything on this page is in the app you can install today. If you're already using Notifybear, none of this is new — it's the same app, described for what it's actually for."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {CAPABILITIES.map(({ icon: Icon, number, title, copy }, i) => (
            <Reveal key={title} delay={(i % 2) * 0.1} className="border-t border-ink/10 pt-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-focus">
                  <Icon size={19} color="#fff" strokeWidth={2.25} />
                </span>
                <span className="font-mono text-[0.7rem] font-semibold tracking-[0.08em] text-ink/30">
                  {number}
                </span>
              </div>
              <h3 className="mb-2 text-[1.05rem] font-bold leading-snug text-ink">{title}</h3>
              <p className="max-w-[440px] text-[0.85rem] leading-relaxed text-ink/55">{copy}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} y={16} className="mt-14">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-light"
          >
            Download on Play Store
          </a>
          <p className="mt-4 text-xs font-medium text-ink/40">Free on Android. Android only, for now.</p>
        </Reveal>
      </div>
    </section>
  );
}
