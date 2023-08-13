
import { VscGithub, VscMail, VscTwitter } from 'react-icons/vsc'
export function Footer() {

    return (
    <>
                <span className='w-full h-[1px]  bg-gray-400 my-4' ></span>
                <div className='flex flex-row justify-between my-3 text-gray-400'>
                    <div>dhruv</div>
                    <div className='flex flex-row gap-3'>
                        <a href="https://github.com/dhruvdabhi101" target='_blank'><VscGithub size={20} /></a>
                        <a href="https://x.com/dhruvdabhi101" target='_blank'><VscTwitter size={20} /></a>
                        <a href="mailto:dhruvdabhi101@gmail.com" target='_blank'><VscMail size={20} /></a>
                    </div>
                </div>
    </>
    )
}
