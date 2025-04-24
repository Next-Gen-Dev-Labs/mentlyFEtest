import WelcomeSection from "./_components/welcome-section";
import { ManageWidgets } from "./_components/manage-widgets";
import { WidgetsLayout } from "./_components/widgets-layout";

export default function Page() {
  return (
    <div className="flex flex-col min-h-full">
      <ManageWidgets className="ml-auto w-fit mb-5" />
      <WelcomeSection />
      <WidgetsLayout />
      {/* <UsersAnalytics data={dummyData.usersAnaylytics} /> */}
    </div>
  );
}
