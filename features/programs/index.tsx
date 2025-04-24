"use client"
import React, { useState } from 'react'
import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { ScrollArea } from "@/components/ui/scroll-area"

const programs = [
  {
    id: 1,
    title: "Fundamentals of User Interface & Experience",
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    badge: "Bootcamp",
    image: "/placeholder.svg?height=180&width=500",
    mentors: [
      { avatar: "/placeholder.svg", initials: "MS" },
      { avatar: "/placeholder.svg", initials: "AS" },
      { avatar: "/placeholder.svg", initials: "JD" },
    ],
  },
  {
    id: 2,
    title: "Colour Hack Practical Group Call",
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    badge: "Group Call",
    image: "/placeholder.svg?height=140&width=500",
    host: {
      name: "Faith Okolo",
      avatar: "/placeholder.svg",
      initials: "FO",
    },
  },
  {
    id: 3,
    title: "Colour Hack Practical Group Call",
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    badge: "Group Call",
    image: "/placeholder.svg?height=140&width=500",
    host: {
      name: "Self",
      avatar: "/placeholder.svg",
      initials: "ME",
    },
  },
]
const Programs = () => {
  const [filter, setFilter] = useState("active")

  return (
    <div className='mt-2 mr-2'>
        <div className="flex items-center justify-end gap-5 mb-6 ">
                <div className="text-sm text-gray-500">Filter</div>
                <Select value={filter} onValueChange={setFilter}>
                  <SelectTrigger className="w-[120px] border border-gray-200 text-[#595564] font-medium">
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
                <ScrollArea className='h-[504px]'>
                <div className="space-y-6 px-[10px] ">
                {programs.map((program) => (
                 <div key={program.id} style={{ boxShadow: '0px 4.93px 5.17px 0px #AFABAB4D' }} className="rounded-2xl bg-white  overflow-hidden">
                 {program.id === 1 ? (
              <div className="relative h-[89px] w-full bg-gray-100 overflow-hidden">
                <Image
                  src= "https://res.cloudinary.com/dk5mfu099/image/upload/v1745396375/e9e0c6c797123f059d0bec8bfdf6ab76d938b9b1_mbrr8y.jpg"
                  alt={program.title}
                 fill 
                 priority
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex-row-reverse p-3 flex justify-between">
                  <div className="flex justify-end ">
                    <Button variant="ghost" size="icon" className="text-white bg-white/20 rounded-full h-8 w-8">
                      <Settings className="h-4 w-4" />
                      <span className="sr-only">Settings</span>
                    </Button>
                  </div>
                  <div className='flex flex-col'>
                    <h3 className="text-sm md:text-[16px] font-bold text-white mb-1">{program.title}</h3>
                    <Badge className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-3">
                      {program.badge}
                    </Badge>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative h-[79px] w-full bg-gray-100">
                <Image
                  src='https://res.cloudinary.com/dk5mfu099/image/upload/v1745396374/7cf42e0c90afc28e48671582f0632caeced80a89_njc7o9.jpg'
                  alt={program.title}
                  fill
                  priority
                  className="object-cover w-full h-full"
                />
                <div className='absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex flex-col p-2'>
                <div>{program.id !== 1 && <h3 className="text-lg text-white md:text-[16px] font-bold mb-2">{program.title}</h3>}</div>
                <Badge className=" bg-[#D4F3D4] text-green-600 border border-green-600 rounded-full px-3">
                  {program.badge}
                </Badge>
                </div>
              
              </div>
            )}
            

            <div className="p-4">
              {/*  */}
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{program.description}</p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {program.mentors ? (
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {program.mentors.map((mentor, idx) => (
                        <Avatar key={idx} className="border-2 border-white w-5 h-5">
                          <AvatarImage src='https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png' alt="Mentor" />
                          <AvatarFallback>{mentor.initials}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 md:text-[10px]">Mentors</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src='https://res.cloudinary.com/dk5mfu099/image/upload/v1741983340/dao-4_aghguf.jpg' alt={program.host.name} />
                      <AvatarFallback>{program.host.initials}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-600 md:text-[10px]">Hosted By: {program.host.name}</span>
                  </div>
                )}

                <div className="flex gap-2 flex-1 justify-center">
                  <Button variant="outline" size="sm" className="h-9 px-4 text-sm border-[#6F01D0] bg-white cursor-pointer hover:bg-[#6F01D0] hover:text-white text-purple-700 flex-1">
                    View Details
                  </Button>
                  {program.id === 3 ? (
                    <Button size="sm" className="h-9 px-4 text-[12px] bg-[#6F01D0] hover:bg-purple-700 flex-1">
                      Assign Mentor
                    </Button>
                  ) : (
                    <Button size="sm" className="h-9 px-4 text-[12px] bg-[#6F01D0] hover:bg-purple-700 flex-1">
                      {program.id === 1 ? "Analysis" : "Analysis"}
                    </Button>
                  )}
                  
                </div>
              </div>
            </div>
          </div>
        ))}
          </div>
       </ScrollArea>
    </div>
  )
}

export default Programs