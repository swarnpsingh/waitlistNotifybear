import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  Calendar,
  Check,
  Cpu,
  Instagram,
  Landmark,
  Linkedin,
  Lock,
  Mail,
  MessageCircle,
  ShoppingBag,
  Slack,
  Star,
  Twitter,
  Youtube,
} from 'lucide-react';
import mascot from '../../assets/icon-mascot.png';
import { PLAY_STORE_URL } from '../../constants/links';

const TRUST_BADGES = [
  { icon: Cpu, label: '100% on-device AI' },
  { icon: Lock, label: 'No signup wall' },
];

/* Scatter offsets are in px from stage center at a 1240px-wide stage;
   they get scaled down on narrower screens. */
const NOTIFICATIONS = [
  { id: 'whatsapp', app: 'WhatsApp', icon: MessageCircle, iconBg: '#25D366', text: "Mom: Don't forget dinner on Sunday", time: 'now', x: -520, y: -150, rotate: -6, delay: 0 },
  { id: 'instagram', app: 'Instagram', icon: Instagram, iconBg: '#E1306C', text: 'ananya_.k liked your story', time: '1m', x: 430, y: -168, rotate: 5, delay: 0.22 },
  { id: 'gmail', app: 'Gmail', icon: Mail, iconBg: '#EA4335', text: 'Flash sale — 40% off ends tonight', time: 'now', x: -160, y: -188, rotate: -3, delay: 0.44 },
  { id: 'slack', app: 'Slack', icon: Slack, iconBg: '#611F69', text: '#general: 14 new messages', time: '2m', x: 545, y: 40, rotate: 7, delay: 0.62 },
  { id: 'linkedin', app: 'LinkedIn', icon: Linkedin, iconBg: '#0A66C2', text: 'You appeared in 9 searches this week', time: '5m', x: -560, y: 62, rotate: 4, delay: 0.8 },
  { id: 'youtube', app: 'YouTube', icon: Youtube, iconBg: '#FF0000', text: 'New upload from a channel you follow', time: 'now', x: 245, y: -52, rotate: -5, delay: 0.98 },
  { id: 'twitter', app: 'X', icon: Twitter, iconBg: '#16294F', text: 'You have 3 new followers', time: '8m', x: -310, y: 138, rotate: 6, delay: 1.16 },
  { id: 'calendar', app: 'Calendar', icon: Calendar, iconBg: '#2F5FD6', text: "Standup in 15 min — you're the host", time: 'now', x: 80, y: 176, rotate: -4, delay: 1.34 },
  { id: 'bank', app: 'Bank', icon: Landmark, iconBg: '#1f7a4d', text: 'Debit of $84.20 flagged as unusual', time: 'now', x: 470, y: 188, rotate: 3, delay: 1.52 },
  { id: 'delivery', app: 'Delivery', icon: ShoppingBag, iconBg: '#FC8019', text: 'Your order is out for delivery', time: '3m', x: -55, y: -30, rotate: 2, delay: 1.7 },
];

const DIGEST_ITEMS = [
  { id: 'calendar', icon: Calendar, iconBg: '#2F5FD6', text: "Standup starts in 15 min — you're the host", tag: 'HIGH', done: true },
  { id: 'bank', icon: Landmark, iconBg: '#1f7a4d', text: 'Debit of $84.20 flagged as unusual', tag: 'HIGH', done: true },
  { id: 'whatsapp', icon: MessageCircle, iconBg: '#25D366', text: "Mom: Don't forget dinner Sunday", tag: 'MEDIUM', done: false },
];

const PHASE_DURATIONS = { storm: 4400, submerge: 1100, calm: 3200, product: 6400 };
const PHASE_ORDER = ['storm', 'submerge', 'calm', 'product'];

function NotificationCard({ app, icon: Icon, iconBg, text, time }) {
  return (
    <div className="w-[212px] rounded-2xl bg-white/95 p-3 shadow-[0_14px_36px_rgba(22,41,79,0.16)] ring-1 ring-ink/5 backdrop-blur-sm sm:w-[256px]">
      <div className="flex items-center gap-2.5">
        <span
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[9px]"
          style={{ background: iconBg }}
        >
          <Icon size={15} color="#fff" strokeWidth={2.25} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.09em] text-ink/45">{app}</span>
            <span className="text-[0.6rem] font-medium text-ink/35">{time}</span>
          </div>
          <p className="truncate text-[0.78rem] font-medium leading-snug text-ink">{text}</p>
        </div>
      </div>
    </div>
  );
}

function DigestScreen({ animated = true }) {
  return (
    <div
      className="relative w-[min(400px,82vw)] overflow-hidden rounded-[28px] ring-1 ring-white/15 shadow-[0_30px_80px_rgba(6,13,28,0.55)]"
      style={{ background: 'linear-gradient(180deg, #22396B 0%, #1B2F5B 100%)' }}
    >
      <div className="card-glow-base" />

      <div className="relative px-6 pb-6 pt-5 sm:px-7">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={mascot} alt="" className="h-5 w-5 object-contain" />
            <span className="text-xs font-semibold tracking-tight text-cream/80">notifybear</span>
          </div>
          <span className="text-[0.65rem] font-medium text-cream/40">Today, 9:41</span>
        </div>

        <h3
          className="font-display font-medium leading-[1.08] text-cream"
          style={{ fontSize: 'clamp(1.35rem, 2.4vw, 1.75rem)', letterSpacing: '-0.02em' }}
        >
          You're all caught up.
        </h3>
        <p className="mt-1.5 text-sm text-cream/50">41 notifications filtered — 3 needed you.</p>

        <p className="mb-1 mt-5 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-cream/35">
          What mattered
        </p>

        <div>
          {DIGEST_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={animated ? { opacity: 0, y: 10 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.55 + i * 0.16, ease: [0.4, 0, 0.2, 1] }}
                className="flex items-center gap-3 border-t border-white/8 py-3 first:border-t-0"
              >
                <span
                  className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-[5px] border"
                  style={{
                    background: item.done ? '#F5C518' : 'transparent',
                    borderColor: item.done ? '#F5C518' : 'rgba(255,255,255,0.25)',
                  }}
                >
                  {item.done && <Check size={12} strokeWidth={3} color="#16294F" />}
                </span>
                <span
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg"
                  style={{ background: item.iconBg }}
                >
                  <Icon size={14} color="#fff" strokeWidth={2.25} />
                </span>
                <p
                  className="min-w-0 flex-1 truncate text-[0.82rem] leading-snug text-cream"
                  style={{ opacity: item.done ? 0.45 : 1 }}
                >
                  {item.text}
                </p>
                <span
                  className="flex-shrink-0 rounded-full px-2 py-0.5 text-[0.58rem] font-bold tracking-[0.06em]"
                  style={{
                    background: item.tag === 'HIGH' ? 'rgba(245,197,24,0.16)' : 'rgba(47,95,214,0.2)',
                    color: item.tag === 'HIGH' ? '#F5C518' : '#8FAAF0',
                  }}
                >
                  {item.tag}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function HeroStage() {
  const [phase, setPhase] = useState('storm');
  const [cycle, setCycle] = useState(0);
  const stageRef = useRef(null);
  const [scale, setScale] = useState({ x: 1, y: 1 });

  useEffect(() => {
    const update = () => {
      const w = stageRef.current?.offsetWidth ?? 1240;
      // Fit the widest scatter offset (±560) plus half a card inside the stage.
      setScale({
        x: Math.min(1, Math.max(0.3, (w / 2 - 128) / 560)),
        y: Math.min(1, Math.max(0.7, w / 1240)),
      });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const next = PHASE_ORDER[(PHASE_ORDER.indexOf(phase) + 1) % PHASE_ORDER.length];
      if (next === 'storm') setCycle((c) => c + 1);
      setPhase(next);
    }, PHASE_DURATIONS[phase]);
    return () => clearTimeout(timer);
  }, [phase]);

  const showCards = phase === 'storm' || phase === 'submerge';
  const showLogo = phase === 'submerge' || phase === 'calm';

  return (
    <div ref={stageRef} className="relative h-full w-full">
      {/* Phase 1–2: buzzing notifications that get pulled into the logo */}
      {showCards &&
        NOTIFICATIONS.map((n) => (
          <motion.div
            key={`${cycle}-${n.id}`}
            className="absolute left-1/2 top-1/2"
            style={{ zIndex: 2 }}
            initial={{ x: n.x * scale.x, y: n.y * scale.y, rotate: n.rotate, scale: 0.4, opacity: 0 }}
            animate={
              phase === 'storm'
                ? {
                    x: n.x * scale.x,
                    y: n.y * scale.y,
                    rotate: n.rotate,
                    scale: 1,
                    opacity: 1,
                    transition: { delay: n.delay, duration: 0.5, ease: [0.18, 0.89, 0.32, 1.15] },
                  }
                : {
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 0.1,
                    opacity: 0,
                    transition: { delay: (n.delay % 0.5) * 0.6, duration: 0.55, ease: [0.55, 0, 0.85, 1] },
                  }
            }
          >
            <div className="-translate-x-1/2 -translate-y-1/2">
              <div
                className={phase === 'storm' ? 'notif-buzz' : undefined}
                style={{ animationDelay: `${(n.delay % 0.7).toFixed(2)}s` }}
              >
                <NotificationCard {...n} />
              </div>
            </div>
          </motion.div>
        ))}

      {/* Phase 2–3: the logo absorbs everything, then a calm line */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
      <AnimatePresence>
        {showLogo && (
          <motion.div
            key="logo"
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.45 } }}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: [0.5, 1.12, 0.97, 1] }}
              transition={{ duration: 1.1, times: [0, 0.5, 0.8, 1], ease: 'easeOut' }}
              className="flex h-24 w-24 items-center justify-center rounded-[26px] bg-ink ring-1 ring-white/15"
              style={{ boxShadow: '0 0 70px 18px rgba(245,197,24,0.3), 0 24px 60px rgba(22,41,79,0.3)' }}
            >
              <img src={mascot} alt="" className="h-14 w-14 object-contain" />
            </motion.div>

            {phase === 'calm' && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                className="mt-7 text-center"
              >
                <p
                  className="font-display font-medium italic text-ink"
                  style={{ fontSize: 'clamp(1.35rem, 2.6vw, 1.8rem)', letterSpacing: '-0.02em' }}
                >
                  Calm, by design.
                </p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="mt-2 text-sm text-ink/50"
                >
                  41 interruptions filtered. Zero felt.
                </motion.p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      </div>

      {/* Phase 4: the product screen */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
      <AnimatePresence>
        {phase === 'product' && (
          <motion.div
            key="product"
            initial={{ opacity: 0, y: 48, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
            exit={{ opacity: 0, y: 24, scale: 0.97, transition: { duration: 0.45 } }}
          >
            <DigestScreen />
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pb-10 pt-24 lg:pb-12 lg:pt-28"
      style={{
        background: `
          radial-gradient(900px 620px at 88% 8%, rgba(245,197,24,0.16) 0%, rgba(245,197,24,0) 60%),
          radial-gradient(800px 620px at 4% 92%, rgba(47,95,214,0.1) 0%, rgba(47,95,214,0) 60%),
          linear-gradient(180deg, #FCFAF4 0%, #F8F4EA 55%, #F2ECDC 100%)
        `,
      }}
    >
      <div className="relative z-10 mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:px-10">
        {/* Left: copy */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-white/60 py-1.5 pl-1.5 pr-4 backdrop-blur-sm">
              <span className="rounded-full bg-bell px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-ink">Live</span>
              <span className="text-xs font-semibold text-ink">Now on Google Play</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-ink/55">
              <Star size={13} strokeWidth={2.25} className="text-bell-dark" />
              <span className="text-xs font-medium">Rated on Google Play</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7 }}
            className="font-display font-medium leading-[1.02] text-ink"
            style={{ fontSize: 'clamp(2.5rem, 4.4vw, 4.25rem)', letterSpacing: '-0.035em' }}
          >
            All your notifications.
            <br />
            <em>None of the noise.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7 }}
            className="mt-5 max-w-[480px] text-base leading-relaxed text-ink/65 sm:text-lg"
          >
            Notifybear's on-device AI reads every buzz so you don't have to — and surfaces
            only the handful that actually matter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.7 }}
            className="mt-8 flex w-full flex-col items-start gap-3 sm:flex-row"
          >
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download NotifyBear on Google Play"
              className="btn-primary-light w-full sm:w-auto"
              style={{ minWidth: 210, textAlign: 'center' }}
            >
              Download on Play Store
            </a>
            <a
              href="#demo"
              className="btn-outline w-full text-ink hover:bg-ink/5 sm:w-auto"
              style={{ minWidth: 150, textAlign: 'center' }}
            >
              See how it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-ink/55">
                <Icon size={14} strokeWidth={2.25} className="text-bell-dark" />
                <span className="text-xs font-medium tracking-tight">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: the story — buzz → absorb → calm → product */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          <div className="relative h-[460px] overflow-hidden sm:h-[520px] lg:h-[600px]">
            {reducedMotion ? (
              <div className="relative flex h-full items-center justify-center">
                <DigestScreen animated={false} />
              </div>
            ) : (
              <HeroStage />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
