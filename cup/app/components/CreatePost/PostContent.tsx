"use client"

import React, { useRef } from 'react'
import { Poppins } from "next/font/google";
import { Code } from '../Icons/CodeIcon';

type Props = {}

const poppins = Poppins({
    weight: "300",
    style: 'normal',
    subsets: ['latin']
})

const PostContent = (props: Props) => {

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleInput = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto'; // Reset height
            textarea.style.height = `${textarea.scrollHeight}px`; // Dynamically adjust height
        }
    };

    return (
        <div className='rounded-md bg-white h-fit w-10/12 mt-5 shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.19)]'>
            <div className='flex justify-start p-5 px-10'>
                <p className='opacity-60'>• Use single backticks for `inline code` &nbsp; • Use triple backticks for ```multi-line code blocks```</p>
            </div>
            <textarea name="" id="" placeholder='Content here...' ref={textareaRef}
                onInput={handleInput}
                className={`w-11/12 min-h-[50px] resize-none overflow-hidden px-5 m-5 rounded-lg text-black outline-none transition-all duration-200" ${poppins.className}`} />
        </div>
    )
}

export default PostContent