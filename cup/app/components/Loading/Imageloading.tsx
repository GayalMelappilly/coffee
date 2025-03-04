import Image from 'next/image'
import React from 'react'

// type Props = {}

const Imageloading = () => {
    return (
        <div className='flex justify-center pt-4'>
            <Image
                src={'/dino-loading-2.png'}
                alt=''
                height={150}
                width={150}
                className='object-contain'
                priority
            />
        </div>
    )
}

export default Imageloading