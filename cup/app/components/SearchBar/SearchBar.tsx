import Image from 'next/image'
import React from 'react'

// type Props = {}

const SearchBar = () => {
    return (
        <form className=" sm:ml-5">
            <div className="relative flex justify-center sm:flex-none sm:justify-normal">
                <div className="backdrop-blur-0 absolute inset-y-0 size-8 sm:size-12 start-7 sm:start-0 flex items-center ps-3 pointer-events-none">
                    <Image src={"/search.svg"} width={25} height={25} alt="" priority />
                </div>
                <input type="search" className="block w-10/12 sm:w-5/6 p-4 ps-10 sm:ps-12 h-8 sm:h-12 text-lg bg-zinc-900 dark:bg-zinc-200 dark:bg-opacity-10 dark:text-zinc-200 bg-opacity-10 text-black font-light rounded-md focus:outline-none focus:bg-opacity-15" placeholder="Search..." required />
            </div>
        </form>
    )
}

export default SearchBar