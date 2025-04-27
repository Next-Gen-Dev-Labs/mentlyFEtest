import Card from "@/components/ui/Card";
import Skeleton from "@/components/ui/Skeleton";

const MentorsSkeleton = () => {
  return (
    <Card className="h-full relative">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex gap-2">
          <Skeleton className="w-6 h-6" />
          <Skeleton className="w-24 h-6" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="w-6 h-6" />
          <Skeleton className="w-6 h-6" />
        </div>
      </div>

      {/* Main Content */}
      <main className="absolute inset-x-0 bottom-0 top-[3rem] overflow-y-auto scrollbar-hide px-4">
        <div className="space-y-4 mb-4">
          {[1, 2].map((index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Skeleton className="w-10 h-10 rounded-full" />
                <div>
                  <Skeleton className="w-32 h-4 mb-2" />
                  <Skeleton className="w-24 h-3" />
                </div>
              </div>
              <Skeleton className="w-24 h-8 rounded-full" />
            </div>
          ))}
        </div>

        <Skeleton className="w-full h-12 rounded-3xl" />
      </main>
    </Card>
  );
};

export default MentorsSkeleton; 