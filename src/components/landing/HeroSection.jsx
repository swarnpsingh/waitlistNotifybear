import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  CalendarDays,
  Instagram,
  Landmark,
  Linkedin,
  Mail,
  MessageCircle,
  ShoppingBag,
  UtensilsCrossed,
  Youtube,
} from 'lucide-react';
import mockup from '../../assets/mockrocket-capture.png';
import { PLAY_STORE_URL } from '../../constants/links';

const motionEase = [0.22, 1, 0.36, 1];

const notificationsSeed = [
  {
    id: 'whatsapp',
    app: 'WhatsApp',
    title: 'Mom: Are you coming home for dinner?',
    preview: 'I saved your plate. Call me when you leave.',
    time: '1m',
    priority: 'medium',
    score: 64,
    icon: MessageCircle,
    color: '#25D366',
  },
  {
    id: 'youtube',
    app: 'YouTube',
    title: 'New upload from Tech Feed',
    preview: 'This video is already trending in your subscriptions.',
    time: '3m',
    priority: 'low',
    score: 24,
    icon: Youtube,
    color: '#FF0033',
  },
  {
    id: 'gmail',
    app: 'Gmail',
    title: 'Priya, your boss, sent a message',
    preview: 'Need the client deck before the 11:30 call.',
    time: '4m',
    priority: 'high',
    score: 96,
    icon: Mail,
    color: '#EA4335',
  },
  {
    id: 'linkedin',
    app: 'LinkedIn',
    title: 'Your post got 1 new like',
    preview: 'Someone from product leadership interacted with it.',
    time: '5m',
    priority: 'medium',
    score: 58,
    icon: Linkedin,
    color: '#2E5FA3',
  },
  {
    id: 'zomato',
    app: 'Zomato',
    title: '40% off nearby restaurants',
    preview: 'Dinner deals end in 12 minutes.',
    time: '6m',
    priority: 'low',
    score: 18,
    icon: UtensilsCrossed,
    color: '#CB202D',
  },
  {
    id: 'hdfc',
    app: 'HDFC Bank',
    title: 'Debit card spent at Amazon',
    preview: '₹12,480 paid successfully just now.',
    time: '7m',
    priority: 'high',
    score: 94,
    icon: Landmark,
    color: '#7C3AED',
  },
  {
    id: 'instagram',
    app: 'Instagram',
    title: '3 story mentions waiting',
    preview: 'People tagged you in their latest updates.',
    time: '8m',
    priority: 'low',
    score: 22,
    icon: Instagram,
    color: '#E1306C',
  },
  {
    id: 'calendar',
    app: 'Google Calendar',
    title: 'Design sync in 15 minutes',
    preview: 'Meeting starts in your main calendar.',
    time: '9m',
    priority: 'high',
    score: 91,
    icon: CalendarDays,
    color: '#F5C518',
  },
  {
    id: 'flipkart',
    app: 'Flipkart',
    title: 'Big savings on your wishlist',
    preview: 'Offers you saved are about to expire.',
    time: '10m',
    priority: 'low',
    score: 16,
    icon: ShoppingBag,
    color: '#2874F0',
  },
];

function CountUp({ value, active }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) {
      setCurrent(0);
      return undefined;
    }

    let frameId;
    const startedAt = performance.now();
    const duration = 520;

    const step = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [active, value]);

  return <span>{current}</span>;
}

function NotificationCard({ notification, feedState, isTop }) {
  const Icon = notification.icon;
  const isAfter = feedState === 'after';
  const isHigh = notification.priority === 'high';
  const isMedium = notification.priority === 'medium';
  const accent = notification.color;

  return (
    <motion.div
      layout
      className="rounded-[24px] border px-4 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.22)]"
      style={{
        background: isAfter ? '#172645' : '#1A2B4A',
        borderColor: isAfter
          ? isHigh
            ? 'rgba(245, 197, 24, 0.5)'
            : isMedium
              ? 'rgba(46, 95, 163, 0.35)'
              : 'rgba(138, 155, 176, 0.22)'
          : 'rgba(255, 255, 255, 0.08)',
        opacity: isAfter && isMedium ? 0.88 : 1,
        transformOrigin: 'top center',
      }}
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: isAfter && isHigh ? 1.01 : 1,
      }}
      exit={{
        opacity: 0,
        y: 24,
        scale: 0.9,
        height: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0,
      }}
      transition={{ duration: 0.6, ease: motionEase }}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl"
          style={{
            background: `linear-gradient(145deg, ${accent} 0%, rgba(26, 43, 74, 0.95) 100%)`,
            boxShadow: `0 10px 24px ${accent}22`,
          }}
        >
          <Icon size={20} color="#fff" strokeWidth={2.2} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p
                className="truncate text-[0.75rem] font-semibold uppercase tracking-[0.12em]"
                style={{ color: isAfter ? '#D7E2F6' : '#B9C3D4' }}
              >
                {notification.app}
              </p>
              <p
                className="mt-1 text-[0.98rem] font-semibold leading-snug text-white"
                style={{
                  color: isAfter && notification.priority === 'low' ? '#CAD3E0' : '#FFFFFF',
                }}
              >
                {notification.title}
              </p>
            </div>

            {isAfter && (
              <div className="flex shrink-0 items-center gap-2">
                <span
                  className="inline-flex items-center rounded-full px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.16em] text-white"
                  style={{
                    background: isHigh ? '#F5C518' : isMedium ? '#2E5FA3' : '#8A9BB0',
                    color: isHigh ? '#111827' : '#fff',
                  }}
                >
                  {isHigh ? 'HIGH' : isMedium ? 'MED' : 'LOW'}
                </span>
                <span
                  className="inline-flex min-w-[3.1rem] items-center justify-center rounded-full border px-2 py-1 text-[0.72rem] font-semibold"
                  style={{
                    borderColor: isHigh ? 'rgba(245,197,24,0.35)' : 'rgba(138,155,176,0.25)',
                    color: isHigh ? '#F5C518' : '#C7D2E5',
                    background: 'rgba(255,255,255,0.03)',
                  }}
                >
                  <CountUp value={notification.score} active={isAfter} />
                </span>
              </div>
            )}
          </div>

          <div className="mt-2 flex items-center justify-between gap-3 text-[0.8rem] text-[#B8C4D7]">
            <p className="min-w-0 flex-1 truncate leading-relaxed">{notification.preview}</p>
            <span className="shrink-0 text-white/45">{notification.time}</span>
          </div>

          {isAfter && isTop && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.25 }}
              className="mt-3 inline-flex rounded-full px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.14em]"
              style={{ background: 'rgba(245, 197, 24, 0.14)', color: '#F5C518' }}
            >
              Needs your attention now
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function HeroSection() {
  const [feedState, setFeedState] = useState('before');
  const [buttonState, setButtonState] = useState('before');
  const timerRef = useRef(null);

  useEffect(() => () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }
  }, []);

  const highNotifications = notificationsSeed
    .filter((notification) => notification.priority === 'high')
    .sort((left, right) => right.score - left.score);
  const mediumNotifications = notificationsSeed.filter((notification) => notification.priority === 'medium');
  const lowNotifications = notificationsSeed.filter((notification) => notification.priority === 'low');

  const renderedNotifications = feedState === 'after'
    ? [...highNotifications, ...mediumNotifications]
    : notificationsSeed;

  const handleButtonClick = () => {
    if (buttonState === 'before') {
      setFeedState('after');
      setButtonState('transitioning');
      timerRef.current = window.setTimeout(() => {
        setButtonState('after');
      }, 650);
      return;
    }

    if (buttonState === 'after') {
      setFeedState('before');
      setButtonState('before');
    }
  };

  return (
    <section
      id="demo"
      className="relative isolate overflow-hidden scroll-mt-20"
      style={{
        background: 'linear-gradient(180deg, #09101F 0%, #0B1323 100%)',
        minHeight: '100vh',
      }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-[-9rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(245,197,24,0.16) 0%, rgba(245,197,24,0) 68%)' }}
        />
        <div
          className="absolute right-[-8rem] top-[12rem] h-[20rem] w-[20rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(46,95,163,0.22) 0%, rgba(46,95,163,0) 70%)' }}
        />
        <div
          className="absolute left-[-6rem] bottom-[8rem] h-[18rem] w-[18rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(138,155,176,0.16) 0%, rgba(138,155,176,0) 72%)' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-6xl flex-col items-center px-4 py-20 sm:px-6 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: motionEase }}
          className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white/70 backdrop-blur"
        >
          Interactive Android demo
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.h2
            key={feedState}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: motionEase }}
            className="text-center text-white"
            style={{ fontSize: 'clamp(2.1rem, 5vw, 4.2rem)', fontWeight: 700, letterSpacing: '-0.04em' }}
          >
            {feedState === 'before' ? 'Your phone right now.' : 'NotifyBear. Zero setup.'}
          </motion.h2>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: motionEase }}
          className="mt-12 flex w-full justify-center"
        >
          <div className="relative w-[min(100%,380px)] sm:w-[390px]" style={{ maxWidth: '100%' }}>
            <div
              className="relative overflow-hidden rounded-[2.9rem] border border-white/10 bg-[#09101F] p-3 shadow-[0_42px_120px_rgba(0,0,0,0.55)]"
              style={{ aspectRatio: '0.48 / 1' }}
            >
              <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/8 to-transparent" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#101A2E] px-3 pb-4 pt-4">
                <div className="mb-3 flex items-center justify-between px-1 text-[0.72rem] font-medium tracking-[0.15em] text-white/70">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
                  </div>
                </div>

                <div className="mb-4 flex items-center justify-between rounded-[1.5rem] border border-white/6 bg-white/4 px-4 py-3 text-white/85">
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/50">Notification shade</p>
                    <p className="mt-1 text-sm font-medium text-white/75">9 pending notifications</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/8 bg-white/5 text-white/60">
                    <span className="text-lg">•••</span>
                  </div>
                </div>

                <div className="flex-1 overflow-hidden">
                  <AnimatePresence initial={false} mode="popLayout">
                    {renderedNotifications.map((notification, index) => (
                      <motion.div key={notification.id} layout className="mb-2 last:mb-0" transition={{ duration: 0.6, ease: motionEase }}>
                        <NotificationCard
                          notification={notification}
                          feedState={feedState}
                          isTop={index === 0}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  <AnimatePresence>
                    {feedState === 'after' && (
                      <motion.div
                        initial={{ opacity: 0, y: 16, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.94 }}
                        transition={{ duration: 0.6, ease: motionEase }}
                        className="mt-2 rounded-[22px] border border-white/10 bg-[#12203A] px-4 py-3"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                              {lowNotifications.map((notification) => {
                                const Icon = notification.icon;
                                return (
                                  <span
                                    key={notification.id}
                                    className="flex h-7 w-7 items-center justify-center rounded-full border border-[#09101F]"
                                    style={{ background: notification.color }}
                                  >
                                    <Icon size={13} color="#fff" strokeWidth={2.4} />
                                  </span>
                                );
                              })}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white">4 low priority</p>
                              <p className="text-xs text-white/55">Collapsed into one quiet lane</p>
                            </div>
                          </div>
                          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/70">
                            Hidden
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.button
          type="button"
          onClick={handleButtonClick}
          disabled={buttonState === 'transitioning'}
          whileTap={{ scale: 0.98 }}
          className="mt-8 rounded-full font-semibold tracking-[0.02em] transition disabled:cursor-wait"
          style={{
            minWidth: buttonState === 'after' ? '132px' : '280px',
            padding: buttonState === 'after' ? '12px 20px' : '17px 28px',
            background: '#F5C518',
            color: '#111827',
            boxShadow: '0 16px 34px rgba(245, 197, 24, 0.28)',
          }}
        >
          {buttonState === 'after' ? 'Replay' : 'Let NotifyBear decide →'}
        </motion.button>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {['Zero setup', 'Learns from you', 'On-device AI'].map((label) => (
            <div
              key={label}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.72rem] font-semibold tracking-[0.04em] text-white/75 backdrop-blur"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NotificationDemo() {
  return (
    <>
      <section
        id="home"
        className="relative flex flex-col items-center overflow-hidden scroll-mt-20 pb-0"
        style={{
          background: `
            radial-gradient(ellipse 95% 48% at 50% 36%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 100%),
            linear-gradient(180deg, #3a8fbf 0%, #5aadd4 30%, #5aadd4 70%, #3a8fbf 100%)
          `,
          minHeight: '100vh',
        }}
      >
        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto px-6 pt-24 sm:pt-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-5 py-1.5 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm mb-6"
          >
            <span className="text-xs text-white font-semibold tracking-[0.18em] uppercase">Now on Android</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-extrabold text-white leading-[1.02] mb-4"
            style={{ fontSize: 'clamp(2.25rem, 6.5vw, 4.25rem)' }}
          >
            Cut notification<br />noise instantly
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="text-base sm:text-lg text-white/90 leading-relaxed mb-8 max-w-[640px]"
            style={{ marginInline: 'auto' }}
          >
            NotifyBear is live on Google Play — download and let on-device AI prioritize what matters so you only get the notifications you care about.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-3 justify-center mb-10 w-full"
          >
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download NotifyBear on Google Play"
              className="px-6 py-3 rounded-full bg-white text-blue-700 text-sm font-semibold tracking-[0.04em] uppercase hover:opacity-95 transition shadow-lg"
              style={{ minWidth: 200, textAlign: 'center' }}
            >
              Download on Play Store
            </a>

            <a
              href="#features"
              className="px-5 py-3 rounded-full border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition"
              style={{ minWidth: 160, textAlign: 'center' }}
            >
              Learn more
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9, ease: 'easeOut' }}
            className="relative w-full max-w-[460px] sm:max-w-[560px] mx-auto mb-[-56px]"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 35%, transparent 95%)',
              maskImage: 'linear-gradient(to bottom, black 35%, transparent 95%)',
            }}
          >
            <img
              src={mockup}
              alt="NotifyBear App Mockup"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-sm text-white/80 tracking-[0.02em] mb-12"
          >
            Free install • Instant access • Start in under 60 seconds
          </motion.p>
        </div>
      </section>

      <NotificationDemo />
    </>
  );
}

export default function LandingHeroSection() {
  return (
    <>
      <NotificationDemo />
      <HeroSection />
    </>
  );
}
