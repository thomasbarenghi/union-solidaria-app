'use client'
import { motion } from 'framer-motion'
import Backdrop from './Backdrop'

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: '100vh',
    opacity: 0
  }
}

interface Props {
  className: string
  handleClose: () => void
  children: React.ReactNode
}

function Modal({ className, handleClose, children }: Props) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={className}
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        {children}
      </motion.div>
    </Backdrop>
  )
}

export default Modal
