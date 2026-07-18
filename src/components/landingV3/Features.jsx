import React from 'react';
import {
  BellOff,
  Calendar,
  Fingerprint,
  Gauge,
  Landmark,
  ListChecks,
  WifiOff,
  Youtube,
} from 'lucide-react';

/* Bento: one large scoring card with a live-ish preview, four supporting cards. */

const DEMO_ROWS = [
  { icon: Calendar, bg: '#2F5FD6', text: 'Standup in 15 min — you host', tag: 'HIGH', tagClass: 'bg-bell/25 text-bell-dark' },
  { icon: Landmark, bg: '#16294F', text: 'Unusual debit of $84.20 flagged', tag: 'HIGH', tagClass: 'bg-bell/25 text-bell-dark' },
  { icon: Youtube, bg: '#FF0000', text: 'New video from a channel you follow', tag: 'LOW', tagClass: 'bg-ink/8 text-ink/40', muted: true },
];

const SMALL_CARDS = [
  {
    icon: BellOff,
    title: 'Focused moments',
    body: 'One switch before a meeting, a summary after.',
  },
  {
    icon: ListChecks,
    title: 'Daily digest',
    body: 'The filtered pile, in one calm list.',
  },
  {
    icon: WifiOff,
    title: 'Works offline',
    body: 'Everything runs on your phone.',
  },
  {
    icon: Fingerprint,
    title: 'Learns you',
    body: 'Adapts to what you treat as urgent.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5">
        <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-focus">
          Features
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
          Built to guard your attention.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Large card: priority scoring with a live-ish preview */}
          <div className="rounded-3xl bg-white p-7 shadow-card-lift ring-1 ring-ink/5 sm:col-span-2 lg:row-span-2">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-focus">
              <Gauge size={21} color="#fff" strokeWidth={2.25} />
            </span>
            <h3 className="mt-5 font-sans text-xl font-bold tracking-tight text-ink">
              Priority scoring
            </h3>
            <p className="mt-2 max-w-[40ch] text-[0.92rem] leading-relaxed text-ink/55">
              High, Medium, or Low in under a second — and every decision explains itself.
            </p>

            <div className="mt-6 rounded-2xl border border-ink/8 bg-paper p-2.5">
              {DEMO_ROWS.map(({ icon: Icon, bg, text, tag, tagClass, muted }) => (
                <div
                  key={text}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${muted ? 'opacity-55' : ''}`}
                >
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ background: bg }}
                  >
                    <Icon size={15} color="#fff" strokeWidth={2.25} />
                  </span>
                  <p className={`min-w-0 flex-1 truncate text-[0.84rem] font-medium text-ink ${muted ? 'line-through decoration-ink/30' : ''}`}>
                    {text}
                  </p>
                  <span className={`flex-shrink-0 rounded-full px-2 py-0.5 text-[0.6rem] font-bold tracking-wide ${tagClass}`}>
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {SMALL_CARDS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-3xl bg-white p-6 shadow-card-lift ring-1 ring-ink/5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-focus/10">
                <Icon size={18} strokeWidth={2.25} className="text-focus" />
              </span>
              <h3 className="mt-4 font-sans text-[0.98rem] font-bold tracking-tight text-ink">
                {title}
              </h3>
              <p className="mt-1.5 text-[0.86rem] leading-relaxed text-ink/55">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
