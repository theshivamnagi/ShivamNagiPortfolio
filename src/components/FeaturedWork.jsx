import { useState } from 'react'
import { motion } from 'framer-motion'
import { CASE_STUDIES } from '../data/content'

function CaseStudyCard({ study, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group rounded-md border border-border bg-surface p-6 transition-colors hover:border-accent"
      style={{ boxShadow: expanded ? '6px 6px 0 0 var(--color-border)' : 'none' }}
    >
      <span className="inline-block rounded-sm border border-border px-2 py-0.5 font-mono text-[11px] tracking-wide text-text-muted">
        [{study.tag}]
      </span>

      <h3 className="mt-4 font-display text-xl font-medium text-text-primary">
        {study.title}
      </h3>

      <p className="mt-2 text-sm text-text-muted">{study.problem}</p>

      <p className="mt-4 text-sm text-text-primary">
        <span className="font-semibold">{study.outcome}</span>
      </p>

      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
        className="mt-5 font-mono text-xs uppercase tracking-wide text-text-muted underline decoration-dotted underline-offset-4 transition-colors hover:text-accent"
      >
        {expanded ? '[ Collapse ]' : '[ Expand ]'}
      </button>

      <motion.div
        initial={false}
        animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="mt-6 space-y-4 border-t border-border pt-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-text-muted">
              Problem
            </p>
            <p className="mt-1 text-sm text-text-primary">{study.problemDetail}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-text-muted">
              Role
            </p>
            <p className="mt-1 text-sm text-text-primary">{study.role}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-text-muted">
              Process
            </p>
            <p className="mt-1 text-sm text-text-primary">{study.process}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-text-muted">
              Outcome
            </p>
            <p className="mt-1 text-sm text-text-primary">{study.outcomeDetail}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function FeaturedWork() {
  return (
    <section id="work" className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-8">
      <p className="mb-14 font-mono text-xs uppercase tracking-widest text-text-muted">
        [ 03 / Featured Work ]
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {CASE_STUDIES.map((study, index) => (
          <CaseStudyCard key={study.title} study={study} index={index} />
        ))}
      </div>
    </section>
  )
}
