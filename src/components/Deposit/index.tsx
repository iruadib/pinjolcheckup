'use client'
import Link from 'next/link'
import { ChangeEvent, FormEvent, useState } from 'react'
import Input from '../Input'
import styles from './styles.module.css'

export default function Deposit() {
  const [target, setTarget] = useState(0)
  const [bunga, setBunga] = useState(2.5)
  const [periode, setPeriode] = useState(1)
  const [hasil, setHasil] = useState<null | number>(null)

  const formatWithComma = (num: string): string => {
    num = num.replace(/[^0-9.,]/g, '')
    let [integer, decimal] = num.split(',')
    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    decimal = decimal
    return decimal ? `${integer},${decimal}` : integer
  }

  const handleTargetChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputTarget = e.target.value
    const target = inputTarget
      .replace(/[^0-9,]/g, '')
      .replace(/\./g, '')
      .replace(/,/g, '.')
    setTarget(parseFloat(target || '0'))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const bulan = periode * 12,
      bungaBulanan = bunga / 12 / 100,
      faktor = Math.pow(1 + bungaBulanan, bulan) - 1
    setHasil((target * bungaBulanan) / faktor)
  }
  return (
    <>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <div className={styles.cont}>
          <Input
            label="Target (IDR)"
            value={formatWithComma(target.toString())}
            onChange={handleTargetChange}
            type="text"
            required
          />
        </div>
        <div className={styles.cont}>
          <Input
            className={styles.half}
            label="Bunga Tahunan"
            value={bunga.toString()}
            onChange={(e) => setBunga(parseFloat(e.currentTarget.value || '0'))}
            type="number"
            helperText="dalam %, misal untuk bunga 2,5% tulis 2,5"
            required
          />
          <Input
            className={styles.half}
            label="Periode (Tahun)"
            value={periode.toString()}
            onChange={(e) =>
              setPeriode(parseFloat(e.currentTarget.value || '0'))
            }
            type="number"
            required
          />
        </div>
        {hasil && (
          <>
            <p className={styles.res}>
              Jumlah uang yang harus ditabung setiap bulannya sebesar Rp
              {formatWithComma(Math.round(hasil).toString())}
            </p>
          </>
        )}
        <div className={styles.btn_group}>
          <Link href="/" className={styles.btn_outlined}>
            Kembali
          </Link>
          <button type="submit" className={styles.btn_filled}>
            Kalkulasi
          </button>
        </div>
      </form>
    </>
  )
}
