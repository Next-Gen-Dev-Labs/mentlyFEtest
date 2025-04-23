import { Avatar } from "@radix-ui/react-avatar";
import { Menu, Plus, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
export default function Mentors() {
  return (
    <div className="border rounded-lg bg-white p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg text-gray-700 font-bold flex items-center gap-2">
          <Menu className="h-5 w-5 text-gray-500" />
          Mentors
        </h2>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full border"
          >
            <Plus className="h-4 w-4" />
          </Button>
          <MoreHorizontal className="h-5 w-5 text-gray-500" />
        </div>
      </div>

      <div className="space-y-4">
        {[
          { name: "Maxwell Smith", role: "Product Designer" },
          { name: "Adesti Samuel", role: "Product Designer" },
        ].map((mentor, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt={mentor.name}
                  width={40}
                  height={40}
                />
              </Avatar>
              <div>
                <h3 className="font-medium">{mentor.name}</h3>
                <p className="text-xs text-gray-500">{mentor.role}</p>
              </div>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Message
            </Button>
          </div>
        ))}
        <div className="text-center">
          <Button variant="ghost" className="text-purple-600 w-full">
            See all
          </Button>
        </div>
      </div>
    </div>
  );
}
