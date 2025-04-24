import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Setting2 } from "iconsax-reactjs";
import Image from "next/image";
import AvatarGroup from "./avatar-group";
import { TProgramTag, TUserThumb } from "@/lib/types";

export const ProgramCard = ({
  cover,
  title,
  description,
  hosts = [],
  tags = [],
  actions,
}: {
  cover?: string;
  title: string;
  description: string;
  hosts: TUserThumb[];
  tags: TProgramTag[];
  actions: string[];
}) => {
  return (
    <Card className="p-3.5 border-none shadow-lg gap-1.5 max-w-11/12 mx-auto group/prog">
      <CardHeader className="w-full relative p-0 rounded-md flex items-center overflow-hidden h-[85px]">
        <div className="absolute inset-0 rounded-md p-2 flex flex-col items-start justify-between text-white z-30 bg-gradient-to-t from-black to-[#0c0c0c2e]">
          <CardTitle className="flex items-start justify-between text-base leading-snug">
            <h3 className="flex-1 mb-1.5">{title}</h3>
            <Button
              variant="ghost"
              type="button"
              className="!p-0.5 hover:bg-accent/15 hover:text-inherit h-fit w-fit _!size-3.5"
            >
              <Setting2 />
            </Button>
          </CardTitle>

          <div className="flex items-center flex-wrap gap-2">
            {tags.map(({ name, variant }, idx) => (
              <Badge key={idx} variant={variant}>
                {name}
              </Badge>
            ))}
          </div>
        </div>
        <Image
          src={cover || "/images/image.jpeg"}
          width={265}
          height={70}
          className="object-fill w-full object-center h-auto group-hover/prog:scale-110 ease-in transition-transform"
          alt={title}
        />
      </CardHeader>

      <CardContent className="p-0">
        <p className="text-foreground text-[10px] leading-tight">
          {description}
        </p>
      </CardContent>

      <CardFooter className="p-0 flex flex-row items-end gap-2 flex-wrap justify-between">
        <div className="flex items-center gap-1.5">
          <AvatarGroup users={hosts} />
          {hosts.length > 1 ? (
            <p className="text-[0.625rem] font-semibold">Mentors</p>
          ) : (
            <p className="text-[0.625rem] ">Hosted by: {hosts[0].name}</p>
          )}
        </div>

        <div className="flex items-end gap-2">
          <Button
            variant="outline-primary"
            className="w-16 h-5 text-[0.5rem] rounded-xs"
          >
            {actions[0]}
          </Button>

          <Button className="w-16 h-5 text-[0.5rem] rounded-xs">
            {actions[1]}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
