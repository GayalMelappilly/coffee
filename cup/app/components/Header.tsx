import React from 'react'
import Logo from '../components/Logo/Logo'
import SearchBar from './SearchBar/SearchBar'
import { BellRing } from './Icons/BellRing'
import { User } from './Icons/User'
import PublishButton from './Buttons/publishButton'

type Props = {}

const Header = (props: Props) => {
    return (
        <div className='flex my-5 w-screen'>
            <div className='absolute h-24 w-screen inset-0 -z-10'></div>
            <Logo />
            <SearchBar />
            <div className='ml-auto flex mx-20'>
                <PublishButton />
                <BellRing />
                <User />
            </div>
        </div>
    )
}

export default Header