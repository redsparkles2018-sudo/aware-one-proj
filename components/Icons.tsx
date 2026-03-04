// Flat, stroke-based icons matching the Aware One design system
// All icons: 24×24 viewBox, fill="none", stroke="currentColor", strokeWidth=1.75, round caps/joins

type IconProps = {
  size?: number;
  style?: React.CSSProperties;
  className?: string;
};

const base = {
  fill: "none" as const,
  stroke: "currentColor" as const,
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// Trust bar icons

export function IconMapPin({ size = 20, style, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} style={style} className={className}>
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function IconGlobe({ size = 20, style, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} style={style} className={className}>
      <circle cx="12" cy="12" r="9" />
      <line x1="3.6" y1="9" x2="20.4" y2="9" />
      <line x1="3.6" y1="15" x2="20.4" y2="15" />
      <path d="M12 3a14 14 0 0 1 3.3 9A14 14 0 0 1 12 21a14 14 0 0 1-3.3-9A14 14 0 0 1 12 3z" />
    </svg>
  );
}

export function IconCpu({ size = 20, style, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} style={style} className={className}>
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="2" x2="9" y2="5" />
      <line x1="15" y1="2" x2="15" y2="5" />
      <line x1="9" y1="19" x2="9" y2="22" />
      <line x1="15" y1="19" x2="15" y2="22" />
      <line x1="2" y1="9" x2="5" y2="9" />
      <line x1="2" y1="15" x2="5" y2="15" />
      <line x1="19" y1="9" x2="22" y2="9" />
      <line x1="19" y1="15" x2="22" y2="15" />
    </svg>
  );
}

export function IconZap({ size = 20, style, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} style={style} className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

// Flow diagram icons

export function IconPackage({ size = 22, style, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} style={style} className={className}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

export function IconSettings({ size = 22, style, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} style={style} className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export function IconCode({ size = 22, style, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} style={style} className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function IconMegaphone({ size = 22, style, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} style={style} className={className}>
      <path d="M11 5L6 9H2v6h4l5 4V5z" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

export function IconTrendingUp({ size = 22, style, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} style={style} className={className}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}
