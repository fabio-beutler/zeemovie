import { styled } from '@/styles/stitches.config'
import { motion } from 'framer-motion'

export const Button = styled(motion.button, {
  position: 'fixed',
  right: '1rem',
  bottom: '1rem',
  zIndex: '10',
  backgroundColor: '#cccccc',
  borderRadius: '50%',
  padding: '.5rem',
  transition: 'all .2s ease-in-out',

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})
