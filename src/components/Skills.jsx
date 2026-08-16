import { motion } from 'framer-motion'
import { SKILLS } from '../data/content'

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

function SkillColumn({ title, items }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
        {title}
      </p>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={listVariants}
        className="mt-6 space-y-3"
      >
        {items.map((item) => (
          <motion.li
            key={item}
            variants={itemVariants}
            transition={{ duration: 0.35 }}
            className="border-b border-border pb-3 text-sm text-text-primary"
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-8">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-text-muted">
        [ 05 ] Skills
      </p>
      <h2 className="mb-14 font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
        What I work with
      </h2>

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
        <SkillColumn title="Product" items={SKILLS.product} />
        <SkillColumn title="Design" items={SKILLS.design} />
      </div>
    </section>
  )
}
