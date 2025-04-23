import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";
import { Settings } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  mentors?: string[];
  host?: string | null;
  hostImage?: string;
  program?: "bootcamp" | "group call";
}

export function ProgramCard({
  title,
  description,
  mentors,
  host,
  hostImage,
  program,
}: ProgramCardProps) {
  return (
    <div className="shadow-xl rounded-lg overflow-hidden bg-white p-3">
      <div className="">
        {program === "bootcamp" ? (
          <div className="flex justify-between rounded-[7px] items-start min-h-[70px] mb-2 bg-no-repeat bg-center bg-cover bg-[url('/image1.jpg')]">
            <div className="p-2 bg-gradient-to-b flex flex-col justify-between gap-4 from-[#0C0C0C]/50 to-black min-h-[70px] w-full from-80% rounded-[7px]">
              <div className="flex justify-between gap-4">
                <h3 className="font-bold text-[17px] leading-[22px]">
                  {title}
                </h3>
                <Settings size={14} />
              </div>
              <Badge className="bg-[#D4E0F3] w-max text-[#0077FF] h-[12px] text-[6.5px] leading-0 font-bold rounded-[10px] px-2 py-0.5 flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-[#0077FF] rounded-full"></div>
                <p>Bootcamp</p>
              </Badge>
            </div>
          </div>
        ) : (
          <div className="flex justify-between min-h-[70px] rounded-[7px] items-start mb-2 bg-no-repeat bg-center bg-cover bg-[url('/image2.jpg')]">
            <div className="p-2 bg-gradient-to-b flex flex-col justify-between gap-4 min-h-[70px] from-[#0C0C0C]/50 w-full h-full to-black from-80% rounded-[7px]">
              <h3 className="font-bold text-[17px] leading-[22px]">{title}</h3>
              <Badge className="bg-[#D4F3D4] w-max text-[#008000] h-[12px] text-[6.5px] leading-0 font-bold rounded-[10px] px-2 py-0.5 flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-[#008000] rounded-full"></div>
                <p>Group Call</p>
              </Badge>
            </div>
          </div>
        )}
        <p className="text-[10px] text-[#555] mt-2 line-clamp-3">
          {description}
        </p>
      </div>
      <div className="flex mt-3 items-center justify-between">
        {program === "bootcamp" && (
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              <div className="w-3.5 h-3.5 rounded-full">
                <img src={mentors?.[0]} alt="" className="rounded-full" />
              </div>
              <div className="w-3.5 h-3.5 rounded-full">
                <img src={mentors?.[0]} alt="" className="rounded-full" />
              </div>
              <div className="w-3.5 h-3.5 rounded-full">
                <img src={mentors?.[0]} alt="" className="rounded-full" />
              </div>
            </div>
            <p className="text-[#6C6C6C] text-[9px] font-semibold">Mentors</p>
          </div>
        )}
        {program === "group call" && (
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 rounded-full">
              <img src={hostImage} alt="" className="rounded-full" />
            </div>
            <p className="text-[#6C6C6C] text-[9px] font-semibold">
              Hosted by: {host}
            </p>
          </div>
        )}

        <div className="flex gap-1">
          <Button className="text-[8px] text-[#6F01D0] hover:text-[#6f01d0]/50 hover:border-[#6f01d0]/50 h-6 w-[64px] rounded-[3px] border-[0.8px] border-[#6F01D0]">
            View Details
          </Button>
          <Button className="text-[8px] h-6 w-[64px] text-white rounded-[3px] bg-[#6F01D0] hover:bg-[#6f01d0]/50">
            {program === "bootcamp" ? "Analysis" : "Assign Mentor"}
          </Button>
        </div>
      </div>
    </div>
  );
}
