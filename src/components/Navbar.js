import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import mascot from "../assets/icon-mascot.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // map specific section ids to nav ids
            const idMap = { mockup: 'features' };
            const id = idMap[entry.target.id] || entry.target.id;
            setActiveSection(id);
          }
        });
      },
      {
        threshold: 0.6, // Adjust sensitivity
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinkClass = (id) =>
    `font-medium px-4 py-2 transition inline-block ${
      id === activeSection
        ? `bg-[#2D94f4] text-white rounded-full shadow-[0_6px_18px_rgba(45,148,244,0.12)]`
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <header className="w-full px-4 sm:px-6 md:px-12 py-3 fixed top-0 z-50 bg-[#000000] shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <img src={mascot} alt="notifybear mascot" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
          <a href="#home" className="font-garamond text-lg sm:text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
            NotifyBear
          </a>
        </div>

        {/* Center: nav (absolutely centered) */}
        <nav className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
          <a href="#problem" className={`${navLinkClass("problem")} mx-4`}>Problem</a>
          <a href="#solution" className={`${navLinkClass("solution")} mx-4`}>Solution</a>
          <a href="#features" className={`${navLinkClass("features")} mx-4`}>Features</a>
          <a href="#callToAction" className={`${navLinkClass("callToAction")} mx-4`}>Waitlist</a>
        </nav>

        {/* Right: CTA */}
        <div className="flex items-center gap-4">
          {/* Hide desktop CTA on small screens; mobile CTA lives in the overlay */}
          <a href="https://tally.so/r/wvB6ad" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center px-5 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg glass-cta">
            Get Early Access
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden focus:outline-none transition p-2 rounded-full ${
              menuOpen
                ? 'bg-[#2D94f4] text-white shadow-lg'
                : 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md'
            }`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div id="mobile-menu" role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="w-full max-w-md mx-4 bg-[#00171F] rounded-xl shadow-xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={mascot} alt="notifybear mascot" className="w-7 h-7 object-contain" />
                  <span className="font-garamond text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">NotifyBear</span>
                </div>
                <button onClick={() => setMenuOpen(false)} className="text-white p-2 rounded-full bg-gray-800">
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col divide-y divide-gray-800">
                {['home','problem','solution','features','callToAction'].map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`${navLinkClass(id)} py-4 block`}
                  >
                    {id === 'home' ? 'Home' : id === 'problem' ? 'Problem' : id === 'solution' ? 'Solution' : id === 'features' ? 'Features' : 'Waitlist'}
                  </a>
                ))}
              </nav>

              <div className="pt-2">
                <a href="https://tally.so/r/wvB6ad" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow-lg">
                  Get Early Access
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
