import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function AccountSetupMockup() {
  return (
    <div style={{
      background: '#f3f3f3',
      padding: '36px 32px 28px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 0,
    }}>
      {/* Mock card */}
      <div style={{
        background: '#fff',
        borderRadius: 20,
        padding: '18px 20px 14px',
        width: '100%',
        maxWidth: 300,
        boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}>
        {/* Profile row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '4px 0 8px', borderBottom: '1px solid #f0f0f0' }}>
          {/* Avatar */}
          <div style={{
            width: 42,
            height: 42,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6BA0C8 0%, #3a8fbf 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '0.85rem',
            fontWeight: 700,
            flexShrink: 0,
          }}>
            LM
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#111', letterSpacing: '-0.01em' }}>Laura Munar</span>
            <span style={{ fontSize: '0.75rem', color: '#888' }}>lauramunar@gmail.com</span>
          </div>
        </div>

        {/* Option rows */}
        {[
          {
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <line x1="19" y1="8" x2="19" y2="14"/>
                <line x1="22" y1="11" x2="16" y2="11"/>
              </svg>
            ),
            label: 'Username',
          },
          {
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="3"/>
                <path d="M8 12h8M8 8h8M8 16h4"/>
              </svg>
            ),
            label: 'Password',
          },
        ].map(({ icon, label }) => (
          <div key={label} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '10px 14px',
            borderRadius: 12,
            border: '1px solid #ebebeb',
            background: '#fafafa',
            cursor: 'default',
          }}>
            <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#333' }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const steps = [
  {
    number: 1,
    title: 'Download the app',
    description: 'Open Google Play, install Notifybear, and grant notification access in under a minute.',
    img: null,
    mockup: null,
  },
  {
    number: 2,
    title: 'Set up your account',
    description: 'Easily create your profile and start managing your notifications.',
    img: null,
    mockup: <AccountSetupMockup />,
  },
  {
    number: 3,
    title: 'Tame your notifications',
    description: 'Let Notifybear filter, prioritise and surface what matters most.',
    img: null,
    mockup: null,
  },
];

function StepCard({ step, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-80px' }}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 0,
        width: '100%',
      }}
    >
      {/* Step number bubble + line connector */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexShrink: 0,
        marginRight: 28,
        marginTop: 2,
      }}>
        <div style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: '#111',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.85rem',
          fontWeight: 600,
          flexShrink: 0,
          zIndex: 1,
          position: 'relative',
        }}>
          {step.number}
        </div>
      </div>

      {/* Card */}
      <div style={{
        flex: 1,
        background: '#fff',
        borderRadius: 24,
        overflow: 'hidden',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
        marginBottom: 8,
      }}>
        {/* Mockup or Image — only when provided */}
        {step.mockup && step.mockup}
        {step.img && (
        <div style={{
          background: '#f3f3f3',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '36px 48px 24px',
          minHeight: 220,
        }}>
          <img
            src={step.img}
            alt={step.title}
            style={{
              maxHeight: 200,
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 6px 20px rgba(0,0,0,0.10))',
            }}
          />
        </div>
        )}
        {/* Text */}
        <div style={{ padding: '24px 28px 28px' }}>
          <h3 style={{
            fontSize: '1.15rem',
            fontWeight: 700,
            color: '#111',
            marginBottom: 6,
            letterSpacing: '-0.015em',
          }}>
            {step.title}
          </h3>
          <p style={{ fontSize: '0.875rem', color: '#888', lineHeight: 1.65 }}>
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function GettingStartedSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={sectionRef}
      id="getting-started"
      style={{
        background: '#ebebeb',
        padding: '96px 32px',
      }}
    >
      <div className="getting-started-grid">

        {/* Left — sticky heading */}
        <div className="getting-started-sticky">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
              fontWeight: 800,
              color: '#111',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: 20,
            }}>
              Get started in 3<br />simple steps.
            </h2>
            <p style={{
              fontSize: '0.9rem',
              color: '#888',
              lineHeight: 1.7,
              maxWidth: 280,
            }}>
              Explore the AI designed to declutter your digital life.
            </p>
          </motion.div>
        </div>

        {/* Right — timeline steps */}
        <div style={{ position: 'relative' }}>
          {/* Dashed background line */}
          <div style={{
            position: 'absolute',
            left: 17,
            top: 36,
            bottom: 36,
            width: 2,
            borderLeft: '2px dashed #ccc',
            zIndex: 0,
          }} />
          {/* Animated fill line */}
          <div style={{
            position: 'absolute',
            left: 17,
            top: 36,
            bottom: 36,
            width: 2,
            overflow: 'hidden',
            zIndex: 0,
          }}>
            <motion.div
              style={{
                width: '100%',
                height: lineHeight,
                background: '#111',
                originY: 0,
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, position: 'relative', zIndex: 1 }}>
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
