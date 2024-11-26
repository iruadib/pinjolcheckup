'use client'

import Link from 'next/link'
import { ChangeEvent, FormEvent, useState } from 'react'

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
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-2 sm:mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Pokok Hutang (IDR)
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
              Bunga Harian
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
        {cicilan && total && selisih && (
          <>
            <p className="my-4 flex flex-col gap-y-1 relative">
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
