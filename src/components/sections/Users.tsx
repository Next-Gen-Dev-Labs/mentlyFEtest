"use client";
import dynamic from "next/dynamic";
import React from "react";

const Users = () => {
  // Dynamically import the PieChart component
  const ClientPieChart = dynamic(
    () => import("@/components/ui/Charts/PieChart"),
    {
      ssr: false,
    }
  );

  return (
    <div className="w-full bg-[#E7DDFF4D] py-2 rounded-[10px] mt-4">
      <div className="flex items-center justify-between px-4 border-b border-b-[#E1E7EC] py-4">
        <h1 className="font-semibold text-lg text-[#595564]">Users</h1>
        <select className="border outline-none text-xs py-[8px] px-[12px] border-[#E1E7EC] rounded-sm text-[#595564] font-medium">
          <option value="Active">Active</option>
        </select>
      </div>
      <div className="py-4">
        <ClientPieChart
          total={240}
          data={[
            { color: "#62B2FD", name: "Students", value: 200 },
            { color: "#9BDFC4", name: "Mentors", value: 8 },
            { color: "#F99BAB", name: "Programs", value: 22 },
            { color: "#FFB44F", name: "Others", value: 10 },
          ]}
        />
      </div>
    </div>
  );
};

export default Users;
