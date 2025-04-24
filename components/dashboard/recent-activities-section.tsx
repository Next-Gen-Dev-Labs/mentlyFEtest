"use client";

import React from "react";
import { SectionHeader } from "@/components/dashboard/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, AlignJustify, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const activities = [
  {
    id: 1,
    type: "KYC Verification",
    description: "45 new persons just signed up on Montly.",
    time: "25 minutes Ago",
    icon: "/kyc.png"
  },
  {
    id: 2,
    type: "New User Sign Up!",
    description: "45 new persons just signed up on Montly.",
    time: "25 minutes Ago",
    icon: "/new.png"
  },
  {
    id: 3,
    type: "Withdrawal Request",
    description: "Mardian requested a withdrawal.",
    time: "25 minutes Ago",
    icon: "withdrawal.jpg"
  }
];

export function RecentActivitiesSection() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4"> 
        <div className="flex items-start gap-4"> 
        <AlignJustify className="h-5 w-5 text-gray-500 " />
          <h1 className="text-[#B0B0B0] font-bold"> Recent Activities</h1>
          
        
        </div>
        <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-sm text-[#6F01D0]">
                 See all
               </Button>
           <Button variant="ghost" size="icon" className="h-8 w-8 text-[#6F01D0]" >
                      <MoreVertical className="h-5 w-5" />
            </Button>
        </div>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <Card key={activity.id} className="overflow-hidden border-t-0 rounded-none bg-white border-l-0 border-r-0">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <Avatar className="h-10 w-10 bg-[#f5f5f5]">
                  <Image src={activity.icon} alt={activity.type} 
                  width={40} height={40}
                  className="h-10 w-10" />
                </Avatar>
                
                <div>
                  <h3 className="font-medium">{activity.type}</h3>
                  <p className="text-[10px] text-gray-500">{activity.description}</p>
                  <p className="text-[9px] text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}