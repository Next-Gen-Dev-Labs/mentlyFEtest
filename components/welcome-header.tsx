
import { Button } from "@/components/ui/button";

export default function WelcomeHeader() {
  return (
    <div className="bg-[#6F01D0] rounded-[4px] shadow-sm overflow-hidden lg:h-[51px]">
      <div className="flex items-center justify-between sm:items-center px-4 py-0 sm:p-6 h-full">
        <div className="flex gap-6 items-center lg:flex-row flex-col w-full">
          <h1 className="text-xl sm:text-2xl font-semibold text-white">
            Welcome Aboard, Blessing <span className="inline-block">👋</span>
          </h1>
          <p className="text-[#BDBDBD] text-base font-semibold">
            We're thrilled to have you join Techrity Team!
          </p>
        </div>
        <div className="flex items-center gap-4 self-end sm:self-auto">
          <Button
            variant="default"
            className="bg-white hover:bg-purple-800 text-[#1F0954] font-bold"
          >
            Update Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
