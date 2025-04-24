'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useGlobalBoard } from './controller'
import Link from 'next/link'

const Sidebar = () => {
    const { boardChanger, setBoardChanger } = useGlobalBoard()
    const [toggleSidebar, setToggleSidebar] = useState(true)

    const sidebarItems = [
        { id: 'Dashboard', iconSrc: '/home.svg', label: 'Dashboard' },
        { id: 'Programs', iconSrc: '/book.svg', label: 'Programs' },
        { id: 'Activities', iconSrc: '/bubble.svg', label: 'Activities' },
        { id: 'Users', iconSrc: '/users.svg', label: 'Users' },
        { id: 'Forums', iconSrc: '/clipboard-text.svg', label: 'Forums' },
        { id: 'Finances', iconSrc: '/empty-wallet.svg', label: 'Finances' },
        { id: 'Rewards', iconSrc: '/award.svg', label: 'Rewards' },
        { id: 'Analytics', iconSrc: '/diagram.svg', label: 'Analytics' },
        { id: 'Settings', iconSrc: '/setting-2.svg', label: 'Settings' },
        { id: 'Logout', iconSrc: '/logout.svg', label: 'Logout' },
    ]

    const handleChange = (itemId) => {
        setBoardChanger(itemId || 'Dashboard')
    }

    return (
        <div className={`fixed z-[999] top-[0] bg-[#340260] h-full transition-all duration-300 px-2 ${toggleSidebar ? 'w-[15.5%] md:w-[7.5%] lg:w-[4.5%] overflow-x-hidden' : 'w-[58%] md:w-[35%] lg:w-[18.75%] overflow-x-hidden'}`}>
            <div className='flex justify-between items-center py-4'>
                <Link href='/' className={`${toggleSidebar ? 'hidden' : 'block'}`}>
                    <Image
                        src='/company-logo.svg'
                        alt='company-logo'
                        width={116}
                        height={27}
                    />
                </Link>
                <button onClick={() => setToggleSidebar(prev => !prev)} className={`${toggleSidebar ? 'text-center w-full pl-2' : 'pl-0'}`}>
                    <Image
                        src='/sidebar-toggle.svg'
                        alt='toggle-icon'
                        width={24}
                        height={24}
                    />
                </button>
            </div>

            <div className={`flex flex-col items-center px-1 mt-7 relative ${toggleSidebar ? 'gap-3' : 'gap-1'}`}>
                {sidebarItems.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleChange(item.id)}
                        className={`relative flex items-center justify-start gap-10 p-2 rounded-md transition-all duration-300 w-full
                            ${boardChanger === item.id
                                ? 'bg-white text-[#340260]'
                                : 'bg-transparent text-white hover:bg-white/10'}
                        `}
                    >
                        <Image
                            src={item.iconSrc}
                            alt={`${item.label} icon`}
                            width={20}
                            height={20}
                            className='w-[20px] h-[20px]'
                        />
                        <p className={`${toggleSidebar ? 'hidden' : 'block'} text-base`}>
                            {item.label}
                        </p>

                        {item.label === 'Analytics' && (
                            <span
                                className={`absolute top-0 ${toggleSidebar ? 'left-12' : 'left-[60%]'} text-[10px] px-1 py-0.5 rounded-full bg-[#0214BD38] text-white`}
                            >
                                Coming Soon
                            </span>
                        )}
                    </button>
                ))}
            </div>

            <div className={`mt-10 py-4 px-2 bg-[rgba(225,225,225,12%)] rounded ${toggleSidebar ? 'hidden' : 'block'}`}>
                <Image src='/user-tag.svg' alt='user-tag' width={20} height={20} className='mb-5' />
                <p className='text-white mb-4 text-xs font-bold'>Got some questions, enquiries or need help?</p>
                <Link href='/'>
                    <span className='text-[#F0C074] underline text-[10px]'>Visit Mently Help Desk Here</span>
                </Link>
            </div>

            <div className={`flex justify-between items-center mt-10 mb-12 ${toggleSidebar ? 'hidden' : 'block'}`}>
                <p className='text-white text-xs font-bold'>Switch to Classic Mode</p>
                <Image src='/Toggle.svg' alt='toggle-btn' width={32.15} height={19} />
            </div>
        </div>
    )
}

export default Sidebar
