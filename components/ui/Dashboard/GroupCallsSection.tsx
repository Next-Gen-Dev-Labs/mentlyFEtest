import { EllipsisVertical } from "lucide-react";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";

const groupCalls = [
  {
    title: "Weekly Meeting - Product Demo Review with Testers",
    status: "Ongoing",
    date: "Mon. Jul 30, 2024",
    time: "9:00 - 11:00AM",
    banner: "/program-2.jpg",
    mentors: [
      { name: "Mentor 1", avatar: "/avatar-1.png" },
      { name: "Mentor 2", avatar: "/avatar-2.png" },
      { name: "Mentor 3", avatar: "/avatar-3.png" },
    ],
  },
  {
    title: "Weekly Meeting - Product Demo Review with Testers",
    status: "Upcoming",
    date: "Mon. Jul 30, 2024",
    time: "9:00 - 11:00AM",
    banner: "/program-3.jpg",
    mentors: [
      { name: "Mentor 3", avatar: "/avatar-1.png" },
      { name: "Mentor 4", avatar: "/avatar-2.png" },
      { name: "Mentor 5", avatar: "/avatar-3.png" },
    ],
  },
  {
    title: "Weekly Meeting - Product Demo Review with Testers",
    status: "Ongoing",
    date: "Mon. Jul 30, 2024",
    time: "9:00 - 11:00AM",
    banner: "/program-4.jpg",
    mentors: [
      { name: "Mentor 6", avatar: "/avatar-1.png" },
      { name: "Mentor 7", avatar: "/avatar-2.png" },
      { name: "Mentor 8", avatar: "/avatar-3.png" },
    ],
  },
];

const GroupCallsSection = () => {
  return (
    <div className="w-[762px]">
      <div className="flex justify-between w-[650px] items-center mb-4">
        <div className="space-x-2 ">
          <GiHamburgerMenu className="w-[14px] inline " />
          <h2 className="text-[16px] text-[#B0B0B0] font-bold inline">
            Group Calls
          </h2>
        </div>
        <div className="space-x-2 ">
          <button className="text-purple-600 text-[12.27px] inline font-medium">
            See all
          </button>
          <EllipsisVertical className="text-black w-[14px] inline" />
        </div>
      </div>
      <div className="flex gap-2 overflow-x-auto scrollbar-hide   pb-2">
        {groupCalls.map((call, index) => (
          <div
            key={index}
            className="bg-white shadow px-3 rounded-xl w-[269.94px] h-[270.22px]"
          >
            <img
              src={call.banner}
              alt="Group call banner"
              className="w-[244.07px] h-[68.07px] object-cover rounded-t-xl "
            />
            <div className="p-4 px-1">
              <div className="flex items-center gap-2 text-sm mb-1">
                <span
                  className={`text-[10px] px-1 w-[69.25px] rounded-full ${
                    call.status === "Ongoing"
                      ? "bg-green-100 text-green-600"
                      : "bg-purple-100 text-purple-600"
                  }`}
                >
                  <GoDotFill className="inline" /> {call.status}
                </span>
              </div>
              <h3 className="font-normal text-[16px] text-[#595564] w-[244.07px]">
                {call.title}
              </h3>
              <hr />
              <p className="text-[8px] text-[#595564] inline mt-1">
                <CiCalendar className="inline text-[10px]" /> {call.date}{" "}
                <span className="px-4">|</span> ·{" "}
                <CiClock2 className="inline text-[10px]" /> {call.time}
              </p>
              <div className="flex justify-between flex-row-reverse">
                <div>
                  <h3 className="text-[7px] text-[#A195C0]">Mentors</h3>
                  <div className="flex items-center -space-x-2  mt-1">
                    {call.mentors.map((mentor, i) => (
                      <img
                        key={i}
                        src={mentor.avatar}
                        alt="mentor"
                        className="w-6 h-6 rounded-full border"
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[7px] text-[#A195C0]">Study Group</h3>
                  <img
                    src={"/avatar-9.jpg"}
                    alt="mentor"
                    className="w-6 h-6 rounded-full border"
                  />
                </div>
              </div>

              <div className="flex gap-2 mt-3 ">
                <button className="text-[12.27px] border border-purple-500 text-purple-600 px-3 py-1 rounded-md">
                  View Participants
                </button>
                <button className="text-[12.27px] bg-purple-600 text-white px-3 py-1 inline rounded-md">
                  Join Now{" "}
                  <IoIosArrowRoundForward className="inline font-bold text-[21.04px]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupCallsSection;
