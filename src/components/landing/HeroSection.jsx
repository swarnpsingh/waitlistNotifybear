
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import mockup from '../../assets/mockrocket-capture.png';

function useCountdown(targetDate) {
  const calculate = () => {
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [timeLeft, setTimeLeft] = useState(calculate);
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(id);
  }, []);
  return timeLeft;
}

export default function HeroSection() {
  const { days, hours, minutes, seconds } = useCountdown('2026-03-10T00:00:00');

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

        {/* Coming Soon badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-5 py-1.5 rounded-full border border-white/60 bg-white/30 backdrop-blur-sm mb-6"
        >
          <span className="text-xs text-white font-semibold tracking-[0.18em] uppercase">Coming Soon</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="font-bold text-white leading-[1.05] mb-5"
          style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)' }}
        >
          Get early<br />access
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="text-sm text-white/80 leading-relaxed mb-8 max-w-[300px]"
        >
          An AI notification assistant that understands the relevance of your notifications. <br/ > We're close, get on the waitlist!
        </motion.p>

        {/* Email + CTA */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          onSubmit={(e) => { e.preventDefault(); window.open('https://tally.so/r/wvB6ad', '_blank', 'noopener'); }}
          className="hero-form flex w-full max-w-sm rounded-full overflow-hidden bg-white/80 backdrop-blur-md shadow-lg mb-10 border border-white/60"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-5 py-3 bg-transparent text-gray-700 text-sm placeholder:text-gray-400 outline-none"
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-full bg-gray-900 text-white text-xs font-bold tracking-[0.1em] uppercase hover:bg-gray-700 transition m-1"
          >
            Join Waitlist
          </button>
        </motion.form>

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

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="relative z-10 w-full max-w-sm grid grid-cols-4 gap-2 mb-12"
        >
          {[{ label: 'DAYS', value: days }, { label: 'HOURS', value: hours }, { label: 'MINUTES', value: minutes }, { label: 'SECONDS', value: seconds }].map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center py-4 px-2 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30"
            >
              <span
                className="text-2xl font-bold text-white leading-none mb-1"
              >
                {String(value).padStart(2, '0')}
              </span>
              <span className="text-[9px] font-semibold text-white/70 tracking-[0.15em]">{label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
