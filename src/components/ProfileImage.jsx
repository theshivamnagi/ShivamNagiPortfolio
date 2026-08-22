import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProfileImage({ src, alt = 'Profile Photo', className = '' }) {
  const [imageReady, setImageReady] = useState(false)
  const [timeReady, setTimeReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeReady(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const isLoaded = imageReady && timeReady
  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-0 flex items-center justify-center rounded-full bg-surface"
          >
            <motion.div
              className="h-[40%] w-[40%] rounded-full bg-accent/40"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setImageReady(true)}
        className="relative z-10 h-full w-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </div>
  )
}
