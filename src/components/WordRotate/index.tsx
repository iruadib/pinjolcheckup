'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion'
import styles from './styles.module.css'

import { cn } from '@/lib/utils'

interface WordRotateProps {
  words: string[]
  duration?: number
  framerProps?: HTMLMotionProps<'h1'>
  className?: string
}

export function WordRotate({
  words,
  duration = 2500,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: 'easeOut' }
  },
  className
}: WordRotateProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    return () => clearInterval(interval)
  }, [words, duration])

  return (
    <div className={styles.wrapper}>
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          className={cn(className, styles.txt)}
          {...framerProps}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  )
}
