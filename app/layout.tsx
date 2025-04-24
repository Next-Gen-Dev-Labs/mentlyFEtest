'use client';

import { chivo } from './ui/fonts';
import Image from 'next/image';
import "./globals.css";
import Leftbar from './ui/dashboard/leftbar';
import { MdOutlineChevronLeft } from 'react-icons/md';

//import SideNav from '@/app/ui/dashboard/sidenav';
 
export default  function Layout({ children }: { children: React.ReactNode }) {
      

  return (
    <html lang="en">
        <head>
            <title>Techrity Dashboard</title>
        </head>
        <body className={`${chivo.className} antialiased`}>
            <div className="lg:min-h-screen  md:overflow-hidden bg-grey flex flex-col min-h-full md:flex-row md:h-full lg:h-5/6">

               <Leftbar />

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