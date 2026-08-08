import { motion } from 'framer-motion'
import { RESUME_URL } from '../data/content'

const lineVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[90svh] w-full max-w-5xl flex-col justify-center px-6 py-24 sm:px-8"
    >
      <motion.p
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-4 font-mono text-xs uppercase tracking-widest text-text-muted"
      >
        [ Doc type: Product Manager + UX Designer ]
      </motion.p>

      <motion.h1
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        className="font-display text-5xl font-semibold tracking-tight text-text-primary sm:text-6xl md:text-7xl"
      >
        Shivam Nagi
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
        className="mt-6 max-w-xl text-lg text-text-muted"
      >
        I build creator-marketplace products end to end — from research and
        interaction design to shipped, measurable outcomes.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.45 }}
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
          className="rounded-md border border-border px-5 py-2.5 font-mono text-sm text-text-primary transition-colors hover:border-accent hover:text-accent"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="rounded-md bg-accent px-5 py-2.5 font-mono text-sm text-white transition-opacity hover:opacity-90"
        >
          Book a Meet
        </a>
      </motion.div>
    </section>
  )
}
