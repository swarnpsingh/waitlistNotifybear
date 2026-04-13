import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import mascot from '../../assets/icon-mascot.png';
import { PLAY_STORE_URL } from '../../constants/links';

export default function CTASection({ onShowPrivacy, onShowContact }) {
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
        <div>
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
              Now Live
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
            Download Notifybear<br />on Play Store.
          </h2>

          {/* Sub-message */}
          <p style={{
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.7,
            maxWidth: 340,
            margin: '0 auto 36px',
          }}>
            You're one tap away from calmer notifications. Install today and start focusing on what matters.
          </p>

          {/* CTA form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              maxWidth: 420,
              margin: '0 auto',
            }}
          >
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 2,
                minWidth: 220,
                padding: '10px 22px',
                borderRadius: 14,
                background: '#050505',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.7)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'transform 0.2s, filter 0.2s',
                textDecoration: 'none',
                boxShadow: '0 10px 24px rgba(0,0,0,0.28)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.filter = 'brightness(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.filter = 'none';
              }}
            >
              <span style={{
                fontSize: '0.62rem',
                letterSpacing: '0.14em',
                opacity: 0.85,
                textTransform: 'uppercase',
                lineHeight: 1,
              }}>
                Get it on
              </span>
              <span style={{
                fontSize: '1.7rem',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}>
                Google Play
              </span>
            </a>
          </motion.div>

          {/* Fine print */}
          <p style={{
            marginTop: 18,
            fontSize: '0.775rem',
            color: 'rgba(255,255,255,0.55)',
            letterSpacing: '0.01em',
          }}>
            Free on Android. No signup wall.
          </p>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="cta-footer">
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src={mascot} alt="notifybear" style={{ width: 24, height: 24, objectFit: 'contain' }} />
          <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff', letterSpacing: '-0.01em' }}>Notifybear</span>
        </div>

        {/* Links */}
        <nav style={{ display: 'flex', gap: 24 }}>
          {[
            { label: 'Privacy Policy', action: onShowPrivacy },
            { label: 'Get the App', action: () => window.open(PLAY_STORE_URL, '_blank', 'noopener') },
            { label: 'Contact', action: onShowContact },
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

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {[
            { label: 'Instagram', href: 'https://www.instagram.com/notifybear.com_/', Icon: Instagram },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/notifybear?originalSubdomain=in', Icon: Linkedin },
            { label: 'Twitter', href: 'https://x.com/notifybear', Icon: Twitter },
          ].map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.65)',
                transition: 'color 0.2s',
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
              onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p style={{ fontSize: '0.775rem', color: 'rgba(255,255,255,0.45)', margin: 0 }}>
          © {new Date().getFullYear()} Notifybear LLC. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
