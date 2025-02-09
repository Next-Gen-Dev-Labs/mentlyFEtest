import mently from "@/public/ted_1.svg";
import Image from "next/image";
import { Grid4, HambergerMenu } from "iconsax-react";
import Nav from "./Nav";
import Bottom from "./Bottom";

export default function Sidebar() {
  return (
    <aside className="bg-mently-blue w-full md:max-w-[120px] flex sm:justify-normal justify-between items-baseline sm:flex-column gap-8 px-3 py-7">
      <div className="flex sm:flex-col gap-8 sm:gap-10 justify-center items-center px-3">
        <span className="sm:hidden">
          <HambergerMenu size={24} variant="Linear" className="stroke-white" />
        </span>
        <Image src={mently} alt="mently logo" width={47} height={32} />
        <button type="button" className="hidden sm:inline" aria-label="change nav view">
          <Grid4 size={32} variant="Linear" className="stroke-icon-grey " aria-hidden />
        </button>
      </div>
      <Nav />
      <Bottom />
    </aside>
  );
}
