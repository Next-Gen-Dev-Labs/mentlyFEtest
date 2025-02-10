"use client";
import NotificationIcon from "@/app/assets/icons/NotificationIcon";
import UserDetails from "./UserDetails";
import MenuIcon from "@/app/assets/icons/MenuIcon";
import { useDashboardContext } from "@/app/context/Provider";
import Button from "../Button";

const Navbar = () => {
  const { setContextState } = useDashboardContext();

  const handleOpenSidebar = () => {
    setContextState({ modalName: "sidebar" });
  };
  return (
    <header className="lg:w-[90%] w-full fixed top-0 right-0 flex items-center lg:justify-end justify-between bg-pureSnow h-20 shadow-navbarShadow px-4 lg:pr-20 z-10">
      <Button onClick={handleOpenSidebar} className="lg:hidden">
        <MenuIcon className="w-6 h-6" />
      </Button>
      <div className="relative w-fit lg:mr-10 mr-4 ml-auto">
        <span className="rounded-full w-2 aspect-square bg-red-500 absolute right-1"></span>
        <NotificationIcon className="" />
      </div>
      <UserDetails name={"Godwin Jimmy"} plan={"Free Plan"} />
    </header>
  );
};

export default Navbar;
