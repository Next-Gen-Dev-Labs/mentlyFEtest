import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import icons from "./_constants/cmsIcons";
import { GoPlus } from "react-icons/go";
import { FaChevronUp } from "react-icons/fa6";
// import { TfiMore } from "react-icons/tfi";
// import { FaCaretDown } from "react-icons/fa";

export default function Page() {
  return (
    <div className="flex justify-between px-8 py-6">
      <div className="basis-[40%]">
        <div className="flex items-center justify-between ">
          <button className="flex items-center gap-2 hover:gap-2.5 duration-100">
            <span>
              <IoIosArrowBack className="text-secondary-400" />
            </span>
            <span className="text-secondary-400">Back to Home</span>
          </button>

          <div className="flex gap-6">
            <button>
              <Image
                src={"/icons/setting-2.svg"}
                width={24}
                height={24}
                alt="settings"
              />
            </button>
            <button>
              <Image
                src={"/icons/copy.svg"}
                width={24}
                height={24}
                alt="settings"
              />
            </button>
            <button className="bg-primary-400 py-2 px-3 gap-2 rounded-3xl flex justify-between items-center text-white">
              <Image
                src={"/icons/share.svg"}
                width={15}
                height={15}
                alt="settings"
              />

              <span className="font-semibold text-sm">Share</span>
            </button>
          </div>
        </div>

        <h2 className="text-[32px] mt-5 font-bold">Program Information</h2>
        <div className="text-sm text-[#828282] mt-6 font-normal">
          Describe Section Title
        </div>
        <div className="w-full mt-2 h-16 flex justify-center py-4 px-6 border border-[#1F0954] rounded">
          <div className="flex gap-3 items-center ">
            <Image
              src={"/icons/font-style-icon.svg"}
              width={32}
              height={32}
              alt="font-style-icon"
              className="max-h-[100%]"
            />

            <FaCaretDown />
          </div>
          <input
            type="text"
            className="placeholder:text-[#828282] placeholder:text-sm px-4  flex-1 font-[inherit] outline-none"
            placeholder="Describe Section Title e.g What you stand to learn"
          />
        </div>
        <div className="bg-[#CEE1FB] px-2 py-4 rounded-xs flex justify-center items-center gap-2 mt-3">
          <Image
            alt="info"
            src={"/icons/info-circle.svg"}
            width={24}
            height={24}
          />
          <span className="text-[#777795] text-xs">
            Provide your prefered title for this section i.e What’s in this
            Program for you?
          </span>
        </div>
        <div className="mt-6 border-black border rounded-[4px] relative">
          <div className="flex">
            <div className="w-[100px] flex py-1.5 px-2 gap-4    items-center justify-center   border-r-[1px] border-b-[1px] border-black rounded-br-[4px]">
              <Image
                src={"/icons/document.svg"}
                width={24}
                height={24}
                alt="document icon"
              />

              <FaCaretDown className="text-black" />
            </div>
            <div className="flex border-black rounded-bl-[4px] border-l-[1px] border-b-[1px] flex-1 py-1.5 px-2 gap-1 justify-between items-center">
              {icons.map((icon) => (
                <Image
                  src={icon.path}
                  alt={icon.name}
                  width={16}
                  height={16}
                  key={icon.name}
                />
              ))}
            </div>
          </div>
          <textarea
            className="h-[130px] w-full p-3 placeholder:text-[#828282] placeholder:text-xs outline-none"
            placeholder="Input text"
          ></textarea>
          <button className="bg-[#A100FF21] absolute bottom-[10px] left-[10px] flex  items-center justify-between px-3 py-2 gap-1 rounded-lg">
            <Image
              src={"/icons/may-icon.svg"}
              width={12}
              height={12}
              alt="may icom"
            />
            <span className="text-[#8C00E3] text-xs ">Write with may</span>
          </button>
        </div>
        <div className="bg-[#CEE1FB] px-2 py-4 rounded-xs flex justify-center items-center gap-2 mt-3">
          <Image
            alt="info"
            src={"/icons/info-circle.svg"}
            width={24}
            height={24}
          />
          <span className="text-[#777795] text-xs">
            Provide a clear and concise description/information of your program.
            This can include objectives, goals, necessary resources, or any
            specific instructions..
          </span>
        </div>
        <button className="w-full mt-6 py-3 px-6 flex flex-col justify-center  items-center border border-black gap-2 rounded-lg">
          <div className="flex items-center font-medium">
            <GoPlus />
            <span>Add a new section</span>
          </div>
          <div className="text-[#777795] italic text-xs">
            (maximum number of sections to add is 3)
          </div>
        </button>
        <div className="flex items-center gap-2 mt-3">
          <input
            type="checkbox"
            className="w-4 h-4"
            // htmlFor="show-when-published"
          />
          <label className="text-sm" id="show-when-published">
            Show this when published
          </label>
        </div>

        <div className="mt-8 w-full grid gap-2">
          <button className="border-[#C2C2C2] border w-full bg-[#f1f1f1] px-4 py-3 flex justify-between items-center rounded-lg">
            <span className="font-medium">Program Information Text 1</span>
            <span className="flex  items-center gap-3">
              <FaChevronUp className="text-[#777795]" />
              <Image
                src={"/icons/more.svg"}
                width={24}
                height={24}
                alt="more-icon"
              />
            </span>
          </button>
          <button className="border-[#C2C2C2] border w-full bg-[#f1f1f1] px-4 py-3 flex justify-between items-center rounded-lg">
            <span className="font-medium">Program Information Text 2</span>
            <span className="flex  items-center gap-3">
              <FaChevronUp className="text-[#777795]" />
              <Image
                src={"/icons/more.svg"}
                width={24}
                height={24}
                alt="more-icon"
              />
            </span>
          </button>
        </div>
        <div className="flex  mt-12 justify-between w-full">
          <button className="flex justify-center basis-1/2 items-center py-4 px-10  font-bold">
            <span className="text-[#A4A5B8]">Go back</span>
          </button>
          <button className="bg-primary-400 py-4 px-10  font-bold flex items-center gap-3 rounded-lg text-white">
            <span>Save & Proceed</span>
            <FaCaretDown />
          </button>
        </div>
      </div>
      <div className="text-[#809FB8] text-xs">
        13th February 2024, 12:15 PM (Local time).
      </div>
    </div>
  );
}
