"use client";

import { SectionHeader } from "@/app/components/SectionHeader";
import { ProgramCard } from "@/app/components/ProgramCard";

export function ProgramsSection() {
  return (
    <section
      aria-label="Program Section"
      className="bg-white rounded-lg shadow-sm"
    >
      <SectionHeader title="Programs" />

      <div className="px-4 pb-2 flex items-center justify-end gap-2">
        <label
          htmlFor="filter"
          className="text-[12px] font-medium text-[#918C9C]"
        >
          Filter
        </label>
        <select
          name="filter"
          id="filter"
          className="text-[#595564] text-[12px] w-[78px] h-[23px] rounded-[4px] border border-[#E1E7EC]"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div className="p-4 space-y-4">
        <ProgramCard
          title="Fundamentals of User Interface & Experience"
          description="This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach"
          mentors={["/profile1.png"]}
          program="bootcamp"
        />

        <ProgramCard
          title="Colour Hack Practical Group Call"
          description="This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach"
          host="Faith Okolo"
          hostImage="/profile1.png"
          program="group call"
        />

        <ProgramCard
          title="Colour Hack Practical Group Call"
          description="This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach"
          host="Self"
          hostImage="/profile1.png"
          program="group call"
        />
      </div>
    </section>
  );
}
