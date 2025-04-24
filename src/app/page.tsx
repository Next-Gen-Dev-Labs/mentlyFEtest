'use client'

import Sidebar from "@/components/sidebar/Sidebar"
import DashboardHeader from "@/components/header/DashboardHeader"
import ProgramsSection from "@/components/programs/ProgramsSection"
import WelcomeBanner from "@/components/header/WelcomeBanner"
import Image from "next/image"
import MeetingCard from "@/components/group-call/MeetingCard"
import Applications from "@/components/applications/Applications"
import MentorCard from "@/components/mentors/MentorCard"
import RecentActivities from "@/components/recent-activities/RecentActivities"
import UsersAnalytics from "@/components/UsersAnalytics"
import Divider from "@/components/header/Divider"

const meetingData = [
    {
      id: 1,
      tag: "Ongoing",
      image: "program-banner2.svg",
    },
    {
        id: 2,
        tag: "Upcoming",
        image: "meeting-banner2.svg",
    },
    {
        id: 3,
        tag: "Ongoing",
        image: "meeting-banner3.svg",
    },
    {
        id: 4,
        tag: "Ongoing",
        image: "meeting-banner3.svg",
    },
    {
        id: 5,
        tag: "Upcoming",
        image: "meeting-banner2.svg",
    },
  ]
  

export default function Home() {
    
  return (
    <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar Component */}
        <Sidebar isMobile={false} />
        <div className="flex-1 flex flex-col dashboard-layout">
            {/* Dashboard Header Component */}
            <DashboardHeader />
            {/* Divider */}
            <Divider />
            {/* Dashboard Contents */}
            <main className="flex-1 p-4 md:p-6 pt-4 md:pt-4 overflow-y-auto dashboard-content">
                {/* Welcome banner */}
                <WelcomeBanner />
                {/* Spacer for mobile menu button */}
                {/* <div className="md:hidden h-12"></div>  */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Left column - Programs and Users Analytics */}
                    <div className="lg:col-span-1">
                        {/* Programs Card */}
                        <ProgramsSection />
                        {/* User Analytics Card */}
                        <UsersAnalytics />
                    </div>

                    {/* Right column - Dashboard cards */}
                    <div className="lg:col-span-2">
                        {/* Group Calls Section */}
                        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                            {/* Group Call header */}
                            <div className="flex justify-between items-center mb-4">
                                <span className="flex gap-4 items-center">
                                    <Image src="/SVGs/mobile.svg" width={10} height={9} alt="mobile-icon" className="cursor-pointer" />
                                    <h2 className="text-lg font-chivo font-semibold text-[#B0B0B0]">Group Calls</h2>
                                </span>
                                <span className="flex gap-4 items-center">
                                    <div className="text-[#6F01D0] text-sm font-[600] font-chivo">See all</div>
                                    <Image src="/SVGs/seeAll.svg" width={2.25} height={13.5} alt="seeAll-icon" className="cursor-pointer" />
                                </span>
                            </div>
                            {/* Group Call cards     */}
                            <div className="flex gap-2 overflow-x-scroll hide-scrollbar">
                                {
                                    meetingData.map((meeting) => (
                                        <MeetingCard
                                            key={meeting.id}
                                            id={meeting.id}
                                            tag={meeting.tag}
                                            image={meeting.image}
                                        />
                                    ))
                                }
                            </div>
                        </div>

                        {/* Applications, Mentors, and Recent Activities Section */}
                        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col custom-class-3 gap-3 max-w-full h-[640px] overflow-y-auto custom-class-5 hide-scrollbar">
                            {/* Applications Section */}
                            <div className="custom-class max-w-full">
                                {/* Applications Cards */}
                                <Applications />
                            </div>
                            {/* Mentors and Recent Activities Section */}
                            <div className="w-full custom-class-2">
                                <div className="flex flex-col w-full gap-3">
                                    {/* Mentors Cards */}
                                    <MentorCard />

                                    {/* Recent Activities Cards */}
                                    <RecentActivities />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  )
}
