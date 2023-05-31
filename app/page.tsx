import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })


export default function Home() {
  return (
  <div className={"flex justify-center items-center text-white h-screen flex-col gap-4 max-h-full "+ ` ${manrope.className}`}>
  <div className={'sm:text-6xl text-5xl'}>
     dhruv dabhi
  </div>
  <div className='sm:text-2xl text-gray-400 text-xl'>
    blockchain dev
  </div>
  </div>
  )
}
