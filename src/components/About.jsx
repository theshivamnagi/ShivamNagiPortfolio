import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { METRICS } from '../data/content'
import { useCountUp } from '../hooks/useCountUp'

function Metric({ label, value, suffix, isActive, index }) {
  const count = useCountUp(value, isActive)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border-t border-border pt-3"
    >
      <p className="font-display text-3xl font-semibold text-text-primary sm:text-4xl">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-1 font-mono text-xs uppercase tracking-wide text-text-muted">
        {label}
      </p>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-8"
    >
      <p className="mb-6 font-mono text-xs uppercase tracking-widest text-text-muted">
        [ 01 / About ]
      </p>

      <p className="max-w-2xl text-lg leading-relaxed text-text-primary">
        I'm a Product Manager and UX Designer at{' '}
        <span className="font-medium">Katha Ads</span>, an influencer
        marketing platform connecting 16,000+ creators with brands. I work
        across research, product strategy, and interaction design to ship
        features that move real business metrics.
      </p>

      <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
        {METRICS.map((metric, index) => (
          <Metric key={metric.label} {...metric} isActive={isInView} index={index} />
        ))}
      </div>
    </section>
  )
}
