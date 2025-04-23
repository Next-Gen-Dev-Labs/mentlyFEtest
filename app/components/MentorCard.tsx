import { Button } from "@/app/components/ui/Button";

interface MentorCardProps {
  name: string;
  role: string;
  image: string;
}

export function MentorCard({ name, role, image }: MentorCardProps) {
  return (
    <div className="flex items-center justify-between border-b pb-2 border-[#F3F3F3]">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-200">
          <img src={image} alt="" className="rounded-full" />
        </div>
        <div>
          <div className="text-[#4F4F4F] font-bold text-[15px]">{name}</div>
          <div className="text-[10px] text-[#7D8DA6]">{role}</div>
        </div>
      </div>
      <Button className="text-[12px] text-[#F1EEFF] h-5.5 rounded-[12px] px-2 bg-[#6F01D0] hover:bg-[#6F01D0]/50">
        Message
      </Button>
    </div>
  );
}
