import Programs from "@/components/widgets/Programs";
import Applications from "@/components/widgets/Applications";
import Mentors from "@/components/widgets/Mentors";
import RecentActivities from "@/components/widgets/RecentActivities";
import UsersChart from "@/components/widgets/Users";
import GroupCall from "@/components/widgets/GroupCall";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4 p-4">
      {/* Programs and Users grid */}
      <div className="lg:col-span-5 space-y-4">
        <div className="w-full">
          <Programs />
        </div>
        <div className="w-full">
          <UsersChart />
        </div>
      </div>

      {/* Right Side Content */}
      <div className="lg:col-span-7 space-y-4">
        {/* Group Calls */}
        <div className="w-full">
          <GroupCall />
        </div>

        {/* Bottom Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {/* Applications grid */}
          <div className="md:col-span-2 lg:col-span-4">
            <Applications />
          </div>
          
          {/* Mentors and Recent Activities grid */}
          <div className="md:col-span-1 lg:col-span-3 space-y-4">
            <div className="w-full">
              <Mentors />
            </div>
            <div className="w-full">
              <RecentActivities />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
