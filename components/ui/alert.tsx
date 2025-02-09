import { CircleAlert } from "lucide-react";

type AlertProps = {
  description: string;
};

export default function Alert({ description }: AlertProps) {
  return (
    <div className="flex items-center p-4 gap-2 bg-[#CEE1FB]">
      <CircleAlert className="text-[#086BED]" />
      <p className="text-xs text-[#777795]">{description}</p>
    </div>
  );
}
