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
    span: 'sm:col-span-2',
    glow: 'glow-card-blue',
    iconBg: 'bg-focus',
  },
  {
    icon: Cpu,
    number: '02',
    title: 'It runs entirely on your device',
    copy: 'The model runs on your phone. Notification content never reaches a server.',
    span: 'sm:col-span-1',
    glow: 'glow-card-green',
    iconBg: 'bg-[#1f9d63]',
  },
  {
    icon: Play,
    number: '03',
    title: 'It is live on Google Play',
    copy: 'Install it, create your account, grant notification access — it starts scoring right away.',
    span: 'sm:col-span-1',
    glow: 'glow-card-yellow',
    iconBg: 'bg-bell-dark',
  },
  {
    icon: Smartphone,
    number: '04',
    title: 'You can tell it you are busy',
    copy: "Heading into a meeting? Switch it on yourself, and Notifybear holds the non-urgent ones. When you're free, it hands you a summary of what came in while you were gone.",
    span: 'sm:col-span-2',
    glow: 'glow-card-pink',
    iconBg: 'bg-[#E1306C]',
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
          sub="Everything on this page is in the app you can install today. No waitlist, no early access."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {CAPABILITIES.map(({ icon: Icon, number, title, copy, span, glow, iconBg }, i) => (
            <Reveal
              key={title}
              delay={(i % 2) * 0.08}
              className={`glow-card ${glow} ${span} rounded-3xl bg-white p-7 shadow-[0_2px_8px_rgba(22,41,79,0.05),0_10px_28px_rgba(22,41,79,0.06)]`}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconBg}`}>
                  <Icon size={19} color="#fff" strokeWidth={2.25} />
                </span>
                <span className="font-mono text-[0.7rem] font-semibold tracking-[0.08em] text-ink/25">
                  {number}
                </span>
              </div>
              <h3 className="mb-2 text-[1.1rem] font-bold leading-snug text-ink">{title}</h3>
              <p className="max-w-[440px] text-[0.85rem] leading-relaxed text-ink/55">{copy}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} y={16} className="mt-14">
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary-light">
            Download on Play Store
          </a>
          <p className="mt-4 text-xs font-medium text-ink/40">Free on Android. Android only, for now.</p>
        </Reveal>
      </div>
    </section>
  );
}
