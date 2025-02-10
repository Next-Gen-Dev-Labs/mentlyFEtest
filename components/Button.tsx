import { cn } from "@/lib/utils";
import {  ReactNode } from "react";

type Props = {
  classname?: string;
  children: ReactNode;
  ariaLabel?: string;
}
export default function Button({classname, children, ariaLabel}: Props) {
  return (
    <button className={cn("focus-visible:outline-1",classname)} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
