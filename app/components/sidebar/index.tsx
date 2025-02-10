"use client";
import { sidebarItems } from "@/app/utils/constants";
import SidebarItem from "./SidebarItem";
import Teddy from "@/app/assets/icons/Teddy";
import GridIcon from "@/app/assets/icons/GridIcon";
import UserTagIcon from "@/app/assets/icons/UserTagIcon";
import Link from "next/link";
import ToggleSwitch from "../ToggleSwitch";
import DropdownIcon from "@/app/assets/icons/DropdownIcon";
import { useDashboardContext } from "@/app/context/Provider";

const Sidebar = () => {
  const { setContextState, contextState } = useDashboardContext();
  const { modalName } = contextState;

  const handleRemove = () => {
    const element = document.querySelector(".slide-element");
    if (element) {
      element.classList.add("exit");
    }

    setTimeout(() => {
      setContextState({ modalName: "" });
    }, 500);
  };

  return (
    <aside
      key={modalName}
      className={`${
        modalName === "sidebar" ? "" : "hidden"
      } lg:block lg:w-[10%] w-full fixed left-0 top-0 h-[100dvh] z-10 slide-element`}
    >
      <div className=" bg-midnightPurple w-2/5 lg:w-full h-full flex flex-col items-center px-4 py-9 overflow-y-auto overflow-x-hidden gap-10">
        <div className="flex flex-col gap-10 items-center">
          <Teddy />
          <GridIcon />
        </div>
        <nav className="w-full">
          <ul className="w-full">
            {sidebarItems.map((item, index) => (
              <li key={index} className="w-full">
                <SidebarItem {...item} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col items-center w-full max-w-[84px] bg-white/10 rounded-lg px-2 py-5">
          <UserTagIcon />
          <Link href={""} className="w-full">
            <u className="text-honeyGold text-10px">
              Visit Mently Help Desk Here
            </u>
          </Link>
        </div>
        <ToggleSwitch />
        <div
          className="lg:hidden flex items-center justify-center bg-midnightPurple border border-white w-6 aspect-square rounded-full absolute md:left-[38%] left-[37%] top-1/2 -translate-y-1/2 z-10"
          onClick={handleRemove}
        >
          <DropdownIcon className="rotate-90" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
