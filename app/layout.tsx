'use client';

import { chivo } from './ui/fonts';
import Image from 'next/image';
import Link from 'next/link';
import "./globals.css";
import NavLinks from './ui/dashboard/navlinks';
import { MdOutlineChevronLeft, MdOutlineDashboard, MdOutlineSupportAgent, MdToggleOn } from 'react-icons/md';

//import SideNav from '@/app/ui/dashboard/sidenav';
 
export default  function Layout({ children }: { children: React.ReactNode }) {
      

  return (
    <html lang="en">
        <head>
            <title>Techrity Dashboard</title>
        </head>
        <body className={`${chivo.className} antialiased`}>
            <div className="lg:min-h-screen  md:overflow-hidden bg-grey flex flex-col min-h-full md:flex-row md:h-full lg:h-5/6">

                {/**LEFT BAR     LEFT BAR       LEFT BAR          LEFT BAR.      LEFT BAR */}

                <div className="w-full flex md:flex-col gap-2 bg-purple py-8 px-2 md:w-52 lg:w-60 h-full sticky top-0 md:relative md:top-0">
                    <div className='flex gap-4 justify-between pl-6 items-center lg:mb-12'>
                        <Image src="/logo.svg" alt="logo" height={27} width={116} 
                            className='w-3/4'
                        />
                        <MdOutlineDashboard className="w-1/4 text-grey text-25px" />
                    </div>

                    <NavLinks />

                    <div className='bg-[#ffffff22] rounded-lg flex flex-col gap-4 p-4 lg:mt-12'>
                        <MdOutlineSupportAgent className="text-white text-25px" />
                        <p className="text-sm font-bold">Got some questions, enquiries or need help?</p>
                        <Link href="" className='text-yellow text-sm underline hover:underline-none'>Visit Mently Help Desk Here</Link>
                    </div>

                    <div className='flex items-center justify-between px-4 mt-6'>
                        <p className="font-bold text-sm">Switch to Classic Mode</p>
                        <MdToggleOn className='text-25px' />
                    </div>
                </div>


                {/**BODY      BODY           BODY              BODY             BODY */}

                <div className='w-full '>
                    <div className=' bg-light-grey py-4 flex justify-end items-center lg:gap-12 lg:pr-12'>
                        <Image src="/notifications.svg" alt="notifications" width={24} height={24} className='' />
                        <div className='flex gap-6'>
                            <div className='flex gap-2 items-center'>
                                <Image src="/user.svg" alt="profile picture" height={45} width={45} 
                                    className="bg-light-purple p-2 rounded-full" 
                                />
                                <div className='text-grey2'>
                                    <p className='text-sm font-bold'>Techrity  Foun...</p>
                                    <p className='text-sm font-light'>Member</p>
                                </div>
                                <MdOutlineChevronLeft className='text-gray-300 text-lg -rotate-90 p-2 rounded-md bg-purple' />
                            </div>
                        </div>
                    </div>

                    <div className="flex-grow py-2 px-2 lg:px-12 md:overflow-y-scroll">{children}</div>
                </div>

            </div>
        </body>
    </html>
  );
}