import { CONTACT, RESUME_URL } from '../data/content'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="mx-auto w-full max-w-5xl border-t border-border px-6 py-12 pb-24 sm:px-8 sm:pb-28"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Shivam Nagi
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-text-muted">
          <a
            href={`mailto:${CONTACT.email}`}
            className="transition-colors hover:text-accent"
          >
            {CONTACT.email}
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            {CONTACT.linkedinLabel}
          </a>
          <a
            href={RESUME_URL}
            download
            className="transition-colors hover:text-accent"
          >
            Resume (PDF)
          </a>
        </div>
      </div>
    </footer>
  )
}
