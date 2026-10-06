/*
 * Deterministic abstract artwork generated from a seed string.
 * Replaces photography so the site ships without third-party images;
 * swap for real imagery by passing your own <img> where needed.
 */

interface ArtProps {
  seed: string;
  className?: string;
  variant?: "hero" | "panel" | "card";
}

function hash(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function random(seed: number) {
  let state = seed || 1;
  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

const palettes = [
  ["#08193d", "#13bbb5", "#684286"],
  ["#0b1f4a", "#3aa6ff", "#13bbb5"],
  ["#120f35", "#8a5cf6", "#13bbb5"],
  ["#071a33", "#13bbb5", "#f2b84b"],
  ["#1a1240", "#e2557a", "#5b7cfa"],
];

export default function Art({ seed, className, variant = "panel" }: ArtProps) {
  const rand = random(hash(seed));
  const [base, accent, glow] = palettes[hash(seed) % palettes.length];
  const id = `art-${hash(seed).toString(36)}-${variant}`;

  const orbs = Array.from({ length: variant === "card" ? 3 : 5 }, () => ({
    cx: 10 + rand() * 80,
    cy: 10 + rand() * 80,
    r: 14 + rand() * 30,
    color: rand() > 0.5 ? accent : glow,
    opacity: 0.35 + rand() * 0.35,
  }));

  const rings = Array.from({ length: 4 }, (_, index) => ({
    r: 12 + index * 11 + rand() * 4,
    dash: 2 + rand() * 6,
  }));

  const ringX = 55 + rand() * 30;
  const ringY = 30 + rand() * 40;

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={base} />
          <stop offset="100%" stopColor="#040b23" />
        </linearGradient>
        <filter id={`${id}-blur`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
        <pattern id={`${id}-grid`} width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M6 0H0V6" fill="none" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="0.2" />
        </pattern>
      </defs>

      <rect width="100" height="100" fill={`url(#${id}-bg)`} />

      <g filter={`url(#${id}-blur)`}>
        {orbs.map((orb, index) => (
          <circle
            key={index}
            cx={orb.cx}
            cy={orb.cy}
            r={orb.r}
            fill={orb.color}
            opacity={orb.opacity}
          />
        ))}
      </g>

      <rect width="100" height="100" fill={`url(#${id}-grid)`} />

      <g fill="none" stroke="#ffffff" strokeWidth="0.25">
        {rings.map((ring, index) => (
          <circle
            key={index}
            cx={ringX}
            cy={ringY}
            r={ring.r}
            strokeOpacity={0.22 - index * 0.04}
            strokeDasharray={`${ring.dash} ${ring.dash * 1.6}`}
          />
        ))}
      </g>
    </svg>
  );
}
