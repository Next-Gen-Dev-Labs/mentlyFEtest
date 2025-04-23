import React from "react";
import Image from "next/image";
import {
  Menu,
  MoreVertical,
  ArrowRight,
  Calendar,
  Clock,
} from "lucide-react";

const GroupCard = () => {
  return (
    <div className="w-[850px] h-[350px] bg-white rounded-[10.21px] px-4">
    <div>
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <button className="p-2">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-[16px] font-bold  text-gray-400">
            Group Calls
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <a href="#" className="text-purple-600  text-[12px] font-bold">
            See all
          </a>
          <button className="p-2">
            <MoreVertical className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </header>

      {/* Group Calls Grid */}
      <div className="p-4 overflow-x-auto">
        <div className="flex gap-6 w-max">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-xl overflow-hidden w-[279px] h-[260px] shadow-sm border shrink-0">
            <div className="h-12 relative">
              <Image
                src="/bgImage2.jpg"
                alt="Dental imagery"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div>
                <span className="bg-green-100 text-green-800 rounded-full px-4 py-1 text-xs font-medium flex items-center w-fit">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Ongoing
                </span>
              </div>
              <h2 className="text-gray-700 text-sm font-semibold leading-snug mb-2">
                Weekly Meeting - Product Demo Review with Testers
              </h2>
              <div className="flex items-center justify-between mb-4 text-gray-600 text-xs">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Mon. Jul 30, 2024
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  9:00 - 11:00AM
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-[10px] text-gray-500 mb-1">
                    Study Group
                  </p>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs mr-2">
                      U
                    </div>
                    <span className="text-xs text-gray-700">
                      UX Strategy Study group
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <div className="flex -space-x-1">
                      <Image
                        src="/avatar.avif"
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full border-2 border-white object-cover"
                        alt="Mentor 1"
                      />
                      <Image
                        src="/avatar2.png"
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full border-2 border-white object-cover"
                        alt="Mentor 2"
                      />
                      <Image
                        src="/avatar.avif"
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full border-2 border-white object-cover"
                        alt="Mentor 3"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mb-6">
                <button className="flex-1 py-2 border border-purple-600 text-purple-600 rounded-lg text-xs font-medium">
                  View Participants
                </button>
                <button className="flex-1 py-2 bg-purple-600 text-white rounded-lg text-xs font-medium flex items-center justify-center">
                  Join Now
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 - Repeat with same structure */}
          <div className="bg-gray-50 rounded-xl overflow-hidden w-[279px] h-[260px] shadow-sm border shrink-0">
            <div className="h-12 relative">
              <Image
                src="/bgImage2.jpg"
                alt="Dental imagery"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div>
                <span className="bg-green-100 text-green-800 rounded-full px-4 py-1 text-xs font-medium flex items-center w-fit">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Ongoing
                </span>
              </div>
              <h2 className="text-gray-700 text-sm font-semibold leading-snug mb-2">
                Weekly Meeting - Product Demo Review with Testers
              </h2>
              <div className="flex items-center justify-between mb-4 text-gray-600 text-xs">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Mon. Jul 30, 2024
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  9:00 - 11:00AM
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-[10px] text-gray-500 mb-1">
                    Study Group
                  </p>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs mr-2">
                      U
                    </div>
                    <span className="text-xs text-gray-700">
                      UX Strategy Study group
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <div className="flex -space-x-1">
                      <Image
                        src="/avatar.avif"
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full border-2 border-white object-cover"
                        alt="Mentor 1"
                      />
                      <Image
                        src="/avatar2.png"
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full border-2 border-white object-cover"
                        alt="Mentor 2"
                      />
                      <Image
                        src="/avatar.avif"
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full border-2 border-white object-cover"
                        alt="Mentor 3"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mb-6">
                <button className="flex-1 py-2 border border-purple-600 text-purple-600 rounded-lg text-xs font-medium">
                  View Participants
                </button>
                <button className="flex-1 py-2 bg-purple-600 text-white rounded-lg text-xs font-medium flex items-center justify-center">
                  Join Now
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 - Repeat as needed */}
          <div className="bg-gray-50 rounded-xl overflow-hidden w-[279px] h-[260px] shadow-sm border shrink-0">
            <div className="h-12 relative">
              <Image
                src="/bgImage2.jpg"
                alt="Dental imagery"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div>
                <span className="bg-green-100 text-green-800 rounded-full px-4 py-1 text-xs font-medium flex items-center w-fit">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Ongoing
                </span>
              </div>
              <h2 className="text-gray-700 text-sm font-semibold leading-snug mb-2">
                Weekly Meeting - Product Demo Review with Testers
              </h2>
              <div className="flex items-center justify-between mb-4 text-gray-600 text-xs">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Mon. Jul 30, 2024
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  9:00 - 11:00AM
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-[10px] text-gray-500 mb-1">
                    Study Group
                  </p>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs mr-2">
                      U
                    </div>
                    <span className="text-xs text-gray-700">
                      UX Strategy Study group
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <div className="flex -space-x-1">
                      <Image
                        src="/avatar.avif"
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full border-2 border-white object-cover"
                        alt="Mentor 1"
                      />
                      <Image
                        src="/avatar2.png"
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full border-2 border-white object-cover"
                        alt="Mentor 2"
                      />
                      <Image
                        src="/avatar.avif"
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full border-2 border-white object-cover"
                        alt="Mentor 3"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mb-6">
                <button className="flex-1 py-2 border border-purple-600 text-purple-600 rounded-lg text-xs font-medium">
                  View Participants
                </button>
                <button className="flex-1 py-2 bg-purple-600 text-white rounded-lg text-xs font-medium flex items-center justify-center">
                  Join Now
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default GroupCard