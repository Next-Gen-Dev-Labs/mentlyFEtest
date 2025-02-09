import Image from "next/image";
import Link from "next/link";
import sidebarLinks from "../_constants/sidebar";
import ToggleButton from "./ToggleButton";

const Sidebar = function () {
  return (
    <aside className="bg-primary-400  z-20 p-4 fixed w-[100px] md:w-[120px] h-full top-0 bottom-0 left-0">
      <div className="grid place-items-center gap-[20px]">
        <Image src={"/images/logo.png"} alt="mently" width={47} height={32} />
        <Image
          src={"/icons/logo-icon.svg"}
          alt="mently"
          width={32}
          height={32}
        />
      </div>

      <ul className="mt-8 grid place-items-center gap-2 ">
        {sidebarLinks.map((sidebar) => (
          <li className="w-20 h-10  " key={sidebar.id}>
            <Link
              href={"/"}
              className={`w-full hover:bg-white duration-200 rounded-lg h-full grid place-items-center ${
                sidebar.id === 2 && "bg-white rounded-lg"
              }`}
            >
              {/* {sidebar.id} */}
              <Image
                src={sidebar.path}
                width={20}
                height={20}
                alt="dashboard"
              />
            </Link>
          </li>
        ))}
      </ul>

      <div className="bg-[rgba(255,_255,_255,_0.15)] grid place-items-center rounded-lg py-5 px-2 my-10">
        <Image
          src={"/icons/user-tag.svg"}
          width={20}
          height={20}
          alt="user icon"
        />
        <div className="text-secondary-400 text-xs underline mt-4">
          Visit Mently Help Desk Here
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <ToggleButton />
      </div>
    </aside>
  );
};

export default Sidebar;

// rgba(255, 255, 255, 0.12)

// background: var(--Action-Fill-Neutral-Focus-Ghost-Inverted, #FFFFFF1F);
