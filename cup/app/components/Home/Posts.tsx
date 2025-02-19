import React from 'react'
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

const unkempt = Unkempt({
  weight: '700',
  subsets: ['latin']
})

type Props = {}

const Posts = (props: Props) => {
  return (
    <div className='w-6/12 h-fit sm:ml-14 sm:mt-10 px-5'>
      {posts.map((post) => (
        <div className='bg-white mb-5 rounded-md p-5 shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.19)]'>
          <div className='profile-section flex gap-3 mb-5'>
            <img src={post.author.profile_url} className='rounded-md size-10' alt="" />
            <div>
              <h2>{post.author.name}</h2>
              <p className='text-xs text-zinc-800 opacity-90'>{`${convertTime(post.front_matter.timestamp)} (${format(post.front_matter.timestamp)})`}</p>
            </div>
          </div>
          {post.cover_image && (
            <div className='mb-5'>
              <img src={post.cover_image} className='w-10/12 mx-auto rounded-md' alt="" />
            </div>
          )}
          <h1 className={`ml-14 text-3xl ${roboto.className}`}>{post.title}</h1>
          <div className='flex gap-2 ml-14 my-1 mb-3'>
            {post.tags.map((tag) => (
              <p className='text-zinc-600 hover:bg-pink-600 hover:text-pink-600 hover:bg-opacity-10 hover:cursor-pointer hover:rounded-md px-2 py-1'>#{tag}</p>
            ))}
          </div>
          <div className='ml-14'>
            <div className='flex'><BiLike className='fill-red-500 size-6 hover:cursor-pointer hover:scale-110' />
              <p className={`text-xl  ${unkempt.className}`}>
                &nbsp;{post.reactions.likes}
              </p>
            </div>
            <div className='flex'><CgComment className='fill-red-500 size-6 hover:cursor-pointer hover:scale-110' />
              <p className={`text-xl  ${unkempt.className}`}>
                &nbsp;{post.reactions.comments}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Posts