import React from 'react'
import Signup from '../components/Signup/Signup'
import Banner from '../components/Banner/Banner'

// type Props = {}

const page = () => {
  return (
    <div className='flex'>
        <Signup />
        <Banner />
    </div>
  )
}

export default page