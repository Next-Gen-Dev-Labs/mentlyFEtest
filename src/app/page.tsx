'use client'

import Programs from "@/components/widgets/Programs";
import Applications from "@/components/widgets/Applications";
import Mentors from "@/components/widgets/Mentors";
import RecentActivities from "@/components/widgets/RecentActivities";
import UsersChart from "@/components/widgets/Users";
import GroupCall from "@/components/widgets/GroupCall";
import WelcomeMessage from "@/components/layout/WelcomeMessage";
import WidgetWrapper from "@/components/widgets/WidgetWrapper";
import ApplicationsSkeleton from "@/components/skeletons/ApplicationSkeleton";
import GroupCallSkeleton from "@/components/skeletons/GroupCallSkeleton";
import ProgramsSkeleton from "@/components/skeletons/ProgramsSkeleton";
import UsersSkeleton from "@/components/skeletons/UsersSkeleton";
import RecentActivitiesSkeleton from "@/components/skeletons/RecentActivitiesSkeleton";
import MentorsSkeleton from "@/components/skeletons/MentorsSkeleton";
import { useState, useEffect } from "react";



export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []); 

  return (
    <div className="h-screen p-4">
      <WidgetWrapper />
      <WelcomeMessage />
      
      {/* Grid container - single column on mobile and tablet, complex grid on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-full">
        {/* Left Column - only applies on desktop */}
        <div className="lg:col-span-5 grid lg:grid-rows-2 gap-4 h-full">
          <div className="h-[400px] lg:h-full">
            {isLoading ? <ProgramsSkeleton /> : <Programs />}
          </div>
          <div className="h-[300px] lg:h-full">
            {isLoading ? <UsersSkeleton /> : <UsersChart />}
          </div>
        </div>

        {/* Right Column - only applies on desktop */}
        <div className="lg:col-span-7 grid lg:grid-rows-[30%_70%] gap-4 h-full">
          {/* Group Calls */}
          <div className="h-[450px] lg:h-full">
            {isLoading ? <GroupCallSkeleton /> : <GroupCall />}
          </div>

          {/* Bottom Content */}
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 h-full">
            {/* Applications */}
            <div className="h-[400px] lg:h-full lg:col-span-4">
              {isLoading ? <ApplicationsSkeleton /> : <Applications />}
            </div>
            
            {/* Mentors and Recent Activities */}
            <div className="lg:col-span-3 grid lg:grid-rows-2 gap-4 h-full">
              <div className="h-[250px] lg:h-full">
                {isLoading ? <MentorsSkeleton /> : <Mentors />}
              </div>
              <div className="h-[300px] mb-5 lg:h-full">
                {isLoading ? <RecentActivitiesSkeleton /> : <RecentActivities />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
