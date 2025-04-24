// import Mentor1 from "@/../public/mentor3.png";
import Flag from "@/../public/flag.svg";
import Image, { StaticImageData } from "next/image";
import Button from "@/ui/Button";

interface ApplicationsCardProps {
  name: string;
  email: string;
  banner: string | StaticImageData;
  allowDetails?: boolean;
}

function ApplicationsCard({
  name,
  email,
  banner,
  allowDetails,
}: ApplicationsCardProps) {
  return (
    <li className="flex w-full flex-col pb-4 gap-y-2 text-gray-600">
      <div className="flex gap-x-2.5 items-center justify-between text-xs">
        <div className="flex gap-x-2 lg:gap-x-2.5 items-center">
          {/*checkbox */}
          <input
            type="checkbox"
            className="h-3.5 w-3.5 rounded accent-green-600 cursor-pointer"
          />
          {/*image */}
          <Image
            src={banner}
            alt=""
            className="object-cover cursor-pointer h-8 w-8 rounded-full"
          />
          {/*details */}
          <div className="max-w-[60%]">
            <p className="font-bold text-xs truncate">{name}</p>
            <p className="text-[10px] truncate">{email}</p>
          </div>
        </div>
        {/*buttons */}
        <div className="flex items-center gap-x-1.5">
          <Button variant="danger_outline">Reject</Button>
          <Button>Accept</Button>
        </div>
      </div>

      {/*category, status and address */}
      {allowDetails && (
        <ul className="flex justify-center overflow-x-auto min-w-full items-center gap-x-1 text-[9px] whitespace-nowrap scrollbar-hide">
          <li className="rounded-md px-2.5 py-[1px] flex items-center bg-purple-50 border border-purple-300 text-purple-400 font-medium">
            Product Designer
          </li>
          <li className="rounded-md px-2.5 flex items-center whitespace-nowrap py-[1px] bg-emerald-50 border border-emerald-300  text-emerald-400 font-medium">
            4years Experience
          </li>
          <li className="rounded-md min-w-fit flex items-center whitespace-nowrap px-2.5 py-[1px] bg-blue-50 border border-blue-300 text-blue-400 gap-x-1 font-medium">
            <Image
              src={Flag}
              alt=""
              className="object-cover cursor-pointer rounded-full"
            />
            Lagos, Nigeria
          </li>
          <li className="rounded-md flex items-center whitespace-nowrap px-2.5 py-[1px] bg-gray-50 border border-gray-300 text-gray-400 font-medium">
            GMT +1
          </li>
        </ul>
      )}
    </li>
  );
}

export default ApplicationsCard;
