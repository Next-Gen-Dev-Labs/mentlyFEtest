import { cn } from "@/lib/utils";

interface ICurrentDate {
  date: string;
  className?: string;
}

export const CurrentDate = ({ date, className }: ICurrentDate) => {
  return (
    <p className={cn(className, "text-sm text-[#809FB8]")}>
      {date} <span className="sr-only"> current data</span>
    </p>
  );
};
