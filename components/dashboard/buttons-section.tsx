import Image from "next/image";
import { Button } from "@/components/ui/button";

const ButtonsSection = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center w-full gap-3 ${className}`}>
      <Button
        variant="ghost"
        className="h-[51px] py-[16px] lg:px-[40px] w-full text-button"
      >
        Go Back
      </Button>
      <Button className="w-full h-[51px] py-[16px] lg:px-[40px] text-background">
        Save & Proceed{" "}
        <Image
          src="/icons/arrow-down-2.svg"
          alt="arrow down"
          width={16.36}
          height={9}
        />
      </Button>
    </div>
  );
};

export default ButtonsSection;
