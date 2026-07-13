import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import mascot from "../assets/icon-mascot.png";
import { PLAY_STORE_URL } from "../constants/links";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const evaluate = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const viewport = window.innerHeight;
      const pastHero = scrollY > viewport * 0.8;
      const nearFooter = scrollY + viewport > docHeight - 480;
      setVisible(pastHero && !nearFooter);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(evaluate);
        ticking = true;
      }
    };

    evaluate();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2"
        >
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full bg-ink pl-2.5 pr-4 py-2 text-cream shadow-[0_12px_32px_rgba(22,41,79,0.35)] ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-ink-light"
          >
            <img src={mascot} alt="" className="h-7 w-7 rounded-full object-contain bg-white/10 p-1" />
            <span className="text-sm font-semibold tracking-tight">Let Notifybear decide</span>
            <ArrowUpRight size={15} strokeWidth={2.5} className="text-bell" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
