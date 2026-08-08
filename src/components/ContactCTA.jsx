import { BOOKING_URL } from '../data/content'

export default function ContactCTA() {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full border border-border bg-bg px-4 py-2.5 font-mono text-xs uppercase tracking-wide text-text-primary shadow-[3px_3px_0_0_var(--color-border)] transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-accent"
    >
      <span
        aria-hidden="true"
        className="h-2 w-2 rounded-full bg-emerald-500 transition-colors group-hover:bg-accent"
      />
      [ Book a Meet ]
    </a>
  )
}
