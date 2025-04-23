import { Avatar } from "@radix-ui/react-avatar";
import {
  Menu,
  MoreHorizontal,
  ChevronRight,
  Settings,
  Badge,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

import Image from "next/image";
export default function Programs() {
  return (
    <section className="border rounded-lg bg-white p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg text-gray-700 font-bold flex items-center gap-2">
          <Menu className="h-5 w-5 text-gray-500" />
          Programs
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-purple-600">See all</span>
          <MoreHorizontal className="h-5 w-5 text-gray-500" />
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm text-gray-500">Filter:</span>
        <Button variant="outline" size="sm" className="text-sm">
          Active <ChevronRight className="h-4 w-4 ml-1 rotate-90" />
        </Button>
      </div>

      <div className="space-y-4">
        <Card className="overflow-hidden">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=150&width=400"
              alt="UI/UX Course"
              width={400}
              height={150}
              className="w-full h-32 object-cover"
            />
            <div className="absolute top-2 right-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 bg-white/80 rounded-full"
              >
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold">
              Fundamentals of User Interface & Experience
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              This program is a hands-on guide designed for designers who want
              to master color theory and confidently apply it to their designs.
              This practical approach...
            </p>
            <div className="flex items-center gap-2 mt-3">
              <div className="flex -space-x-2">
                <Avatar className="h-6 w-6 border-2 border-white">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Mentor"
                    width={24}
                    height={24}
                  />
                </Avatar>
                <Avatar className="h-6 w-6 border-2 border-white">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Mentor"
                    width={24}
                    height={24}
                  />
                </Avatar>
                <Avatar className="h-6 w-6 border-2 border-white">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Mentor"
                    width={24}
                    height={24}
                  />
                </Avatar>
              </div>
              <span className="text-xs">Mentors</span>
            </div>
            <div className="flex justify-between mt-3">
              <Button variant="outline" size="sm" className="text-xs">
                View Details
              </Button>
              <Button
                size="sm"
                className="text-xs bg-purple-600 hover:bg-purple-700"
              >
                Analyze
              </Button>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=150&width=400"
              alt="Color Hack Course"
              width={400}
              height={150}
              className="w-full h-32 object-cover"
            />
            <Badge className="absolute top-2 left-2 bg-green-500 text-white">
              Ongoing Call
            </Badge>
          </div>
          <div className="p-4">
            <h3 className="font-bold">Colour Hack Practical Group Call</h3>
            <p className="text-sm text-gray-500 mt-1">
              This program is a hands-on guide designed for designers who want
              to master color theory and confidently apply it to their designs.
              This practical approach...
            </p>
            <div className="flex items-center gap-2 mt-3">
              <Avatar className="h-6 w-6">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Mentor"
                  width={24}
                  height={24}
                />
              </Avatar>
              <span className="text-xs">Hosted by: Faith Okolo</span>
            </div>
            <div className="flex justify-between mt-3">
              <Button variant="outline" size="sm" className="text-xs">
                View Details
              </Button>
              <Button
                size="sm"
                className="text-xs bg-purple-600 hover:bg-purple-700"
              >
                Analyze
              </Button>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=150&width=400"
              alt="Color Hack Course"
              width={400}
              height={150}
              className="w-full h-32 object-cover"
            />
            <Badge className="absolute top-2 left-2 bg-green-500 text-white">
              Ongoing Call
            </Badge>
          </div>
          <div className="p-4">
            <h3 className="font-bold">Colour Hack Practical Group Call</h3>
            <p className="text-sm text-gray-500 mt-1">
              This program is a hands-on guide designed for designers who want
              to master color theory and confidently apply it to their designs.
              This practical approach...
            </p>
            <div className="flex items-center gap-2 mt-3">
              <Avatar className="h-6 w-6">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Mentor"
                  width={24}
                  height={24}
                />
              </Avatar>
              <span className="text-xs">Hosted by: Seif</span>
            </div>
            <div className="flex justify-between mt-3">
              <Button variant="outline" size="sm" className="text-xs">
                View Details
              </Button>
              <Button
                size="sm"
                className="text-xs bg-purple-600 hover:bg-purple-700"
              >
                Assign Mentor
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
