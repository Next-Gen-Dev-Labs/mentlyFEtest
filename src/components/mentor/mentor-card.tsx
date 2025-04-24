// import Mentor1 from "@/../public/mentor3.png";
import Button from "@/ui/Button";
import Image, { StaticImageData } from "next/image";

interface IMentorCardProps {
  name: string;
  work: string;
  banner: string | StaticImageData;
}

function MentorCard({ name, work, banner }: IMentorCardProps) {
  return (
    <div className="flex pb-2.5 border-b border-gray-300 items-center justify-between text-gray-600 text-xs md:min-w-[225px]">
      <div className="flex items-center gap-x-2">
        <Image
          src={banner}
          alt=""
          className="object-cover cursor-pointer h-8 w-8 rounded-full"
        />
        {/*details */}
        <div>
          <p className="font-bold text-xs">{name}</p>
          <p className="text-[10px] font-medium text-gray-400">{work}</p>
        </div>
      </div>

      <Button className="rounded-full">Message</Button>
    </div>
  );
}

export default MentorCard;
