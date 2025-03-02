"use client"

import React, { FC, useEffect, useRef } from 'react'
import { poppinsLightRegular } from '../Fonts/Fonts'; 

type Props = {
    content: string,
    setContent: (content: string) => void
}

const PostContent:FC<Props> = ({content, setContent}) => {

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleInput = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto'; // Reset height
            textarea.style.height = `${textarea.scrollHeight}px`; // Dynamically adjust height
        }
    };

    return (
        <div className='rounded-md bg-white h-fit w-full mt-5 shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.19)]'>
            <div className='flex justify-start pt-5 px-10'>
                <p className='opacity-40 text-xs sm:text-base'>• Use single backticks for `inline code` &nbsp; • Use triple backticks for ```multi-line code blocks```</p>
            </div>
            <textarea name="" id="" placeholder='Content here...' ref={textareaRef}
                onInput={handleInput}
                onChange={(e)=>setContent(e.target.value)}
                value={content}
                className={`w-11/12 min-h-[50px] resize-none overflow-hidden px-5 m-5 rounded-lg text-black outline-none transition-all duration-200" ${poppinsLightRegular.className}`} 
            />
        </div>
    )
}

export default PostContent