"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, MoreVertical, Flag } from "lucide-react"
import Img4 from "@/public/Images/img4.png"
import Img2 from "@/public/Images/img2.jpg"
import Img3 from "@/public/Images/img3.jpg"
export default function Applications() {
  const [applications, setApplications] = useState({
    mentors: [
      {
        id: 1,
        name: "Maxwell Smith",
        email: "maxwellsmith@gmail.com",
        role: "Product Designer",
        experience: "4years Experience",
        location: "Lagos, Nigeria",
        timezone: "GMT +1",
        selected: false,
      },
    ],
    students: [
      {
        id: 2,
        name: "Adeati Samuel",
        email: "maxwellsmith@gmail.com",
        selected: false,
      },
      {
        id: 3,
        name: "Maxwell Smith",
        email: "maxwellsmith@gmail.com",
        selected: false,
      },
      {
        id: 4,
        name: "Adeati Samuel",
        email: "maxwellsmith@gmail.com",
        selected: false,
      },
      {
        id: 5,
        name: "Maxwell Smith",
        email: "maxwellsmith@gmail.com",
        selected: false,
      },
    ],
  })

  const toggleSelection = (section: "mentors" | "students", id: number) => {
    setApplications((prev) => ({
      ...prev,
      [section]: prev[section].map((app) => (app.id === id ? { ...app, selected: !app.selected } : app)),
    }))
  }

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-auto">
      <div className="p-3 sm:p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <Menu className="text-gray-500" size={20} />
            <h1 className="text-lg sm:text-xl font-normal text-gray-400">Applications</h1>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-purple-600 font-medium text-sm sm:text-base">See all</span>
            <MoreVertical className="text-gray-500" size={20} />
          </div>
        </div>
      </div>

      <div className="p-3 sm:p-4">
        <h2 className="text-gray-500 mb-4 sm:mb-6">Mentors</h2>

        {applications.mentors.map((mentor) => (
          <div key={mentor.id} className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={mentor.selected}
                  onChange={() => toggleSelection("mentors", mentor.id)}
                  className="w-5 h-5 rounded border-gray-300"
                />
                <div className="flex items-center">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                    <Image
                      src={Img4}
                      alt={mentor.name}
                      width={30}
                      height={30}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-gray-800">{mentor.name}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">{mentor.email}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 sm:ml-0">
                <button className="p-3 rounded-md bg-red-50 text-red-500 hover:bg-red-100 transition-colors text-sm">
                  Reject
                </button>
                <button className="p-3 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors text-sm">
                  Accept
                </button>
              </div>
            </div>

            <div className="flex gap-2 pl-0 sm:pl-3">
              <span className="px-2 sm:px-3 py-1 bg-purple-50 text-purple-600 rounded-md text-xs sm:text-sm">
                {mentor.role}
              </span>
              <span className="px-2 sm:px-3 py-1 bg-green-50 text-green-600 rounded-md text-xs sm:text-sm">
                {mentor.experience}
              </span>
              <span className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-xs sm:text-sm flex items-center gap-1">
                <Flag className="w-3 h-3" /> {mentor.location}
              </span>
              <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-xs sm:text-sm">
                {mentor.timezone}
              </span>
            </div>
            <div className="border-b mt-6"></div>
          </div>
        ))}

        <h2 className="text-gray-500 mb-4 sm:mb-6 mt-6 sm:mt-8">Students</h2>

        {applications.students.map((student) => (
          <div key={student.id} className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={student.selected}
                  onChange={() => toggleSelection("students", student.id)}
                  className="w-5 h-5 rounded border-gray-300"
                />
                <div className="flex items-center">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                    <Image
                      src={Img4}
                      alt={student.name}
                      width={30}
                      height={30}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-gray-800">{student.name}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">{student.email}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 sm:ml-0">
                <button className="p-3 rounded-md bg-red-50 text-red-500 hover:bg-red-100 transition-colors text-sm">
                  Reject
                </button>
                <button className="p-3 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors text-sm">
                  Accept
                </button>
              </div>
            </div>
            <div className="border-b mt-6"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
