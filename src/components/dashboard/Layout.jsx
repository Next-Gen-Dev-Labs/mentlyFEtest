"use client"

import React from 'react'
import SideBar from './sidebar/SideBar'
import Topbar from './topbar/Topbar'
import { useSelector } from 'react-redux'
import ManageWidget from '../manageWidget/ManageWidget'

const Layout = ({children}) => {
  const showWidget = useSelector((state) => state.widget.showWidget);
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  

  return (
    <div className='grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-0 h-[100vh] relative z-10  ' >
        <div className="bg-indigo-200 animate-fade-down h-screen overflow-y-scroll myScrollBar hidden lg:grid ">
            <SideBar />
        </div>
        <div className="grid grid-cols-1 place-content-start h-screen overflow-y-scroll myScrollBar ">

        <div className="h-[82px] animate-fade-down  flex items-center "> <Topbar /> </div>
        <div className="animate-fade-down "> {children} </div>

        </div>
        {
            showWidget && <ManageWidget  show={showWidget}  />
        }

{
      isOpen &&
      <div className="bg-indigo-200 animate-fade-down h-screen overflow-y-scroll myScrollBar fixed top-0 left-0 z-[60]  w-[240px]  ">
            <SideBar />
        </div>
    }
    </div>
  )
}

export default Layout