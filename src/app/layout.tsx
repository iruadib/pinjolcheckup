import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import styles from './layout.module.css'
import './globals.css'
import LayoutTransition from '@/components/LayoutTransition'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const FontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'PinjolCheckUp: Kalkulator Finansial',
  description: 'PinjolCheckUp: Kalkulator Finansial'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${FontPoppins.className} ${styles.body}`}>
        <Navbar />
        <LayoutTransition
          initial={{ opacity: 0.1, scale: 0.975 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.1, scale: 0.975 }}
          transition={{ duration: 0.15 }}
          className={styles.main}
        >
          {children}
        </LayoutTransition>
        <Footer />
      </body>
    </html>
  )
}
