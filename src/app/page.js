"use client"
import SideMenu from './components/sidebar';
import React from 'react'
import { useState } from 'react'
import MainPage from './components/Main';
import { useGlobalState } from './context';
import ManageWidgetsDrawer from './components/WidgetDrawer';

function Page() {
  const {showSideBar} = useGlobalState()

  return (


  <main className="min-h-screen dark:bg-gray-900 dark:text-white bg-gray-100 text-black relative">
      <div className='flex w-full'>
        <div className={ !showSideBar ?'w-3/20 max-xl:w-full max-xl:hidden' : 'w-full'}>
          <SideMenu/>

        </div>
        
        <MainPage className="max-xl:w-full"/>
      </div>

      <ManageWidgetsDrawer/>
    

     

  </main>
      
  )
}

export default Page
