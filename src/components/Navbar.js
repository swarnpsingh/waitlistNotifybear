import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import mascot from "../assets/icon-mascot.png";
import { PLAY_STORE_URL } from "../constants/links";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 160);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto w-full max-w-[1500px] px-5 pt-4 sm:px-8 lg:px-10">
        {/* Bond-style morphing bar: full-width & transparent at rest,
            contracts into a floating dark capsule on scroll */}
        <div
          className={`pointer-events-auto mx-auto flex items-center justify-between ${
            scrolled
              ? "max-w-[860px] rounded-2xl bg-ink/95 px-4 py-2.5 shadow-[0_4px_24px_rgba(13,26,52,0.28),inset_0_-1px_3px_rgba(248,244,234,0.14)] backdrop-blur-xl"
              : "max-w-[1420px] rounded-2xl bg-transparent px-0 py-2.5"
          }`}
          style={{ transition: "all 0.45s cubic-bezier(0.22, 1, 0.36, 1)" }}
        >
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={mascot}
              alt="notifybear mascot"
              className="w-6 h-6 object-contain"
            />
            <span className="font-semibold text-[0.95rem] tracking-tight text-cream">
              notifybear
            </span>
          </Link>

          {/* Right: Nav + CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full font-semibold text-xs tracking-[0.1em] uppercase text-cream/70 transition-colors duration-300 hover:text-cream"
            >
              Blog
            </Link>

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-cream font-semibold text-xs tracking-[0.06em] uppercase text-ink transition-colors duration-300 hover:bg-white"
            >
              Download on Play Store
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden focus:outline-none p-2 rounded-full bg-white/10 text-cream transition-colors duration-300"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center bg-ink-dark/60 backdrop-blur-sm"
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
