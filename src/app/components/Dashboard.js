'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import { useGlobalBoard } from './controller';
import Widgets from './Widgets';
import Programs from './Dashboard/Programs';
import Users from './Dashboard/Users';
import GroupCalls from './Dashboard/GroupCalls';
import Applications from './Dashboard/Applications';
import Mentors from './Dashboard/Mentors';
import RecentActivities from './Dashboard/RecentActivities';

const Dashboard = () => {
    const { boardChanger } = useGlobalBoard()
    const [widget, setWidget] = useState(false)
    return boardChanger === 'Dashboard' && (
        <div className='ml-[4.5rem] mt-[5.5rem] mb-[-11rem]'>
            <div className="flex items-center justify-center my-4">
                <div className='flex items-center justify-end gap-3 md:gap-5 w-full pr-6 md:pr-9'>
                    <div className='flex items-center justify-center gap-3'>
                        <button onClick={()=>setWidget(true)}>
                            <Image src='./widget.svg' alt='widget-icon 1' width={0} height={0} sizes="100vw" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
                        </button>
                        <button onClick={()=>setWidget(true)}>
                            <Image src='./widget1.svg' alt='widget-icon 2' width={0} height={0} sizes="100vw" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
                        </button>
                    </div>
                    <button className='font-bold text-xs md:text-base text-[#1F0954]' onClick={()=>setWidget(true)}>
                        Manage Widgets
                    </button>
                </div>
            </div>
            <Widgets widget={widget} setWidget={setWidget}/>
            <div className="flex items-center justify-between bg-[#6F01D0] p-4 mx-auto my-4 max-w-[90rem] rounded">
                <div className="flex flex-col md:flex-row md:items-center lg:gap-[4rem]">
                    <p className="font-semibold text-white text-xs md:text-[26.21px]">
                        Welcome Aboard, Blessing <span className="font-bold">👋</span>
                    </p>
                    <p className="text-[#BDBDBD] text-[8px] md:text-base mt-1 md:mt-0">
                        We're thrilled to have you join Techrity Team!
                    </p>
                </div>
                <button className="bg-white text-[#1F0954] rounded-md font-bold text-[10px] md:text-base px-4 py-2 md:w-[12rem]">
                    Update Profile
                </button>
            </div>

            
            <div className="container p-4 lg:max-h-[90rem] mb-2">
                <Programs className="programs h-[fit-content] rounded shadow-md p-4 bg-white" />
                <GroupCalls className="group-calls h-[fit-content] p-4 bg-white shadow-md rounded-lg relative z-[-5]" />
                <Users className="users h-[fit-content] rounded shadow-md p-4 bg-[rgba(231,221,255,0.3)]" />
                <Applications className="applications rounded shadow-md p-4 bg-white h-[fit-content]" />
                <Mentors className="mentors rounded shadow-md p-4 bg-white h-[fit-content]" />
                <RecentActivities className="recent-activities rounded shadow-md p-4 bg-white lg:mt-[-2rem] h-[fit-content]" />
            </div>

        </div>
    );
};

export default Dashboard;
