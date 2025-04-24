import Applications from "@/components/home/Applications";
import GroupCalls from "@/components/home/GroupCalls";
import Mentors from "@/components/home/Mentors";
import ProgramCard from "@/components/home/ProgramCard";
import RecentActivities from "@/components/home/RecentActivities";
import WelcomeBanner from "@/components/home/WelcomeBanner";
import Widgets from "@/components/home/Widgets";

export default function Home() {
  // bg-[#f4f5fa]
  return (
    <div className="bg-[#f4f5fa] pb-8 min-w-[295px] pt-4  px-5 lg:pr-9 lg:pl-14">
      <Widgets />
      <WelcomeBanner />
      <div className="grid-cols-1 h-full items-stretch lg:grid gap-3  lg:grid-cols-3 mt-2">
        <div className="h-full">
          <ProgramCard />
        </div>
        <div className="col-span-2   flex h-full flex-col">
          <div className="">
            <GroupCalls />
          </div>
          <div className="mt-4 grid h-full  lg:grid-cols-2 gap-3 ">
              <div className=" flex flex-col  h-full   ">
                <Applications />
              </div>
            <div className="flex flex-col h-full gap-4 flex-1">
              <div className="bg-white rounded-lg shadow p-4   flex-1">
                <Mentors />
              </div>
              <div className="bg-white rounded-lg shadow p-4 flex-1">
                <RecentActivities />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}