import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CASE_STUDIES } from '../data/content'
import ProjectImage from './ProjectImage'
import { ArrowUpRightIcon } from './icons'

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
  const [selected, setSelected] = useState(null)

  return (
    <section id="work" className="relative w-full py-24 sm:py-32">
      <div className="mx-auto mb-16 flex w-full max-w-4xl flex-col items-center justify-center px-6 text-center sm:px-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-text-muted">
          Featured Work
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
          Selected projects
        </h2>
      </div>

      <div className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 pb-24 sm:gap-20 sm:px-8">
        {CASE_STUDIES.map((study, index) => {
          const isSelected = selected === index
          return (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5 }}
              className="sticky flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-black/5"
              style={{
                top: `calc(4rem + ${index * 1.5}rem)`,
              }}
            >
              <button
                type="button"
                onClick={() => setSelected(isSelected ? null : index)}
                className="group flex flex-col text-left focus:outline-none"
                aria-expanded={isSelected}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]">
                  <ProjectImage
                    src={study.image}
                    label={study.title}
                    kind={study.kind}
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                <div className="flex w-full flex-col justify-between gap-4 p-6 sm:flex-row sm:items-start sm:p-8">
                  <div className="flex-1">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-text-muted">
                      {study.kind} · [{study.tag}]
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-text-primary sm:text-3xl">
                      {study.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
                      {study.problem}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center justify-between sm:flex-col sm:items-end sm:gap-6">
                    <p className="text-sm font-semibold text-text-primary sm:text-right">
                      {study.outcome}
                    </p>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-primary transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                      <ArrowUpRightIcon />
                    </span>
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                  >
                    <div className="grid grid-cols-1 gap-6 border-t border-border bg-bg p-6 sm:grid-cols-2 sm:p-8">
                      <DetailRow label="Problem" text={study.problemDetail} />
                      <DetailRow label="Role" text={study.role} />
                      <DetailRow label="Process" text={study.process} />
                      <DetailRow label="Outcome" text={study.outcomeDetail} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
