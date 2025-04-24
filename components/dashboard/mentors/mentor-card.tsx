import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MentorCardProps } from "@/types";
import Image from "next/image";


export const MentorCard = ({ imageUrl, role, name }: MentorCardProps) => {
  return (
    <Card className="p-0 cursor-pointer w-full">
      <CardContent className="p-3">
        {/* Stack vertically on small screens and align horizontally on md+ */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 w-full">
          {/* Avatar and Info */}
          <div className="flex gap-3 items-center w-full sm:w-auto">
            <Image
              src={imageUrl}
              alt={name}
              width={20}
              height={20}
              className="size-10 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-base md:text-lg">{name}</h3>
              <p className="text-xs md:text-base text-brand-gray">{role}</p>
            </div>
          </div>

          {/* Action Button */}
          <div className="w-full sm:w-auto">
            <Button className="w-full cursor-pointer hover:bg-brand-blue sm:w-auto rounded-full bg-brand-blue text-white text-sm  px-2 sm:px-4 py-2">
              Message
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
