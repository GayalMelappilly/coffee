'use client'

import React, { useState } from 'react'
import SidePanel from '../components/Home/SidePanel'
import { bebasNeue, robotoItalic, robotoRegular } from '../components/Fonts/Fonts'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getCurrentUser } from '@/pages/api/user/action'
import { logoutUser } from '@/pages/api/auth/action'
import { useRouter } from 'next/navigation'

// type Props = {}

const Page = () => {

    const [open, setOpen] = useState(false)

    const router = useRouter()

    const { data } = useQuery({
        queryKey: ["current-user"],
        queryFn: () => getCurrentUser(),
    });

    const mutation = useMutation({
        mutationFn: logoutUser,
        onSuccess: () => {
            router.push('/sign-in')
        },
        onError: (error) => {
            console.log("Error in logout : ", error)
        }
    })

    const HandleLogout = (e: React.FormEvent) => {
        e.preventDefault()
        mutation.mutate()
    }

    return (
        <>
            <div className="flex">
                <div className="hidden sm:block sm:w-2/12">
                    <SidePanel open={open} setOpen={setOpen} />
                </div>
                {data && (
                    <div className='ml-24'>
                        <h1 className={`mt-12 text-6xl dark:text-zinc-100 ${robotoItalic.className}`}>{data.username}</h1>
                        <p className={`mt-5 text-xl dark:text-zinc-100 ${robotoRegular.className}`}>{data.email}</p>
                        <div className='h-36'>

                        </div>
                        <div>
                            <button
                                className={`rounded-md border-red-600 border-2 py-1 px-3 text-red-600 hover:text-white hover:bg-red-600 text-4xl bott ${bebasNeue.className}`}
                                onClick={(e) => HandleLogout(e)}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {/* <Discussions /> */}
        </>
    )
}

export default Page