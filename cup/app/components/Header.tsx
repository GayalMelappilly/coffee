'use client'

import Logo from '../components/Logo/Logo'
import SearchBar from './SearchBar/SearchBar'
import { BellRing } from './Icons/BellRing'
import { User } from './Icons/User'
import PublishButton from './Buttons/PublishButton'
import SidePanel from './Home/SidePanel'

type Props = {}

const Header = (props: Props) => {

    return (
        <>
            <div className='flex my-5 w-screen'>
                <div className='block sm:hidden'>
                    <SidePanel />
                </div>
                <Logo />
                <div className='hidden sm:block w-2/5'>
                    <SearchBar />
                </div>
                <div className='ml-auto flex mx-2 sm:mx-20 sm:ml-auto'>
                    <PublishButton />
                    <BellRing />
                    <User />
                </div>
            </div>
            <div className='sm:hidden block w-full'>
                <SearchBar />
            </div>
        </>
    )
}

export default Header