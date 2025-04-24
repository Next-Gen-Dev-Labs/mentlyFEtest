import Image, { StaticImageData } from "next/image";
import { GoDotFill } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import Button from "@/ui/Button";
import { Fragment } from "react";

interface IMentors {
  image: (string | StaticImageData)[] | (string | StaticImageData);
  name?: string;
}

interface IProgramCardProps {
  category?: string;
  color?: string;
  banner: string | StaticImageData;
  title: string;
  allowSettings?: boolean;
  mentors: IMentors[];
}

function ProgramCard({
  category,
  color,
  banner,
  title,
  allowSettings,
  mentors,
}: IProgramCardProps) {
  return (
    <li className="rounded-lg p-3 shadow-lg flex flex-col md:max-w-[270px] min-w-full gap-y-3 ">
      <div className="rounded-lg relative w-full h-20">
        {/*image */}
        <Image
          src={banner}
          alt=""
          fill
          className="object-cover w-full h-full rounded-lg"
          placeholder="blur"
        />

        {/*overlay */}
        <div className="absolute z-10 w-full h-full rounded-xl  bg-blend-overlay bg-black/40 px-3 py-2 flex flex-col justify-center gap-y-1.5">
          {allowSettings && (
            <IoSettingsOutline className="absolute top-2 right-2 text-white cursor-pointer" />
          )}
          {/*title */}
          <p className="text-white font-bold line-clamp-2 leading-5 max-w-5/6">
            {title}
          </p>
          {/*status */}
          <span
            className={`font-semibold self-start ${
              color === "green"
                ? "bg-green-50 text-green-600"
                : color === "blue"
                ? "bg-blue-50 text-blue-600"
                : "bg-pink-50 text-pink-600"
            }  rounded-full py-[1px] px-2.5 flex gap-x-[2px] items-center justify-center `}
          >
            <span>
              <GoDotFill size={10} />
            </span>
            <p className="text-[10px]">{category}</p>
          </span>
        </div>
      </div>

      {/*description */}
      <p className="text-xs line-clamp-3 font-semibold text-[#595564]">
        This program is a hands-on guide designed for designers who want to
        master color theory and confidently apply it to their designs. This
        practical approach
      </p>

      {/*mentor and details */}
      <div>
        {/*images stack */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[1px]">
            {/*mentimages */}
            {mentors?.map(({ name, image }, i) => (
              <Fragment key={i}>
                {Array.isArray(image) ? (
                  image.map((img, i) => (
                    <Fragment key={i}>
                      <div className="flex">
                        <Image
                          src={img}
                          alt=""
                          className={`object-cover h-5 min-w-5 max-w-5 rounded-full ${
                            i > 0 && "-translate-x-2"
                          } ${i > 1 && "-translate-x-4"}`}
                        />
                      </div>
                      {i === image.length - 1 && (
                        <p
                          className={`text-[11px] font-semibold text-gray-600 -translate-x-${
                            image.length > 1 && image.length + 1
                          }`}
                        >
                          {mentors.length === 1 && name}
                        </p>
                      )}
                    </Fragment>
                  ))
                ) : (
                  <div className="flex">
                    <Image
                      src={image}
                      alt=""
                      className="object-cover h-5 w-5 rounded-full"
                    />
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          <div className="flex items-center gap-x-1">
            <Button variant="primary_outline">View Details</Button>
            <Button>Analysis</Button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProgramCard;
