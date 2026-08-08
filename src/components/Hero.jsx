import { motion } from 'framer-motion'
import { RESUME_URL, PHOTO_URL } from '../data/content'
import { ArrowDownIcon } from './icons'

const lineVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[90svh] w-full max-w-5xl flex-col justify-center gap-12 px-6 py-24 sm:px-8 md:flex-row md:items-center md:gap-16"
    >
      <div className="flex-1">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-display text-5xl font-semibold tracking-tight text-text-primary sm:text-6xl md:text-7xl"
        >
          Shivam Nagi
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          className="mt-6 max-w-xl text-lg text-text-muted"
        >
          I build creator-marketplace products end to end — from research and
          interaction design to shipped, measurable outcomes.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="rounded-md border border-border px-5 py-2.5 font-mono text-sm text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            View Work
          </a>
          <a
            href={RESUME_URL}
            download
            className="flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-sm text-white transition-opacity hover:opacity-90"
          >
            <ArrowDownIcon /> Download Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className="mx-auto w-56 shrink-0 sm:w-64 md:mx-0"
      >
        <div className="aspect-[4/5] overflow-hidden rounded-md border border-border bg-surface">
          <img
            src={PHOTO_URL}
            alt="Shivam Nagi"
            className="h-full w-full object-cover grayscale"
          />
        </div>
      </motion.div>
    </section>
  )
}
