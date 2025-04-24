import Image from "next/image";
import { SettingsIcon } from "~/assets/icons";
import { cn } from "~/utils/cn";
import { Button } from "../button";
import { ImageStack } from "../image-stack";

type WidgetProgramCardProps = {
  image: string;
  program: "bootcamp" | "group call";
  title: string;
  hostedBy: string;
  hostImages: Array<string>;
  description: string;
};

export const WidgetProgramCard = ({
  image,
  hostedBy,
  hostImages,
  title,
  program,
  description,
}: WidgetProgramCardProps) => {
  return (
    <div className="w-full h-[171px] shadow-program bg-white rounded-[10px] flex flex-col items-start p-3 gap-1.5">
      <div className="w-full relative h-[70px] overflow-hidden rounded-md">
        <Image
          src={image}
          alt={title}
          width={265}
          height={70}
          className="w-full h-full object-center object-cover z-10"
          loading="lazy"
        />
        <div
          className="absolute z-40 inset-0"
          style={{
            backgroundImage:
              "linear-gradient(178.73deg, rgba(12, 12, 12, 0.552) 0.9%, rgba(0, 0, 0, 0.69) 98.73%)",
          }}
        />
        <div className="absolute w-full h-full inset-0 z-50 flex items-start px-2.5 py-1 gap-2.5">
          <div className="flex flex-col flex-1 gap-1.5 items-start">
            <p className="text-base text-white font-bold leading-[100%]">
              {title}
            </p>
            <p
              className={cn(
                "capitalize font-bold text-[6px] rounded-full -tracking-[2%] flex items-center gap-1 py-0.5 px-2.5",
                {
                  "text-[#0077FF] bg-[#D4E0F3]": program === "bootcamp",
                  "text-[#008000] bg-[#D4F3D4]": program === "group call",
                },
              )}
            >
              <span
                className={cn("size-1 rounded-full flex-none", {
                  "bg-[#0077FF]": program === "bootcamp",
                  "bg-[#008000]": program === "group call",
                })}
              />
              {program}
            </p>
          </div>
          <SettingsIcon className="text-white size-[13px] flex-none" />
        </div>
      </div>
      <p className="text-[#A3A3A3] text-[10px] -tracking-[2%]">{description}</p>
      <div className="w-full flex items-end justify-between">
        <div className="flex items-center gap-1.5">
          <ImageStack images={hostImages} />
          <p className="text-[#A3A3A3] text-[8px]">{hostedBy}</p>
        </div>
        <div className="flex items-end gap-1">
          <Button variant={"outline"} width={"max"}>
            View Details
          </Button>
          <Button>Analysis</Button>
        </div>
      </div>
    </div>
  );
};
