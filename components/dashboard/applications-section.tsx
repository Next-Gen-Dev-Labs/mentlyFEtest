"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const applicationsData = {
  mentors: [
    {
      id: 1,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=3",
      role: "Product Designer",
      experience: "4 years Experience",
      location: "Lagos, Nigeria",
      timezone: "GMT +1",
    },
  ],
  students: [
    {
      id: 2,
      name: "Adeati Samuel",
      email: "adeatisamuel@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=5",
    },
    {
      id: 3,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 4,
      name: "Adeati Samuel",
      email: "adeatisamuel2@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=5",
    },
    {
      id: 5,
      name: "Maxwell Smith",
      email: "maxwellsmith2@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
  ],
};

export default function ApplicationsSection() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <CardTitle className="text-lg font-medium">Applications</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="link" className="text-sm text-purple-600 p-0">
              See all
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical size={16} />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Mentors */}
        <div>
          <h4 className="text-xs font-medium text-gray-400 mb-2">Mentors</h4>
          {applicationsData.mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="flex flex-col gap-3 py-3 border-b"
            >
              <div className="flex flex-wrap 2xl:flex-nowrap items-center gap-3 w-full">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <input type="checkbox" className="mt-1 sm:mt-0" />
                  <Avatar>
                    <AvatarImage src={mentor.avatar} />
                    <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{mentor.name}</div>
                  <div className="text-xs text-gray-500 truncate">{mentor.email}</div>
                </div>
                <div className="flex gap-2 mt-2 2xl:mt-0 flex-wrap sm:flex-nowrap">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs text-red-500 border-red-200 hover:bg-red-50"
                  >
                    Reject
                  </Button>
                  <Button
                    size="sm"
                    className="text-xs bg-purple-600 hover:bg-purple-700"
                  >
                    Accept
                  </Button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-[#F3ECF9] text-xs px-2 py-0.5 rounded">
                  {mentor.role}
                </span>
                <span className="bg-[#E8FDFB] text-xs text-teal-800 px-2 py-0.5 rounded">
                  {mentor.experience}
                </span>
                <span className="bg-[#E3ECF9] text-xs px-2 py-0.5 rounded">
                  {mentor.location}
                </span>
                <span className="bg-gray-100 text-xs px-2 py-0.5 rounded">
                  {mentor.timezone}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Students */}
        <div>
          <h4 className="text-xs font-medium text-gray-400 mb-2">Students</h4>
          {applicationsData.students.map((student) => (
            <div
              key={student.id}
              className="flex flex-wrap 2xl:flex-nowrap items-center gap-3 py-3 border-b w-full"
            >
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <input type="checkbox" />
                <Avatar>
                  <AvatarImage src={student.avatar} />
                  <AvatarFallback>{student.name[0]}</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm truncate">{student.name}</div>
                <div className="text-xs text-gray-500 truncate">{student.email}</div>
              </div>
              <div className="flex gap-2 mt-2 2xl:mt-0 flex-wrap sm:flex-nowrap">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-red-500 border-red-200 hover:bg-red-50"
                >
                  Reject
                </Button>
                <Button
                  size="sm"
                  className="text-xs bg-purple-600 hover:bg-purple-700"
                >
                  Accept
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
