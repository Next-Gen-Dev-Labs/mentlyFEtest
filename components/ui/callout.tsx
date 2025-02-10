import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import type React from "react";
import { Card } from "./custom-card";

interface CalloutProps {
  children: React.ReactNode;
  className?: string;
}

export function Callout({ children, className }: CalloutProps) {
  return (
    <Card
      className={cn(
        `flex flex-row items-center gap-3 rounded bg-[#CEE1FB] p-4 text-[#086BED]`,
        className,
      )}
    >
      <Info className="h-7 w-7 shrink-0" />
      <p className="text-sm text-gray-500">{children}</p>
    </Card>
  );
}
