"use client";

import { useState } from "react";
import { widgetItems } from "@/data/items";

export function useWidgets() {
    const [widgets, setWidgets] = useState(() =>
        widgetItems.map(item => ({ ...item }))
    );

    const visibleCount = widgets.filter(w => w.visible).length;

    const toggleWidget = (id: string) => {
        setWidgets(prev => {
            const newWidgets = prev.map(widget => {
                if (widget.id === id) {
                    if (visibleCount <= 2 && widget.visible) return widget;
                    return { ...widget, visible: !widget.visible };
                }
                return widget;
            });
            return newWidgets;
        });
    };

    const resetWidgets = () => {
        setWidgets(widgetItems.map(item => ({
            ...item,
            visible: item.defaultVisible || false
        })));
    };

    return { widgets, toggleWidget, resetWidgets, visibleCount };
}