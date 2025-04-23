import Image from "next/image";
import { Calendar, Clock, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";

interface MeetingCardProps {
  title: string;
  date: string;
  time: string;
  status: "ongoing" | "upcoming";
  group: string;
  mentors?: string[];
  image: string;
  position: string;
}

export function MeetingCard({
  title,
  date,
  time,
  status,
  group,
  mentors,
  image,
  position,
}: MeetingCardProps) {
  return (
    <div className="rounded-lg overflow-hidden min-w-[270px] bg-[#F9F7FF] p-3 shadow-lg">
      <div className="h-[68px] w-[244px]">
        <Image
          src={image}
          alt="Meeting thumbnail"
          height={68}
          width={244}
          className={`object-cover w-full h-full rounded-lg ${position}`}
        />
      </div>
      <div className="mt-3">
        <div className="flex items-center mb-2">
          {status === "ongoing" ? (
            <Badge className="bg-[#D4F3D4] w-max text-[#008000] h-[17px] text-[10px] leading-0 rounded-[10px] px-2 flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-[#008000] rounded-full"></div>
              <p>Ongoing</p>
            </Badge>
          ) : (
            <Badge className="bg-[#E0DDFF] w-max text-[#1C0AE1] h-[17px] text-[10px] leading-0 rounded-[10px] px-2 flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-[#1C0AE1] rounded-full"></div>
              <p>Upcoming</p>
            </Badge>
          )}
        </div>
        <h3 className="text-[17px] mb-2 text-[#595564] leading-[22px]">
          {title}
        </h3>
        <div className="border-[#D0D5DD] border mb-2"></div>
        <div className="flex items-center justify-around text-[8px] font-medium text-[#595564]">
          <div className="flex items-center gap-1  text-gray-500 border-[#D0D5DD] border-r-2 pr-4">
            <Calendar size={12} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1  text-gray-500">
            <Clock size={12} />
            <span>{time}</span>
          </div>
        </div>
        <div className="flex items-center justify-around gap-1 text-xs my-3">
          <div className="flex items-center w-max flex-col gap-[2px]">
            <p className="text-[#A195C0] text-[7px]">Study Group</p>
            <div className="flex gap-2">
              <div className="w-3.5 h-3.5 rounded-full">
                <img src={mentors?.[0]} alt="" className="rounded-full" />
              </div>
              <span className="text-[#595564] text-[8px] font-semibold">
                {group}
              </span>
            </div>
          </div>
          <div className="flex items-center flex-col w-max gap-[2px]">
            <p className="text-[#A195C0] text-[7px]">Mentors</p>
            <div className="flex -space-x-1">
              <div className="w-3.5 h-3.5 rounded-full">
                <img src={mentors?.[0]} alt="" className="rounded-full" />
              </div>
              <div className="w-3.5 h-3.5 rounded-full">
                <img src={mentors?.[0]} alt="" className="rounded-full" />
              </div>
              <div className="w-3.5 h-3.5 rounded-full">
                <img src={mentors?.[0]} alt="" className="rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 font-medium">
          <Button className="text-[12.5px] px-3.5 py-1 leading-[15px] text-[#6F01D0] flex items-center hover:text-[#6f01d0]/50 hover:border-[#6f01d0]/50  h-max w-max rounded-[7px] border-[0.8px] border-[#6F01D0]">
            View Participants
          </Button>
          {status === "ongoing" && (
            <Button className="text-[12.5px] px-3.5 py-1 h-max leading-[15px] w-max text-white rounded-[7px] bg-[#6F01D0] hover:bg-[#6F01D0]/50 flex items-center gap-2">
              <p>Join Now</p>
              <ArrowRight />
            </Button>
          )}
          {status === "upcoming" && (
            <Button
              disabled={true}
              className="text-[12.5px] px-3.5 py-1 h-max leading-[15px] w-max text-white rounded-[7px] bg-[#6F01D0]/30 flex items-center gap-2"
            >
              <p>Join Now</p>
              <ArrowRight />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
