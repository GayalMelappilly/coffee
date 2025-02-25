import Image from 'next/image'
import React from 'react'

// type Props = {}

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen w-screen sm:w-7/12'>
        <Image 
          src={'/dino_loading.png'}
          alt=''
          height={300}
          width={300}
          className='object-contain'
        />
    </div>
  )
}

export default Loading