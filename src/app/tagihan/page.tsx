import Tagihan from '@/components/Tagihan'
import styles from './styles.module.css'

export default function TagihanPage() {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Cek <span className={styles.highlighted}>Tagihan</span>
        </h1>
        <Tagihan />
      </div>
    </>
  )
}
