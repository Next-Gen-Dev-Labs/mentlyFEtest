import { Info } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

const ProgramInfo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex flex-col lg:gap-y-3 ${className}`}>
      <h2 className="font-chivo text-primary text-[24px] lg:text-[32px] font-bold leading-9">
        Program Information
      </h2>
      <p className="font-chivo text-text font-normal text-sm">
        Describe Section Title
      </p>
      <div id="step-1" className="flex flex-col gap-y-2 lg:gap-y-3">
        <Input
          type="text"
          placeholder="Describe Section Title e.g What you stand to learn"
          className="placeholder:font-chivo placeholder:font-normal placeholder:text-sm placeholder:text-text"
          prepend={
            <div className="flex space-x-3">
              <Image src="/icons/t.svg" alt="letter t" width={32} height={32} />
              <Image
                src="/icons/arrow-down.svg"
                alt="arrow down"
                width={16.36}
                height={9}
              />
            </div>
          }
        />
        <div className="w-full flex item-center gap-2 lg:h-[64px] p-4 bg-muted-foreground rounded-[5px]">
          <Info data-testid="info-icon" className="text-info size-5" />
          <p className="font-chivo font-normal text-xs text-muted">
            Provide your preferred title for this section i.e What’s in this
            Program for <br /> you?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramInfo;
