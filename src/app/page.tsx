//import Image from "next/image";

import MentorshipProgram from "@/components/Mentorship";
import ProgramInformation from "@/components/ProgramInformation";

export default function Home() {
  return (
    <div className=" flex flex-col-reverse md:flex-row gap-0 md:gap-10 2xl:gap-20">
      <ProgramInformation />
      <MentorshipProgram />
    </div>
  );
}
