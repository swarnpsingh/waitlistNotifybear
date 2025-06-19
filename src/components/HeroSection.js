export default function HeroSection() {
  return (
    <section className="relative text-center px-6 pt-32 pb-20 bg-[#F7F3EA] overflow-hidden">
      {/* Left & Right Notification Icons */}
      <img
        src="/assets/notification-1.png"
        alt="notification icon"
        className="absolute left-6 w-[159px] h-[85px] opacity-70"
        style={{ top: "160px" }}
      />

      <img
        src="/assets/notification-1.png"
        alt="notification icon right"
        className="absolute right-6 w-[159px] h-[85px] opacity-70"
        style={{ top: "110px" }}
      />

      {/* Headline */}
      <h1 className="font-garamond font-extrabold text-[48px] md:text-[64px] lg:text-[80px] leading-[110%] tracking-normal text-center text-black">
        <p className="relative inline-block">
          it’s{" "}
          <span className="relative inline-block text-coral z-10">
            time
            <img
              src="/assets/underline.png"
              alt="underline"
              className="absolute left-2 w-full h-5 object-contain z-[-1] scale-110"
              style={{
                bottom: "-6px", // adjust this value as needed
                transformOrigin: "left bottom",
              }}
            />

          </span>{" "}
          you get your
        </p>
        <br />
        <span className="font-black">notification panel</span>{" "}
        <span className="text-coral font-black">organised</span>
      </h1>

      {/* Paragraph */}
      <p className="text-lg text-gray-600 max-w-xl mx-auto mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet
        orci ut leo viverra, vitae congue orci facilisis.
      </p>

      {/* CTA Button */}
      <div className="mt-8">
        <button className="bg-coral text-white font-semibold px-6 py-3 rounded-xl shadow-[2px_2px_0px_black] hover:scale-105 transition">
          Join Waitlist
        </button>
      </div>

      {/* Platforms image */}
      <div className="mt-20">
        <img
          src="/assets/platforms.png"
          alt="social platforms"
          className="w-full max-w-[1600px] mx-auto h-auto"
        />

      </div>

      <div className="text-center font-garamond text-[48px] leading-[52.8px] text-black font-extrabold mt-20">
        <p className="inline">
          Tired of having notification getting all{" "}
        </p>
        <br />
        <span className="inline text-[#FE6D73] font-extrabold">
          cluttered up{" "}
        </span>
        <span className="inline font-extrabold">
          in your panel?
        </span>
      </div>
      <p className="text-lg text-gray-600 max-w-xl mx-auto mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet
        orci ut leo viverra, vitae congue orci facilisis.
      </p>
    </section>
  );
}
