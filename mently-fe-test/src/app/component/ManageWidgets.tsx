import { ICONS } from "@/assets";
import Button from "@/ui-component/Button";
import Checkbox from "@/ui-component/Checkbox";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface IManageWidgets {
  className?: string;
  setManageWidgets?: (open: boolean) => void;
}

const ManageWidgets: FC<IManageWidgets> = ({ className, setManageWidgets }) => {
  return (
    <div
      className={twMerge(
        "bg-[#FFF] w-[400px] lg:p-8 md:p-6 p-4 overflow-y-scroll custom-scroll fixed right-0 top-0 min-h-screen",
        className
      )}
    >
      <div
        className="absolute top-10 lg:right-8 md:right-6 right-4 cursor-pointer"
        onClick={() => setManageWidgets?.(false)}
      >
        <ICONS.X stroke="#8D8D8D" />
      </div>
      <hr className="border-[#D7D7D7] border mt-12 w-full" />
      <p className="text-[#6F01D0] font-bold text-3xl mt-6">Manage Widgets</p>
      <p className="text-[#374557] text-xs mt-6">
        Personalize your dashboard by managing widgets add, remove, or reorder
        them to fit your workflow.
      </p>

      <div className="space-y-6 mt-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ICONS.Menu width={16} height={16} />
            <p className="text-[#4F4F4F] text-sm font-bold">Programs</p>
          </div>
          <Checkbox className="w-[18px] h-[18px]" check={true} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ICONS.Menu width={16} height={16} />
            <p className="text-[#4F4F4F] text-sm font-bold">Group Calls</p>
          </div>
          <Checkbox className="w-[18px] h-[18px]" check={true} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ICONS.Menu width={16} height={16} />
            <p className="text-[#4F4F4F] text-sm font-bold">Mentors</p>
          </div>
          <Checkbox className="w-[18px] h-[18px]" check={true} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ICONS.Menu width={16} height={16} />
            <p className="text-[#4F4F4F] text-sm font-bold">Recent Activites</p>
          </div>
          <Checkbox className="w-[18px] h-[18px]" check={true} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ICONS.Menu width={16} height={16} />
            <p className="text-[#4F4F4F] text-sm font-bold">Applications</p>
          </div>
          <Checkbox className="w-[18px] h-[18px]" check={true} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ICONS.Menu width={16} height={16} />
            <p className="text-[#4F4F4F] text-sm font-bold">Earnings</p>
          </div>
          <Checkbox className="w-[18px] h-[18px]" check={false} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ICONS.Menu width={16} height={16} />
            <p className="text-[#4F4F4F] text-sm font-bold">Forum</p>
          </div>
          <Checkbox className="w-[18px] h-[18px]" check={false} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ICONS.Menu width={16} height={16} />
            <p className="text-[#4F4F4F] text-sm font-bold">Program Analysis</p>
          </div>
          <Checkbox className="w-[18px] h-[18px]" check={false} />
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <Button className="font-bold rounded-[6px]">Save Changes</Button>
        <Button
          variant="outlined"
          className="text-[#6F01D0] font-bold rounded-[6px]"
        >
          Reset to Default
        </Button>
      </div>
    </div>
  );
};

export default ManageWidgets;
