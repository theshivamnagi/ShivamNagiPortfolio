import { motion } from 'framer-motion'

const WHATSAPP_ICON = `${import.meta.env.BASE_URL}whatsapp-svgrepo-com.svg`

export default function ContactCTA() {
  return (
    <motion.a
      href="https://wa.me/917814619411"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open WhatsApp chat in a new tab"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-border bg-bg shadow-[3px_3px_0_0_var(--color-border)] transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-accent overflow-hidden"
      whileHover={{ scale: 1.1, rotate: -4, y: -1 }}
      whileTap={{ scale: 0.96, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 420, damping: 22 }}
    >
      <motion.img 
        src={WHATSAPP_ICON} 
        alt="WhatsApp" 
        className="h-full w-full object-cover" 
        whileHover={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 500, damping: 24 }}
      />
    </motion.a>
  )
}
