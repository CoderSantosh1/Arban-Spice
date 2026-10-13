/** Thin gold botanical line-art used as faint section decoration. */
export function LeafBranch({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 160 260"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      aria-hidden
      className={`pointer-events-none text-gold-2 ${className}`}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M20 250C40 190 60 130 120 20" />
      {[
        [34, 205, -50],
        [46, 170, -40],
        [60, 135, -30],
        [76, 100, -22],
        [94, 66, -14],
      ].map(([x, y, r], i) => (
        <g key={i}>
          <path d={`M${x} ${y}c-30-6-48-24-54-46 24 0 46 16 54 46Z`} transform={`rotate(${r} ${x} ${y})`} />
          <path d={`M${x} ${y}c30-2 50-18 58-40-24-2-48 12-58 40Z`} transform={`rotate(${r / 2} ${x} ${y})`} />
        </g>
      ))}
    </svg>
  );
}

/** Large handwritten watermark word behind a section heading. */
export function Script({ children, className = "" }: { children: string; className?: string }) {
  return (
    <span aria-hidden className={`pointer-events-none select-none font-script leading-none text-gold-2/25 ${className}`}>
      {children}
    </span>
  );
}

/** Two crossed hairlines that flank page-banner titles. */
export function CrossMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 14" className={className} fill="none" stroke="currentColor" strokeWidth={1.2} aria-hidden>
      <path d="M1 1l28 12M1 13 29 1" />
    </svg>
  );
}
