import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CASE_STUDIES } from '../data/content'
import ProjectImage from './ProjectImage'
import { ArrowUpRightIcon } from './icons'

function ScrollButton({ dir, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === 'left' ? 'Scroll left' : 'Scroll right'}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-primary transition-colors hover:border-accent hover:text-accent"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ transform: dir === 'left' ? 'rotate(180deg)' : 'none' }}
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </button>
  )
}

function DetailRow({ label, text }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-widest text-text-muted">
        {label}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-text-primary">{text}</p>
    </div>
  )
}

export default function FeaturedWork() {
  const trackRef = useRef(null)
  const [selected, setSelected] = useState(null)

  const scrollBy = (amount) => {
    trackRef.current?.scrollBy({ left: amount, behavior: 'smooth' })
  }

  const active = selected === null ? null : CASE_STUDIES[selected]

  return (
    <section id="work" className="w-full py-24">
      <div className="mx-auto mb-10 flex w-full max-w-6xl items-end justify-between px-6 sm:px-8">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-text-muted">
            [ 01 ] Featured Work
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Selected projects
          </h2>
        </div>
        <div className="hidden gap-3 sm:flex">
          <ScrollButton dir="left" onClick={() => scrollBy(-420)} />
          <ScrollButton dir="right" onClick={() => scrollBy(420)} />
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-pl-6 px-6 pb-4 sm:scroll-pl-8 sm:px-8"
      >
        {CASE_STUDIES.map((study, index) => (
          <motion.button
            key={study.title}
            type="button"
            onClick={() => setSelected(selected === index ? null : index)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="group w-[85vw] shrink-0 snap-start text-left sm:w-[440px]"
            aria-expanded={selected === index}
          >
            <div className="aspect-[16/9] overflow-hidden rounded-xl border border-border transition-colors group-hover:border-accent">
              <ProjectImage
                src={study.image}
                label={study.title}
                kind={study.kind}
              />
            </div>

            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-text-muted">
                  {study.kind} · [{study.tag}]
                </p>
                <h3 className="mt-1.5 font-display text-2xl font-semibold text-text-primary">
                  {study.title}
                </h3>
                <p className="mt-1 text-sm text-text-muted">{study.problem}</p>
                <p className="mt-3 text-sm font-semibold text-text-primary">
                  {study.outcome}
                </p>
              </div>
              <span className="mt-1 shrink-0 text-text-muted transition-colors group-hover:text-accent">
                <ArrowUpRightIcon />
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mx-auto mt-6 w-full max-w-6xl px-6 sm:px-8">
              <div className="grid grid-cols-1 gap-6 rounded-xl border border-border bg-surface p-6 sm:grid-cols-2 sm:p-8">
                <DetailRow label="Problem" text={active.problemDetail} />
                <DetailRow label="Role" text={active.role} />
                <DetailRow label="Process" text={active.process} />
                <DetailRow label="Outcome" text={active.outcomeDetail} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
