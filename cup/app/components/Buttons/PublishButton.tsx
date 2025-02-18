import React from 'react'
import { Bebas_Neue } from 'next/font/google'

type Props = {}

const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ["latin"]
})

const PublishButton = (props: Props) => {
    return (
        <div>
            <button className={`h-12 bg-red-600 bg-opacity-25 text-red-600 border-none text-3xl ${bebasNeue.className} px-3 rounded-md`}>
                <span className="relative after:absolute after:left-0 after:bottom-[4px] after:w-0 after:h-[3px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
                    PUBLISH
                </span>
            </button>
        </div>
    )
}

export default PublishButton