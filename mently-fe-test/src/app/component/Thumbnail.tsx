import Image from "next/image";
import { IGroupCall, IProgram } from "../constant";
import { twMerge } from "tailwind-merge";

type ThumbnailsProps = {
  program?: IProgram;
  groupCalls?: IGroupCall;
  imgSize?: string;
};

export const Thumbnails = ({
  program,
  groupCalls,
  imgSize,
}: ThumbnailsProps) => {
  const thumbnails = program?.thumbnails || groupCalls?.thumbnails || [];

  return (
    <span className="flex items-center">
      <span className="flex">
        {Array.isArray(thumbnails) &&
          thumbnails.map((thumbnail: string, index: number) => (
            <span
              key={index}
              className={twMerge("relative w-[26px] h-[26px]", imgSize)}
              style={{
                marginLeft: index > 0 ? -6 : 0,
                zIndex: thumbnails.length - index
              }}
            >
              <Image
                src={thumbnail}
                alt={`thumbnail ${index + 1}`}
                fill
                className="object-cover rounded-full"
              />
            </span>
          ))}
      </span>
    </span>
  );
};
