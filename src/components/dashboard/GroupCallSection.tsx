
import React from "react";
import { Video, VideoOff, Mic, MicOff, PhoneCall, Users } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Participant = {
  name: string;
  avatarUrl: string;
  isMuted: boolean;
  isVideoOn: boolean;
  isSpeaking?: boolean;
};

type GroupCallSectionProps = {
  participants: Participant[];
  callTitle: string;
  time: string;
  onLeave?: () => void;
};

const GroupCallSection: React.FC<GroupCallSectionProps> = ({
  participants,
  callTitle,
  time,
  onLeave,
}) => {
  // Responsive: <4 participants = center, >=4 allows scroll on mobile
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg p-3 sm:p-4 mb-8 animate-fade-in transition-all duration-500">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3 md:mb-4">
        <div className="flex-1 min-w-0">
          <h2 className="font-bold text-base sm:text-lg text-techrity-purple flex items-center gap-2">
            <Users className="text-techrity-purple" size={20} />
            {callTitle}
          </h2>
          <div className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide mt-1">
            {time}
          </div>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 text-xs rounded-lg bg-destructive/90 text-white font-semibold shadow hover:bg-destructive transition-all duration-150 focus-visible:outline focus-visible:ring-2 focus-visible:ring-destructive/70 active:scale-95"
          onClick={onLeave}
        >
          <PhoneCall size={16} />
          Leave Call
        </button>
      </div>
      <div className="flex flex-col-reverse md:flex-row md:items-center gap-3 md:gap-4 justify-between">
        {/* Avatars Row */}
        <div className="w-full flex overflow-x-auto gap-4 py-2 px-1 custom-scrollbar md:w-auto md:justify-start">
          {participants.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col items-center group transition-transform duration-200 hover:scale-105 rounded-full ${
                p.isSpeaking
                  ? "speaking-ring ring-2 ring-techrity-purple"
                  : "ring-0"
              }`}
              style={{
                marginBottom: "0.75rem",
                minWidth: "58px",
                maxWidth: "70px",
              }}
            >
              <Avatar className="h-14 w-14 sm:h-16 sm:w-16 border-2 border-white shadow-md bg-techrity-purple/10 transition-all" >
                <AvatarImage src={p.avatarUrl} />
                <AvatarFallback>{p.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-1 absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white drop-shadow px-1.5 py-0.5 rounded-full text-xs">
                {p.isVideoOn ? (
                  <Video size={14} className="text-green-500" />
                ) : (
                  <VideoOff size={14} className="text-gray-400" />
                )}
                {p.isMuted ? (
                  <MicOff size={14} className="text-gray-400" />
                ) : (
                  <Mic size={14} className="text-green-500" />
                )}
              </div>
              <span className="block text-xs font-medium mt-2 truncate w-full text-center">{p.name}</span>
            </div>
          ))}
        </div>
        {/* Controls - show on md+ right, below on mobile */}
        <div className="flex flex-row items-center justify-center md:justify-end w-full md:w-auto gap-3 mt-1 md:mt-0">
          <button className="flex items-center justify-center rounded-full bg-gray-100 hover:bg-techrity-purple/10 p-3 shadow hover-scale duration-100 focus-visible:ring-2 focus-visible:ring-techrity-purple">
            {/* In a real app: would navigate prev participants */}
            <svg width={22} height={22} fill="none" viewBox="0 0 20 20"><path d="M13 16l-5-6 5-6" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button className="flex items-center justify-center rounded-full bg-gray-100 hover:bg-techrity-purple/10 p-3 shadow hover-scale duration-100 focus-visible:ring-2 focus-visible:ring-techrity-purple">
            {/* In a real app: would navigate next participants */}
            <svg width={22} height={22} fill="none" viewBox="0 0 20 20"><path d="M7 16l5-6-5-6" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupCallSection;
