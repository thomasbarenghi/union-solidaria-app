'use client'
import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  onClick: () => void
}

function Backdrop({ children, onClick }: Props) {
  return (
    <motion.div
      onClick={onClick}
      className='fixed left-0 top-0 z-40 flex h-full w-full items-center justify-center bg-black/50'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop
