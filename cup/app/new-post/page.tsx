import React from 'react'
import PostTitle from '../components/CreatePost/PostTitle'
import CoverImage from '../components/CreatePost/CoverImage'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='h-screen mt-14 flex justify-center px-10'>
      <div>
        <PostTitle />
      </div>
      <CoverImage />
    </div>
  )
}

export default page