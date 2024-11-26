'use client'
import { AnimatedGridPattern } from '@/components/GridPattern'
import { Safari } from '@/components/Showcase'
import { WordRotate } from '@/components/WordRotate'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import { RefObject } from 'react'

export default function Hero({ ref }: { ref: RefObject<HTMLDivElement> }) {
  const handleScrollToFeature = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <>
      <div className={styles.wrapper}>
        <AnimatedGridPattern className={styles.bg} />
        <div className={styles.main}>
          <motion.div
            className={styles.left}
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <h1 className={styles.heading}>
              Buat Keputusan Keuangan{' '}
              <WordRotate
                words={['Lebih Cerdas', 'Lebih Baik', 'Lebih Bijak']}
              />
            </h1>
            <p className={styles.sub}>
              Kalkulator yang dirancang untuk membantu menghitung pinjaman
              online untuk keputusan finansial yang lebih bijak
            </p>
            <div className={styles.group}>
              <button className={styles.btn} onClick={handleScrollToFeature}>
                Get started
              </button>
            </div>
          </motion.div>
          <motion.div
            className={styles.right}
            initial={{ x: 20 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <Safari
              url="https://pinjolcheckup.vercel.app/"
              className={styles.showcase}
              src="/img/showcase.png"
            />
          </motion.div>
        </div>
      </div>
    </>
  )
}
