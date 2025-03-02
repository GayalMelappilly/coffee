'use client'

import React, { useEffect, useState } from 'react'
import SidePanel from '../components/Home/SidePanel'
import { robotoItalic, robotoRegular } from '../components/Fonts/Fonts'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getCurrentUser } from '@/pages/api/user/action'
import { useAuth } from '../context/authProvider'

type Props = {}

const page = (props: Props) => {

    const [open, setOpen] = useState(false)
    const [userData, setUserData] = useState("")

    const { accessToken, refreshToken, setTokens } = useAuth()

    const { data, isLoading, isError } = useQuery({
        queryKey: ['get'],
        queryFn: () => getCurrentUser(accessToken!),
        enabled: !!accessToken
    })

    return (
        <>
            <div className="flex">
                <div className="hidden sm:block sm:w-2/12">
                    <SidePanel open={open} setOpen={setOpen} />
                </div>
                {data && (
                    <div>
                        <h1 className={`mt-12 ml-24 text-6xl ${robotoItalic.className}`}>{data.username}</h1>
                        <p className={`mt-5 ml-24 text-3xl ${robotoRegular.className}`}>{data.email}</p>
                    </div>
                )}
            </div>
            {/* <Discussions /> */}
        </>
    )
}

export default page