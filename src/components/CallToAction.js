export default function CallToAction() {
  return (
    <section id="callToAction" className="scroll-mt-20 bg-[#00171F] px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
        {/* Left: Text */}
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-4xl font-garamond font-bold mb-2 text-white">Caught up?</h2>
          <p className="text-[#CFCFCF] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            laoreet orci ut leo viverra, vitae congue orci facilisis. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet
            orci ut leo viverra, vitae congue orci facilisis.
          </p>
        </div>

        {/* Right: Buttons */}
        <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
          <button onClick={() => window.open("https://tally.so/r/wvB6ad", "_blank")} className="w-full md:w-56 bg-[#2D94f4] text-white font-medium px-6 py-3 rounded-xl shadow-[2px_2px_0px_black] hover:scale-105 transition">
            Join Waitlist
          </button>
          <button className="w-full md:w-56 bg-[#F7F3EA] text-[#2D94f4]  font-medium px-6 py-3 rounded-xl shadow-[2px_2px_0px_black] border border-black hover:scale-105 transition">
            Call me later
          </button>
        </div>
      </div>
    </section>
  );
}