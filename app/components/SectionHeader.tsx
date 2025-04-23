import type { ReactNode } from "react";
import { Button } from "@/app/components/ui/Button";
import { AlignJustify, CirclePlus, MoreVertical } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  showSeeAll?: boolean;
  showMoreOptions?: boolean;
  children?: ReactNode;
  showJustify?: boolean;
  showPlus?: boolean;
}

export function SectionHeader({
  title,
  showSeeAll = true,
  showMoreOptions = true,
  showJustify = true,
  showPlus = false,
  children,
}: SectionHeaderProps) {
  return (
    <div className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {showJustify && (
          <span className="text-[#B0B0B0]">
            <AlignJustify height={16} width={16} />
          </span>
        )}
        <h2 className="text-[#B0B0B0] font-bold">{title}</h2>
      </div>
      <div className="flex items-center gap-2">
        {children}
        {showSeeAll && (
          <Button className="text-[#6F01D0] text-[12.5px] font-semibold">
            See all
          </Button>
        )}
        {showPlus && <CirclePlus color="#9D92A6" width={24} height={24} />}
        {showMoreOptions && <MoreVertical size={16} className="text-black" />}
      </div>
    </div>
  );
}
