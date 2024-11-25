'use client'
import { AnimatedGridPattern } from '@/components/GridPattern'
import { Safari } from '@/components/Showcase'
import { WordRotate } from '@/components/WordRotate'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export default function Cek() {
  return (
    <>
      <div className="relative isolate">
        <AnimatedGridPattern
          className={cn(
            '[mask-image:radial-gradient(600px_at_top_center,transparent,white)]'
          )}
        />
        <div className="block lg:flex flex-row flex-grow items-center">
          <motion.div
            className="max-w-2xl pt-4 pb-16 sm:py-36"
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="text-left">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Buat Keputusan Keuangan{' '}
                <WordRotate
                  words={['Lebih Cerdas', 'Lebih Baik', 'Lebih Bijak']}
                />
              </h1>
              <p className="mt-3 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                Kalkulator yang dirancang untuk membantu menghitung pinjaman
                online untuk keputusan finansial yang lebih bijak
              </p>
              <div className="mt-5">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
              </div>
            </div>
          </motion.div>
          <div className="relative max-w-3xl text-center mx-auto lg:mr-0 lg:ml-auto block">
            <Safari
              url="https://google.com"
              className="size-full"
              // src="https://get.wallhere.com/photo/Oshi-no-Ko-Kurokawa-Akane-Mem-Cho-kana-arima-Aqua-hoshino-ruby-hoshino-Hoshino-Ai-looking-at-viewer-2252324.jpg"
              src="https://canopywp.wpengine.com/wp-content/uploads/2024/02/Frame-1948758242-5.svg"
            />
          </div>
        </div>
      </div>
    </>
  )
}
