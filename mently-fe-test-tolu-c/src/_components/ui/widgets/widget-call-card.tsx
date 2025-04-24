import Image from "next/image";
import { cn } from "~/utils/cn";
import { Button } from "../button";
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from "~/assets/icons";
import { ImageStack } from "../image-stack";

type WidgetCallCardProps = {
  image: string;
  status: "ongoing" | "upcoming";
  title: string;
  date: string;
  time: string;
  studyGroup: string;
};

export const WidgetCallCard = ({
  image,
  status,
  title,
  date,
  time,
  studyGroup,
}: WidgetCallCardProps) => {
  return (
    <div className="w-[269px] h-full flex-none rounded-[10px] p-3 flex flex-col items-start gap-1.5 bg-[#F9F7FF]">
      <Image
        src={image}
        alt={title}
        width={244}
        height={68}
        loading="lazy"
        className="rounded-[10px] h-[68px] object-center object-cover"
      />
      <p
        className={cn(
          "text-[10px] -tracking-[2%] flex items-center gap-1 py-[2.5px] px-2 rounded-full capitalize w-max",
          {
            "bg-[#2AC10033] text-[#1F8B01]": status === "ongoing",
            "bg-[#E0DDFF] text-[#1C0AE1]": status === "upcoming",
          },
        )}
      >
        <span
          className={cn("size-1.5 rounded-full", {
            "bg-[#1F8B01]": status === "ongoing",
            "bg-[#1C0AE1]": status === "upcoming",
          })}
        />
        {status}
      </p>
      <p className="text-font line-clamp-2 text-base">{title}</p>
      <div className="w-full flex flex-col items-start gap-2.5">
        <div className="w-full grid grid-cols-2">
          <div className="border-r border-[#D0D5DD] w-full flex gap-1.5 px-4 h-3 items-center">
            <CalendarIcon className="text-primary-1 size-2" />
            <p className="text-[8px] text-[#595564]">{date}</p>
          </div>
          <div className="w-full flex gap-1.5 px-4 h-3 justify-end items-center">
            <ClockIcon className="text-primary-1 size-2" />
            <p className="text-[8px] text-[#595564]">{time}</p>
          </div>
        </div>

        <div className="w-full flex items-start gap-6">
          <div className="flex items-end gap-1">
            <Image
              src={"/images/lambo.jpg"}
              alt="lambo"
              width={12}
              height={12}
              loading="lazy"
              className="object-center size-3 object-cover rounded-full flex-none"
            />
            <div className="flex flex-col gap-0.5 items-start">
              <p className="text-[6px] -tracking-[2%] text-[#A195C0]">
                Study Group
              </p>
              <p className="text-[8px] font-semibold text-[#595564]">
                {studyGroup}
              </p>
            </div>
          </div>
          <div className="flex flex-col  gap-[1px] items-start">
            <p className="text-[6px] -tracking-[2%] text-[#A195C0]">Mentors</p>
            <ImageStack
              images={[
                "/images/person-1.png",
                "/images/person-2.jpg",
                "/images/person-3.jpg",
              ]}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center gap-6">
        <Button variant={"outline"}>View Participants</Button>
        <Button disabled={status === "upcoming"}>
          Join Now <ArrowLeftIcon className="text-current size-3" />
        </Button>
      </div>
    </div>
  );
};
