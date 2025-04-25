'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreVertical, Filter, Eye, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Program {
  id: number;
  title: string;
  description: string;
  instructor: {
    name: string;
    avatar: string;
  };
  price: string | null;
  tag: string;
  sessions: number;
  image?: string; // Optional image property
}

interface ProgramsSectionProps {
  className?: string;
}


const programsData: Program[] = [
  {
    id: 1,
    title: "Fundamentals of User Interface & Experience",
    description: "This course is intended to guide designers on how to create beautiful user interfaces and proficiently apply UX concepts. This practical approach...",
    instructor: {
      name: "Mechele ChewGoods",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    price: "$7.99",
    tag: "Featured",
    sessions: 12,
    image : "/ProgrambannerImage.svg"
  },
  {
    id: 2,
    title: "Colour Magic Practical: Neon Chill",
    description: "This course is intended to guide designers on how to create beautiful user interfaces and proficiently apply UX concepts. This practical approach...",
    instructor: {
      name: "Mechele ChewGoods",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    price: null,
    tag: "New",
    sessions: 8,
    image : "/Rectangle12322.svg"
  },
];

export default function ProgramsSection({ className }: ProgramsSectionProps)  {
  const [activeTab, setActiveTab] = useState<string>("all");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <Card>
    <CardHeader className="pb-2 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="h-5 w-1.5 bg-yellow-400 rounded-full"></span>
          <CardTitle className="text-lg font-medium">Programs</CardTitle>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="link" className="text-sm text-purple-600 p-0">
            See all
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreVertical size={16} />
          </Button>
        </div>
      </div>
    </CardHeader>
  
    <CardContent className="pt-2">
      <div className="flex justify-between items-center mb-4">
        <Button
          variant="outline"
          size="sm"
          className="text-xs h-8 flex items-center gap-1 border-gray-200"
        >
          <Filter size={14} />
          Filter
        </Button>
        <Tabs defaultValue="active" className="w-auto" onValueChange={handleTabChange}>
          <TabsList className="h-8 bg-gray-100">
            <TabsTrigger
              value="all"
              className={`text-xs px-3 py-1 h-6 ${activeTab === 'all' ? 'bg-yellow-400 text-black' : ''}`}
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="active"
              className={`text-xs px-3 py-1 h-6 ${activeTab === 'active' ? 'bg-yellow-400 text-black' : ''}`}
            >
              Active
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
  
      <div className="space-y-4">
        {programsData.map((program, index) => (
          <div key={program.id} className="border rounded-xl overflow-hidden shadow-sm bg-white">
            <div className="relative h-36 bg-gray-300">
              <Image
                src={program.image || '/default-image.jpg'}
                alt={program.title}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />

                <div className="absolute inset-0 bg-black/40 flex items-start p-3">
                <h3 className="text-white font-semibold text-xl">{program.title}</h3>
                </div>
              <div className="absolute bottom-2 left-2">
                <Badge
                  className={`text-xs px-2 ${program.tag === 'Featured' ? 'bg-blue-600 text-white' : 'bg-green-500 text-white'}`}
                >
                  {program.tag}
                </Badge>
              </div>
              <div className="absolute top-2 right-2">
                <Settings size={16} className="text-white" />
              </div>
            </div>
  
            <div className="p-4">
              <p className="text-xs text-gray-600 mb-4 line-clamp-2">{program.description}</p>
              <div className="flex items-center gap-2 mb-3">
                {/* Multiple avatars if first item */}
                {index === 0 ? (
                  <>
                    {[1, 2].map((i) => (
                      <Avatar key={i} className="h-6 w-6 -ml-1 first:ml-0 ring-2 ring-white">
                        <AvatarImage src={`https://i.pravatar.cc/40?img=${i}`} />
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                    ))}
                    <span className="text-xs text-gray-700">Mentors</span>
                  </>
                ) : (
                  <>
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={program.instructor.avatar} />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-gray-700">Hosted By: {program.instructor.name}</span>
                  </>
                )}
              </div>
  
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs h-7 border-gray-200 flex items-center gap-1"
                >
                  <Eye size={14} />
                  View Details
                </Button>
                <Button
                  size="sm"
                  className="text-xs h-7 bg-purple-600 hover:bg-purple-700"
                >
                  Analysis
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
  
  );
}