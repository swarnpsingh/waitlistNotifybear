import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'What is Notifybear?',
    a: 'It reads every notification on your Android phone, scores it High, Medium, or Low based on what you treat as urgent, and explains why — so the interruption you get is one you would have chosen.',
  },
  {
    q: 'How is this different from Do Not Disturb?',
    a: 'DND goes silent and leaves you one undifferentiated pile. Notifybear learns what matters to you, keeps adjusting, and tells you what happened while you were away.',
  },
  {
    q: 'Does Notifybear read my messages?',
    a: 'Content is processed entirely on your device. It never leaves your phone or reaches our servers.',
  },
  {
    q: 'What data does it collect?',
    a: 'Only anonymized behavioral patterns — never notification content. You can delete your account and all data anytime.',
  },
  {
    q: 'What happens to Low priority notifications?',
    a: 'Nothing is deleted. They wait in your digest for whenever you want them.',
  },
  {
    q: 'Does it work offline?',
    a: 'Yes — scoring and filtering run entirely on your phone.',
  },
  {
    q: 'Is it free? Is it on iPhone?',
    a: 'Free on Android via Google Play. A premium tier and iPhone support are on the roadmap.',
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-t border-ink/6 first:border-t-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={`text-[0.95rem] font-semibold tracking-tight ${isOpen ? 'text-focus' : 'text-ink'}`}>
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={`flex-shrink-0 ${isOpen ? 'text-focus' : 'text-ink/40'}`}
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
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 pr-10 text-[0.88rem] leading-relaxed text-ink/55">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQV3() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-3xl px-5">
        <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-focus">
          FAQ
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
          Questions, answered.
        </h2>

        <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-card-lift ring-1 ring-ink/5">
          {FAQS.map((item, idx) => (
            <FAQItem
              key={item.q}
              item={item}
              isOpen={openIdx === idx}
              onToggle={() => setOpenIdx((cur) => (cur === idx ? null : idx))}
            />
          ))}
        </div>

        <p className="mt-8 text-sm text-ink/50">
          Something else?{' '}
          <a href="mailto:support@notifybear.com" className="font-semibold text-focus">
            support@notifybear.com
          </a>
        </p>
      </div>
    </section>
  );
}
