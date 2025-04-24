'use client'
import React, { useState } from "react";
import Image from "next/image";
import Logo from '@/assets/icons/Frame 1171276268.svg';
import Menu from '@/assets/icons/grid-4.svg';
import Dashboard from '@/assets/icons/Icon (2).svg';
import Program from '@/assets/icons/book.svg';
import Activity from '@/assets/icons/bubble.svg';
import User from '@/assets/icons/Vector.svg';
import Forum from '@/assets/icons/clipboard-text.svg';
import Finance from '@/assets/icons/empty-wallet.svg';
import Reward from '@/assets/icons/award.svg';
import Analytic from '@/assets/icons/diagram.svg';
import Settings from '@/assets/icons/setting-2.svg';
import Logout from '@/assets/icons/logout.svg';
import Icon from '@/assets/icons/user-tag.svg';
import Notify from '@/assets/icons/notification.svg'
import Logo2 from '@/assets/icons/Clip path group.svg'
import Switch from "../reusables/switch";

export default function SideBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar visibility on mobile
    const [isOn, setIsOn] = useState(false);
    const menus = [
        { id: 1, icon: Dashboard, title: 'Dashboard', bg: 'bg-white', text: 'text-[#340260]', round: 'rounded-lg' },
        { id: 2, icon: Program, title: 'Programs' },
        { id: 3, icon: Activity, title: 'Activities' },
        { id: 4, icon: User, title: 'Users' },
        { id: 5, icon: Forum, title: 'Forums' },
        { id: 6, icon: Finance, title: 'Finances' },
        { id: 7, icon: Reward, title: 'Rewards' },
        { id: 8, icon: Analytic, title: 'Analytics' },
        { id: 9, icon: Settings, title: 'Settings' },
        { id: 10, icon: Logout, title: 'Logout' }
    ];

    return (
        <>
            {/* Menu Icon for Mobile and Tablet */}
              
                <div className="w-full flex -top-0.5  items-center justify-between lg:hidden fixed z-50  bg-[#FDFDFD] py-4 px-3" style={{boxShadow: '0px 2px 4px 0px #00000010'}} data-testid="mobile-header">
               <div className="flex items-center gap-2">
               <Image 
                    src={Menu} 
                    alt="Menu" 
                    className="cursor-pointer h-8 w-8 object-cover transition-transform duration-300 hover:scale-110" // Hover animation
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    data-testid="image-menu"
                />
                <Image src={Logo} alt="Logo" />
               </div>
                            
                            <div className='flex items-center gap-2'>
                            <button   className="rounded-full relative">
                                        
                                        <Image src={Notify} alt='notification' className="h-6 w-6"/>
                                        <span className="absolute top-0.5 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                                      </button>
                                <div className='h-11 w-11 rounded-full bg-white border border-[#340260] flex items-center justify-center'>
                                    <Image src={Logo2} alt='logo' />
                            
                                </div>
                                    <div className='w-5 h-5 bg-[#340260] rounded ml-2'>
                
                                    </div>
                            </div>
                        </div>

            {/* Sidebar */}
            <div className={`fixed lg:static w-[240px] lg:w-[100px] xl:w-[240px] top-0 left-0 h-full  bg-[#340260] z-40 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 px-4 md:space-y-[89px] pt-20 md:pt-9 pb-5 md:pb-12`} data-testid="sidebar">
                <div className="flex justify-between ">
                    <Image src={Logo} alt="Logo" className='hidden xl:block' />
                    <Image src={Logo2} alt='logo' className="hidden lg:block xl:hidden"/>
                    <Image 
                        src={Menu} 
                        alt="Menus" 
                        className="cursor-pointer h-6 w-6 object-cover hidden xl:block transition-transform duration-300 hover:scale-110" // Hover animation
                        data-testid="image-menus"
                    />
                </div> 
                <div>
                    <ul className="text-white space-y-1 md:space-y-2 mb-6 md:mb-12">
                        {menus.map((menu) => (
                            <li 
                                key={menu.id} 
                                className={`flex items-center lg:justify-center gap-4 px-4 xl:gap-8 xl:px-8 py-2 md:py-4 hover:bg-white hover:text-[#340260] hover:rounded-lg cursor-pointer ${menu.bg} ${menu.text} ${menu.round}`}
                                data-testid="menu-item"
                            >
                                <Image src={menu.icon} alt={menu.title} className="h-7 xl:h-6 xl:w-6 w-7 object-cover" />
                                {/* Menu title visibility logic */}
                                <p className="text-sm font-semibold lg:hidden xl:block">{menu.title}</p>
                            </li>
                        ))}
                    </ul>
                    <div className='space-y-2.5 md:space-y-5 bg-[#FFFFFF1F] rounded-lg px-2 xl:px-4 py-2.5 mb-8 lg:hidden xl:block'>
                        <Image src={Icon} alt="user" />
                        <h4 className="text-white text-xs font-bold">Got some questions, enquiries or need help?</h4>
                        <p className="text-[10px] underline text-[#F0C074]">Visit Mently Help Desk Here</p>
                    </div>
                    
                        <div className="flex justify-between lg:justify-center xl:justify-between items-center">
                            <p className="text-xs text-white font-bold lg:hidden xl:block">Switch to Classic Mode</p>
                            <div className="flex items-center gap-2">
      <Switch isOn={isOn} handleToggle={() => setIsOn(!isOn)} />
      
    </div>
                        </div>
                   
                </div>
            </div>

            {/* Overlay for Mobile */}
            {isSidebarOpen && (
                <div 
                    data-testid="sidebar-overlay"
                    className="fixed inset-0 bg-opacity-50 z-30 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)} // Close sidebar when clicking outside
                    role="presentation"
                    
                ></div>
            )}
        </>
    );
}