import React from "react";

import {
    MoreVertical,
    Calendar,
    Clock,
    ArrowRight,
} from 'lucide-react';

import GroupIcon from "../../public/svg/group-icon.svg"

import Image from "next/image";


export const GroupCall = () => {
    return (
        <div className="mx-6 mb-6 bg-white max-w-205 p-4 rounded-xl shadow-sm overflow-x-auto">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <span className="mr-2">
                        <Image src="/svg/hamburger.svg" alt="hamburger" unoptimized width={20} height={20} />
                    </span>
                    <h2 className="text-gray-500 font-medium">Group Calls</h2>
                </div>
                <div className="flex items-center">
                    <a href="#" className="text-purple-600 text-sm mr-2">See all</a>
                    <MoreVertical size={18} className="text-gray-400" />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-x-65">
                {/* Meeting Card 1 */}
                <div className="w-85 rounded-lg border bg-[#F9F7FF] p-3 border-gray-200 overflow-hidden">
                    <div className="h-24 relative">
                        <Image src="/img/card-img-1.png" alt="Meeting banner" className="w-full h-full object-cover rounded-xl" width={100} height={100} />
                    </div>
                    <div className="p-3">
                        <div className="mb-2">
                            <span className="inline-flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                                Ongoing
                            </span>
                        </div>
                        <h3 className="font-normal mb-1 text-lg text-[#595564] pb-2 border-b border-gray-300">Weekly Meeting - Product Demo Review with Testers</h3>
                        <div className="flex items-center text-xs text-gray-500 mt-3 mb-3">
                            <Calendar size={12} className="mr-1" />
                            <span>Mon, Jul 30, 2024</span>
                            <div className="mx-7 w-[0.5px] h-5 bg-gray-300"></div>
                            <Clock size={12} className="mr-1" />
                            <span>9:00 - 11:00AM</span>
                        </div>
                        <div className="flex gap-x-5 mb-3">
                            <div className="flex items-center mb-3">
                                <div className="mr-1">
                                    <Image src={GroupIcon} alt="group-icon" className="object-cover" width={18} height={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-[#A195C0]">Study group</p>
                                    <p className="text-xs text-[#595564] font-medium">UX Strategy Study group</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-[10px] text-[#A195C0]">Mentors</p>
                                <Image src="/img/avatar-stack.png" alt="mentors" width={40} height={40} />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="px-5 py-3 border border-[#6F01D0] text-[#6F01D0] rounded-lg text-sm cursor-pointer hover:bg-[#6F01D0] hover:text-white transition delay-100 duration-300">
                                View Participants
                            </button>
                            <button className="px-5 py-3 bg-[#6F01D0] text-white rounded-lg text-[13px] flex items-center cursor-pointer hover:bg-transparent hover:text-[#6F01D0] border border-[#6F01D0] transition delay-100 duration-300">
                                Join Now
                                <ArrowRight size={16} className="ml-1" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Meeting Card 2 */}
                <div className="w-85 rounded-lg border bg-[#F9F7FF] p-3 border-gray-200 overflow-hidden">
                    <div className="h-24 relative">
                        <Image src="/img/card-img-2.png" alt="Meeting banner" className="w-full h-full object-cover rounded-xl" width={100} height={100} />
                    </div>
                    <div className="p-3">
                        <div className="mb-2">
                            <span className="inline-flex items-center bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                                Upcoming
                            </span>
                        </div>
                        <h3 className="font-normal mb-1 text-lg text-[#595564] pb-2 border-b border-gray-300">Weekly Meeting - Product Demo Review with Testers</h3>
                        <div className="flex items-center text-xs text-gray-500 mt-3 mb-3">
                            <Calendar size={12} className="mr-1" />
                            <span>Mon, Jul 30, 2024</span>
                            <div className="mx-7 w-[0.5px] h-5 bg-gray-300"></div>
                            <Clock size={12} className="mr-1" />
                            <span>9:00 - 11:00AM</span>
                        </div>
                        <div className="flex gap-x-5 mb-3">
                            <div className="flex items-center mb-3">
                                <div className="mr-1">
                                    <Image src={GroupIcon} alt="group-icon" className="object-cover" width={18} height={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-[#A195C0]">Study group</p>
                                    <p className="text-xs text-[#595564] font-medium">UX Strategy Study group</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-[10px] text-[#A195C0]">Mentors</p>
                                <Image src="/img/avatar-stack.png" alt="mentors" width={40} height={40} />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="px-5 py-3 border border-[#6F01D0] text-[#6F01D0] rounded-lg text-sm cursor-pointer hover:bg-[#6F01D0] hover:text-white transition delay-100 duration-300">
                                View Participants
                            </button>
                            <button className="px-5 py-3 bg-[#6F01D0] text-white rounded-lg text-[13px] flex items-center cursor-pointer hover:bg-transparent hover:text-[#6F01D0] border border-[#6F01D0] transition delay-100 duration-300">
                                Join Now
                                <ArrowRight size={16} className="ml-1" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Meeting Card 3 */}
                <div className="w-85 rounded-lg border bg-[#F9F7FF] p-3 border-gray-200 overflow-hidden">
                    <div className="h-24 relative">
                        <Image src="/img/card-img-1.png" alt="Meeting banner" className="w-full h-full object-cover rounded-xl" width={100} height={100} />
                    </div>
                    <div className="p-3">
                        <div className="mb-2">
                            <span className="inline-flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                                Ongoing
                            </span>
                        </div>
                        <h3 className="font-normal mb-1 text-lg text-[#595564] pb-2 border-b border-gray-300">Weekly Meeting - Product Demo Review with Testers</h3>
                        <div className="flex items-center text-xs text-gray-500 mt-3 mb-3">
                            <Calendar size={12} className="mr-1" />
                            <span>Mon, Jul 30, 2024</span>
                            <div className="mx-7 w-[0.5px] h-5 bg-gray-300"></div>
                            <Clock size={12} className="mr-1" />
                            <span>9:00 - 11:00AM</span>
                        </div>
                        <div className="flex gap-x-5 mb-3">
                            <div className="flex items-center mb-3">
                                <div className="mr-1">
                                    <Image src={GroupIcon} alt="group-icon" className="object-cover" width={18} height={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-[#A195C0]">Study group</p>
                                    <p className="text-xs text-[#595564] font-medium">UX Strategy Study group</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-[10px] text-[#A195C0]">Mentors</p>
                                <Image src="/img/avatar-stack.png" alt="mentors" width={40} height={40} />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="px-5 py-3 border border-[#6F01D0] text-[#6F01D0] rounded-lg text-sm cursor-pointer hover:bg-[#6F01D0] hover:text-white transition delay-100 duration-300">
                                View Participants
                            </button>
                            <button className="px-5 py-3 bg-[#6F01D0] text-white rounded-lg text-[13px] flex items-center cursor-pointer hover:bg-transparent hover:text-[#6F01D0] border border-[#6F01D0] transition delay-100 duration-300">
                                Join Now
                                <ArrowRight size={16} className="ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
