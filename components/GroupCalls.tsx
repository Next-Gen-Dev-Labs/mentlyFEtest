'use client';

import { Calendar, Dot, Menu, MoreVertical, MoveRight, Timer } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useState } from "react";

type CallStatus = 'Ongoing' | 'Upcoming';

interface GroupCall {
  id: number;
  title: string;
  date: string;
  time: string;
  status: CallStatus;
  hostName: string;
  hostTopic: string;
  hostImage: string;
  image: string;
  mentors: string[];
  mentorsText: string;
}

const groupCalls: GroupCall[] = [
  {
    id: 1,
    title: 'Weekly Meeting - Product Demo Review with Testers',
    date: 'Mon, Jul 30, 2024',
    time: '9:00 - 11:00AM',
    status: 'Ongoing',
    hostName: 'study group',
    hostTopic: 'UX study group',
    hostImage: '/images/groupcallsplaceholder.jpg',
    image: '/images/programsbg2.jpg',
    mentors: [
      "/images/woman2.png",
      "/images/woman.png",
      "/images/man.png",
    ],
    mentorsText: "Mentors",
  },
  {
    id: 2,
    title: 'Weekly Meeting - Product Demo Review with Testers',
    date: 'Mon, Jul 30, 2024',
    time: '9:00 - 11:00AM',
    status: 'Upcoming',
    hostName: 'study group',
    hostTopic: 'UX study group',
    hostImage: '/images/groupcallsplaceholder.jpg',
    image: '/images/groupcallbg.jpg',
    mentors: [
      "/images/woman2.png",
      "/images/woman.png",
      "/images/man.png",
    ],
    mentorsText: "Mentors",
  },
  {
    id: 3,
    title: 'Weekly Meeting - Product Demo Review with Testers',
    date: 'Mon, Jul 30, 2024',
    time: '9:00 - 11:00AM',
    status: 'Upcoming',
    hostName: 'study group',
    hostTopic: 'UX study group',
    hostImage: '/images/groupcallsplaceholder.jpg',
    image: '/images/groupcallbg.jpg',
    mentors: [
      "/images/woman2.png",
      "/images/woman.png",
      "/images/man.png",
    ],
    mentorsText: "Mentors",
  },
];

const statusStyles: Record<CallStatus, string> = {
  Ongoing: "bg-green-100 text-green-700",
  Upcoming: "bg-purple-100 text-purple-700",
};

export default function GroupCalls() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < groupCalls.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-md w-full mx-3">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Menu className="h-5 w-5 text-gray-700" />
          <h2 className="text-lg font-semibold text-gray-900">Group Calls</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-purple-700 font-medium cursor-pointer text-sm">
            See all
          </span>
          <MoreVertical className="h-5 w-5 text-gray-500" />
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {groupCalls.slice(currentIndex, currentIndex + 2).map((call) => (
            <Card key={call.id} className="overflow-hidden p-2">
              <img
                src={call.image}
                alt={call.title}
                className="w-full h-20 object-cover rounded-lg"
              />
              <CardHeader className="pb-2">
                <span
                  className={`flex items-center bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded w-20 ${statusStyles[call.status]}`}
                >
                  •{call.status}
                </span>
                <CardTitle className="text-xs font-bold text-purple-800 mt-2">
                  {call.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center gap-2 text-xs">
                  <Calendar className="w-4 h-4" />
                  {call.date} <Timer className="w-4 h-4" />
                  {call.time}
                </div>
                <div className="flex items-center justify-between">
                  <div>{call.hostName}</div>
                  <span className="text-xs text-gray-600">{call.mentorsText}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <img
                      src={call.hostImage}
                      alt={call.hostName}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="ml-1 text-xs text-gray-700 font-bold">{call.hostTopic}</span>
                  </div>
                  <div className="items-center gap-2">
                    <div className="flex -space-x-2">
                      {call.mentors.map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt="mentor"
                          className="w-5 h-5 rounded-full border border-white"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 justify-between">
                  <Button
                    variant="outline"
                    className="text-xs border border-purple-700 text-purple-700 px-3 py-1"
                  >
                    View Participants
                  </Button>
                  <Button className="bg-purple-700 text-white text-xs px-3 py-1 hover:bg-[#6F01D04D]">
                    Join Now <MoveRight />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Arrows for navigation */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-2">
          <button onClick={prevSlide} className="text-gray-500 hover:text-gray-700">
            ←
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-2">
          <button onClick={nextSlide} className="text-gray-500 hover:text-gray-700">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
