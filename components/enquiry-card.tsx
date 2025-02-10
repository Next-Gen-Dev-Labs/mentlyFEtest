import { Icons } from "@/constants/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface IEnquiryCard {
  isCollapsed: boolean;
}

export const EnquiryCard = ({ isCollapsed }: IEnquiryCard) => {
  return (
    <div className="mt-5">
      <div className="flex w-full flex-col gap-4 rounded-lg bg-[#FFFFFF1F] p-3">
        <Icons.user
          data-testid="user-icon"
          className={cn(isCollapsed && "mx-auto")}
        />
        {!isCollapsed && (
          <p className="text-[11px] font-bold leading-[13px] text-white">
            Got some questions, enquiries or need help?
          </p>
        )}
        <Link
          href={"#"}
          className="cursor-pointer text-[10px] leading-[11px] text-[#F0C074] underline"
        >
          Visit Mently Help Desk Here
        </Link>
      </div>
    </div>
  );
};
