"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Mentor {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

const mentorsData: Mentor[] = [
  {
    id: 1,
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    role: "Product Designer",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
  {
    id: 2,
    name: "Adeoye Samuel",
    email: "adeoye.samuel@gmail.com",
    role: "Product Designer",
    avatar: "https://i.pravatar.cc/40?img=6",
  },
];

export default function MentorsSection() {
  return (
    <Card className="w-full max-w-sm p-4 rounded-xl shadow-sm">
      <CardHeader className="pb-4 px-0">
        <div className="flex justify-between items-center">
          <Menu className="text-gray-500" size={20} />
          <h2 className="text-xl font-semibold text-gray-500">Mentors</h2>
          <Plus className="text-gray-500" size={20} />
        </div>
      </CardHeader>

      <CardContent className="space-y-4 px-0">
        {mentorsData.map((mentor) => (
          <div
            key={mentor.id}
            className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <Avatar>
                <AvatarImage src={mentor.avatar} alt={mentor.name} />
                <AvatarFallback>{mentor.name[0]}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="font-semibold text-sm text-gray-800 truncate">{mentor.name}</p>
                <p className="text-xs text-gray-500 truncate">{mentor.role}</p>
              </div>
            </div>
            <Button className="bg-purple-600 text-white text-sm rounded-full px-4 h-8 hover:bg-purple-700 whitespace-nowrap">
              Message
            </Button>
          </div>
        ))}

        <div className="pt-2">
          <Button className="w-full bg-purple-100 text-purple-700 font-semibold text-sm rounded-full h-10">
            See all
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
