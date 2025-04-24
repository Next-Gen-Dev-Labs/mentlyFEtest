import ProgramsList from "./ProgramsList"
import RecentActivities from "./RecentActivities"
import MentorsCard from "./MentorsCard"
import UserStatsCard from "./UserStatsCard"
import GroupCalls from "./GroupCalls"
import ApplicationsCard from "./ApplicationsCard"

const DashboardContent = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 space-y-12 rounded-[6rem]">
          <div className="bg-white rounded-[6rem] shadow-sm">

            <ProgramsList />
          </div>
          <div className="bg-white rounded-[5rem] shadow-sm mt-6">
            <UserStatsCard />
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-[1.5rem] shadow-sm">

            <GroupCalls />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 flex flex-col bg-white rounded-lg shadow-sm h-full">
              <div className="flex-grow">
                <ApplicationsCard />
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6 h-full">
              <div className="flex flex-col bg-white rounded-lg shadow-sm flex-1">
                <div className="flex-grow">
                  <MentorsCard />
                </div>
              </div>
              <div className="flex flex-col bg-white rounded-lg shadow-sm flex-1">
                <div className="flex-grow">
                  <RecentActivities />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardContent
