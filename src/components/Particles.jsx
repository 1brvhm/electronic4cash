import { useMemo } from 'react';

// Deterministic pseudo-random so values are stable across renders
const rand = (seed) => ((Math.sin(seed * 9301 + 49297) * 233280) % 1 + 1) % 1;

export default function Particles({ count = 28, color = '#a78bfa' }) {
  const dots = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      x:   rand(i * 3 + 1) * 100,
      sz:  rand(i * 3 + 2) * 3 + 1.2,
      del: rand(i * 3 + 3) * 9,
      dur: rand(i * 3 + 4) * 5 + 4.5,
    })),
  [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dots.map((d, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left:       `${d.x}%`,
            bottom:     '-4px',
            width:      d.sz,
            height:     d.sz,
            background: color,
            animation:  `particleRise ${d.dur}s ease-in ${d.del}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
