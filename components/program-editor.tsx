"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Settings,
  FileTypeIcon as DocumentIcon,
  ArrowLeft,
  Share2,
  Calendar,
  MapPin,
  Clock,
  MessageSquare,
  Users,
  Pencil,
  Briefcase,
} from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ProgramSection } from "./program-section"
import { TextEditor } from "./text-editor"
import { motion } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ProgramEditor() {
  const [sections, setSections] = useState([
    { id: 1, title: "Program Information Text 1", isCollapsed: false },
    { id: 2, title: "Program Information Text 2", isCollapsed: false },
  ])

  const toggleSection = (id: number) => {
    setSections(
      sections.map((section) => (section.id === id ? { ...section, isCollapsed: !section.isCollapsed } : section)),
    )
  }

  return (
    <div className="min-h-screen max-w-screen p-4 md:p-6">
      <div className="mb-8 w-full flex items-center justify-between flex-wrap gap-5">
        <div className=" flex justify-between">
          <div className="flex items-center gap-2 mr-56">
            <Button variant="ghost" size="icon" className="text-orange-400 hover:text-orange-500">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <span className="text-lg font-medium text-orange-400">Back to Home</span>
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                  <Settings className="h-5 w-5 text-gray-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Delete</DropdownMenuItem>
                <DropdownMenuItem>Clear</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="hover:bg-gray-100">
              <DocumentIcon className="h-5 w-5 text-gray-500" />
            </Button>

            <Button className="bg-[#1a1042] hover:bg-[#2a1852] text-white px-6 rounded-full">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        <div>
          <span className="hidden md:inline text-sm text-gray-500">
            13th February 2024, 12:15 PM <span className="text-gray-400">(Local time)</span>
          </span>
        </div>
      </div>


      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          className="space-y-6 order-2 lg:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <h2 className="mb-4 text-2xl font-bold">Program Information</h2>
            <div className="space-y-4">
              <div>
                <Label>Describe Section Title</Label>
                <Input placeholder="Describe Section Title e.g What you stand to learn" />
              </div>
              <div className="text-sm text-blue-600 bg-blue-50 p-2 rounded mb-2">
                    Provide your preferred title for this section i.e What is in this Program for you?
                  </div>
              <div>
                {/* <Label>Program Description</Label> */}
                <TextEditor />
                <div className="text-sm text-blue-600 bg-blue-50 p-2 rounded">
                  Provide a clear and concise description/information of your program. This can include objectives,
                  goals, necessary resources or any specific requirements.
                </div>
              </div>
            </div>
          </div>

          <Button variant="outline" className="w-full h-20 group hover:border-primary/50 transition-colors">
            <div className="flex flex-col">
            <p className=" items-center gap-2">
              + Add new section
            </p>
            <p className="text-sm text-muted-foreground group-hover:text-primary/70 transition-colors">
              (maximum number of sections to add is 2)
            </p>
            </div>
          </Button>

          <div className="flex items-center !mb-16 gap-2 ">
              <Switch id="anonymous" />
              <Label htmlFor="anonymous">Show this section when published</Label>
          </div>


          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProgramSection
                title={section.title}
                isCollapsed={section.isCollapsed}
                onToggleCollapse={() => toggleSection(section.id)}
                
              />
            </motion.div>
          ))}

          <div className="flex items-center justify-end flex-wrap gap-4">
    
            <div className="flex justify-end gap-4">
              <p className="mt-1 mr-5 cursor-pointer">Go Back</p>
              <Button className="bg-[#1a1042]">Save & Proceed</Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6 order-1 lg:order-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#1a1042]">Mentorship Program</h2>

            <Card className="overflow-hidden">
              <div className="relative h-[200px] w-full bg-gradient-to-r from-[#1a1042] to-[#2d2a3f]">
                <div className="absolute inset-0 p-6 flex">
                  <div className="flex-1 flex items-end">
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <Image
                          src="/Frame.png"
                          alt="Mentor"
                          width={80}
                          height={80}
                          className="rounded-lg"
                        />
                        <div className="space-y-1">
                          <h3 className="text-2xl font-bold text-white">
                            Mastering the
                            <br />
                            work life Equation
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-white/80">
                            <span>with</span>
                            <span>Nwachukwu Peculiar</span>
                          </div>
                          <Badge className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0">
                            Masterclass
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-white space-y-2">
                    <div>
                      20TH OCT,
                      <br />
                      2024
                    </div>
                    <div className="text-lg">2PM</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid gap-8 lg:grid-cols-2">
                  <p className="text-gray-600 leading-relaxed text-base">
                    UI/UX Design check ins with faith is a way for beginners in UI/UX Design to get started about the fundamentals
                    and how they can build a Design Career, share, document their progress on a weekly basis.
                  </p>
                  
                  <div className="p-6 bg-white rounded-lg shadow-[0_2px_16px_rgba(0,0,0,0.1)] border-gray-50">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center">
                          <Briefcase className="h-6 w-6 text-[#6b7280]" />
                        </div>
                        <span className=" text-[#6b7280]">Mentorship Program</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center">
                          <Calendar className="h-6 w-6 text-[#6b7280]" />
                        </div>
                        <span className=" text-[#6b7280]">21/4/2024-21/5/2024</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center">
                          <MapPin className="h-6 w-6 text-[#6b7280]" />
                        </div>
                        <span className=" text-[#6b7280]">In Person</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="p-6 space-y-6 mt-5 bg-[#fffaf2] border-[#fee1b1]">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-[#1e1b4b]">Program Information Text</h4>
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { icon: MessageSquare, text: "Content" },
                        { icon: Briefcase, text: "Content" },
                        { icon: Users, text: "Content" },
                        { icon: Pencil, text: "Content" },
                        { icon: Clock, text: "Content" },
                        { icon: Calendar, text: "Content" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffeccc]">
                            <item.icon className="h-5 w-5 text-[#1f0a54]" />
                          </div>
                          <span className="text-[#6b7280] text-[15px]">Content</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                <Card className="p-6 space-y-6 mt-5 bg-[#fffaf2] border-[#fee1b1]">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-[#1e1b4b]">Program Information Text 2</h4>
                    <ul className="space-y-4">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#6b7280]" />
                          <span className="text-[#6b7280] text-[15px]">Content</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

