'use client'

import React, { useState } from 'react'
import Signup from '../components/Signup/Signup'
import Banner from '../components/Banner/Banner'
import { useMutation } from '@tanstack/react-query'
import { registerUser } from '@/pages/api/auth/action'
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/authProvider'

// type Props = {}

const page = () => {

  const router = useRouter()

  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const mutation = useMutation({
      mutationFn: registerUser,
      onSuccess: () => {
          router.push("/sign-in")
      },
      onError: (error) => {
          console.log("REGISTRATION ERRROR : ", error)
      }
  })

  console.log(username, email, password)

  const HandleSignUp = (e: React.FormEvent) => {
      e.preventDefault();
      mutation.mutate({ username: username, email: email, password: password });
  }


  if (mutation.isPending) return <p>Registering...</p>;
  if (mutation.isError) return <p>Error: {mutation.error.message}</p>;
  if (mutation.isSuccess) return <p>Registration Successful!</p>;


  return (
    <div className='flex'>
        <Signup 
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          HandleSignUp={HandleSignUp}
        />
        <Banner />
    </div>
  )
}

export default page