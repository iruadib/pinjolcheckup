'use client'
// import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { HiBars3BottomRight } from 'react-icons/hi2'

const navigation = [
  { name: 'Cek Tagihan', href: '/tagihan' },
  { name: 'Cek Cicilan', href: '/cicilan' },
  { name: 'Cek Deposit', href: '/deposit' }
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const navbarRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        setIsScrolled(window.scrollY > navbarRef.current.offsetHeight)
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <header
        className={`${styles.wrapper} ${isScrolled ? styles.scrolled : ''}`}
        ref={navbarRef}
      >
        <nav className={styles.main}>
          <Link href="/" className={styles.left}>
            <span className={styles.sr}>Pinjol Check Up</span>
            {/* <Image
              alt=""
              src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
              width={32}
              height={32}
            /> */}
            <span className={styles.logo_txt}>
              Pinjol
              <span className={styles.logo_highlighted}>Check</span>
              Up
            </span>
          </Link>
          <div className={styles.sm_right}>
            <Menu>
              <MenuButton className={styles.link}>
                <HiBars3BottomRight className={styles.icon} />
              </MenuButton>
              <MenuItems
                transition
                anchor="bottom end"
                className={styles.items}
              >
                {navigation.map((item) => (
                  <MenuItem key={item.name}>
                    <Link href={item.href} className={styles.item}>
                      {item.name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>
          <div className={styles.lg_right}>
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className={styles.link}>
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  )
}
