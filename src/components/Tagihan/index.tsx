'use client'

import Link from 'next/link'
import { ChangeEvent, FormEvent, useState } from 'react'
import Input from '../Input'
import styles from './styles.module.css'

export default function Tagihan() {
  const [target, setTarget] = useState(0)
  const [bunga, setBunga] = useState(2.5)
  const [periode, setPeriode] = useState(1)
  const [cicilan, setCicilan] = useState<null | number>(null)
  const [total, setTotal] = useState<null | number>(null)
  const [selisih, setSelisih] = useState<null | number>(null)

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
    const bungaBulanan = (30 * bunga) / 100
    const cicilan =
      (target * bungaBulanan) / (1 - Math.pow(1 + bungaBulanan, -periode))
    setCicilan(cicilan)
    setTotal(cicilan * periode)
    setSelisih(cicilan * periode - target)
  }
  return (
    <>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <div className={styles.cont}>
          <Input
            label="Pokok Hutang (IDR)"
            value={formatWithComma(target.toString())}
            onChange={handleTargetChange}
            type="text"
            required
          />
        </div>
        <div className={styles.cont}>
          <Input
            className={styles.half}
            label="Bunga Harian"
            value={bunga.toString()}
            onChange={(e) => setBunga(parseFloat(e.currentTarget.value || '0'))}
            type="number"
            helperText="dalam %, misal untuk bunga 2,5% tulis 2,5"
            required
          />
          <Input
            className={styles.half}
            label="Periode (Bulan)"
            value={periode.toString()}
            onChange={(e) =>
              setPeriode(parseFloat(e.currentTarget.value || '0'))
            }
            type="number"
            required
          />
        </div>
        {cicilan && total && selisih && (
          <>
            <p className={styles.res}>
              <span>
                Cicilan perbulan sebesar Rp
                {formatWithComma(Math.round(cicilan).toString())}
              </span>
              <span>
                Nilai total pembayaran sebesar Rp
                {formatWithComma(Math.round(total).toString())}
              </span>
              <span>
                Selisih pembayaran (biaya bunga) sebesar Rp
                {formatWithComma(Math.round(selisih).toString())}
              </span>
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
