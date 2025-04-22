import ProfileHeader from "./ProfileHeader";
import ProgramSection from "./ProgramSection";
import GroupCallSection from "./GroupCallSection";
import ApplicationSection from "./ApplicationSection";
import MentorSection from "./MentorSection";
import RecentActivitiesSection from "./RecentActivitiesSection";
import UserSection from "./UserSection";

export default function Dashboard() {
  return (
    <div className="flex-1 overflow-y-auto">
      <ProfileHeader />

      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProgramSection />
        <GroupCallSection />
        <ApplicationSection />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MentorSection />
          <RecentActivitiesSection />
        </div>
        <UserSection />
      </div>
    </div>
  );
}
