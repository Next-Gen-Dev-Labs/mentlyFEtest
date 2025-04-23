import { Avatar } from "@radix-ui/react-avatar";
import { Menu, MoreHorizontal, Badge, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Image from "next/image";

export default function GroupCalls() {
  return (
    <section className="border rounded-lg bg-white p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg text-gray-700 font-bold flex items-center gap-2">
          <Menu className="h-5 w-5 text-gray-500" />
          Group Calls
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-purple-600">See all</span>
          <MoreHorizontal className="h-5 w-5 text-gray-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { status: "Ongoing", image: "/placeholder.svg?height=150&width=400" },
          {
            status: "Upcoming",
            image: "/placeholder.svg?height=150&width=400",
          },
          { status: "Ongoing", image: "/placeholder.svg?height=150&width=400" },
        ].map((item, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="p-2 border-b">
              <Badge
                className={`${
                  item.status === "Upcoming" ? "bg-blue-500" : "bg-green-500"
                } text-white text-xs`}
              >
                {item.status}
              </Badge>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm">
                Weekly Meeting - Product Demo Review with Testers
              </h3>
              <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">
                    <Menu className="h-3 w-3" />
                  </span>
                  <span>Mon, Jul 30, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">
                    <Menu className="h-3 w-3" />
                  </span>
                  <span>9:00 - 11:00AM</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Host/Creator</span>
                  <span className="text-gray-500">Members</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Avatar className="h-5 w-5">
                      <Image
                        src="/placeholder.svg?height=20&width=20"
                        alt="Host"
                        width={20}
                        height={20}
                      />
                    </Avatar>
                    <span className="text-xs">UX Strategy Study group</span>
                  </div>
                  <div className="flex -space-x-1">
                    <Avatar className="h-5 w-5 border border-white">
                      <Image
                        src="/placeholder.svg?height=20&width=20"
                        alt="Member"
                        width={20}
                        height={20}
                      />
                    </Avatar>
                    <Avatar className="h-5 w-5 border border-white">
                      <Image
                        src="/placeholder.svg?height=20&width=20"
                        alt="Member"
                        width={20}
                        height={20}
                      />
                    </Avatar>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-3">
                <Button variant="outline" size="sm" className="text-xs">
                  View Participants
                </Button>
                <Button
                  size="sm"
                  className={`text-xs ${
                    item.status === "Upcoming"
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-purple-600 hover:bg-purple-700"
                  }`}
                >
                  Join Now <ChevronRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
