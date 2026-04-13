
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
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto px-6 pt-24 sm:pt-32 w-full">

        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-5 py-1.5 rounded-full border border-white/60 bg-white/30 backdrop-blur-sm mb-6"
        >
          <span className="text-xs text-white font-semibold tracking-[0.18em] uppercase">Now on Android</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="font-bold text-white leading-[1.05] mb-5"
          style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)' }}
        >
          Cut notification<br />noise instantly
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="text-sm text-white/80 leading-relaxed mb-8 max-w-[300px]"
        >
          Notifybear is live on Google Play. Download now and let AI prioritize what matters.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="flex w-full justify-center mb-10"
        >
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gray-900 text-white text-xs font-bold tracking-[0.1em] uppercase hover:bg-gray-700 transition"
          >
            Download on Play Store
          </a>
        </motion.div>

        {/* Mockup image — large, bottom half fades into countdown */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: 'easeOut' }}
          className="relative w-full max-w-[340px] mx-auto mb-[-56px]"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 90%)',
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 90%)',
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
          className="text-xs text-white/75 tracking-[0.08em] uppercase mb-12"
        >
          Free install • Instant access • Start in under 60 seconds
        </motion.p>

      </div>
    </section>
  );
}
