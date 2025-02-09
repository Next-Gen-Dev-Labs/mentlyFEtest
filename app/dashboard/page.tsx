import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <h1>Home</h1>
      <Link
        href={"/dashboard/program"}
        className="bg-sidebar text-white p-3 rounded-md px-6 font-semibold w-fit"
      >
        Add Program
      </Link>
    </div>
  );
}

export default Page;
