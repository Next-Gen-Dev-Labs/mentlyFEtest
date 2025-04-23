import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Users() {
  return (
    <div className="border rounded-lg bg-white p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg text-gray-700 font-bold">Users</h2>
        <Button variant="outline" size="sm" className="text-sm">
          All <ChevronRight className="h-4 w-4 ml-1 rotate-90" />
        </Button>
      </div>

      <div className="flex justify-center items-center">
        <div className="relative h-48 w-48">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold">240</div>
              <div className="text-sm text-gray-500">Users</div>
            </div>
          </div>
          {/* This is a simplified representation of the pie chart */}
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="20"
              strokeDasharray="251.2 0"
              strokeDashoffset="0"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#ec4899"
              strokeWidth="20"
              strokeDasharray="10 251.2"
              strokeDashoffset="-251.2"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="20"
              strokeDasharray="27.6 251.2"
              strokeDashoffset="-261.2"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#6b7280"
              strokeWidth="20"
              strokeDasharray="12.6 251.2"
              strokeDashoffset="-288.8"
            />
            <circle cx="50" cy="50" r="30" fill="white" />
          </svg>
        </div>
      </div>

      <div className="space-y-2 mt-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-blue-500"></span>
          <span className="text-sm">Students</span>
          <span className="text-sm ml-auto">200</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-pink-500"></span>
          <span className="text-sm">Mentors</span>
          <span className="text-sm ml-auto">8</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-purple-500"></span>
          <span className="text-sm">Programs</span>
          <span className="text-sm ml-auto">22</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-gray-500"></span>
          <span className="text-sm">Others</span>
          <span className="text-sm ml-auto">10</span>
        </div>
      </div>
    </div>
  );
}
