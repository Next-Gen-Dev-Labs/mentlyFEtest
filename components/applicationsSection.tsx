import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { applications } from "@/constants";
import { LuEllipsisVertical } from "react-icons/lu";

export default function ApplicationsSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <Image
            src="/images/menu.png"
            alt="Menu"
            width={16}
            height={16}
            className="h-4 w-4"
          />
          <h2 className="font-bold text-[#B0B0B0] mb-2">Applications</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-purple-700">
            See all
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-500">
            <LuEllipsisVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="px-4 pb-4">
        {/* Mentors Section */}
        <div className="text-sm text-gray-500 mb-3">Mentors</div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Checkbox id="mentor-1" className="rounded-sm" />
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-yellow-200">
                <Image
                  src="/images/mentorright.png"
                  alt="Maxwell Smith"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col ">
                <span className="text-base font-bold">Maxwell Smith</span>
                <span className="text-xs text-[#7D8DA6] truncate w-[98px]">
                  maxwellsmith@gmail.com
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-9 px-5 text-[10px] border-red-200 bg-[#FFEDED] text-red-500 hover:bg-red-50 rounded-md"
              >
                Reject
              </Button>
              <Button
                variant="default"
                size="sm"
                className="h-9 px-5 text-[10px] bg-purple-700 hover:bg-purple-800 rounded-md"
              >
                Accept
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 ml-5 -mt-2 mb-4">
            <span className="text-[9px] bg-[#F3ECF9] text-[#9985A7] px-2 py-1 rounded-md">
              Product Designer
            </span>
            <span className="text-[9px] bg-[#E8FDFB] text-[#58948E] px-2 py-1 rounded-md">
              4years Experience
            </span>
            <div className="flex items-center text-[9px] bg-[#E3ECF9] text-[#8196B5] px-2 py-1 rounded-md">
              <span className="mr-1">🇳🇬</span>
              <span>Lagos, Nigeria</span>
            </div>
            <span className="text-[9px] bg-[#F4F4F4] text-[#595564] px-2 py-1 rounded-md">
              GMT +1
            </span>
          </div>
        </div>

        <div className="h-px bg-gray-200 my-4"></div>

        {/* Students Section */}
        <div className="text-sm text-gray-500 mb-3 py-5">Students</div>
        <div className="space-y-4">
          {applications.slice(1, 5).map((app, index) => (
            <div
              key={app.id}
              className={`flex items-center justify-between ${
                index < 4 ? "mb-4" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <Checkbox id={`student-${app.id}`} className="rounded-sm" />
                <div className="h-10 w-10 rounded-full overflow-hidden">
                  <Image
                    src={
                      index === 0 || index === 2
                        ? "/images/student.jpg"
                        : "/images/mentorright.png"
                    }
                    alt={app.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-medium">{app.name}</span>
                  <span className="text-xs text-gray-500 truncate w-[120px]">
                    maxwellsmith@gmail.com
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 px-5 text-[10px] border-red-200 bg-[#FFEDED] text-red-500 hover:bg-red-50 rounded-md"
                >
                  Reject
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="h-9 px-5 text-[10px] bg-purple-700 hover:bg-purple-800 rounded-md"
                >
                  Accept
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
