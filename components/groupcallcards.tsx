'use client";';
import { Menu, EllipsisVertical, Badge } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

const group = [
  {
    title: "Weekly Meeting - Product Demo Review with Testers",

    imageUrl: "/fundamental.svg",
    badge: "Ongoing",
    study: "UX Strategy  Study group",
    mentors: [
      { name: "John", image: "/man.png" },
      { name: "Sarah", image: "/man.png" },
    ],
  },
  {
    title: "Weekly Meeting - Product Demo Review with Testers",

    imageUrl: "/teeth.svg",
    badge: "Upcoming",
    study: "UX Strategy  Study group",
    mentors: [{ name: "Alex", image: "/man.png" }],
  },
  {
    title: "Weekly Meeting - Product Demo Review with Testers",

    imageUrl: "/teeth.svg",
    badge: "Ongoing",
    study: "UX Strategy  Study group",
    mentors: [
      { name: "David", image: "/man.png" },
      { name: "Lisa", image: "/man.png" },
    ],
  },
];

const GroupCallCards = () => {
  return (
    <>
      <div className="w-full rounded-xl bg-card py-2.5 px-3 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b">
          <div className="flex items-center gap-4">
            <Menu size={16} />
            <span className="text-base font-bold text-muted-foreground/100">
              Group Calls
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[13.27px] font-semibold text-primary">
              See all
            </span>
            <EllipsisVertical size={18} />
          </div>
        </div>

        <div className="flex overflow-x-auto pb-4 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {" "}
          <div className="flex gap-4 flex-nowrap px-2">
            {" "}
            {group.map((item, index) => (
              <Card
                key={index}
                className="flex-none w-[290px] bg-card gap-2 rounded-xl px-2 pt-2 pb-2 shadow-md snap-start" // Added flex-none and snap
              >
                {/* Card content*/}
                <div className="relative h-24 w-full rounded-2xl px-2">
                  <Image
                    src={
                      item.imageUrl || "/placeholder.svg?height=200&width=400"
                    }
                    alt={item.title}
                    fill
                    className="object-cover rounded-2xl w-full"
                  />
                  <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
                  <div className="absolute -top-1 left-0 p-3 w-full">
                    <h3 className="font-bold text-white text-[16.42px] leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <Badge className="bg-green-500 text-[7px] text-white">
                      {item.badge}
                    </Badge>
                  </div>
                </div>

                <div className="">
                  <div className="flex justify-between items-center mt-1.5">
                    <div className="flex items-center">
                      <div className="flex -space-x-2 mr-2">
                        {item.mentors?.map((mentor, idx) => (
                          <Avatar
                            key={idx}
                            className="border-2 rounded-full border-background h-5 w-5"
                          >
                            <AvatarImage
                              src={mentor.image || "/placeholder.svg"}
                              alt={mentor.name}
                              className="rounded-full overflow-hidden flex-shrink-0"
                            />
                            <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <span className="text-[10px] font-semibold text-muted-foreground">
                        Mentors
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs text-purple-600 h-7 outline outline-primary px-3 rounded-md border-primary"
                      >
                        View Details
                      </Button>
                      <Button
                        size="sm"
                        className="text-xs h-7 px-3 bg-purple-600 hover:bg-purple-700 rounded-md"
                      >
                        Analysis
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupCallCards;
