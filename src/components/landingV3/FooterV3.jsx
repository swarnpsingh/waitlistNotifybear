import React from 'react';
import { Link } from 'react-router-dom';
import mascot from '../../assets/icon-mascot.png';
import { PLAY_STORE_URL } from '../../constants/links';

const FOOTER_LINKS = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms-of-service' },
  { label: 'Contact', to: '/contact' },
  { label: 'Delete Account', to: '/delete-account' },
  { label: 'Blog', to: '/blog' },
];

export default function FooterV3() {
  return (
    <footer className="pb-8">
      {/* Final CTA — dark card bookending the hero */}
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="ink-card relative flex flex-col items-center overflow-hidden rounded-3xl px-6 py-16 text-center ring-1 ring-white/10 sm:py-20">
          <h2
            className="max-w-[16ch] font-display font-semibold leading-[1.08] tracking-[-0.02em] text-white"
            style={{ fontSize: 'clamp(2rem, 4.4vw, 3.4rem)' }}
          >
            Take your <span className="text-bell">attention</span> back.
          </h2>
          <p className="mt-4 max-w-[40ch] text-base leading-relaxed text-white/60">
            Free on Android. Working in under a minute.
          </p>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-focus px-8 text-sm font-semibold text-white transition-colors hover:bg-focus-light"
          >
            Download on Play Store
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <div className="flex items-center gap-2">
          <img src={mascot} alt="" className="h-5 w-5 object-contain" />
          <span className="text-sm font-semibold text-ink/70">notifybear</span>
          <span className="text-xs text-ink/35">© {new Date().getFullYear()}</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {FOOTER_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="text-xs font-medium text-ink/45 transition-colors hover:text-ink"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
