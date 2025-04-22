'use client';
import React, { useRef } from 'react';
import { Menu, MoreVertical, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { GroupCall } from '../../types/groupcall';


interface GroupCallsProps {
  calls: GroupCall[];
  onViewParticipants?: (callId: string) => void;
  onJoinNow?: (callId: string) => void;
  onSeeAll?: () => void;
}

export default function GroupCalls({
  calls,
  onViewParticipants = () => {},
  onJoinNow = () => {},
  onSeeAll = () => {},
}: GroupCallsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="p-4 bg-white rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Menu size={20} className="text-gray-500 mr-2" />
          <h1 className="text-lg text-gray-500 font-normal">Group Calls</h1>
        </div>
        <div className="flex items-center">
          <button 
            onClick={onSeeAll}
            className="text-purple-700 text-sm font-medium mr-2"
          >
            See all
          </button>
          <button>
            <MoreVertical size={20} className="text-gray-500" />
          </button>
        </div>
      </div>
      
      {/* Horizontally Scrollable Calls */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-4 space-x-4 scrollbar-hide" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {calls.map((call) => (
          <div 
            key={call.id} 
            className="bg-gray-100 rounded-lg overflow-hidden shadow-sm flex-shrink-0"
            style={{ width: 'calc(100vw - 3rem)', maxWidth: '320px' }}
          >
            {/* Thumbnail */}
            <div 
              className="h-32 bg-cover bg-center relative"
              style={{ backgroundImage: `url(/api/placeholder/300/120)` }}
            >
              {/* Status Badge */}
              <div className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs flex items-center ${
                call.status === 'ongoing' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-indigo-100 text-indigo-800'
              }`}>
                <span className={`w-2 h-2 rounded-full mr-1 ${
                  call.status === 'ongoing' ? 'bg-green-500' : 'bg-indigo-500'
                }`}></span>
                <span className="capitalize">{call.status}</span>
              </div>
            </div>
            
            {/* Call Details */}
            <div className="p-4">
              <h3 className="font-medium text-gray-800 mb-3">{call.title}</h3>
              
              {/* Date and Time */}
              <div className="flex space-x-4 mb-3">
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar size={14} className="mr-1" />
                  <span>{call.date}</span>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock size={14} className="mr-1" />
                  <span>{call.timeRange}</span>
                </div>
              </div>
              
              {/* Category and Study Group */}
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center mr-2">
                  <User size={12} className="text-white" />
                </div>
                <div className="text-xs text-gray-600">
                  <div>{call.category}</div>
                  <div>{call.studyGroup}</div>
                </div>
              </div>
              
              {/* Participants and Action */}
              <div className="flex justify-between items-center">
                <div className="flex -space-x-2">
                  {call.participants.slice(0, 3).map((participant, index) => (
                    <div 
                      key={participant.id} 
                      className="w-6 h-6 rounded-full border border-white overflow-hidden"
                    >
                      {participant.avatar ? (
                        <img 
                          src="/api/placeholder/24/24" 
                          alt={participant.name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                          <span className="text-xs text-gray-600">{participant.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={() => onViewParticipants(call.id)}
                    className="px-3 py-1 text-xs border border-purple-700 text-purple-700 rounded-md"
                  >
                    View Participants
                  </button>
                  <button 
                    onClick={() => onJoinNow(call.id)}
                    className={`px-3 py-1 text-xs text-white rounded-md flex items-center ${
                      call.status === 'ongoing' ? 'bg-purple-700' : 'bg-purple-400'
                    }`}
                  >
                    Join Now
                    <ArrowRight size={12} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Custom CSS to hide scrollbar for webkit browsers */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

// Default data for demonstration
