import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  Mail,
  Youtube,
  Linkedin,
  Instagram,
  Calendar,
  Landmark,
  ShoppingBag,
  Sparkles,
  EyeOff,
  RotateCcw,
  Signal,
  Wifi,
  BatteryFull,
} from 'lucide-react';

const NOTIFICATIONS = [
  {
    id: 'whatsapp',
    app: 'WhatsApp',
    icon: MessageCircle,
    iconBg: '#25D366',
    title: 'Family Group',
    preview: "Mom: Don't forget dinner on Sunday",
    time: '2m',
    priority: 'medium',
    reason: 'Family — never filtered',
  },
  {
    id: 'youtube',
    app: 'YouTube',
    icon: Youtube,
    iconBg: '#FF0000',
    title: 'YouTube',
    preview: 'New video from a channel you follow',
    time: '5m',
    priority: 'low',
    reason: 'New upload — it can wait',
  },
  {
    id: 'gmail',
    app: 'Gmail',
    icon: Mail,
    iconBg: '#EA4335',
    title: 'Priya Sharma',
    preview: 'Re: Q3 roadmap — quick question on timeline',
    time: '8m',
    priority: 'medium',
    reason: 'A real person, waiting on you',
  },
  {
    id: 'instagram',
    app: 'Instagram',
    icon: Instagram,
    iconBg: '#E1306C',
    title: 'Instagram',
    preview: 'sam.codes liked your photo',
    time: '11m',
    priority: 'low',
    reason: 'A like is not urgent',
  },
  {
    id: 'calendar',
    app: 'Calendar',
    icon: Calendar,
    iconBg: '#2F5FD6',
    title: 'Standup',
    preview: 'Starts in 15 min · You are the host',
    time: '12m',
    priority: 'high',
    whyThisMatters: "Meeting starts in 15 min — you're the host.",
    reason: "You're the host — starts in 15 min",
  },
  {
    id: 'linkedin',
    app: 'LinkedIn',
    icon: Linkedin,
    iconBg: '#0A66C2',
    title: 'LinkedIn',
    preview: 'Someone viewed your profile',
    time: '20m',
    priority: 'low',
    reason: 'Vanity ping',
  },
  {
    id: 'bank',
    app: 'Bank',
    icon: Landmark,
    iconBg: '#1f7a4d',
    title: 'Bank Alert',
    preview: 'Debit of $84.20 at Whole Foods',
    time: '24m',
    priority: 'high',
    reason: 'Unusual charge worth a look',
  },
  {
    id: 'delivery',
    app: 'FoodExpress',
    icon: ShoppingBag,
    iconBg: '#FF6B35',
    title: 'FoodExpress',
    preview: '50% off your next order — today only',
    time: '38m',
    priority: 'low',
    reason: 'Promo blast',
  },
];

const LOW_COUNT = NOTIFICATIONS.filter((n) => n.priority === 'low').length;
const KEPT_COUNT = NOTIFICATIONS.length - LOW_COUNT;
const AFTER_ORDER = [
  ...NOTIFICATIONS.filter((n) => n.priority === 'high'),
  ...NOTIFICATIONS.filter((n) => n.priority === 'medium'),
];
const TOP_HIGH_ID = NOTIFICATIONS.find((n) => n.priority === 'high')?.id;

function NotificationRow({ notification, phase, index, entered }) {
  const { icon: Icon, iconBg, app, title, preview, time, priority } = notification;
  const isAfter = phase === 'after';
  const isHigh = isAfter && priority === 'high';
  const isMedium = isAfter && priority === 'medium';
  const showWhy = isHigh && notification.id === TOP_HIGH_ID;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: entered ? (isMedium ? 0.5 : 1) : 0,
        y: entered ? 0 : 10,
        boxShadow: isHigh
          ? '0 1px 2px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.16)'
          : '0 1px 2px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)',
      }}
      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
      transition={{
        duration: 0.5,
        delay: entered ? (phase === 'before' ? index * 0.09 : index * 0.04) : 0,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{
        background: '#fff',
        borderRadius: 18,
        padding: '12px 14px',
        marginBottom: 10,
        position: 'relative',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 9,
            background: iconBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Icon size={16} color="#fff" strokeWidth={2.25} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#111', letterSpacing: '-0.01em' }}>
              {app}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
              {isHigh && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  style={{
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    color: '#16294F',
                    background: '#F5C518',
                    borderRadius: 999,
                    padding: '2px 7px',
                  }}
                >
                  HIGH
                </motion.span>
              )}
              <span style={{ fontSize: '0.68rem', color: '#aaa' }}>{time}</span>
            </div>
          </div>
          <p
            style={{
              fontSize: '0.78rem',
              fontWeight: 600,
              color: '#333',
              margin: '2px 0 1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontSize: '0.75rem',
              color: '#888',
              margin: 0,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {preview}
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showWhy && (
          <motion.div
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{
              marginTop: 8,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(47,95,214,0.10)',
              borderRadius: 10,
              padding: '6px 9px',
            }}
          >
            <Sparkles size={12} color="#2F5FD6" strokeWidth={2.5} />
            <span style={{ fontSize: '0.68rem', color: '#2F5FD6', fontWeight: 600, lineHeight: 1.3 }}>
              {notification.whyThisMatters}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function VerdictChip({ notification, phase, index }) {
  const { priority } = notification;

  if (phase !== 'after') {
    return (
      <span className="flex items-center gap-1">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink/30" />
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-ink/35">
          reading
        </span>
      </span>
    );
  }

  const style =
    priority === 'high'
      ? { background: '#F5C518', color: '#16294F', label: 'KEPT · HIGH' }
      : priority === 'medium'
        ? { background: 'rgba(47,95,214,0.14)', color: '#2F5FD6', label: 'KEPT' }
        : { background: 'rgba(22,41,79,0.08)', color: 'rgba(22,41,79,0.45)', label: 'MUTED' };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.15 + index * 0.11, ease: [0.18, 0.89, 0.32, 1.15] }}
      className="rounded-full px-2 py-0.5 text-[0.6rem] font-bold tracking-[0.06em]"
      style={{ background: style.background, color: style.color }}
    >
      {style.label}
    </motion.span>
  );
}

function DecisionRow({ notification, phase, index, entered }) {
  const { icon: Icon, iconBg, app, reason, priority } = notification;
  const muted = phase === 'after' && priority === 'low';

  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: entered ? (muted ? 0.45 : 1) : 0, x: entered ? 0 : 12 }}
      transition={{ duration: 0.45, delay: entered ? index * 0.06 : 0, ease: [0.4, 0, 0.2, 1] }}
      className="flex items-center gap-3 border-t border-ink/8 py-2.5 first:border-t-0"
    >
      <span
        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg"
        style={{ background: iconBg }}
      >
        <Icon size={13} color="#fff" strokeWidth={2.25} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[0.8rem] font-semibold leading-tight text-ink">{app}</p>
        <p className="truncate text-[0.72rem] leading-snug text-ink/50">{reason}</p>
      </div>
      <VerdictChip notification={notification} phase={phase} index={index} />
    </motion.div>
  );
}

export default function InteractiveDemoSection() {
  const [phase, setPhase] = useState('before');
  const [showReplay, setShowReplay] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (phase !== 'after') return undefined;
    const timer = setTimeout(() => setShowReplay(true), 650);
    return () => clearTimeout(timer);
  }, [phase]);

  const list = phase === 'after' ? AFTER_ORDER : NOTIFICATIONS;

  const handleDecide = () => setPhase('after');
  const handleReplay = () => {
    setShowReplay(false);
    setPhase('before');
  };

  return (
    <section id="demo" className="relative overflow-hidden bg-cream py-24 sm:py-28">
      <div
        className="hex-watermark-ink"
        style={{
          WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, black 22%)',
          maskImage: 'linear-gradient(180deg, transparent 0%, black 22%)',
        }}
      />
      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2
            className="font-display font-medium text-ink"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
          >
            See Notifybear decide.
          </h2>
          <p className="mx-auto mt-4 max-w-[420px] text-[0.95rem] leading-relaxed text-ink/55">
            Eight notifications land at once. Tap once, and the on-device AI calls
            each one — keep, rank, or mute.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => setEntered(true)}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16"
        >
          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div style={{ position: 'relative' }}>
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  left: '50%',
                  bottom: -20,
                  transform: 'translateX(-50%)',
                  width: '80%',
                  height: 120,
                  background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.42) 0%, rgba(245,197,24,0) 72%)',
                  filter: 'blur(20px)',
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: 'min(320px, 86vw)',
                  borderRadius: 44,
                  background: 'linear-gradient(155deg, #1c1c1f 0%, #0b0b0d 40%, #0b0b0d 60%, #1c1c1f 100%)',
                  padding: 10,
                  boxShadow: '0 30px 60px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.06)',
                }}
              >
                {/* Volume rocker (left edge) */}
                <div
                  style={{
                    position: 'absolute',
                    left: -2,
                    top: 108,
                    width: 3,
                    height: 38,
                    borderRadius: '0 3px 3px 0',
                    background: 'linear-gradient(90deg, #060607 0%, #232326 100%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    left: -2,
                    top: 156,
                    width: 3,
                    height: 38,
                    borderRadius: '0 3px 3px 0',
                    background: 'linear-gradient(90deg, #060607 0%, #232326 100%)',
                  }}
                />
                {/* Power button (right edge) */}
                <div
                  style={{
                    position: 'absolute',
                    right: -2,
                    top: 132,
                    width: 3,
                    height: 60,
                    borderRadius: '3px 0 0 3px',
                    background: 'linear-gradient(270deg, #060607 0%, #232326 100%)',
                  }}
                />

                <div
                  style={{
                    position: 'relative',
                    borderRadius: 34,
                    overflow: 'hidden',
                    height: 560,
                    background: 'linear-gradient(180deg, #2F5FD6 0%, #16294F 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Status bar */}
                  <div
                    style={{
                      flexShrink: 0,
                      padding: '14px 20px 10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#fff' }}>9:41</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <Signal size={13} color="#fff" strokeWidth={2.5} />
                      <Wifi size={13} color="#fff" strokeWidth={2.5} />
                      <BatteryFull size={16} color="#fff" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Punch-hole camera */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: '#04070a',
                      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 2px rgba(120,180,220,0.6)',
                    }}
                  />

                  {/* Feed */}
                  <div
                    className="demo-feed"
                    style={{
                      flex: 1,
                      overflowY: 'auto',
                      padding: '4px 14px 16px',
                    }}
                  >
                    <AnimatePresence initial={false}>
                      {list.map((notification, i) => (
                        <NotificationRow key={notification.id} notification={notification} phase={phase} index={i} entered={entered} />
                      ))}
                      {phase === 'after' && (
                        <motion.div
                          key="filtered-pill"
                          layout
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.55, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 6,
                            background: '#e5e7eb',
                            color: '#888',
                            borderRadius: 999,
                            padding: '8px 14px',
                            margin: '4px auto 0',
                            width: 'fit-content',
                          }}
                        >
                          <EyeOff size={12} strokeWidth={2.25} />
                          <span style={{ fontSize: '0.7rem', fontWeight: 600 }}>
                            {LOW_COUNT} filtered by Notifybear
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Gesture navigation bar */}
                  <div
                    style={{
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '8px 0 10px',
                    }}
                  >
                    <div
                      style={{
                        width: 108,
                        height: 4,
                        borderRadius: 999,
                        background: 'rgba(255,255,255,0.55)',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decision ledger: the AI's call on every notification */}
          <div className="mx-auto w-full max-w-[520px] lg:mx-0">
            <div className="rounded-[28px] bg-white/65 p-5 ring-1 ring-ink/8 shadow-[0_20px_60px_rgba(22,41,79,0.08)] backdrop-blur-sm sm:p-6">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[0.66rem] font-bold uppercase tracking-[0.16em] text-ink/40">
                  Notifybear's call
                </p>
                <AnimatePresence mode="wait">
                  {phase === 'after' ? (
                    <motion.p
                      key="done"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-[0.66rem] font-bold uppercase tracking-[0.12em] text-focus"
                    >
                      {KEPT_COUNT} surfaced · {LOW_COUNT} muted
                    </motion.p>
                  ) : (
                    <motion.p
                      key="pending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-[0.66rem] font-bold uppercase tracking-[0.12em] text-ink/35"
                    >
                      {NOTIFICATIONS.length} waiting
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div>
                {NOTIFICATIONS.map((n, i) => (
                  <DecisionRow key={n.id} notification={n} phase={phase} index={i} entered={entered} />
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="mt-6 flex min-h-[52px] items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                {phase === 'before' ? (
                  <motion.button
                    key="decide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={handleDecide}
                    className="btn-primary-light"
                    style={{ border: 'none', cursor: 'pointer' }}
                  >
                    Let Notifybear decide
                  </motion.button>
                ) : (
                  showReplay && (
                    <motion.button
                      key="replay"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onClick={handleReplay}
                      className="btn-outline hover:bg-ink/5"
                      style={{ background: 'transparent', color: '#16294F', cursor: 'pointer' }}
                    >
                      <RotateCcw size={15} strokeWidth={2.25} style={{ marginRight: 8 }} />
                      Replay
                    </motion.button>
                  )
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
