import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { programs } from "@/constants";
import { LuEllipsisVertical } from "react-icons/lu";

export default function ProgramsSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden lg:max-w-[329px] w-full">
      <div className="flex flex-col">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/menu.png"
              alt="Logo"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            <h2 className="font-bold text-[#B0B0B0] mb-2">Programs</h2>
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
        <div className="flex items-center gap-2 pl-[120px]">
          <span className="text-sm text-[#918C9C] font-medium">Filter:</span>
          <Select defaultValue="newest">
            <SelectTrigger className="h-8 w-24 text-xs border font-medium bg-purple-50 text-[#595564]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Active</SelectItem>
              <SelectItem value="oldest">Busy</SelectItem>
              <SelectItem value="popular">BRB</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {programs.map((program) => (
          <div
            key={program.id}
            className="rounded-lg overflow-hidden relative shadow-lg"
          >
            <div className="bg-purple-700 h-24 relative">
              <Image
                src={program.banner || "/placeholder.svg"}
                alt="Program"
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
              <Image
                src="/images/settings.png"
                alt="Program"
                width={24}
                height={24}
                className="absolute top-2 right-2"
              />
              <div className="absolute bottom-0 left-0 p-2 flex items-center">
                <div
                  className={`w-[8px] h-[8px] ${
                    program.badge === "Bootcamp"
                      ? "bg-[#0077FF]"
                      : "bg-[#008000]"
                  }  rounded-full absolute bottom-0 top-[11px] left-[19px]`}
                ></div>
                <Badge
                  className={`${program.badgeColor} w-[95px] h-[15px] text-[10px] font-bold`}
                >
                  {program.badge}
                </Badge>
              </div>
            </div>
            <div className="pb-4 px-3">
              <h3 className="font-bold text-lg text-white absolute top-0 w-[224px]">
                {program.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {program.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex -space-x-2">
                  {program.mentors.map((mentor, idx) => (
                    <div
                      key={idx}
                      className="w-[24px] h-[24px] rounded-full border-2 border-white overflow-hidden"
                    >
                      <Image
                        src={mentor}
                        alt={`Mentor ${idx + 1}`}
                        width={24}
                        height={24}
                      />
                    </div>
                  ))}
                  <span className="text-xs text-gray-500 ml-2 flex items-center">
                    {program.role}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[8px] h-[22px] border-[#6F01D0] w-[65px] text-[#6F01D0] rounded-[3px] cursor-pointer"
                  >
                    View Details
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="text-[8px] h-[22px] bg-purple-700 w-[65px] hover:bg-purple-800 rounded-[3px] cursor-pointer"
                  >
                    {program.buttonLabel}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
