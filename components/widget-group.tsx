"use client";
import WidgetPicker from "./widget-picker";
import { useState } from "react";

interface Widget {
  name: string;
  isSelected: boolean;
}

export default function WidgetGroup() {
  const initialWidgets: Widget[] = [
    { name: "Projects", isSelected: true },
    { name: "Group Calls", isSelected: true },
    { name: "Mentors", isSelected: true },
    { name: "Recent Activities", isSelected: true },
    { name: "Application", isSelected: true },
    { name: "Earnings", isSelected: false },
    { name: "Forum", isSelected: false },
    { name: "Program Analysis", isSelected: false },
  ];

  const [updatedWidgets, setUpdatedWidgets] =
    useState<Widget[]>(initialWidgets);

  const toggleSelectWidget = (widgetName: string) => {
    setUpdatedWidgets((prevWidgets) =>
      prevWidgets.map((widget) =>
        widget.name === widgetName
          ? { ...widget, isSelected: !widget.isSelected }
          : widget
      )
    );
  };

  return (
    <div className="flex flex-col gap-y-5 my-5 mb-9">
      {updatedWidgets.map((widget, index) => {
        return (
          <WidgetPicker
            key={index}
            widgetName={widget.name}
            widgetSelected={widget.isSelected}
            toggleSelectWidget={toggleSelectWidget}
          />
        );
      })}
    </div>
  );
}
