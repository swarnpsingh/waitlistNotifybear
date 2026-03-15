import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import mascot from "../assets/icon-mascot.png";

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
    <header className="w-full px-6 sm:px-10 py-4 fixed top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src={mascot}
            alt="notifybear mascot"
            className="w-7 h-7 object-contain"
          />
          <span className="font-bold text-lg text-white tracking-tight">
            notifybear
          </span>
        </a>

        {/* Right: CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://tally.so/r/wvB6ad"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-5 py-2 rounded-full border border-white/60 text-white font-semibold text-xs tracking-[0.12em] uppercase bg-white/20 backdrop-blur-sm hover:bg-white/30 transition"
          >
            Join Waitlist
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden focus:outline-none p-2 rounded-full bg-white/60 border border-gray-300 text-gray-700"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          >
            <div className="w-full max-w-sm mx-4 bg-white rounded-2xl shadow-xl p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={mascot} alt="notifybear" className="w-7 h-7 object-contain" />
                  <span className="font-bold text-gray-900">Notifybear</span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full bg-gray-100 text-gray-700"
                >
                  <X size={18} />
                </button>
              </div>
              <a
                href="https://tally.so/r/wvB6ad"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-400 text-gray-800 font-semibold tracking-wide text-sm"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
