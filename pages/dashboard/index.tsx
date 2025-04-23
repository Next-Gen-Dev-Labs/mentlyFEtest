import DashboardHeader from "~/components/dashboard/dashboard-header";
import WelcomeBanner from "~/components/dashboard/welcome-banner";
import DashboardLayout from "~/components/layout";
import Programs from "~/components/dashboard/programs";
import GroupCalls from "~/components/dashboard/groupcalls";
import Mentors from "~/components/dashboard/mentors";
import Users from "~/components/dashboard/users";
import Recent from "~/components/dashboard/recent";
import Applications from "../../components/dashboard/applications";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex  flex-col ">
        <div className="flex-1 space-y-6">
          <DashboardHeader />
          <WelcomeBanner />
        </div>
        <main className="mx-auto p-4">
          <div className="grid grid-cols-4 grid-rows-2 gap-4">
            <div className="col-span-1 flex flex-col space-y-4">
              <Programs />
              <Users />
            </div>

            <div className="col-span-3 flex flex-col space-y-4">
              <GroupCalls />
              <div className="grid grid-cols-2 grid-rows-1 gap-4">
                <Applications />

                <div className="flex flex-col space-y-4">
                  <Mentors />
                  <Recent />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
}
