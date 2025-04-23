import React from "react";
import { Menu, MoreVertical, CirclePlus } from "lucide-react";
import Image from "next/image";
const MentorsCard = () => {
  const notifications = [
    {
      subject: "KYC Verification",
      description: "45 new persons just signed up on Mently.",
      time: "25 minutes ago",
      image: "/avatar2.png",
    },
    {
      subject: "User Registration",
      description: "120 new users registered on Mently this week.",
      time: "1 hour ago",
      image: "/avatar2.png",
    },
    {
      subject: "Account Update",
      description: "Several users updated their account details.",
      time: "3 hours ago",
      image: "/avatar2.png",
    },
    // Add more subjects as needed
  ];
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 w-[370px] h-[804px] mr-4">
      {/* Title */}
      <header className="flex items-center justify-between p-2 border-b">
        {/* Left: Menu + Title */}
        <div className="flex items-center gap-2">
          <button className="p-2">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-[16px] font-light text-gray-500">Mentors</h1>
        </div>

        {/* Right: See All + More Icon */}
        <div className="flex items-center gap-2">
          <button className="p-2">
            <CirclePlus className="w-6 h-6 text-gray-700" />
          </button>
          <button className="p-2">
            <MoreVertical className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </header>

      {/* Maxwell Smith Section */}
      <div className="bg-white rounded-lg shadow-sm p-2 w-full  ">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Mentors</h2>

        {/* List of mentors  */}
        <div className="space-y-5">
          <div className="flex items-center gap-2 w-full">
            {/* Avatar */}
            <Image
              src="/avatar.avif"
              width={50}
              height={50}
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
              alt="Mentor 1"
            />

            {/* Name and Email stacked vertically but tightly */}
            <div className="flex flex-col justify-center leading-tight">
              <h3 className="text-md font-bold text-gray-800 -mb-[2px]">
                Maxwell Smith
              </h3>
              <p className="text-gray-600 text-[10px]">Product Designer</p>
            </div>

            {/* Spacer pushes buttons to the right */}
            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                className="bg-purple-800 text-white px-3 py-1 rounded-xl text-[10px] font-medium transition-colors w-[73.83px] h-[31.53px] text-center"
              >
                Message
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full">
            {/* Avatar */}
            <Image
              src="/avatar2.png"
              width={50}
              height={50}
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
              alt="Mentor 1"
            />

            {/* Name and Email stacked vertically but tightly */}
            <div className="flex flex-col justify-center leading-tight">
              <h3 className="text-md font-bold text-gray-800 -mb-[2px]">
                Adeati Samuel
              </h3>
              <p className="text-gray-600 text-[10px]">Product Designer</p>
            </div>

            {/* Spacer pushes buttons to the right */}
            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                className="bg-purple-800 text-white px-3 py-1 rounded-xl text-[10px] font-medium transition-colors w-[73.83px] h-[31.53px] text-center"
              >
                Message
              </button>
            </div>
          </div>
          <button className="bg-[#DDD6FB] text-[#6F01D0]  font-bold w-[265px] h-[44px] rounded-3xl cursor-pointer">
            See All
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* recent activities List */}
      <header className="flex items-center justify-between  border-b">
        {/* Left: Menu + Title */}
        <div className="flex items-center gap-2">
          <button className="p-2">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-[14px] font-light text-gray-500">
            Recent Activities
          </h1>
        </div>

        {/* Right: See All + More Icon */}
        <div className="flex items-center gap-2 cursor-pointer">
          <a href="">
            <h1 className="text-purple-800 text-[14px] font-bold">See all</h1>
          </a>

          <button className="p-2">
            <MoreVertical className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </header>
      <ul className="space-y-4 max-h-[400px] cursor-pointer overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {notifications.map((notification, index) => (
        <li className="flex items-center justify-between gap-4" key={index}>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 max-w-xs">
            <div className="flex items-start">
              <Image
                src={notification.image}
                width={24}
                height={24}
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
                alt={notification.subject}
              />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  {notification.subject}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {notification.description}
                </p>
                <p className="text-gray-400 text-xs">{notification.time}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default MentorsCard;
