'use client'
import Link from 'next/link'
import { ChangeEvent, FormEvent, useState } from 'react'

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
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-2 sm:mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Jumlah Pinjaman (IDR)
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              value={formatWithComma(target.toString())}
              onChange={handleTargetChange}
              placeholder="1000"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2 sm:mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Bunga Tahunan
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="number"
              value={bunga.toString()}
              onChange={(e) =>
                setBunga(parseFloat(e.currentTarget.value || '0'))
              }
              required
            />
            <p className="text-gray-600 text-xs italic">
              dalam %, misal untuk bunga 2,5% tulis 2,5
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Periode (Bulan)
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="number"
              value={periode.toString()}
              onChange={(e) =>
                setPeriode(parseFloat(e.currentTarget.value || '0'))
              }
              required
            />
          </div>
        </div>
        {hasil && (
          <>
            <p className="mt-4 mb-2 block relative">
              Angsuran bulanan sebesar Rp
              {formatWithComma(Math.round(hasil).toString())}
            </p>
          </>
        )}

        {jadwal.length > 0 && (
          <div className="mt-2 mb-4">
            <h2 className="text-xl font-semibold my-4">Jadwal Amortisasi</h2>
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
              <thead>
                <tr className="bg-indigo-400 text-white text-left text-base font-medium">
                  <th className="px-4 py-2">Bulan</th>
                  <th className="px-4 py-2">Angsuran Bulanan</th>
                  <th className="px-4 py-2">Bunga</th>
                  <th className="px-4 py-2">Pokok</th>
                  <th className="px-4 py-2">Sisa Pinjaman</th>
                </tr>
              </thead>
              <tbody>
                {jadwal.map((item) => (
                  <tr
                    key={item.month}
                    className="text-base border-b border-gray-200"
                  >
                    <td className="px-4 py-2">{item.month}</td>
                    <td className="px-4 py-2">{`Rp ${formatWithComma(
                      Math.round(item.monthlyPayment).toString()
                    )}`}</td>
                    <td className="px-4 py-2">{`Rp${formatWithComma(
                      Math.round(item.interest).toString()
                    )}`}</td>
                    <td className="px-4 py-2">{`Rp ${formatWithComma(
                      Math.round(item.principalPayment).toString()
                    )}`}</td>
                    <td className="px-4 py-2">{`Rp ${formatWithComma(
                      Math.round(item.balance).toString()
                    )}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="mt-0 gap-x-2 flex justify-start">
          <Link
            href="/"
            className="transition-all rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:text-white focus-visible:outline-indigo-600"
          >
            Kembali
          </Link>
          <button
            type="submit"
            className="transition-all rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Kalkulasi
          </button>
        </div>
      </form>
    </>
  )
}
