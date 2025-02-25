'use client'

import React from 'react'
import Banner from '../components/Banner/Banner'
import Login from '../components/Login/Login'

// type Props = {}

const page = () => {
    return (
        <div className='flex'>
            <Login />
            <Banner />
        </div>
    )
}

export default page