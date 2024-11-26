'use client'
import Link from 'next/link'
import { ChangeEvent, FormEvent, useState } from 'react'
import Input from '../Input'
import styles from './styles.module.css'

interface AmortizationDetail {
  month: number
  monthlyPayment: number
  interest: number
  principalPayment: number
  balance: number
}

export default function Cicilan() {
  const [target, setTarget] = useState(0)
  const [bunga, setBunga] = useState(2.5)
  const [periode, setPeriode] = useState(1)
  const [hasil, setHasil] = useState<null | number>(null)
  const [jadwal, setJadwal] = useState<AmortizationDetail[]>([])

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
    const bungaBulanan = bunga / 12 / 100
    const monthly =
      (target * bungaBulanan * Math.pow(1 + bungaBulanan, periode)) /
      (Math.pow(1 + bungaBulanan, periode) - 1)
    setHasil(monthly)

    const newSchedule: AmortizationDetail[] = []
    let balance = target

    for (let i = 1; i <= periode; i++) {
      const interest = balance * bungaBulanan
      const principalPayment = monthly - interest
      balance -= principalPayment
      newSchedule.push({
        month: i,
        monthlyPayment: monthly,
        interest: interest,
        principalPayment: principalPayment,
        balance
      })
    }
    setJadwal(newSchedule)
  }
  return (
    <>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <div className={styles.cont}>
          <Input
            label="Jumlah Pinjaman (IDR)"
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
            label="Periode (Bulan)"
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
              Angsuran bulanan sebesar Rp
              {formatWithComma(Math.round(hasil).toString())}
            </p>
          </>
        )}

        {jadwal.length > 0 && (
          <div className={styles.table_wrapper}>
            <h2 className={styles.table_title}>Jadwal Amortisasi</h2>
            <table className={styles.table}>
              <thead>
                <tr className={styles.trhead}>
                  <th className={styles.th}>Bulan</th>
                  <th className={styles.th}>Angsuran Bulanan</th>
                  <th className={styles.th}>Bunga</th>
                  <th className={styles.th}>Pokok</th>
                  <th className={styles.th}>Sisa Pinjaman</th>
                </tr>
              </thead>
              <tbody>
                {jadwal.map((item) => (
                  <tr key={item.month} className={styles.trbody}>
                    <td className={styles.th}>{item.month}</td>
                    <td className={styles.th}>{`Rp ${formatWithComma(
                      Math.round(item.monthlyPayment).toString()
                    )}`}</td>
                    <td className={styles.th}>{`Rp${formatWithComma(
                      Math.round(item.interest).toString()
                    )}`}</td>
                    <td className={styles.th}>{`Rp ${formatWithComma(
                      Math.round(item.principalPayment).toString()
                    )}`}</td>
                    <td className={styles.th}>{`Rp ${formatWithComma(
                      Math.round(item.balance).toString()
                    )}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
