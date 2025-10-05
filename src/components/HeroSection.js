import notifications2 from "../assets/Group 17.png";
import underline from "../assets/underline.png";
import instagram from "../assets/Instagram.png";
import facebook from "../assets/Facebook.png";
import twitter from "../assets/Twitter.png";
import tiktok from "../assets/Tik Tok.png";
import spotify from "../assets/Spotify.png";

export default function HeroSection() {
  return (
    <section id="home" className="scroll-mt-20 relative text-center px-4 sm:px-6 pt-20 sm:pt-32 pb-12 overflow-hidden bg-[#00171F]">
      {/* Notification icons */}
      <img
        src={notifications2}
        alt="notification icon"
        className="absolute left-2 sm:left-6 w-[120px] sm:w-[159px] h-auto opacity-70"
        style={{ top: "160px" }}
      />
      <img
        src={notifications2}
        alt="notification icon right"
        className="absolute right-2 sm:right-6 w-[120px] sm:w-[159px] h-auto opacity-70"
        style={{ top: "110px" }}
      />

      {/* Headline */}
      <h1 className="font-garamond font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-tight tracking-normal text-center">
        <p className="relative inline-block text-white">
          it’s{" "}
          <span className="relative inline-block text-[#2D94f4] z-10">
            time
            <img
              src={underline}
              alt="underline"
              className="absolute left-2 w-full h-5 object-contain z-[-1] scale-110"
              style={{
                bottom: "-6px",
                transformOrigin: "left bottom",
              }}
            />
          </span>{" "}
          you get your
        </p>
        <br />
        <span className="font-black text-white">notification panel</span>{" "}
        <span className="font-coral text-[#2D94f4]">organised</span>
      </h1>

      {/* Paragraph */}
      <p className="text-base sm:text-lg text-[#CFCFCF] max-w-xl mx-auto mt-6 px-2">
        Stay updated without the chaos.
NotifyBear brings all your creator notifications into one simple, organized feed.
      </p>

      {/* CTA Button */}
      <div className="mt-8">
        <button
          onClick={() => window.open("https://tally.so/r/wvB6ad", "_blank")}
          className="bg-[#2D94f4] text-white font-semibold px-6 py-3 rounded-xl shadow-[2px_2px_0px_black] hover:scale-105 transition"
        >
          Join Waitlist
        </button>
      </div>

      {/* Glowing Social Icons Section */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12 pt-24 sm:pt-36">
        {[
          { src: instagram, bg: "from-pink-500 via-purple-500 to-yellow-400" },
          { src: facebook, bg: "bg-blue-600" },
          { src: twitter, bg: "bg-sky-500" },
          { src: tiktok, bg: "bg-gray-400" },
          { src: spotify, bg: "bg-green-500" },
        ].map((icon, index) => (
          <div
            key={index}
            className="relative w-20 h-20 sm:w-24 sm:h-24 rotate-12"
          >
            <div
              className={`absolute inset-0 rounded-2xl ${
                icon.bg.includes("from-") ? `bg-gradient-to-tr ${icon.bg}` : icon.bg
              } blur-[80px] opacity-90 z-0`}
            />
            <div className="relative w-full h-full rounded-2xl flex items-center justify-center z-10">
              <img src={icon.src} alt="icon" className="w-10 h-10 sm:w-16 sm:h-16" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
