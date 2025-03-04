"use client"

import React, { useState } from 'react'
import PostTitle from '../components/CreatePost/PostTitle'
import CoverImage from '../components/CreatePost/CoverImage'
import PostContent from '../components/CreatePost/PostContent'
import { bebasNeue } from '../components/Fonts/Fonts'
import { useMutation } from '@tanstack/react-query'
import { createPost } from '@/pages/api/post/actions'

// type Props = {}

const Page = () => {

  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const mutation = useMutation({
    mutationFn: createPost
  })

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ title: title, content: content, topics: [1], cover_image: image });
  }

  return (
    <div className='flex-row h-screen mt-14 w-10/12 mx-auto'>
      <div className='flex-col-reverse flex sm:flex-row sm:flex justify-center gap-5'>
        <PostTitle title={title} setTitle={setTitle} />
        <CoverImage image={image} setImage={setImage} />
      </div>
      <div className='flex-row sm:flex justify-center gap-5'>
        <PostContent content={content} setContent={setContent} />
        <button onClick={(e) => handlePublish(e)} className={`hover:scale-105 hover:bg-opacity-35 duration-300 mt-5 bg-blue-600 bg-opacity-25 p-3 pt-5 w-full sm:w-auto text-blue-600 border-none text-4xl sm:text-5xl ${bebasNeue.className} px-20 rounded-md`}>
          PUBLISH
        </button>
      </div>
    </div>
  )
}

export default Page