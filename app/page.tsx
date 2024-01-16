// import { Manrope } from 'next/font/google'
import Link from 'next/link'
import dimg from '../public/DLogog.png'
import "./globals.css"
import Image from 'next/image'
import ScrollProgressBar, { Footer } from './components'
import { VscGithub, VscMail, VscTwitter } from 'react-icons/vsc'
import { getAllPostsMeta } from '@/lib/mdx'

//const manrope = Manrope({ subsets: ['latin'] })


export default async function Home() {
    const posts = await getAllPostsMeta()

    return (
        <div className={"w-full flex flex-row justify-center text-[14px] md:text-[15px] font-light"}>
            <div className='flex flex-col justify-center p-5 w-[100%] sm:w-[97%] md:w-[70%] lg:w-[55%] xl:w-[50%]'>

                <div className='text-neutral-500'>dhruv</div>

                <div className='flex flex-col gap-6 leading-8 tracking-wide mt-7'>
                <div >
                    <div className='text-neutral-500 text-xs'>IPA /dhru-v/ — firm/also a star ;)</div>
                    <div className='text-neutral-300'>yo, i'm 20 y/o <span className='font-medium'>software engineer</span> based in India,going to uni, studying cs and playing ukulele on the side.
                   i love learning new languages, how computer works and i live on the street <span className='font-medium'>tty0</span></div>
                   </div>
                    <div className='text-neutral-300'>right now, i'm trying to learn ocaml. i use <span className='font-medium'>vim </span>btw.</div>
                </div>

                <div className='text-neutral-300 space--6 mt-16'>
                    <div className='font-bold text-lg'> projects </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                        <div className='flex flex-col gap-3 w-44'>
                            <a href="https://github.com/dhruvdabhi101/aiject" target='_blank'><div className='font-normal underline'>aiject</div></a>
                            <div >ai based question maker website to help you with tech projects.</div>
                        </div>
                        <div className='flex flex-col gap-3 w-44'>
                            <a href="https://github.com/dhruvdabhi101/getthatdoc" target='_blank'><div className='underline font-normal '>getthatdoc</div></a>
                            <div >Notes sharing platform built on PHP</div>
                        </div>
                        <div className='flex flex-col gap-3 w-44'>
                            <a href="https://github.com/dhruvdabhi101/rust-wordl" target='_blank'><div className='underline font-normal '>rust-wordl</div></a>
                            <div >command line wordl game built in rust</div>
                        </div>
                        <div className='flex flex-col gap-3 w-44'>
                            <a href="https://github.com/dhruvdabhi101/darkdown" target='_blank'><div className='underline font-normal '>darkdown</div></a>
                            <div>custom markup language which is used for static site generator built with rust btw</div>
                        </div>
                        <div className='flex flex-col gap-3 w-44'>
                            <a href="https://github.com/dhruvdabhi101/firunner" target='_blank'><div className='underline font-normal '>firunner</div></a>
                            <div >neovim plugin to automate python script running built with lua</div>
                        </div>
                    </div>
                </div>


                <div className='text-neutral-200 mt-8 mb-6 tracking-wide'>
                    <div className='font-bold text-lg'> blogs </div>
                    <div className='flex flex-col gap-5 mt-5'>
                        {posts.slice(0, 3).reverse().map((post) => (

                            <Link
                                href={`/blog/${post.slug}`}
                            >
                                <div className='flex flex-row justify-between'>
                                    <div className=' text-neutral-300 underline'>{post.title}</div>
                                    <div className='text-neutral-400'>{post.date}</div>
                                </div>
                            </Link>
                        ))}
                        <Link href={`/blog`} className='underline text-neutral-200 '> all blogs &rarr;</Link>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
