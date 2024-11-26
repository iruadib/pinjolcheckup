import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const Feature = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <>
      <div className={styles.wrapper} ref={ref}>
        <div className={styles.main}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            Fitur-fitur yang{' '}
            <span className={styles.highlighted}>biasa anda butuhkan</span>
          </motion.h2>
          <div className={styles.items}>
            <MotionLink
              href="/deposit"
              className={styles.item_first}
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              <div className={styles.cont}>
                <div className={styles.img_wrapper}>
                  <div className={styles.img_cont_first}>
                    <Image
                      className={styles.img_2}
                      src="/img/deposit.png"
                      alt=""
                      fill
                    />
                  </div>
                </div>
                <div className={styles.item_title_wrapper}>
                  <p className={styles.item_title}>Cek Deposit</p>
                  <p className={styles.description}>
                    Periksa saldo deposit Anda dengan mudah dan cepat. Pastikan
                    Anda selalu tahu jumlah yang tersedia untuk transaksi lebih
                    lanjut
                  </p>
                </div>
              </div>
              <div className={styles.border}></div>
            </MotionLink>
            <MotionLink
              href="/tagihan"
              className={styles.item_second}
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              <div className={styles.cont}>
                <div className={styles.item_title_wrapper}>
                  <p className={styles.item_title}>Cek Tagihan</p>
                  <p className={styles.description}>
                    Cek status tagihan Anda, mulai dari jumlah yang harus
                    dibayar hingga tanggal jatuh tempo
                  </p>
                </div>
                <div className={styles.img_wrapper}>
                  <div className={styles.img_cont_second}>
                    <Image
                      className={styles.img}
                      src="/img/tagihan.png"
                      alt=""
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className={styles.border}></div>
            </MotionLink>
            <MotionLink
              href="/cicilan"
              className={styles.item_third}
              initial={{ x: 20 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              <div className={styles.cont}>
                <div className={styles.item_title_wrapper}>
                  <p className={styles.item_title}>Cek Cicilan</p>
                  <p className={styles.description}>
                    Pantau status cicilan Anda dan ketahui jumlah yang harus
                    dibayar di setiap periode.
                  </p>
                </div>
                <div className={styles.img_wrapper}>
                  <div className={styles.img_cont_third}>
                    <Image
                      className={styles.img}
                      src="/img/cicilan.png"
                      alt=""
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className={styles.border}></div>
            </MotionLink>
          </div>
        </div>
      </div>
    </>
  )
})

Feature.displayName = 'Feature'
export default Feature
