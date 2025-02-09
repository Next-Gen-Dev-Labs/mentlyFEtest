import { BriefcaseIcon } from "@/components/icons/BriefcaseIcon";
import { CalendarIcon } from "@/components/icons/CalendarIcon";
import { CertIcon } from "@/components/icons/CertIcon";
import { LocationIcon } from "@/components/icons/LocationIcon";
import { MessageIcon } from "@/components/icons/MessageIcon";
import { NotesIcon } from "@/components/icons/Notes";
import { PeopleIcon } from "@/components/icons/PeopleIcon";
import Image from "next/image";

export function Preview() {
  return (
    <section>
      <div className="flex justify-end">
        <p className="text-sm text-[#809FB8]">13th February 2024, 12:15 PM (Local time).</p>
      </div>
      <div className="p-4 mt-8 shadow h-full rounded-xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-black">Mentorship Program</h1>
          <div className="relative w-full h-52 rounded-lg overflow-hidden">
            <Image src="/banner.png" alt="Banner Image" fill/>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          <p className="text-base text-muted">
            UI/UX Design check ins with faith is a way for beginners in UI/UX Design to get started
            about the fundamentals and how they can build a Design Career, share, document their
            progress on a weekly basis.
          </p>
          <ul className="shadow rounded-2xl p-8 space-y-5 text-sm text-muted">
            <li className="flex justify-between">
              <BriefcaseIcon /> Mentorship Program
            </li>
            <li className="flex justify-between">
              <CalendarIcon /> 21/4/2024-21/5/2024
            </li>
            <li className="flex justify-between">
              <LocationIcon /> In Person
            </li>
          </ul>
        </div>
        <div className="p-4 rounded-xl border border-secondary bg-[#FFFAF2] space-y-8">
          <h3 className="text-lg font-semibold">Program Information Text</h3>
          <ul className="grid grid-cols-2 gap-y-4 md:gap-y-8">
            {[
              { icon: CertIcon },
              { icon: BriefcaseIcon },
              { icon: PeopleIcon },
              { icon: NotesIcon },
              { icon: CertIcon },
              { icon: MessageIcon },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className="bg-secondary-background p-2 md:p-4 rounded-full">
                  <item.icon className="size-5" />
                </span>
                Content
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 rounded-xl border border-secondary bg-[#FFFAF2] space-y-8">
          <h3 className="text-lg font-semibold">Program Information Text 2</h3>
          <ul className="text-base font-semibold text-[#595564] list-disc list-inside">
            {Array.from({ length: 6 }).map((_, i) => (
              <li key={i}>Content</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
