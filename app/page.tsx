import Link from 'next/link'
import "./globals.css"
import { Footer } from './components'
import { getAllPostsMeta } from '@/lib/mdx'
import projectData from './project.json'
import Project from '@/components/Project'

export default async function Home() {
  const posts = await getAllPostsMeta()

  return (
    <div className={"w-full flex flex-row justify-center text-[14px] md:text-[15px] font-light"}>
      <div className='flex flex-col justify-center p-5 w-[100%] sm:w-[97%] md:w-[70%] lg:w-[55%] xl:w-[50%]'>

        <div className='text-neutral-500 flex justify-between tracking-wide'>
          dhruv
        </div>

        <div className='flex flex-col gap-6 leading-8 mt-7'>
          <div >
            <div className='text-neutral-400 text-xs tracking-wide'>IPA /dhru-v/ — firm/also a star ;)</div>
            <div className='text-neutral-300'>yo, i'm 20 y/o <span className='font-medium'>software engineer</span> based in India,going to uni, studying cs and playing ukulele on the side.
              i love learning new languages, how computer works</div>
          </div>
          <div className='text-neutral-300'>right now, i'm trying to learn assembly and c. i use <span className='font-medium'>vim </span>btw.</div>
        </div>

        <div className='text-neutral-300 mt-16'>
          <div className='font-bold text-lg'> projects </div>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
            {projectData.projects.map((project, index) => (
              <Project key={index} title={project.title} description={project.description} link={project.link} />
              ))
            }

          </div>
        </div>


        <div className='text-neutral-200 mt-8 mb-6 tracking-wide'>
          <div className='font-bold text-lg'> blogs </div>
          <div className='flex flex-col gap-5 mt-5'>
            {posts.slice(0, 3).reverse().map((post, index) => (

              <Link
                href={`/blog/${post.slug}`}
                key={index}
              >
                <div className='flex flex-row justify-between'>
                  <div className=' text-neutral-300 underline'>{post.title}</div>
                  <div className='text-neutral-400'>{post.date}</div>
                </div>
              </Link>
            ))}
            <Link href={`/blog`} className='underline text-neutral-300 '> all blogs &rarr;</Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
