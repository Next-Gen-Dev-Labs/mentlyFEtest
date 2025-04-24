import Programs from "@/components/dashboard/programs";
import WelcomeBoard from "@/components/dashboard/welcome-board";
import Widget from "@/components/dashboard/widget";
import GroupCalls from "@/components/dashboard/group-calls";
import Applications from "@/components/dashboard/applications";
import Mentors from "@/components/dashboard/mentors";
import RecentActivities from "@/components/dashboard/recent-activities";
import Users from "@/components/dashboard/users";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-1">
      {/*widget */}
      <Widget />
      {/*welcome */}
      <WelcomeBoard />
      {/*main contents */}
      <div className="grid  grid-rows-[auto_auto_auto] mt-1 gap-4 h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-[0.9fr_1fr_0.9fr]">
        <Programs />
        <GroupCalls />
        <Users />
        <Applications />
        <Mentors />
        <RecentActivities />
      </div>
    </div>
  );
}
