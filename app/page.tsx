import ProgramLeftContent from "./_components/ProgramLeftContent";
import ProgramRightContent from "./_components/ProgramRightContent";
// import { TfiMore } from "react-icons/tfi";
// import { FaCaretDown } from "react-icons/fa";

export default function Page() {
  return (
    <div className="flex justify-between lg:flex-row flex-col gap-6 xl:gap-12 px-4 xs:px-8 py-6">
      <ProgramLeftContent />
      <ProgramRightContent />
    </div>
  );
}
