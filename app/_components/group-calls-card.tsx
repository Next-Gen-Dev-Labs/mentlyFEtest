import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import AvatarGroup from "./avatar-group";
import { TProgramTag, TUserThumb } from "@/lib/types";
import { ArrowRight, Calendar, Clock } from "iconsax-reactjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const GroupCallsCard = ({
  cover,
  title,
  status,
  hosts = [],
  schedule,
  group,
}: {
  cover?: string;
  title: string;
  hosts: TUserThumb[];
  status: TProgramTag;
  schedule: { date: string; time: string };
  group: {
    name: string;
    image?: string;
  };
}) => {
  return (
    <Card className="p-3.5 border-none shadow-lg gap-1.5 w-[270px] max-w-11/12 mx-auto group/prog">
      <div>
        <div className="w-full relative p-0 rounded-md flex items-center overflow-hidden h-[85px]">
          <Image
            src={cover || "/images/image.jpeg"}
            width={265}
            height={70}
            className="object-fill w-full object-center h-auto group-hover/prog:scale-110 ease-in transition-transform"
            alt={title}
          />
        </div>

        <Badge variant={status.variant}>{status.name}</Badge>

        <h3>{title}</h3>
      </div>

      <CardContent className="p-0">
        <div className="flex items-center justify-between h-3.5 text-[0.5rem] font-medium">
          <p>
            <Calendar /> <span>{schedule.date}</span>
          </p>

          <p>
            <Clock /> <span>{schedule.time}</span>
          </p>
        </div>

        <div>
          <div>
            <Avatar className="size-11 rounded-full">
              <AvatarImage src={group.image} alt={group.name} />
              <AvatarFallback className="rounded-lg p-2 bg-[#8B72FC]">
                <Image
                  src="/techrity-icon.svg"
                  width={44}
                  height={44}
                  className="object-contain"
                  alt={group.name}
                />
              </AvatarFallback>
            </Avatar>
          </div>

          <div>
            <div>Mentors</div>
            <div className="flex items-center gap-1.5">
              <AvatarGroup users={hosts} />
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-0 flex flex-col gap-4 flex-wrap justify-between">
        <div className="flex items-end gap-2">
          <Button
            variant="outline-primary"
            className="w-16 h-5 text-[0.5rem] rounded-xs"
          >
            View Participants
          </Button>

          <Button className="w-16 h-5 text-[0.5rem] rounded-xs">
            Join Now <ArrowRight />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
