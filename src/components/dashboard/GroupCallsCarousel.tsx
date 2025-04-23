
import React from "react";
import { Users, Video } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
  return (
    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm animate-fade-in mb-4">
      <div className="flex justify-between items-center mb-3">
        <div className="font-bold text-sm sm:text-base flex items-center gap-2 text-techrity-purple">
          <Video className="text-techrity-purple" size={19} />
          <span>Group Calls</span>
        </div>
        <a href="#" className="text-techrity-purple text-xs font-medium hover:underline">See all</a>
      </div>
      <div className="overflow-x-auto flex gap-4 scrollbar-thin py-2">
        {groupCalls.map(call => (
          <div key={call.id} className="min-w-[250px] max-w-xs bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-all duration-200 hover-scale flex flex-col animate-fade-in" style={{ flex: "0 0 250px" }}>
            <div className="h-20 w-full rounded-t-lg overflow-hidden flex items-center justify-center relative">
              <img src={call.image} alt={call.title} className="object-cover w-full h-full" />
              <div className="absolute top-1 left-1 flex gap-1">
                {call.tags && call.tags.map(tag => (
                  <span key={tag} className="bg-techrity-purple/10 text-techrity-purple text-[10px] font-semibold px-2 py-0.5 rounded">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex-1 p-3 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                {call.participants.slice(0, 2).map((p, i) => (
                  <Avatar key={i} className="h-6 w-6 border-2 border-white -ml-1 first:ml-0">
                    <AvatarImage src={p.avatarUrl} />
                    <AvatarFallback>{p.name[0]}</AvatarFallback>
                  </Avatar>
                ))}
                {call.participants.length > 2 && (
                  <span className="text-[11px] text-gray-500 ml-1">+{call.participants.length - 2}</span>
                )}
              </div>
              <h4 className="text-xs font-bold truncate mb-1" title={call.title}>{call.title}</h4>
              <p className="text-[11px] text-gray-500 truncate mb-2 flex-1">{call.description}</p>
              <div className="flex items-center justify-between text-[10px] text-gray-400 mb-3">
                <span>{call.time}</span>
              </div>
              <div className="flex gap-2">
                <button
                  className="view-button w-full text-xs"
                  onClick={() => onViewParticipants?.(call.id)}
                >
                  View Participants
                </button>
                <button
                  className="join-button w-full text-xs"
                  onClick={() => onJoin?.(call.id)}
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupCallsCarousel;
