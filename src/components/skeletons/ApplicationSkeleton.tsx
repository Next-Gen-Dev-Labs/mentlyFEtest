import Card from "@/components/ui/Card";
import Skeleton from "@/components/ui/Skeleton";

const ApplicationsSkeleton = () => {
  return (
    <Card className="h-full relative">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <Skeleton className="w-6 h-6" /> 
          <Skeleton className="w-24 h-5" /> 
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="w-12 h-4" /> 
          <Skeleton className="w-4 h-4" /> 
        </div>
      </div>

      <main className="absolute inset-x-0 bottom-0 top-[3rem] overflow-y-auto scrollbar-hide p-4">
        {/* Mentors Section */}
        <div className="mb-4">
          <Skeleton className="w-16 h-4" /> 
        </div>
        <div className="flex flex-col gap-4">
          {/* Mentor Items - Render 3 skeleton items */}
          {[1, 2, 3].map((index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex space-x-10 items-center justify-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="w-4 h-4" /> 
                  <Skeleton className="w-10 h-10 rounded-full" /> 
                  <div>
                    <Skeleton className="w-32 h-4 mb-2" /> 
                    <Skeleton className="w-40 h-3" /> 
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="w-[90px] h-8" /> 
                  <Skeleton className="w-[90px] h-8" /> 
                </div>
              </div>

              {/* Tags */}
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4].map((tagIndex) => (
                  <Skeleton key={tagIndex} className="w-20 h-6" />
                ))}
              </div>
              <div className="border-b border-[#DBDBDB] mb-4"></div>
            </div>
          ))}
        </div>

        {/* Students Section */}
        <div className="mt-6 mb-4">
          <Skeleton className="w-16 h-4" /> 
        </div>
        <div className="flex flex-col gap-4">
          {/* Student Items - Render 3 skeleton items */}
          {[1, 2, 3].map((index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex space-x-10 items-center w-full">
                <div className="flex items-center gap-3 flex-1">
                  <Skeleton className="w-4 h-4" /> 
                  <Skeleton className="w-10 h-10 rounded-full" /> 
                  <div>
                    <Skeleton className="w-32 h-4 mb-2" /> 
                    <Skeleton className="w-40 h-3" /> 
                  </div>
                </div>
                <div className="flex items-center gap-2 min-w-[200px] justify-end">
                  <Skeleton className="w-[90px] h-8" /> 
                  <Skeleton className="w-[90px] h-8" /> 
                </div>
              </div>
              <div className="border-b border-[#DBDBDB] w-full"></div>
            </div>
          ))}
        </div>
      </main>
    </Card>
  );
};

export default ApplicationsSkeleton;