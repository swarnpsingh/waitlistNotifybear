import React, { useEffect } from 'react';
import mascot from '../../assets/icon-mascot.png';

function Paragraph({ text }) {
  return text.split('\n\n').map((para, i) => (
    <p key={i} style={{ margin: '0 0 14px', lineHeight: 1.75, color: '#444' }}>
      {para}
    </p>
  ));
}
const POLICY = "NOTIFYBEAR LLC\nPrivacy Policy\nEffective Date: May 24, 2026  |  Last Updated: May 24, 2026\n2115 Summit Ave, St Paul, MN 55105  |  team@notifybear.com  |  www.notifybear.com\n\nNotifyBear is built on a foundational privacy principle: your notification content never leaves your device. The AI that scores, filters, and prioritizes your notifications runs entirely on your phone — not on our servers.\n\nThis Privacy Policy explains what information Notifybear LLC ('NotifyBear', 'we', 'us', or 'our') collects, how we use it, and your rights regarding your data. This policy applies to the NotifyBear Android application ('App') and all related services. By using the App, you agree to this Privacy Policy.\n\n1. Our Core Privacy Commitment\nNotifyBear is designed with privacy as a structural guarantee, not a policy promise. The following is what we commit to — and what is technically enforced by our architecture:\n\n• Your notification content — what notifications say, who sent them, and what apps generated them — never leaves your device\n• The AI model that scores your notifications runs locally on your device, not on our servers\n• We do not sell your personal data to third parties under any circumstances\n• We do not use your notification data to serve advertising\n• You can request deletion of your account and all associated data at any time\n\n2. How NotifyBear Works — Technical Architecture\nUnderstanding how NotifyBear operates technically is essential to understanding what data we collect and why.\n\n2.1 On-Device AI Processing\nNotifyBear's machine learning model runs entirely on your Android device. When a notification arrives on your phone, the App reads it locally, scores it as High, Medium, or Low priority, scores it and filters or surfaces it accordingly — all without sending any notification content to our servers.\n\nYour notification content — messages, sender names, notification text — is processed exclusively on your device and is never transmitted to NotifyBear servers.\n\n2.2 Feature Dataset Transmission\nNotifyBear trains a personalised AI model for each individual user. To do this, a feature dataset linked to your account is transmitted to our servers when you open the App's homepage and an internet connection is available. This dataset is used exclusively to train and improve your personal AI model — it is not shared with other users or used for any other purpose.\n\nThe feature dataset is linked to your account and contains:\n• Your notification interaction patterns — which types of notifications you engage with and which you dismiss\n• Timing and engagement signals — when you use the app and how you interact with scored notifications\n• Model performance signals — behavioral data that helps your personal model improve its scoring accuracy over time\n\nThe feature dataset does NOT contain:\n• Notification content or message text\n• Sender names, email addresses, or phone numbers from notifications\n• The body or subject of any notification\n\n2.3 Offline Functionality\nThe following core features work fully offline with no internet connection required:\n• AI notification scoring — High, Medium, Low priority assignment\n• Notification scoring and filtering\n• Notification filtering and prioritization\n• All core notification management functionality\n\nThe following features require an internet connection:\n• Notification analytics dashboard\n• ML model updates from server\n• Feature dataset sync when opening the homepage\n\n3. Information We Collect\n3.1 Information You Provide Directly\nWhen you create a NotifyBear account, we collect:\n• Name\n• Email address\n• Password (stored in encrypted form — we never store plaintext passwords)\n\n3.2 Notification Access\nNotifyBear requests Android's Notification Listener permission to read notifications on your device. This permission allows the App to access notification content locally for the purpose of scoring, filtering, and prioritizing. As stated above, this content is processed exclusively on your device and is never transmitted to our servers.\n\n3.3 Feature Dataset\nAs described in Section 2.2, a feature dataset linked to your account is collected when you open the App's homepage with an active internet connection. NotifyBear trains a separate AI model for each individual user. This dataset is used exclusively to train and improve your personal AI model and is linked to your account to ensure your model reflects your specific notification behavior.\n\n3.4 Analytics and Usage Data\nWe use PostHog analytics to understand how users interact with the App at an aggregate level. This includes:\n• App open events\n• Feature usage patterns — which screens are visited, which features are used\n• Onboarding completion and drop-off points\n• Login and signup events\n\nPostHog analytics does not collect notification content. It collects behavioral data about how the App itself is used, not about the notifications within it.\n\n3.5 Device Information\nWe may collect limited device information including:\n• Android version and device model — to ensure compatibility and performance\n• App version — to deliver appropriate updates\n• Crash reports — to identify and fix technical issues\n\n4. How We Use Your Information\nWe use the information we collect for the following purposes:\n• To provide the NotifyBear service — scoring, filtering, and prioritizing your notifications\n• To train your personal AI model — using your account-linked feature dataset to improve scoring accuracy specifically for you\n• To maintain and improve the App — identifying bugs, performance issues, and areas for improvement\n• To communicate with you — account-related emails, important updates, and responses to your support requests\n• To ensure security — detecting and preventing fraudulent or unauthorized use of the App\n\nWe do not use your information for:\n• Serving third-party advertising\n• Selling to data brokers or marketing companies\n• Profiling you for purposes unrelated to notification intelligence\n• Any purpose not described in this Privacy Policy without your explicit consent\n\n5. Data Storage and Security\n5.1 On-Device Data\nNotification content, behavioral patterns, and the ML model itself are stored locally on your device using Android's secure local storage mechanisms. This data is subject to your device's security protections — screen lock, encryption, and access controls.\n\n5.2 Server-Side Data\nAccount information (name and email) and user-linked feature datasets are stored on our servers hosted on PythonAnywhere. We implement industry-standard security measures including:\n• Encryption in transit — all data transmitted between your device and our servers uses TLS encryption\n• Encryption at rest — stored data is encrypted on our servers\n• Access controls — only authorised personnel have access to server-side data\n• Regular security reviews — we periodically assess our security practices\n\n5.3 Data Retention\nWe retain your account information for as long as your account is active. Feature datasets linked to your account are retained to power your personal AI model and are deleted when your account is deleted. Upon account deletion, your personal account data and feature dataset are removed from our servers within 30 days. We retain only your email address and the reason for deletion — if provided — for internal record-keeping and service improvement purposes.\n\n6. Data Sharing\nWe do not sell your personal data. We share data only in the following limited circumstances:\n\n6.1 Service Providers\nWe work with a small number of trusted service providers who help us operate the App:\n• PythonAnywhere — cloud infrastructure and data storage\n• PostHog — product analytics (behavioral, not notification content)\n\nAll service providers are contractually required to handle data in accordance with this Privacy Policy and applicable law.\n\n6.2 Legal Requirements\nWe may disclose information if required to do so by law, court order, or governmental authority, or if we believe in good faith that such disclosure is necessary to protect the rights, property, or safety of NotifyBear, our users, or the public.\n\n6.3 Business Transfers\nIn the event of a merger, acquisition, or sale of all or substantially all of our assets, user data may be transferred as part of that transaction. We will notify you via email and a prominent in-app notice before your data is transferred and becomes subject to a different privacy policy.\n\n7. Your Rights and Choices\n7.1 Access and Correction\nYou may request access to the personal information we hold about you and ask us to correct any inaccuracies. Contact us at team@notifybear.com to make such a request.\n\n7.2 Account Deletion\nYou may delete your NotifyBear account at any time in one of two ways:\n• In the App — go to Settings > Account > Delete Account\n• Via our account deletion webpage — www.notifybear.com/delete-account\n\nUpon deletion, your personal account data and feature dataset will be removed from our servers within 30 days. Please note that we retain your email address and the reason for deletion — if you choose to provide one — for internal record-keeping and to help us improve the product. This information is not used for marketing purposes.\n\n7.3 Notification Access Revocation\nYou may revoke NotifyBear's notification access permission at any time through your Android device settings under Apps > NotifyBear > Permissions. Revoking this permission will disable the App's core functionality but will not delete your account.\n\n7.4 Model Improvement Opt-Out\nIf you do not wish your feature dataset to be used for training your personal AI model, you may opt out by contacting us at team@notifybear.com. We will flag your account to exclude its feature data from server-side model training. Note that opting out means your personal model will not improve over time. Core App functionality is not otherwise affected by this opt-out.\n\n7.5 GDPR Rights (European Users)\nIf you are located in the European Economic Area, you have the following additional rights under the General Data Protection Regulation:\n• Right to erasure — request deletion of your personal data\n• Right to portability — request your data in a machine-readable format\n• Right to restriction — request that we limit how we use your data\n• Right to object — object to processing of your data for specific purposes\n• Right to lodge a complaint — with your local data protection supervisory authority\n\nTo exercise any of these rights, contact us at team@notifybear.com. We will respond within 30 days.\n\n7.6 Indian Users — IT Act Compliance\nFor users based in India, this Privacy Policy is designed to comply with the Information Technology Act 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules 2011. You have the right to review, correct, and withdraw consent for the processing of your sensitive personal data by contacting team@notifybear.com.\n\n8. Children's Privacy\nNotifyBear is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us at team@notifybear.com and we will delete that information promptly.\n\n9. Third-Party Services and Links\nThe App may contain links to third-party websites or services. This Privacy Policy does not apply to those third-party services. We encourage you to review the privacy policies of any third-party services you access through the App.\n\nThe Google Play Store, through which the App is distributed, is subject to Google's Privacy Policy. Notification content from third-party apps (Gmail, WhatsApp, LinkedIn, etc.) is processed locally on your device and is not shared with those third parties by NotifyBear.\n\n10. Changes to This Privacy Policy\nWe may update this Privacy Policy from time to time. When we make material changes we will notify you by:\n• Sending an email to the address associated with your account\n• Displaying a prominent notice within the App\n\nWe will provide at least 14 days notice before material changes take effect. Your continued use of the App after the effective date of the updated Privacy Policy constitutes your acceptance of the changes. The most current version of this policy is always available at www.notifybear.com/privacy-policy.\n\n11. Contact Us\nIf you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact us:\n\nNotifybear LLC\n2115 Summit Ave, St Paul, MN 55105, United States\nEmail: team@notifybear.com\nWebsite: www.notifybear.com\nResponse time: We aim to respond to all privacy-related inquiries within 5 business days.\n\nNote: This Privacy Policy has been prepared by Notifybear LLC and reflects the current technical architecture of the App as of the effective date above. NotifyBear recommends having this document reviewed by a qualified legal professional with expertise in US, Indian, and EU data protection law before or following incorporation as a Delaware C-Corporation." 

function renderParagraphsAndLists(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const hasBullets = lines.some(l => /^([•\-*])\s+/.test(l));
  if (hasBullets) {
    const intro = [];
    const items = [];
    lines.forEach(l => {
      if (/^([•\-*])\s+/.test(l)) items.push(l.replace(/^([•\-*])\s+/, ''));
      else intro.push(l);
    });
    return (
      <>
        {intro.length > 0 && <Paragraph text={intro.join('\n\n')} />}
        <ul style={{ paddingLeft: 20, marginTop: 8, color: '#444' }}>
          {items.map((it, i) => <li key={i} style={{ marginBottom: 8, lineHeight: 1.6 }}>{it}</li>)}
        </ul>
      </>
    );
  }
  return <Paragraph text={text} />;
}

function renderPolicy() {
  const blocks = POLICY.split('\n\n').map(b => b.trim()).filter(Boolean);
  return blocks.map((b, i) => {
    if (b.startsWith('NOTIFYBEAR LLC')) {
      const lines = b.split('\n');
      const title = lines[0];
      const subtitle = lines[1] || '';
      const meta = lines.slice(2).join(' | ');
      return (
        <div key={i} style={{ marginBottom: 20 }}>
          <h2 style={{ fontSize: '1.125rem', margin: '0 0 6px', color: '#111' }}>{title}</h2>
          {subtitle && <p style={{ margin: '0 0 8px', fontWeight: 600 }}>{subtitle}</p>}
          {meta && <p style={{ margin: 0, color: '#666', fontSize: '0.875rem' }}>{meta}</p>}
        </div>
      );
    }

    const firstLine = b.split('\n')[0];
    if (/^\d+(\.\d+)*\s/.test(firstLine)) {
      const lines = b.split('\n');
      const heading = lines[0];
      const rest = lines.slice(1).join('\n\n');
      const isSub = /^\d+\.\d+/.test(heading);
      return (
        <div key={i} style={{ marginBottom: 16 }}>
          {isSub ? <h3 style={{ fontSize: '1rem', margin: '6px 0', color: '#111' }}>{heading}</h3> : <h2 style={{ fontSize: '1.125rem', margin: '10px 0', color: '#111' }}>{heading}</h2>}
          {rest && renderParagraphsAndLists(rest)}
        </div>
      );
    }

    return (
      <div key={i} style={{ marginBottom: 12 }}>
        {renderParagraphsAndLists(b)}
      </div>
    );
  });
}

export default function PrivacyPolicyPage({ onBack }) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#fff', fontFamily: 'inherit' }}>
      <div style={{
        position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e5e7eb', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src={mascot} alt="notifybear" style={{ width: 26, height: 26, objectFit: 'contain' }} />
          <span style={{ fontWeight: 700, fontSize: '1rem', color: '#111', letterSpacing: '-0.01em' }}>notifyBear</span>
        </div>
        <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 16px', borderRadius: 999, border: '1px solid #e0e0e0', background: '#fff', color: '#333', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.background = '#f5f5f5'} onMouseOut={(e) => e.currentTarget.style.background = '#fff'}>← Back</button>
      </div>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '64px 32px 96px' }}>
        <div style={{ marginBottom: 48, paddingBottom: 32, borderBottom: '1px solid #e5e7eb' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800, color: '#111', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 12 }}>Privacy Policy</h1>
          <p style={{ fontSize: '0.875rem', color: '#888', margin: 0 }}>Last updated: May 24, 2026</p>
        </div>

        <div style={{ fontSize: '0.9375rem' }}>
          {renderPolicy()}
        </div>
      </div>

      <div style={{ borderTop: '1px solid #e5e7eb', padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        <img src={mascot} alt="notifybear" style={{ width: 18, height: 18, objectFit: 'contain', opacity: 0.5 }} />
        <p style={{ fontSize: '0.8rem', color: '#aaa', margin: 0 }}>© {new Date().getFullYear()} NotifyBear LLC. All rights reserved.</p>
      </div>
    </div>
  );
}
