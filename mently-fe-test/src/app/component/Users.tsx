"use client";

import React, { useState } from "react";
import UserChart from "./UsersChart";
import Select from "@/ui-component/Select";

const Users = () => {
  const [type, setType] = useState("All");
  return (
    <div className="bg-[#E7DDFF4D] rounded-lg">
      <div className="flex items-center justify-between p-4">
        <p className="text-[#595564] text-lg max-lg:text-base font-semibold">Users</p>
        <Select
          options={["All", "Students", "Mentors"]}
          setState={setType}
          label=""
          value={type}
          optionsContainerClass="!w-fit !bg-[#E7DDFF4D]"
          optionsItemClass="!bg-[#E7DDFF4D] hover:text-primary"
        />
      </div>
      <hr className="w-full border border-[#E1E7EC]" />
      <div className="my-4">
        <UserChart />
      </div>
    </div>
  );
};

export default Users;
