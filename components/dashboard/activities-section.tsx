'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Activity {
  id: number;
  type: string;
  title: string;
  description: string;
  time: string;
  icon: string;
  color: string;
}

const activitiesData: Activity[] = [
  {
    id: 1,
    type: "KYC Verification",
    title: "KYC Verification",
    description: "A new member just signed up on Mently",
    time: "25 minutes ago",
    icon: "🔐",
    color: "bg-yellow-500",
  },
  {
    id: 2,
    type: "New User Sign Up",
    title: "New User Sign Up!",
    description: "A new member just signed up on Mently",
    time: "35 minutes ago",
    icon: "👤",
    color: "bg-blue-500",
  },
  {
    id: 3,
    type: "Withdrawal Request",
    title: "Withdrawal Request",
    description: "Mmesoma requested a withdrawal",
    time: "40 minutes ago",
    icon: "💰",
    color: "bg-green-500",
  },
];

export default function ActivitiesSection() {
  return (
    <Card className="w-full max-w-[350px] p-4 rounded-xl shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <CardTitle className="text-lg font-medium">Recent Activities</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="link" className="text-sm text-purple-600 p-0">
              See all
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="h-8 w-8"
            >
              <MoreVertical size={16} />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {activitiesData.map((activity) => (
            <div 
              key={activity.id} 
              className="flex gap-3 p-2 border rounded-lg flex-col sm:flex-row sm:gap-4 lg:flex-col xl:flex-row"
            >
              <div className={`${activity.color} w-8 h-8 rounded-full flex items-center justify-center shrink-0`}>
                <span className="text-lg">{activity.icon}</span>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium">{activity.title}</h4>
                <p className="text-xs text-gray-500">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
