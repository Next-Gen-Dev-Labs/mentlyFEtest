import React, { ComponentProps } from "react";
import { Button } from "../../components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

type WidgetContainerProps = ComponentProps<"section">;

export const WidgetContainer = ({
  className,
  ...props
}: WidgetContainerProps) => {
  return (
    <section
      className={cn(
        "bg-background overflow-scroll shadow rounded-[10px]",
        className
      )}
      {...props}
    />
  );
};

interface WidgetContainerHeaderProps extends ComponentProps<"div"> {
  widgetTitle: string;
  description?: string;
  actions?: React.ReactNode;
}

export const WidgetContainerHeader = ({
  widgetTitle,
  actions,
}: WidgetContainerHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <Button size="icon" variant="ghost">
          <Menu />
        </Button>
        <h2 className="text-card-foreground-light font-bold">{widgetTitle}</h2>
      </div>

      {actions}
    </div>
  );
};

export const WidgetContainerContent = ({ ...props }: WidgetContainerProps) => {
  return <section className="bg-background" {...props}></section>;
};
