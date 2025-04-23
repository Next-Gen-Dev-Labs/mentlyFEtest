import { SectionHeader } from "@/app/components/SectionHeader";
import { ApplicationCard } from "@/app/components/ApplicationCard";

export function ApplicationsSection() {
  return (
    <section
      aria-label="Applications Section"
      className="bg-white rounded-lg shadow-sm"
    >
      <SectionHeader title="Applications" />

      <div className="p-4">
        <div className="text-[10px] text-[#7D8DA6] mb-2 ml-6">Mentors</div>

        <div className="space-y-4 mb-6">
          <ApplicationCard
            name="Maxwell Smith"
            email="maxwellsmith@gmail.com"
            role="Product Designer"
            location="Lagos, Nigeria"
            timezone="GMT+1"
            experience="4 years experience"
            image="/profile1.png"
          />
        </div>

        <div className="text-[10px] text-[#7D8DA6] mb-2 ml-6">Students</div>

        <div className="space-y-4">
          <ApplicationCard
            name="Adegati Samuel"
            email="maxwellsmith@gmail.com"
            image="/profile1.png"
          />

          <ApplicationCard
            name="Maxwell Smith"
            email="maxwellsmith@gmail.com"
            image="/profile1.png"
          />

          <ApplicationCard
            name="Adegati Samuel"
            email="maxwellsmith@gmail.com"
            image="/profile1.png"
          />

          <ApplicationCard
            name="Maxwell Smith"
            email="maxwellsmith@gmail.com"
            image="/profile1.png"
          />
        </div>
      </div>
    </section>
  );
}
