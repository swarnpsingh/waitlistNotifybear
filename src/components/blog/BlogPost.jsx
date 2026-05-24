import React, { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import mascot from '../../assets/icon-mascot.png';
import { posts } from '../../content/blog';
import { useSEO } from '../../hooks/useSEO';
import { PLAY_STORE_URL } from '../../constants/links';

const NAVY = '#09101F';
const YELLOW = '#F5C518';
const FONT = "'Poppins', -apple-system, sans-serif";

// Converts **bold** and *italic* inline markers to React elements
function parseInline(text, baseKey = 0) {
  const parts = [];
  let lastIndex = 0;
  let key = baseKey;
  const regex = /\*\*([^*]+?)\*\*|\*([^*]+?)\*/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[1] !== undefined) {
      parts.push(
        <strong key={key++} style={{ color: '#fff', fontWeight: 700 }}>
          {match[1]}
        </strong>
      );
    } else {
      parts.push(
        <em key={key++} style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.88)' }}>
          {match[2]}
        </em>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : parts;
}

// Converts the markdown content string to styled React elements
function renderMarkdown(content) {
  const blocks = content.split(/\n\n+/).map((b) => b.trim()).filter(Boolean);

  return blocks.map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h2 key={i} style={{
          fontSize: 'clamp(1.25rem, 3vw, 1.625rem)',
          fontWeight: 800, color: '#fff', lineHeight: 1.25,
          letterSpacing: '-0.02em', margin: '52px 0 18px',
        }}>
          {parseInline(block.slice(3).trim(), i * 100)}
        </h2>
      );
    }

    if (block.startsWith('### ')) {
      return (
        <h3 key={i} style={{
          fontSize: '1.125rem', fontWeight: 700, color: '#fff',
          lineHeight: 1.3, letterSpacing: '-0.01em', margin: '36px 0 12px',
        }}>
          {parseInline(block.slice(4).trim(), i * 100)}
        </h3>
      );
    }

    const lines = block.split('\n').filter((l) => l.trim());
    if (lines.length > 0 && lines.every((l) => l.trim().startsWith('- '))) {
      return (
        <ul key={i} style={{ listStyle: 'none', padding: 0, margin: '0 0 28px' }}>
          {lines.map((l, j) => (
            <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
              <span style={{ color: YELLOW, flexShrink: 0, marginTop: '0.3em', fontSize: '0.65rem', lineHeight: 1 }}>
                ▸
              </span>
              <span style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.0625rem', lineHeight: 1.75 }}>
                {parseInline(l.trim().slice(2), i * 100 + j)}
              </span>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={i} style={{
        fontSize: '1.0625rem', color: 'rgba(255,255,255,0.72)',
        lineHeight: 1.85, margin: '0 0 22px',
      }}>
        {parseInline(block, i * 100)}
      </p>
    );
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  useSEO({
    title: post ? `${post.title} — NotifyBear Blog` : 'NotifyBear Blog',
    description: post ? post.excerpt : '',
    ogType: 'article',
  });

  useEffect(() => { window.scrollTo({ top: 0 }); }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div style={{ minHeight: '100vh', background: NAVY, fontFamily: FONT, color: '#fff' }}>

      {/* Sticky header */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(9,16,31,0.92)', backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        height: 60, padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <img src={mascot} alt="notifybear" style={{ width: 26, height: 26, objectFit: 'contain' }} />
          <span style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#fff', letterSpacing: '-0.01em' }}>
            notifybear
          </span>
        </Link>
        <Link to="/blog" style={{
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '6px 16px', borderRadius: 999,
          border: '1px solid rgba(255,255,255,0.18)',
          color: 'rgba(255,255,255,0.75)', fontSize: '0.8rem', fontWeight: 600,
          textDecoration: 'none',
        }}>
          ← Blog
        </Link>
      </header>

      {/* Post */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '72px 32px 100px' }}>

        {/* Post header */}
        <div style={{ marginBottom: 52, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <p style={{
            fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em',
            color: YELLOW, textTransform: 'uppercase', marginBottom: 20,
          }}>
            {post.date}
          </p>
          <h1 style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', fontWeight: 800,
            color: '#fff', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 24,
          }}>
            {post.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 34, height: 34, borderRadius: '50%',
              background: 'rgba(245,197,24,0.15)',
              border: '1px solid rgba(245,197,24,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.8rem', fontWeight: 700, color: YELLOW, flexShrink: 0,
            }}>
              {post.author.charAt(0)}
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.3 }}>
                {post.author}
              </p>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.3 }}>
                {post.authorRole}
              </p>
            </div>
          </div>
        </div>

        {/* Markdown body */}
        <div style={{ fontSize: '1.0625rem' }}>
          {renderMarkdown(post.content)}
        </div>

        {/* CTA box */}
        <div style={{
          marginTop: 72,
          padding: '32px 36px',
          background: 'rgba(245,197,24,0.07)',
          border: '1px solid rgba(245,197,24,0.25)',
          borderRadius: 18,
        }}>
          <p style={{
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em',
            color: YELLOW, textTransform: 'uppercase', marginBottom: 10,
          }}>
            Download NotifyBear
          </p>
          <h3 style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 800,
            color: '#fff', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 12,
          }}>
            Try on-device AI for yourself.
          </h3>
          <p style={{
            color: 'rgba(255,255,255,0.55)', fontSize: '0.9375rem',
            lineHeight: 1.65, marginBottom: 24,
          }}>
            NotifyBear is free on Google Play. Your notifications stay on your phone — always.
          </p>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '11px 24px', borderRadius: 999,
              background: YELLOW, color: NAVY,
              fontWeight: 700, fontSize: '0.875rem',
              textDecoration: 'none', letterSpacing: '0.01em',
            }}
          >
            Download on Google Play →
          </a>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '24px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      }}>
        <img src={mascot} alt="" style={{ width: 16, height: 16, objectFit: 'contain', opacity: 0.35 }} />
        <p style={{ fontSize: '0.775rem', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
          © {new Date().getFullYear()} NotifyBear LLC. All rights reserved.
        </p>
      </div>
    </div>
  );
}
