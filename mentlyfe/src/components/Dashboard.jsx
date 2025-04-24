import ProfileHeader from "./ProfileHeader";
import ProgramSection from "./ProgramSection";
import GroupCallSection from "./GroupCallSection";
import ApplicationSection from "./ApplicationSection";
import MentorSection from "./MentorSection";
import RecentActivitiesSection from "./RecentActivitiesSection";
import UserSection from "./UserSection";

export default function Dashboard() {
  return (
    <div>
      <ProfileHeader />

      <div className="h-[calc(100vh-64px)] p-4 md:p-6">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 h-full">
          {/* Left sidebar - 30% width */}
          <div className="w-full lg:w-[30%] lg:min-w-[300px] lg:max-w-[400px] flex flex-col gap-4">
            {/* Programs container */}
            <div className="">
              <ProgramSection />
            </div>
            {/* User section */}
            <div className="bg-white rounded-lg shadow">
              <UserSection />
            </div>
          </div>

          {/* Right content area - 70% width */}
          <div className="w-full lg:w-[70%] flex flex-col gap-4">
            {/* Group Call with fixed height */}
            <div className="min-h-[200px]">
              <GroupCallSection />
            </div>

            {/* Application and Mentor container */}
            <div className="flex-1 flex flex-col md:flex-row gap-4 min-h-0">
              {/* Application section */}
              <div className="w-full md:w-[60%] bg-white rounded-lg">
                <div className="h-full p-3">
                  <ApplicationSection />
                </div>
              </div>

              {/* Mentor and Activities stack */}
              <div className="w-full md:w-[40%] flex flex-col gap-4">
                <div className="flex-1">
                  <div className="h-full p-4 overflow-y-auto">
                    <MentorSection />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="h-full p-4 overflow-y-auto">
                    <RecentActivitiesSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
