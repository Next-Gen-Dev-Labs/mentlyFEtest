"use client";

import { SectionHeader } from "@/components/dashboard/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, AlignJustify, MoreVertical } from "lucide-react";

const mentors = [
  {
    id: 1,
    name: "Maxwell Smith",
    role: "Product Designer"
  },
  {
    id: 2,
    name: "Adeoti Samuel",
    role: "Product Designer"
  }
];

export function MentorsSection() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
      <div className="flex items-center justify-between mb-4"> 
        <div className="flex items-start gap-4"> 
        <AlignJustify className="h-5 w-5 text-[#7D8DA6] " />
          <h1 className="text-[#7D8DA6] font-bold">Mentors</h1>
          
        
        </div>
        <div className="flex items-center gap-2">
        <Button size="icon" variant="outline" className="h-6 w-6 rounded-full ml-2">
            <Plus className="h-3 w-3" />
          </Button>
           <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-5 w-5" />
            </Button>
        </div>
      </div>
      
      <div className="space-y-4">
        {mentors.map((mentor) => (
          <Card key={mentor.id} className="overflow-hidden border-0 shadow-xs bg-white">
            <CardContent className="p-4">
              <div className="flex items-center gap-4 border-b pb-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${mentor.name}`} alt={mentor.name} />
                  <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <h3 className="font-medium">{mentor.name}</h3>
                  <p className="text-xs text-gray-500">{mentor.role}</p>
                </div>
                
                <Button size="sm" className="text-xs bg-[#6F01D0] h-6 hover:bg-[#4a0085]">
                  Message
                </Button>
              </div>
              
            </CardContent>
            
          </Card>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <Button variant="outline" size="sm" className="text-xs w-[80%] rounded-[24px] mx-auto text-[#6F01D0] bg-[#DDD6FB] hover:bg-[#6F01D0] hover:text-white">
          See All
        </Button>
      </div>
    </div>
  );
}