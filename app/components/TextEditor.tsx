import { Fragment } from "react";
import DocIcon from "../assets/icons/DocIcon";
import InputDropdownIcon from "../assets/icons/InputDropdownIcon";
import { returnTextEditorIcons } from "../utils/helpers";
import WriteWithMayIcon from "../assets/icons/WriteWithMayIcon";
import Button from "./Button";

const TextEditor = () => {
  return (
    <label className="flex flex-col lg:gap-4 gap-1 border border-midnightPurple rounded-md overflow-hidden w-full max-h-[168px]">
      <div className="flex items-center">
        <div className="flex items-center gap-6 w-[22%] px-2 h-[34px] border-r border-b border-midnightPurple rounded-[4px]">
          <DocIcon /> <InputDropdownIcon />
        </div>
        <div className="flex items-center w-full justify-between py-1.5 px-2 border-b rounded-[4px] border-black h-[34px]">
          {returnTextEditorIcons(() => null).map((item, index) => (
            <Fragment key={index}>{item}</Fragment>
          ))}
        </div>
      </div>
      <textarea
        placeholder="Input text"
        name=""
        id=""
        cols={2}
        rows={5}
        className="focus:outline-none focus:border-transparent pl-3 resize-none mx-2 text-midnightPurple"
      />
      <Button
        purpleBg
        purpleText
        extraClasses="gap-1 mt-auto ml-3 mb-3 text-[10px] font-medium"
      >
        <WriteWithMayIcon /> Write with May
      </Button>
    </label>
  );
};

export default TextEditor;
