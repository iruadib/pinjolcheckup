import Deposit from '@/components/Deposit'
import styles from './styles.module.css'

export default function DepositPage() {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Cek <span className={styles.highlighted}>Deposit</span>
        </h1>
        <Deposit />
      </div>
    </>
  )
}
