import { Metadata } from "next";

import { ProgramInformation, MentorshipProgram } from "@/components";

export const metadata: Metadata = {
  title: "Mently Technologies",
  description:
    "Accelerate Career Growth and Knowledge Sharing Through Mentoring",
};

const ProgramLayout = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-12 gap-4 p-4">
      {/* Left Content (Program Info) */}
      <section className="w-full md:col-span-5 p-2 gap-6 bg-white dark:bg-[#1C1C2D]  shadow-md rounded-lg transition-colors duration-300">
        <ProgramInformation />
      </section>

      {/* Right Content (Mentorship Program) */}
      <section className="w-full md:col-span-7 p-2 bg-white dark:bg-[#1C1C2D] shadow-md rounded-lg">
        <MentorshipProgram />
      </section>
    </div>
  );
};

export default ProgramLayout;
