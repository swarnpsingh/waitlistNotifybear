import React from 'react';
import { motion } from 'framer-motion';
import mascot from '../../assets/icon-mascot.png';

export default function CTASection({ onShowPrivacy }) {
  return (
    <section
      id="cta"
      style={{
        background: 'linear-gradient(180deg, #3a8fbf 0%, #5aadd4 50%, #3a8fbf 100%)',
        padding: '120px 32px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
        style={{ maxWidth: 520, width: '100%' }}
      >
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '5px 18px',
          borderRadius: 999,
          border: '1px solid rgba(255,255,255,0.5)',
          background: 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(8px)',
          marginBottom: 24,
        }}>
          <span style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}>
            Early Access
          </span>
        </div>

        {/* Heading */}
        <h2 style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.25rem)',
          fontWeight: 800,
          color: '#fff',
          lineHeight: 1.08,
          letterSpacing: '-0.025em',
          marginBottom: 16,
        }}>
          Be the first to<br />experience it.
        </h2>

        {/* Sub-message */}
        <p style={{
          fontSize: '0.95rem',
          color: 'rgba(255,255,255,0.75)',
          lineHeight: 1.7,
          marginBottom: 36,
          maxWidth: 340,
          margin: '0 auto 36px',
        }}>
          We're launching very soon. Join the waitlist now and get notified the moment NotifyBear goes live.
        </p>

        {/* Email + CTA form */}
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.55 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            window.open('https://tally.so/r/wvB6ad', '_blank', 'noopener');
          }}
          style={{
            display: 'flex',
            width: '100%',
            maxWidth: 420,
            margin: '0 auto',
            borderRadius: 999,
            overflow: 'hidden',
            background: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.6)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          }}
        >
          <input
            type="email"
            placeholder="Your email address"
            style={{
              flex: 1,
              padding: '14px 20px',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: '0.875rem',
              color: '#333',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '12px 22px',
              margin: 4,
              borderRadius: 999,
              background: '#111',
              color: '#fff',
              border: 'none',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'background 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#333'}
            onMouseOut={(e) => e.currentTarget.style.background = '#111'}
          >
            Join Waitlist
          </button>
        </motion.form>

        {/* Fine print */}
        <p style={{
          marginTop: 18,
          fontSize: '0.775rem',
          color: 'rgba(255,255,255,0.55)',
          letterSpacing: '0.01em',
        }}>
          No spam. No credit card required.
        </p>
      </motion.div>

      {/* Footer */}
      <footer className="cta-footer">
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src={mascot} alt="notifybear" style={{ width: 24, height: 24, objectFit: 'contain' }} />
          <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff', letterSpacing: '-0.01em' }}>notifyBear</span>
        </div>

        {/* Links */}
        <nav style={{ display: 'flex', gap: 24 }}>
          {[
            { label: 'Privacy Policy', action: onShowPrivacy },
            { label: 'Terms of Service', action: null },
            { label: 'Contact', action: null },
          ].map(({ label, action }) => (
            <button
              key={label}
              type="button"
              onClick={() => { if (action) action(); }}
              style={{
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.6)',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'color 0.2s',
                fontFamily: 'inherit',
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
              onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Copyright */}
        <p style={{ fontSize: '0.775rem', color: 'rgba(255,255,255,0.45)', margin: 0 }}>
          © {new Date().getFullYear()} NotifyBear LLC. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
