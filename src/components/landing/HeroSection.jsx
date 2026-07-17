import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown,
  Calendar,
  Check,
  Cpu,
  Landmark,
  Lock,
  Mail,
  MessageCircle,
  Star,
} from 'lucide-react';
import mascot from '../../assets/icon-mascot.png';
import { PLAY_STORE_URL } from '../../constants/links';
import AnimatedCounter from './AnimatedCounter';

const TRUST_BADGES = [
  { icon: Cpu, label: '100% on-device AI' },
  { icon: Lock, label: 'Notification content never leaves your phone' },
];

const HERO_STATS = [
  { value: 100, suffix: '%', label: 'runs on-device', color: 'text-bell-dark' },
  { value: 0, suffix: '', label: 'servers ever see your pings', color: 'text-focus' },
  { value: 1, suffix: 's', prefix: '<', label: 'to score each notification', color: 'text-ink' },
];

const DIGEST_ITEMS = [
  { id: 'calendar', icon: Calendar, iconBg: '#2F5FD6', text: "Standup starts in 15 min — you're the host", tag: 'HIGH', done: true },
  { id: 'bank', icon: Landmark, iconBg: '#1f7a4d', text: 'Debit of $84.20 flagged as unusual', tag: 'HIGH', done: true },
  { id: 'whatsapp', icon: MessageCircle, iconBg: '#25D366', text: "Mom: Don't forget dinner Sunday", tag: 'MEDIUM', done: false },
];

const FILTERED_COUNT = 41;
const FILTER_STAT_LINE = `${FILTERED_COUNT} notifications filtered — ${DIGEST_ITEMS.length} needed you.`;

/* Small floating chips around the digest: one delivered, one held, one filtered.
   Together they tell the whole product story without a storm of motion. */
const FLOATING_CHIPS = [
  {
    id: 'delivered',
    icon: Calendar,
    iconBg: '#2F5FD6',
    app: 'Calendar',
    text: 'Standup in 15 min',
    verdict: 'Delivered now',
    verdictClass: 'bg-bell/20 text-bell-dark',
    position: 'right-[-4%] top-[4%] sm:right-[-6%]',
    delay: 0.9,
    floatDelay: '0s',
  },
  {
    id: 'held',
    icon: MessageCircle,
    iconBg: '#25D366',
    app: 'WhatsApp',
    text: 'Weekend plans? 🎉',
    verdict: 'Held for later',
    verdictClass: 'bg-focus/12 text-focus',
    position: 'left-[-4%] bottom-[16%] sm:left-[-8%]',
    delay: 1.15,
    floatDelay: '1.8s',
  },
  {
    id: 'filtered',
    icon: Mail,
    iconBg: '#EA4335',
    app: 'Gmail',
    text: 'Flash sale — 40% off',
    verdict: 'Filtered out',
    verdictClass: 'bg-ink/8 text-ink/45',
    muted: true,
    position: 'left-[-2%] top-[10%] sm:left-[-6%]',
    delay: 1.4,
    floatDelay: '3.2s',
  },
];

function DigestScreen({ animated = true }) {
  return (
    <div
      className="relative w-[min(400px,84vw)] overflow-hidden rounded-[28px] ring-1 ring-white/15 shadow-[0_30px_80px_rgba(6,13,28,0.5)]"
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
        <p className="mt-1.5 text-sm text-cream/50">{FILTER_STAT_LINE}</p>

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
                transition={{ duration: 0.45, delay: 0.7 + i * 0.16, ease: [0.4, 0, 0.2, 1] }}
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

function FloatingChip({ chip, reducedMotion }) {
  const Icon = chip.icon;
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 18, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: chip.delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute z-20 hidden sm:block ${chip.position}`}
    >
      <div className="float-soft" style={{ animationDelay: chip.floatDelay }}>
        <div
          className={`w-[200px] rounded-2xl bg-white/95 p-3 shadow-[0_14px_36px_rgba(22,41,79,0.16)] ring-1 ring-ink/5 backdrop-blur-sm ${
            chip.muted ? 'opacity-60 saturate-50' : ''
          }`}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[9px]"
              style={{ background: chip.iconBg }}
            >
              <Icon size={15} color="#fff" strokeWidth={2.25} />
            </span>
            <div className="min-w-0 flex-1">
              <span className="text-[0.58rem] font-bold uppercase tracking-[0.09em] text-ink/45">
                {chip.app}
              </span>
              <p className={`truncate text-[0.76rem] font-medium leading-snug text-ink ${chip.muted ? 'line-through decoration-ink/30' : ''}`}>
                {chip.text}
              </p>
            </div>
          </div>
          <span
            className={`mt-2 inline-flex rounded-full px-2 py-0.5 text-[0.56rem] font-bold uppercase tracking-[0.07em] ${chip.verdictClass}`}
          >
            {chip.verdict}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
});

export default function HeroSection() {
  const reducedMotion = useReducedMotion();
  const entrance = (delay) => (reducedMotion ? {} : fadeUp(delay));

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden pb-16 pt-28 lg:pt-32"
    >
      {/* Brand hex-line texture, fading toward the fold */}
      <div
        aria-hidden
        className="hex-watermark-ink"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 12%, black 20%, transparent 70%)',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 12%, black 20%, transparent 70%)',
        }}
      />

      {/* Animated gradient mesh — three drifting brand-color blobs replace the single static glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="mesh-blob-1 absolute -top-32 right-[-8%] h-[560px] w-[560px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(245,197,24,0.2) 0%, rgba(245,197,24,0) 65%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          className="mesh-blob-2 absolute -left-24 top-1/3 h-[440px] w-[440px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(47,95,214,0.14) 0%, rgba(47,95,214,0) 65%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          className="mesh-blob-3 absolute bottom-[-10%] right-[18%] h-[380px] w-[380px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(31,157,99,0.12) 0%, rgba(31,157,99,0) 65%)',
            filter: 'blur(46px)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:gap-10 lg:px-10">
        {/* Left: copy */}
        <div className="flex flex-col items-start text-left">
          <motion.div {...entrance(0)} className="mb-7 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 py-1.5 pl-1.5 pr-4 backdrop-blur-sm">
              <span className="rounded-full bg-bell px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-ink">Live</span>
              <span className="text-xs font-semibold text-ink">Now on Google Play</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-ink/55">
              <Star size={13} strokeWidth={2.25} className="text-bell-dark" />
              <span className="text-xs font-medium">Rated on Google Play</span>
            </div>
          </motion.div>

          <motion.h1
            {...entrance(0.08)}
            className="font-display font-medium leading-[1.02] text-ink"
            style={{ fontSize: 'clamp(2.6rem, 4.6vw, 4.4rem)', letterSpacing: '-0.035em' }}
          >
            Not everything
            <br />
            <em className="text-focus">deserves to reach you.</em>
          </motion.h1>

          <motion.p
            {...entrance(0.18)}
            className="mt-6 max-w-[500px] text-base leading-relaxed text-ink/60 sm:text-lg"
          >
            Right now you get two options: be interrupted by everything, or silence it all
            and find out later what you missed. Neither one works when the stakes are real.
            Notifybear decides what reaches you — and when.
          </motion.p>

          <motion.div
            {...entrance(0.28)}
            className="mt-9 flex w-full flex-col items-start gap-3 sm:flex-row"
          >
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download NotifyBear on Google Play"
              className="btn-primary-light w-full text-center sm:w-auto"
              style={{ minWidth: 210 }}
            >
              Download on Play Store
            </a>
            <a
              href="#why"
              className="btn-outline w-full text-center text-ink hover:bg-ink/5 sm:w-auto"
              style={{ minWidth: 150 }}
            >
              See how it works
            </a>
          </motion.div>

          <motion.div
            {...entrance(0.34)}
            className="mt-9 flex w-full flex-wrap items-center gap-x-8 gap-y-4 border-t border-ink/10 pt-7"
          >
            {HERO_STATS.map(({ value, suffix, prefix, label, color }) => (
              <div key={label} className="flex flex-col">
                <span className={`font-display text-2xl font-semibold leading-none ${color}`}>
                  <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
                </span>
                <span className="mt-1.5 text-[0.7rem] font-medium leading-snug text-ink/45">{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            {...entrance(0.42)}
            className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-ink/55">
                <Icon size={14} strokeWidth={2.25} className="text-bell-dark" />
                <span className="text-xs font-medium tracking-tight">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: calm digest with the three verdicts floating around it */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div className="relative flex items-center justify-center py-8">
            {FLOATING_CHIPS.map((chip) => (
              <FloatingChip key={chip.id} chip={chip} reducedMotion={reducedMotion} />
            ))}
            <DigestScreen animated={!reducedMotion} />
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#why"
        aria-label="Scroll to learn more"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink/35 transition-colors hover:text-ink/60 lg:flex"
      >
        <span className="text-[0.62rem] font-bold uppercase tracking-[0.22em]">Scroll</span>
        <motion.span
          animate={reducedMotion ? {} : { y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} strokeWidth={2} />
        </motion.span>
      </motion.a>
    </section>
  );
}
