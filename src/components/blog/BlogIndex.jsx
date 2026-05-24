import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import mascot from '../../assets/icon-mascot.png';
import { posts } from '../../content/blog';
import { useSEO } from '../../hooks/useSEO';

const NAVY = '#09101F';
const YELLOW = '#F5C518';
const FONT = "'Poppins', -apple-system, sans-serif";

export default function BlogIndex() {
  useSEO({
    title: 'Blog — NotifyBear',
    description: 'Product updates, engineering notes, and thoughts on building NotifyBear.',
  });

  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

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
        <Link to="/" style={{
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '6px 16px', borderRadius: 999,
          border: '1px solid rgba(255,255,255,0.18)',
          color: 'rgba(255,255,255,0.75)', fontSize: '0.8rem', fontWeight: 600,
          textDecoration: 'none', letterSpacing: '0.01em',
          transition: 'border-color 0.15s',
        }}>
          ← Home
        </Link>
      </header>

      {/* Hero */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '80px 32px 52px' }}>
        <p style={{
          fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em',
          color: YELLOW, textTransform: 'uppercase', marginBottom: 14,
        }}>
          Blog
        </p>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800,
          color: '#fff', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 16,
        }}>
          Updates from the team
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.65, maxWidth: 480 }}>
          Product updates, engineering notes, and thoughts on building NotifyBear.
        </p>
      </div>

      {/* Posts */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 32px 100px' }}>
        {posts.map((post) => (
          <article
            key={post.slug}
            style={{
              marginBottom: 20,
              padding: '28px 32px',
              background: 'rgba(255,255,255,0.04)',
              borderRadius: 16,
              border: '1px solid rgba(255,255,255,0.09)',
            }}
          >
            <p style={{
              fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em',
              color: 'rgba(255,255,255,0.38)', textTransform: 'uppercase', marginBottom: 12,
            }}>
              {post.date}
            </p>

            <h2 style={{
              fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', fontWeight: 800,
              color: '#fff', lineHeight: 1.25, letterSpacing: '-0.02em', marginBottom: 12,
            }}>
              {post.title}
            </h2>

            <p style={{
              color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, fontSize: '0.9375rem',
              marginBottom: 24,
              display: '-webkit-box', WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical', overflow: 'hidden',
            }}>
              {post.excerpt}
            </p>

            <Link
              to={`/blog/${post.slug}`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '9px 20px', borderRadius: 999,
                background: YELLOW, color: NAVY,
                fontWeight: 700, fontSize: '0.8125rem',
                textDecoration: 'none', letterSpacing: '0.01em',
              }}
            >
              Read More <ArrowRight size={13} strokeWidth={2.5} />
            </Link>
          </article>
        ))}
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
