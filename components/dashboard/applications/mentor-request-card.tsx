import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { RequestAction } from "../mentors/action";

interface RequestProps {
  name: string;
  email: string;
  role: string;
  experience: string;
  location: string;
  timezone: string;
  imageUrl: string;
}

export const MentorRequestCard = ({
  name,
  email,
  role,
  experience,
  location,
  timezone,
  imageUrl,
}: RequestProps) => {
  return (
    <div className="px-0 border-b shadow-sm">
      <div className="flex flex-col sm:flex-row items-start  gap-1 p-3">
        {/* Checkbox */}
        <Checkbox className="sm:size-5 size-4 mt-1 sm:mt-0" />

        {/* Main Content */}
        <div className="flex flex-col w-full gap-2">
          {/* Top section: Image, Info, Actions */}
          <div className="flex items-center gap-4 justify-between w-full">
            {/* Profile Section */}
            <div className="flex items-center gap-2">
              <Image
                src={imageUrl}
                alt={name}
                width={50}
                height={50}
                className="rounded-full size-10"
              />
              <div>
                <h3 className="text-base  md:text-lg font-bold">{name}</h3>
                <p className="text-xs md:text-base text-gray-600">{email}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <RequestAction />
            <div className="2xl:flex gap-1 hidden">
              <Button className="px-4 py-2 rounded-md border border-red-400 text-red-700 hover:bg-red-50 bg-red-50 text-sm">
                Reject
              </Button>
              <Button className="px-4 py-2 rounded-md bg-brand-blue text-white hover:bg-brand-blue text-sm">
                Accept
              </Button>
            </div>
          </div>

          {/* Tags Section */}
          <div className="flex flex-wrap gap-2 mt-1">
            <span className="p-0.5 text-[10px] rounded-full bg-purple-100 text-purple-800">
              {role}
            </span>
            <span className="p-0.5 text-[10px] rounded-full bg-teal-100 text-teal-800">
              {experience}
            </span>
            <span className="p-0.5 text-[10px] rounded-full bg-blue-100 text-blue-800 flex items-center gap-1">
              <span>🇳🇬</span> {location}
            </span>
            <span className="p-0.5 text-[10px] rounded-full bg-gray-200 text-gray-700">
              {timezone}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
