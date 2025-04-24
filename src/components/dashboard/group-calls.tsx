import Link from "next/link";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosMenu } from "react-icons/io";
import GroupCallsCard from "../group-calls/group-calls-card";
import Banner1 from "@/../public/gr-banner1.jpg";
import Banner2 from "@/../public/gr-banner2.jpg";
import Banner3 from "@/../public/gr-banner3.jpg";

const groups = [
  {
    category: "Bootcamp",
    color: "blue",
    banner: Banner1,
    // title: "Fundamentals of User interface & Experience",
  },
  {
    category: "Group Call",
    color: "green",
    banner: Banner2,
    // title: "Color Hack Practical Group Call",
  },
  {
    category: "Group Call",
    color: "green",
    banner: Banner3,
    // title: "Color Hack Practical Group Call",
  },
  {
    category: "Bootcamp",
    color: "blue",
    banner: Banner1,
    // title: "Fundamentals of User interface & Experience",
  },
  {
    category: "Group Call",
    color: "green",
    banner: Banner2,
    // title: "Color Hack Practical Group Call",
  },
  {
    category: "Group Call",
    color: "green",
    banner: Banner3,
    // title: "Color Hack Practical Group Call",
  },
];

function GroupCalls() {
  return (
    <div className="col-span-1 md:col-start-2 min-w-full lg:col-span-2 row-span-1 space-y-3 p-3 rounded-xl bg-white shadow-md">
      <div className="flex items-center gap-x-3 justify-between">
        <div className="flex items-center gap-x-3">
          <IoIosMenu size={20} />
          <p className="font-bold text-[#b0b0b0]">Group Calls</p>
        </div>
        <div className="flex items-center gap-x-3">
          <Link href="programs" className="font-semibold text-[#6f01d0] ">
            See all
          </Link>
          <HiDotsVertical />
        </div>
      </div>

      <ul className="space-x-3 flex overflow-x-auto scrollbar-hide snap-x snap-proximity">
        {groups.map(({ category, color, banner }, i) => (
          <GroupCallsCard
            category={category}
            color={color}
            banner={banner}
            key={i}
            // title={title}
            // allowSettings={allowSettings}
          />
        ))}
      </ul>
    </div>
  );
}

export default GroupCalls;
