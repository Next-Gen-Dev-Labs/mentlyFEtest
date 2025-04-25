"use client";
import React, { useState } from "react";

import Logo from "../../public/img/logo.png"
import GridBtn from "../../public/img/grid-4.png"
import UserTag from "../../public/svg/user-tag.svg"

import {
    Home,
    FileText,
    Activity,
    Users,
    MessageSquare,
    DollarSign,
    Award,
    BarChart2,
    Settings,
    LogOut,
} from 'lucide-react';

import Image from "next/image";

interface NavItemProps {
    icon: React.ReactNode;
    text: string;
    active?: boolean;
    onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, active, onClick }) => (
    <div
        className={`flex items-center px-5 py-4 my-3 cursor-pointer rounded-md transition-colors  ${active ? 'bg-white text-black' : 'hover:text-black hover:bg-white text-[#C2C2C2]'
            }`}
        onClick={onClick}
    >
        <div className="mr-3">
            {icon}
        </div>
        <span className="font-medium">{text}</span>
    </div>
);

export const Sidebar = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    return (
        < div className="w-70 h-295 bg-[#340260] text-white flex flex-col px-3" >
            <div className="p-4 flex items-center">
                <Image src={Logo} alt="logo" className="mr-2" width={100} height={100} />
                <span className="text-xl font-bold sr-only">techrity</span>
                <div className="ml-auto">
                    <Image src={GridBtn} alt="gridbtn" width={25} height={25} />
                </div>
            </div>

            <div className="flex-grow mt-6">
                <NavItem icon={<Home size={20} />} text="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
                <NavItem icon={<FileText size={20} />} text="Programs" active={activeTab === 'programs'} onClick={() => setActiveTab('programs')} />
                <NavItem icon={<Activity size={20} />} text="Activities" active={activeTab === 'activities'} onClick={() => setActiveTab('activities')} />
                <NavItem icon={<Users size={20} />} text="Users" active={activeTab === 'users'} onClick={() => setActiveTab('users')} />
                <NavItem icon={<MessageSquare size={20} />} text="Forums" active={activeTab === 'forums'} onClick={() => setActiveTab('forums')} />
                <NavItem icon={<DollarSign size={20} />} text="Finances" active={activeTab === 'finances'} onClick={() => setActiveTab('finances')} />
                <NavItem icon={<Award size={20} />} text="Rewards" active={activeTab === 'rewards'} onClick={() => setActiveTab('rewards')} />
                <div className="relative">
                    <NavItem icon={<BarChart2 size={20} />} text="Analytics" active={activeTab === 'analytics'} onClick={() => setActiveTab('analytics')} />
                    <div className="absolute top-0 right-0 px-4 py-1 text-xs text-right">
                        <span className="bg-[#0214BD38] text-white text-xs px-2 py-1 rounded-full">Coming Soon</span>
                    </div>
                </div>
                <NavItem icon={<Settings size={20} />} text="Settings" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
                <NavItem icon={<LogOut size={20} />} text="Log Out" active={activeTab === 'logout'} onClick={() => setActiveTab('logout')} />
            </div>

            <div className="p-1 mt-8">
                <div className="bg-[#FFFFFF1F] rounded-lg p-5 text-sm">
                    <Image src={UserTag} alt="user-tag" width={25} height={25} unoptimized />
                    <p className="font-medium mt-7">Got some questions, enquiries or need help?</p>
                    <a href="#" className="text-[#F0C074] text-xs mt-7 block underline">Visit Montly Help Desk Here</a>
                </div>

                <div className="flex items-center justify-between mt-12 mb-10">
                    <span className="text-sm">Switch to Classic Mode</span>
                    <div className="w-10 h-5 bg-purple-800 rounded-full flex items-center px-1">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>
        </div >
    );
};
