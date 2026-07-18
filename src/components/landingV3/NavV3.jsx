import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import mascot from '../../assets/icon-mascot.png';
import { PLAY_STORE_URL } from '../../constants/links';

const LINKS = [
  { label: 'How it works', href: '#how' },
  { label: 'Features', href: '#features' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'FAQ', href: '#faq' },
];

/* Bond-style morphing nav: spans the full screen over the hero, then
   condenses into a floating pill once you scroll. */
export default function NavV3() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 64));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-[padding] duration-500 ${
        scrolled ? 'pt-3' : 'pt-0'
      }`}
    >
      <nav
        className={`flex w-full items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? 'h-12 max-w-[660px] rounded-full bg-ink/90 px-2.5 pl-4 shadow-[0_12px_32px_rgba(13,26,52,0.35)] ring-1 ring-white/10 backdrop-blur-md'
            : 'h-16 max-w-[1400px] rounded-none bg-transparent px-2 sm:px-4'
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <img src={mascot} alt="" className="h-6 w-6 object-contain" />
          <span className="text-sm font-bold tracking-tight text-white">notifybear</span>
        </a>

        <div className={`hidden items-center transition-all duration-500 md:flex ${scrolled ? 'gap-5' : 'gap-8'}`}>
          {LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-[0.82rem] font-medium text-white/60 transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
          <Link
            to="/blog"
            className="text-[0.82rem] font-medium text-white/60 transition-colors hover:text-white"
          >
            Blog
          </Link>
        </div>

        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-8 items-center rounded-full bg-focus px-4 text-[0.8rem] font-semibold text-white transition-colors hover:bg-focus-light"
        >
          Get the app
        </a>
      </nav>
    </header>
  );
}
