import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })


export default function Home() {
  return (
  <div className={"flex justify-center items-center text-white text-7xl font-medium h-screen flex-col gap-4"+ ` ${manrope.className}`}>
  <div>
  dhruv dabhi
  </div>
  <div className='text-2xl text-gray-400'>
  blockchain dev
  </div>
  </div>
  )
}
