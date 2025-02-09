import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";
// import icons from "./_constants/cmsIcons";
import { FaChevronUp } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import ProgramHead from "./ProgramHead";
import ProgramTextArea from "./ProgramTextArea";
import InfoBox from "./InfoBox";

export default function ProgramLeftContent() {
  return (
    <div className="basis-[40%]">
      <ProgramHead />
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
      <InfoBox>
        Provide your prefered title for this section i.e What’s in this Program
        for you?
      </InfoBox>

      <ProgramTextArea />

      <InfoBox>
        Provide a clear and concise description/information of your program.
        This can include objectives, goals, necessary resources, or any specific
        instructions..
      </InfoBox>
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
      <div className="flex  mt-12 justify-end lg:justify-between w-full">
        <button className="flex justify-center basis-1/3  xxl:basis-1/2 items-center py-4 px-4 xxl:px-6 2xl:px-10  font-bold">
          <span className="text-[#A4A5B8] max-w-[220px]">Go back</span>
        </button>
        <button className="bg-primary-400 py-4 max-w-[220px] px-4 xxl:px-6 2xl:px-10  font-bold flex items-center gap-3 rounded-lg text-white">
          <span>Save & Proceed</span>
          <FaCaretDown />
        </button>
      </div>
    </div>
  );
}
