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
  },
  {
    id: 'calendar',
    app: 'Calendar',
    icon: Calendar,
    iconBg: '#3a8fbf',
    title: 'Standup',
    preview: 'Starts in 15 min · You are the host',
    time: '12m',
    priority: 'high',
    whyThisMatters: "Meeting starts in 15 min — you're the host.",
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
  },
];

const LOW_COUNT = NOTIFICATIONS.filter((n) => n.priority === 'low').length;
const AFTER_ORDER = [
  ...NOTIFICATIONS.filter((n) => n.priority === 'high'),
  ...NOTIFICATIONS.filter((n) => n.priority === 'medium'),
];
const TOP_HIGH_ID = NOTIFICATIONS.find((n) => n.priority === 'high')?.id;

function NotificationRow({ notification, phase }) {
  const { icon: Icon, iconBg, app, title, preview, time, priority } = notification;
  const isAfter = phase === 'after';
  const isHigh = isAfter && priority === 'high';
  const isMedium = isAfter && priority === 'medium';
  const showWhy = isHigh && notification.id === TOP_HIGH_ID;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{
        opacity: isMedium ? 0.5 : 1,
        y: 0,
        boxShadow: isHigh
          ? '0 1px 2px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.16)'
          : '0 1px 2px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)',
      }}
      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
      transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
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
                    color: '#fff',
                    background: '#3a8fbf',
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
              background: 'rgba(58,143,191,0.10)',
              borderRadius: 10,
              padding: '6px 9px',
            }}
          >
            <Sparkles size={12} color="#3a8fbf" strokeWidth={2.5} />
            <span style={{ fontSize: '0.68rem', color: '#3a8fbf', fontWeight: 600, lineHeight: 1.3 }}>
              {notification.whyThisMatters}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function InteractiveDemoSection() {
  const [phase, setPhase] = useState('before');
  const [showReplay, setShowReplay] = useState(false);

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
    <section id="demo" style={{ background: '#ebebeb', padding: '96px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
              fontWeight: 600,
              color: '#111',
              lineHeight: 1.1,
              marginBottom: 16,
              letterSpacing: '-0.02em',
            }}
          >
            See Notifybear decide.
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#888', maxWidth: 360, margin: '0 auto', lineHeight: 1.6 }}>
            Eight notifications. One tap. Only what matters rises to the top.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}
        >
          {/* Phone mockup */}
          <div
            style={{
              position: 'relative',
              width: 'min(320px, 86vw)',
              borderRadius: 44,
              background: 'linear-gradient(155deg, #1c1c1f 0%, #0b0b0d 40%, #0b0b0d 60%, #1c1c1f 100%)',
              padding: 10,
              boxShadow: '0 30px 60px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.06)',
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
                background: 'linear-gradient(180deg, #3a8fbf 0%, #5aadd4 100%)',
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
                  {list.map((notification) => (
                    <NotificationRow key={notification.id} notification={notification} phase={phase} />
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

          {/* Controls */}
          <div style={{ minHeight: 52, display: 'flex', alignItems: 'center' }}>
            <AnimatePresence mode="wait">
              {phase === 'before' ? (
                <motion.button
                  key="decide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={handleDecide}
                  style={{
                    background: '#3a8fbf',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 999,
                    padding: '14px 28px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
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
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      background: '#fff',
                      color: '#333',
                      border: '1px solid #ccc',
                      borderRadius: 999,
                      padding: '14px 28px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    <RotateCcw size={15} strokeWidth={2.25} />
                    Replay
                  </motion.button>
                )
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
