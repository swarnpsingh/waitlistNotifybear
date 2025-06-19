export default function FeaturesSection() {
  return (
    <section className="bg-[#F7F3EA] px-6 md:px-16 py-24">
      <h2 className="text-4xl font-garamond font-bold text-center mb-16">
        Our Features
      </h2>

      {/* Feature 1 */}
      <div className="bg-[#BCD7FF] rounded-xl p-8 mb-10 flex flex-col md:flex-row items-center justify-center gap-10">
        <img
          src="/assets/a.png"
          alt="Unified Notification"
          className="w-40 md:w-56"
        />
        <div className="max-w-md text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">
            Unified Notification System
          </h3>
          <p className="text-gray-700">
            notifybear consolidates updates from your favorite creators across
            all social media platforms into a single, streamlined interface.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="bg-[#ADE7D2] rounded-xl p-8 mb-10 flex flex-col md:flex-row-reverse items-center justify-center gap-10">
        <img
          src="/assets/b.png"
          alt="Personalised Alerts"
          className="w-40 md:w-56"
        />
        <div className="max-w-md text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">Personalised Alerts</h3>
          <p className="text-gray-700">
            Leveraging smart algorithms, notifybear tailors notifications based
            on your content consumption habits, ensuring you only receive
            updates that matter to you.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="bg-[#FFE3B4] rounded-xl p-8 mb-10 flex flex-col md:flex-row items-center justify-center gap-10">
        <img
          src="/assets/c.png"
          alt="Cross-Platform Integration"
          className="w-40 md:w-56"
        />
        <div className="max-w-md text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">
            Cross-Platform Integration
          </h3>
          <p className="text-gray-700">
            Whether it’s a YouTube video, an Instagram story, a tweet, or all
            three at once, notifybear keeps you in the loop, so you never miss
            a moment from your favorite creators.
          </p>
        </div>
      </div>
    </section>
  );
}
