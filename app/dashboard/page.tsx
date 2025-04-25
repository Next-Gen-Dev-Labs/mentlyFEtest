"use client";

import React, { useState, useEffect, useRef, useMemo, Component } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"; // Use Sheet components
import DashboardWidget from "@/components/DashboardWidget";
import ManageWidgetsSheet from "@/components/ManageWidgetSheet"; // Updated import
import { Widget, initialWidgets } from "@/components/widgetData";
import Image from "next/image";
import Imagebar from "@/public/image-bar.svg"
import Images from "@/public/images.svg"
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { useIsMobile } from "@/hooks/use-mobile";

interface SortableItemProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

type DnDListeners = {
  onMouseDown?: (event: React.MouseEvent<SVGSVGElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<SVGSVGElement>) => void;
  onTouchStart?: (event: React.TouchEvent<SVGSVGElement>) => void;
};

interface DashboardWidgetProps {
  id: string;
  title: string;
  content: React.ReactNode;
  className?: string;
  listeners?: DnDListeners;
}

class DndErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("DnD Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong with drag and drop. Please refresh the page.</div>;
    }
    return this.props.children;
  }
}

const SortableItem = ({ id, children, className }: SortableItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 0,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`h-full w-full ${className}`}
      aria-label={`Sortable widget ${id}`}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement<DashboardWidgetProps>(child)) {
          return React.cloneElement(child, {
            listeners: { ...attributes, ...listeners },
          } as Partial<DashboardWidgetProps>);
        }
        return child;
      })}
    </div>
  );
};

export default function Dashboard() {
  const [widgets, setWidgets] = useState<Widget[]>(initialWidgets);
  const [allAvailableWidgets] = useState<Widget[]>(initialWidgets);
  const [selectedWidgetIds, setSelectedWidgetIds] = useState<string[]>(initialWidgets.map((w) => w.id));
  const [isGridActive, setIsGridActive] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  useEffect(() => {
    setIsGridActive(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    if (process.env.NODE_ENV === "development" && !process.env.NEXT_PUBLIC_USER_NAME) {
      console.warn("NEXT_PUBLIC_USER_NAME is not set. Falling back to 'User'.");
    }
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    const orderedWidgets = initialWidgets
      .filter((w) => selectedWidgetIds.includes(w.id))
      .sort((a, b) => selectedWidgetIds.indexOf(a.id) - selectedWidgetIds.indexOf(b.id));

    setWidgets(orderedWidgets);
  }, [selectedWidgetIds]);

  const handleSaveWidgets = (selectedIds: string[]) => {
    setSelectedWidgetIds(selectedIds);
  };

  const handleDragStart = () => {
    if (containerRef.current) {
      containerRef.current.style.opacity = "0.8";
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    if (containerRef.current) {
      containerRef.current.style.opacity = "1";
    }

    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = widgets.findIndex((widget) => widget.id === active.id);
    const newIndex = widgets.findIndex((widget) => widget.id === over.id);

    if (oldIndex === -1 || newIndex === -1) return;

    const reorderedWidgets = Array.from(widgets);
    const [movedWidget] = reorderedWidgets.splice(oldIndex, 1);
    reorderedWidgets.splice(newIndex, 0, movedWidget);

    setWidgets(reorderedWidgets);

    const reorderedSelectedIds = Array.from(selectedWidgetIds);
    const oldSelectedIdIndex = reorderedSelectedIds.indexOf(active.id as string);
    const newSelectedIdIndex = reorderedSelectedIds.indexOf(over.id as string);

    if (oldSelectedIdIndex !== -1 && newSelectedIdIndex !== -1) {
      const [movedSelectedId] = reorderedSelectedIds.splice(oldSelectedIdIndex, 1);
      reorderedSelectedIds.splice(newSelectedIdIndex, 0, movedSelectedId);
      setSelectedWidgetIds(reorderedSelectedIds);
    }
  };

  

  

  const getWidgetClass = (id: string): string => {
    if (isGridActive) {
      switch (id) {
        case "programs":
          return "col-span-1 programs";
        case "groupCalls":
          return "col-span-2 group-calls";
        case "applications":
          return "col-span-1 applications";
        case "mentors":
          return "col-span-1 mentors";
        case "users":
          return "col-span-1 users";
        case "recentActivities":
          return "col-span-1 recent-activities";
        default:
          return "col-span-1";
      }
    } else {
      return "col-span-1";
    }
  };

  const sortableItems = useMemo(() => widgets.map((widget) => widget.id), [widgets]);

  return (
    <div className="flex-1 p-4 sm:p-6 bg-background">
      <div className="flex justify-end items-center mb-1">
        <div className="flex gap-3">
          <Button
            onClick={() => setIsGridActive(false)}
            className={`rounded-lg ${!isGridActive ? "bg-purple-200 " : "bg-transparent text-gray-900"}`}
            aria-label="Switch to list view"
          >
            <Image alt="widget" src={Imagebar}  />
          </Button>
          <Button
            onClick={() => setIsGridActive(true)}
            className={`rounded-lg ${isGridActive ? "bg-purple-200 text-white" : "bg-transparent text-gray-900"}`}
            aria-label="Switch to grid view"
          >
            <Image alt="widget" src={Images} />

          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
                aria-label="Manage widgets"
              >
                Manage Widgets
              </Button>
            </SheetTrigger>
            <SheetContent
              side={isMobile ? "bottom" : "right"}
              className="bg-white w-full sm:w-[400px] backdrop-blur-md"
            >
              <ManageWidgetsSheet
                availableWidgets={allAvailableWidgets}
                selectedWidgets={selectedWidgetIds}
                onSave={handleSaveWidgets}
              />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="flex sm:flex-col sm:items-start lg:flex-row lg:items-center px-3 py-3 justify-between bg-[#6B21A8] text-white p-1 rounded-lg mb-2 headerdashboard">
        <div className="flex flex-col sm:flex-row lg:flex-row md:flex-col items-start sm:items-center gap-2 ">
          <span className="font-bold text-lg sm:text-md">Welcome Aboard, {process.env.NEXT_PUBLIC_USER_NAME || "User"} 👋</span>
          <span className="lg:text-lg md:text-md lg:pl-20 sm:text-xs ">We’re thrilled to have you join Techrity Team!</span>
        </div>
        <Button
          className="bg-white text-purple-900 hover:text-white cursor-pointer hover:border-white border-2 hover:bg-transparent rounded-lg py-2 px-4"
          aria-label="Update profile"
        >
          Update Profile
        </Button>
      </div>

      <DndErrorBoundary>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={sortableItems}
            strategy={rectSortingStrategy}
          >
            <div
              ref={containerRef}
              className={`dashboard-grid ${isGridActive ? "grid grid-cols-1 md:grid-cols-3 gap-4" : "flex flex-col gap-4"}`}
            >
              {widgets.map((widget) => (
                <SortableItem
                  key={widget.id}
                  id={widget.id}
                  className={getWidgetClass(widget.id)}
                >
                  {widget.id === "users" ? (
                    <div className="h-full w-full min-h-[40dvh] shadow-md rounded-lg border-none select-none py-2 bg-white">
                      {widget.content}
                    </div>
                  ) : (
                    <DashboardWidget
                      id={widget.id}
                      title={widget.title}
                      content={widget.content}
                      className="h-full w-full min-h-[30dvh]"
                    />
                  )}
                  
                </SortableItem>
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </DndErrorBoundary>
    </div>
  );
}