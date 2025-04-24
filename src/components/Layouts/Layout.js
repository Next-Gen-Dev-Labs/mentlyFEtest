// components/layout/Layout.jsx
import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MobileNav from './MobileNav';

export default function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-50 overflow-x-hidden">
            {/* Mobile sidebar */}
            <MobileNav open={sidebarOpen} setOpen={setSidebarOpen} />

            {/* Static sidebar for desktop */}
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 z-20">
                <Sidebar />
            </div>

            {/* Content area */}
            <div className="w-full md:pl-64 flex flex-col flex-1">
                <Header setSidebarOpen={setSidebarOpen} />
                <main className="flex-1 px-3 sm:px-6 md:px-8 py-4 sm:py-6">
                    {children}
                </main>
            </div>
        </div>
    );
}