
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
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto px-6 pt-24 sm:pt-32 w-full">

        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-5 py-1.5 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm mb-6"
        >
          <span className="text-xs text-white font-semibold tracking-[0.18em] uppercase">Now on Android</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="font-extrabold text-white leading-[1.02] mb-4"
          style={{ fontSize: 'clamp(2.25rem, 6.5vw, 4.25rem)' }}
        >
          Cut notification<br />noise instantly
        </motion.h1>
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="text-base sm:text-lg text-white/90 leading-relaxed mb-8 max-w-[640px]"
          style={{ marginInline: 'auto' }}
        >
          NotifyBear is live on Google Play — download and let on-device AI prioritize what matters so you only get the notifications you care about.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-3 justify-center mb-10 w-full"
        >
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download NotifyBear on Google Play"
            className="px-6 py-3 rounded-full bg-white text-blue-700 text-sm font-semibold tracking-[0.04em] uppercase hover:opacity-95 transition shadow-lg"
            style={{ minWidth: 200, textAlign: 'center' }}
          >
            Download on Play Store
          </a>

          <a
            href="#features"
            className="px-5 py-3 rounded-full border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition"
            style={{ minWidth: 160, textAlign: 'center' }}
          >
            Learn more
          </a>
        </motion.div>

        {/* Mockup image — large, bottom half fades into countdown */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: 'easeOut' }}
          className="relative w-full max-w-[460px] sm:max-w-[560px] mx-auto mb-[-56px]"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 35%, transparent 95%)',
            maskImage: 'linear-gradient(to bottom, black 35%, transparent 95%)',
          }}
        >
          <img
            src={mockup}
            alt="NotifyBear App Mockup"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-sm text-white/80 tracking-[0.02em] mb-12"
        >
          Free install • Instant access • Start in under 60 seconds
        </motion.p>

      </div>
    </section>
  );
}
