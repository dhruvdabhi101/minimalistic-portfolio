import Link from 'next/link'
import { getAllPostsMeta } from '@/lib/mdx'
import { Manrope } from 'next/font/google'
import { Footer } from '../components'
import { GeistSans } from 'geist/font'

const manrope = Manrope({ subsets: ['latin'] })

const Page = async () => {
    const posts = await getAllPostsMeta()

    return (
        <div className={"w-full flex flex-row justify-center text-[13px] md:text-[15px] font-thin" + ` ${GeistSans.className}`}>
            <div className='flex flex-col justify-center p-5 w-[100%] sm:w-[90%] md:w-[70%] lg:w-[65%] xl:w-[55%] leading-8'>
                <Link href="/"><div className='text-neutral-200 underline'>&larr; back</div></Link>
                <div className='w-full self-center'>
                    <Link href="/blog"><div className='font-bold text-lg text-gray-300 '> blogs </div></Link>
                    <div className='flex flex-col gap-5 mt-5 tracking-wide'>
                        {posts?.map(post => (
                            <Link
                                href={`/blog/${post.slug}`}
                            >
                                <div className='flex flex-col gap-2'>
                                    <div className=' font-medium text-neutral-200 underline text-lg'>{post.title}</div>
                                    <div className='text-neutral-200'>{post.description}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Page
