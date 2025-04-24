"use client";

import { ChevronDown, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

const programs = [
  {
    id: 1,
    title: "Fundamentals of User Interface & Experience",
    description: "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    mentors: ["JD", "SM", "AK"],
    type: "Bootcamp",
    stats: "11",
    hostedBy: "Self",
    image: "/banner.png" 
  },
  {
    id: 2,
    title: "Colour Hack Practical Group Call",
    description: "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    mentors: ["FO"],
    type: "ongoing",
    hostedBy: "Faith Okolo",
    image: "/rectangle.png" 
  },
  {
    id: 3,
    title: "Colour Hack Practical Group Call",
    description: "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    mentors: ["S"],
    type: "group-call",
    hostedBy: "Self",
    image: "/rectangle.png" 
  },
];

export function ProgramsSection() {
  const [activeFilter, setActiveFilter] = useState("Active");
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="space-y-4 mt-5">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-6">
      <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7H11M1 4H11M1 1H11M1 10H11" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        <h2 className="text-xl font-medium text-[#B0B0B0]">Programs</h2>
      </div>
        <div className="flex items-center gap-2">
          <Button variant="link" className="text-[#380065] font-medium p-0">
            See all
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex justify-end mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Filter</span>
          <div className="relative">
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-3 flex items-center gap-1"
              onClick={() => setShowFilter(!showFilter)}
            >
              {activeFilter}
              <ChevronDown className="h-4 w-4" />
            </Button>
            {showFilter && (
              <div className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded-md z-10 w-32">
                <div
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setActiveFilter("Active");
                    setShowFilter(false);
                  }}
                >
                  Active
                </div>
                <div
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setActiveFilter("All");
                    setShowFilter(false);
                  }}
                >
                  All
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {programs.map((program) => (
          <Card key={program.id} className="overflow-hidden border-0 shadow-lg bg-white">
            <CardHeader className="relative p-0 h-32">
              <img 
                src={program.image} 
                alt="Program banner" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="font-bold text-lg text-white">{program.title}</h3>
                <div className="flex items-center gap-2 mb-1 mt-4">
                <Badge 
                  className={`self-start mb-2  ${
                    program.type === "Bootcamp" 
                      ? "bg-[#D4E0F3] text-[#0077FF] hover:bg-[#D4E0F3] text-[10px]" 
                      : "bg-[#D4F3D4] hover:bg-[#D4F3D4] text-[#008000] text-[10px]"
                  }`}
                >

                  <div 
                  className={`self-start mb-2 ${
                    program.type === "Bootcamp" 
                      ? "rounded-[100%] mt-1.5 mr-1.5 p-1 w-[8px] h-[8px] bg-[#0077FF] hover:bg-green-600" 
                      : "rounded-[100%] mt-1.5 mr-1.5 p-1 w-[8px] h-[8px] bg-[#008000]  hover:bg-[#1C0AE1] "
                  }`}>
                         
                  </div>
                  {program.type === "Bootcamp" ? "Bootcamp" : "Group Call"}
                </Badge>
                    {program.type === "Bootcamp" && (
                      <span className="text-sm font-medium text-gray-900">{program.stats}</span>
                    )}
                  </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {program.description}
                  </p>
                </div>
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <MoreVertical className="h-5 w-5 text-gray-500" />
                </Button>
              </div>

              <div className="mt-4">
                {program.type === "featured" ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <div className="flex -space-x-2">
                        {program.mentors.map((mentor, i) => (
                          <Avatar key={i} className="border-2 border-white h-6 w-6">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback className="text-xs bg-[#380065] text-white">
                              {mentor}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">Mentors</span>
                    </div>
                    <div className="flex gap-1">
                      <Button  size="sm" className="text-[8px] p-1 text-[#6F01D0] bg-transparent border-2 border-[#6F01D0] hover:bg-[#6F01D0] hover:text-white">
                        View Details
                      </Button>
                      <Button size="sm" className="text-[8px] text-white bg-[#6F01D0] hover:bg-[#4a0085]">
                        Analyze
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback className="text-xs bg-[#380065] text-white">
                          {program.hostedBy.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-[10px] text-gray-500">Hosted by: {program.hostedBy}</span>
                    </div>
                    <div className="flex gap-1">
                      <Button  size="sm" className="text-[8px] text-[#6F01D0] bg-transparent border-2 border-[#6F01D0] hover:bg-[#6F01D0] hover:text-white">
                        View Details
                      </Button>
                      <Button size="sm" className="text-[8px] w-17 text-white bg-[#6F01D0] hover:bg-[#4a0085]">
                        Assign monitor
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}