import React, { useState, useEffect } from 'react';

/**
 * Adapted from 21st.dev "Aurora Section hero" (dhileepkumargm).
 * A perspective grid floor, a central light column (the "gate"), and a stream
 * of rising light beams (incoming notifications). Styling lives in index.css
 * under the `.scene` block, re-themed to the Notifybear palette.
 */
const BEAM_COUNT = 54;

export default function BackgroundScene({ beamCount = BEAM_COUNT }) {
  const [beams, setBeams] = useState([]);

  useEffect(() => {
    // prefers-reduced-motion: render a calm, static scene
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setBeams([]);
      return;
    }
    const generated = Array.from({ length: beamCount }).map((_, i) => {
      const riseDur = Math.random() * 2 + 4; // 4–6s rise
      const fadeDur = riseDur; // sync fade
      const glowDur = Math.random() * 3 + 3; // 3–6s glow
      const cool = Math.random() > 0.62; // ~1/3 cool-blue beams, rest amber
      return {
        id: i,
        cool,
        style: {
          left: `${Math.random() * 100}%`,
          width: `${Math.floor(Math.random() * 2) + 1}px`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${riseDur}s, ${fadeDur}s, ${glowDur}s`,
        },
      };
    });
    setBeams(generated);
  }, [beamCount]);

  return (
    <div className="scene" aria-hidden="true">
      <div className="floor" />
      <div className="main-column" />
      <div className="light-stream-container">
        {beams.map((beam) => (
          <div
            key={beam.id}
            className={`light-beam${beam.cool ? ' light-beam--cool' : ''}`}
            style={beam.style}
          />
        ))}
      </div>
    </div>
  );
}
