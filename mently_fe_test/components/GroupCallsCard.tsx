import Image from "next/image";
import { BsArrowRight, BsClock } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { IoCalendarClearOutline } from "react-icons/io5";

const callData = [
  {
    image: "/sectionsImg.jpg",
    name: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon. Jul 30, 2024",
    time: "9:00 - 11:00AM",
    status: "Ongoing",
    statusColor: "#2AC10033",
    dotColor: "#1F8B01",
  },
  {
    image: "/groupCall2.png",
    name: "Design Sync - UI Feedback Loop",
    date: "Tue. Aug 5, 2024",
    time: "2:00 - 3:00PM",
    status: "Upcoming",
    statusColor: "#E0DDFF",
    dotColor: "#1C0AE1",
  },
  {
    image: "/groupCall3.png",
    name: "Design Sync - UI Feedback Loop",
    date: "Tue. Aug 5, 2024",
    time: "2:00 - 3:00PM",
    status: "Ongoing",
    statusColor: "#2AC10033",
    dotColor: "#1F8B01",
  },
];

export default function GroupCallsCard() {
  return (
    <div className="groupcall_card con">
      {callData.map((call, index) => (
        <div key={index} className="groupcall_card_box">
          <div className="groupcall_card_img_box">
            <img src={call.image} alt="Banner" className="groupcall_card_img" />
          </div>

          <div className="group_call_card_container">
            <span
              className="groupcall_card_container_span mt-2"
              style={{
                backgroundColor: call.statusColor,
                color: call.dotColor,
              }}
            >
              <div
                className="groupcall_card_status"
                style={{ backgroundColor: call.dotColor }}
              ></div>
              {call.status}
            </span>
            <p className="groupcall_card_name">{call.name}</p>
          </div>

          <div className="flex items-center my-4 justify-between">
            <div className="flex gap-2 items-center px-2 border-r border-[#D0D5DD]">
              <IoCalendarClearOutline color="#1F0954" size={11} />
              <p className="text-[8px] text-[#595564]">{call.date}</p>
            </div>
            <div className="flex items-center px-2 gap-2">
              <BsClock color="#1F0954" size={11} />
              <p className="text-[8px] text-[#595564]">{call.time}</p>
            </div>
          </div>

          <div className="flex items-center px-2 gap-8">
            <div className="flex gap-2">
              <img
                src="/studyGroup.jpg"
                alt=""
                className="rounded-full w-4 h-4"
              />
              <div className="flex flex-col">
                <p className="text-[#A195C0] text-[6px]">Study Group</p>
                <p className="text-[8px] text-[#595564]">
                  UX Strategy Study group
                </p>
              </div>
            </div>

            <div>
              <p className="text-[#A195C0] text-[6px]">Mentors</p>
              <div className="flex -space-x-2">
                <img className="w-4 h-4 rounded-full " src="/mentor1.png" />
                <img className="w-4 h-4 rounded-full " src="/mentor1.png" />
                <img className="w-4 h-4 rounded-full " src="/mentor1.png" />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <button className="border border-[#6F01D0] text-[#6F01D0] text-[12px] px-2 py-1.5 rounded hover:bg-gray-200">
                View Participants
              </button>
              <button className="bg-[#6F01D0] flex items-center gap-4 text-[#FFFFFF] text-[12px] px-2 py-1.5 rounded hover:bg-blue-700">
                Join Now
                <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
