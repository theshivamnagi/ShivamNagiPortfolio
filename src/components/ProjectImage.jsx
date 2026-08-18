import { motion } from 'framer-motion'

const THUMBNAIL_TRANSITION = {
  type: 'spring',
  stiffness: 260,
  damping: 24,
}

export default function ProjectImage({ src, label, kind, className = '' }) {
  if (src) {
    return (
      <motion.img
        src={src}
        alt={label}
        loading="lazy"
        initial={{ scale: 1, filter: 'brightness(0.86)' }}
        whileHover={{ scale: 1.06, filter: 'brightness(1)' }}
        transition={THUMBNAIL_TRANSITION}
        style={{ willChange: 'transform, filter' }}
        className={`h-full w-full object-contain ${className}`}
      />
    )
  }

  return (
    <motion.div
      initial={{ scale: 1, filter: 'brightness(0.9)' }}
      whileHover={{ scale: 1.03, filter: 'brightness(1)' }}
      transition={THUMBNAIL_TRANSITION}
      style={{ willChange: 'transform, filter' }}
      className={`flex h-full w-full flex-col items-center justify-center bg-surface p-4 ${className}`}
      aria-label={`${label} - screenshot placeholder`}
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
    </motion.div>
  )
}
