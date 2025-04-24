'use client'
import React from 'react'
import Image from 'next/image'

const GroupCalls = () => {
    const groupCallsItems = [
        {
            banner: '/bannerr.svg',
            status: '• Ongoing',
            topic: 'Weekly Meeting - Product Demo Review with Testers',
            date: 'Mon. Jul 30, 2024',
            time: '9:00 - 11:00AM',
            mentors: '/group-mentor.svg',
            dateLogo:'/calender.svg',
            timeLogo:'/clock.svg',
            strategy: 'UX Strategy Study group',
            strategyLogo:'/strategy.svg',
        },
        {
            banner: '/bannr.svg',
            status: '• Upcoming',
            topic: 'Weekly Meeting - Product Demo Review with Testers',
            date: 'Mon. Jul 30, 2024',
            time: '9:00 - 11:00AM',
            mentors: '/group-mentor.svg',
            dateLogo:'/calender.svg',
            timeLogo:'/clock.svg',
            strategy: 'UX Strategy Study group',
            strategyLogo:'/strategy.svg',
        },
        {
            banner: '/banner 3.svg',
            status: '• Ongoing',
            topic: 'Weekly Meeting - Product Demo Review with Testers',
            date: 'Mon. Jul 30, 2024',
            time: '9:00 - 11:00AM',
            mentors: '/group-mentor.svg',
            dateLogo:'/calender.svg',
            timeLogo:'/clock.svg',
            strategy: 'UX Strategy Study group',
            strategyLogo:'/strategy.svg',
        },
    ]
    // border-green-600 border-2
    return (
        <div className='col-start-2 col-end-4 row-start-1 row-end-2 p-4'>
            {/* Header */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Image src="/menu.svg" alt="Menu" width={16} height={16} />
                    <h1 className="text-left text-[#B0B0B0] text-base font-bold">Group Calls</h1>
                </div>

                <div className="flex items-center gap-3">
                    <button className="font-semibold text-xs text-[#6F01D0]">See All</button>
                    <Image src="/more.svg" alt="More" width={18} height={18} />
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-[5rem] mt-5 relative z-[-5] w-full">
                {groupCallsItems.map((item, index) => {
                    const { banner, status, topic, date, time, mentors, dateLogo, timeLogo, strategy, strategyLogo } = item
                    const isOngoing = status.includes('Ongoing')

                    return (
                        <div key={index} className="w-[265px] shadow-md p-4 rounded-2xl bg-[#F9F7FF] border border-gray-100">
                            {/* Banner */}
                            <Image
                                src={banner}
                                alt="Program Banner"
                                width={265}
                                height={70}
                                className="w-full h-auto rounded-xl"
                            />

                            {/* Status */}
                            <div className="mt-3">
                                <span className={`text-[10px] font-medium px-2 py-1 rounded-full ${
                                    isOngoing ? 'bg-[#D1FADF] text-[#027A48]' : 'bg-[#E9D7FE] text-[#6941C6]'
                                }`}>
                                    {status}
                                </span>
                            </div>

                            {/* Topic */}
                            <h2 className="text-base font-normal text-[#595564] mt-2">{topic}</h2>

                            {/* Date & Time */}
                            <div className="flex justify-between items-center gap-4 mt-2 text-[8px] font-medium text-[#595564] down">
                                <div className="flex items-center gap-1">
                                    <Image src={dateLogo} alt="Date Icon" width={12} height={12} />
                                    <span>{date}</span>
                                </div> |
                                <div className="flex items-center gap-1">
                                    <Image src={timeLogo} alt="Time Icon" width={12} height={12} />
                                    <span>{time}</span>
                                </div>
                            </div>

                            <div className='flex justify-between items-center mt-3'>
                                <div className="mt-3">
                                    <p className='text-[#A195C0] text-xs'>Study Group</p>
                                    <div className="flex items-center gap-2 mt-1 text-[#595564]">
                                        <Image src={strategyLogo} alt="Strategy Logo" width={16} height={16} />
                                        <span className='font-semibold text-xs'>{strategy}</span>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <span className="text-xs text-[#344054]">Mentors</span>
                                    <div>
                                        <Image src={mentors} alt="Mentors" width={60} height={20} />
                                    </div>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-between mt-4">
                                <button className="text-[#6941C6] border border-[#6941C6] text-xs font-medium px-2 py-1.5 rounded-xl">
                                    View Participants
                                </button>
                                <button className={`text-xs font-medium px-2 py-1.5 rounded-xl flex items-center gap-1 ${
                                    isOngoing ? 'bg-[#7F56D9] text-white' : 'bg-[#E9D7FE] text-[#6941C6]'
                                }`}>
                                    Join Now <span className="ml-1 items-center flex justify-center h-full">
                                        <Image src='/right-arrow.svg' alt='arrow-icon' width={21} height={21} />
                                    </span>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GroupCalls
