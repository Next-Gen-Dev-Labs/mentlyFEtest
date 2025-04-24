import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarIcon, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface GroupCallCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  date: string;
  time: string;
  studyGroup: {
    name: string;
    avatar: string;
  };
  mentors: Array<{
    avatar: string;
  }>;
}


export function GroupCallCard({
  className,
  imageUrl,
  title,
  date,
  time,
  studyGroup,
  mentors,
  ...props
}: GroupCallCardProps) {
  return (
    <div 
      className={cn("w-[88vw] lg:w-[380px] overflow-hidden rounded-lg border bg-[#F9F7FF] shadow-sm", className)} 
      {...props}
    >
      <div className="flex flex-col gap-y-2">
        {/* Image Banner */}
        <div className="relative p-3 pb-0 gap-y-2 flex flex-col">
          <Image 
            src={`/${imageUrl}`}
            alt="Meeting banner"
            className="w-full rounded-t-lg object-cover"
            width={360}
            height={200}
          />
          {/* Status Badge */}
          <div className="w-max">
            <div className="bg-[#2AC10033] text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
              <div className="w-2 h-2 bg-green-800 rounded-full"></div>
              Ongoing
            </div>
          </div>
        </div>

        <div className="p-4 pt-0 flex flex-col h-full">
          {/* Title */}
          <h2 className="text-base font-semibold text-gray-800 line-clamp-2 mb-2">{title}</h2>

          <Separator className="mb-3"/>

          {/* Date and Time */}
          <div className="flex items-center justify-between mb-3 text-xs">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700">{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700">{time}</span>
            </div>
          </div>

          {/* Study Group and Mentors */}
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1.5">
              <div className="flex items-end gap-2">
                <Image 
                  src={`/${studyGroup.avatar}`}
                  alt="Study group"
                  className="w-6 h-6 rounded-full"
                  width={24}
                  height={24}
                />
                <div>
              <p className="text-gray-500 text-xs">Study Group</p>

                <span className="text-gray-700 text-xs">{studyGroup.name}</span>
                </div>
              </div>
            </div>
            <div className="space-y-1.5 mr-14">
              <p className="text-gray-500 text-xs">Mentors</p>
              <div className="flex -space-x-2">
                {mentors.map((mentor, index) => (
                  <Image 
                    key={index}
                    src={`/${mentor.avatar}`}
                    alt={`Mentor ${index + 1}`}
                    className="w-6 h-6 rounded-full border-2  border-white"
                    width={24}
                    height={24}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button variant="outline"  className="flex-1 text-xs shadow-none rounded-md border-purple-600 text-purple-700 hover:font-bold hover:text-purple-700 hover:bg-purple-50 duration-300 transition-all">View Participant</Button>
            <Button  className="flex-1 bg-purple-600 hover:bg-purple-700 text-xs shadow-none flex item-center rounded-md">
            Join Now <ArrowRight /></Button>
          </div>
        </div>
      </div>
    </div>
  );
}