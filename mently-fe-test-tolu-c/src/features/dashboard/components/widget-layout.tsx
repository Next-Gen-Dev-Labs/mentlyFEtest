import { MentorWidget } from "./mentor-widget";
import { CallsWidget } from "./calls-widget";
import { ActivitiesWidget } from "./activities-widget";
import { ProgramsWidget } from "./programs-widget";
import { UsersWidget } from "./users-widget";
import { ApplicationsWidget } from "./applications-widget";

export const WidgetLayout = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-x-2.5 gap-y-4.5">
      <div className="lg:col-span-4 flex flex-col gap-4.5 items-start w-full">
        <ProgramsWidget />
        <UsersWidget />
      </div>
      <div className="lg:col-span-8 flex flex-col gap-4.5 items-start">
        <CallsWidget />
        <div className="w-full grid grid-cols-1 lg:grid-cols-9 gap-2.5">
          <div className="col-span-5">
            <ApplicationsWidget />
          </div>
          <div className="col-span-4 flex flex-col items-start gap-y-4">
            <MentorWidget />
            <ActivitiesWidget />
          </div>
        </div>
      </div>
    </div>
  );
};
