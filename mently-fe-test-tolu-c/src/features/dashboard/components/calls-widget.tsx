import { WidgetCard } from "~/_components/ui";
import { WidgetCallCard } from "~/_components/ui/widgets";

export const CallsWidget = () => {
  return (
    <WidgetCard title="Group Calls">
      <div className="w-full flex items-start overflow-x-scroll gap-2">
        <WidgetCallCard
          image={"/images/call-1.png"}
          status="ongoing"
          title="Weekly Meeting - Product Demo Review with Testers"
          date="Mon. Jul 30, 2024"
          time="9:00 - 11:00AM"
          studyGroup="UX Strategy  Study group"
        />
        <WidgetCallCard
          image={"/images/call-2.png"}
          status="upcoming"
          title="Weekly Meeting - Product Demo Review with Testers"
          date="Mon. Jul 30, 2024"
          time="9:00 - 11:00AM"
          studyGroup="UX Strategy  Study group"
        />
        <WidgetCallCard
          image={"/images/call-3.png"}
          status="ongoing"
          title="Weekly Meeting - Product Demo Review with Testers"
          date="Mon. Jul 30, 2024"
          time="9:00 - 11:00AM"
          studyGroup="UX Strategy  Study group"
        />
      </div>
    </WidgetCard>
  );
};
