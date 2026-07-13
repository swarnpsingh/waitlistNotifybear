import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Mail,
  MessageCircle,
  Instagram,
  Youtube,
  Linkedin,
  Calendar,
  Landmark,
  Twitter,
  Music2,
  ShoppingBag,
  Video,
  Phone,
  CreditCard,
  Camera,
  MapPin,
  Bell,
  Headphones,
  Newspaper,
} from 'lucide-react';
import mascot from '../../assets/icon-mascot.png';

const APP_ICONS = [
  { icon: Mail, bg: '#EA4335' },
  { icon: MessageCircle, bg: '#25D366' },
  { icon: Instagram, bg: '#E1306C' },
  { icon: Youtube, bg: '#FF0000' },
  { icon: Linkedin, bg: '#0A66C2' },
  { icon: Calendar, bg: '#2F5FD6' },
  { icon: Landmark, bg: '#1f7a4d' },
  { icon: Twitter, bg: '#14171A' },
  { icon: Music2, bg: '#1DB954' },
  { icon: ShoppingBag, bg: '#FF6B35' },
  { icon: Video, bg: '#6366f1' },
  { icon: Phone, bg: '#10b981' },
  { icon: CreditCard, bg: '#7c3aed' },
  { icon: Camera, bg: '#db2777' },
  { icon: MapPin, bg: '#f59e0b' },
  { icon: Bell, bg: '#64748b' },
  { icon: Headphones, bg: '#0ea5e9' },
  { icon: Newspaper, bg: '#78716c' },
];

const GOLDEN_ANGLE = 137.5;

// Only HIGH/MEDIUM — this stream represents what survives the filter.
const PILL_TEMPLATES = [
  { icon: Calendar, iconBg: '#2F5FD6', text: 'Standup in 15 min', priority: 'HIGH' },
  { icon: Landmark, iconBg: '#1f7a4d', text: 'Unusual charge flagged', priority: 'HIGH' },
  { icon: MessageCircle, iconBg: '#25D366', text: 'Mom: call me back', priority: 'MEDIUM' },
  { icon: Mail, iconBg: '#EA4335', text: 'Contract needs signature', priority: 'HIGH' },
  { icon: ShoppingBag, iconBg: '#FF6B35', text: 'Order arriving today', priority: 'MEDIUM' },
];

const PRIORITY_STYLE = {
  HIGH: { background: 'rgba(245,197,24,0.18)', color: '#B8890A' },
  MEDIUM: { background: 'rgba(47,95,214,0.14)', color: '#2F5FD6' },
  LOW: { background: 'rgba(22,41,79,0.08)', color: 'rgba(22,41,79,0.55)' },
};

function HexGridBackground({ radius = 27, opacity = 0.5, stroke = '#B9C3D6' }) {
  const R = radius;
  const W = Math.sqrt(3) * R;
  const H = 3 * R;

  const hexPoints = (cx, cy) =>
    [-90, -30, 30, 90, 150, 210]
      .map((deg) => {
        const rad = (Math.PI / 180) * deg;
        return `${(cx + R * Math.cos(rad)).toFixed(2)},${(cy + R * Math.sin(rad)).toFixed(2)}`;
      })
      .join(' ');

  return (
    <svg aria-hidden className="absolute inset-0 h-full w-full" style={{ opacity }}>
      <defs>
        <pattern id="filtering-hexgrid" patternUnits="userSpaceOnUse" width={W} height={H}>
          <polygon points={hexPoints(0, 0)} fill="none" stroke={stroke} strokeWidth="1" />
          <polygon points={hexPoints(W, 0)} fill="none" stroke={stroke} strokeWidth="1" />
          <polygon points={hexPoints(0, H)} fill="none" stroke={stroke} strokeWidth="1" />
          <polygon points={hexPoints(W, H)} fill="none" stroke={stroke} strokeWidth="1" />
          <polygon points={hexPoints(W / 2, 1.5 * R)} fill="none" stroke={stroke} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#filtering-hexgrid)" />
    </svg>
  );
}

function Hub() {
  return (
    <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(245,197,24,0.4) 0%, rgba(245,197,24,0) 70%)',
          filter: 'blur(20px)',
        }}
      />
      <div
        className="relative flex h-24 w-24 items-center justify-center bg-ink"
        style={{ clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)' }}
      >
        <img src={mascot} alt="" className="h-11 w-11 object-contain" />
      </div>
    </div>
  );
}

// Each icon starts scattered ("clutter"), drifts inward toward the hub,
// vanishes as it's absorbed, then re-appears at its home spot and repeats —
// a continuous, per-icon-staggered loop, never synced with its neighbors.
function FloatingIcon({ app, index }) {
  const params = useMemo(() => {
    const angle = (index * GOLDEN_ANGLE) % 360;
    const ringRadius = 80 + (index % 6) * 38;
    const rad = (angle * Math.PI) / 180;
    return {
      homeX: Math.cos(rad) * ringRadius * 1.3,
      homeY: Math.sin(rad) * ringRadius * 0.7,
      duration: 5 + Math.random() * 4,
      delay: Math.random() * 4.5,
    };
  }, [index]);

  const Icon = app.icon;
  const { homeX, homeY, duration, delay } = params;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 flex h-10 w-10 items-center justify-center rounded-xl"
      style={{
        marginLeft: -20,
        marginTop: -20,
        background: '#fff',
        boxShadow: '0 4px 14px rgba(22,41,79,0.12)',
      }}
      initial={{ x: homeX, y: homeY, opacity: 0, scale: 0.6 }}
      animate={{
        x: [homeX, homeX, 0, homeX, homeX],
        y: [homeY, homeY, 0, homeY, homeY],
        opacity: [0, 1, 0, 0, 0],
        scale: [0.6, 1, 0.25, 0.6, 0.6],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        times: [0, 0.1, 0.6, 0.62, 1],
        ease: 'easeInOut',
      }}
    >
      <Icon size={16} color={app.bg} strokeWidth={2.25} />
    </motion.div>
  );
}

function PillSlot({ angleDeg, laneOffset }) {
  const [item, setItem] = useState(() => PILL_TEMPLATES[Math.floor(Math.random() * PILL_TEMPLATES.length)]);
  const [playKey, setPlayKey] = useState(0);

  const timing = useMemo(
    () => ({
      duration: 2.8 + Math.random() * 1.4,
      initialDelay: Math.random() * 3.5,
      pause: 1.2 + Math.random() * 2.6,
    }),
    []
  );

  useEffect(() => {
    const delay = playKey === 0 ? timing.initialDelay * 1000 : (timing.duration + timing.pause) * 1000;
    const t = setTimeout(() => {
      setItem(PILL_TEMPLATES[Math.floor(Math.random() * PILL_TEMPLATES.length)]);
      setPlayKey((k) => k + 1);
    }, delay);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playKey]);

  const rad = (angleDeg * Math.PI) / 180;
  const travel = 180;
  const endX = Math.cos(rad) * travel;
  const endY = Math.sin(rad) * travel;

  const Icon = item.icon;
  const priorityStyle = PRIORITY_STYLE[item.priority];

  return (
    <motion.div
      key={playKey}
      initial={{ opacity: 0, x: laneOffset.x, y: laneOffset.y, scale: 0.85 }}
      animate={{
        opacity: [0, 1, 1, 0],
        x: [laneOffset.x, laneOffset.x + endX * 0.5, laneOffset.x + endX],
        y: [laneOffset.y, laneOffset.y + endY * 0.5, laneOffset.y + endY],
        scale: [0.85, 1, 1],
      }}
      transition={{ duration: timing.duration, times: [0, 0.2, 1], ease: 'easeInOut' }}
      className="absolute left-1/2 top-1/2 flex w-[190px] items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-[0_8px_24px_rgba(22,41,79,0.16)]"
      style={{ marginLeft: -95, marginTop: -22 }}
    >
      <div
        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg"
        style={{ background: item.iconBg }}
      >
        <Icon size={14} color="#fff" strokeWidth={2.25} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[0.72rem] font-semibold text-ink">{item.text}</p>
      </div>
      <span
        className="flex-shrink-0 rounded-full px-1.5 py-0.5 text-[0.55rem] font-bold tracking-[0.04em]"
        style={priorityStyle}
      >
        {item.priority}
      </span>
    </motion.div>
  );
}

const PILL_LANES = [
  { angleDeg: -70, laneOffset: { x: -30, y: -10 } },
  { angleDeg: -30, laneOffset: { x: 10, y: -30 } },
  { angleDeg: 5, laneOffset: { x: -10, y: 10 } },
  { angleDeg: 40, laneOffset: { x: 20, y: 30 } },
  { angleDeg: 75, laneOffset: { x: -20, y: 15 } },
];

export default function FilteringCanvas() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { amount: 0.15 });

  return (
    <div
      ref={containerRef}
      className="relative h-[340px] w-full overflow-hidden bg-cream sm:h-[440px]"
    >
      <HexGridBackground />
      <Hub />

      {inView && (
        <div className="absolute inset-0 hidden sm:block">
          {APP_ICONS.map((app, i) => (
            <FloatingIcon key={i} app={app} index={i} />
          ))}
        </div>
      )}

      {inView && (
        <div className="absolute inset-0 hidden sm:block">
          {PILL_LANES.map((lane, i) => (
            <PillSlot key={i} angleDeg={lane.angleDeg} laneOffset={lane.laneOffset} />
          ))}
        </div>
      )}
    </div>
  );
}
