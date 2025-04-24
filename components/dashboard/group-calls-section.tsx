import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, CalendarIcon, Clock, BellIcon, MoreVertical, AlignJustify, MoveRight, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const groupCalls = [
  {
    id: 1,
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon, Jul 30, 2024",
    time: "11:00AM",
    status: "ongoing",
   
    group: "UX Strategy Study group",

    members: ["JS", "MM", "JJ"],
    imageUrl: "/rectangle.png"
  },
  {
    id: 2,
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon, Jul 30, 2024",
    time: "11:00AM",
    status: "upcoming",
   
    group: "UX Strategy Study group",
    members: ["RL", "KD"],
    imageUrl: "/rectangle3.png"
  },
  {
    id: 3,
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon, Jul 30, 2024",
    time: "9:00AM",
    status: "ongoing",
    group: "UX Strategy Study group",
 
    members: ["AB", "CD"],
   imageUrl: "/rectangle2.png"
  },
  {
    id:4,
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon, Jul 30, 2024",
    time: "9:00AM",
    status: "upcoming",
    group: "Yes Strategy Study group",
 
    members: ["BC", "CD"],
    imageUrl: "/banner.png"
  },
];

export function GroupCallsSection() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-5">

          <AlignJustify className="h-5 w-5 text-gray-500" />
          <h2 className="text-lg text-[#B0B0B0] font-medium">Group Calls</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-800 px-2">
            See all
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
        {groupCalls.map((call) => (
          <Card key={call.id} className="flex-shrink-0 w-full max-w-[320px] overflow-hidden">
            <div 
              className="h-[80px] w-full rounded-15px] bg-cover bg-center relative" 
              style={{ backgroundImage: `url(${call.imageUrl})` }}
            />
            <CardContent className="p-4">
              <div className="flex flex-col h-full">
                
                <Badge 
                  className={`self-start mb-2 ${
                    call.status === "ongoing" 
                      ? "bg-[#2AC10033] text-[#1F8B01] hover:bg-[#2AC10033]" 
                      : "bg-[#E0DDFF] hover:bg-[#E0DDFF] text-[#1C0AE1]"
                  }`}
                >

                  <div 
                  className={`self-start mb-2 ${
                    call.status === "ongoing" 
                      ? "rounded-[100%] mt-1.5 mr-1.5 p-1 w-[8px] h-[8px] bg-[#1F8B01] hover:bg-green-600" 
                      : "rounded-[100%] mt-1.5 mr-1.5 p-1 w-[8px] h-[8px] bg-[#1C0AE1]  hover:bg-[#1C0AE1] "
                  }`}>
                         
                  </div>
                  {call.status === "ongoing" ? "Ongoing" : "Upcoming"}
                </Badge>
                
                <h3 className="font-medium text-sm mb-3">{call.title}</h3>
                <hr />
                
                <div className="flex items-center gap-3 mb-2 mt-2">
                  <div className="flex items-center gap-1.5 border-r border-gray-300 pr-4">
                    <CalendarIcon className="h-4 w-4 text-gray-500" />
                  
                    <span className="text-xs text-gray-500">{call.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-gray-500" />
                    <span className="text-xs text-gray-500">{call.time}</span>
                  </div>
                </div>
                
                <div className="flex  items-center gap-1.5 mb-4">
                
              <div className="flex flex-col items-start gap-1.5">

              <span className="text-[8px] text-gray-500 mt-2">Study group</span>
              <div className="flex items-center gap-1.5">
               <Image src="/group.png" alt="Group Icon" width={14} height={14} className="h-4 w-4 text-gray-500" />
               <span className="text-xs text-gray-500">{call.group}</span>
               </div>
              </div>
                   <div className="flex flex-col  gap-1">

                   <span className="text-[8px] text-gray-500 mt-2">Mentors</span>
                                        <div className="flex -space-x-2">
                                          {(call.members ?? []).map((member, i) => (
                                            <Avatar key={i} className="border-2 border-white h-6 w-6">
                                              <AvatarImage src="/placeholder-user.jpg" />
                                              <AvatarFallback className="text-xs bg-[#380065] text-white">
                                                {member}
                                              </AvatarFallback>
                                            </Avatar>
                                          ))}
                                        </div>
                                        
                                      </div>
                </div>
                
                <div className="flex flex-col items-start mt-auto">
                  
                  <div className="flex flex-row space-around gap-14">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs h-7 px-2 w-full justify-center border-[#6f42c1] text-[#6f42c1] hover:bg-[#6f42c1] hover:text-white"
                    >
                      View Participants
                    </Button>
                    <Button 
                      size="sm" 
                   
                    className={`self-start mb-2 space-between ${
                      call.status === "ongoing" 
                        ? "text-xs h-7 px-2 bg-[#6f42c1] hover:bg-[#5a32a3] w-full justify-between" 
                        : "text-xs h-7 px-2 bg-[#6F01D04D] hover:bg-[#6F01D04D] w-full justify-between"
                    }`}
                  >
                    {call.status === "Join now" ? "Join now" : "Join now"}
                    
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}