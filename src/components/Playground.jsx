import { motion } from 'framer-motion'
import { PLAYGROUND } from '../data/content'
import ProjectImage from './ProjectImage'

export default function Playground() {
  return (
    <section id="playground" className="w-full py-24">
      <div className="mx-auto mb-10 w-full max-w-6xl px-6 sm:px-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-text-muted">
          [ 02 ] Playground
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
          Experiments & side projects
        </h2>
      </div>

      <div className="no-scrollbar flex gap-5 overflow-x-auto px-6 pb-4 sm:px-8">
        {PLAYGROUND.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="group w-64 shrink-0"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border transition-colors group-hover:border-accent">
              <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]">
                <ProjectImage src={item.image} label={item.title} kind={item.tag} />
              </div>
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-text-muted">
              {item.tag}
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold text-text-primary">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
