import { formatDate, items, programItem, textItems } from "@/lib/utils";
import Image from "next/image";

const RightPanel = ({ className }: { className?: string }) => {
  return (
    <div
      className={`w-full flex flex-col gap-y-8 bg-background dark:bg-foreground ${className}`}
    >
      <p className="text-accent font-chivo font-normal text-sm lg:text-base self-end">
        {formatDate(new Date())}{" "}
        <span className="text-[10px] lg:text-xs">(Local time).</span>
      </p>
      <div className="p-3 space-y-6 border border-border rounded-[4px]">
        <h2 className="font-chivo text-primary text-[24px] lg:text-[32px] font-bold leading-9">
          Mentorship Program
        </h2>
        <Image
          src="/images/banner.png"
          width={668}
          height={206}
          alt="banner"
          className="w-full"
        />
        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 lg:gap-8 py-4 lg:py-12">
          <p className="text-text dark:text-background flex-1 font-chivo font-normal text-sm lg:text-base text-justify">
            UI/UX Design check ins with faith is a way for beginners in UI/UX
            Design to get started about the fundamentals and how they can build
            a Design Career, share, document their progress on a weekly basis.
          </p>
          <div className="w-full bg-background dark:bg-foreground flex-1 shadow-md p-4 flex flex-col gap-5">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-5">
                <Image
                  src={item.image}
                  alt={item.text}
                  width={24}
                  height={24}
                />
                <span className="text-sm font-bold text-muted dark:text-background">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-card-foreground border border-secondary-foreground rounded-[16px] space-y-6 p-[16px]">
          <p className="font-chivo text-primary font-semibold text-xl">
            Program Information Text
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8">
            {programItem.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="p-2 rounded-full inline-flex items-center justify-center bg-secondary-foreground">
                  <Image
                    src={item.image}
                    alt={item.text}
                    width={16.38}
                    height={14}
                  />
                </div>
                <p className="font-chivo text-primary font-semibold text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-card-foreground border border-secondary-foreground rounded-[16px] space-y-6 p-[16px]">
          <p className="font-chivo text-primary font-semibold text-xl">
            Program Information Text 2
          </p>
          <div className="space-y-2">
            {textItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <p className="text-sm text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
