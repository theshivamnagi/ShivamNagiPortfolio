import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CONTACT, RESUME_URL } from '../data/content'
import { MailIcon, ArrowUpRightIcon, LinkedInIcon, PhoneIcon } from './icons'

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const [isLaunchingPhone, setIsLaunchingPhone] = useState(false)

  useEffect(() => {
    if (!copied) return undefined

    const timeoutId = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(timeoutId)
  }, [copied])

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email)
      setCopied(true)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = CONTACT.email
      textarea.setAttribute('readonly', 'true')
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
    }
  }

  const handleCopyPhone = async (event, href) => {
    event.preventDefault()
    
    try {
      await navigator.clipboard.writeText('+917814619411')
      setCopied(true)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = '+917814619411'
      textarea.setAttribute('readonly', 'true')
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
    }

    setIsLaunchingPhone(true)
    setTimeout(() => {
      setIsLaunchingPhone(false)
      window.location.href = href
    }, 1000)
  }


  const handleBackToTop = () => {
    if (typeof window.__portfolioScrollToTop === 'function') {
      window.__portfolioScrollToTop()
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSectionClick = (event, href) => {
    event.preventDefault()

    if (typeof window.__portfolioScrollToTarget === 'function') {
      window.__portfolioScrollToTarget(href, 80)
    }
  }

  return (
    <footer id="contact" className="w-full bg-neutral-950 text-neutral-100">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 sm:py-14 lg:px-10">
        <div className="mb-12 border-b border-white/10 pb-8 text-center sm:mb-14 sm:pb-10">
          <p className="mx-auto max-w-4xl font-display text-6xl font-bold leading-none tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-9xl">
            Let&apos;s
            <br />
            Collaborate
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[2fr_1.3fr]">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
                Menu
              </p>
              <nav className="mt-5 flex flex-col gap-3 text-base text-neutral-200">
                <a href="#hero" onClick={(event) => handleSectionClick(event, '#hero')} className="transition-colors hover:text-white">
                  Home
                </a>
                <a href="#work" onClick={(event) => handleSectionClick(event, '#work')} className="transition-colors hover:text-white">
                  Work
                </a>
                <a href="#playground" onClick={(event) => handleSectionClick(event, '#playground')} className="transition-colors hover:text-white">
                  Playground
                </a>
                <a href="#about" onClick={(event) => handleSectionClick(event, '#about')} className="transition-colors hover:text-white">
                  About
                </a>
              </nav>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
                Connect
              </p>
              <div className="mt-5 flex flex-col gap-5 text-base text-neutral-200">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                >
                  Resume <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </a>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 p-2.5 transition-colors hover:border-white hover:bg-white hover:text-neutral-900"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="inline-flex items-center justify-center rounded-full border border-white/10 p-2.5 transition-colors hover:border-white hover:bg-white hover:text-neutral-900"
                    aria-label="Email"
                  >
                    <MailIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="tel:+917814619411"
                    onClick={(event) => handleCopyPhone(event, "tel:+917814619411")}
                    className="inline-flex items-center justify-center rounded-full border border-white/10 p-2.5 transition-colors hover:border-white hover:bg-white hover:text-neutral-900"
                    aria-label="Call"
                  >
                    {isLaunchingPhone ? (
                      <motion.svg 
                        className="h-4 w-4" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </motion.svg>
                    ) : (
                      <PhoneIcon className="h-4 w-4" />
                    )}
                  </a>

                </div>
              </div>
            </div>
          </div>

          <div className="md:pl-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
              Say hello
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-2xl font-semibold tracking-tight text-white transition-colors hover:text-neutral-200 sm:text-3xl lg:text-4xl"
              >
                {CONTACT.email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-neutral-300 transition-all duration-300 hover:border-white/35 hover:bg-white/5 hover:text-white"
                aria-label="Copy email address"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[-8deg]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="8" y="8" width="10" height="10" rx="2" />
                  <path d="M6 16H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
                </svg>
              </button>
            </div>
            <p className="mt-4 flex max-w-md items-start gap-2 text-sm leading-6 text-neutral-400 sm:text-base">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(34,197,94,0.55)]" />
              <span>Available for work &mdash; India and globally</span>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
            &copy;2026 Shivam Nagi &mdash; All rights reserved
          </p>

          <button
            type="button"
            onClick={handleBackToTop}
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-200 transition-colors hover:border-white/30 hover:text-white"
          >
            Back to top
            <ArrowUpRightIcon className="h-3.5 w-3.5 rotate-[-45deg]" />
          </button>
        </div>
      </div>

      <div
        aria-live="polite"
        className={`pointer-events-none fixed bottom-6 left-1/2 z-[120] -translate-x-1/2 rounded-full border border-white/10 bg-neutral-900 px-4 py-2 text-sm text-white shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-300 ${
          copied ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        Copied to clipboard
      </div>
    </footer>
  )
}
