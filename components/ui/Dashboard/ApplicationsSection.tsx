import { EllipsisVertical } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { Checkbox } from "../checkbox";

interface Application {
  name: string;
  email: string;
  avatar: string;
  role: string;
  location: string;
  experience?: string;
  timezone?: string;
  type: "Mentor" | "Student";
}

const applications: Application[] = [
  {
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    avatar: "/avatar-5.png",
    role: "Project Designer",
    experience: "4 years Experience",
    location: "Lagos, Nigeria",
    timezone: "GMT +1",
    type: "Mentor",
  },
  {
    name: "Adeati Samuel",
    email: "adeatisamuel@gmail.com",
    avatar: "/avatar-6.jpg",
    role: "Product Designer",
    location: "Rajest",
    type: "Student",
  },

  {
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    avatar: "/avatar-5.png",
    role: "Project Designer",
    experience: "4 years Experience",
    location: "Lagos, Nigeria",
    timezone: "GMT +1",
    type: "Student",
  },
  {
    name: "Adeati Samuel",
    email: "adeatisamuel@gmail.com",
    avatar: "/avatar-6.jpg",
    role: "Product Designer",
    location: "Rajest",
    type: "Student",
  },
  {
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    avatar: "/avatar-5.png",
    role: "Project Designer",
    experience: "4 years Experience",
    location: "Lagos, Nigeria",
    timezone: "GMT +1",
    type: "Student",
  },
];

const ApplicationsSection = () => {
  return (
    <div className="bg-white rounded-xl shadow p-4 w-[370px]">
     
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <GiHamburgerMenu className="w-4 h-4 text-gray-500" />
          <h2 className="text-base font-bold">Applications</h2>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-purple-600 text-sm font-medium">
            See all
          </button>
          <EllipsisVertical className="w-5 h-5 text-gray-500" />
        </div>
      </div>

      {/* Mentors Section */}
      <div className="mb-6">
        <h3 className="text-sm font-bold mb-3">Mentors</h3>
        {applications
          .filter((app) => app.type === "Mentor")
          .map((app, index) => (
            <div
              key={index}
              className="flex items-start gap-2 py-3 border-b px-2"
            >
              <Checkbox className="mt-1 h-4 w-4" />
              <div className="relative w-9 h-9">
                <Image
                  src={app.avatar}
                  alt=""
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-[14px] font-medium">{app.name}</h4>
                    <p className="text-[10px] text-[#B0B0B0]">{app.email}</p>
                  </div>
                  <div className="flex gap-1">
                    <button className="text-[12px] text-red-500 border border-red-500 px-2 py-0.5 rounded">
                      Reject
                    </button>
                    <button className="text-[12px] text-[#6A0DAD] border border-[#6A0DAD] px-2 py-0.5 rounded">
                      Accept
                    </button>
                  </div>
                </div>
                <div className="mt-1.5 flex gap-1 overflow-x-auto py-1 scrollbar-hide">
                  <span className="flex-shrink-0 text-[10px] bg-[#F0F0F0] text-[#5E5E5E] px-2 py-0.5 rounded">
                    {app.role}
                  </span>
                  <span className="flex-shrink-0 text-[10px] bg-[#F0F0F0] text-[#5E5E5E] px-2 py-0.5 rounded">
                    {app.experience}
                  </span>
                  <span className="flex-shrink-0 text-[10px] bg-[#F0F0F0] text-[#5E5E5E] px-2 py-0.5 rounded">
                    {app.location}
                  </span>
                  <span className="flex-shrink-0 text-[10px] bg-[#F0F0F0] text-[#5E5E5E] px-2 py-0.5 rounded">
                    {app.timezone}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Students Section with Reject/Accept Buttons */}
      <div>
        <h3 className="text-sm font-bold mb-3">Students</h3>
        {applications
          .filter((app) => app.type === "Student")
          .map((app, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b px-2"
            >
              <div className="flex items-center gap-3">
                <Checkbox className="h-4 w-4" />
                <div className="relative w-8 h-8">
                  <Image
                    src={app.avatar}
                    alt={app.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[14px] font-medium">{app.name}</h4>
                  <p className="text-[10px] text-[#B0B0B0]">{app.email}</p>
                </div>
              </div>
              <div className="flex gap-1">
                <button className="text-[12px] text-red-500 border border-red-500 px-2 py-0.5 rounded">
                  Reject
                </button>
                <button className="text-[12px] text-[#6A0DAD] border border-[#6A0DAD] px-2 py-0.5 rounded">
                  Accept
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ApplicationsSection;
