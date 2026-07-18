import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PLAY_STORE_URL } from '../../constants/links';
import mascot from '../../assets/icon-mascot.png';

const LINKS = [
  { label: 'How it works', href: '#how' },
  { label: 'Why it matters', href: '#why' },
  { label: 'FAQ', href: '#faq' },
];

export default function NavbarV2() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled
            ? 'border border-white/10 bg-night/70 shadow-[0_10px_40px_rgba(4,8,18,0.5)] backdrop-blur-xl'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <a href="#home" className="flex items-center gap-2">
          <img src={mascot} alt="Notifybear" className="h-7 w-7 object-contain" />
          <span className="font-display text-lg font-medium tracking-tight text-cream">Notifybear</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-cream/60 transition-colors hover:text-cream"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-bell px-5 py-2 text-sm font-bold text-ink transition-transform duration-200 hover:-translate-y-0.5"
        >
          Get the app
        </a>
      </nav>
    </motion.header>
  );
}
