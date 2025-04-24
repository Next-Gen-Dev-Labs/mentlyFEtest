"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-xl text-black font-bold mb-4">Page not found</h1>
      <div>
        <Link href={"/"}>
          <button className="pri-btn py-2.5 px-6 rounded-[6px] flex items-center justify-center gap-1.5">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}
