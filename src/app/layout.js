"use client";

import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import './globals.css';
import { Notification } from "iconsax-react";

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body>
      <div className="flex">
      <Sidebar />
     

{/* Main Content */}
<div className="flex-1 min-h-screen bg-gray-100">
        {/* Header */}
        <header className="flex justify-end items-center bg-white p-4 shadow-md">
          

          {/* Right Section - Notification & User Profile */}
          <div className="flex items-center gap-6">
            {/* Notification Icon */}
            <div className="relative cursor-pointer">
              <Notification size="24" color="#4B5563" />
              <span className="absolute top-0 right-0 bg-red-500 w-2.5 h-2.5 rounded-full"></span>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-2">
              <Image
                src='/images/user-image.svg'
                alt="User Avatar"
                width={44.4}
  height={44}
                className=" rounded-full"
              />
              <div>
                <span className="text-gray-700 font-semibold block">
                  Godwin Jimmy
                </span>
                <span className="text-sm text-gray-500">Free Plan <a href="#" className="text-blue-500 font-semibold">Upgrade</a></span>
              </div>
            </div>
          </div>
        </header>


  {/* Dynamic Content */}
  <main className="mt-6">{children}</main>
  </div>
  </div>
      </body>
    </html>
  );
}