import Card from "@/components/ui/Card";
import Skeleton from "@/components/ui/Skeleton";

const ProgramsSkeleton = () => {
  return (
    <Card className="h-full relative">
      {/* Header */}
      <div className="rounded-lg">
        <div className="px-2 py-1">
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Skeleton className="w-6 h-6" />
                <Skeleton className="w-24 h-6" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="w-16 h-4" />
                <Skeleton className="w-6 h-6" />
              </div>
            </div>

            <div className="flex justify-end items-center gap-3 mx-6 mt-2">
              <Skeleton className="w-12 h-4" />
              <Skeleton className="w-24 h-8 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="absolute inset-x-0 bottom-0 top-[4rem] overflow-y-auto scrollbar-hide">
        <div className="space-y-4">
          {[1, 2].map((index) => (
            <Card key={index} className="p-3">
              <div className="space-y-2.5">
                <Skeleton className="w-full h-[160px] rounded-lg" />
                <Skeleton className="w-full h-4" />
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <Skeleton
                          key={i}
                          className="w-8 h-8 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                    <Skeleton className="w-24 h-4" />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-24 h-8 rounded-md" />
                    <Skeleton className="w-24 h-8 rounded-md" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </Card>
  );
};

export default ProgramsSkeleton; 