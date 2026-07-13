import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import mascot from "../assets/icon-mascot.png";
import { PLAY_STORE_URL } from "../constants/links";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-xl items-center justify-between rounded-full border border-white/10 bg-ink/85 pl-4 pr-2 py-2 shadow-[0_8px_30px_rgba(13,26,52,0.35)] backdrop-blur-xl sm:pl-5 sm:pr-2.5">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={mascot}
            alt="notifybear mascot"
            className="w-6 h-6 object-contain"
          />
          <span className="font-semibold text-[0.95rem] text-cream tracking-tight">
            notifybear
          </span>
        </Link>

        {/* Right: Nav + CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <Link
            to="/blog"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-cream/70 font-semibold text-xs tracking-[0.1em] uppercase transition hover:text-cream"
          >
            Blog
          </Link>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-cream text-ink font-semibold text-xs tracking-[0.06em] uppercase transition hover:bg-white"
          >
            Download on Play Store
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden focus:outline-none p-2 rounded-full bg-white/10 text-cream"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-dark/60 backdrop-blur-sm"
        >
          <div className="w-full max-w-sm mx-4 bg-ink rounded-3xl shadow-xl p-6 space-y-5 border border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={mascot} alt="notifybear" className="w-7 h-7 object-contain" />
                <span className="font-semibold text-cream">Notifybear</span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-full bg-white/10 text-cream"
              >
                <X size={18} />
              </button>
            </div>
            <Link
              to="/blog"
              onClick={() => setMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/15 text-cream font-semibold tracking-wide text-sm hover:bg-white/5 transition"
            >
              Blog
            </Link>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-cream text-ink font-semibold tracking-wide text-sm"
            >
              Download on Play Store
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
