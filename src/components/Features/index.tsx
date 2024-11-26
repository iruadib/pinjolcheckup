import Link from 'next/link'

export default function Feature() {
  return (
    <>
      <div className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Fitur-fitur yang{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-600 to-indigo-800 text-transparent bg-clip-text">
              biasa anda butuhkan
            </span>
          </h2>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">
            <Link
              href="/deposit"
              className="relative max-lg:row-start-1 bg-white"
            >
              <div className="relative flex h-full flex-col overflow-hidden">
                <div className="relative min-h-[15rem] w-full grow">
                  <div className="absolute bottom-0 left-10 right-0 top-0 overflow-hidden rounded-tl-lgs rounded-br-lg bg-gray-900">
                    <img
                      className="object-left-top object-cover h-full w-full"
                      src="/img/deposit.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="px-8 py-8 sm:px-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Cek Deposit
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Periksa saldo deposit Anda dengan mudah dan cepat. Pastikan
                    Anda selalu tahu jumlah yang tersedia untuk transaksi lebih
                    lanjut
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </Link>
            <Link
              href="/tagihan"
              className="relative max-lg:row-start-2 lg:col-start-1 lg:row-start-2 bg-white"
            >
              <div className="relative flex h-full flex-col overflow-hidden">
                <div className="px-8 py-8 sm:px-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Cek Tagihan
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Cek status tagihan Anda, mulai dari jumlah yang harus
                    dibayar hingga tanggal jatuh tempo
                  </p>
                </div>
                <div className="relative min-h-[15rem] w-full grow">
                  <div className="absolute bottom-0 left-10 right-0 top-0 overflow-hidden rounded-tl-lgs rounded-br-lg bg-gray-900">
                    <img
                      className="object-left-top object-cover h-full w-full"
                      src="/img/tagihan.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </Link>
            <Link href="/cicilan" className="relative lg:row-span-2 bg-white">
              <div className="relative flex h-full flex-col overflow-hidden">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Cek Cicilan
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Pantau status cicilan Anda dan ketahui jumlah yang harus
                    dibayar di setiap periode.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-lgs rounded-br-lg bg-gray-900">
                    <img
                      className="object-left-top object-cover h-full w-full"
                      src="/img/cicilan.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
