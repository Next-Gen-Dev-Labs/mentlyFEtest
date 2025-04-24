// import Mentor1 from "@/../public/mentor3.png";
import Button from "@/ui/Button";
import Image, { StaticImageData } from "next/image";

interface IMentorCardProps {
  text: string;
  description: string;
  banner: string | StaticImageData;
  time: string;
}
// md:min-w-[225px]
function RecentActivitiesCard({
  text,
  description,
  banner,
  time,
}: IMentorCardProps) {
  return (
    <div className="flex pb-2 items-center justify-between text-gray-600 text-xs gap-x-2 ">
      <div className="flex items-center gap-x-2">
        <Image
          src={banner}
          alt=""
          className="object-cover cursor-pointer h-8 w-8 rounded-full"
        />
        {/*details */}
        <div>
          <p className="font-bold text-xs">{text}</p>
          <p className="text-[10px] line-clamp-1 font-medium text-gray-400">
            {description}
          </p>
          <p className="text-[10px] font-medium text-gray-400">{time}</p>
        </div>
      </div>

      <Button className="rounded-full">Message</Button>
    </div>
  );
}

export default RecentActivitiesCard;
