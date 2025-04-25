
import Link from "next/link";
import { sidebarItems } from "../data";
import { usePathname } from "next/navigation";
import Logo from "@/components/logo";

export default function DesktopSidebar() {
  const pathname = usePathname();
  return (
    <>
      <div className="hidden h-[80rem] flex-col bg-(--main) w-[240px] lg:flex">
        {/* Logo */}
        <div className="flex h-[72px] items-center justify-between gap-6 px-6 pt-6">
          <div className="flex items-center justify-center gap-2">
            <Logo />
          </div>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#AAAAAA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 2V22"
                stroke="#AAAAAA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        {/* Navigation Items */}
        <aside className="text-white mt-14">
          <div>
            <ul className="flex flex-col items-center">
              {sidebarItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.id} className="w-full">
                    {/* Coming Soon*/}
                    {item.Label === "Analytics" && (
                      <div className="mb-1 ml-[8rem]">
                        <span className="rounded-[50px] bg-[#290674] h-[16px] w-[71px] text-xs font-[400] text-white leading-[100%] text-[10px]">
                          Coming Soon
                        </span>
                      </div>
                    )}

                    <Link
                      href={item.path}
                      className="flex justify-center mt-[3px]"
                    >
                      <div
                        className={`relative flex gap-[32px] rounded-[8px] items-center px-[32px] h-[52px] w-[207px] transition-all duration-300 ease-in-out ${
                          isActive
                            ? "bg-white"
                            : "bg-transparent hover:bg-white hover:bg-opacity-20"
                        }`}
                      >
                        <span>{item.icon(isActive)}</span>
                        <h2
                          className={`text-[16px] font-[400] leading-[100%] flex justify-right transition-all duration-300 ease-in-out ${
                            isActive ? "text-[#1F0954]" : "text-[#C2C2C2]"
                          }`}
                        >
                          {item.Label}
                        </h2>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
        <div className="h-[126px] rounded-[8px] bg-(--secondary) px-4 mx-4 mt-20">
          <div className="pt-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 15.7166H14.3667C13.7 15.7166 13.0667 15.975 12.6 16.4416L11.175 17.85C10.525 18.4916 9.46668 18.4916 8.81668 17.85L7.39166 16.4416C6.925 15.975 6.28333 15.7166 5.625 15.7166H5C3.61667 15.7166 2.5 14.6083 2.5 13.2417V4.14996C2.5 2.7833 3.61667 1.67499 5 1.67499H15C16.3833 1.67499 17.5 2.7833 17.5 4.14996V13.2417C17.5 14.6 16.3833 15.7166 15 15.7166Z"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 8.33332C11.0724 8.33332 11.9417 7.464 11.9417 6.39164C11.9417 5.31929 11.0724 4.45001 10 4.45001C8.92765 4.45001 8.05832 5.31929 8.05832 6.39164C8.05832 7.464 8.92765 8.33332 10 8.33332Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3333 13.05C13.3333 11.55 11.8417 10.3334 10 10.3334C8.15833 10.3334 6.66667 11.55 6.66667 13.05"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-[12px] font-[700] text-white leading-[100%] py-4">
            Got some questions, enquiries or need help?
          </p>
          <a href="" className="text-[10px] text-(--tertiary) underline">
            Visit Mently Help Desk Here
          </a>
        </div>
        <div className="flex items-center justify-between mx-4 mt-10">
          <h2 className="text-[12px] font-[700] text-white leading-[100%]">
            Switch to Classic Mode
          </h2>
          <div>
            <input
              type="checkbox"
              defaultChecked
              className="toggle toggle-xs w-[29px] checked:bg-white checked:text-(--color) bg-white"
            />
          </div>
        </div>
      </div>
    </>
  );
}
