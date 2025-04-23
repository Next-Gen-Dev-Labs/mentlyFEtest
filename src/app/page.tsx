import Programs from "@/components/widgets/Programs";
import Applications from "@/components/widgets/Applications";
import Mentors from "@/components/widgets/Mentors";
import RecentActivities from "@/components/widgets/RecentActivities";
import UsersChart from "@/components/widgets/Users";
import GroupCall from "@/components/widgets/GroupCall";
import WelcomeMessage from "@/components/layout/WelcomeMessage";

export default function Home() {
  return (
    <div className="h-screen p-4">
      <WelcomeMessage />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4 h-full">
        {/* Left Column */}
        <div className="lg:col-span-5 grid grid-rows-2 gap-4 h-full">
          <div className="h-full">
            <Programs />
          </div>
          <div className="h-full">
            <UsersChart />
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 grid grid-rows-[30%_70%] gap-4 h-full">
          {/* Group Calls - 30% height */}
          <div className="h-full">
            <GroupCall />
          </div>

          {/* Bottom Content - 70% height */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 h-full">
            {/* Applications */}
            <div className="md:col-span-2 lg:col-span-4 h-full">
              <Applications />
            </div>
            
            {/* Mentors and Recent Activities */}
            <div className="md:col-span-1 lg:col-span-3 grid grid-rows-2 gap-4 h-full">
              <div className="h-full">
                <Mentors />
              </div>
              <div className="h-full">
                <RecentActivities />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
