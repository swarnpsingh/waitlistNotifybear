import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, ShieldCheck, Smartphone, Tag, Users } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const FAQ_CATEGORIES = [
  {
    category: 'About the Product',
    icon: Sparkles,
    items: [
      {
        q: 'What is Notifybear?',
        a: "Notifybear decides what deserves to reach you, and when. It reads every notification on your Android phone, scores it High, Medium, or Low based on what you treat as urgent, and explains why — so the interruption you get is one you'd have chosen.",
      },
      {
        q: 'How is this different from Do Not Disturb or Focus Mode?',
        a: "Two ways. Focus Mode follows a rule you wrote in advance; Notifybear learns what matters to you personally and keeps adjusting. And Do Not Disturb just goes silent — Notifybear tells you what happened while you were away instead of leaving you with one undifferentiated pile.",
      },
      {
        q: 'Is Notifybear on iPhone or desktop?',
        a: 'Not today. Notifybear is Android only, available on Google Play. Desktop and cross-device support is something we want to build, but none of it exists yet.',
      },
      {
        q: 'Does Notifybear require any setup?',
        a: 'Very little. Create an account, grant notification access, and it starts working immediately. There are no rules to write or categories to configure.',
      },
      {
        q: 'Which apps does it work with?',
        a: 'Every app that sends Android notifications — Gmail, WhatsApp, LinkedIn, YouTube, banking apps, and anything else on your phone.',
      },
    ],
  },
  {
    category: 'Privacy and Data',
    icon: ShieldCheck,
    items: [
      {
        q: 'Does Notifybear read my messages?',
        a: 'Notifybear processes your notification content entirely on your device to score it. That content never leaves your phone or reaches our servers.',
      },
      {
        q: 'What data does Notifybear actually collect?',
        a: 'An anonymized feature dataset — behavioral patterns like when you engage with notifications, not the content of the notifications themselves. This is used only to improve your personal model.',
      },
      {
        q: 'Can I delete my data?',
        a: 'Yes. You can delete your account and all associated data at any time from Settings.',
      },
      {
        q: 'Is this different from how other apps handle my data?',
        a: "Yes. Most apps process notification data on external servers. Notifybear's AI model runs on your device — this isn't a policy promise, it's how the system is built.",
      },
    ],
  },
  {
    category: 'Using the App',
    icon: Smartphone,
    items: [
      {
        q: 'How long does it take for Notifybear to learn my preferences?',
        a: 'It starts scoring immediately, but accuracy improves the more you use the app, since the model learns from your specific behavior over time.',
      },
      {
        q: 'What happens to Low priority notifications? Are they deleted?',
        a: "No. They're still accessible — just deprioritized so they don't interrupt you unnecessarily.",
      },
      {
        q: 'Does it work without internet?',
        a: 'Yes. Core scoring and filtering run entirely offline, on your device.',
      },
      {
        q: 'What if I am going into a meeting?',
        a: "Turn on the focused-moment toggle yourself before you go in. Notifybear holds the non-urgent notifications and gives you a summary of them once you're free. It doesn't detect meetings automatically today — that's a manual switch you control.",
      },
    ],
  },
  {
    category: 'Pricing',
    icon: Tag,
    items: [
      {
        q: 'Is Notifybear free?',
        a: 'Yes, currently free to use.',
      },
      {
        q: 'Will there be a paid version?',
        a: 'Not yet, but a premium tier is coming soon.',
      },
    ],
  },
  {
    category: 'Company',
    icon: Users,
    items: [
      {
        q: 'Who built Notifybear?',
        a: 'Notifybear is built by a small team of student founders.',
      },
      {
        q: 'Is Notifybear available outside India and the US?',
        a: 'The app is available globally on Google Play, though our focus and testing has been concentrated in India and the US so far.',
      },
      {
        q: 'How do I contact you?',
        a: 'mailto:support@notifybear.com',
      },
    ],
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  const isMailto = item.a.startsWith('mailto:');

  return (
    <div className="border-t border-ink/8">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors duration-200 ${
          isOpen ? 'border-l-[3px] border-l-focus bg-focus/6' : 'border-l-[3px] border-l-transparent'
        }`}
      >
        <span className="text-[0.875rem] font-semibold tracking-tight text-ink">{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex flex-shrink-0 ${isOpen ? 'text-bell-dark' : 'text-ink/35'}`}
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden bg-focus/6"
          >
            <p className="m-0 px-6 pb-5 pl-9 text-[0.825rem] leading-relaxed text-ink/60">
              {isMailto ? (
                <a href={item.a} className="font-semibold text-focus no-underline">
                  {item.a.replace('mailto:', '')}
                </a>
              ) : (
                item.a
              )}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState('0-0');

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <section id="faq" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <SectionHeader
          index="06"
          eyebrow="FAQ"
          align="center"
          title="Questions, answered."
          sub="Everything you need to know about how Notifybear works and handles your data."
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {FAQ_CATEGORIES.map((cat, catIdx) => {
            const Icon = cat.icon;
            const isLastOdd =
              catIdx === FAQ_CATEGORIES.length - 1 && FAQ_CATEGORIES.length % 2 === 1;
            return (
              <Reveal
                key={cat.category}
                delay={(catIdx % 2) * 0.08}
                y={28}
                className={`overflow-hidden rounded-3xl bg-white shadow-[0_2px_8px_rgba(22,41,79,0.04),0_12px_32px_rgba(22,41,79,0.06)] ${
                  isLastOdd ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex items-center gap-3 px-6 pb-4 pt-5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-focus">
                    <Icon size={19} color="#fff" strokeWidth={2.25} />
                  </div>
                  <h3 className="m-0 text-[1.05rem] font-bold tracking-tight text-ink">
                    {cat.category}
                  </h3>
                </div>

                {cat.items.map((item, itemIdx) => {
                  const id = `${catIdx}-${itemIdx}`;
                  return (
                    <FAQItem
                      key={id}
                      item={item}
                      isOpen={openId === id}
                      onToggle={() => toggle(id)}
                    />
                  );
                })}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
