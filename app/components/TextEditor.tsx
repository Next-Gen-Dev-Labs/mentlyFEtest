import { Fragment } from "react";
import DocIcon from "../assets/icons/DocIcon";
import InputDropdownIcon from "../assets/icons/InputDropdownIcon";
import { returnTextEditorIcons } from "../utils/helpers";
import WriteWithMayIcon from "../assets/icons/WriteWithMayIcon";

const TextEditor = () => {
  return (
    <label className="flex flex-col gap-4 border border-midnightPurple rounded-md overflow-hidden w-full aspect-[67/24]">
      <div className="flex items-center">
        <div className="flex items-center gap-6 lg:px-8 px-4 h-[34px] border-r border-b border-midnightPurple rounded-[4px]">
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
        className="focus:outline-none focus:border-transparent pl-3 resize-none h-4/5 mx-2 text-midnightPurple"
      />
      <button className="flex items-center bg-lavendarMist w-fit rounded-lg p-2 gap-1 mt-auto ml-3 mb-3">
        <WriteWithMayIcon />
        <span className="text-royalPurple text-[10px] font-medium">
          Write with May
        </span>
      </button>
    </label>
  );
};

export default TextEditor;
