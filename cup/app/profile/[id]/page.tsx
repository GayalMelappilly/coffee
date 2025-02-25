"use client"

import SidePanel from '@/app/components/Home/SidePanel'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

type Props = {}

const page = (props: Props) => {

    const params = useParams();
    const username = params?.id as string;

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="flex">
                <div className="hidden sm:block sm:w-2/12">
                    <SidePanel open={open} setOpen={setOpen} />
                </div>
                <h1 className='mt-12 ml-20'>USERNAME : {username}</h1>
            </div>
            {/* <Discussions /> */}
        </>
    )
}

export default page