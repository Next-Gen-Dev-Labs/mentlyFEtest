import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, MoreVertical } from "lucide-react";

type Applicant = {
  id: number;
  name: string;
  email: string;
  role: "mentor" | "student";
  tags?: string[];
};

export function MentorsSection() {
  const mentors: Applicant[] = [
    {
      id: 1,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      role: "mentor",
    },
    {
      id: 2,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      role: "mentor",
    },
  ];

  return (
    <Card className="mx-3 my-5">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Menu className="h-5 w-5 text-gray-700" />
            <h2 className="text-xl font-semibold text-gray-900">Mentors</h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-purple-700 font-medium cursor-pointer text-sm">
              See all
            </span>
            <MoreVertical className="h-5 w-5 text-gray-500" />
          </div>
        </div>

        <div className="space-y-4 pt-4 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-500">Mentors</h3>

          {mentors.map((applicant) => (
            <div
              key={applicant.id}
              className="flex flex-col bg-gray-50 p-4 rounded-xl space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3 flex-1">
                  <img
                    src="./images/man.png"
                    alt="mentor avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <div className="font-medium text-gray-800 truncate">
                      {applicant.name}
                    </div>
                    <div className="text-xs text-gray-500 truncate">
                      {applicant.email}
                    </div>
                  </div>
                </div>
              </div>
              {/* Button placed below the mentor details */}
              <div className="sm:w-auto w-full">
                <Button className="bg-purple-700 hover:bg-purple-800 text-white text-xs px-4 py-2 w-full">
                  Message
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
