import React from 'react'

type Props = {}

const SearchBar = (props: Props) => {
    return (
        <form className="w-2/5 ml-5">
            <div className="relative">
                <div className="backdrop-blur-0 absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <img src="search.svg" alt="" />
                </div>
                <input type="search" className="block w-5/6 p-4 ps-12 h-12 text-lg bg-zinc-900 bg-opacity-10 text-black font-light rounded-md focus:outline-none focus:bg-opacity-15" placeholder="Search..." required />
            </div>
        </form>
    )
}

export default SearchBar