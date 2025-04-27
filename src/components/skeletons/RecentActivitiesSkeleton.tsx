import Card from "@/components/ui/Card";
import Skeleton from "@/components/ui/Skeleton";

const RecentActivitiesSkeleton = () => {
  return (
    <Card className="h-full relative">
      {/* Header */}
      <div className="flex px-2 py-4 justify-between items-center">
        <div className="flex items-center gap-2">
          <Skeleton className="w-6 h-6" />
          <Skeleton className="w-32 h-6" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="w-16 h-4" />
          <Skeleton className="w-6 h-6" />
        </div>
      </div>

      {/* Main Content */}
      <main className="absolute inset-x-0 bottom-0 top-[3rem] overflow-y-auto scrollbar-hide">
        <div className="space-y-4 px-3">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="flex items-start border-b pb-2 border-[#F1EFEF] gap-2">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div className="space-y-1.5 flex-1">
                <Skeleton className="w-3/4 h-4" />
                <Skeleton className="w-full h-3" />
                <Skeleton className="w-20 h-3" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </Card>
  );
};

export default RecentActivitiesSkeleton; 