'use client'

import { useWidget } from "@/context/WidgetContext";
import ManageWidgets from "@/components/widgets/ManageWidgets";

export default function WidgetWrapper() {
  const { isWidgetVisible } = useWidget();

  return isWidgetVisible ? <ManageWidgets /> : null;
} 