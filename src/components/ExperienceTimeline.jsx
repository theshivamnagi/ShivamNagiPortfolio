import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { EXPERIENCE } from '../data/content'

function StatusTag({ status }) {
  const isCurrent = status === 'CURRENT'
  return (
    <span
      className={`inline-block rounded-sm border px-2 py-0.5 font-mono text-[11px] tracking-wide ${
        isCurrent
          ? 'border-text-primary font-semibold text-text-primary'
          : 'border-border text-text-muted'
      }`}
    >
      [{status}]
    </span>
  )
}

function Row({ entry, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      className="relative grid grid-cols-[2rem_1fr] gap-x-4 pb-12 last:pb-0 sm:grid-cols-[3rem_1fr]"
    >
      <div className="relative flex justify-center">
        <span className="relative z-10 mt-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg" />
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-wide text-text-muted">
          {entry.range}
        </p>
        <h3 className="mt-1.5 font-display text-xl font-medium text-text-primary">
          {entry.role}
        </h3>
        <p className="mt-0.5 text-sm text-text-muted">{entry.org}</p>
        <div className="mt-2">
          <StatusTag status={entry.status} />
        </div>
      </div>
    </motion.div>
  )
}

export default function ExperienceTimeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.6'],
  })

  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-8"
    >
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-text-muted">
        Experience
      </p>
      <h2 className="mb-14 font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
        Where I've worked
      </h2>

      <div ref={containerRef} className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-border sm:left-6" />
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-4 top-2 bottom-2 w-px origin-top bg-accent sm:left-6"
        />

        {EXPERIENCE.map((entry, index) => (
          <Row key={entry.role + entry.org} entry={entry} index={index} />
        ))}
      </div>
    </section>
  )
}
