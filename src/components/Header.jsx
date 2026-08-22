import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { CONTACT, PHOTO_URL } from '../data/content'

const LINKEDIN_ICON = `${import.meta.env.BASE_URL}linkedin-svgrepo-com.svg`
const GMAIL_ICON = `${import.meta.env.BASE_URL}gmail-svgrepo-com.svg`

const NAV_LINKS = [
  { href: '#work', label: 'Work' },
  // { href: '#playground', label: 'Playground' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const SOCIAL_LINKS = [
  {
    href: CONTACT.linkedin,
    label: 'Open LinkedIn in a new tab',
    icon: LINKEDIN_ICON,
  },
  {
    href: `mailto:${CONTACT.email}`,
    label: 'Send email',
    icon: GMAIL_ICON,
  },
]

const DISPLAY_NAME = 'Shivam Nagi'
const MOBILE_ACTION_DELAY_MS = 140

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [copied, setCopied] = useState(false)
  const [isLaunchingMail, setIsLaunchingMail] = useState(false)
  const headerRef = useRef(null)

  const lastScrollYRef = useRef(0)
  const tickingRef = useRef(false)

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


  const scrollToSection = (href) => {
    if (typeof window.__portfolioScrollToTarget === 'function') {
      window.__portfolioScrollToTarget(href, 80)
    }
  }

  const handleNavClick = (event, href) => {
    event.preventDefault()
    setIsMenuOpen(false)
    scrollToSection(href)
  }

  const handleMobileSocialClick = (event, href) => {
    event.preventDefault()

    if (href.startsWith('mailto:')) {
      handleCopyEmail()
      setIsLaunchingMail(true)
      setTimeout(() => {
        setIsLaunchingMail(false)
        setIsMenuOpen(false)
        window.location.href = href
      }, 1000)
      return
    }

    window.setTimeout(() => {
      setIsMenuOpen(false)
      window.open(href, '_blank', 'noopener,noreferrer')
    }, MOBILE_ACTION_DELAY_MS)
  }

  const handleDesktopSocialClick = (event, href) => {
    if (href.startsWith('mailto:')) {
      event.preventDefault()
      handleCopyEmail()
      setIsLaunchingMail(true)
      setTimeout(() => {
        setIsLaunchingMail(false)
        window.location.href = href
      }, 1000)
    }
  }


  useEffect(() => {
    if (!isMenuOpen) return undefined

    const handlePointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return

      tickingRef.current = true
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY
        const previousScrollY = lastScrollYRef.current
        const delta = currentScrollY - previousScrollY
        const isNearTop = currentScrollY <= 12
        const isScrollingDown = delta > 8
        const isScrollingUp = delta < -8

        if (isMenuOpen || isNearTop) {
          setIsVisible(true)
        } else if (isScrollingDown) {
          setIsVisible(false)
        } else if (isScrollingUp) {
          setIsVisible(true)
        }

        lastScrollYRef.current = currentScrollY
        tickingRef.current = false
      })
    }

    lastScrollYRef.current = window.scrollY
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMenuOpen])

  return (
    <MotionConfig transition={{ type: 'spring', stiffness: 230, damping: 26, mass: 0.9 }}>
      <motion.div
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.85,
          filter: isVisible ? "blur(0px)" : "blur(8px)",
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 24,
          mass: 0.8
        }}
        style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
      >
        <header
          ref={headerRef}
          className="w-full max-w-5xl overflow-hidden rounded-[1.5rem] border border-border bg-bg/90 shadow-[3px_3px_0_0_var(--color-border)] backdrop-blur"
        >
          <div className="flex items-center gap-3 px-3 py-2 sm:px-4">
            <a
              href="#hero"
              aria-label={`${DISPLAY_NAME} home`}
              onClick={(event) => handleNavClick(event, '#hero')}
              className="flex min-w-0 flex-1 items-center gap-2"
            >
              <span className="relative flex shrink-0 items-center justify-center overflow-visible pr-1">
                <span className="overflow-hidden rounded-full border border-border bg-surface">
                  <img src={PHOTO_URL} alt={DISPLAY_NAME} className="h-11 w-11 object-cover" />
                </span>
                <span className="absolute bottom-[2px] right-[3px] h-3.5 w-3.5 rounded-full border-2 border-bg bg-emerald-500 shadow-sm" />
              </span>

              <span className="max-w-[9rem] truncate font-display text-base font-bold tracking-tight text-text-primary sm:max-w-none sm:text-lg">
                {DISPLAY_NAME}
              </span>
            </a>

            <div className="ml-auto flex shrink-0 items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setIsMenuOpen((current) => !current)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-text-primary transition-colors hover:bg-surface"
              >
                <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
                <motion.span
                  className="relative block h-4 w-5"
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <span
                    className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
                  />
                  <span
                    className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ease-out ${isMenuOpen ? 'opacity-0' : ''}`}
                  />
                  <span
                    className={`absolute left-0 top-[14px] block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out ${isMenuOpen ? 'translate-y-[-7px] -rotate-45' : ''}`}
                  />
                </motion.span>
              </button>
            </div>

            <nav className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className="whitespace-nowrap rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-text-muted transition-colors hover:bg-surface hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              <div className="border-l border-border pl-2">
                <ThemeToggle />
              </div>

              <div className="flex items-center gap-2 pl-1">
                {SOCIAL_LINKS.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    aria-label={link.label}
                    onClick={(event) => handleDesktopSocialClick(event, link.href)}
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-transparent bg-transparent transition-colors hover:border-border hover:bg-surface"
                    whileHover={{ scale: 1.1, rotate: index === 1 ? 6 : index === 2 ? -4 : -6, y: -1 }}
                    whileTap={{ scale: 0.96, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 420, damping: 22 }}
                  >
                    {isLaunchingMail && link.href.startsWith('mailto:') ? (
                      <motion.svg 
                        className="h-5 w-5 text-text-primary" 
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

                      <motion.img
                        src={link.icon}
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full p-1"
                        whileHover={{ scale: 1.08 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 24 }}
                      />
                    )}
                  </motion.a>

                ))}
              </div>
            </div>
          </div>
          <AnimatePresence>
            {isMenuOpen ? (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -12, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -12, height: 0 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="border-t border-border px-3 pb-3 md:hidden sm:px-4"
              >
                <div className="pt-3">
                  <nav className="grid gap-2">
                    {NAV_LINKS.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(event) => handleNavClick(event, link.href)}
                        className="rounded-2xl border border-border bg-surface px-4 py-3 font-mono text-xs uppercase tracking-wide text-text-muted transition-colors hover:text-accent"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                    {SOCIAL_LINKS.map((link, index) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        aria-label={link.label}
                        onClick={(event) => handleMobileSocialClick(event, link.href)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg transition-colors hover:bg-surface"
                        whileTap={{ scale: 0.92, rotate: index === 1 ? 4 : index === 2 ? -4 : -5 }}
                        transition={{ type: 'spring', stiffness: 520, damping: 24 }}
                        >
                          {isLaunchingMail && link.href.startsWith('mailto:') ? (
                            <motion.svg 
                              className="h-5 w-5 text-text-primary" 
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

                            <img src={link.icon} alt="" aria-hidden="true" className="h-full w-full p-2" />
                          )}
                        </motion.a>

                    ))}
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </header>
      </motion.div>

      <div
        aria-live="polite"
        className={`pointer-events-none fixed bottom-6 left-1/2 z-[120] -translate-x-1/2 rounded-full border border-white/10 bg-neutral-900 px-4 py-2 text-sm text-white shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-300 ${
          copied ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        Copied to clipboard
      </div>
    </MotionConfig>
  )
}
