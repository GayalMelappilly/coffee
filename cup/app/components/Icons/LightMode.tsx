import React from 'react'

// type Props = {}

const LightMode = () => {
    return (
        <div>
            <div className='bg-black bg-opacity-80 rounded-md size-12 p-2 mr-5 stroke-yellow-800'>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#f59e0b" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="feather feather-sun size-8 hover:filter hover:drop-shadow-[0_0_10px_#f59e0b] hover:scale-110 hover:rotate-180 duration-300">
                    <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
            </div>
        </div>
    )
}

export default LightMode