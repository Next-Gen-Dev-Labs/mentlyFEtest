import Card from "@/components/ui/Card";
import Skeleton from "@/components/ui/Skeleton";

const GroupCallSkeleton = () => {
  return (
    <Card className="h-full relative">
      {/* Header */}
      <div className="flex px-4 py-2 justify-between items-center">
        <div className="flex items-center gap-2">
          <Skeleton className="w-6 h-6" /> 
          <Skeleton className="w-24 h-5" /> 
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="w-12 h-4" /> 
          <Skeleton className="w-4 h-4" /> 
        </div>
      </div>

      {/* Main Content */}
      <main className="absolute inset-x-0 bottom-0 top-[3rem] overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 p-4 min-w-min">
          {/* Render 3 skeleton cards */}
          {[1, 2, 3].map((index) => (
            <Card
              key={index}
              className="p-4 bg-[#F9F7FF] min-w-[350px] max-w-[350px]"
            >
              {/* Image placeholder */}
              <Skeleton className="w-full h-[200px]" />

              {/* Status Badge */}
              <div className="flex items-center gap-2 my-2">
                <Skeleton className="w-24 h-6 rounded-full" />
              </div>

              {/* Meeting Title */}
              <Skeleton className="w-full h-6 mb-2" />
              <div className="border-b border-[#D0D5DD] mb-2" />

              {/* Date and Time */}
              <div className="flex items-center gap-6 mb-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="w-4 h-4" /> 
                  <Skeleton className="w-20 h-4" /> 
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="w-4 h-4" /> 
                  <Skeleton className="w-20 h-4" /> 
                </div>
              </div>

              {/* Study Group and Mentors */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <Skeleton className="w-20 h-4 mb-2" /> 
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Skeleton className="w-6 h-6 rounded-full" /> 
                      <Skeleton className="w-24 h-4" /> 
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Skeleton className="w-16 h-4 mb-2" /> 
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <Skeleton
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between">
                <Skeleton className="w-32 h-10 rounded-md" /> 
                <Skeleton className="w-32 h-10 rounded-md" /> 
              </div>
            </Card>
          ))}
        </div>
      </main>
    </Card>
  );
};

export default GroupCallSkeleton;
