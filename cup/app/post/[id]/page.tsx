"use client"

import { poppins, poppinsBold } from '@/app/components/Fonts/Fonts';
import SidePanel from '@/app/components/Home/SidePanel';
import Loading from '@/app/components/Loading/Loading';
import { getPost } from '@/pages/api/post/actions';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

// type Props = {}

const Page = () => {

    const params = useParams();
    const id = params?.id as string;

    const [open, setOpen] = useState(false)
    const [postDetails, setPostDetails] = useState(null)

    const { data, isLoading, isError } = useQuery({
        queryKey: ['post'],
        queryFn: () => getPost(id),
        enabled: !!id
    })

    console.log(data)

    if (isLoading) return <Loading />;
    if (isError) return <div>Error fetching posts</div>;


    return (
        <>
            <div className="flex">
                <div className="hidden sm:block sm:w-2/12">
                    <SidePanel open={open} setOpen={setOpen} />
                </div>
                {data && (
                    <div className='flex-row mx-5 sm:mx-28'>  
                        { data.cover_image && (
                            <Image src={data.cover_image} alt='' width={600} height={300} />
                        )}
                        <h1 className={`mt-10 text-4xl sm:text-7xl bg-white dark:bg-zinc-900 dark:text-zinc-200 inline-flex p-5 rounded-md shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.19)] ${poppinsBold.className}`}>{data.title}</h1>
                        <p className={`mt-5 text-sm sm:text-lg bg-white dark:bg-zinc-900 dark:text-zinc-200 inline-flex p-5 rounded-md shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.19)] ${poppins.className}}`}>{data.content}</p>
                    </div>
                )}
            </div>
            {/* <Discussions /> */}
        </>
    )
}

export default Page