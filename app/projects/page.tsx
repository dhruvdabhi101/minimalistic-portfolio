import { Manrope } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const manrope = Manrope({ subsets: ['latin'] })


export default function Home() {
    return (
            <div className='flex flex-col justify-between w-full h-[100vh]'>
                <div className={"flex text-white flex-col gap-4 p-4 "+ ` ${manrope.className} text-lg `}>
                    <div>dhruv dabhi</div>
                    <div className={`${manrope.className} text-5xl font-medium p-4`}>
                    projects
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                    <div className='grid grid-cols-3 gap-14'>
                    <Card/>
                    <Card/>
                    <Card/>
                    </div>
                    </div>

                </div>

  {/* footer */}
            <div className="w-full border-t-2 border-gray-800 px-3 py-1 flex justify-start gap-8 text-lg sm:text-2xl text-white">
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

function Card() {
    return (
    <div className='border-2 border-gray-500 h-80 w-60 rounded-xl p-3 flex flex-col gap-5 text-center mt-7 mx-5'>
    
    <div className='text-3xl font-medium p-2'>
    Project Name
    </div>
    <div className='text-lg p-2'>
    Project Description
    </div>
    <div className='text-lg text-gray-400 p-2 hover:text-white'>
    <Link href='https://github.com/projects'> Link  </Link>
    </div>


    </div>


    )

}
