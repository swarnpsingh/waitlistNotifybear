import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, Landmark } from 'lucide-react';
import mascot from '../../assets/icon-mascot.png';
import {
  IconDiscord,
  IconGoogle,
  IconSlack,
  IconSpotify,
  IconX,
  IconYouTube,
} from './appIcons';

/* A stream of messy Android-style notifications pours into the bear;
   only the high-priority few come out the other side, sorted. */

const CYCLE = 4.2; // seconds; shared so the lanes stay staggered

const INCOMING = [
  { Icon: IconYouTube, lane: -74, delay: 0, bar: 'w-16' },
  { Icon: IconX, lane: -37, delay: 0.7, bar: 'w-12' },
  { Icon: IconGoogle, lane: 0, delay: 1.4, bar: 'w-14' },
  { Icon: IconSpotify, lane: 38, delay: 2.1, bar: 'w-10' },
  { Icon: IconDiscord, lane: 72, delay: 2.8, bar: 'w-16' },
  { Icon: IconSlack, lane: -12, delay: 3.5, bar: 'w-12' },
];

const OUTGOING = [
  { Icon: Calendar, iconBg: '#2F5FD6', text: 'Standup in 15 min', lane: -26, delay: 1.9 },
  { Icon: Landmark, iconBg: '#16294F', text: 'Unusual debit flagged', lane: 30, delay: 4.0 },
];

function IncomingChip({ Icon, lane, delay, bar, reduced }) {
  return (
    <motion.div
      initial={false}
      animate={
        reduced
          ? undefined
          : { x: [-480, -52], y: [lane, 0], scale: [1, 1, 0.4], opacity: [0, 1, 1, 0] }
      }
      transition={
        reduced
          ? undefined
          : {
              duration: 2.6,
              times: [0, 0.75, 0.94, 1],
              delay,
              repeat: Infinity,
              repeatDelay: CYCLE - 2.6,
              ease: 'easeIn',
            }
      }
      className="absolute left-1/2 top-1/2 flex -translate-y-1/2 items-center gap-2 rounded-xl bg-white p-2 pr-3 shadow-[0_8px_20px_rgba(22,41,79,0.10)] ring-1 ring-ink/6"
      style={reduced ? { x: -160, y: lane, opacity: 0.5 } : { opacity: 0 }}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-paper ring-1 ring-ink/6">
        <Icon className="h-4 w-4" />
      </span>
      <span className="flex flex-col gap-1">
        <span className={`h-1.5 rounded-full bg-ink/20 ${bar}`} />
        <span className="h-1.5 w-8 rounded-full bg-ink/10" />
      </span>
    </motion.div>
  );
}

function OutgoingChip({ Icon, iconBg, text, lane, delay, reduced }) {
  return (
    <motion.div
      initial={false}
      animate={
        reduced ? undefined : { x: [46, 480], y: [0, lane], opacity: [0, 1, 1, 0] }
      }
      transition={
        reduced
          ? undefined
          : {
              duration: 2.6,
              times: [0, 0.1, 0.8, 1],
              delay,
              repeat: Infinity,
              repeatDelay: CYCLE * 2 - 2.6,
              ease: 'easeOut',
            }
      }
      className="absolute left-1/2 top-1/2 flex -translate-y-1/2 items-center gap-2.5 rounded-xl bg-white py-2 pl-2 pr-2.5 shadow-[0_10px_24px_rgba(22,41,79,0.14)] ring-1 ring-ink/6"
      style={reduced ? { x: 120, y: lane, opacity: 1 } : { opacity: 0 }}
    >
      <span
        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg"
        style={{ background: iconBg }}
      >
        <Icon size={14} color="#fff" strokeWidth={2.25} />
      </span>
      <span className="whitespace-nowrap text-[0.76rem] font-medium text-ink">{text}</span>
      <span className="rounded-full bg-bell px-1.5 py-0.5 text-[0.55rem] font-bold tracking-wide text-ink">
        HIGH
      </span>
    </motion.div>
  );
}

export default function FilterPipeline() {
  const reduced = useReducedMotion();

  return (
    <section className="py-16 sm:py-20" aria-label="Notifybear filters noisy notifications down to the important few">
      <div className="mx-auto w-full max-w-5xl px-5">
        <div className="relative h-[230px] overflow-hidden rounded-3xl bg-white shadow-card-lift ring-1 ring-ink/5">
          {/* Bear at the center */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            {!reduced && (
              <motion.span
                animate={{ scale: [1, 1.55], opacity: [0.45, 0] }}
                transition={{ duration: 2.1, repeat: Infinity, ease: 'easeOut' }}
                className="absolute inset-0 rounded-2xl border-2 border-focus"
              />
            )}
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ink shadow-[0_14px_34px_rgba(22,41,79,0.35)]">
              <img src={mascot} alt="" className="h-9 w-9 object-contain" />
            </span>
          </div>

          {INCOMING.map((chip) => (
            <IncomingChip key={`${chip.delay}-in`} {...chip} reduced={reduced} />
          ))}
          {OUTGOING.map((chip) => (
            <OutgoingChip key={`${chip.delay}-out`} {...chip} reduced={reduced} />
          ))}

          <p className="absolute bottom-4 left-0 right-0 text-center text-xs font-medium text-ink/40">
            Everything comes in. Only what matters comes out.
          </p>
        </div>
      </div>
    </section>
  );
}
