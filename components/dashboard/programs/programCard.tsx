import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { UserProfileAvatar } from "@/components/userProfile-avatar";
import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { ProgramCardProps } from "@/types";

export const ProgramCard = ({
  programbanner,
  type,
  title,
  description,
  mentorsImages,
  hostImage,
  hostName,
}: ProgramCardProps) => {
  return (
    <Card className="w-full shadow-lg py-2">
      <CardContent className="space-y-2 w-full">
        {/* Banner */}
        <div className="relative">
          <div className="absolute inset-0 bg-gray-900/70 rounded-sm z-0" />
          <Image
            src={programbanner}
            alt={title}
            height={100}
            width={100}
            className="w-full h-32 sm:h-40 object-cover rounded-sm -z-10"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-3">
            <h3 className="text-white font-bold text-lg sm:text-2xl">
              {title}
            </h3>
            {type === "group-call" ? (
              <Badge className="bg-green-200 text-green-800 font-bold w-fit flex items-center gap-1">
                <div className="size-2 rounded-full bg-green-500" />
                Group Call
              </Badge>
            ) : (
              <Badge className="bg-brand-blue-100 text-blue-500 font-bold w-fit flex items-center gap-1">
                <div className="size-2 rounded-full bg-brand-blue" />
                Bootcamp
              </Badge>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600">{description}</p>

        {/* Footer Content */}
        <div className="flex flex-col 2xl:flex-row justify-between items-center gap-2 w-full">
          {type === "group-call" ? (
            <div className="flex items-center gap-2 mr-auto">
              <UserProfileAvatar src={hostImage} className="size-10" />
              <p className="text-xs font-medium">
                Hosted By: {hostName ?? "Self"}
              </p>
            </div>
          ) : (
            <div className="flex items-center gap-2 mr-auto">
              {mentorsImages && <AvatarCircles avatarUrls={mentorsImages} />}
              <p className="text-sm font-medium">Mentors</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2 w-full 2xl:w-auto">
            <Button
              variant={"outline"}
              className="border-brand-blue md:py-2 text-sm text-brand-blue w-full md:basis-1/2 sm:w-auto"
            >
              View Details
            </Button>
            <Button className="bg-brand-blue md:py-2 text-sm text-white w-full md:basis-1/2 sm:w-auto">
              Analysis
            </Button>
          </div>

        </div>
      </CardContent>
    </Card>
  );
};
