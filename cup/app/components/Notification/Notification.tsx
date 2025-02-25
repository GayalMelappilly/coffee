import React from 'react'
import { Poppins } from 'next/font/google'
import { format } from 'timeago.js'
import { notifications } from '@/app/test/datasets/notifications'
import { convertTime } from '@/app/utils/convertTime'

type Props = {}

const poppins = Poppins({
    weight: '800',
    style: "italic",
    subsets: ["latin"]
})

const poppins_regular = Poppins({
    weight: '600',
    style: "italic",
    subsets: ["latin"]
})

const Notification = (props: Props) => {
    return (
        <div id="dropdownHover" className="absolute top-20 flex justify-end h-full overflow-auto">
            <div className={`w-4/12 bg-white max-h-80 right-0 rounded-md`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                    {notifications.map((notification) => (
                        <li className='m-3 hover:bg-opacity-1 rounded-md hover:bg-amber-700 hover:bg-opacity-40 p-4 hover:text-amber-600 cursor-pointer shadow-[inset_0px_2px_10px_1px_rgba(0,_0,_0,_0.2)]'>
                            <div className='flex gap-3'>
                                <img src={notification.profile_pic} className='size-10 rounded-md' alt="" />
                                <h1 className={`text-md text-black pl-1 ${poppins_regular.className}`}>{notification.message}</h1>
                            </div>
                            <p className='mt-2 text-black'>{format(notification.timestamp)}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Notification