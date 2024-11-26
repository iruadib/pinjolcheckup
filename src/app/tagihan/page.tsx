import Tagihan from '@/components/Tagihan'

export default function TagihanPage() {
  return (
    <>
      <div className="py-24 md:py-32">
        <h1 className="text-4xl font-bold mb-10">
          Cek{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-indigo-600 to-indigo-800 text-transparent bg-clip-text">
            Tagihan
          </span>
        </h1>
        <Tagihan />
      </div>
    </>
  )
}
