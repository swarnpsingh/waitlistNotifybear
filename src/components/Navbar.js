import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
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

  const navLinkClass = (id, rounded) =>
    `font-semibold px-5 py-2 transition ${
      id === activeSection
        ? `bg-[#2D94f4] text-white shadow-[2px_2px_0px_black] ${rounded}`
        : "text-white opacity-60 hover:opacity-100"
    }`;

  return (
    <header className="w-full px-6 md:px-12 py-4 flex justify-between items-center fixed top-0 z-50 bg-[#00171F] shadow-md">
      <h1 className="font-garamond text-2xl tracking-tight text-white">
        notifybear
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-center border border-gray-400 rounded-xl overflow-hidden shadow-[2px_2px_0px_black]">
        <a href="#home" className={navLinkClass("home", "rounded-l-xl")}>
          Home
        </a>
        <a href="#features" className={navLinkClass("features", "")}>
          Features
        </a>
        <a href="#callToAction" className={navLinkClass("callToAction", "")}>
          Contact us
        </a>
        <a href="#callToAction" className={navLinkClass("callToAction", "rounded-r-xl")}>
          Join
        </a>
      </nav>

      {/* Desktop Button */}
      <button className="hidden lg:block bg-[#2D94f4] text-white font-medium px-5 py-2 rounded-xl shadow-[2px_2px_0px_black]">
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
        <div className="absolute top-full left-0 w-full bg-[#00171F] shadow-md flex flex-col items-center gap-2 py-4 lg:hidden z-40 border-t border-gray-700">
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
