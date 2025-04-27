import Card from "@/components/ui/Card";
import Skeleton from "@/components/ui/Skeleton";

const UsersSkeleton = () => {
  return (
    <Card className="h-full relative">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <Skeleton className="w-24 h-6" />
        <div className="flex items-center gap-2">
          <Skeleton className="w-24 h-8 rounded-md" />
          <Skeleton className="w-6 h-6" />
        </div>
      </div>

      {/* Main Content */}
      <main className="absolute inset-x-0 bottom-0 top-[3rem] -left-5 overflow-y-auto scrollbar-hide p-1">
        <div className="flex items-center justify-center space-x-3">
          {/* Chart Placeholder */}
          <div className="relative w-[200px] h-[200px]">
            <Skeleton className="w-full h-full rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <Skeleton className="w-16 h-8 mb-1" />
              <Skeleton className="w-12 h-4" />
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="flex items-center gap-3">
                <Skeleton className="w-2 h-2 rounded-full" />
                <Skeleton className="w-16 h-4" />
                <Skeleton className="w-8 h-4" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </Card>
  );
};

export default UsersSkeleton; 