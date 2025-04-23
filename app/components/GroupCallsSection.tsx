import { SectionHeader } from "@/app/components/SectionHeader";
import { MeetingCard } from "@/app/components/MeetingCard";

export function GroupCallsSection() {
  return (
    <section aria-label="Group Calls Section" className="bg-white rounded-lg">
      <SectionHeader title="Group Calls" />

      <div className="p-4 flex gap-4 overflow-x-auto">
        <MeetingCard
          title="Weekly Meeting - Product Demo Review with Testers"
          date="Mon, Jul 30, 2024"
          time="9:00 - 11:00AM"
          status="ongoing"
          group="UX Strategy Study group"
          mentors={["/profile1.png"]}
          image="/image2.jpg"
          position="object-center"
        />

        <MeetingCard
          title="Weekly Meeting - Product Demo Review with Testers"
          date="Mon, Jul 30, 2024"
          time="9:00 - 11:00AM"
          status="upcoming"
          group="UX Strategy Study group"
          mentors={["/profile1.png"]}
          image="/image3.jpg"
          position="object-[0px_15%]"
        />

        <MeetingCard
          title="Weekly Meeting - Product Demo Review with Testers"
          date="Mon, Jul 30, 2024"
          time="9:00 - 11:00AM"
          status="ongoing"
          group="UX Strategy Study group"
          mentors={["/profile1.png"]}
          image="/image4.jpg"
          position="object-[0px_15%]"
        />
      </div>
    </section>
  );
}
