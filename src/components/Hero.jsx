import { motion, useMotionValue, useTransform } from 'framer-motion'
import { PHOTO_URL, RESUME_URL } from '../data/content'
import { ArrowDownIcon } from './icons'
import ProfileImage from './ProfileImage'

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
  'Product Strategy',
  'Agile Methodology',
  'Data-Driven Decisions',
  'User Research',
  'Cross-functional Leadership',
  'Go-to-Market Strategy',
]

export default function Hero() {
  const handleViewWorkClick = (event) => {
    event.preventDefault()

    if (typeof window.__portfolioScrollToTarget === 'function') {
      window.__portfolioScrollToTarget('#work', 80)
    }
  }

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-150, 150], [10, -10])
  const rotateY = useTransform(mouseX, [-150, 150], [-10, 10])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-col justify-center"
    >
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-28 sm:px-8 md:grid-cols-2">
        {/* Left Column */}
        <motion.div variants={container} initial="hidden" animate="visible" className="order-2 flex flex-col items-start text-left md:order-1">
          <motion.div variants={item} className="mb-6 flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-muted">Available for 2026</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-none tracking-tight text-text-primary sm:text-6xl md:text-6xl lg:text-7xl"
          >
            Hi, I'm <br />
            <span className="text-accent">Shivam Nagi</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted"
          >
            Bridging product strategy, project execution, and operations to turn
            ideas into meaningful outcomes.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-4"
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

        {/* Right Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative order-1 flex justify-center md:order-2 md:justify-end"
          style={{ perspective: 1000 }}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 z-0 m-auto h-[75%] w-[75%] rounded-full bg-accent opacity-20 blur-[80px]" />
          
          <motion.div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY }}
            className="relative z-10 h-64 w-64 overflow-hidden rounded-full border-8 border-bg bg-surface shadow-2xl sm:h-80 sm:w-80 md:h-[26rem] md:w-[26rem]"
          >
            <ProfileImage src={PHOTO_URL} alt="Shivam Nagi" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling Marquee Strip */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden border-t border-border bg-surface/80 py-3 backdrop-blur">
        <div className="animate-marquee whitespace-nowrap font-mono text-xs font-bold uppercase tracking-widest text-text-muted">
          {[...TITLES, ...TITLES].map((title, index) => (
            <div key={index} className="flex items-center gap-8 px-4">
              <span>{title}</span>
              <span className="text-accent">✳</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
