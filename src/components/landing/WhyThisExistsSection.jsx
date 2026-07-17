import React from 'react';
import { BellOff, BellRing } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const TRAPS = [
  {
    icon: BellRing,
    number: '01',
    title: 'Leave it on',
    copy: "Every message lands the second it arrives. A delivery update interrupts you the same way a client escalation does, and you break focus a few dozen times a day to check which one it was.",
  },
  {
    icon: BellOff,
    number: '02',
    title: 'Turn it off',
    copy: "The room goes quiet, and so does everything you actually needed to know. You come out of the meeting to a stack of unread and no idea which one was waiting on you an hour ago.",
  },
];

export default function WhyThisExistsSection() {
  return (
    <section id="why" className="relative bg-cream">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pt-24">
        <SectionHeader
          index="01"
          eyebrow="Why this exists"
          title="When your work runs on messages, both options are bad."
          sub="If a client, a patient, a trade, or an on-call page can land on your phone at any hour, you can't miss the wrong message. But you also can't do real work while being tapped on the shoulder every four minutes. Most people pick one of these and quietly pay for it."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {TRAPS.map(({ icon: Icon, number, title, copy }, i) => (
            <Reveal
              key={title}
              delay={i * 0.1}
              className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-[0_2px_8px_rgba(22,41,79,0.04),0_12px_32px_rgba(22,41,79,0.06)] transition-shadow duration-300 hover:shadow-[0_2px_8px_rgba(22,41,79,0.06),0_18px_44px_rgba(22,41,79,0.1)]"
            >
              <span className="pointer-events-none absolute right-6 top-5 font-display text-[3.2rem] font-medium leading-none text-ink/6 transition-colors duration-300 group-hover:text-bell/40">
                {number}
              </span>
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-ink/5">
                <Icon size={19} className="text-ink/60" strokeWidth={2.25} />
              </span>
              <h3 className="mb-2 text-[1.05rem] font-bold text-ink">{title}</h3>
              <p className="text-[0.85rem] leading-relaxed text-ink/55">{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Featured: the objection, answered */}
      <div className="px-5 pb-24 sm:px-8">
        <Reveal
          y={28}
          as="blockquote"
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-ink px-7 py-14 sm:px-16 sm:py-20"
        >
          <div className="hex-watermark" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-[380px] w-[380px] rounded-full"
            style={{
              background: 'radial-gradient(circle at center, rgba(245,197,24,0.18) 0%, rgba(245,197,24,0) 65%)',
              filter: 'blur(40px)',
            }}
          />

          <div className="relative mx-auto max-w-[760px] text-center">
            <span aria-hidden className="mx-auto mb-6 block h-[3px] w-12 rounded-full bg-bell" />
            <p
              className="font-display font-medium text-cream"
              style={{ fontSize: 'clamp(1.5rem, 2.9vw, 2.35rem)', lineHeight: 1.28, letterSpacing: '-0.02em' }}
            >
              You can silence your phone during a meeting. What you can't do is silence it and
              still know, the moment you're free, whether anything urgent happened.
            </p>
            <p
              className="mt-7 font-display font-medium italic text-bell"
              style={{ fontSize: 'clamp(1.15rem, 2vw, 1.6rem)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
            >
              Full silence protects your meeting. It doesn't protect you from what you missed.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
