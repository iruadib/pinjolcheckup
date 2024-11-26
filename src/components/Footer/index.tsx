import Link from 'next/link'
import styles from './styles.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.wrapper}>
        <div className={styles.main}>
          © {new Date().getFullYear()}{' '}
          <Link href="/" className={styles.txt}>
            PinjolCheckUp™
          </Link>
        </div>
      </footer>
    </>
  )
}
