import type { VariantProps } from "class-variance-authority";
import { badgeVariants } from "@/components/ui/badge";

export type WidgetOption = {
  label: string;
  action(): void;
};

export type TUserThumb = {
  name: string;
  role?: string;
  image?: string;
};

export type TProgramTag = {
  name: string;
  variant?: VariantProps<typeof badgeVariants>["variant"];
};
