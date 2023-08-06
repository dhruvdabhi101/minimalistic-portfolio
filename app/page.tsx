import { Manrope } from 'next/font/google'
import Link from 'next/link'
import dimg from '../public/DLogog.png'
import "./globals.css"
import Image from 'next/image'
import { Footer } from './components'
import { VscGithub, VscMail, VscTwitter } from 'react-icons/vsc'
import { getAllPostsMeta } from '@/lib/mdx'

const manrope = Manrope({ subsets: ['latin'] })


export default function Home() {


    return (
        <div className={"w-full flex flex-row justify-center text-[13px] md:text-[15px] font-thin" + ` ${manrope.className}`}>
            <div className='flex flex-col justify-center p-5 w-[100%]  sm:w-[80%] md:w-[70%] lg:w-[55%] xl:w-[50%]'>


                <div className='text-gray-400'>dhruv</div>
                <div className='flex flex-col gap-6 leading-6'>
                    <div className='text-gray-400 font-sm'></div>
                    <div className='text-gray-200'>yo, i'm 20 y/0 <span className='font-medium'>software engineer</span> based in India,going to uni and studying cs. i like blockchain, i love learning different languages</div>
                    <div className='text-gray-200'>right now, i'm trying to learn solana and rust. i use <span className='font-medium'>vim </span>btw.</div>
                </div>



                <div className='text-gray-200 space-y-6 my-10'>
                    <div className='font-bold text-lg'> Projects </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                        <div className='flex flex-col gap-3 '>
                            <a href="https://github.com/dhruvdabhi101/aiject" target='_blank'><div className='underline font-medium '>aiject</div></a>
                            <div >ai based question maker website to help you with tech projects.</div>
                        </div>
                        <div className='flex flex-col gap-3 '>
                            <a href="https://github.com/dhruvdabhi101/getthatdoc" target='_blank'><div className='underline font-medium '>getthatdoc</div></a>
                            <div >Notes sharing platform built on PHP</div>
                        </div>
                        <div className='flex flex-col gap-3 '>
                            <a href="https://github.com/dhruvdabhi101/rust-wordl" target='_blank'><div className='underline font-medium '>rust-world</div></a>
                            <div >command line wordl game built in rust</div>
                        </div>
                        <div className='flex flex-col gap-3 '>
                            <a href="https://github.com/dhruvdabhi101/deez-interpreter" target='_blank'><div className='underline font-medium '>deez interpreter</div></a>
                            <div >monkey lang interpreter built in rust (half finished)</div>
                        </div>
                        <div className='flex flex-col gap-3 '>
                            <a href="https://github.com/dhruvdabhi101/firunner" target='_blank'><div className='underline font-medium '>firunner</div></a>
                            <div >neovim plugin to automate python script running built with lua</div>
                        </div>
                    </div>
                </div>


                <div className='text-gray-200 space-y-6'>
                    <Link href="/blog"><div className='font-bold text-lg'> Blogs </div></Link>
                    <div className='flex flex-col gap-5 mt-5'>
                            <Link
                                href={`/blog/how-i-manage-75-attandance`}
                            >
                                <div className='flex flex-col gap-2'>
                                    <div className=' font-medium text-gray-300'>How I manage 75% attendance</div>
                                    <div className='text-gray-200'>In this blog, I reveal my way of managing 75% attandance and still be able to achieve/learn more.</div>
                                </div>
                            </Link>
                    </div>
                </div>


                <Footer />
            </div>
        </div>
    )
}
