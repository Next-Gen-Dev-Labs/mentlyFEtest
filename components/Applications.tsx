import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, MoreVertical } from "lucide-react";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Applicant = {
  id: number;
  name: string;
  email: string;
  role: "mentor" | "student";
  tags?: string[];
};

const mentors: Applicant[] = [
  {
    id: 1,
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    role: "mentor",
    tags: ["Product Designer", "4 years Experience", "🇳🇬 Lagos, Nigeria", "GMT +1"],
  },

];

const students: Applicant[] = [
  {
    id: 2,
    name: "Adeati Samuel",
    email: "adeatisamuel@gmail.com",
    role: "student",
  },
  {
    id: 3,
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    role: "student",
  },
  {
    id: 4,
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    role: "student",
  },
];

const ApplicationCard = ({ applicant }: { applicant: Applicant }) => (
  <div className="flex flex-col bg-gray-50 p-4 rounded-xl space-y-2 mt-5">
    {/* Top row: checkbox, avatar, name/email, buttons */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <input type="checkbox" />
        <img src="./images/man.png" alt="" className="w-8 h-8 rounded-full object-cover" />
        {/* <Avatar className="w-9 h-9">
          <AvatarFallback>{applicant.name.charAt(0)}</AvatarFallback>
        </Avatar> */}
        <div className="mr-10">
          <div className="font-medium text-gray-800">{applicant.name}</div>
          <div className="text-xs text-gray-500">{applicant.email}</div>
        </div>
      </div>
      <div className="space-x-2 flex">
        <Button
          variant="outline"
          className="text-red-600 border-red-600 hover:bg-red-50 text-xs"
        >
          Reject
        </Button>
        <Button className="bg-purple-700 hover:bg-purple-800 text-white text-xs">
          Accept
        </Button>
      </div>
    </div>

    {/* Tags row: only for mentors */}
    {applicant.role === "mentor" && (
  <div className="grid grid-cols-4 gap-2 ml-9" style={{ fontSize: "10px" }}>
    {applicant.tags?.map((tag, idx) => {
      const bgColors = ["#F3ECF9", "#A1BDBA", "#ABBEE0", "#C8C8C8"];
      const textColors = ["#9985A7", "#58948E", "#8196B5", "#595564"];
      const paddings = [
        "4px 8px",   // for purple
        "3px 10px",  // for green
        "5px 9px",   // for blue
        "4px 7px"    // for ash
      ];

      const bgColor = bgColors[idx % bgColors.length];
      const textColor = textColors[idx % textColors.length];
      const padding = paddings[idx % paddings.length];

      return (
        <span
          key={idx}
          className="rounded-full"
          style={{
            backgroundColor: bgColor,
            color: textColor,
            padding: padding
          }}
        >
          {tag}
        </span>
      );
    })}
  </div>
)}




      </div>
  
);

export function ApplicationsSection() {
  return (
    <Card className="w-full mx-3 my-5">
      <CardContent className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Menu className="h-5 w-5 text-gray-700" />
          <h2 className="text-xl font-semibold text-gray-900">Applications</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-purple-700 font-medium cursor-pointer text-sm">
            See all
          </span>
          <MoreVertical className="h-5 w-5 text-gray-500" />
        </div>
      </div>


        {/* Mentors Section */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-500">Mentors</h3>
          {mentors.map((mentor) => (
            <ApplicationCard key={mentor.id} applicant={mentor} />
          ))}
        </div>

        {/* Students Section */}
        <div className="space-y-2 pt-4 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-500">Students</h3>
          {students.map((student) => (
            <ApplicationCard key={student.id} applicant={student} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
