import { Manrope } from 'next/font/google'
import Footer from '@/components/Footer'

const manrope = Manrope({ subsets: ['latin'] })


export default function Home() {
  return (
  <div className={"flex justify-between  text-white h-screen flex-col gap-4 max-h-full p-3 "+ ` ${manrope.className}`}>
  <div>Profile Picture or something</div>
  <div className='flex justify-center items-center flex-col'>
  <div className={'sm:text-6xl text-5xl'}>
     dhruv dabhi
  </div>
  <div className='sm:text-2xl text-gray-400 text-xl'>
    blockchain dev
  </div>
  </div>
  <Footer/>
  
  </div>
  )
}
