import React from 'react'
import { Amaranth } from "next/font/google";

const amaranth = Amaranth({
    weight: "700",
    subsets: ["latin"]
})

type Props = {}

const Banner = (props: Props) => {
    return (
    <div  className={`bg-gradient-to-r from-[#25a55f] to-[#2dd470] h-96 mx-20 my-10 flex items-center justify-center rounded-2xl`}>
        <h1 className={`vibrate-3-normal text-9xl text-white text-shadow-lg ${amaranth.className}`}>hangout</h1>
    </div>
    )
}

export default Banner