import { Manrope } from 'next/font/google'
import Link from 'next/link'
import dimg from '../public/D-removebg-preview.png'
import "./globals.css"
import Image from 'next/image'

const manrope = Manrope({ subsets: ['latin'] })


export default function Home() {
  return (
  <div className={"flex justify-between  text-white h-screen flex-col gap-4 max-h-full p-3 "+ ` ${manrope.className}`}>
  <Image src={dimg} alt="img" width={50} height={50}/>
  <div className='flex justify-center items-center flex-col'>
  <div className={'sm:text-6xl text-5xl'}>
     dhruv dabhi
  </div>
  <div className='sm:text-2xl text-gray-400 text-xl'>
    blockchain dev
  </div>
  </div>
        <div className="w-full border-t-2 border-gray-800 px-3 py-1 flex justify-start gap-8 text-lg sm:text-2xl ">
        <p className="hover:text-gray-400">
            <Link href="/projects">projects</Link>
        </p>
        <p className="hover:text-gray-400">
            <Link href="https://github.com/dhruvdabhi101">github</Link>
        </p>
        <p className="hover:text-gray-400">
            <Link href="https://linkedin.com/in/dhruvdabhi101">linkedin</Link>
        </p>
        <p className="hover:text-gray-400">
            <Link href="https://dhruvblogs.xyz">blog</Link>
        </p>
        </div>
  
  </div>
  )
}
