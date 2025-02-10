"use client";
import CopyIcon from "@/app/assets/icons/CopyIcon";
import SettingsIcon from "@/app/assets/icons/SettingsIcon";
import ShareIcon from "@/app/assets/icons/ShareIcon";
import HoverDropdown from "../HoverDropdown";
import InputDropdownIcon from "@/app/assets/icons/InputDropdownIcon";
import TBoxIcon from "@/app/assets/icons/TBoxIcon";
import InputHint from "../InputHint";
import TextEditor from "../TextEditor";
import ProgramInfoTextDisplay from "../ProgramInfoTextDisplay";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "../Button";

const ProgramInfoEditor = () => {
  const { push } = useRouter();
  return (
    <div className="bg-pureSnow flex flex-col gap-6 lg:w-[43.4%] w-full lg:px-7 px-3.5 py-6">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-6 font-semibold text-honeyGold">
          <span>{"<"}</span>
          <Link href="/" className="text-nowrap">
            Back To Home
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <HoverDropdown icon={<SettingsIcon />} list={["Delete", "Clear"]} />
          <CopyIcon />
          <Button
            whiteText
            darkBlueBg
            borderRadius="rounded-2xl"
            extraClasses="gap-2 text-sm font-bold"
          >
            <ShareIcon /> Share
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="font-bold text-gray-900 text-32px">
            Program Information
          </h1>
          <span className="text-gray-500">Describe Section Title</span>
        </div>
        <div className="flex flex-col gap-3">
          <label className="flex items-center relative w-full">
            <div className="flex items-center absolute gap-3 left-4">
              <TBoxIcon />
              <InputDropdownIcon />
            </div>
            <input
              type="text"
              className="border rounded-md border-midnightPurple h-16 w-full focus:outline-none pl-20 placeholder:text-sm"
              placeholder="Describe Section Title e.g What you stand to learn"
            />
          </label>
          <InputHint message="Provide your prefered title for this section i.e What’s in this Program for you?" />
        </div>
        <div className="flex flex-col gap-3">
          <TextEditor />
          <InputHint message="Provide a clear and concise description/information of your program. This can include objectives, goals, necessary resources, or any specific instructions.." />
        </div>
        <div className="flex flex-col gap-3">
          <Button darkBorder verticalAlign fullWidth extraClasses="font-medium">
            <span>+ Add new section</span>
            <span className="font-medium text-xs text-slateLavendar">
              (maximum number of sections to add is 3)
            </span>
          </Button>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" />
            <label className="text-gray-800">
              Show this section when Published
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <ProgramInfoTextDisplay text="Program Information Text 1" />
        <ProgramInfoTextDisplay text="Program Information Text 2" />
      </div>
      <div className="flex items-center w-full justify-between">
        <Button
          greyText
          width="w-1/2"
          padding="py-4"
          extraClasses="font-bold"
          onClick={() => push("/")}
        >
          Go Back
        </Button>

        <Button
          darkBlueBg
          whiteText
          width="w-1/2"
          extraClasses="gap-3"
          padding="py-4"
        >
          Save & Proceed <InputDropdownIcon fill="#fff" />
        </Button>
      </div>
    </div>
  );
};

export default ProgramInfoEditor;
