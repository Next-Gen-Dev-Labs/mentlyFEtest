import Image, { StaticImageData } from "next/image";

import Ux from "@/../public/ux1.jpg";

import Mentor1 from "@/../public/mentor1.png";
import Mentor2 from "@/../public/mentor3.png";
import Mentor3 from "@/../public/mentor6.png";
import { GoClock, GoDotFill } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "@/ui/Button";

interface IGroupCardProps {
  category?: string;
  color?: string;
  banner: string | StaticImageData;
  // title?: string;
  //   allowSettings?: boolean;
}

function GroupCallsCard({
  category,
  color,
  banner,
}: // title,
// allowSettings,
IGroupCardProps) {
  return (
    <li className="rounded-lg p-3 snap-start shadow-lg flex flex-col gap-y-1.5 min-w-full md:min-w-[269px] bg-[#f9f7ff]">
      <div className="rounded-lg relative w-full h-20">
        {/*image */}
        <Image
          src={banner}
          alt=""
          fill
          className="object-cover w-full object-[0px_14%] h-full rounded-lg"
          placeholder="blur"
        />

        {/*overlay */}
        {/* <div className="absolute z-50 w-full h-full rounded-xl  bg-blend-overlay bg-black/40 p-3 flex flex-col justify-center gap-y-1"> */}
        {/* {allowSettings && (
              <IoSettingsOutline className="absolute top-2 right-2 text-white cursor-pointer" />
            )} */}
        {/*title */}
        {/* <p className="text-white font-semibold leading-5">{title}</p> */}
        {/*status */}
        {/* <span
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
          </div> */}
      </div>

      {/*status */}
      <span
        className={`font-semibold self-start ${
          color === "green"
            ? "bg-green-100 text-green-600"
            : color === "blue"
            ? "bg-blue-100 text-blue-600"
            : "bg-red-100 text-red-600"
        }  rounded-full py-[1px] px-2.5 flex gap-x-[2px] items-center justify-center `}
      >
        <span>
          <GoDotFill size={10} />
        </span>
        <p className="text-[10px]">{category}</p>
      </span>

      {/*description */}
      <div className="line-clamp-2 leading-5 font-medium text-[#595564] border-b-[1px] border-gray-200 pb-1">
        Weekly Meeting - Product Demo Review with Testers
      </div>

      {/*date */}
      <div className="flex text-[#7b7979] items-center text-[10px] justify-between font-semibold">
        <div className="flex items-center gap-x-1.5">
          <CiCalendar size={13} color="#1f0954" />
          <p>Mon. Jul 30, 2024</p>
        </div>
        {/*seperator */}
        <span className="h-[0.5px] w-4 bg-[#d0d5dd] rotate-90" />
        <div className="flex items-center gap-x-1.5">
          <GoClock size={13} color="#1f0954" />
          <p>9:00 - 11:00AM</p>
        </div>
      </div>

      {/*mentor and details */}
      <div className="flex text-xs text-[#595564] items-center  gap-x-12">
        <div className="flex items-end gap-x-1">
          <Image
            src={Ux}
            alt=""
            className="object-cover h-[12px] w-[12px] rounded-full"
          />
          <div>
            <p className="text-[8px] font-medium text-[#a195c0]">Study Group</p>
            <p className="text-[9px] font-semibold">Ux Strategy Study group</p>
          </div>
        </div>
        {/*mentors */}
        <div className="flex flex-col gap-y-1 items-start">
          <p className="text-[8px] font-medium text-[#a195c0]">Mentors</p>
          <div className="flex">
            <Image
              src={Mentor1}
              alt=""
              className="object-cover h-[14px] w-[14px] rounded-full"
            />
            <Image
              src={Mentor2}
              alt=""
              className="object-cover -translate-x-1 h-[14px] w-[14px] rounded-full"
            />
            <Image
              src={Mentor3}
              alt=""
              className="object-cover h-[14px] w-[14px] -translate-x-2 rounded-full"
            />
          </div>
        </div>
      </div>
      {/* <div className="flex items-center gap-x-[1px]"> */}
      {/*mentimages */}
      {/*buttons */}
      <div className="text-[11px] flex items-center justify-between gap-x-1 ">
        <Button variant="primary_outline">View Participants</Button>
        <Button>
          Join Now
          <FaArrowRightLong size={11} />
        </Button>
      </div>
    </li>
  );
}

export default GroupCallsCard;
