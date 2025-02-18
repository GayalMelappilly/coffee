import React from 'react'
import { Amaranth } from "next/font/google";

const amaranth = Amaranth({
    weight: "700",
    subsets: ["latin"]
})

type Props = {}

const Logo = (props: Props) => {
    return (
    <div  className={`bg-gradient-to-r from-[#25a55f] to-[#2dd470] h-12 w-36 ml-10 flex items-center justify-center rounded-md`}>
        <h1 className={`text-3xl text-white text-shadow-sm ${amaranth.className}`}>hangout</h1>
    </div>
    )
}

export default Logo
