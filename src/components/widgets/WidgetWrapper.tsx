'use client'

import { useWidget } from "@/context/WidgetContext";
import ManageWidgets from "./ManageWidgets";

export default function WidgetWrapper() {
  const { isWidgetVisible } = useWidget();

  return isWidgetVisible ? <ManageWidgets /> : null;
} 