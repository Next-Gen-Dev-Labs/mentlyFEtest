import { Banner } from "./banner";
import { ManageWidgets } from "./manage-widgets";
import { WidgetLayout } from "./widget-layout";

export const Dashboard = () => {
  return (
    <div className="w-full flex flex-col items-start gap-5">
      <ManageWidgets />
      <Banner />
      <WidgetLayout />
    </div>
  );
};
