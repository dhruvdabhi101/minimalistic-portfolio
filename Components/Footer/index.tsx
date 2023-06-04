import React from "react";
import Link from "next/link";


export default function Footer() {
    return (
        <div className="w-full border-t-2 border-gray-800 px-3 py-1 flex justify-start gap-8 text-lg sm:text-2xl ">
        <p className="hover:text-gray-400">
            <Link href="/project">projects</Link>
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
    );
    }

