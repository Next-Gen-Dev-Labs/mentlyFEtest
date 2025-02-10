import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { Button } from "./button";

interface IGoBack {
  className?: string;
  hiddenIcon?: boolean;
  text: string;
}

export const GoBack = ({ className, hiddenIcon, text }: IGoBack) => {
  return (
    <Button
      variant="ghost"
      className={cn("p-0 font-normal hover:bg-gray-100 md:px-2", className)}
    >
      {!hiddenIcon && <ChevronLeft className="mr-2 h-4 w-4" />}
      {text}
    </Button>
  );
};
