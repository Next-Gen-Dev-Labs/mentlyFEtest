import { ComponentProps } from "react";
import { NigeriaIcon } from "~/assets/icons";
import { cn } from "~/utils/cn";
import { Button } from "../button";
import { Checkbox } from "~/_components/form";
import Image from "next/image";

type WidgetApplicationCardProps = {
  name: string;
  email: string;
  image: string;
  mentorInfo?: {
    role: string;
    location: string;
    timeZone: string;
    experience: string;
  };
};

export const WidgetApplicationCard = ({
  name,
  email,
  image,
  mentorInfo,
}: WidgetApplicationCardProps) => {
  return (
    <div className="w-full border-b border-[#DBDBDB] pb-6 flex items-start flex-col">
      <div className="w-full flex items-center justify-between h-14 py-4 gap-6">
        <div className="flex h-9 items-center gap-4">
          <Checkbox />
          <Image
            src={image}
            alt={name}
            width={32}
            height={32}
            className="rounded-full size-8 object-center object-cover"
            loading="lazy"
          />
          <div className="flex flex-col gap-0.5 items-start">
            <p className="text-sm font-bold text-gray-2">{name}</p>
            <p className="text-[10px] text-grey-2">{email}</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <Button variant={"error"}>Reject</Button>
          <Button>Accept</Button>
        </div>
      </div>
      {mentorInfo ? (
        <div className="w-full flex pl-[26px] gap-1 items-start flex-wrap">
          <Pill className="text-[#9985A7] border-[#DDCEEE] bg-[#F3ECF9]">
            {mentorInfo.role}
          </Pill>
          <Pill className="text-[#58948E] bg-[#E8FDFB] border-[#A1BDBA]">
            {mentorInfo.experience}
          </Pill>
          <Pill className="bg-[#E3ECF9] border-[#ABBEE0] text-[#8196B5]">
            <NigeriaIcon />
            {mentorInfo.location}
          </Pill>
          <Pill className="bg-[#F4F4F4] border-[#C8C8C8] text-[#595564]">
            {mentorInfo.timeZone}
          </Pill>
        </div>
      ) : null}
    </div>
  );
};

const Pill = ({ children, className, ...props }: ComponentProps<"button">) => (
  <button
    className={cn(
      "flex items-center flex-none justify-center rounded-md px-4 h-5 font-medium text-[8px] leading-[22px] capitalize border",
      className,
    )}
    {...props}
  >
    {children}
  </button>
);
