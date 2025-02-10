import { ChevronLeftIcon, SettingsIcon } from "lucide-react";
import Link from "next/link";
import { CopyIcon, ShareIcon } from "./icons";

export default function SecondaryNav() {
  return (
    <div className="flex items-center gap-24 px-11 py-5">
      <Link
        href="/"
        className="flex items-center font-semi-bold font-inter text-secondary-color-3 hover:text-gray-900"
      >
        <ChevronLeftIcon className="h-4 w-4 mr-2" />
        <span className="inline">Back to Home</span>
      </Link>
      <div className="flex items-center space-x-2 md:space-x-4">
        <button type="button" className="p-2 text-gray-600 hover:text-gray-900">
          <SettingsIcon className="h-5 w-5" />
          <span className="sr-only">settings</span>
        </button>
        <button
          type="button"
          className="flex items-center space-x-2 px-3 py-2 rounded-md"
        >
          <CopyIcon />
          <span className="sr-only">copy</span>
        </button>
        <button
          type="button"
          className="flex items-center gap-2 bg-sidebar-background text-white px-3 py-2 rounded-2xl hover:bg-blue-700"
        >
          <ShareIcon />
          <span className="">Share</span>
        </button>
      </div>
      <div className="text-color-secondary ml-auto">
        <p>13th February 2024, 12:15 PM (Local time).</p>
      </div>
    </div>
  );
}
