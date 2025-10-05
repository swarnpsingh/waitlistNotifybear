import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";

export default function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-20 inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black px-4 sm:px-6 md:px-16 py-8">
      <h2 className="text-[32px] sm:text-[40px] md:text-[48px] text-white font-garamond font-bold text-center mb-12 sm:mb-16">
        Our Features
      </h2>

      {/* Feature 1 */}
      <div className="bg-[#BCD7FF] rounded-xl px-6 py-10 sm:px-8 sm:py-12 mb-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
        <div className="relative">
          <img src={a} alt="Unified Notification" className="w-40 sm:w-52 md:w-64" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800" />
        </div>
        <div className="max-w-md text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-black">
            Unified Notification System
          </h3>
          <p className="text-black">
            notifybear consolidates updates from your favorite creators across
            all social media platforms into a single, streamlined interface.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="bg-[#ADE7D2] rounded-xl px-6 py-10 sm:px-8 sm:py-12 mb-10 flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-10">
        <div className="relative">
          <img src={b} alt="Personalised Alerts" className="w-40 sm:w-52 md:w-64" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800" />
        </div>
        <div className="max-w-md text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-black">
            Personalised Alerts
          </h3>
          <p className="text-black">
            Leveraging smart algorithms, notifybear tailors notifications based
            on your content consumption habits, ensuring you only receive
            updates that matter to you.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="bg-[#FFE3B4] rounded-xl px-6 py-10 sm:px-8 sm:py-12 mb-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
        <div className="relative">
          <img src={c} alt="Cross-Platform Integration" className="w-40 sm:w-52 md:w-64" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800" />
        </div>
        <div className="max-w-md text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-black">
            Cross-Platform Integration
          </h3>
          <p className="text-black">
            Whether it’s a YouTube video, an Instagram story, a tweet, or all
            three at once, notifybear keeps you in the loop, so you never miss a
            moment from your favorite creators.
          </p>
        </div>
      </div>
    </section>
  );
}
