export default function Navbar() {
  return (
    <header className="w-full px-6 md:px-12 py-4 flex justify-between items-center fixed top-0 z-50 bg-[#F7F3EA] shadow-md">
      {/* Logo */}
      <h1 className="font-garamond text-2xl tracking-tight text-black">
        notifybear
      </h1>

      {/* Nav Links */}
      <nav className="flex items-center justify-center border border-gray-400 rounded-xl overflow-hidden shadow-[2px_2px_0px_black]">
        <a
          href="#home"
          className="bg-coral text-white font-semibold px-5 py-2 rounded-l-xl shadow-[2px_2px_0px_black]"
        >
          Home
        </a>
        <a
          href="#features"
          className="text-gray-600 font-semibold px-5 py-2 hover:text-black transition"
        >
          Features
        </a>
        <a
          href="#contact"
          className="text-gray-600 font-semibold px-5 py-2 hover:text-black transition"
        >
          Contact us
        </a>
        <a
          href="#about"
          className="text-gray-600 font-semibold px-5 py-2 rounded-r-xl hover:text-black transition"
        >
          About
        </a>
      </nav>

      {/* Join as Creator Button */}
      <button className="bg-coral text-white font-medium px-5 py-2 rounded-xl shadow-[2px_2px_0px_black]">
        Join As Creator
      </button>
    </header>
  );
}
