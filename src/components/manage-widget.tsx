"use client";

import Close from "@/assets/svg/close";
import Menu from "@/assets/svg/menu";
import { Check } from "lucide-react";
import { useState } from "react";

export default function ManageWidget({ onClose }: { onClose: () => void }) {
  const [options, setOptions] = useState({
    programs: true,
    "group-calls": true,
    mentors: "true",
    "recent-activities": true,
    application: true,
    earnings: false,
    forum: false,
    "programs-analytics": false,
  });

  return (
    <div className="fixed size-full h-screen w-screen flex inset-0 z-50 slide-in">
      <div
        className="absolute inset-0 bg-transparent backdrop-blur-[2x]"
        onClick={onClose}
      />
      <div className="relative h-full max-w-md min-w-52 md:w-full bg-white ml-auto p-8 md:p-12 space-y-14">
        <div className="flex pb-2.5 border-b border-b-[#D7D7D7]">
          <span className="ml-auto cursor-pointer" onClick={onClose}>
            <Close />
          </span>
        </div>
        <div className="space-y-8">
          <h4 className="text-[var(--primary-light)] text-[2rem] font-bold">
            Manage Widget
          </h4>
          <p className="text-[#374557] text-sm/[140%]">
            Personalize your dashboard by managing widgets add, remove, or
            reorder them to fit your workflow.
          </p>
          <div className="flex flex-col gap-2 py-4">
            {[
              { label: "Programs", id: "programs" },
              { label: "Group Calls", id: "group-calls" },
              { label: "Mentors", id: "mentors" },
              { label: "Recent Activities", id: "recent-activities" },
              { label: "Application", id: "application" },
              { label: "Earnings", id: "earnings" },
              { label: "Forum", id: "forum" },
              { label: "Programs Analytics", id: "programs-analytics" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-2 flex items-center justify-between cursor-pointer"
                onClick={() => {
                  setOptions((prev) => ({
                    ...prev,
                    [item.id]: !prev[item.id as keyof typeof options],
                  }));
                }}
              >
                <div className="flex gap-4 items-center">
                  <Menu />
                  <p className="text-[var(--grey-2)] font-bold text-sm">
                    {item.label}
                  </p>
                </div>
                <div>
                  {options[item.id as keyof typeof options] ? (
                    <div className="size-5 bg-[#07C500] flex items-center justify-center rounded-sm">
                      <Check className="stroke-2 size-4 stroke-white" />
                    </div>
                  ) : (
                    <div className="border-2 border-black/50 size-5 bg-transparent" />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between gap-6">
            <button className="pri-btn rounded-[7px] py-3.5 px-4 w-full flex items-center justify-center text-white font-bold text-sm leading-[100%] tracking-[2%]">
              Save Changes
            </button>
            <button className="border border-[var(--primary-light)] rounded-[7px] py-3.5 px-4 w-full flex items-center justify-center text-[var(--primary-light)] font-bold text-sm leading-[100%] tracking-[2%]">
              Reset to Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
