'use client'
import { useId } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import styles from './styles.module.css'

interface AnimatedGridPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  strokeDasharray?: number
  numSquares?: number
  className?: string
  maxOpacity?: number
  duration?: number
  repeatDelay?: number
}

export function AnimatedGridPattern({
  width = 75,
  height = 75,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  className,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId()
  const secId = useId()

  const x1Animation = {
    initial: { opacity: 0.3, x: '100%' },
    animate: { opacity: 1, x: '-25%' },
    transition: { duration: 5, repeat: Infinity, ease: 'linear' }
  }

  const x2Animation = {
    initial: { opacity: 0.3, x: '100%' },
    animate: { opacity: 1, x: '-25%' },
    transition: { duration: 5, delay: 3, repeat: Infinity, ease: 'linear' }
  }

  const y1Animation = {
    initial: { opacity: 0.3, y: '0%' },
    animate: { opacity: 1, y: '-100%' },
    transition: { duration: 5, delay: 6, repeat: Infinity, ease: 'linear' }
  }

  const y2Animation = {
    initial: { opacity: 0.3, y: '0%' },
    animate: { opacity: 1, y: '-150%' },
    transition: { duration: 8, repeat: Infinity, ease: 'linear' }
  }
  return (
    <svg
      aria-hidden="true"
      className={cn(styles.wrapper, className)}
      {...props}
    >
      <motion.g
        opacity="1"
        className={styles.line}
        initial={x1Animation.initial}
        animate={x1Animation.animate}
        transition={x1Animation.transition}
      >
        <line
          y1="-0.5"
          x2="70"
          y2="-0.5"
          transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 222 375)"
          stroke={`url(#${secId})`}
        />
      </motion.g>
      <motion.g
        opacity="1"
        className={styles.line}
        initial={x2Animation.initial}
        animate={x2Animation.animate}
        transition={x2Animation.transition}
      >
        <line
          y1="-0.5"
          x2="70"
          y2="-0.5"
          transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 400 150)"
          stroke={`url(#${secId})`}
        />
      </motion.g>
      <motion.g
        opacity="1"
        className={styles.line}
        initial={y1Animation.initial}
        animate={y1Animation.animate}
        transition={y1Animation.transition}
      >
        <line
          y1="-0.5"
          x2="70"
          y2="-0.5"
          transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 1200 323)"
          stroke={`url(#${secId})`}
        />
      </motion.g>
      <motion.g
        opacity="1"
        className={styles.line}
        initial={y2Animation.initial}
        animate={y2Animation.animate}
        transition={y2Animation.transition}
      >
        <line
          y1="-0.5"
          x2="70"
          y2="-0.5"
          transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 225 323)"
          stroke={`url(#${secId})`}
        />
      </motion.g>
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
        <linearGradient
          id={secId}
          x1="8.18126e-07"
          y1="0.174171"
          x2="59.6719"
          y2="-0.0586709"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.416667"
            stopColor="rgb(99 102 241)"
            stopOpacity="0.2"
          ></stop>
          <stop offset="0.786458" stopColor="rgb(99 102 241)"></stop>
          <stop offset="1" stopColor="rgb(79 70 229)"></stop>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
