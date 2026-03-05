import React from 'react';
import { motion } from 'framer-motion';
import imgTaskManagement from '../../assets/image copy.png';
import imgTimeTracking from '../../assets/image.png';
import imgCollaboration from '../../assets/image2.png';
import imgGoalSetting from '../../assets/Mockup2.png';

const cardBase = {
  background: '#ffffff',
  borderRadius: '28px',
  overflow: 'hidden',
};

export default function FeaturesSection() {
  return (
    <section
      id="features"
      style={{
        background: '#ebebeb',
        padding: '96px 32px',
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '64px' }}
      >
        <h2
          style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
            fontWeight: 600,
            color: '#111',
            lineHeight: 1.1,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}
        >
          Features designed<br />for less chaos.
        </h2>
        <p style={{ fontSize: '0.95rem', color: '#888', maxWidth: 360, margin: '0 auto', lineHeight: 1.6 }}>
          Notifybear cuts down the number of notifications received, based on user's context.
        </p>
      </motion.div>

      {/* Bento grid */}
      <div className="features-bento-grid">
        {/* Card 1 — Task Management (tall left) */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0 }}
          viewport={{ once: true }}
          style={{ ...cardBase, display: 'flex', flexDirection: 'column' }}
        >
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px 48px 24px',
            background: '#f7f7f7',
            minHeight: 300,
          }}>
            <img
              src={imgTaskManagement}
              alt="Analytics"
              style={{ maxHeight: 260, width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.10))' }}
            />
          </div>
          <div style={{ padding: '28px 36px 36px' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#aaa', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 }}>Analytics</p>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#111', marginBottom: 10, letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Understand where <br /> your time goes.
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#888', lineHeight: 1.65 }}>
              Get detailed information about each notification, so that you know what takes your time.
            </p>
          </div>
        </motion.div>

        {/* Card 2 — Time Tracking (tall right) */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          viewport={{ once: true }}
          style={{ ...cardBase, display: 'flex', flexDirection: 'column' }}
        >
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px 48px 24px',
            background: '#f7f7f7',
            minHeight: 300,
          }}>
            <img
              src={imgTimeTracking}
              alt="Quick Info"
              style={{ maxHeight: 260, width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.10))' }}
            />
          </div>
          <div style={{ padding: '28px 36px 36px' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#aaa', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 }}>Quick Info</p>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#111', marginBottom: 10, letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Know why you <br /> received notification.
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#888', lineHeight: 1.65 }}>
              Maximize every minute with clear, contextual and to the point notification information.
            </p>
          </div>
        </motion.div>

        {/* Card 3 — Collaboration (wide bottom-left) */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          viewport={{ once: true }}
          style={cardBase}
          className="feature-card-horizontal"
        >
          <div className="feature-card-horizontal-image">
            <img
              src={imgCollaboration}
              alt="Connect"
              style={{ maxHeight: 200, width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.10))' }}
            />
          </div>
          <div className="feature-card-horizontal-text">
            <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#aaa', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 }}>Connect</p>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111', marginBottom: 10, letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Connect all <br /> your apps.
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#888', lineHeight: 1.65 }}>
              Notifybear works with all kind of notifications you receive, from any native application.
            </p>
          </div>
        </motion.div>

        {/* Card 4 — Goal Setting (wide bottom-right) */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          viewport={{ once: true }}
          style={cardBase}
          className="feature-card-horizontal"
        >
          <div className="feature-card-horizontal-image">
            <img
              src={imgGoalSetting}
              alt="AI Summary"
              style={{ maxHeight: 200, width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.10))' }}
            />
          </div>
          <div className="feature-card-horizontal-text">
            <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#aaa', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 }}>AI Summary</p>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111', marginBottom: 10, letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Receive daily <br /> notification summary.
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#888', lineHeight: 1.65 }}>
              Break down notifications received, so you understand your notifications better.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
