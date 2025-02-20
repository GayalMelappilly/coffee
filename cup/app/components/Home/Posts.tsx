"use client"

import React, { useState } from 'react'
import { posts } from '../../test/datasets/posts'
import { Roboto, Unkempt } from 'next/font/google'
import { format } from 'timeago.js'
import { convertTime } from '@/app/utils/convertTime'
import { ThumbsUp } from '../Icons/ThumbsUp'
import { CgComment } from "react-icons/cg";
import { BiLike } from "react-icons/bi";

const roboto = Roboto({
  weight: "700",
  style: 'normal',
  subsets: ['latin']
})

const roboto_regular = Roboto({
  weight: "400",
  subsets: ['latin']
})

const unkempt = Unkempt({
  weight: '700',
  subsets: ['latin']
})

type Props = {}

const Posts = (props: Props) => {

  const [showAll, setShowAll] = useState(false)

  return (
    <div className='w-full sm:w-6/12 h-fit mt-6 sm:ml-14 sm:mt-10 px-5'>
      {posts.map((post) => (
        <div className='bg-white mb-5 rounded-md p-5 shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.19)]'>
          <div className='profile-section flex gap-3 mb-5'>
            <img src={post.author.profile_url} className='rounded-md size-8 sm:size-10' alt="" />
            <div className='-mt-0.5 sm:-mt-0'>
              <h2 className='text-sm sm:text-base'>{post.author.name}</h2>
              <p className='text-xs text-zinc-800 opacity-90'>{`${convertTime(post.front_matter.timestamp)} (${format(post.front_matter.timestamp)})`}</p>
            </div>
          </div>
          {post.cover_image && (
            <div className='mb-5'>
              <img src={post.cover_image} className='w-10/12 mx-auto rounded-md' alt="" />
            </div>
          )}
          <h1 className={`ml-6 sm:ml-14 text-xl sm:text-3xl ${roboto.className}`}>{post.title}</h1>
          <div className='flex sm:gap-2 ml-5 sm:ml-14 my-1 mb-3'>
            {post.tags.map((tag) => (
              <p className='text-zinc-600 text-xs sm:text-base hover:bg-pink-600 hover:text-pink-600 hover:bg-opacity-10 hover:cursor-pointer hover:rounded-md px-1 py-0.1 sm:px-2 sm:py-1'>#{tag}</p>
            ))}
          </div>

          {/* Reactions */}
          <div className='ml-6 my-4 sm:my-0 sm:ml-14 flex gap-4'>
            <div className='flex'><BiLike className='size-4 sm:size-6 hover:cursor-pointer hover:scale-110' />
              <p className={`text-xs sm:text-xl  ${unkempt.className}`}>
                &nbsp;{post.reactions.likes}
              </p>
            </div>
            <div className='flex'><CgComment className='sm:mt-1 size-4 sm:size-6 hover:cursor-pointer hover:scale-110' />
              <p className={`text-xs sm:text-xl  ${unkempt.className}`}>
                &nbsp;{post.reactions.comments}
              </p>
            </div>
          </div>

          {/* Comment */}
          <div className=''>
            {post.comments.slice(0, 2).map((comment, index) => (
              <div className=''>
                <div className='flex my-2 sm:my-5 gap-2'>
                  <img src={comment.profile_img} className='rounded-md size-8 sm:size-10' alt="" />
                  <div className='h-3/4 w-full bg-zinc-200 bg-opacity-20 rounded-md p-3 shadow-[inset_0px_2px_10px_1px_rgba(0,_0,_0,_0.2)] hover:bg-black hover:bg-opacity-10'>
                    <div className='profile-section flex gap-3 mb-2'>
                      <div className='sm:block flex gap-1 sm:gap-0'>
                        <h2 className='text-xs sm:text-base'>{comment.user}</h2>
                        <p className='text-xs text-zinc-800 opacity-90'>{format(comment.timestamp)}</p>
                      </div>
                    </div>
                    <h3 className={`${roboto_regular.className} text-sm sm:text-base font-light ml-2`}>{comment.comment}</h3>
                    {/* <h1 className='flex'><BiLike className='mt-1 size-4' />{comment.likes}</h1> */}
                  </div>
                </div>
                {index == 1 && post.comments.length > 2 && (
                  <div>
                    <button className='ml-6 px-5 text-xs sm:text-base py-1 rounded-md hover:text-blue-800 hover:underline' onClick={() => { setShowAll(true) }}>Sell all {post.comments.length} comments</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Posts