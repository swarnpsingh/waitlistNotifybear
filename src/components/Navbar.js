import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import mascot from "../assets/icon-mascot.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    // Account for the sticky header height so sections are considered
    // intersecting when they appear below the navbar.
    const headerEl = document.querySelector('header');
    const headerHeight = headerEl ? headerEl.offsetHeight : 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // map certain section ids to a nav id. e.g. the mockup section
            // should highlight the 'features' nav item.
            const map = {
              mockup: "features",
            };
            const id = map[entry.target.id] || entry.target.id;
            setActiveSection(id);
          }
        });
      },
      {
        root: null,
        // Move the root's top inward by the header height so the
        // intersection takes the sticky header into account.
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: 0.5, // Adjust sensitivity
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinkClass = (id, rounded) =>
    `font-semibold px-5 py-2 transition ${
      id === activeSection
        ? `bg-[#2D94f4] text-white shadow-[2px_2px_0px_black] ${rounded}`
        : "text-white opacity-60 hover:opacity-100"
    }`;

  return (
  <header className="w-full px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-50 bg-[#00171F] shadow-md liquid-glass-navbar relative">
      <div className="flex items-center gap-3">
        <img src={mascot} alt="notifybear mascot" className="w-10 h-10 object-contain self-center" />
        <h1 className="font-garamond text-2xl tracking-tight text-white leading-none">
          notifybear
        </h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-center rounded-xl overflow-hidden">
        <a href="#home" className={`${navLinkClass("home", "rounded-l-xl")} glass-link ${activeSection === 'home' ? 'active' : ''}`}>
          Home
        </a>
        <a href="#features" className={`${navLinkClass("features", "")} glass-link ${activeSection === 'features' ? 'active' : ''}`}>
          Features
        </a>
        {/* <a href="#callToAction" className={`${navLinkClass("callToAction", "")} glass-link ${activeSection === 'callToAction' ? 'active' : ''}`}>
          Contact us
        </a> */}
        <a href="#callToAction" className={`${navLinkClass("callToAction", "rounded-r-xl")} glass-link ${activeSection === 'callToAction' ? 'active' : ''}`}>
          Join
        </a>
      </nav>

      {/* Desktop Button */}
      <button className="hidden lg:block font-medium px-5 py-2 rounded-xl glass-cta">
        Join As Creator
      </button>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden text-white focus:outline-none"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 w-full bg-[#00171F] shadow-md flex flex-col items-center gap-2 py-4 lg:hidden z-40 border-t border-gray-700 mobile-menu-offset">
          {["home", "features", "callToAction"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className={`text-white font-semibold px-4 py-2 glass-link ${
                activeSection === id ? "active rounded shadow" : "opacity-80 hover:opacity-100"
              }`}
            >
              {id === "home"
                ? "Home"
                : id === "features"
                ? "Features"
                : "Contact us"}
            </a>
          ))}
          <button
            onClick={() => setMenuOpen(false)}
            className="bg-[#2D94f4] text-white font-medium px-6 py-2 rounded-xl shadow-[2px_2px_0px_black] mt-2"
          >
            Join As Creator
          </button>
        </div>
      )}
    </header>
  );
}
