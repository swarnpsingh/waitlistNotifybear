import React from 'react';
import {
  Calendar,
  Instagram,
  Landmark,
  Linkedin,
  Mail,
  MessageCircle,
  Music,
  ShoppingBag,
  Slack,
  Twitter,
  Youtube,
  Zap,
} from 'lucide-react';
import { PLAY_STORE_URL } from '../../constants/links';

/* Ported from 21st.dev "IntegrationHero" (id 5611, by ruixen.ui) and re-themed
   to the Notifybear brand: cream/ink palette, serif headline, real app icons
   in brand colors, and our button. Structure is kept faithful to the original —
   eyebrow pill, headline, sub, CTA, two counter-scrolling icon rows, edge fades,
   dot-grid backdrop. shadcn Button / styled-jsx / flaticon URLs were replaced
   with in-repo equivalents (lucide icons + index.css keyframes). */

const ICONS_ROW1 = [
  { icon: MessageCircle, bg: '#25D366' },
  { icon: Mail, bg: '#EA4335' },
  { icon: Slack, bg: '#611F69' },
  { icon: Calendar, bg: '#2F5FD6' },
  { icon: Landmark, bg: '#1f7a4d' },
  { icon: Linkedin, bg: '#0A66C2' },
  { icon: Instagram, bg: '#E1306C' },
];

const ICONS_ROW2 = [
  { icon: Youtube, bg: '#FF0000' },
  { icon: Twitter, bg: '#16294F' },
  { icon: ShoppingBag, bg: '#FC8019' },
  { icon: Music, bg: '#1DB954' },
  { icon: Zap, bg: '#D9A80C' },
  { icon: Mail, bg: '#EA4335' },
  { icon: Calendar, bg: '#2F5FD6' },
];

const repeatedIcons = (icons, repeat = 4) =>
  Array.from({ length: repeat }).flatMap(() => icons);

function IconChip({ icon: Icon, bg }) {
  return (
    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(22,41,79,0.1)] ring-1 ring-ink/5">
      <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: bg }}>
        <Icon size={20} color="#fff" strokeWidth={2.25} />
      </span>
    </div>
  );
}

export default function IntegrationHeroBrand() {
  return (
    <section className="relative overflow-hidden bg-cream py-32">
      {/* Brand dot-grid background */}
      <div aria-hidden className="dot-grid-ink absolute inset-0" />
      {/* Ambient brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.16) 0%, rgba(245,197,24,0) 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-3 py-1.5 text-xs font-semibold text-ink backdrop-blur-sm">
          <Zap size={13} className="text-bell-dark" strokeWidth={2.5} />
          Works with every app that pings you
        </span>
        <h1
          className="font-display font-medium leading-[1.02] text-ink"
          style={{ fontSize: 'clamp(2.6rem, 5vw, 4.4rem)', letterSpacing: '-0.035em' }}
        >
          It reads every notification,
          <br />
          <em className="text-focus">so you don't have to.</em>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/60">
          Notifybear connects to the apps already on your phone, scores what matters, and
          surfaces only the ones that need you — on-device.
        </p>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-light mt-8"
        >
          Download on Play Store
        </a>

        {/* Counter-scrolling icon carousel */}
        <div className="relative mt-14 overflow-hidden pb-2">
          <div className="hero-scroll-left flex gap-10 whitespace-nowrap">
            {repeatedIcons(ICONS_ROW1, 4).map((item, i) => (
              <IconChip key={`r1-${i}`} {...item} />
            ))}
          </div>
          <div className="hero-scroll-right mt-6 flex gap-10 whitespace-nowrap">
            {repeatedIcons(ICONS_ROW2, 4).map((item, i) => (
              <IconChip key={`r2-${i}`} {...item} />
            ))}
          </div>

          {/* Edge fades in brand cream */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-cream to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-cream to-transparent" />
        </div>
      </div>
    </section>
  );
}
