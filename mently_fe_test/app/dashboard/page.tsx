import Applications from "@/components/Applications";
import BodyNav from "@/components/BodyNav";
import GroupCalls from "@/components/GroupCall";
import Mentors from "@/components/Mentors";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import RecentActivities from "@/components/RecentActivities";
import SubNav from "@/components/SubNav";
import Users from "@/components/Users";

const page = () => {
  return (
    <div className="mx-auto container flex flex-col">
      <Navbar />
      <SubNav />
      <div className="p-8">
        <BodyNav />

        <main className="">
          <div className="">
            <div className="flex con phone">
              <div>
                <Programs />
                <Users />
              </div>
              <div className="px-2">
                <GroupCalls />
                <div className="lg:flex gap-4">
                  <Applications />
                  <div className="bg-[#FFFFFF] gap-4">
                    <Mentors />
                    <RecentActivities />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
