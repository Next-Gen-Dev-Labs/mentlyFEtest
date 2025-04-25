"use client"
import React from 'react';

import { ApplicationMentorRecents } from './applicationMentorRecents';
import { GroupCall } from './groupCall';
import ProgramCharts from './programCharts';
import { Sidebar } from './sidebar';
import { TopBar } from './topbar';
import Welcome from './welcome';

export default function Dashboard() {
    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar />
            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-auto">
                <TopBar />
                {/* Main Dashboard */}
                <div className="flex-1">
                    <Welcome />

                    <div className="w-[75vw] flex">
                        <div>
                            <ProgramCharts />
                        </div>

                        <div>
                            <GroupCall />
                            <ApplicationMentorRecents />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}