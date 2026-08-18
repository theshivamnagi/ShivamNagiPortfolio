import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PHOTO_URL, RESUME_URL } from '../data/content'
import { ArrowDownIcon } from './icons'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const TITLES = [
  'Product Management',
  'Product Operations',
  'Project Management',
  'UX Design',
]

const TITLE_INTERVAL_MS = 1800

export default function Hero() {
  const [activeTitleIndex, setActiveTitleIndex] = useState(0)

  const handleViewWorkClick = (event) => {
    event.preventDefault()

    if (typeof window.__portfolioScrollToTarget === 'function') {
      window.__portfolioScrollToTarget('#work', 80)
    }
  }

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveTitleIndex((current) => (current + 1) % TITLES.length)
    }, TITLE_INTERVAL_MS)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[100svh] w-full max-w-4xl flex-col items-center justify-center px-6 py-28 text-center sm:px-8"
    >
      <motion.div variants={container} initial="hidden" animate="visible">
        <motion.div variants={item} className="flex justify-center">
          <div className="h-24 w-24 overflow-hidden rounded-full border border-border sm:h-28 sm:w-28">
            <img
              src={PHOTO_URL}
              alt="Shivam Nagi"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 inline-flex flex-wrap items-end justify-center gap-2 font-display text-6xl font-bold leading-[0.95] tracking-tight text-text-primary sm:text-7xl md:text-8xl"
        >
          <span>Shivam Nagi</span>
          <span
            aria-hidden="true"
            className="caret-blink inline-block h-[0.9em] w-[3px] translate-y-[-0.08em] rounded-full bg-current opacity-35"
          />
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-6 flex justify-center px-4"
          aria-live="polite"
        >
          <div className="flex items-center justify-center gap-4 font-mono text-xs uppercase tracking-[0.26em] sm:gap-6 sm:text-sm">
            <span aria-hidden="true" className="shrink-0 text-accent">
              ✳
            </span>

            <div className="relative min-w-[14ch] overflow-hidden text-center text-text-primary">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={TITLES[activeTitleIndex]}
                  initial={{ opacity: 0, y: 14, filter: 'blur(2px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -14, filter: 'blur(2px)' }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="block whitespace-nowrap"
                >
                  {TITLES[activeTitleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <span aria-hidden="true" className="shrink-0 text-accent">
              ✳
            </span>
          </div>
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-text-muted"
        >
          Bridging product strategy, project execution, and operations to turn
          ideas into meaningful outcomes.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#work"
            onClick={handleViewWorkClick}
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            View Work
          </a>
          <a
            href={RESUME_URL}
            download
            className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <ArrowDownIcon /> Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
