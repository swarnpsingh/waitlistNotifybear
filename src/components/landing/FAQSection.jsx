import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ_CATEGORIES = [
  {
    category: 'About the Product',
    items: [
      {
        q: 'What is Notifybear?',
        a: 'Notifybear is an AI notification assistant for Android. It reads every notification you receive, scores it High, Medium, or Low priority, and explains why — so you never have to manually sort through notifications again.',
      },
      {
        q: 'How is this different from Do Not Disturb or muting apps?',
        a: 'Do Not Disturb and app muting are all-or-nothing. Notifybear makes a decision for every individual notification based on what actually matters to you, and gets smarter the more you use it.',
      },
      {
        q: 'Does Notifybear require any setup?',
        a: 'No. Install the app, grant notification access, and it starts working immediately. There are no rules to write or categories to configure.',
      },
      {
        q: 'Which apps does it work with?',
        a: 'Every app that sends Android notifications — Gmail, WhatsApp, LinkedIn, YouTube, banking apps, and anything else on your phone.',
      },
    ],
  },
  {
    category: 'Privacy and Data',
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
    ],
  },
  {
    category: 'Pricing',
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

function FAQItem({ item, isOpen, onToggle, isLast }) {
  const isMailto = item.a.startsWith('mailto:');

  return (
    <div style={{ borderBottom: isLast ? 'none' : '1px solid #ececec' }}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          padding: '20px 24px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#111', letterSpacing: '-0.01em' }}>
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ flexShrink: 0, display: 'flex', color: '#888' }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ margin: '0 24px 20px', fontSize: '0.875rem', color: '#888', lineHeight: 1.7 }}>
              {isMailto ? (
                <a href={item.a} style={{ color: '#3a8fbf', fontWeight: 600, textDecoration: 'none' }}>
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
    <section id="faq" style={{ background: '#fff', padding: '96px 32px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
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
            Questions, answered.
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#888', maxWidth: 420, margin: '0 auto', lineHeight: 1.6 }}>
            Everything you need to know about how Notifybear works and handles your data.
          </p>
        </motion.div>

        {FAQ_CATEGORIES.map((cat, catIdx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIdx * 0.05 }}
            viewport={{ once: true, margin: '-60px' }}
            style={{ marginBottom: 36 }}
          >
            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: '#aaa',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: 12,
                paddingLeft: 4,
              }}
            >
              {cat.category}
            </p>
            <div
              style={{
                background: '#fff',
                border: '1px solid #ececec',
                borderRadius: 20,
                overflow: 'hidden',
              }}
            >
              {cat.items.map((item, itemIdx) => {
                const id = `${catIdx}-${itemIdx}`;
                return (
                  <FAQItem
                    key={id}
                    item={item}
                    isOpen={openId === id}
                    onToggle={() => toggle(id)}
                    isLast={itemIdx === cat.items.length - 1}
                  />
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
