import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GroupCallCardProps } from "@/types";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";



export const GroupCallCard = ({
  programbanner,
  date,
  startTime,
  groupName,
  endTime,
  type,
  title,
  mentorsImages,
}: GroupCallCardProps) => {
  return (
    <Card className="shadow-lg py-2 w-full bg-[#F9F7FF]">
      <CardContent className="relative">
        {/* Banner Image */}
        <div className="relative">
          <Image
            src={programbanner}
            alt="Colour Hack"
            height={100}
            width={100}
            className="w-full h-32 md:h-40 object-cover rounded-sm"
          />
        </div>

        {/* Badge and Title */}
        <div className="flex flex-col p-1 border-b">
          {type === "ongoing" ? (
            <Badge className="bg-green-200 text-green-800 w-fit">Ongoing</Badge>
          ) : (
            <Badge className="bg-brand-blue-100 font-bold text-blue-500 w-fit flex items-center gap-1">
              <div className="size-2 rounded-full bg-brand-blue" />
              Upcoming
            </Badge>
          )}
          <h3 className="font-bold text-xl text-pretty md:text-2xl my-2">{title}</h3>
        </div>

        {/* Date and Time */}
        <div className=" gap-1 grid grid-cols-1 sm:grid-cols-2 mt-2">
          <div className="border-r md:border-r-2 md:mr-5 flex items-center gap-2 font-bold">
            <Calendar className="size-3 sm:size-5" />
            <span className="text-xs sm:text-base">{date}</span>
          </div>
          <div className="flex items-center gap-1 font-bold">
            <Clock className="size-3 sm:size-5" />
            <span className="text-xs sm:text-base">{startTime}-</span>
            <span className="text-xs sm:text-base">{endTime}AM</span>
          </div>
        </div>

        {/* Group Info and Mentors */}
        <div className="gap-1 grid grid-cols-1 sm:grid-cols-2 mt-4 ">
          <div className="flex items-center gap-3">
            <Image
              src={"/man-1.svg"}
              alt="study-group"
              width={32}
              height={32}
              className="size-8 rounded-full"
            />
            <div className="flex flex-col leading-3">
              <span className="text-brand-gray text-sm">Study Group</span>
              <span className="font-semibold text-sm  md:text-lg">
                {groupName}
              </span>
            </div>
          </div>
          <div className="">
            <span className="text-brand-gray text-sm">Mentors</span>
            <AvatarCircles avatarUrls={mentorsImages} />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center justify-between mt-4">
          <Button
            variant={"outline"}
            className="border-brand-blue text-brand-blue w-full sm:w-auto py-6"
          >
            View Participants
          </Button>
          <Button className="bg-brand-blue hover:bg-brand-blue text-white w-full sm:w-auto py-6 flex items-center justify-center gap-2">
            <span>Join Now</span>
            <ArrowRight />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
