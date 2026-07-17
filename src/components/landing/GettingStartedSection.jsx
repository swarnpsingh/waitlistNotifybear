import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, ShieldCheck, Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { PLAY_STORE_URL } from '../../constants/links';

function AccountSetupMockup() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden bg-ink px-8 pb-7 pt-9">
      <div className="hex-watermark" />
      <div className="card-glow-base" />
      <div className="relative z-10 flex w-full max-w-[300px] flex-col gap-3 rounded-[20px] bg-white p-5 shadow-[0_12px_32px_rgba(0,0,0,0.28)]">
        <div className="flex items-center gap-3 border-b border-ink/5 pb-3">
          <div
            className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full text-[0.85rem] font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #5C82E0 0%, #2F5FD6 100%)' }}
          >
            JE
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[0.875rem] font-bold tracking-tight text-[#111]">Jane Example</span>
            <span className="text-xs text-[#888]">jane@example.com</span>
          </div>
        </div>
        {['Username', 'Password'].map((label) => (
          <div
            key={label}
            className="flex items-center gap-2.5 rounded-xl border border-[#ebebeb] bg-[#fafafa] px-3.5 py-2.5"
          >
            <span className="h-2 w-2 rounded-full bg-focus/40" aria-hidden />
            <span className="text-[0.85rem] font-medium text-[#333]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const STEPS = [
  {
    number: 1,
    icon: Download,
    title: 'Download the app',
    description: 'Open Google Play and install Notifybear. It takes under a minute.',
    mockup: null,
    color: '#2F5FD6',
    glow: 'glow-card-blue',
  },
  {
    number: 2,
    icon: ShieldCheck,
    title: 'Set up your account',
    description: 'Create your account, then grant notification access so Notifybear can start reading and scoring what comes in.',
    mockup: <AccountSetupMockup />,
    color: '#1f9d63',
    glow: 'glow-card-green',
  },
  {
    number: 3,
    icon: Sparkles,
    title: 'Tame your notifications',
    description: 'Let Notifybear filter, prioritise and surface what matters most.',
    mockup: null,
    color: '#D9A80C',
    glow: 'glow-card-yellow',
  },
];

function StepCard({ step, index }) {
  const Icon = step.icon;
  return (
    <Reveal delay={index * 0.1} y={36} className="flex w-full items-start">
      {/* Step number bubble on the timeline */}
      <div className="relative z-10 mr-7 mt-0.5 flex flex-shrink-0 flex-col items-center">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full text-[0.85rem] font-semibold text-white ring-4 ring-cream"
          style={{ background: step.color }}
        >
          {step.number}
        </div>
      </div>

      {/* Card */}
      <div className={`glow-card ${step.glow} mb-2 flex-1 overflow-hidden rounded-3xl bg-white shadow-[0_2px_8px_rgba(22,41,79,0.05),0_10px_28px_rgba(22,41,79,0.06)]`}>
        {step.mockup}
        <div className="px-7 pb-7 pt-6">
          <div className="mb-2 flex items-center gap-2.5">
            <Icon size={16} strokeWidth={2.25} style={{ color: step.color }} />
            <h3 className="text-[1.15rem] font-semibold tracking-tight text-ink">{step.title}</h3>
          </div>
          <p className="text-[0.875rem] leading-relaxed text-ink/55">{step.description}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function GettingStartedSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={sectionRef} id="getting-started" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(280px,340px)_1fr] lg:gap-16">
        {/* Left — sticky heading */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeader
            index="06"
            eyebrow="Getting started"
            title={
              <>
                Get started in 3<br />simple steps.
              </>
            }
            sub="Install it, and it starts deciding what reaches you. There are no rules to write."
          />
          <Reveal delay={0.15} y={12} className="mt-8 hidden lg:block">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-ink hover:bg-ink/5"
            >
              Get the app
            </a>
          </Reveal>
        </div>

        {/* Right — timeline steps with scroll-driven progress line */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute bottom-9 left-[17px] top-9 w-0.5 border-l-2 border-dashed border-focus/30"
          />
          <div aria-hidden className="absolute bottom-9 left-[17px] top-9 w-0.5 overflow-hidden">
            <motion.div className="w-full bg-focus" style={{ height: lineHeight, originY: 0 }} />
          </div>

          <div className="relative z-10 flex flex-col gap-6">
            {STEPS.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
