"use client";
import React from "react";
import Image from "next/image";

import LogoAvatar from "../../public/img/logo-avatar.png"
import Notifications from "../../public/svg/notifications.svg"

import { ChevronDown } from 'lucide-react';

export const TopBar = () => {
    return (
        <header className="bg-white border-b border-gray-200 flex items-center justify-between px-4 py-2">
            <div></div>
            <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                    <Image src={Notifications} alt="notifications" width={20} height={20} unoptimized />
                </button>
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 p-1 bg-[#8B72FC] rounded-full flex items-center justify-center text-white">
                        <Image src={LogoAvatar} alt="gridbtn" width={100} height={100} />
                    </div>
                    <div className="text-sm">
                        <div className="font-medium">Techrity Foundation</div>
                        <div className="text-xs text-gray-500">Member</div>
                    </div>
                </div>
                <button className="p-2 rounded-xl bg-[#6F01D0] cursor-pointer">
                    <ChevronDown size={20} className="text-white" />
                </button>
            </div>
        </header>
    );
};
