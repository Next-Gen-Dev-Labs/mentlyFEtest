import Image from "next/image";
import { programIcons } from "../_constants/icons";

export default function ProgramRightContent() {
  return (
    <div className="flex-1 rounded">
      <div className="text-[#809FB8] text-xs flex justify-end">
        13th February 2024, 12:15 PM (Local time).
      </div>

      <div className="border border-[#D9E1E780] p-4 mt-8">
        <h1 className="font-extrabold text-[32px]">Mentorship Program</h1>
        <img
          src={"/images/banner.png"}
          alt="banner"
          className="w-full rounded-lg"
        />
        <div className="flex justify-between xxl:flex-row flex-col gap-8  mt-8">
          <div className="text-[#808080]  basis-1/3  2xl:basis-1/2">
            UI/UX Design check ins with faith is a way for beginners in UI/UX
            Design to get started about the fundamentals and how they can build
            a Design Career, share, document their progress on a weekly basis.
          </div>
          <div className="shadow-[0_6px_16px_0px_#0000000F] hover:scale-110 duration-300 cursor-pointer grid gap-5 bg-white flex-1 p-8">
            <div className="grid grid-cols-2 justify-between items-center">
              <Image
                src={"/icons/main-content.svg"}
                width={24}
                height={24}
                alt="main content"
              />
              <span className="text-[#777795] text-sm font-bold">
                Mentorship Program
              </span>
            </div>
            <div className="grid grid-cols-2 justify-between items-center">
              <Image
                src={"/icons/calendar-2.svg"}
                width={24}
                height={24}
                alt="main content"
              />
              <span className="text-[#777795] text-sm font-bold">
                21/4/2024-21/5/2024
              </span>
            </div>
            <div className="grid grid-cols-2 justify-between items-center">
              <Image
                src={"/icons/location.svg"}
                width={24}
                height={24}
                alt="main content"
              />
              <span className="text-[#777795] text-sm font-bold">
                In person
              </span>
            </div>
          </div>
        </div>

        <div className="border mt-8 bg-secondary-200  border-secondary-300 rounded-2xl p-4">
          <h2 className="font-bold">Program Information Text</h2>
          <div className="grid grid-cols-2 gap-8 mt-10">
            {programIcons.map((icon) => (
              <div className="flex items-center gap-2" key={icon.name}>
                <span className="w-8 h-8 rounded-full bg-secondary-250 grid place-items-center">
                  <Image
                    src={icon.path}
                    width={16}
                    height={16}
                    alt="program content"
                  />
                </span>
                <span className="text-[#595564] font-normal">Content</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border mt-8 bg-secondary-200  border-secondary-300 rounded-2xl p-4">
          <h2 className="font-bold">Program Information Text</h2>
          <ul className="grid  gap-2 mt-10 px-4 list-disc">
            <li>
              <span className="text-[#595564] font-normal">Content</span>
            </li>
            <li>
              <span className="text-[#595564] font-normal">Content</span>
            </li>
            <li>
              <span className="text-[#595564] font-normal">Content</span>
            </li>
            <li>
              <span className="text-[#595564] font-normal">Content</span>
            </li>
            <li>
              <span className="text-[#595564] font-normal">Content</span>
            </li>
            <li>
              <span className="text-[#595564] font-normal">Content</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
