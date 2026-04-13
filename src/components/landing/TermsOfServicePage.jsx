import React, { useEffect } from 'react';
import mascot from '../../assets/icon-mascot.png';

const introParagraphs = [
  'Welcome to Notifybear. These Terms of Service ("Terms") govern your use of the Notifybear mobile application ("App") and any related services provided by Notifybear LLC ("we", "us", or "our"). By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree, do not use the App.',
  'Please read these Terms carefully. They contain important information about your rights and obligations, including limitations of liability and a dispute resolution clause.',
];

const sections = [
  {
    number: '1.',
    title: 'Acceptance of Terms',
    paragraphs: [
      'By creating an account or using Notifybear, you confirm that you are at least 13 years of age (or the minimum age of digital consent in your country), that you have read and understood these Terms, and that you agree to be legally bound by them. If you are using the App on behalf of an organisation, you represent that you have authority to bind that organisation to these Terms.',
    ],
  },
  {
    number: '2.',
    title: 'Description of Service',
    paragraphs: [
      'Notifybear is an AI-powered notification assistant for Android devices. The App reads notifications received on your device, assigns a priority score (High, Medium, or Low), provides plain-language explanations of why a notification may be important, and learns from your interaction behavior to improve its recommendations over time.',
      'The App requires you to grant notification access permission on your Android device. Without this permission, the core functionality of the App cannot operate.',
    ],
  },
  {
    number: '3.',
    title: 'User Accounts',
    paragraphs: ['To use Notifybear, you must create an account using a valid email address. You are responsible for:'],
    list: [
      'Maintaining the confidentiality of your account credentials',
      'All activity that occurs under your account',
      'Notifying us immediately at team@notifybear.com if you suspect unauthorised access to your account',
    ],
    after: [
      'We reserve the right to suspend or terminate accounts that violate these Terms, are found to be fraudulent, or are inactive for an extended period.',
    ],
  },
  {
    number: '4.',
    title: 'Notification Access and Data Collection',
    subsections: [
      {
        heading: '4.1 What We Access',
        paragraphs: [
          'In order to provide its core functionality, Notifybear requests permission to read notifications on your Android device. This includes notification content, the app that generated the notification, timestamp, and associated metadata.',
        ],
      },
      {
        heading: '4.2 How We Use This Data',
        paragraphs: ['Notification data is used solely to:'],
        list: [
          'Score and prioritise your notifications',
          'Generate plain-language explanations of notification relevance',
          'Train and improve the AI model on a per-user basis',
          'Improve the overall Notifybear service across all users in aggregate and anonymised form',
        ],
      },
      {
        heading: '4.3 What We Do Not Do',
        paragraphs: ['We do not:'],
        list: [
          'Sell your notification data or personal data to third parties',
          'Share individual notification content with advertisers',
          'Use your notification data to serve third-party advertising without your explicit consent',
          'Store the full content of your notifications longer than necessary to provide the service',
        ],
        after: ['For full details on data collection, storage, and your rights, please refer to our Privacy Policy available at www.notifybear.com/privacy.'],
      },
    ],
  },
  {
    number: '5.',
    title: 'Subscriptions and Payments',
    subsections: [
      {
        heading: '5.1 Free Tier',
        paragraphs: ['Notifybear offers a free tier with limited functionality. Features available on the free tier are subject to change at our discretion with reasonable notice to users.'],
      },
      {
        heading: '5.2 Paid Subscriptions',
        paragraphs: ['Notifybear offers paid subscription plans including a Personal plan at $9.99 per month. Subscriptions are billed in advance on a monthly or annual basis through the Google Play billing system. All payments are processed by Google and subject to Google Play\'s payment terms.'],
      },
      {
        heading: '5.3 Cancellation and Refunds',
        paragraphs: ['You may cancel your subscription at any time through your Google Play account settings. Cancellation takes effect at the end of your current billing period. We do not offer refunds for partial billing periods except where required by applicable law. If you believe you are entitled to a refund, contact us at team@notifybear.com.'],
      },
      {
        heading: '5.4 Price Changes',
        paragraphs: ['We reserve the right to change subscription pricing with at least 30 days notice. Continued use of the App after a price change takes effect constitutes acceptance of the new pricing.'],
      },
    ],
  },
  {
    number: '6.',
    title: 'Acceptable Use',
    paragraphs: ['You agree not to use Notifybear to:'],
    list: [
      'Violate any applicable local, national, or international law or regulation',
      'Attempt to reverse engineer, decompile, or extract the source code of the App',
      'Interfere with or disrupt the integrity or performance of the App or its servers',
      'Attempt to gain unauthorised access to any part of the App or its related systems',
      'Use the App for any fraudulent, deceptive, or harmful purpose',
      'Upload or transmit any viruses, malware, or other malicious code',
    ],
  },
  {
    number: '7.',
    title: 'Intellectual Property',
    paragraphs: [
      'All content, features, functionality, branding, and technology within the Notifybear App - including but not limited to the AI model, scoring system, user interface, logo, and name - are owned by Notifybear LLC and are protected by applicable intellectual property laws.',
      'These Terms do not grant you any right, title, or interest in the App beyond a limited, non-exclusive, non-transferable licence to use the App for personal, non-commercial purposes in accordance with these Terms.',
    ],
  },
  {
    number: '8.',
    title: 'Privacy',
    paragraphs: [
      'Your privacy is important to us. Our Privacy Policy, available at www.notifybear.com/privacy, explains how we collect, use, store, and protect your personal data. By using Notifybear, you consent to the data practices described in the Privacy Policy.',
      'Notifybear complies with applicable data protection laws including, where applicable, the General Data Protection Regulation (GDPR) and applicable US state privacy laws. Users have the right to request access to, correction of, or deletion of their personal data by contacting team@notifybear.com.',
    ],
  },
  {
    number: '9.',
    title: 'Disclaimer of Warranties',
    paragraphs: [
      'THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, NOTIFYBEAR LLC DISCLAIMS ALL WARRANTIES INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
      'We do not warrant that the App will be uninterrupted, error-free, or that any particular notification will be correctly scored or identified as important. AI-based prioritisation is probabilistic by nature and may not always reflect your preferences accurately, particularly during early use before the model has learned your behavior.',
    ],
  },
  {
    number: '10.',
    title: 'Limitation of Liability',
    paragraphs: [
      'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NOTIFYBEAR LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THE APP, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, MISSED NOTIFICATIONS, OR LOSS OF BUSINESS OPPORTUNITY.',
      'Our total aggregate liability to you for any claims arising under these Terms shall not exceed the amount you paid us in the twelve months preceding the claim, or $10 USD if you have not made any payments.',
    ],
  },
  {
    number: '11.',
    title: 'Termination',
    paragraphs: [
      'We may suspend or terminate your access to the App at any time, with or without notice, if we believe you have violated these Terms or for any other legitimate business reason. Upon termination, your right to use the App ceases immediately.',
      'You may delete your account at any time by contacting team@notifybear.com. Upon deletion, we will remove your personal data in accordance with our Privacy Policy and applicable law.',
    ],
  },
  {
    number: '12.',
    title: 'Governing Law and Disputes',
    paragraphs: [
      'These Terms are governed by and construed in accordance with the laws of the State of Minnesota, United States, without regard to its conflict of law provisions.',
      'Any dispute arising from these Terms or your use of the App shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to binding arbitration in Ramsey County, Minnesota, under the rules of the American Arbitration Association, except that either party may seek injunctive relief in a court of competent jurisdiction.',
      'If you are a user based in India, disputes may alternatively be resolved under Indian law in the courts of competent jurisdiction, subject to mutual agreement.',
    ],
  },
  {
    number: '13.',
    title: 'Changes to These Terms',
    paragraphs: [
      'We reserve the right to update these Terms at any time. When we make material changes, we will notify you via email or an in-app notification at least 14 days before the changes take effect. Your continued use of the App after the effective date of revised Terms constitutes your acceptance of the changes.',
      'The most current version of these Terms will always be available at www.notifybear.com/terms.',
    ],
  },
  {
    number: '14.',
    title: 'Contact Us',
    paragraphs: ['If you have any questions about these Terms, please contact us:'],
    list: [
      'Notifybear LLC',
      '2115 Summit Ave, St Paul, MN 55105',
      'Email: team@notifybear.com',
      'Phone: +1 (763) 501-3268',
      'Website: www.notifybear.com',
    ],
  },
];

const note = 'Note: These Terms of Service have been prepared for informational purposes. Notifybear LLC recommends reviewing this document with a qualified legal professional before publishing, particularly regarding jurisdiction-specific compliance requirements for India and the European Union.';

function Paragraphs({ items }) {
  return (
    <>
      {items.map((item, idx) => (
        <p key={`${item.slice(0, 18)}-${idx}`} style={{ margin: '0 0 12px', color: '#475569', lineHeight: 1.75 }}>
          {item}
        </p>
      ))}
    </>
  );
}

function BulletList({ items }) {
  return (
    <ul style={{ margin: '6px 0 14px', paddingLeft: 22, color: '#475569' }}>
      {items.map((item, idx) => (
        <li key={`${item.slice(0, 18)}-${idx}`} style={{ marginBottom: 7, lineHeight: 1.7 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TermsOfServicePage({ onBack }) {
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
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
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
            Terms of Service
          </h1>

          <p style={{ margin: '0 0 4px', color: '#475569', lineHeight: 1.7, fontWeight: 600 }}>
            Effective Date: April 13, 2026 | Last Updated: April 13, 2026
          </p>

          <p style={{ margin: '0 0 24px', color: '#64748b', lineHeight: 1.7 }}>
            2115 Summit Ave, St Paul, MN 55105 | team@notifybear.com | www.notifybear.com
          </p>

          <Paragraphs items={introParagraphs} />

          {sections.map((section) => (
            <section key={section.title} style={{ marginBottom: 26 }}>
              <h2 style={{ margin: '0 0 8px', color: '#111827', fontSize: '1.2rem', letterSpacing: '-0.01em' }}>
                {section.number} {section.title}
              </h2>

              {section.paragraphs && <Paragraphs items={section.paragraphs} />}
              {section.list && <BulletList items={section.list} />}

              {section.subsections && section.subsections.map((subsection) => (
                <div key={subsection.heading} style={{ margin: '14px 0 16px' }}>
                  <h3 style={{ margin: '0 0 8px', color: '#1f2937', fontSize: '1rem' }}>{subsection.heading}</h3>
                  {subsection.paragraphs && <Paragraphs items={subsection.paragraphs} />}
                  {subsection.list && <BulletList items={subsection.list} />}
                  {subsection.after && <Paragraphs items={subsection.after} />}
                </div>
              ))}

              {section.after && <Paragraphs items={section.after} />}
            </section>
          ))}

          <div
            style={{
              marginTop: 8,
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: 12,
              padding: '14px 16px',
            }}
          >
            <p style={{ margin: 0, color: '#475569', lineHeight: 1.7 }}>{note}</p>
          </div>
        </div>
      </div>
    </div>
  );
}