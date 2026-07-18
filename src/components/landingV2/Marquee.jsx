import React from 'react';

// Apps Notifybear triages. Dot colors echo each brand without shipping trademarks.
const APPS = [
  ['WhatsApp', '#25D366'],
  ['Gmail', '#EA4335'],
  ['Slack', '#611f69'],
  ['Instagram', '#E1306C'],
  ['YouTube', '#FF0000'],
  ['Calendar', '#2F5FD6'],
  ['Banking', '#1f7a4d'],
  ['Teams', '#5059C9'],
  ['Telegram', '#26A5E4'],
  ['Uber', '#000000'],
  ['LinkedIn', '#0A66C2'],
  ['X', '#1d1d1f'],
];

function Chip({ name, color }) {
  return (
    <div className="flex flex-shrink-0 items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full" style={{ background: color, boxShadow: `0 0 10px ${color}66` }} />
      <span className="whitespace-nowrap text-sm font-medium text-cream/70">{name}</span>
    </div>
  );
}

export default function Marquee() {
  const track = [...APPS, ...APPS];
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-night py-10">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-cream/35">
        Filters every app that pings you
      </p>
      <div className="relative">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-night to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-night to-transparent" />
        <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
          {track.map(([name, color], i) => (
            <Chip key={`${name}-${i}`} name={name} color={color} />
          ))}
        </div>
      </div>
    </section>
  );
}
