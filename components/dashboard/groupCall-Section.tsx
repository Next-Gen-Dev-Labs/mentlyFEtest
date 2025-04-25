"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MoreVertical,
  Filter,
  Eye,
  Settings,
  Clock,
  Calendar,
  Tag,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Program {
  id: number;
  title: string;
  description: string;
  instructor: {
    name: string;
    avatar: string;
  };
  price: string | null;
  tag: string;
  sessions: number;
}

const calls = [
  {
    status: "Ongoing",
    title: "Fundamentals of User Interface & Experience",
    date: "Mon. Jul 30, 2024",
    time: "9:00 - 11:00AM",
    image: "/Rectangle12322.svg", // placeholder image

    group: {
      tag: "study Group",
      name: "Design Basics Study Group",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    mentors: [
      { avatar: "https://i.pravatar.cc/40?img=3" },
      { avatar: "https://i.pravatar.cc/40?img=4" },
    ],
  },
  {
    status: "Upcoming",
    title: "Colour Magic Practical: Neon Chill",
    date: "Wed. Aug 2, 2024",
    time: "2:00 - 4:00PM",
    image: "/Rectangle123221.svg", // placeholder image
    group: {
        tag: "study Group",
      name: "Color Theory Group",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    mentors: [
      { avatar: "https://i.pravatar.cc/40?img=5" },
      { avatar: "https://i.pravatar.cc/40?img=6" },
    ],
  },
];

export default function GroupCallSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <Card className="bg-white shadow-md rounded-xl">
      <CardHeader className="flex flex-row justify-between items-center px-4 pt-4 pb-2">
        <h2 className="font-semibold text-lg">Group Calls</h2>
        <div className="flex items-center gap-2">
          <Button variant="link" className="text-purple-600 text-sm">
            See all
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreVertical size={16} />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="overflow-x-auto px-4 pb-4">
        <div className="flex gap-4">
          {calls.map((call, index) => (
            <div
              key={index}
              className="min-w-[380px] w-[380px] bg-white border rounded-lg shadow-sm overflow-hidden"
            >
              <div className="h-36 bg-gray-200">
                <Image
                  src={call.image}
                  alt={call.title}
                  className="w-full h-full object-cover"
                  width={280}
                  height={144}
                />
              </div>

              <div className="px-4 py-3 space-y-2">
                {/* Tag */}
                <Badge
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    call.status === "Ongoing"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {call.status}
                </Badge>

                {/* Title */}
                <h3 className="text-sm font-semibold leading-snug">
                  {call.title}
                </h3>
                <hr className="border-gray-200 my-2" />

                {/* Date & Time */}
                <div className="text-xs flex flex-row justify-between  text-gray-600 space-x-5">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{call.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{call.time}</span>
                  </div>
                </div>

                {/* Group & Mentors */}
                <div className="text-xs  flex flex-row justify-between items-end  text-gray-700 ">
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-[9px] text-purple-300">{call.group.tag} </span>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-5 w-5">
                        <AvatarImage src={call.group.avatar} />
                        <AvatarFallback>SG</AvatarFallback>
                      </Avatar>
                      <span>{call.group.name}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                  <span className="text-[9px] text-purple-300">Mentors</span>
                  <div className="flex  items-center gap-2">
                    {call.mentors.map((mentor, i) => (
                      <Avatar
                        key={i}
                        className="h-5 w-5 -ml-1 first:ml-0 ring-1 ring-white"
                      >
                        <AvatarImage src={mentor.avatar} />
                        <AvatarFallback>M{i}</AvatarFallback>
                      </Avatar>
                    ))}
                    </div>
                    
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between gap-2 mt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs px-2 h-8 border-purple-600 text-purple-600"
                  >
                    View Participants
                  </Button>
                  <Button
                    size="sm"
                    disabled={call.status !== "Ongoing"}
                    className={`text-xs px-2 h-8 ${
                      call.status === "Ongoing"
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Join Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
