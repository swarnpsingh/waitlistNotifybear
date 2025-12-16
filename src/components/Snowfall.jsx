import { useMemo } from 'react';

export default function Snowfall({ count = 40 }) {
  // Generate flakes only once
  const flakes = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const left = Math.random() * 100; // vw
      const size = 6 + Math.random() * 14; // px
      const opacity = 0.4 + Math.random() * 0.7;
      const delay = Math.random() * -20; // seconds (negative so they start at different points)
      const duration = 8 + Math.random() * 18; // seconds
      const sway = 2 + Math.random() * 6; // px for horizontal sway
      arr.push({ id: i, left, size, opacity, delay, duration, sway });
    }
    return arr;
  }, [count]);

  return (
    <div className="snowfall" aria-hidden="true">
      {flakes.map((f) => (
        <span
          key={f.id}
          className="snowflake"
          style={{
            left: `${f.left}vw`,
            fontSize: `${f.size}px`,
            opacity: f.opacity,
            animationDelay: `${f.delay}s, ${f.delay}s`,
            animationDuration: `${f.duration}s, ${4 + f.duration / 4}s`,
            transform: `translate3d(0,0,0)`,
            // CSS variable for sway used in keyframes
            ['--sway']: `${f.sway}px`,
          }}
        >
          ❄
        </span>
      ))}
    </div>
  );
}
