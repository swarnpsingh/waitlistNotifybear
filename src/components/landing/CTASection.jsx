import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import mascot from '../../assets/icon-mascot.png';
import { PLAY_STORE_URL } from '../../constants/links';
import Reveal from './Reveal';

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/notifybear.com_/', Icon: Instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/notifybear?originalSubdomain=in', Icon: Linkedin },
  { label: 'Twitter', href: 'https://x.com/notifybear', Icon: Twitter },
];

export default function CTASection({ onShowPrivacy, onShowTerms, onShowContact }) {
  const footerLinks = [
    { label: 'Privacy Policy', action: onShowPrivacy },
    { label: 'Terms of Service', action: onShowTerms },
    { label: 'Get the App', action: () => window.open(PLAY_STORE_URL, '_blank', 'noopener') },
    { label: 'Contact', action: onShowContact },
  ];

  return (
    <section
      id="cta"
      className="relative flex flex-col items-center overflow-hidden px-5 pt-28 text-center sm:px-8"
      style={{ background: 'linear-gradient(180deg, #2F5FD6 0%, #16294F 62%, #16294F 100%)' }}
    >
      <div className="hex-watermark" />
      <div
        aria-hidden
        className="mesh-blob-2 pointer-events-none absolute -left-20 top-10 h-[320px] w-[320px] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(245,197,24,0.16) 0%, rgba(245,197,24,0) 65%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        aria-hidden
        className="mesh-blob-3 pointer-events-none absolute -right-16 top-1/3 h-[280px] w-[280px] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 65%)',
          filter: 'blur(36px)',
        }}
      />

      <Reveal y={28} className="relative w-full max-w-[520px]">
        <div className="mb-6 inline-flex items-center rounded-full border border-white/50 bg-white/20 px-4 py-1.5 backdrop-blur-sm">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-white">
            Now Live
          </span>
        </div>

        <h2
          className="mb-4 font-display font-medium text-white"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.25rem)', lineHeight: 1.08, letterSpacing: '-0.025em' }}
        >
          Download Notifybear
          <br />
          on Play Store.
        </h2>

        <p className="mx-auto mb-9 max-w-[340px] text-[0.95rem] leading-relaxed text-white/75">
          Stop choosing between being interrupted and being in the dark. Install it today and let
          your phone decide what's worth your attention.
        </p>

        <Reveal delay={0.2} y={16} className="relative mx-auto flex w-full max-w-[420px] justify-center">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[140px] w-[280px] -translate-x-1/2 -translate-y-1/2"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.35) 0%, rgba(245,197,24,0) 70%)',
              filter: 'blur(18px)',
            }}
          />
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex min-w-[220px] flex-col items-center justify-center gap-0.5 whitespace-nowrap rounded-[14px] border border-white/70 bg-[#050505] px-6 py-2.5 text-white shadow-[0_10px_24px_rgba(0,0,0,0.28)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110"
          >
            <span className="text-[0.62rem] uppercase leading-none tracking-[0.14em] opacity-85">
              Get it on
            </span>
            <span className="text-[1.7rem] font-bold leading-none tracking-[-0.03em]">
              Google Play
            </span>
          </a>
        </Reveal>

        <p className="mt-5 text-[0.775rem] tracking-[0.01em] text-white/55">Free on Android.</p>
      </Reveal>

      {/* Footer */}
      <footer className="relative mt-20 flex w-full max-w-[1100px] flex-col items-center justify-between gap-5 border-t border-white/15 py-7 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2">
          <img src={mascot} alt="notifybear" className="h-6 w-6 object-contain" />
          <span className="text-[0.95rem] font-bold tracking-tight text-white">Notifybear</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2.5">
          {footerLinks.map(({ label, action }) => (
            <button
              key={label}
              type="button"
              onClick={() => { if (action) action(); }}
              className="cursor-pointer border-none bg-transparent p-0 text-[0.8rem] text-white/60 transition-colors duration-200 hover:text-white"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="inline-flex items-center justify-center text-white/65 transition-colors duration-200 hover:text-white"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="m-0 text-[0.775rem] text-white/45">
          © {new Date().getFullYear()} Notifybear LLC. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
