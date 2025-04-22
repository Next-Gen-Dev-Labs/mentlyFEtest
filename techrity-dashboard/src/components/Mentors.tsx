"use client";
import { useState } from "react";
import { Menu, MoreVertical, Plus } from "lucide-react";
import { Mentor } from "../../types/mentor";

export default function MentorsList() {
  const [mentors] = useState<Mentor[]>([
    {
      id: "1",
      name: "Maxwell Smith",
      role: "Product Designer",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: "2",
      name: "Adeati Samuel",
      role: "Product Designer",
      avatar: "/api/placeholder/40/40",
    },
  ]);

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Menu size={20} className="text-gray-400 mr-2" />
          <h1 className="text-gray-400 font-medium">Mentors</h1>
        </div>
        <div className="flex items-center">
          <button className="p-1 rounded-full hover:bg-gray-100">
            <Plus size={20} className="text-gray-400" />
          </button>
          <button className="p-1 rounded-full hover:bg-gray-100 ml-1">
            <MoreVertical size={20} className="text-gray-400" />
          </button>
        </div>
      </div>

      <div className="space-y-3 ">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                {mentor.avatar ? (
                  <img
                    src="/api/placeholder/40/40"
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600">{mentor.name[0]}</span>
                  </div>
                )}
              </div>
              <div className="ml-3">
                <p className="font-medium text-gray-800">{mentor.name}</p>
                <p className="text-sm text-gray-500">{mentor.role}</p>
              </div>
            </div>
            <button className="bg-purple-600 text-white text-sm py-1 px-3 rounded-full">
              Message
            </button>
          </div>
        ))}
      </div>

      <button className="w-full bg-purple-100 text-purple-600 font-medium py-3 rounded-full mt-4">
        See all
      </button>
    </div>
  );
}
