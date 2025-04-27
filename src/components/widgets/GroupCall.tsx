"use client"
import React from "react";
import Card from "@/components/ui/Card";
import { Menu } from "lucide-react";
import { CiMenuKebab } from "react-icons/ci";
import { useRouter } from "next/navigation";
import GroupCalls_widget from '@/components/ui/reusable_widgets/groupCalls_widget'
import { GroupCalls } from "@/db/dataBase";

const GroupCall = () => {
  const router = useRouter();
  return (
    <Card className="h-full relative">
      <div className="flex px-4 py-2 justify-between items-center">
        <div className="flex items-center gap-2">
          <Menu />
          <h1 className="text-[#B0B0B0] text-base font-bold">Group Calls</h1>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => router.push('/forums')} className="text-[#6F01D0] cursor-pointer font-semibold text-xs">See all</button>
          <CiMenuKebab />
        </div>
      </div>

      <main className="absolute inset-x-0 bottom-0 top-[3rem] overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 p-4 min-w-min">
          <GroupCalls_widget GroupCalls={GroupCalls} />
        </div>
      </main>
    </Card>
  );
};

export default GroupCall;
