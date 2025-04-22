import Programs from "@/components/widgets/Programs";
import Applications from "@/components/widgets/Applications";
import Mentors from "@/components/widgets/Mentors";
import RecentActivities from "@/components/widgets/RecentActivities";
import UsersChart from "@/components/widgets/Users";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Top Row - Program / Group Call Cards */}
      <div className="col-span-12 grid grid-cols-4 gap-4">
        <Programs />
      </div>

      {/* Applications (spans 8 columns) */}
      <div className="col-span-8">
        <Applications />
      </div>

      {/* Mentors + Recent Activities (stacked, each span 4 columns) */}
      <div className="col-span-4 flex flex-col gap-4">
        <Mentors />
        <RecentActivities />
      </div>

      {/* Users chart */}
      <div className="col-span-4">
        <UsersChart />
      </div>
    </div>
  );
}
