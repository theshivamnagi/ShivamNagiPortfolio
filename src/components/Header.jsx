import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { LogoMark } from './icons'
import { CONTACT } from '../data/content'

const LINKEDIN_ICON = `${import.meta.env.BASE_URL}linkedin-svgrepo-com.svg`
const GMAIL_ICON = `${import.meta.env.BASE_URL}gmail-svgrepo-com.svg`
const WHATSAPP_ICON = `${import.meta.env.BASE_URL}whatsapp-svgrepo-com.svg`

const NAV_LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#playground', label: 'Playground' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <header
        className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-border bg-bg/90 px-2 py-2 shadow-[3px_3px_0_0_var(--color-border)] backdrop-blur"
      >
        <a
          href="#hero"
          aria-label="Shivam Nagi — home"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-text-primary transition-colors hover:text-accent"
        >
          <LogoMark />
        </a>

        <nav className="flex shrink-0 items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-text-muted transition-colors hover:bg-surface hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-1 shrink-0 border-l border-border pl-2">
          <ThemeToggle />
        </div>

        <div className="ml-1 flex shrink-0 items-center gap-2 pl-1">
          <motion.a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn in a new tab"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-transparent bg-transparent transition-colors hover:border-border hover:bg-surface"
            whileHover={{ scale: 1.1, rotate: -6, y: -1 }}
            whileTap={{ scale: 0.96, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 420, damping: 22 }}
          >
            <motion.img
              src={LINKEDIN_ICON}
              alt=""
              aria-hidden="true"
              className="h-full w-full p-1"
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 500, damping: 24 }}
            />
          </motion.a>

          <motion.a
            href={`mailto:${CONTACT.email}`}
            aria-label="Send email"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-transparent bg-transparent transition-colors hover:border-border hover:bg-surface"
            whileHover={{ scale: 1.1, rotate: 6, y: -1 }}
            whileTap={{ scale: 0.96, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 420, damping: 22 }}
          >
            <motion.img
              src={GMAIL_ICON}
              alt=""
              aria-hidden="true"
              className="h-full w-full p-1"
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 500, damping: 24 }}
            />
          </motion.a>

          <motion.a
            href="https://wa.me/917814619411"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open WhatsApp chat in a new tab"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-transparent bg-transparent transition-colors hover:border-border hover:bg-surface"
            whileHover={{ scale: 1.1, rotate: -4, y: -1 }}
            whileTap={{ scale: 0.96, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 420, damping: 22 }}
          >
            <motion.img
              src={WHATSAPP_ICON}
              alt=""
              aria-hidden="true"
              className="h-full w-full p-1"
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 500, damping: 24 }}
            />
          </motion.a>
        </div>
      </header>
    </div>
  )
}
