import notifications from "../assets/notifications.png";

export default function NotificationMockup() {
  return (
    <section id="mockup" className="scroll-mt-20 bg-[#00171F] py-16  px-4 sm:px-6 text-center">
      {/* Heading */}
      <div className="font-garamond text-3xl sm:text-4xl md:text-5xl leading-tight text-white font-extrabold mt-12 sm:mt-20">
        <p className="inline">Tired of having notification getting all </p>
        <br />
        <span className="inline text-[#2D94f4] font-extrabold">
          cluttered up{" "}
        </span>
        <span className="inline font-extrabold">in your panel?</span>
      </div>

      {/* Paragraph */}
      <p className="text-base sm:text-lg text-[#CFCFCF] max-w-xl mx-auto mt-6 px-2">
        Designed to simplify your digital life — track updates from multiple platforms in one powerful, unified dashboard.
      </p>

      {/* Notification Image */}
      <div className="flex justify-center items-center pt-12 sm:pt-16">
        <img
          src={notifications}
          alt="Stacked notifications"
          className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] drop-shadow-xl"
        />
      </div>
    </section>
  );
}
