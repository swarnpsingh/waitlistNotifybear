import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { PLAY_STORE_URL } from '../../constants/links';
import { HERO_ICONS, KEPT_COUNT } from './appIcons';

/* Adapted from the 21st.dev floating-icons hero: same cursor-repel spring
   physics and idle float, but positions are driven by scroll progress —
   messy scatter → noise filtered out → what matters docks into a row. */

const REPEL_RADIUS = 140;
const REPEL_FORCE = 42;

function dockMetrics(size) {
  const cell = size.w < 640 ? 58 : 84;
  const dockY = Math.min(size.h * 0.33, size.h / 2 - 96);
  return { cell, dockY };
}

function HeroIcon({ data, progress, size, phaseRef, organized, reduced }) {
  const { cell, dockY } = dockMetrics(size);
  const sx = data.scatter.x * size.w;
  const sy = data.scatter.y * size.h;
  const tx = data.kept ? (data.slot - (KEPT_COUNT - 1) / 2) * cell : sx * 1.2;
  const ty = data.kept ? dockY : sy * 1.2;

  const moveRange = data.kept
    ? [0.42 + data.order * 0.015, 0.68 + data.order * 0.015]
    : [0.16 + data.order * 0.02, 0.4 + data.order * 0.02];

  const x = useTransform(progress, moveRange, [sx, tx]);
  const y = useTransform(progress, moveRange, [sy, ty]);
  const rotate = useTransform(progress, moveRange, [data.scatter.r, 0]);
  const opacity = useTransform(progress, moveRange, data.kept ? [1, 1] : [1, 0]);
  const scale = useTransform(progress, moveRange, data.kept ? [1, 0.88] : [1, 0.55]);
  const badgeOpacity = useTransform(progress, [0.14, 0.32], [1, 0]);

  // Cursor-repel springs, active only while the scene is still messy
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springX = useSpring(rx, { stiffness: 300, damping: 20 });
  const springY = useSpring(ry, { stiffness: 300, damping: 20 });
  const ref = useRef(null);

  useEffect(() => {
    if (reduced) return undefined;
    const onMove = (event) => {
      if (!ref.current) return;
      if (phaseRef.current !== 'messy') {
        rx.set(0);
        ry.set(0);
        return;
      }
      const rect = ref.current.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const dist = Math.hypot(dx, dy);
      if (dist < REPEL_RADIUS) {
        const force = (1 - dist / REPEL_RADIUS) * REPEL_FORCE;
        const angle = Math.atan2(dy, dx);
        rx.set(-Math.cos(angle) * force);
        ry.set(-Math.sin(angle) * force);
      } else {
        rx.set(0);
        ry.set(0);
      }
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduced, phaseRef, rx, ry]);

  return (
    <motion.div
      ref={ref}
      style={{ x, y, rotate, opacity, scale }}
      className={`absolute left-1/2 top-1/2 -ml-7 -mt-7 sm:-ml-8 sm:-mt-8 ${
        data.mobileHidden ? 'hidden sm:block' : ''
      }`}
    >
      <motion.div style={{ x: springX, y: springY }}>
        <motion.div
          animate={reduced || organized ? { y: 0 } : { y: [0, -6, 0, 5, 0] }}
          transition={
            reduced || organized
              ? { duration: 0.4, ease: 'easeOut' }
              : { duration: 5.5 + data.order * 0.5, repeat: Infinity, ease: 'easeInOut' }
          }
          className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_16px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/10 sm:h-16 sm:w-16"
        >
          <data.Icon className="h-7 w-7 sm:h-8 sm:w-8" />
          {data.badge ? (
            <motion.span
              style={{ opacity: badgeOpacity }}
              className="absolute -right-1.5 -top-1.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#E5484D] px-1 text-[0.6rem] font-bold leading-none text-white"
            >
              {data.badge}
            </motion.span>
          ) : null}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function HeroCopy({ s1Style, s2Style }) {
  return (
    <div className="grid">
      <motion.div
        style={s1Style}
        className="pointer-events-none col-start-1 row-start-1 flex flex-col items-center"
      >
        <h1
          className="max-w-[13ch] text-center font-display font-semibold leading-[1.05] tracking-[-0.02em] text-white"
          style={{ fontSize: 'clamp(2.8rem, 6.4vw, 5.4rem)' }}
        >
          Every app wants your attention.
        </h1>
        <p className="mt-6 max-w-[42ch] text-center text-lg leading-relaxed text-white/60 sm:text-xl">
          46 notifications a day. Three that matter.
        </p>
      </motion.div>

      <motion.div
        style={s2Style}
        className="pointer-events-none col-start-1 row-start-1 flex flex-col items-center"
      >
        <h1
          className="max-w-[14ch] text-center font-display font-semibold leading-[1.05] tracking-[-0.02em] text-white"
          style={{ fontSize: 'clamp(2.8rem, 6.4vw, 5.4rem)' }}
        >
          Notifybear finds <span className="text-[#8FAAF0]">the ones that do.</span>
        </h1>
        <p className="mt-6 max-w-[46ch] text-center text-lg leading-relaxed text-white/60 sm:text-xl">
          On-device AI lets through only what&apos;s worth the interruption.
        </p>
      </motion.div>
    </div>
  );
}

function CTARow() {
  return (
    <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 items-center justify-center rounded-full bg-focus px-7 text-sm font-semibold text-white transition-colors hover:bg-focus-light"
      >
        Download on Play Store
      </a>
      <a
        href="#how"
        className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
      >
        See how it works
      </a>
    </div>
  );
}

/* Static fallback for prefers-reduced-motion: the organized end state. */
function StaticHero() {
  const kept = HERO_ICONS.filter((i) => i.kept).sort((a, b) => a.slot - b.slot);
  return (
    <section className="hero-night relative flex min-h-screen flex-col items-center justify-center px-5 pt-24 pb-16">
      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/75">
        <span className="h-1.5 w-1.5 rounded-full bg-bell" />
        Free on Google Play · Android
      </span>
      <h1
        className="max-w-[14ch] text-center font-display font-semibold leading-[1.05] tracking-[-0.02em] text-white"
        style={{ fontSize: 'clamp(2.8rem, 6.4vw, 5.4rem)' }}
      >
        Notifybear finds <span className="text-[#8FAAF0]">the notifications that matter.</span>
      </h1>
      <p className="mt-6 max-w-[46ch] text-center text-lg leading-relaxed text-white/60 sm:text-xl">
        On-device AI lets through only what&apos;s worth the interruption.
      </p>
      <CTARow />
      <div className="mt-14 flex flex-col items-center">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/50">
          What reached you
        </span>
        <div className="mt-4 flex items-center gap-3">
          {kept.map(({ id, Icon }) => (
            <span
              key={id}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_16px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/10 sm:h-14 sm:w-14"
            >
              <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
            </span>
          ))}
        </div>
        <p className="mt-4 text-xs text-white/45">43 others filtered into your digest.</p>
      </div>
    </section>
  );
}

export default function ScrollHero() {
  const reduced = useReducedMotion();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  /* Per-frame lerp keeps the choreography JS-driven (avoids the browser
     ScrollTimeline handoff, which desyncs multi-segment transforms) and
     adds a touch of lag that makes the organize step feel physical.
     A plain lerp — unlike useSpring — can't stall on large scroll jumps. */
  const progress = useMotionValue(0);
  useAnimationFrame(() => {
    const target = scrollYProgress.get();
    const current = progress.get();
    const next = current + (target - current) * 0.14;
    progress.set(Math.abs(target - next) < 0.0005 ? target : next);
  });

  const [size, setSize] = useState({ w: 1280, h: 800 });
  useEffect(() => {
    const measure = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const phaseRef = useRef('messy');
  const [organized, setOrganized] = useState(false);
  useMotionValueEvent(progress, 'change', (v) => {
    phaseRef.current = v < 0.3 ? 'messy' : 'organized';
    setOrganized(v > 0.45);
  });

  const s1Opacity = useTransform(progress, [0, 0.2, 0.38], [1, 1, 0]);
  const s1Y = useTransform(progress, [0.2, 0.38], [0, -24]);
  const s2Opacity = useTransform(progress, [0.5, 0.68], [0, 1]);
  const s2Y = useTransform(progress, [0.5, 0.68], [24, 0]);
  const dockOpacity = useTransform(progress, [0.46, 0.64], [0, 1]);
  const hintOpacity = useTransform(progress, [0, 0.14], [1, 0]);

  if (reduced) return <StaticHero />;

  const { dockY } = dockMetrics(size);

  return (
    <section ref={sectionRef} className="relative" style={{ height: '280vh' }}>
      <div className="hero-night sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        <div aria-hidden className="dot-grid-dark absolute inset-0" />
        {/* Floating notification sources */}
        <div className="absolute inset-0">
          {HERO_ICONS.map((data) => (
            <HeroIcon
              key={data.id}
              data={data}
              progress={progress}
              size={size}
              phaseRef={phaseRef}
              organized={organized}
              reduced={reduced}
            />
          ))}
        </div>

        {/* Dock captions — positioned where the kept icons land */}
        <motion.div
          style={{ x: '-50%', y: dockY, opacity: dockOpacity }}
          className="absolute left-1/2 top-1/2 flex flex-col items-center"
        >
          <span className="-translate-y-[64px] text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/50 sm:-translate-y-[72px]">
            What reached you
          </span>
          <p className="translate-y-[46px] text-xs text-white/45 sm:translate-y-[54px]">
            43 others filtered into your digest.
          </p>
        </motion.div>

        {/* Foreground copy */}
        <div className="relative z-10 flex flex-col items-center px-5">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/75 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-bell" />
            Free on Google Play · Android
          </span>
          <HeroCopy
            s1Style={{ opacity: s1Opacity, y: s1Y }}
            s2Style={{ opacity: s2Opacity, y: s2Y }}
          />
          <CTARow />
        </div>

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40"
        >
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em]">
            Scroll — Notifybear cleans this up
          </span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} strokeWidth={2} />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
