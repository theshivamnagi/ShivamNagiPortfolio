export default function ProjectImage({ src, label, kind, className = '' }) {
  if (src) {
    return (
      <img
        src={src}
        alt={label}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center bg-surface ${className}`}
      aria-label={`${label} — screenshot placeholder`}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-text-muted"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.5-3.5a2 2 0 0 0-3 0L3 21" />
      </svg>
      <span className="mt-3 font-mono text-[10px] uppercase tracking-widest text-text-muted">
        {kind || 'Screenshot'}
      </span>
    </div>
  )
}
