import { SectionHeader } from "@/app/components/SectionHeader";
import { ActivityItem } from "@/app/components/ActivityItem";

export function ActivitiesSection() {
  return (
    <section
      aria-label="Activities Section"
      className="bg-white rounded-lg shadow-sm pb-4"
    >
      <SectionHeader title="Recent Activities" />

      <div className="p-4 space-y-4">
        <ActivityItem
          title="KYC Verification"
          description="45 new persons just signed up on Montly."
          time="25 minutes Ago"
          image="/profile1.png"
        />
        <div className="border-[0.5px] border-[#F1EFEF]"></div>
        <ActivityItem
          title="New User Sign Up!"
          description="45 new persons just signed up on Montly."
          time="25 minutes Ago"
          image="/profile1.png"
        />
        <div className="border-[0.5px] border-[#F1EFEF]"></div>
        <ActivityItem
          title="Withdrawal Request"
          description="Mardian requested a withdrawal."
          time="25 minutes Ago"
          image="/profile1.png"
        />
      </div>
    </section>
  );
}
