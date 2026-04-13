import React, { useEffect } from 'react';
import mascot from '../../assets/icon-mascot.png';

export default function ContactPage({ onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f4f7fb',
        padding: '28px 20px 44px',
      }}
    >
      <div style={{ maxWidth: 840, margin: '0 auto' }}>
        <button
          type="button"
          onClick={onBack}
          style={{
            border: 'none',
            background: '#111',
            color: '#fff',
            borderRadius: 999,
            padding: '10px 16px',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            marginBottom: 20,
          }}
        >
          Back To Home
        </button>

        <div
          style={{
            background: '#fff',
            borderRadius: 24,
            border: '1px solid #e7ecf3',
            boxShadow: '0 8px 24px rgba(17,24,39,0.06)',
            padding: '34px clamp(20px, 4vw, 44px)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <img src={mascot} alt="notifybear" style={{ width: 30, height: 30, objectFit: 'contain' }} />
            <span style={{ fontWeight: 800, fontSize: '1rem', color: '#0f172a' }}>Notifybear</span>
          </div>

          <h1
            style={{
              margin: '0 0 10px',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#111827',
            }}
          >
            Contact Us
          </h1>

          <p style={{ margin: '0 0 28px', color: '#475569', lineHeight: 1.7 }}>
            Reach out to the right team and we will get back to you as quickly as possible.
          </p>

          <div style={{ display: 'grid', gap: 14 }}>
            <div
              style={{
                border: '1px solid #e2e8f0',
                borderRadius: 16,
                padding: '16px 18px',
                background: '#f8fbff',
              }}
            >
              <p style={{ margin: '0 0 6px', fontSize: '0.8rem', color: '#64748b', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Careers and PR
              </p>
              <a
                href="mailto:team@notifybear.com"
                style={{ color: '#0369a1', fontWeight: 700, textDecoration: 'none' }}
              >
                team@notifybear.com
              </a>
            </div>

            <div
              style={{
                border: '1px solid #e2e8f0',
                borderRadius: 16,
                padding: '16px 18px',
                background: '#f8fbff',
              }}
            >
              <p style={{ margin: '0 0 6px', fontSize: '0.8rem', color: '#64748b', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Support
              </p>
              <a
                href="mailto:support@notifybear.com"
                style={{ color: '#0369a1', fontWeight: 700, textDecoration: 'none' }}
              >
                support@notifybear.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}