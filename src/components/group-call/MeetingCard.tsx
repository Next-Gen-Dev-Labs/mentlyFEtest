import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface MeetingCardProps {
  id: number;
  tag: string;
  image: string;
}

const MeetingCard = ({id, tag, image}: MeetingCardProps) => {
  return (
    <div key={id} className="w-auto rounded-xl bg-[#F9F7FF] p-3">
      {/* Card Header Images */}
      <Image src={`/SVGs/${image}`} className="rounded-[9.7px] !w-auto !h-auto" width={0} height={69} alt="img1" />

      {/* Card Content */}
      <div className="mt-1.5">
        {/* Status Badge */}
        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs ${tag === "Ongoing" ? "text-[#1F8B01] bg-green-100" : "text-[#1C0AE1] bg-[#E0DDFF]"}  mb-2`}>
          <div className={`w-2 h-2 rounded-full ${tag === "Ongoing" ? "bg-[#1F8B01]" : "bg-[#1C0AE1]"}  mr-1.5`}></div>
          <span>{tag}</span>
        </div>
        {/* Meeting Title */}
        <h3 className="text-[16px] font-medium font-chivo text-[#595564] mb-3">Weekly Meeting - Product Demo Review with Testers</h3>
        
        {/* Thin Horizontal Separator */}
        <Separator className="my-4 bg-gray-200" />

        {/* Date & Time Container */}
        <div className="flex items-center gap-4 justify-between text-sm text-gray-500 mb-3">
          {/* Date with Right Border */}
          <div className="flex items-center pr-4 border-r border-gray-300">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className="font-medium text-[8px] font-chivo leading-[16px] text-[#595564]">Mon, Jul 30, 2024</span>
          </div>
          
          {/* Time */}
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-[#595564] font-chivo text-[8px] font-medium">9:00-11:00AM</span>
          </div>
        </div>

        {/* Study Group and Mentor Container */}
        <div className="flex items-center justify-between mb-4">
          {/* Study Group */}
          <div className="flex-col justify-start items-center">
            <span className="font-chivo ml-4 font-normal text-[6.47px] text-[#A195C0]">Study Group</span>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-black mr-2"></div>
              <span className="text-sm font-chivo text-[#595564]">UX Strategy Study group</span>
            </div>
          </div>

          {/* Mentor Avatars */}
          <div className="flex flex-col justify-start items-center">
            <span className="font-chivo font-normal text-[6.47px] text-[#A195C0]">Mentors</span>
            <Image src="/SVGs/mentor.svg" alt="mentors" width={31} height={14} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 justify-between mt-2">
          <button className="border-[#6F01D0] cursor-pointer font-medium rounded-[7px] w-[119px] h-[32px] text-[#6F01D0] border-[0.7px] text-[12px] font-chivo bg-white">View Participants</button>
          <button className={`border-none font-chivo font-medium rounded-[7px] w-[98px] h-[34px] text-white text-[12.5px] ${tag === "Upcoming" ? "bg-[#6F01D04D] cursor-not-allowed" : "bg-[#6F01D0] cursor-pointer hover:bg-[#c489f7]"} flex items-center justify-center`}>
            Join Now <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetingCard;
