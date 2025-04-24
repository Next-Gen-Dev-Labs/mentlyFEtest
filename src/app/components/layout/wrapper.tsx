'use client'
import { useEffect, useState } from 'react'
import React from 'react'
import { Slider } from './slider';
import { MenuBar } from './Menubar';
import { usePathname } from 'next/navigation';
import { Preloader } from './Preloader';
interface WrapperProps {
  children: React.ReactNode | null; 
}

export const Wrapper:React.FC<WrapperProps> = ({ children }) => {
  const pathname = usePathname()
  
  const [showPreloader, setShowPreloader] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle =()=> {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handlePreloaderFn = () => setShowPreloader('hidden');

    if (!['/'].includes(pathname)) {
      handlePreloaderFn();
    }

    const time = 3200;
    const firstTimeLoad = sessionStorage.getItem('Load') === 'true';

    if (firstTimeLoad) {
      handlePreloaderFn();
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem('Load', 'true');
      handlePreloaderFn();
    }, time);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className={`relative w-screen ${isOpen ? 'h-svh' :'min-h-svh'} lg:h-screen overflow-hidden z-30`}>
      <Preloader visibility={showPreloader}/>
      <Slider isOpen={isOpen} onClose={handleToggle}/>
      <div className='w-full flex fixed top-0 left-0 justify-end'>
        <MenuBar user='Techrity Founder' role='Member' Click={handleToggle}/>
      </div>
      <div className='w-full lg:w-[calc(100%-240px)] lg:float-end p-[1rem] lg:p-[2rem]'>
        <div className='w-full h-20'/>
        {children}
      </div>
    </div>  
  )
}
