// components/layout/Header.jsx
import { useState } from 'react';
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { FiSidebar } from "react-icons/fi";

export default function Header({ setSidebarOpen }) {
    return (
        <header className="sticky top-0 z-30 flex items-center justify-between md:h-[100px] lg:h-24 h-20 bg-white shadow-sm px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-6"> 
            <button
                type="button"
                className="md:hidden p-2 text-gray-600 rounded-md"
                onClick={() => setSidebarOpen(true)}
            >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="flex-1 md:flex md:items-center md:justify-between">
                <div className="flex-1" />
                <div className="ml-4 flex items-center md:ml-6 space-x-4">
                    <button className="p-1 rounded-full text-gray-600 hover:bg-gray-100 relative">
                        <BellIcon className="h-6 w-6" />
                        <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full"></span>
                    </button>

                    <div className="flex items-center space-x-2">
                        <div className="relative w-8 h-8 rounded-full bg-primary">
                            <Image
                                src="/pep6.png"
                                alt="User avatar"
                                fill
                                className="rounded-full bg-primary"
                            />
                        </div>
                        <div className="hidden md:flex justify-between gap-2">
                            <div>
                            <div className="text-sm font-medium text-gray-700">Techrity Foun...</div>
                            <div className="text-xs text-gray-500">Member</div>
                            </div>
                            <div className="rounded border bg-primary w-4 h-4 p-3">
                            {/* <FiSidebar className="w-5 h-5 text-white  " /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}