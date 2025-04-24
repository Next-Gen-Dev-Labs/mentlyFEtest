import { HiDotsVertical } from "react-icons/hi";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import RecentActivitiesCard from "../recent-activities/recent-activities-card";
// import Mentor1 from "@/../public/mentor3.png";
import Mentor1 from "@/../public/mentor7.jpg";
import Mentor2 from "@/../public/mentor8.png";
import Mentor3 from "@/../public/mentor9.jpg";

function RecentActivities() {
  return (
    <div className="lg:col-start-3 lg:row-start-3 flex flex-col gap-y-3 p-3 rounded-xl bg-white shadow-md min-w-full">
      <div className="flex items-center gap-x-3 justify-between">
        <div className="flex items-center gap-x-3">
          <IoIosMenu size={20} />
          <p className="font-bold text-[#b0b0b0]">Recents Activities</p>
        </div>
        <div className="flex items-center gap-x-3">
          <Link
            href="programs"
            className="font-semibold text-[#6f01d0] text-sm"
          >
            See all
          </Link>
          <HiDotsVertical />
        </div>
      </div>

      {/*cards */}
      <ul className="space-y-5 divide-y divide-gray-300">
        <RecentActivitiesCard
          text="KYC Verification"
          description="45 new persons just signed up on Mently."
          banner={Mentor3}
          time="25 minutes ago"
        />
        <RecentActivitiesCard
          text="New User Sign Up!"
          description="45 new persons just signed up on Mently."
          banner={Mentor2}
          time="25 minutes ago"
        />
        <RecentActivitiesCard
          text="Withdrawal Request"
          description="Mardian requested a withdrawal."
          banner={Mentor1}
          time="25 minutes ago"
        />
      </ul>
    </div>
  );
}

export default RecentActivities;

// row-span-1 col-span-1 col-start-3 row-start-3
