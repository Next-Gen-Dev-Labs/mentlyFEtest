import {
  Document,
  Gallery,
  Link2,
  Math,
  QuoteDown,
  QuoteUp,
  Smallcaps,
  Task,
  Text,
  TextalignCenter,
  TextalignJustifycenter,
  TextalignLeft,
  TextalignRight,
  TextBold,
  TextItalic,
  TextUnderline,
} from "iconsax-react";
import { ArrowDropDown } from "./icons/arrowdown";
import Pen from "./icons/pen";

const textAreaIcons = [
  Text,
  TextBold,
  TextItalic,
  TextUnderline,
  Smallcaps,
  TextalignLeft,
  TextalignRight,
  TextalignCenter,
  TextalignJustifycenter,
  Task,
  QuoteUp,
  QuoteDown,
  Math,
  Gallery,
  Link2,
];

export default function TextArea() {
  return (
    <div className="border border-mently-blue/50 rounded-sm h-[168px] relative overflow-hidden min-w-[347px]">
      <div className="flex">
        <div className="min-w-[90px] w-[3%] border shadow-sm border-mently-blue/40 h-10 rounded-b-sm flex-center gap-3">
          <Document size={20} variant="Linear" className="stroke-mently-blue" />
          <ArrowDropDown className="fill-mently-blue w-3" />
        </div>
        <div className="border shadow-sm border-mently-blue/40 rounded-b-sm flex items-center justify-around gap-1 px-2 w-full min-w-fit">
          {textAreaIcons.map((Icon, index) => (
            <button key={index} className="appearance-none" aria-label="Text edit tool">
              <Icon size={12} variant="Linear" className="stroke-gray-500 transition-colors hover:stroke-mently-blue hover:font-medium ease-in-out" />
            </button>
          ))}
        </div>
      </div>
      <textarea
        name="program-description"
        id="program-description"
        aria-label="program-description"
        className="focus-visible:border resize-none w-full border-none outline-none p-2 text-[13.6px] h-[85px] bg-transparent"
        placeholder="Input Text"
        
      ></textarea>

      <button
        type="button"
        className="text-mently-purple font-medium text-xs bg-mently-purple/10 rounded-lg w-[136px] py-2 flex items-center gap-1 h-8 p-2 absolute bottom-2 left-2  transition-transform hover:scale-105 ease-in-out"
        aria-label="Use AI to write description"
      >
        <Pen />
        <span>Write with May</span>
      </button>
    </div>
  );
}
