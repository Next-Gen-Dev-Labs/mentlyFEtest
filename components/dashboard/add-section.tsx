import { Plus } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const AddSection = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="w-full flex flex-col item-center justify-center border border-primary h-[64px] p-4 rounded-lg">
        <div className="flex items-center justify-center gap-2">
          <Plus className="text-popover size-4" />
          <p className="font-chivo font-medium text-base text-popover">
            Add new section
          </p>
        </div>
        <span className="font-chivo font-medium italic text-xs text-center">
          (maximum number of sections to add is 3)
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox />
        <p className="font-chivo font-normal text-sm text-popover-foreground">
          Show this section when Published
        </p>
      </div>
    </div>
  );
};

export default AddSection;
