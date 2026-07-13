import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Calendar, Landmark, MessageCircle, Mail, Instagram } from 'lucide-react';
import mascot from '../../assets/icon-mascot.png';

const CHECKLIST_ITEMS = [
  {
    id: 'calendar',
    icon: Calendar,
    iconBg: '#2F5FD6',
    text: "Standup starts in 15 min — you're the host",
    tag: 'HIGH',
    resolvesTo: 'HANDLED',
    resolves: true,
  },
  {
    id: 'bank',
    icon: Landmark,
    iconBg: '#1f7a4d',
    text: 'Debit of $84.20 flagged as unusual',
    tag: 'HIGH',
    resolvesTo: 'REVIEWED',
    resolves: true,
  },
  {
    id: 'whatsapp',
    icon: MessageCircle,
    iconBg: '#25D366',
    text: "Mom: Don't forget dinner Sunday",
    tag: 'MEDIUM',
    resolvesTo: 'WAITING ON YOU',
    resolves: false,
  },
];

const ORBIT_APPS = [
  { id: 'wa', icon: MessageCircle, bg: '#25D366', style: { top: 0, left: '50%', transform: 'translate(-50%, 0)' } },
  { id: 'gmail', icon: Mail, bg: '#EA4335', style: { top: '42%', left: 4, transform: 'translateY(-50%)' } },
  { id: 'cal', icon: Calendar, bg: '#2F5FD6', style: { top: '42%', right: 4, transform: 'translateY(-50%)' } },
  { id: 'ig', icon: Instagram, bg: '#E1306C', style: { bottom: 4, left: '20%' } },
  { id: 'bank', icon: Landmark, bg: '#1f7a4d', style: { bottom: 4, right: '20%' } },
];

function useTypewriter(text, { speed = 45, startDelay = 900 } = {}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    let i = 0;
    let interval;
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return text.slice(0, count);
}

function ConnectPhase() {
  const typed = useTypewriter('Calm, by design.');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 flex flex-col items-center justify-center"
    >
      <div className="relative h-[220px] w-[220px]">
        {ORBIT_APPS.map((app, i) => {
          const Icon = app.icon;
          return (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.08, ease: [0.4, 0, 0.2, 1] }}
              className="absolute flex h-11 w-11 items-center justify-center rounded-xl"
              style={{
                ...app.style,
                background: '#1c2c4d',
                boxShadow: `0 0 24px 4px ${app.bg}33, inset 0 0 0 1px rgba(255,255,255,0.08)`,
              }}
            >
              <Icon size={18} color={app.bg} strokeWidth={2.25} />
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.55, ease: [0.4, 0, 0.2, 1] }}
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-ink ring-1 ring-white/15"
          style={{ boxShadow: '0 0 50px 14px rgba(245,197,24,0.28)' }}
        >
          <img src={mascot} alt="" className="h-9 w-9 object-contain" />
        </motion.div>
      </div>

      <p className="mt-8 min-h-[1.5rem] text-base text-cream/85">
        {typed}
        <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-bell align-middle" />
      </p>
    </motion.div>
  );
}

function ChecklistRow({ item, index }) {
  const { icon: Icon, iconBg, text, tag, resolvesTo, resolves } = item;
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!resolves) return undefined;
    const timer = setTimeout(() => setChecked(true), 500 + index * 140 + 1000);
    return () => clearTimeout(timer);
  }, [resolves, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.14, ease: [0.4, 0, 0.2, 1] }}
      className="flex items-start gap-3 border-t border-white/8 py-3.5 first:border-t-0"
    >
      <motion.div
        animate={checked ? { backgroundColor: '#F5C518', borderColor: '#F5C518' } : {}}
        transition={{ duration: 0.35, delay: 0.45 }}
        className="mt-0.5 flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-[5px] border border-white/25"
      >
        {checked && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.5 }}
          >
            <Check size={12} strokeWidth={3} color="#16294F" />
          </motion.span>
        )}
      </motion.div>

      <div
        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg"
        style={{ background: iconBg }}
      >
        <Icon size={14} color="#fff" strokeWidth={2.25} />
      </div>

      <div className="min-w-0 flex-1">
        <motion.p
          animate={checked ? { opacity: 0.4 } : { opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-[0.85rem] leading-snug text-cream"
        >
          {text}
        </motion.p>
        <div className="mt-1.5 flex items-center gap-2">
          <span
            className="rounded-full px-2 py-0.5 text-[0.6rem] font-bold tracking-[0.06em]"
            style={{
              background: tag === 'HIGH' ? 'rgba(245,197,24,0.16)' : 'rgba(47,95,214,0.2)',
              color: tag === 'HIGH' ? '#F5C518' : '#8FAAF0',
            }}
          >
            {tag}
          </span>
          {checked ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-[0.65rem] font-semibold uppercase tracking-[0.04em] text-cream/40"
            >
              → {resolvesTo}
            </motion.span>
          ) : (
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.04em] text-bell/70">
              → {resolvesTo}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ChecklistPhase() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0"
    >
      <h3 className="font-display font-medium leading-[1.08] text-cream" style={{ fontSize: 'clamp(1.5rem, 2.6vw, 1.9rem)', letterSpacing: '-0.02em' }}>
        Hey there,<br />you're all caught up.
      </h3>
      <p className="mt-2 text-sm text-cream/50">
        I filtered 41 notifications — here's what's left.
      </p>

      <p className="mb-1 mt-6 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-cream/35">Today</p>

      <div>
        {CHECKLIST_ITEMS.map((item, i) => (
          <ChecklistRow key={item.id} item={item} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

const PHASE_DURATIONS = { connect: 4200, checklist: 5200 };

export default function HeroDemoCard() {
  const [phase, setPhase] = useState('connect');

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase((p) => (p === 'connect' ? 'checklist' : 'connect'));
    }, PHASE_DURATIONS[phase]);
    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-[440px]"
    >
      <div className="relative overflow-hidden rounded-[28px] bg-ink ring-1 ring-white/10 shadow-[0_30px_80px_rgba(22,41,79,0.35)]">
        <div className="hex-watermark" />
        <div className="card-glow-base" />

        <div className="relative px-7 pb-7 pt-6">
          {/* Window chrome */}
          <div className="mb-6 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
          </div>

          <div className="relative h-[336px]">
            <AnimatePresence mode="wait">
              {phase === 'connect' ? <ConnectPhase key="connect" /> : <ChecklistPhase key="checklist" />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
