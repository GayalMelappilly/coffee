"use client"

import React from 'react'
import { Amaranth } from "next/font/google";

const amaranth = Amaranth({
    weight: "700",
    subsets: ["latin"]
})

// type Props = {}

const SmallBanner = () => {
    return (
    <div className={`bg-gradient-to-r from-[#25a55f] to-[#2dd470] overflow-hidden select-none pointer-events-none h-full w-full items-center justify-center rounded-sm`}>
        <h1 className={`vibrate-3-normal text-4xl text-white text-shadow-sm text-center py-5 ${amaranth.className}`}>hangout</h1>
    </div>
    )
}

export default SmallBanner