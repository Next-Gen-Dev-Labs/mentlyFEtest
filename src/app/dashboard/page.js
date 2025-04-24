"use client"
import { useState } from 'react';
import Layout from '@/components/Layouts/Layout';
import WelcomeBanner from '@/components/dashboard/WelcomeBanner';
import ProgramsList from '@/components/dashboard/ProgramsList';
import GroupCalls from '@/components/dashboard/GroupCalls';
import StatsChart from '@/components/dashboard/StatsCharts';
import Applications from '@/components/dashboard/Applications';
import Mentors from '@/components/dashboard/Mentors';
import RecentActivities from '@/components/dashboard/RecentActivities';
import WidgetModal from '@/components/dashboard/WidgetModal';
import { PiQrCodeThin } from "react-icons/pi";

export default function Dashboard() {
    const [showWidgetModal, setShowWidgetModal] = useState(false);
    const [activeWidgets, setActiveWidgets] = useState({
        programs: true,
        groupCalls: true,
        mentors: true,
        recentActivities: true,
        applications: true,
        stats: true,
    });

    return (
        <Layout>
            <div className="flex justify-end items-center mb-4 sm:mb-6 cursor-pointer">
                <div className="flex items-center">
                    <PiQrCodeThin className='text-2xl sm:text-3xl text-primary hover:bg-primaryDark hover:text-white rounded' />
                    <div className="p-1 rounded-lg text-white bg-primaryLight ml-2 hover:bg-primaryDark hover:text-white">
                        <PiQrCodeThin className='text-xl sm:text-2xl text-primary hover:text-white' onClick={() => setShowWidgetModal(true)} />
                    </div>
                    <button
                        onClick={() => setShowWidgetModal(true)}
                        className="text-primary font-bold text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 rounded flex items-center space-x-1 sm:space-x-2 hover:bg-primaryLight hover:text-white transition duration-200 ml-2"
                    >
                        <span>Manage Widgets</span>
                    </button>
                </div>
            </div>

            <WelcomeBanner name="Blessing" />

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-12 gap-4">
                <div className="md:col-span-8 lg:col-span-8 xl:col-span-3 space-y-4">
                    {activeWidgets.programs && <ProgramsList />}
                    {activeWidgets.stats && <StatsChart />}
                </div>

                <div className="md:col-span-8 lg:col-span-8 xl:col-span-9 space-y-4">
                    {activeWidgets.groupCalls && <GroupCalls />}
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4">
                        <div className="md:col-span-7 lg:col-span-7 space-y-4">
                            {activeWidgets.applications && <Applications />}
                        </div>
                        <div className="md:col-span-5 lg:col-span-5 space-y-4">
                            {activeWidgets.mentors && <Mentors />}
                            {activeWidgets.recentActivities && <RecentActivities />}

                        </div>
                    </div>
                </div>
            </div>

            {showWidgetModal && (
                <WidgetModal
                    isOpen={showWidgetModal}
                    onClose={() => setShowWidgetModal(false)}
                    activeWidgets={activeWidgets}
                    setActiveWidgets={setActiveWidgets}
                />
            )}
        </Layout>
    );
}
