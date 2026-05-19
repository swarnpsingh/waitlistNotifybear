import React, { useEffect } from 'react';
import mascot from '../../assets/icon-mascot.png';

const SECTIONS = [
  {
    heading: null,
    body: `Welcome to Notifybear (“Notifybear,” “we,” “our,” or “us”), operated by Notifybear LLC. This Privacy Policy explains how Notifybear handles information when you use our mobile application, website, and related services (collectively, the “Services”).\n\nWebsite: https://www.notifybear.com/\nAndroid App: https://play.google.com/store/apps/details?id=com.notifybear`,
  },
  {
    heading: 'Our Privacy-First Commitment',
    body: `Notifybear is built as an offline-first notification intelligence platform that helps users read, analyze, and prioritize notifications directly on their devices.\n\nCore Principle:\nYour personal notification data remains on your device whenever possible.`,
    list: [
      'Notifybear reads and prioritizes notifications locally on your device.',
      'Notification content, personal messages, app alerts, schedules, and user-specific notification history are not stored on Notifybear servers unless explicitly stated for a feature you choose to enable.',
      'Notifybear servers are designed so they cannot directly access, read, or reconstruct your private notification content from limited technical or training-related feature data.',
      'Notifybear LLC does not sell your personal notification data.',
    ],
  },
  {
    heading: 'Information We Process',
    subsections: [
      {
        subheading: 'On-Device Processing',
        list: [
          'Incoming notification text',
          'Notification source/app name',
          'Notification timestamps',
          'User prioritization preferences',
          'Local notification history',
          'Personalized categorization settings',
        ],
        after: `Important:\nThis processing primarily occurs locally on your device to maximize privacy.`,
      },
    ],
  },
  {
    heading: 'Information We Do NOT Store on Our Servers',
    list: [
      'Personal notification contents',
      'Private messages',
      'OTPs or security codes',
      'Banking alerts',
      'Email contents',
      'Messaging app notifications',
      'Personal schedules',
      'Local notification history',
      'User-defined prioritization patterns (unless part of an explicitly enabled sync or backup feature)',
    ],
  },
  {
    heading: 'Limited Technical Data We May Collect',
    body: `To improve performance, reliability, and product development, Notifybear may collect minimal non-personal technical data such as:`,
    list: [
      'App crash reports',
      'Device model',
      'Operating system version',
      'App performance diagnostics',
      'Anonymous feature usage statistics',
    ],
    after: `This data:\n\n• Does not include private notification content\n• Is anonymized or aggregated where possible\n• Cannot be used to recreate personal notifications\n• Is used for product improvement, bug fixes, and security`,
  },
  {
    heading: 'AI and Notification Prioritization',
    body: `Notifybear may use AI or machine learning systems to improve notification prioritization.\n\nPrivacy Safeguards:`,
    list: [
      'Prioritization is designed to function primarily on-device where feasible',
      'Any optional training or optimization features are structured to avoid retaining identifiable personal notification content',
      'Notifybear LLC cannot reconstruct original notifications from training features alone',
      'Personal data is not sold for third-party advertising or external AI model training',
    ],
  },
  {
    heading: 'Permissions',
    body: `Notifybear may request permissions such as:`,
    list: [
      'Notification Access',
      'Battery Optimization Exceptions',
      'Accessibility Features (if required for specific functions)',
    ],
    after: `These permissions are used solely to deliver app functionality and improve notification prioritization.`,
  },
  {
    heading: 'Data Security',
    body: `We implement privacy-by-design measures including:`,
    list: [
      'Local-first data storage',
      'Restricted server-side data exposure',
      'Secure communication protocols where network activity exists',
      'Industry-standard safeguards for technical systems',
    ],
    after: `Because your primary data remains on-device, centralized exposure risk is significantly reduced.`,
  },
  {
    heading: 'Third-Party Services',
    body: `Notifybear may use trusted third-party providers for:`,
    list: [
      'Analytics',
      'Crash reporting',
      'Payment processing (if premium services exist)',
    ],
    after: `These services are limited to necessary operational data and are not intended to access your private notification content.`,
  },
  {
    heading: 'User Control',
    body: `You control your data through:`,
    list: [
      'Device settings',
      'App permission settings',
      'Local app data deletion',
      'Uninstalling Notifybear',
    ],
    after: `Deleting the app or its local storage may remove stored on-device data, subject to your device’s backup settings.`,
  },
  {
    heading: 'Children’s Privacy',
    body: `Notifybear is not intended for children under 13 (or applicable local age requirements) without parental or guardian consent.`,
  },
  {
    heading: 'International Users',
    body: `If you access Notifybear from outside the jurisdiction of Notifybear LLC, limited technical data may be processed according to applicable laws and infrastructure requirements.`,
  },
  {
    heading: 'Changes to This Privacy Policy',
    body: `Notifybear LLC may update this Privacy Policy periodically. Changes will be reflected by updating the “Last Updated” date above. Continued use of the Services after updates constitutes acceptance of the revised policy.`,
  },
  {
    heading: 'Contact Information',
    body: `Notifybear LLC`,
    list: [
      'Website: https://www.notifybear.com/',
      'App: https://play.google.com/store/apps/details?id=com.notifybear',
      'Email: support@notifybear.com',
    ],
  },
  {
    heading: 'Plain-English Summary',
    body: `Notifybear helps you manage your notifications while keeping your personal data primarily on your device.\n\nYour notifications are analyzed and prioritized locally whenever possible, and Notifybear LLC is designed not to read, store, or recreate your private notification content from server systems alone.`,
  },
];

function Paragraph({ text }) {
  return text.split('\n\n').map((para, i) => (
    <p key={i} style={{ margin: '0 0 14px', lineHeight: 1.75, color: '#444' }}>
      {para}
    </p>
  ));
}

function BulletList({ items }) {
  return (
    <ul style={{ margin: '12px 0 16px 0', paddingLeft: 24 }}>
      {items.map((item, i) => (
        <li key={i} style={{ marginBottom: 8, lineHeight: 1.7, color: '#444' }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

function renderSection(section, depth = 0) {
  return (
    <div key={section.heading || 'intro'} style={{ marginBottom: depth === 0 ? 48 : 28 }}>
      {section.heading && (
        <h2 style={{
          fontSize: depth === 0 ? '1.35rem' : '1.05rem',
          fontWeight: 700,
          color: '#111',
          letterSpacing: '-0.02em',
          marginBottom: 12,
          marginTop: depth === 0 ? 0 : 4,
        }}>
          {section.heading}
        </h2>
      )}

      {section.body && <Paragraph text={section.body} />}
      {section.list && <BulletList items={section.list} />}
      {section.after && <Paragraph text={section.after} />}
      {section.afterList && <BulletList items={section.afterList} />}

      {section.subsections && section.subsections.map((sub, i) => (
        <div key={i} style={{ marginBottom: 20 }}>
          <h3 style={{
            fontSize: '1.0rem',
            fontWeight: 700,
            color: '#222',
            marginBottom: 8,
            letterSpacing: '-0.01em',
          }}>
            {sub.subheading}
          </h3>
          {sub.body && <Paragraph text={sub.body} />}
          {sub.list && <BulletList items={sub.list} />}
          {sub.after && <Paragraph text={sub.after} />}

          {sub.nested && sub.nested.map((nested, j) => (
            <div key={j} style={{ marginBottom: 20, paddingLeft: 16, borderLeft: '2px solid #e5e7eb' }}>
              <h4 style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#333',
                marginBottom: 8,
                letterSpacing: '-0.005em',
              }}>
                {nested.subheading}
              </h4>
              {nested.body && <Paragraph text={nested.body} />}
              {nested.list && <BulletList items={nested.list} />}
              {nested.after && <Paragraph text={nested.after} />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function PrivacyPolicyPage({ onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#fff', fontFamily: 'inherit' }}>
      {/* Top bar */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e5e7eb',
        padding: '0 24px',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src={mascot} alt="notifybear" style={{ width: 26, height: 26, objectFit: 'contain' }} />
          <span style={{ fontWeight: 700, fontSize: '1rem', color: '#111', letterSpacing: '-0.01em' }}>notifyBear</span>
        </div>
        <button
          onClick={onBack}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '7px 16px',
            borderRadius: 999,
            border: '1px solid #e0e0e0',
            background: '#fff',
            color: '#333',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.15s',
          }}
          onMouseOver={(e) => e.currentTarget.style.background = '#f5f5f5'}
          onMouseOut={(e) => e.currentTarget.style.background = '#fff'}
        >
          ← Back
        </button>
      </div>

      {/* Content */}
      <div style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: '64px 32px 96px',
      }}>
        {/* Title block */}
        <div style={{ marginBottom: 48, paddingBottom: 32, borderBottom: '1px solid #e5e7eb' }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 2.75rem)',
            fontWeight: 800,
            color: '#111',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: 12,
          }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '0.875rem', color: '#888', margin: 0 }}>
            Last updated: May 19, 2026
          </p>
        </div>

        {/* Intro blurb */}
        <p style={{ fontSize: '0.975rem', color: '#555', lineHeight: 1.75, marginBottom: 48 }}>
          This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </p>

        {/* Sections */}
        <div style={{ fontSize: '0.9375rem' }}>
          {SECTIONS.map((section) => renderSection(section))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: '1px solid #e5e7eb',
        padding: '28px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
      }}>
        <img src={mascot} alt="notifybear" style={{ width: 18, height: 18, objectFit: 'contain', opacity: 0.5 }} />
        <p style={{ fontSize: '0.8rem', color: '#aaa', margin: 0 }}>
          © {new Date().getFullYear()} NotifyBear LLC. All rights reserved.
        </p>
      </div>
    </div>
  );
}
