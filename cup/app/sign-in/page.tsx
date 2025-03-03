'use client'

import React, { useState } from 'react'
import Banner from '../components/Banner/Banner'
import Login from '../components/Login/Login'
import { useMutation } from '@tanstack/react-query'
import { loginUser } from '@/pages/api/auth/action'
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/authProvider'

// type Props = {}

const page = () => {

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const {accessToken, setTokens} = useAuth()

    const router = useRouter()

    const mutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            setTokens(data.access_token)
            router.push('/')
        },
        onError:(error) => {
            console.log("Login Error : ",error.message)
        }
    })

    const HandleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        mutation.mutate({username: username, password: password})
    }

    return (
        <div className='flex'>
            <Login 
                username={username} 
                setUsername={setUsername} 
                password={password} 
                setPassword={setPassword} 
                HandleLogin={HandleLogin} 
            />
            <Banner />
        </div>
    )
}

export default page