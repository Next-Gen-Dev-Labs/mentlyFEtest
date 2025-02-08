"use client";

import { UserTag } from "iconsax-react";
import Link from "next/link";
import React, { useState } from "react";
import ThemeToggle from "../ThemeToggle";

export default function Bottom() {
  const [val, setVal] = useState<boolean>(true);
  return (
    <div className="sm:flex hidden flex-col items-center gap-8 mt-6">
      <div className="bg-white/10 w-24 px-2 py-6 rounded-lg flex flex-col items-center justify-between h-[146px]">
        <UserTag size={24} variant="Linear" className="stroke-white" />
        <Link
          href="https://mymently.com"
          className="text-mently-honey capitalize inline-block underline text-xs "
        >
          visit mently help desk here
        </Link>
      </div>
      <ThemeToggle isChecked={val} changeHandler={() => setVal(!val)} />
    </div>
  );
}
