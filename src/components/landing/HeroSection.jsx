import React from 'react';
import { motion } from 'framer-motion';
import { Star, Cpu, Lock } from 'lucide-react';
import HeroDemoCard from './HeroDemoCard';
import { PLAY_STORE_URL } from '../../constants/links';

const TRUST_BADGES = [
  { icon: Cpu, label: '100% on-device AI' },
  { icon: Lock, label: 'No signup wall' },
];

const HEX_POINTS = '50,2 91.57,26 91.57,74 50,98 8.43,74 8.43,26';

function HexOutline({ size, style, opacity = 0.14 }) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="pointer-events-none absolute"
      style={style}
    >
      <polygon points={HEX_POINTS} fill="none" stroke="#fff" strokeOpacity={opacity} strokeWidth="1.25" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-focus pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <HexOutline size={190} style={{ top: '6%', right: '4%' }} opacity={0.16} />
      <HexOutline size={110} style={{ top: '26%', right: '18%' }} opacity={0.12} />
      <HexOutline size={260} style={{ top: '-4%', right: '-6%' }} opacity={0.1} />
      <HexOutline size={90} style={{ top: '2%', left: '48%' }} opacity={0.08} />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[-10%] bottom-0 h-72 sm:h-96"
        style={{
          background: `linear-gradient(to bottom,
            rgba(248,244,234,0) 0%,
            rgba(248,244,234,0.06) 35%,
            rgba(248,244,234,0.22) 58%,
            rgba(248,244,234,0.5) 76%,
            rgba(248,244,234,0.8) 90%,
            #F8F4EA 100%)`,
          filter: 'blur(48px)',
        }}
      />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left: copy */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 py-1.5 pl-1.5 pr-4 backdrop-blur-sm">
              <span className="rounded-full bg-bell px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-ink">Live</span>
              <span className="text-xs font-semibold text-white">Now on Google Play</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-white/70">
              <Star size={13} strokeWidth={2.25} className="text-bell" />
              <span className="text-xs font-medium">Rated on Google Play</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mb-5 font-display font-medium leading-[1.0] text-white"
            style={{ fontSize: 'clamp(2.5rem, 5.6vw, 4.5rem)', letterSpacing: '-0.035em' }}
          >
            Cut notification<br /><span className="text-bell">noise</span> instantly
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mb-8 max-w-[480px] text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Notifybear surfaces the important notifications on your phone, so you focus only on what matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mb-8 flex w-full flex-col items-start justify-start gap-3 sm:flex-row"
          >
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download NotifyBear on Google Play"
              className="btn-primary-dark w-full sm:w-auto"
              style={{ minWidth: 210, textAlign: 'center' }}
            >
              Download on Play Store
            </a>

            <a
              href="#features"
              className="btn-outline w-full text-white hover:bg-white/10 sm:w-auto"
              style={{ minWidth: 150, textAlign: 'center' }}
            >
              Learn more
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-white/70">
                <Icon size={14} strokeWidth={2.25} className="text-bell" />
                <span className="text-xs font-medium tracking-tight">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: live activity card */}
        <div className="relative mx-auto w-full max-w-[440px]">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2"
            style={{
              background: `
                radial-gradient(circle at 50% 45%, rgba(245,197,24,0.35) 0%, rgba(245,197,24,0) 55%),
                radial-gradient(circle at 50% 55%, rgba(22,41,79,0.4) 15%, rgba(22,41,79,0) 65%)
              `,
              filter: 'blur(10px)',
            }}
          />
          <HeroDemoCard />
        </div>
      </div>
    </section>
  );
}
