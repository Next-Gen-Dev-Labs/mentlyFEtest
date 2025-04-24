"use client"

import { UserIcon as UserGraduate, MoreVertical } from "lucide-react"
import { useWidgets } from "../widgets-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Student {
  id: string
  name: string
  email: string
  program: string
  progress: number
}

const students: Student[] = [
  {
    id: "1",
    name: "John Doe",
    email: "johndoe@example.com",
    program: "UI/UX Design",
    progress: 75,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "janesmith@example.com",
    program: "Web Development",
    progress: 90,
  },
  {
    id: "3",
    name: "Robert Johnson",
    email: "robert@example.com",
    program: "Product Design",
    progress: 60,
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily@example.com",
    program: "UI/UX Design",
    progress: 45,
  },
]

export default function StudentsWidget() {
  const { widgets } = useWidgets()

  if (!widgets.students) return null

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <UserGraduate className="mr-2 text-gray-500" />
          <h3 className="font-medium text-gray-500">Students</h3>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-purple-600 cursor-pointer">See all</span>
          <MoreVertical className="text-gray-500" />
        </div>
      </div>

      <div className="bg-white rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-medium">Active Students</h4>
          <div className="flex items-center">
            <Input type="text" placeholder="Search students..." className="text-sm mr-2 h-8" />
            <Button className="bg-purple-600 hover:bg-purple-700 text-sm h-8">Add Student</Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-3 text-xs font-medium text-gray-500">Name</th>
                <th className="text-left py-2 px-3 text-xs font-medium text-gray-500">Email</th>
                <th className="text-left py-2 px-3 text-xs font-medium text-gray-500">Program</th>
                <th className="text-left py-2 px-3 text-xs font-medium text-gray-500">Progress</th>
                <th className="text-left py-2 px-3 text-xs font-medium text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b">
                  <td className="py-2 px-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                        <UserGraduate className="h-4 w-4 text-gray-500" />
                      </div>
                      <span className="text-sm">{student.name}</span>
                    </div>
                  </td>
                  <td className="py-2 px-3 text-sm">{student.email}</td>
                  <td className="py-2 px-3 text-sm">{student.program}</td>
                  <td className="py-2 px-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: `${student.progress}%` }}></div>
                    </div>
                    <span className="text-xs text-gray-500">{student.progress}%</span>
                  </td>
                  <td className="py-2 px-3">
                    <Button size="sm" className="text-xs bg-purple-600 hover:bg-purple-700">
                      View Profile
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
