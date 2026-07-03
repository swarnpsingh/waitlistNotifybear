import React from 'react';
import { motion } from 'framer-motion';
import mockup from '../../assets/mockrocket-capture.png';
import { PLAY_STORE_URL } from '../../constants/links';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center overflow-hidden scroll-mt-20 pb-0"
      style={{
        background: `
          radial-gradient(ellipse 95% 48% at 50% 36%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 100%),
          linear-gradient(180deg, #3a8fbf 0%, #5aadd4 30%, #5aadd4 70%, #3a8fbf 100%)
        `,
        minHeight: '100vh',
      }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center px-6 pt-24 text-center sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center rounded-full border border-white/40 bg-white/10 px-5 py-1.5 backdrop-blur-sm"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Now on Android</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mb-4 font-extrabold leading-[1.02] text-white"
          style={{ fontSize: 'clamp(2.25rem, 6.5vw, 4.25rem)' }}
        >
          Cut notification<br />noise instantly
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mb-8 max-w-[640px] text-base leading-relaxed text-white/90 sm:text-lg"
          style={{ marginInline: 'auto' }}
        >
          NotifyBear is live on Google Play — download and let on-device AI prioritize what matters so you only get the notifications you care about.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mb-10 flex w-full flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download NotifyBear on Google Play"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.04em] text-blue-700 shadow-lg transition hover:opacity-95"
            style={{ minWidth: 200, textAlign: 'center' }}
          >
            Download on Play Store
          </a>

          <a
            href="#features"
            className="rounded-full border border-white/25 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            style={{ minWidth: 160, textAlign: 'center' }}
          >
            Learn more
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: 'easeOut' }}
          className="relative mx-auto mb-[-56px] w-full max-w-[460px] sm:max-w-[560px]"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 35%, transparent 95%)',
            maskImage: 'linear-gradient(to bottom, black 35%, transparent 95%)',
          }}
        >
          <img
            src={mockup}
            alt="NotifyBear App Mockup"
            className="h-auto w-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mb-12 text-sm tracking-[0.02em] text-white/80"
        >
          No Setup • No Rules • No Configuration
        </motion.p>
      </div>
    </section>
  );
}