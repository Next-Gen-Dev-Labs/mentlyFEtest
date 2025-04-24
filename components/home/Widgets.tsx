'use client'
import React, { useState } from 'react'
import { Icons } from '../Icons'
import WidgetModal from './WidgetsDropdown'

const Widgets = () => {
  const [showNotificationBar,setShowNotificationBar] = useState<boolean>(false)

  const openModal =()=>{
    setShowNotificationBar(true)
  }

  const closeNotification =()=>{
    setShowNotificationBar(false)
  }

  return (
    <div className='flex flex-col  place-self-end'>
        <div className="flex gap-6 items-center">
            <Icons.widget/>
            <div className="border border-[#6F01D0] p-1 bg-[#6F01D01C]">
                <Icons.thumbnail/>
            </div>
            <p onClick={openModal} className='text-base cursor-pointer text-[#1F0954] font-chivo font-bold'>Manage Widgets</p>
            {showNotificationBar && <WidgetModal closeNotification={closeNotification} showNotificationBar={showNotificationBar}/> }
        </div>
    </div>
  )
}

export default Widgets
