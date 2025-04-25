import { useState } from "react";
import { BiSquareRounded } from "react-icons/bi";
import { PiCheckSquareFill } from "react-icons/pi";

export default function Checkbox () {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsChecked(!isChecked)}
        className="text-xl cursor-pointer"
      >
        {isChecked ? (
          <PiCheckSquareFill className="h-[20px] w-[20px] text-[#07c500]" />
        ) : (
          <BiSquareRounded className="h-[20px] w-[20px] text-neutral-200" />
        )}
      </div>
    </>
  );
};

