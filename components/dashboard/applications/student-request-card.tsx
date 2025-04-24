import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { RequestAction } from "../mentors/action";
import { StudentRequestCardProps } from "@/types";


export const StudentRequestCard = ({
  name,
  email,
  imageUrl,
}: StudentRequestCardProps) => {
  return (
    <div className="p-0 w-full border-b shadow-sm">
      <div className="flex justify-between gap-3 w-full p-3">
        <div className="flex items-start md:items-center  gap-2 w-full md:w-1/2">
          <Checkbox />
          <div className="flex items-center gap-2">
            <Image
              src={imageUrl}
              alt={name}
              width={50}
              height={50}
              className="rounded-full size-10"
            />
            <div>
              <h3 className="text-base md:text-lg font-bold">{name}</h3>
              <p className="text-xs md:text-base text-gray-600">{email}</p>
            </div>
          </div>
        </div>

        {/* Action buttons: stack vertically on small screens, horizontally on md+ */}
        <RequestAction />
        <div className="2xl:flex gap-1 hidden">
          <Button className="px-4 py-2 rounded-md border border-red-400 text-red-700 hover:bg-red-50 bg-red-50 text-sm">
            Reject
          </Button>
          <Button className="px-4 py-2 rounded-md bg-brand-blue text-white hover:bg-brand-blue text-sm">
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};
