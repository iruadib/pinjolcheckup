'use client'
import { AnimatedGridPattern } from '@/components/GridPattern'
import { Safari } from '@/components/Showcase'
import { WordRotate } from '@/components/WordRotate'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import Link from 'next/link'

export default function Cek() {
  return (
    <>
      <div className={styles.wrapper}>
        <AnimatedGridPattern className={cn(styles.bg)} />
        <div className="block lg:flex flex-row flex-grow items-center">
          <motion.div
            className={styles.left}
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
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
              <Link href="#" className={styles.btn}>
                Get started
              </Link>
            </div>
          </motion.div>
          <motion.div
            className={styles.right}
            initial={{ x: 20 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <Safari
              url="https://pinjolcheckup.vercel.app/"
              className={styles.showcase}
              // src="https://get.wallhere.com/photo/Oshi-no-Ko-Kurokawa-Akane-Mem-Cho-kana-arima-Aqua-hoshino-ruby-hoshino-Hoshino-Ai-looking-at-viewer-2252324.jpg"
              src="https://canopywp.wpengine.com/wp-content/uploads/2024/02/Frame-1948758242-5.svg"
            />
          </motion.div>
        </div>
      </div>
    </>
  )
}
