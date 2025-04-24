import { ProgramsSection } from "@/components/sections/programs-section"
import { GroupCallsSection } from "@/components/sections/group-calls-section"
import { ApplicationsSection } from "@/components/sections/applications-section"
import { UsersSection } from "@/components/sections/users-section"
import { MentorsSection } from "@/components/sections/mentors-section"
import { RecentActivitiesSection } from "@/components/sections/recent-activities-section"

export function DashboardContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <ProgramsSection />
      <GroupCallsSection />
      <ApplicationsSection />
      <div className="grid grid-cols-1 gap-4">
        <MentorsSection />
        <UsersSection />
      </div>
      <RecentActivitiesSection />
    </div>
  )
}
