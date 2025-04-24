"use client";

import {
  Bars3Icon,
  EllipsisVerticalIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

const SectionHeader = ({
  title,
  onClick,
  showAction = true,
  actionVariant = "see-all", // "see-all" or "plus-icon"
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      {/* Left: Bars Icon + Title */}
      <div className="flex items-center gap-2">
        <Bars3Icon className="w-5 h-5 text-black" />
        <h2 className="text-md font-semibold text-gray-400">{title}</h2>
      </div>

      {/* Right: Action Button */}
      {showAction && (
        <button onClick={onClick}>
          {actionVariant === "see-all" ? (
            <div className="flex items-center gap-1 text-sm text-purple-600 font-medium">
              See all
              <EllipsisVerticalIcon className="w-4 h-4 text-black" />
            </div>
          ) : (
            <div className="flex items-center">
            <div className="w-8 h-8  border rounded-full flex items-center justify-center">
              <PlusIcon className="w-4 h-4 text-black" />

            </div>
              <EllipsisVerticalIcon className="w-4 h-4 text-black" />

            </div>
          )}
        </button>
      )}
    </div>
  );
};

export default SectionHeader;
