import { FaCaretDown } from "react-icons/fa";
// import icons from "./_constants/cmsIcons";
import { GoPlus } from "react-icons/go";
import InfoBox from "./InfoBox";
import ProgramButtons from "./ProgramButtons";
import ProgramCheckbox from "./ProgramCheckbox";
import ProgramHead from "./ProgramHead";
import ProgramInput from "./ProgramInput";
import ProgramTextArea from "./ProgramTextArea";

export default function ProgramLeftContent() {
  return (
    <div className="basis-[40%]">
      <ProgramHead />
      <h2 className="text-[32px] mt-5 font-bold">Program Information</h2>
      <div className="text-sm text-[#828282] mt-6 font-normal">
        Describe Section Title
      </div>
      <ProgramInput />
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
      <ProgramCheckbox />

      <ProgramButtons />
      <div className="flex  mt-12 justify-end lg:justify-between w-full">
        <button className="flex justify-center basis-1/3  xxl:basis-1/2 items-center py-4 px-4 xxl:px-6 2xl:px-10  font-bold">
          <span className="text-[#A4A5B8] max-w-[220px]">Go back</span>
        </button>
        <button className="bg-primary-400 py-4 max-w-[220px] px-4 xxl:px-6 2xl:px-8  font-bold flex items-center gap-3 rounded-lg text-white">
          <span>Save & Proceed</span>
          <FaCaretDown />
        </button>
      </div>
    </div>
  );
}
