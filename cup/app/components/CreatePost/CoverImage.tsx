import React from 'react'

type Props = {}

const CoverImage = (props: Props) => {
    return (
        <div className='bg-white rounded-md p-10 h-[20.1rem] flex items-end ml-5 shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.19)]'>
            <a href="#_" className="relative inline-flex items-center justify-center p-4 mx-5 px-24 py-1 overflow-hidden font-medium transition duration-300 ease-out border-1 border-red-500 rounded-md shadow-[inset_0px_2px_10px_1px_rgba(0,_0,_0,_0.2)] group">
                <span className="absolute -inset-x-1 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-1 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute flex items-center justify-center h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease font-normal">Upload cover image</span>
                <span className="relative invisible">Button Text</span>
            </a>
        </div>
    )
}

export default CoverImage