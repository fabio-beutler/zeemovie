import React, { useState } from 'react'
import { Button } from './styles'
import { CaretUp } from 'phosphor-react'
import { AnimatePresence, motion } from 'framer-motion'

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    })
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', toggleVisible)
  }

  return (
    <AnimatePresence>
      <Button
        key={`${visible}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ type: 'just' }}
        onClick={scrollToTop}
        type='button'
        aria-label='scroll to top'
        css={{ display: visible ? 'inline' : 'none' }}
      >
        <CaretUp weight='bold' size={28} />
      </Button>
    </AnimatePresence>
  )
}

export default ScrollToTopButton
