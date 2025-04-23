import { SectionHeader } from "@/app/components/SectionHeader";
import { MentorCard } from "@/app/components/MentorCard";
import { Button } from "./ui/Button";

export function MentorsSection() {
  return (
    <section
      aria-label="Mentors Section"
      className="bg-white rounded-lg shadow-sm"
    >
      <SectionHeader
        title="Mentors"
        showSeeAll={false}
        showPlus={true}
      ></SectionHeader>

      <div className="p-4 space-y-4">
        <MentorCard
          name="Maxwell Smith"
          role="Product Designer"
          image="/profile1.png"
        />
        <MentorCard
          name="Adegati Samuel"
          role="Product Designer"
          image="/profile1.png"
        />

        <Button className="text-xs h-[44px] text-[14px] font-semibold w-full rounded-[24px] px-2 bg-[#DDD6FB] text-[#6F01D0]">
          See All
        </Button>
      </div>
    </section>
  );
}
