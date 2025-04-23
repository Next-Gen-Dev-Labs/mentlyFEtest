import { Button } from "@/app/components/ui/Button";

interface WelcomeBannerProps {
  name: string;
}

export function WelcomeBanner({ name }: WelcomeBannerProps) {
  return (
    <div className="bg-[#6F01D0] text-white flex flex-col lg:flex-row py-6 items-center gap-4 justify-between px-6 mt-2 rounded-[4px] min-h-[51px]">
      <div className="flex items-center gap-2">
        <h1 className="text-[26px] font-semibold">Welcome Aboard, {name} 👋</h1>
      </div>
      <p className="text-[20px] text-[#BDBDBD]">
        We're thrilled to have you join Techrity Team!
      </p>
      <div className="flex items-center gap-4">
        <Button className="bg-white text-[#1F0954] font-bold hover:bg-gray-100 rounded-[8px] h-[39px] w-[160px]">
          Update Profile
        </Button>
      </div>
    </div>
  );
}
