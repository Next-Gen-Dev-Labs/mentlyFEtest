import { MoreHorizontal, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { mentors } from "@/constants";
import { LuEllipsisVertical } from "react-icons/lu";

export default function MentorsSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden lg:max-w-[280px] w-full">
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-2">
          <Image
            src="/images/menu.png"
            alt="Logo"
            width={16}
            height={16}
            className="h-4 w-4"
          />
          <h2 className="font-bold text-[#B0B0B0] mb-2">Mentors</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 rounded-full border border-[#9D92A6] size-6 cursor-pointer"
          >
            <Plus className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-500">
            <LuEllipsisVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {mentors.map((mentor, index) => (
          <div
            key={mentor.id}
            className="flex items-center lg:justify-none justify-between gap-3 md:flex-col lg:flex-row xl:flex-row"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <Image
                  src={`${
                    index === 0
                      ? "/images/mentorright.png"
                      : "/images/student.jpg"
                  }`}
                  alt={mentor.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium lg:truncate lg:w-[50px]">
                  {mentor.name}
                </span>
                <span className="text-[10px] text-gray-500 lg:truncate lg:w-[50px]">
                  {mentor.role}
                </span>
              </div>
            </div>
            <Button
              variant="default"
              size="sm"
              className="h-[22px] text-xs rounded-2xl bg-purple-700 hover:bg-purple-800"
            >
              Message
            </Button>
          </div>
        ))}

        <Button
          variant="ghost"
          size="sm"
          className="w-full text-purple-700 mt-4 bg-[#DDD6FB] h-[40px] rounded-3xl cursor-pointer"
        >
          See all
        </Button>
      </div>
    </div>
  );
}
