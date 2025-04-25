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
        <div className='ml-[4.5rem] mt-[5.5rem] mb-[1rem]'>
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
            <div className="flex items-center justify-center lg:justify-around lg:gap-20 bg-[#6F01D0] p-2 mx-auto mr-2 max-w-[73rem] rounded">
                <p className='font-semibold text-xs md:text-[26.21px] text-[#ffffff]  md:ml-[1rem]'>Welcome Aboard, Blessing <span className='font-bold'>👋</span></p>
                <p className='text-[#BDBDBD] text-[8px] md:text-base'>We're thrilled to have you join Techrity Team!</p>
                <button className='bg-[#ffffff] text-[#1F0954] rounded-md md:p-2 md:px-4 text-[0.7rem] lg:text-base font-bold md:max-w-[10rem]'>Update Profile</button>
            </div>
            <div className='grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-[1fr_1fr_1fr] lg:grid-rows-[1fr_1.5fr_1fr] w-full justify-center p-4 pl-5 gap-3 lg:max-h-[76rem]'>
                <Programs />
                <GroupCalls />
                <Users />
                <Applications />
                <Mentors />
                <RecentActivities />
            </div>
        </div>
    );
};

export default Dashboard;
