import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import Image from "next/image";

interface GroupCallCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  description: string;
  studyGroup: {
    name: string;
    avatar: string;
  };
  mentors: Array<{
    avatar: string;
  }>;
}

export function GroupCallCard2({
  className,
  imageUrl,
  // title,
  // description,
  // studyGroup,
  mentors,
  ...props
}: GroupCallCardProps) {
  return (
    <div
      className={cn(
        "w-[88vw] lg:w-[400px] rounded-lg bg-white shadow-sm border flex-item-center justify-center p-4 overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="relative w-full">
        {/* Banner Image */}
        <Image
          src={`/${imageUrl}`}
          alt="Program banner"
          className="w-full h-[120px] object-cover rounded-xl"
          width={400}
          height={120}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 bg-opacity-30 rounded-xl z-10" />

        {/* Title and Tag */}
        <div className="absolute bottom-4 left-4 text-white z-20">
          <h2 className="text-lg font-extrabold leading-snug">
            Fundamentals of User <br />
            interface & Experience
          </h2>
          <div className="mt-2">
            <span className="flex items-center gap-1 bg-[#E0E7FF] w-max text-blue-800 font-semibold px-3 py-1 rounded-full text-xs">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Bootcamp
            </span>
          </div>
        </div>

        {/* Settings Icon */}
        <div className="absolute top-4 right-4 z-30 group">
        <div className="p-2 rounded-full  duration-300 transition-all  text-gray-50  group-hover:bg-white/30  group-hover:p-2  ">
            <Settings className="w-5 h-5 " />
          </div>
        
        </div>
      </div>

      {/* Description */}
      <div className=" pt-2 pb-4">
        <p className="text-gray-800 text-bas leading-relaxd text-xs">
          This program is a hands-on guide designed for designers who want to
          master color theory and confidently apply it to their designs. This
          practical approach
        </p>
      </div>

      {/* Mentors and Buttons */}
      <div className="flex items-center justify-between  pb-0">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {mentors.map((mentor, index) => (
              <Image
                key={index}
                src={`/${mentor.avatar}`}
                alt={`Mentor ${index + 1}`}
                className="w-8 h-8 rounded-full border-2 border-white"
                width={32}
                height={32}
              />
            ))}
          </div>
          <p className=" font-semibold text-gray-700 text-xs">Mentors</p>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            className="text-purple-700 border-purple-700  text-xs font-medium px-4  hover:bg-purple-50"
          >
            View Details
          </Button>
          <Button className="bg-purple-700  text-xs text-white font-medium px-4  hover:bg-purple-800">
            Analysis
          </Button>
        </div>
      </div>
    </div>
  );
}