import Cicilan from '@/components/Cicilan'
import styles from './styles.module.css'

export default function CicilanPage() {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Cek <span className={styles.highlighted}>Cicilan</span>
        </h1>
        <Cicilan />
      </div>
    </>
  )
}
