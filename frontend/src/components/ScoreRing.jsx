export default function ScoreRing({ score, color }) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" style={{ flexShrink: 0 }}>
      <circle cx="36" cy="36" r={r} fill="none" stroke="#1a1a2e" strokeWidth="6" />
      <circle cx="36" cy="36" r={r} fill="none" stroke={color} strokeWidth="6"
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        transform="rotate(-90 36 36)" style={{ transition: "stroke-dashoffset 1s ease" }} />
      <text x="36" y="41" textAnchor="middle" fill={color} fontSize="14" fontWeight="700"
        fontFamily="'DM Mono', monospace">{score}</text>
    </svg>
  );
}
