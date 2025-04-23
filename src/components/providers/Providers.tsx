'use client'

import { WidgetProvider } from "@/context/WidgetContext";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <WidgetProvider>
      {children}
    </WidgetProvider>
  );
} 