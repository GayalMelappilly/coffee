import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className='flex items-center justify-center h-screen w-screen sm:w-7/12'>
        <img src="/dino_loading.png" className='size-80 object-contain' alt="" />
    </div>
  )
}

export default Loading