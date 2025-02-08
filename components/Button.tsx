import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  classname?: string;
  children: ReactNode;
}
export default function Button({classname, children}: Props) {
  return (
    <button className={cn(classname)}>
      {children}
    </button>
  )
}
