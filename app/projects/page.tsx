import { Manrope } from 'next/font/google'
import Link from 'next/link'
import "../globals.css"
import Image from 'next/image'
import dimg from '../../public/DLogog.png'

const manrope = Manrope({ subsets: ['latin'] })


export default function Home() {
    return (
            <div className='flex flex-col justify-between w-full h-full'>
                <div className={"flex text-white flex-col gap-4 sm:p-4"+ ` ${manrope.className} text-lg `}>
                    <Link href={"/"}>
                        <Image src={dimg} alt="img" width={50} height={50}/>
                    </Link>
                    <div className={`${manrope.className} text-5xl font-medium `}>
                    projects
                    </div>
                    <div className='flex flex-col justify-center items-center w-[100%]'>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 sm:gap-14 gap-10 overflow-y-auto'>
                            <Card props={{name:"GetThatDoc", desc:"it is a notes sharing plateform, made with php,javascript,html-css. you can upload notes and download by just entering name of the subject"}}/>
                            <Card props={{name:"OnlineJobPortal", desc:"formaly, getthatjob, it is online job recruiting portal made with django framework. very minimal design and all the functionalities you can think of"}}/>
                            <Card props={{name:"deez-interpreter", desc:"it is a interpreter for monkey language made with rust btw. very simple and easy to implement covers basic concepts of interpreter/compiler"}}/>
                            <Card props={{name:"firunner", desc:"it is a small plugin made with lua programming language for neovim btw. it simplifies process of interpreting python file with just one shortcut and prints output in new buffer"}}/>
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

function Card({props}:any) {
    return (
    <div className='border-2 border-gray-500 h-88 w-60 rounded-xl p-3 flex flex-col gap-3 text-center mt-7 mx-5'>
    
    <div className='text-xl font-medium p-2'>
    {props.name}
    </div>
    <div className='text-md p-2'>
    {props.desc}
    </div>
    <div className='text-lg text-gray-400 p-2 hover:text-white'>
    <Link href={`https://github.com/dhruvdabhi101/${props.name}`}> github link  </Link>
    </div>


    </div>


    )

}
