import { Button } from "@/components/ui/button";
import { GoBack } from "../ui/go-back";

export function ProgramFooter() {
  return (
    <div className="mt-8 flex items-center justify-between">
      <GoBack text="Go Back" className="text-gray-900 hover:text-gray-900/90" />
      <Button className="bg-[#1D1355] px-6 text-white hover:bg-[#1D1355]/90">
        Save & Proceed
      </Button>
    </div>
  );
}
