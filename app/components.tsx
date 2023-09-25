"use client"
import { useEffect, useState } from 'react';
import { VscGithub, VscMail, VscTwitter } from 'react-icons/vsc'
export function Footer() {

    return (
        <>
            <span className='w-full h-[1px]  bg-gray-400 my-6' ></span>
            <div className='flex flex-row justify-between text-gray-400'>
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

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
  );
};

export default ScrollProgressBar;

