
import React from "react";
import { Video, VideoOff, Mic, MicOff, PhoneCall, Users, User, ArrowLeft, ArrowRight } from "lucide-react";
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
  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-4 mb-8 animate-fade-in">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h2 className="font-bold text-sm sm:text-base text-techrity-purple flex items-center gap-2">
            <Users className="text-techrity-purple" size={18} />
            {callTitle}
          </h2>
          <div className="text-xs text-gray-500">{time}</div>
        </div>
        <button
          className="flex items-center gap-1 px-3 py-1.5 text-xs rounded-md bg-destructive/90 text-white font-medium hover:bg-destructive transition-colors duration-150"
          onClick={onLeave}
        >
          <PhoneCall size={16} />
          Leave Call
        </button>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
        {/* Avatars Row */}
        <div className="flex items-center gap-3 overflow-x-auto custom-scrollbar py-2 px-1 w-full sm:w-auto">
          {participants.map((p, i) => (
            <div
              key={p.name}
              className={`relative flex flex-col items-center group transition-transform hover:scale-105 ${
                p.isSpeaking ? "ring-2 ring-techrity-purple" : ""
              }`}
            >
              <Avatar className="h-12 w-12 sm:h-14 sm:w-14 border-2 border-white shadow-sm transition">
                <AvatarImage src={p.avatarUrl} />
                <AvatarFallback>{p.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-1 absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full shadow px-2 py-0.5 text-xs mt-1">
                {p.isVideoOn ? (
                  <Video size={15} className="text-green-500" />
                ) : (
                  <VideoOff size={15} className="text-gray-400" />
                )}
                {p.isMuted ? (
                  <MicOff size={15} className="text-gray-400" />
                ) : (
                  <Mic size={15} className="text-green-500" />
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Controls */}
        <div className="flex-1 flex flex-row justify-center sm:justify-end gap-2 sm:gap-4 mt-4 sm:mt-0">
          <button className="flex items-center justify-center rounded-full bg-gray-100 hover:bg-techrity-purple/10 p-2 shadow transition-transform hover:scale-110 duration-100">
            <ArrowLeft size={20} />
          </button>
          <button className="flex items-center justify-center rounded-full bg-gray-100 hover:bg-techrity-purple/10 p-2 shadow transition-transform hover:scale-110 duration-100">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupCallSection;
