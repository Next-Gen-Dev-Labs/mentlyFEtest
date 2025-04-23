import { Bell } from "lucide-react";
import Image from "next/image";

export default function NotificationHeader() {
  return (
    <div className="flex justify-end items-center h-full w-full space-x-4 md:space-x-6">
      {/* Notification Bell */}
      <div className="relative hidden sm:block">
        <Bell className="h-5 w-5 text-gray-700" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-3 h-3 rounded-full" />
      </div>

      {/* Avatar and Name */}
      <div className=" items-center space-x-2 md:space-x-4 hidden sm:block">
        <div className="w-10 h-10 rounded-full bg-purple-400 flex items-center justify-center overflow-hidden">
          <Image
            src="/logo.svg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full w-10 h-10 object-cover"
          />
        </div>

        <div className="hidden sm:block">
          <p className="text-sm font-medium text-gray-800">Techrity Foun...</p>
          <p className="text-xs text-gray-500">Member</p>
        </div>
      </div>

      {/* Purple Box (Widget/Menu icon or anything else) */}
      <div className="hidden sm:block w-6 h-6 bg-purple-600 rounded-md" />
    </div>
  );
}
