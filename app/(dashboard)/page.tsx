import { RecentActivites } from "@/components/dashboard/activities/recent-activities";
import { Applications } from "@/components/dashboard/applications/applications";
import { GroupCalls } from "@/components/dashboard/group-calls/group-calls";
import { ManageWidget } from "@/components/dashboard/manage-widget";
import { Mentors } from "@/components/dashboard/mentors/mentors";
import { ProfileBanner } from "@/components/dashboard/profile-banner";
import { Programs } from "@/components/dashboard/programs/programs";
import { Users } from "@/components/dashboard/users/users";

export default function Home() {
  return (
    <div className="bg-brand-bg h-full">
      <ManageWidget />
      <div className="px-2 sm:px-5">
        <ProfileBanner />
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-6 my-2">
          <div className="col-span-2">
            <Programs />
            <Users />
          </div>
          <div className="col-span-4 space-y-2">
            <GroupCalls />
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Applications />
              <div className="space-y-2 col-span-1">
                <Mentors />
                <RecentActivites />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
