import type { ReactNode } from "react";

interface NavItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
}

export function NavItem({ icon, label, active = false }: NavItemProps) {
  return (
    <div
      className={`flex navitems items-center justify-center lg:justify-start mx-auto lg:mx-0 px-4 py-2 my-1 relative cursor-pointer ${
        active
          ? "bg-white rounded-[8px]  w-[90%] lg:w-[207px]"
          : "hover:bg-purple-800/50 rounded-[8px]"
      }`}
    >
      {label === "Analytics" && (
        <div className="px-4 py-1 text-xs -top-2 -right-14 lg:right-0 absolute ">
          <span className="border-2 border-[#0214BD38] text-[#EFEFF8] text-[10px] px-2 py-0.5 rounded-full">
            Coming Soon
          </span>
        </div>
      )}
      <div
        className={`${
          active
            ? "w-8 h-8 flex items-center text-[#1F0954] justify-center"
            : "w-8 h-8 flex items-center text-[#C2C2C2] justify-center"
        }`}
      >
        {icon}
      </div>
      <span
        className={`${active ? "ml-2 text-[#1F0954]" : "ml-2 text-[#C2C2C2]"}`}
      >
        {label}
      </span>
    </div>
  );
}
