import { RiShareForwardLine } from "react-icons/ri";

export const ShareButton = () => (
  <button
    className="flex gap-2 items-center px-3 py-2 rounded-2xl bg-[#1F0954] 
                     dark:bg-[#24243B] text-white hover:opacity-90 transition-opacity"
  >
    <RiShareForwardLine className="w-5 h-5" />
    <span>Share</span>
  </button>
);
