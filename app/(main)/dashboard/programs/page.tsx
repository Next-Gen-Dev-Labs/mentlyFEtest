import { MentorshipSection } from "@/components/mentorship-section";
import ProgramInformation from "@/components/program/programe-section";

export const metadata = {
  title: "Programs",
};

export default function page() {
  return (
    <div className="grid grid-cols-1 gap-10 px-3 py-5 md:p-5 lg:grid-cols-7">
      <ProgramInformation />

      <MentorshipSection />
    </div>
  );
}
