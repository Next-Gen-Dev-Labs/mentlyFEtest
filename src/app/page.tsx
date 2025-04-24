'use client'

import Programs from "@/components/widgets/Programs";
import Applications from "@/components/widgets/Applications";
import Mentors from "@/components/widgets/Mentors";
import RecentActivities from "@/components/widgets/RecentActivities";
import UsersChart from "@/components/widgets/Users";
import GroupCall from "@/components/widgets/GroupCall";
import WelcomeMessage from "@/components/layout/WelcomeMessage";
import WidgetWrapper from "@/components/widgets/WidgetWrapper";

export default function Home() {
  return (
    <div className="h-screen p-4">
      <WidgetWrapper />
      <WelcomeMessage />
      
      {/* Main grid container - changed to single column on mobile */}
      <div className="grid grid-cols-1 gap-4 h-full">
        {/* Programs Widget */}
        <div className="h-[400px] md:h-[450px] lg:h-[500px]">
          <Programs />
        </div>

        {/* Users Chart Widget */}
        <div className="h-[400px] md:h-[450px] lg:h-[500px]">
          <UsersChart />
        </div>

        {/* Group Call Widget */}
        <div className="h-[400px] md:h-[450px] lg:h-[500px]">
          <GroupCall />
        </div>

        {/* Applications Widget */}
        <div className="h-[400px] md:h-[450px] lg:h-[500px]">
          <Applications />
        </div>

        {/* Mentors Widget */}
        <div className="h-[400px] md:h-[450px] lg:h-[500px]">
          <Mentors />
        </div>

        {/* Recent Activities Widget */}
        <div className="h-[400px] md:h-[450px] lg:h-[500px]">
          <RecentActivities />
        </div>
      </div>
    </div>
  );
}
