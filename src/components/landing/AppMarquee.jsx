import React from 'react';
import {
  Calendar,
  Instagram,
  Landmark,
  Linkedin,
  Mail,
  MessageCircle,
  Music,
  ShoppingBag,
  Slack,
  Twitter,
  Youtube,
  Zap,
} from 'lucide-react';
import Reveal from './Reveal';

const APPS = [
  { icon: MessageCircle, label: 'WhatsApp', bg: '#25D366' },
  { icon: Mail, label: 'Gmail', bg: '#EA4335' },
  { icon: Slack, label: 'Slack', bg: '#611F69' },
  { icon: Calendar, label: 'Calendar', bg: '#2F5FD6' },
  { icon: Landmark, label: 'Banking', bg: '#1f7a4d' },
  { icon: Linkedin, label: 'LinkedIn', bg: '#0A66C2' },
  { icon: Instagram, label: 'Instagram', bg: '#E1306C' },
  { icon: Youtube, label: 'YouTube', bg: '#FF0000' },
  { icon: Twitter, label: 'X', bg: '#16294F' },
  { icon: ShoppingBag, label: 'Delivery', bg: '#FC8019' },
  { icon: Music, label: 'Spotify', bg: '#1DB954' },
  { icon: Zap, label: 'On-call', bg: '#D9A80C' },
];

function AppChip({ icon: Icon, label, bg }) {
  return (
    <div className="mx-2.5 flex flex-shrink-0 items-center gap-2.5 rounded-full border border-ink/8 bg-white px-4 py-2 shadow-[0_2px_10px_rgba(22,41,79,0.05)]">
      <span
        className="flex h-6 w-6 items-center justify-center rounded-[7px]"
        style={{ background: bg }}
      >
        <Icon size={13} color="#fff" strokeWidth={2.25} />
      </span>
      <span className="whitespace-nowrap text-[0.8rem] font-semibold tracking-tight text-ink/70">
        {label}
      </span>
    </div>
  );
}

/* One quiet strip: every app that pings you, drifting by. The track is
   duplicated so the CSS translateX(-50%) loop is seamless. */
export default function AppMarquee() {
  return (
    <section aria-label="Works with every app" className="bg-cream pb-4 pt-2">
      <Reveal y={16}>
        <p className="mb-6 text-center text-[0.68rem] font-bold uppercase tracking-[0.2em] text-ink/35">
          Works with every app that sends notifications
        </p>
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track" aria-hidden="false">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex" aria-hidden={copy === 1}>
                {APPS.map((app) => (
                  <AppChip key={`${copy}-${app.label}`} {...app} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
