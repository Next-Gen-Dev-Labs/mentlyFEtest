'use client';

import { chivo } from './ui/fonts';
import "./globals.css";
import Topbar from './ui/dashboard/topbar';
import SideNav from './ui/dashboard/sidenav';
 
export default  function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <head>
            <title>Techrity Dashboard</title>
        </head>
        
        <body className={`${chivo.className} antialiased`}>
            <div className="lg:h-screen  md:overflow-hidden bg-[#F4F5FA] flex flex-col md:flex-row">

                <SideNav />

                {/**BODY      BODY           BODY              BODY             BODY */}

                <div className='w-5/6 h-screen overflow-y-scroll'>
                    <Topbar />

                    <div className="flex-grow py-2 px-2 lg:px-12 md:overflow-y-scroll">{children}</div>
                </div>

            </div>
        </body>
    </html>
  );
}