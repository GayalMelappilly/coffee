'use client'

import React, { FC, useEffect, useRef, useState } from 'react'
import { Poppins } from 'next/font/google'

type Props = {
    open: boolean,
    setOpen: (open: boolean) => void
}

const poppins = Poppins({
    weight: '400',
    subsets: ["latin"]
})

const sections = [
    { name: "Home", icon: "home.svg" },
    { name: "Python" },
    { name: "C/C++" },
    { name: "JavaScript" },
    { name: "RUST" },
    { name: "MERN" },
    { name: "Django" },
    { name: "Ruby on Rails" },
    { name: "Data Structures" },
    { name: "System Design" },
]

const SidePanel: FC<Props> = ({ open, setOpen }) => {

    return (
        <>
            <div className='mx-10 mt-10 w-full hidden sm:block bg-zinc-50 bg-opacity-60 p-2 rounded-md shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.19)]'>
                {sections.map((section, index) => (
                    <div key={index} className='my-2 hover:bg-opacity-10 rounded-md hover:bg-amber-700 hover:scale-105 hover:mx-2 duration-200 p-1 pl-5 py-2 flex hover:text-amber-600 cursor-pointer'>
                        {/* <img src={section.icon} className='text-red-600' alt="" /> */}
                        <h1 className={`text-md pl-1 ${poppins.className}`}>{section.name}</h1>
                    </div>
                ))}
                {/* <h1 className='py-2 text-2xl'>SOCIALS</h1> */}
            </div>

            {/* Mobile Sidepanel */}

            <button className="bg-opacity-20 bg-red-600 p-1 ml-3 rounded-md block sm:hidden h-8"
                type="button"
                onClick={() => setOpen(!open)}>
                <img src="menu_icon.svg" alt="" />
            </button>

            {open && (
                <div id="dropdownHover" className="z-10 fixed top-0 sm:hidden w-full h-full overflow-auto flex backdrop-blur-[5px]">
                    <div className={`w-8/12 backdrop-blur-xl bg-zinc-100 h-fit ${open ? 'fade-in-left-normal' : 'fade-in-right-normal'} shadow-[7px_0px_22px_0px_rgba(0,_0,_0,_0.2)]`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                            {sections.map((section, index) => (
                                <li key={index} className='my-2 hover:bg-opacity-10 rounded-md hover:bg-amber-700 p-1 pl-5 py-2 flex hover:text-amber-600 cursor-pointer'>
                                    <h1 className={`text-md text-black pl-1 ${poppins.className}`}>{section.name}</h1>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='w-4/12 h-full' onClick={() => setOpen(!open)}></div>
                </div>
            )}

        </>
    )
}

export default SidePanel