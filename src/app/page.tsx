'use client'
import Feature from '@/components/Features'
import Hero from '@/components/Hero'
import { useRef } from 'react'

export default function HomePage() {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <>
      <Hero ref={ref} />
      <Feature ref={ref} />
    </>
  )
}
