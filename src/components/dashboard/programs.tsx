import Link from "next/link";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import ProgramCard from "../program/program-card";
import Mentor1 from "@/../public/mentor1.png";
import Mentor2 from "@/../public/mentor2.png";
import Mentor3 from "@/../public/mentor3.png";
import Mentor4 from "@/../public/mentor4.png";
import Banner1 from "@/../public/banner2.jpg";
import Banner2 from "@/../public/banner1.png";

const programs = [
  {
    category: "Bootcamp",
    color: "blue",
    banner: Banner1,
    title: "Fundamentals of User interface & Experience",
    allowSettings: true,
    mentors: [{ name: "Mentors", image: [Mentor1, Mentor2, Mentor3] }],
  },
  {
    category: "Group Call",
    color: "green",
    banner: Banner2,
    title: "Color Hack Practical Group Call",
    allowSettings: false,
    mentors: [{ name: "Faith Okolo  ", image: [Mentor4] }],
  },
  {
    category: "Group Call",
    color: "green",
    banner: Banner2,
    title: "Color Hack Practical Group Call",
    allowSettings: false,
    mentors: [{ name: "Self", image: [Mentor4] }],
  },
];

function Programs() {
  return (
    <div className="col-span-1 row-span-1 lg:row-span-2 overflow-y-auto scrollbar-hide max-h-[530px] md:max-h-[330px] lg:max-h-[600px] space-y-1 pb-3 rounded-xl bg-white shadow-md">
      <div className="p-3 sticky top-0 bg-white z-20 space-y-3">
        <div className="flex items-center gap-x-3 justify-between">
          <div className="flex items-center gap-x-3">
            <IoIosMenu size={20} />
            <p className="font-bold text-[#b0b0b0]">Programs</p>
          </div>
          <div className="flex items-center gap-x-3">
            <Link href="programs" className="font-semibold text-[#6f01d0] ">
              See all
            </Link>
            <HiDotsVertical />
          </div>
        </div>

        {/*filter */}
        <div className="flex w-full items-center justify-end gap-x-3 text-sm ">
          <p className="text-[#b0b0b0]">Filter</p>
          <div className="border border-gray-300 rounded flex items-center gap-x-3 py-1 px-3 cursor-pointer text-[#595564]">
            Active
            <IoIosArrowDown />
          </div>
        </div>
      </div>

      <ul className="space-y-3 px-3 ">
        {programs.map(
          ({ category, color, banner, title, allowSettings, mentors }, i) => (
            <ProgramCard
              mentors={mentors || []}
              key={i}
              category={category}
              color={color}
              banner={banner}
              title={title}
              allowSettings={allowSettings}
            />
          )
        )}
      </ul>
    </div>
  );
}

export default Programs;
