import React from 'react';
import { Cpu, Eye, Sparkles } from 'lucide-react';
import Reveal, { Kicker } from './Reveal';
import whyCard from '../../assets/image.png';

const POINTS = [
  {
    icon: Sparkles,
    title: 'It tells you why',
    body: 'Every verdict comes with a reason — “matches your work calendar,” “you always open these.” No black box.',
  },
  {
    icon: Cpu,
    title: 'It runs on your phone',
    body: 'The model scores everything locally. No cloud round-trip, no account required to think.',
  },
  {
    icon: Eye,
    title: 'Your pings stay yours',
    body: 'Notification content never leaves the device. Privacy isn’t a setting here — it’s the architecture.',
  },
];

export default function WhyItMatters() {
  return (
    <section id="why" className="relative overflow-hidden bg-night py-28 lg:py-36">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* copy */}
        <div>
          <Reveal>
            <Kicker>Why it matters</Kicker>
            <h2
              className="mt-5 font-display font-medium leading-[1.05] text-cream"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.03em' }}
            >
              Not a mute button. <br />
              A <em className="text-bell">reason</em> for every call.
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col gap-7">
            {POINTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.08} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-bell/12 text-bell">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium tracking-tight text-cream">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-cream/55">{p.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* visual — real app "why this matters" card */}
        <Reveal delay={0.1} className="relative flex justify-center">
          <div className="pointer-events-none absolute inset-0 mx-auto my-auto h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(245,197,24,0.16),transparent_70%)] blur-3xl" />
          <div className="relative animate-float-y rounded-3xl border border-white/10 bg-night-deep p-2 shadow-[0_40px_100px_-30px_rgba(4,8,18,0.8)]">
            <img
              src={whyCard}
              alt="Notifybear showing why a Gmail notification matters, with a High Priority tag and an explanation."
              className="w-full max-w-[420px] rounded-2xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
