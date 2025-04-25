import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { groupCalls } from "@/constants";
import { LuEllipsisVertical } from "react-icons/lu";

export default function GroupCallsSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden lg:max-w-[620px] w-full">
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-2">
          <Image
            src="/images/menu.png"
            alt="Menu"
            width={16}
            height={16}
            className="h-4 w-4"
          />
          <h2 className="font-bold text-[#B0B0B0] mb-2">Group Calls</h2>
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

      <div className="p-4 flex lg:flex-row flex-col gap-4 overflow-x-auto">
        {groupCalls.map((call) => (
          <div
            key={call.id}
            className="border rounded-lg overflow-hidden w-[320px] bg-[#F9F7FF] p-3 flex-shrink-0"
          >
            {/* Card Header Image */}
            <div className="relative">
              <Image
                src={call.image || "/placeholder.svg"}
                alt={call.title}
                width={300}
                height={120}
                className="w-full h-[120px] object-cover rounded-[19px] pb-2"
              />

              {/* Status Badge */}
              <div className="flex items-center">
                <div
                  className={`w-[8px] h-[8px] absolute left-[10px] ${
                    call.status === "Incoming" ? "bg-[#1C0AE1]" : "bg-[#008000]"
                  }  rounded-full`}
                ></div>
                <Badge
                  className={`${call.badgeColor} w-[95px] h-[15px] text-[10px] font-bold ${call.textColor}`}
                >
                  {call.status}
                </Badge>
              </div>
            </div>

            {/* Card Content */}
            <div className="py-3 px-1">
              {/* Title */}
              <h3 className="font-semibold text-gray-800 text-base">
                {call.title}
              </h3>

              {/* Date and Time */}
              <div className="flex items-center gap-4 mt-3 border-b pb-3">
                <div className="flex items-center gap-2">
                  <div className="text-gray-500">
                    <Image
                      src="/images/calender.png"
                      alt="Calendar"
                      width={16}
                      height={16}
                    />
                  </div>
                  <span className="text-[9px] text-gray-600">{call.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-gray-500">
                    <Image
                      src="/images/time.png"
                      alt="Clock"
                      width={16}
                      height={16}
                    />
                  </div>
                  <span className="text-[9px] text-[#595564] font-medium">
                    {call.time}
                  </span>
                </div>
              </div>

              {/* Study Group and Mentors */}
              <div className="flex gap-6 items-center mt-3">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-[#A195C0] font-medium">
                    Study Group
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs">
                      U
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-medium">
                        {call.studyGroup}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-500">Mentors</span>
                  <div className="flex -space-x-2 mt-1">
                    {[...Array(3)].map((_, idx) => (
                      <div
                        key={idx}
                        className="h-6 w-6 rounded-full border-2 border-white overflow-hidden"
                        style={{
                          backgroundColor: ["#FF5733", "#33FF57", "#3357FF"][
                            idx
                          ],
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-sm h-10 flex-1 border-[#6F01D0] text-purple-700"
                >
                  View Participants
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className={`text-sm h-10 w-[50px] flex-1 ${
                    call.isDisabled
                      ? "bg-[#6f01d033] hover:bg-[#6f01d031] cursor-not-allowed"
                      : "bg-purple-700 hover:bg-purple-800 cursor-pointer"
                  }  flex items-center justify-center`}
                >
                  Join Now
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
