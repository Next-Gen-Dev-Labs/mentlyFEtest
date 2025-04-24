import React from 'react'
import Image from 'next/image'
import Notify from '@/assets/icons/notification.svg'
import Logo from '@/assets/icons/Clip path group.svg'
export default function Head() {
    return(
        <div className="w-full hidden lg:flex gap-12 justify-end bg-[#FDFDFD] py-5 px-14 " style={{boxShadow: '0px 2px 4px 0px #00000010'}} role="banner">
             <button   className="rounded-full relative">
            
            <Image src={Notify} alt='notification' className="h-6 w-6" data-testid="notification-icon"/>
            <span className="absolute top-3 right-1 h-2 w-2 bg-red-500 rounded-full" data-testid="notification-dot"></span>
          </button>
            
            <div className='flex items-center gap-2' data-testid="profile-section">
                <div className='h-11 w-11 rounded-full bg-[#8B72FC]' data-testid="avatar-container">
                    <Image src={Logo} alt='logo' />
                </div>
                <div>
                        <h3>Techrity  Foun...</h3>
                        <p>Member</p>
                    </div>
                    <div className='w-5 h-5 bg-[#6F01D0] rounded ml-2' data-testid="status-indicator">

                    </div>
            </div>
        </div>
    )
}