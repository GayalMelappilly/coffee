import React from 'react'
import PostTitle from '../components/CreatePost/PostTitle'
import CoverImage from '../components/CreatePost/CoverImage'
import PostContent from '../components/CreatePost/PostContent'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='h-screen mt-14 justify-center px-10'>
      <div className='flex justify-center'>
        <PostTitle />
        <CoverImage />
      </div>
      <PostContent />
    </div>
  )
}

export default page