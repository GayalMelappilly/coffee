"use client"

import React, { useEffect, useState } from 'react'
import { Poppins } from "next/font/google";
import { Hashtags } from '@/app/test/datasets/hashtags';

type Props = {}

const poppins = Poppins({
    weight: "900",
    style: 'italic',
    subsets: ['latin']
})

const poppins_sm = Poppins({
    weight: "400",
    style: 'normal',
    subsets: ['latin']
})

const PostTitle = (props: Props) => {

    const [tags, setTags] = useState<string[]>([])
    const [searchTag, setSearchTag] = useState("")
    const [selectedTags, setSelectedTags] = useState<string[]>([])

    const hashtags = Hashtags

    useEffect(() => {
        const search: string = searchTag.toLowerCase()
        var matchingTags: any = []
        if (search != "") {
            matchingTags = hashtags.filter(hashtag =>
                hashtag.toLowerCase().includes(search)
            )
        }
        setTags(matchingTags)
    }, [searchTag])

    const userTags = (tag: string, command: string) => {
        if (command == "add") {
            setSelectedTags((prev) => [...prev, tag])
        } else if (command == "remove") {
            setSelectedTags((prev) => prev.filter((prevTag) => prevTag !== tag));
        }
        setSearchTag("")
    }

    return (
        <div className='rounded-md bg-white h-fit w-full shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.19)]'>
            <textarea name="" id="" rows={2} placeholder='Title here...' className={`resize-none text-6xl outline-none bg-transparent p-10 rounded-md ${poppins.className}`} />
            <div>
                <div className='flex p-5 pl-10 pb-5'>
                    {selectedTags.length > 0 && (
                        <div className='flex gap-4 py-2'>
                            {selectedTags.map((tags) => (
                                <p className='bg-pink-500 text-pink-600 hover:scale-105 duration-300 bg-opacity-20 px-1 h-fit rounded-md text-lg cursor-pointer flex'>{tags}
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 24 24" fill='#E91E63' className='mt-2 ml-2 hover:scale-125 duration-300' onClick={() => userTags(tags,"remove")}>
                                        <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
                                    </svg>
                                </p>
                            ))}
                        </div>
                    )}
                    <input className={`outline-none h-14 w-4/6 p-5 pl-4 pb-8 ${selectedTags.length > 4 ? 'hidden' : 'block'} text-base rounded-md bg-transparent ${poppins_sm.className}`} onChange={(e) => setSearchTag(e.target.value)} value={searchTag} type="text" placeholder={`${selectedTags.length > 0 ? 'Add more...': 'Add upto 5 tags...'}`} />
                </div>
                {tags.length > 0 && (
                    <div className={`max-h-52 w-1/4 ml-10 overflow-y-auto p-2 px-5 pb-2 rounded-md list-none shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.19)]`}>
                        <ul className=' divide-gray-300'>
                            {tags.map((tag, index) => (
                                <li className='my-3 hover:bg-pink-500 hover:text-pink-600 hover:bg-opacity-20 px-1 rounded-md hover:w-fit' onClick={() => userTags(tag, "add")}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className='h-5'></div>
            </div>
        </div>
    )
}

export default PostTitle