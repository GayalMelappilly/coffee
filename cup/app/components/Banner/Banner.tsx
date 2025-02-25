import React from 'react'
import { Amaranth } from "next/font/google";

const amaranth = Amaranth({
    weight: "700",
    subsets: ["latin"]
})

// type Props = {}

const Banner = () => {
    return (
    <div className={`bg-gradient-to-r from-[#25a55f] to-[#2dd470] overflow-hidden select-none pointer-events-none hidden sm:flex h-screen w-1/2 items-center justify-center`}>
        <h1 className={`vibrate-3-normal text-8xl text-white text-shadow-lg text-center ${amaranth.className}`}>hangout</h1>
    </div>
    )
}

export default Banner