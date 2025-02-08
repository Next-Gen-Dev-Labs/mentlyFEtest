import { cn } from "@/lib/utils";
import { Switch } from "./ui/switch";

interface IClassicMode {
  isCollapsed: boolean;
}
export const ClassicMode = ({ isCollapsed }: IClassicMode) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between",
        isCollapsed ? "mx-auto mt-4" : "mt-7",
      )}
    >
      {!isCollapsed && (
        <p className="text-[11px] font-bold leading-[13px] text-white">
          Switch to Classic Mode
        </p>
      )}

      <Switch />
    </div>
  );
};
