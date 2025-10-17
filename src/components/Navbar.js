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

  const navLinkClass = (id) =>
    `font-medium px-4 py-2 transition inline-block ${
      id === activeSection
        ? `bg-[#2D94f4] text-white rounded-full shadow-[0_6px_18px_rgba(45,148,244,0.12)]`
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <header className="w-full px-6 md:px-12 py-4 fixed top-0 z-50 bg-[#000000] shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <img src={mascot} alt="notifybear mascot" className="w-8 h-8 object-contain" />
          <a href="#home" className="font-garamond text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
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
          <a href="https://tally.so/r/wvB6ad" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg glass-cta">
            Get Early Access
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#00171F] shadow-md flex flex-col items-center gap-2 py-4 md:hidden z-40 border-t border-gray-700">
            {["home", "features", "callToAction"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`text-white font-semibold px-4 py-2 ${
                  activeSection === id ? "bg-[#2D94f4] rounded shadow" : "opacity-80 hover:opacity-100"
                }`}
              >
                {id === "home"
                  ? "Home"
                  : id === "features"
                  ? "Features"
                  : "Contact us"}
              </a>
            ))}
            <a
              href="https://tally.so/r/wvB6ad"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="bg-[#2D94f4] text-white font-medium px-6 py-2 rounded-xl shadow-[2px_2px_0px_black] mt-2 inline-flex items-center justify-center"
            >
              Join As Creator
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
