"use client";
import { GroupCalls } from "@/db/dataBase";
import GroupCalls_widget from "@/components/ui/reusable_widgets/groupCalls_widget";

const page = () => {
  return (
    <div className="container mx-auto flex justify-center items-center md:px-6 px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <span className="space-y-5" key={index}>
            <GroupCalls_widget GroupCalls={GroupCalls} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default page;
