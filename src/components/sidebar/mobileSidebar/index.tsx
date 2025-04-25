import Logo from "@/components/logo";
import { sidebarItems } from "../data";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileSidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function MobileSidebar({
  isSidebarOpen,
  toggleSidebar,
}: MobileSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`fixed left-0 top-0 z-50 h-screen w-[240px] overflow-y-auto border-r-[1px] bg-(--main) shadow-md transition-transform duration-300 dark:bg-[#1F2937] lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
      >
        {/* Logo */}
        <div className="flex h-[72px] shrink-0 items-center justify-between gap-6 px-6 pt-6">
          <div className="flex items-center justify-center gap-2">
            <span>
              <Logo />
            </span>
          </div>
          <span onClick={toggleSidebar} className="cursor-pointer">
            <svg
              width="25"
              height="25"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8337 4.1665L4.16699 15.8332M4.16699 4.1665L15.8337 15.8332"
                stroke="#696E71"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Navigation Items */}
          <aside className="w-full mt-10">
            <ul>
              {sidebarItems.map((item) => {
                const isActive = pathname === item.path;

                return (
                  <li key={item.id} className="w-full" onClick={toggleSidebar}>
                    {item.Label === "Analytics" && (
                      <div className="mb-1 ml-[8rem]">
                        <span className="rounded-[50px] bg-[#290674] h-[10px] w-[71px] text-xs font-[400] text-white leading-[100%] text-[10px]">
                          Coming Soon
                        </span>
                      </div>
                    )}
                    <Link
                      href={item.path}
                      className="flex justify-center"
                      onClick={toggleSidebar}
                    >
                      <div
                        className={`relative flex gap-[32px] rounded-[8px] items-center px-[32px] h-[52px] w-[207px] ${
                          isActive ? "bg-white" : "bg-transparent"
                        }`}
                      >
                        <span>{item.icon(isActive)}</span>
                        <h2
                          className={`text-[16px] font-[400] leading-[100%] flex justify-right ${
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
          </aside>

          {/* Help Section */}
          <div className="h-[126px] w-[207px] rounded-[8px] bg-(--secondary) px-4 mx-4 mt-20 mb-4">
            <div className="pt-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
              </svg>
            </div>
            <p className="text-[12px] font-[700] text-white leading-[100%] py-4">
              Got some questions, enquiries or need help?
            </p>
            <a href="" className="text-[10px] text-(--tertiary) underline">
              Visit Mently Help Desk Here
            </a>
          </div>

          {/* Toggle Section */}
          <div className="flex items-center justify-between mx-4 mt-4 mb-10">
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
      </div>
    </>
  );
}
