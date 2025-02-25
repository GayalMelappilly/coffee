; 'use client'

import React from 'react'
import { Bebas_Neue } from 'next/font/google'
import Link from 'next/link'

// type Props = {}

const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ["latin"]
})

const PublishButton = () => {
    return (
        <div>
            <Link href={'/new-post'}>
                <button className={`h-8 sm:h-12 ml-3 sm:ml-0 bg-red-600 bg-opacity-25 text-red-600 border-none text-2xl sm:text-3xl ${bebasNeue.className} px-3 rounded-md`}>
                    <span className="relative after:absolute after:left-0 after:bottom-[4px] after:w-0 after:h-[3px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
                        PUBLISH
                    </span>
                </button>
            </Link>
        </div>
    )
}

export default PublishButton