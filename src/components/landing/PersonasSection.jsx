import React from 'react';
import { Briefcase, HeartPulse, Server, TrendingUp } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const PERSONAS = [
  {
    icon: Server,
    role: 'On-call engineer',
    scenario: 'A PagerDuty page cuts through instantly. A Slack meme about the outage waits.',
    glow: 'glow-card-blue',
    iconBg: 'bg-focus',
  },
  {
    icon: Briefcase,
    role: 'Founder & operator',
    scenario: 'An investor reply surfaces right away. The newsletter blast doesn’t wake you at 11pm.',
    glow: 'glow-card-yellow',
    iconBg: 'bg-bell-dark',
  },
  {
    icon: HeartPulse,
    role: 'On-call clinician',
    scenario: 'A patient callback reaches you immediately. Everything else waits until rounds are over.',
    glow: 'glow-card-green',
    iconBg: 'bg-[#1f9d63]',
  },
  {
    icon: TrendingUp,
    role: 'Trader',
    scenario: 'A margin call gets through the second it fires. Market noise is held for later.',
    glow: 'glow-card-pink',
    iconBg: 'bg-[#E1306C]',
  },
];

export default function PersonasSection() {
  return (
    <section id="who-its-for" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="04"
          eyebrow="Who it's for"
          align="center"
          title="Built for the hours when the wrong ping costs you something."
          sub="Different jobs, same problem: the message that matters is buried in the ones that don't."
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PERSONAS.map(({ icon: Icon, role, scenario, glow, iconBg }, i) => (
            <Reveal
              key={role}
              delay={i * 0.08}
              className={`glow-card ${glow} rounded-3xl bg-white p-6 shadow-[0_2px_8px_rgba(22,41,79,0.05),0_10px_28px_rgba(22,41,79,0.06)]`}
            >
              <span className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${iconBg}`}>
                <Icon size={19} color="#fff" strokeWidth={2.25} />
              </span>
              <h3 className="mb-2 text-[1rem] font-bold text-ink">{role}</h3>
              <p className="text-[0.82rem] leading-relaxed text-ink/55">{scenario}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
