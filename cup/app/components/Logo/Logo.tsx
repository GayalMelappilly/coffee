import React from 'react'
import { Amaranth } from "next/font/google";
import Link from 'next/link';

const amaranth = Amaranth({
    weight: "700",
    subsets: ["latin"]
})

// type Props = {}

const Logo = () => {
    return (
        <Link href={'/'}>
            <div className={`bg-gradient-to-r from-[#25a55f] to-[#2dd470] h-8 sm:h-12 w-24 sm:w-36 ml-3 sm:ml-10 flex items-center justify-center rounded-md pointer-events-none select-none`}>
                <h1 className={`text-xl sm:text-3xl sm:px-0 text-white text-shadow-sm ${amaranth.className}`}>hangout</h1>
            </div>
        </Link>
    )
}

export default Logo
