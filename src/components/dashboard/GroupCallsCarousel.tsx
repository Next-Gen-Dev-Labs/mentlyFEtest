import React, { useRef } from "react";
import { Users, Video, ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import SectionHeader from "./SectionHeader";
import { cn } from "@/lib/utils";

// Type for a single group call card
export type GroupCallCardProps = {
  id: number;
  image: string;
  title: string;
  description: string;
  time: string;
  tags?: string[];
  participants: {
    name: string;
    avatarUrl: string;
  }[];
};

type GroupCallsCarouselProps = {
  groupCalls: GroupCallCardProps[];
  onJoin?: (id: number) => void;
  onViewParticipants?: (id: number) => void;
};

const GroupCallsCarousel: React.FC<GroupCallsCarouselProps> = ({
  groupCalls,
  onJoin,
  onViewParticipants,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

  const tagsMap = {
    "Ongoing": "bg-green-500/20 text-green-500 ",
    "Upcoming": "bg-techrity-purple/20 text-techrity-purple"
  }
  const tagsDotMap = {
    "Ongoing": "bg-green-500",
    "Upcoming": "bg-techrity-purple"
  }

  return (
    <div className="bg-white rounded-lg shadow-sm animate-fade-in mb-4">
      <div className="p-2"> <SectionHeader title="Group Calls" /> </div>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-all"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto flex gap-4 pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent px-6 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {groupCalls.map(call => (
            <div
              key={call.id}
              className="min-w-[300px] max-w-[250px] bg-techrity-muted/2.5 rounded-lg hover:shadow-lg transition-all duration-200 flex flex-col animate-fade-in flex-shrink-0"
            >
              <div className="h-20 w-full rounded-t-lg overflow-hidden flex items-center justify-center relative">
                <img src={call.image} alt={call.title} className="object-cover w-full h-full p-1 rounded-xl" />
              </div>
              <div className="flex gap-1">
                {call.tags && call.tags.map(tag => (
                  <span key={tag} className={cn(`text-[10px] font-semibold px-2 py-0.5 m-2 mb-0 rounded-full flex items-center`, tagsMap[tag])}>
                    <span className={`w-2 h-2 rounded-full mr-1 ${tagsDotMap[tag]}`}></span>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex-1 p-3 flex flex-col">

                <h4 className="text-xs font-bold line-clamp-2 mb-1 text-techrity-muted" title={call.title}>{call.title}</h4>
                <p className="text-[11px] text-gray-500 truncate mb-2 flex-1">{call.description}</p>


                <div className="flex items-center justify-between text-[12px] text-gray-600 mb-3">
                  {/* <span>{call.time}</span> */}
                  <div className="flex items-center justify-between gap-1">
                    <Calendar className="h-4 w-4 " />
                    <span className="text-techrity-muted font-bold">Mon. Jul 30, 2024</span>
                  </div>
                  <div className="flex items-center justify-between gap-1">
                    <Clock className="h-4 w-4 " />
                    <span className="text-techrity-muted font-bold">9:00 - 11:00AM</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[12px] text-techrity-muted mb-3">
                  {/* <span>{call.time }</span> */}
                  <div className="flex items-center justify-between gap-1">
                    <Avatar className="h-4 w-4">
                      <AvatarImage src={call.image} />
                      <AvatarFallback>{call.image}</AvatarFallback>
                    </Avatar>
                    <div className="">
                      <p className="text-techrity-muted/50 font-bold">Study Group</p>
                      <span className="text-techrity-muted font-bold">UX Strategy  Study group</span>
                    </div>
                  </div>


                  <div className="">
                    <p className="text-techrity-muted/50 font-bold text-[10px]">Mentors</p>
                    <div className="flex items-center gap-2 mb-2">
                      {call.participants.slice(0, 2).map((p, i) => (
                        <Avatar key={i} className="h-7 w-7 border-2 border-white -ml-4 first:ml-0">
                          <AvatarImage src={p.avatarUrl} />
                          <AvatarFallback>{p.name[0]}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  </div>
                </div>


                <div className="flex w-full justify-between items-center gap-2">
                  <button
                    className="view-button w-full text-xs truncate"
                    onClick={() => onViewParticipants?.(call.id)}
                  >
                    View Participants
                  </button>
                  <button
                    className="join-button w-full text-xs flex items-center justify-between gap-2"
                    onClick={() => onJoin?.(call.id)}
                  >
                    Join Now
                    <ArrowRight className="s" size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-all"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default GroupCallsCarousel;
