import Link from 'next/link'
import { getAllPostsMeta } from '@/lib/mdx'
import { Manrope } from 'next/font/google'
import { Footer } from '../components'

const manrope = Manrope({ subsets: ['latin'] })

const Page = async () => {
    const posts = await getAllPostsMeta()

    return (
        <div className={"w-full flex flex-row justify-center text-[13px] md:text-[15px] font-thin" + ` ${manrope.className}`}>
            <div className='flex flex-col justify-center p-5 w-[100%]  sm:w-[80%] md:w-[60%] lg:w-[55%] xl:w-[45%]'>
                <Link href="/"><div className='text-gray-300 underline mb-5'>← back</div></Link>
                <div className='w-full self-center'>
                    <Link href="/blog"><div className='font-bold text-lg text-gray-300 '> Blogs </div></Link>
                    <div className='flex flex-col gap-5 mt-5'>
                        {posts?.map(post => (
                            <Link
                                href={`/blog/${post.slug}`}
                            >
                                <div className='flex flex-col gap-2'>
                                    <div className=' font-medium text-gray-300 underline text-sm'>{post.title}</div>
                                    <div className='text-gray-200'>{post.description}</div>
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
