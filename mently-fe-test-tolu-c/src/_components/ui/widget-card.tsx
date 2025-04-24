import { ComponentProps } from "react";
import { EllipsisIcon, MenuIcon } from "~/assets/icons";
import { cn } from "~/utils/cn";

export const WidgetCard = ({
  title,
  className,
  children,
  ...props
}: { title: string } & ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "w-full h-full p-1.5 rounded-[10px] bg-white flex flex-col",
        className,
      )}
      {...props}
    >
      <div className="w-full flex items-center justify-between h-10">
        <div className="flex items-center gap-3">
          <MenuIcon className="size-2.5 text-black cursor-pointer" />
          <p className="text-base text-[#B0B0B0] font-bold">{title}</p>
        </div>
        <div className="flex items-center gap-6">
          <p className="text-xs font-semibold text-custom-1d0 ">See all</p>
          <EllipsisIcon className="size-2.5 text-black cursor-pointer" />
        </div>
      </div>
      {children}
    </div>
  );
};
