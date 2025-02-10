import { Grid4 } from "iconsax-react";
import Nav from "./Nav";
import Bottom from "./Bottom";
import MentlyLogo from "../MentlyLogo";

export default function Sidebar() {
  return (
    <aside className="bg-mently-blue w-full md:max-w-[120px] hidden sm:flex sm:justify-normal justify-between items-baseline sm:flex-column gap-8 px-3 py-7">
      <div className="flex sm:flex-col gap-8 sm:gap-10 justify-center items-center px-3">

        <MentlyLogo />

        <button
          type="button"
          className="hidden sm:inline"
          aria-label="change nav view"
        >
          <Grid4
            size={32}
            variant="Linear"
            className="stroke-icon-grey "
            aria-hidden
          />
        </button>
      </div>
      <Nav />
      <div className="mt-6">
        <Bottom />
      </div>
    </aside>
  );
}
