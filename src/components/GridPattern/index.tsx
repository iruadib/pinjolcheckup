/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useId } from 'react'
import { cn } from '@/lib/utils'

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
  return (
    <svg
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full fill-indigo-400/10 stroke-indigo-400/10',
        className
      )}
      {...props}
    >
      <g
        opacity="1"
        className="z-10"
        style={{
          transformOrigin: '0px 0px',
          animation: 'translateXAnimation 5s infinite linear'
        }}
      >
        <line
          y1="-0.5"
          x2="70"
          y2="-0.5"
          transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 222 375)"
          stroke={`url(#${secId})`}
        />
      </g>
      <g
        opacity="1"
        className="z-10"
        style={{
          transformOrigin: '0px 0px',
          transform: 'translateY(-100%)',
          animation: 'translateYAnimation 5s 6s infinite linear'
        }}
      >
        <line
          y1="-0.5"
          x2="70"
          y2="-0.5"
          transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 1200 323)"
          stroke={`url(#${secId})`}
        />
      </g>
      <g
        opacity="1"
        className="z-10"
        style={{
          transformOrigin: '0px 0px',
          animation: 'translateY2Animation 8s infinite linear'
        }}
      >
        <line
          y1="-0.5"
          x2="70"
          y2="-0.5"
          transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 225 323)"
          stroke={`url(#${secId})`}
        />
      </g>
      <style jsx>{`
        @keyframes translateYAnimation {
          from {
            opacity: 0.3;
            transform: translateY(50%);
          }
          to {
            opacity: 1;
            transform: translateY(-100%);
          }
        }

        @keyframes translateY2Animation {
          from {
            opacity: 0.3 !important;
            transform: translateY(0%);
          }
          to {
            opacity: 1 !important;
            transform: translateY(-150%);
          }
        }

        @keyframes translateXAnimation {
          from {
            opacity: 0.3;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(-12.5%);
          }
        }
      `}</style>
      <defs>
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
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
