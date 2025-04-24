"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { AlignJustify, MoreVertical } from "lucide-react"

type User = {
  id: string;
  name: string;
  email: string;
  role: 'mentor' | 'student';
  tags?: {
    role: string;
    experience: string;
    location: string;
    timezone: string;
  };
};

export function ApplicationsSection() {
  const users: User[] = [
    {
      id: '1',
      name: 'Maxwell Smith',
      email: 'maxwellsmith@gmail.com',
      role: 'mentor',
      tags: {
        role: 'Product Designer',
        experience: '4years Experience',
        location: 'Lagos, Nigeria',
        timezone: 'GMT +1'
      }
    },
    {
      id: '2',
      name: 'Adeoti Samuel',
      email: 'adeoti.samuel@example.com',
      role: 'student'
    },
    {
      id: '3',
      name: 'Jessica Brown',
      email: 'jessica.b@example.com',
      role: 'student'
    },
    {
      id: '4',
      name: 'Michael Johnson',
      email: 'm.johnson@example.com',
      role: 'student'
    },
    {
      id: '5',
      name: 'Sarah Williams',
      email: 'sarah.w@example.com',
      role: 'student'
    }
  ];

  const mentor = users.find(user => user.role === 'mentor');
  const students = users.filter(user => user.role === 'student');

  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-[#FFC0CB]', 'bg-[#ADD8E6]', 'bg-[#98FB98]',
      'bg-[#FFD700]', 'bg-[#E6E6FA]', 'bg-[#FFA07A]', 'bg-[#AFEEEE]',
    ];
    const hash = name.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    return colors[hash % colors.length];
  };

  return (
    <div className="bg-white rounded-lg p-4 sm:p-6">
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-start gap-4">
            <AlignJustify className="h-5 w-5 text-[#7D8DA6]" />
            <h1 className="text-[#7D8DA6]">Applications</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-sm text-[#6F01D0]">
              See all
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-[#6F01D0]">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {mentor && (
        <div className="mb-6">
          <p className="text-sm font-bold mb-6 text-[#7D8DA6]">Mentor</p>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-start md:items-center gap-3 w-full">
              <Checkbox className="h-5 w-5 shrink-0" />
              <div className="flex items-center gap-2">
                <Avatar className={`h-8 w-8 ${getAvatarColor(mentor.name)}`}>
                  <AvatarFallback>
                    {mentor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{mentor.name}</p>
                  <p className="text-[10px] text-gray-600">{mentor.email}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 w-full md:w-auto justify-end md:justify-start">
              <Button variant="outline" size="sm" className="text-[#D83535] border-[#D09696] bg-[#FFEDED] w-full md:w-auto">
                Reject
              </Button>
              <Button size="sm" className="bg-[#6F01D0] hover:bg-purple-700 w-full md:w-auto">
                Accept
              </Button>
            </div>
          </div>

          {mentor.tags && (
            <div className="mb-6 mt-4">
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="text-[8px] px-2 py-1 bg-[#DDCEEE] text-[#9985A7] border border-[#DDCEEE] rounded-[5px]">
                  {mentor.tags.role}
                </span>
                <span className="text-[8px] px-2 py-1 bg-[#E8FDFB] text-[#58948E] border border-[#A1BDBA] rounded-[5px]">
                  {mentor.tags.experience}
                </span>
                <span className="text-[8px] px-2 py-1 bg-[#E3ECF9] text-[#8196B5] rounded-[5px] flex items-center gap-1">
                  <img src="/flag.png" alt="" width={14} height={14} />
                  {mentor.tags.location}
                </span>
                <span className="text-[8px] px-2 py-1 bg-[#F4F4F4] text-[#595564] border border-[#C8C8C8] rounded-[5px]">
                  {mentor.tags.timezone}
                </span>
              </div>
            </div>
          )}

          <div className="border-t border-gray-200 my-4"></div>
        </div>
      )}

      <div>
        <h3 className="text-lg font-semibold mb-4">Students</h3>
        <div className="space-y-3">
          {students.map((student) => (
            <div key={student.id} className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-3 border-b rounded-lg">
              <div className="flex items-start md:items-center gap-3">
                <Checkbox className="h-5 w-5 shrink-0" />
                <div className="flex items-center gap-2">
                  <Avatar className={`h-8 w-8 ${getAvatarColor(student.name)}`}>
                    <AvatarFallback>
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-[12px]">{student.name}</p>
                    <p className="text-[10px] text-gray-600">{student.email}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 w-full md:w-auto justify-end md:justify-start">
                <Button variant="outline" size="sm" className="text-[#D83535] border-[#D09696] bg-[#FFEDED] w-full md:w-auto">
                  Reject
                </Button>
                <Button size="sm" className="bg-[#6F01D0] hover:bg-purple-700 w-full md:w-auto">
                  Accept
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
