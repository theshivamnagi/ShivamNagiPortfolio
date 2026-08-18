import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lenis = reduceMotion
      ? null
      : new Lenis({
          duration: 1.1,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        })

    let rafId
    if (lenis) {
      function raf(time) {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    }

    let scrollRafId = null
    let scrollStartTime = 0
    let scrollStartY = 0

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

    const animateScrollTo = (targetY) => {
      if (scrollRafId !== null) {
        cancelAnimationFrame(scrollRafId)
        scrollRafId = null
      }

      const startY = window.scrollY || window.pageYOffset
      if (Math.abs(startY - targetY) < 1) {
        window.scrollTo(0, Math.max(0, targetY))
        return
      }

      scrollStartY = startY
      scrollStartTime = 0

      if (lenis) {
        lenis.stop()
      }

      const durationMs = 850

      const step = (timestamp) => {
        if (scrollStartTime === 0) {
          scrollStartTime = timestamp
        }

        const elapsed = timestamp - scrollStartTime
        const progress = Math.min(1, elapsed / durationMs)
        const eased = easeOutCubic(progress)
        const nextY = Math.max(
          0,
          Math.round(scrollStartY + (targetY - scrollStartY) * eased),
        )

        window.scrollTo(0, nextY)

        if (progress < 1) {
          scrollRafId = requestAnimationFrame(step)
          return
        }

        scrollRafId = null
        window.scrollTo(0, Math.max(0, targetY))

        if (lenis) {
          lenis.start()
        }
      }

      scrollRafId = requestAnimationFrame(step)
    }

    const scrollToTop = () => {
      animateScrollTo(0)
    }

    const scrollToTarget = (target, offset = 80) => {
      const element = typeof target === 'string' ? document.querySelector(target) : target
      if (!element) return

      const targetY = Math.max(0, element.getBoundingClientRect().top + window.scrollY - offset)
      animateScrollTo(targetY)
    }

    window.__portfolioScrollToTop = scrollToTop
    window.__portfolioScrollToTarget = scrollToTarget

    // Make in-page anchor links use Lenis
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      const id = anchor.getAttribute('href')
      if (!id || id === '#') return
      if (typeof window.__portfolioScrollToTarget !== 'function') return
      e.preventDefault()
      window.__portfolioScrollToTarget(id, 80)
    }
    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      delete window.__portfolioScrollToTop
      delete window.__portfolioScrollToTarget
      if (scrollRafId !== null) {
        cancelAnimationFrame(scrollRafId)
      }
      cancelAnimationFrame(rafId)
      lenis?.destroy()
    }
  }, [])

  return null
}
