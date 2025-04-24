"use client"

import  Image from 'next/image';
import { FaEllipsisV, FaPlus } from 'react-icons/fa';
import Smith from "../component/assets/Max Smith.svg";
import Ade from "../component/assets/Ade Sam.svg";

const MentorsCard = () => {
  const mentors = [
    {
      id: 1,
      name: "Maxwell Smith",
      role: "Product Designer",
      avatar: Smith,
    },
    {
      id: 2,
      name: "Adeoti Samuel",
      role: "Product Designer",
      avatar: Ade,
    },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-medium text-gray-500">Mentors</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1">
            <FaPlus className="h-5 w-5 bg-grey-100 text-gray-200" />
          </button>
          <button className="p-1">
            <FaEllipsisV className="h-5 w-5 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                <Image
                  src={mentor.avatar || "/placeholder.svg"}
                  alt={mentor.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{mentor.name}</h3>
                <p className="text-sm text-gray-500">{mentor.role}</p>
              </div>
            </div>
            <button className="px-4 py-1 bg-purple-600 text-white text-sm rounded">Message</button>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button className="text-purple-600 text-sm font-medium">See all</button>
      </div>
    </div>
  )
}

export default MentorsCard
