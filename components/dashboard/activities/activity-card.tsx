import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { ActivityCardProps } from "@/types";

export const ActivityCard = ({
  imageUrl,
  activity,
  time,
  details,
}: ActivityCardProps) => {
  return (
    <Card className="p-0">
      <CardContent className="p-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Avatar className="size-10">
              <AvatarImage src={imageUrl} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="space-y-0.5">
              <h3 className="font-semibold text-base md:text-lg">{activity}</h3>
              <p className="text-brand-gray text-xs sm:text-base">{details}</p>
              <span className="text-brand-gray text-xs sm:text-base ">
                {time}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
