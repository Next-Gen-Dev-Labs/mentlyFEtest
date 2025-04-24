import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";

export default function ProfileHeader({ toggleWidgetPanel }) {
  return (
    <>
      <div className="bg-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top navigation bar */}
          <div className="flex justify-between items-center bg-white rounded-md shadow h-16">
            <div className="flex-1"></div>
            <div className="flex items-center space-x-4">
              {/* Notification bell */}
              <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
                <IoMdNotificationsOutline className="h-6 w-6" />
              </button>

              {/* User profile info */}
              <div className="flex items-center space-x-2 pr-4">
                <div className="flex flex-col items-end text-sm">
                  <span className="font-medium text-purple-700">
                    Techrity Foundation
                  </span>
                  <span className="text-gray-500">Member</span>
                </div>

                {/* Profile picture */}
                <div className="relative w-8 h-8 rounded-md overflow-hidden bg-purple-600">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                    P
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom header with widgets section */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex-1"></div>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleWidgetPanel}
              className="p-2 border border-gray-200 rounded flex items-center space-x-2 text-gray-600 hover:bg-gray-50"
            >
              <BiMenuAltLeft className="w-6 h-6" />
              <span>Manage Widgets</span>
            </button>
          </div>
        </div>

        {/* Welcome banner */}
        <div className="mb-4 bg-[#6F01D0] text-white rounded-md px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-bold">Welcome Aboard, Blessing</h2>
            <span className="text-xl">👋</span>
          </div>
          <div className="flex items-center">
            <p className="mr-4 hidden sm:block text-[#BDBDBD]">
              We're thrilled to have you join Techrity Team!
            </p>
            <button className="bg-white text-purple-800 px-4 py-2 rounded-md font-medium hover:bg-gray-100">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
