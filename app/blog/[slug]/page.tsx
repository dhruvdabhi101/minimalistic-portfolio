import ScrollProgressBar, { Footer } from '@/app/components'
import { getPostBySlug } from '@/lib/mdx'
import { Metadata } from 'next'
import Link from 'next/link'
import { ImageResponse } from 'next/server'

const getPageContent = async (slug: any) => {
    const { meta, content } = await getPostBySlug(slug)
    return { meta, content }
}

export async function generateMetadata({ params }: any) {
    const { meta } = await getPageContent(params.slug)
        // @ts-ignore
    const image = meta.image;
    return {
        // @ts-ignore
        title: meta.title,
        openGraph: {
            // @ts-ignore
            title: meta.title,
            // @ts-ignore
            description: meta.description,
            type: "article",
            author: "Dhruv Dabhi",
            images: [
                {
                    url: `https://dhruvdabhi.me/${image}`,
                    width: 1200,
                    height: 630,
                    // @ts-ignore
                    alt: meta.title,
                },
            ],
        },
     }
}

const Page = async ({ params }: any) => {
    const { content } = await getPageContent(params.slug)

    return (
        <div className={"w-full flex flex-row justify-center text-[13px] md:text-[15px]" }>
        <ScrollProgressBar/>
            <div className='flex flex-col justify-center p-5 w-[100%] sm:w-[90%] md:w-[70%] lg:w-[65%] xl:w-[55%]'>
                <Link href='/blog' className='text-neutral-300 underline'>
                   &larr; back
                </Link>
                <div className='prose-md max-w-full prose prose-invert prose-h1:text-2xl prose-h1:text-neutral-300
            prose-h2:text-lg prose-h2:font-bold prose-h2:text-neutral-300 prose-h3:text-md prose-h4:text-base prose-h5:text-sm prose-h6:text-xs
            prose-a:underline prose-a:text-neutral-200 prose-a:font-thin
            prose-p:text-neutral-300
            prose-ul:text-neutral-300
            prose-ol:text-neutral-300
            prose-blockquote:font-thin prose-blockquote:text-neutral-200
            prose-li:text-neutral-300
            prose-pre:font-thin prose-pre:text-neutral-200 prose-pre:self-center
            prose-hr:font-thin prose-hr:text-neutral-200
            prose-pre:w-full prose-pre:md:w-2/3
            leading-7

            '>
                    {content}</div>
                    <Footer/>
            </div>
        </div>
    )
}

export default Page
