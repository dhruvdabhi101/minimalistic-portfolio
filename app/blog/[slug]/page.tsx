import ScrollProgressBar, { Footer } from '@/app/components'
import { getPostBySlug } from '@/lib/mdx'
import { Manrope } from 'next/font/google'
import Link from 'next/link'

const manrope = Manrope({ subsets: ['latin'] })
const getPageContent = async (slug: any) => {
    const { meta, content } = await getPostBySlug(slug)
    return { meta, content }
}

export async function generateMetadata({ params }: any) {
    const { meta } = await getPageContent(params.slug)
    // @ts-ignore
    return { title: meta.title }
}

const Page = async ({ params }: any) => {
    const { content } = await getPageContent(params.slug)

    return (
        <div className={"w-full flex flex-row justify-center text-[13px] md:text-[15px] font-thin" + ` ${manrope.className}`}>
        <ScrollProgressBar/>
            <div className='flex flex-col justify-center p-5 w-[100%] sm:w-[80%] md:w-[60%] lg:w-[55%] xl:w-[45%]'>
                <Link href='/blog' className='text-gray-200 underline'>
                    back
                </Link>
                <div className='prose-md max-w-full prose prose-invert prose-h1:text-2xl prose-h1:text-gray-300 
            prose-h2:text-lg prose-h2:font-bold prose-h2:text-gray-300 prose-h3:text-md prose-h4:text-base prose-h5:text-sm prose-h6:text-xs
            prose-a:underline prose-a:text-gray-400
            prose-p:font-thin prose-p:text-gray-200
            prose-ul:font-thin prose-ul:text-gray-200
            prose-ol:font-thin prose-ol:text-gray-200
            prose-blockquote:font-thin prose-blockquote:text-gray-200 
            prose-li:font-thin prose-li:text-gray-200 
            prose-pre:font-thin prose-pre:text-gray-200 prose-pre:self-center
            prose-hr:font-thin prose-hr:text-gray-200 
            prose-pre:w-full prose-pre:md:w-2/3
            tracking-wide
            '>
                    {content}</div>
                    <Footer/>
            </div>
        </div>
    )
}

export default Page
