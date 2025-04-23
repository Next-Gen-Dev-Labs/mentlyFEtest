import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";

interface ApplicationCardProps {
  name: string;
  email: string;
  role?: string;
  location?: string;
  timezone?: string;
  experience?: string;
  image?: string;
}

export function ApplicationCard({
  name,
  email,
  role,
  location,
  timezone,
  experience,
  image,
}: ApplicationCardProps) {
  return (
    <div className="flex gap-2 flex-col justify-between border-b w-full">
      <div className="flex items-center gap-3 justify-between">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            aria-label={`Accept or Reject ${name}`}
            className="rounded border-gray-300"
          />
          <div className="w-8 h-8 rounded-full bg-gray-200">
            <img src={image} alt="" className="rounded-full" />
          </div>
          <div>
            <div className="font-bold text-[#4F4F4F] text-[15px]">{name}</div>
            <div className="text-[10px] text-[#7D8DA6]">{email}</div>
          </div>
        </div>
        <div className="flex gap-2 text-[10px] font-medium">
          <Button className="h-8 w-20 rounded-lg border-[0.7px] bg-[#FFEDED] text-[#D83535] border-[#D09696] hover:bg-red-100 hover:text-red-600">
            Reject
          </Button>
          <Button className="h-8 w-20 rounded-lg bg-[#6F01D0] hover:bg-[#6F01D0]/50">
            Accept
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-1 overflow-y-auto ml-6 pb-2">
        {role && (
          <Badge className="text-[9px] font-medium rounded-md w-max border border-[#DDCEEE] text-[#9985A7] px-2 py-0.5 bg-[#F3ECF9]">
            {role}
          </Badge>
        )}
        {experience && (
          <Badge className="text-[9px] font-medium rounded-md w-max border border-[#A1BDBA] text-[#58948E] px-2 py-0.5 bg-[#E8FDFB]">
            {experience}
          </Badge>
        )}
        {location && (
          <Badge className="text-[9px] font-medium rounded-md w-max border border-[#ABBEE0] text-[#8196B5] px-2 py-0.5 bg-[#E3ECF9]">
            {location}
          </Badge>
        )}
        {timezone && (
          <Badge className="text-[9px] font-medium rounded-md w-max border border-[#C8C8C8] text-[#595564] px-2 py-0.5 bg-[#F4F4F4]">
            {timezone}
          </Badge>
        )}
      </div>
    </div>
  );
}
