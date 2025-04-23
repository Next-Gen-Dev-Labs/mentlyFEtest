import React from "react";
import { Menu, MoreVertical } from "lucide-react";
import Image from "next/image";
const Applications = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 w-full max-w-md">
      {/* Title */}
      <header className="flex items-center justify-between p-2 border-b">
        {/* Left: Menu + Title */}
        <div className="flex items-center gap-2">
          <button className="p-2">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-[16px] font-light text-gray-500">Applications</h1>
        </div>

        {/* Right: See All + More Icon */}
        <div className="flex items-center gap-2">
          <a href="#" className="text-purple-600 font-medium">
            See all
          </a>
          <button className="p-2">
            <MoreVertical className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </header>

      {/* Maxwell Smith Section */}
      <div className="bg-white rounded-lg shadow-sm p-2 w-full  ">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Mentors</h2>

        {/* Mentor Profile */}
        <div className="flex items-center gap-2 w-full">
          {/* Checkbox */}
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />

          {/* Avatar */}
          <Image
            src="/avatar.avif"
            width={24}
            height={24}
            className="w-6 h-6 rounded-full border-2 border-white object-cover"
            alt="Mentor 1"
          />

          {/* Name and Email stacked vertically but tightly */}
          <div className="flex flex-col justify-center leading-tight">
            <h3 className="text-md font-bold text-gray-800 -mb-[2px]">
              Maxwell Smith
            </h3>
            <p className="text-gray-600 text-sm">maxwellsmith@gmail.com</p>
          </div>

          {/* Spacer pushes buttons to the right */}
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              className="bg-red-100 hover:bg-red-200 border-2 border-red-300 text-red-500 px-3 py-1 rounded-xl text-[12px] font-medium transition-colors w-[78.83px] h-[31.53px] text-center"
            >
              Reject
            </button>

            <button
              type="button"
              className="bg-purple-800 text-purple-100 px-3 py-1 rounded-xl text-[12px] font-medium transition-colors w-[83.83px] h-[31.53px] text-center"
            >
              Accept
            </button>
          </div>
        </div>

        <div className="space-y-1 flex  flex-row w-[392px] h-[19.3px] gap-4 mt-6">
          <p className="font-medium text-[10px] px-2 py-2 bg-purple-100 text-purple-700 w-fit h-fit rounded-md">
            Product Designer
          </p>
          <p className="font-medium text-[10px] px-2 py-2 bg-green-100 text-green-700 w-fit h-fit rounded-md">
            4years Experience
          </p>
          <p className="font-medium text-[10px] px-2 py-2 bg-blue-100 text-blue-700 w-fit h-fit rounded-md">
            Lagos, Nigeria
          </p>
          <p className="font-medium text-[10px] px-2 py-2 bg-[#595564]/30 text-[#595564]  h-fit w-fit rounded-md">
            GMT +1
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* Students List */}
      <h3 className="text-[12px]  text-gray-800 mb-4">Students</h3>
      <ul className="space-y-4">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {["Adeati Samuel", "Maxwell Smith"].map((name, index) => (
              <li
                className="flex items-center justify-between gap-4"
                key={`${i}-${index}`}
              >
                <div className="flex items-center gap-3">
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />

                  {/* Avatar */}
                  <Image
                    src="/avatar.avif"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                    alt="Mentor 1"
                  />

                  {/* Name and Email */}
                  <div>
                    <p className="font-bold text-[#4F4F4F]">{name}</p>
                    <p className="text-gray-500 text-sm">
                      maxwellsmith@gmail.com
                    </p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex space-x-2 ml-[20px] gap-2">
                  <button
                    type="button"
                    className="bg-red-100 hover:bg-red-200 border-2 border-red-300 text-red-500 px-3 py-1 rounded-xl text-[12px] font-medium transition-colors w-[78.83px] h-[31.53px] text-center cursor-pointer"
                  >
                    Reject
                  </button>

                  <button
                    type="button"
                    className="bg-purple-800 text-purple-100 px-3 py-1 rounded-xl text-[12px] font-medium transition-colors w-[83.83px] h-[31.53px] text-center cursor-pointer"
                  >
                    Accept
                  </button>
                </div>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Applications;
