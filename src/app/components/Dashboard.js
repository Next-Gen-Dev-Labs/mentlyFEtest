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
        <div className='ml-[4.5rem] mt-[5.5rem]'>
            <div className="flex items-center justify-center my-4">
                <div className='flex items-center justify-end gap-5 w-full pr-9'>
                    <div className='flex items-center justify-center gap-3'>
                        <button onClick={()=>setWidget(true)}>
                            <Image src='./widget.svg' alt='widget-icon 1' width={24} height={24} />
                        </button>
                        <button onClick={()=>setWidget(true)}>
                            <Image src='./widget1.svg' alt='widget-icon 1' width={30} height={26} />
                        </button>
                    </div>
                    <button className='font-bold text-base text-[#1F0954]' onClick={()=>setWidget(true)}>
                        Manage Widgets
                    </button>
                </div>
            </div>
            <Widgets widget={widget} setWidget={setWidget}/>
            <div className="flex items-center justify-around gap-20 bg-[#6F01D0] p-2 mx-auto max-w-[73rem] rounded">
                <p className='font-semibold text-[26.21px] text-[#ffffff] ml-[1rem]'>Welcome Aboard, Blessing <span className='font-bold'>👋</span></p>
                <p className='text-[#BDBDBD]'>We're thrilled to have you join Techrity Team!</p>
                <button className='bg-[#ffffff] text-[#1F0954] rounded-md p-2 px-4 text-base font-bold'>Update Profile</button>
            </div>
            <div className='grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1.5fr_1fr] w-full justify-center p-4 pl-5 gap-3 max-h-[76rem]'>
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
