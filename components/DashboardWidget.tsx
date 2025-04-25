"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import DragHandle from "@/components/Draghandle";
import { EllipsisVertical } from "lucide-react";

interface DashboardWidgetProps {
  id: string;
  title: string;
  content: React.ReactNode;
  className?: string;
  listeners?: React.SVGAttributes<SVGSVGElement> & {
    onMouseDown?: (event: React.MouseEvent<SVGSVGElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<SVGSVGElement>) => void;
    onTouchStart?: (event: React.TouchEvent<SVGSVGElement>) => void;
  };
}

const DashboardWidget = React.forwardRef<HTMLDivElement, DashboardWidgetProps>(
  ({ id, title, content, className, listeners }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [scrollPos, setScrollPos] = useState({ left: 0, top: 0 });

    const isHorizontal = id === "groupCalls";

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      if (contentRef.current) {
        setIsDragging(true);
        setStartPos({ x: e.clientX, y: e.clientY });
        setScrollPos({
          left: contentRef.current.scrollLeft,
          top: contentRef.current.scrollTop,
        });
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging || !contentRef.current) return;

      const deltaX = e.clientX - startPos.x;
      const deltaY = e.clientY - startPos.y;

      if (isHorizontal) {
        contentRef.current.scrollLeft = scrollPos.left - deltaX;
      } else {
        contentRef.current.scrollTop = scrollPos.top - deltaY;
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
      if (contentRef.current) {
        setIsDragging(true);
        const touch = e.touches[0];
        setStartPos({ x: touch.clientX, y: touch.clientY });
        setScrollPos({
          left: contentRef.current.scrollLeft,
          top: contentRef.current.scrollTop,
        });
        e.stopPropagation();
      }
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
      if (!isDragging || !contentRef.current) return;

      const touch = e.touches[0];
      const deltaX = touch.clientX - startPos.x;
      const deltaY = touch.clientY - startPos.y;

      if (isHorizontal) {
        contentRef.current.scrollLeft = scrollPos.left - deltaX;
      } else {
        contentRef.current.scrollTop = scrollPos.top - deltaY;
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    return (
      <Card
        ref={ref}
        className={`widget shadow-md  rounded-lg border-none select-none py-2 sm:pb-4 bg-white ${className || ""}`}
      >
        <CardHeader className="widget-header flex justify-between items-center rounded-t-lg border-b border-gray-200">
          <CardTitle className="text-base font-bold text-gray-400 items-center flex gap-2">
            <DragHandle listeners={listeners} />
            {title}
          </CardTitle>
          <div className="flex gap-2 items-center">
          <Button
            variant="ghost"
            size="sm"
              className="text-purple-600 cursor-pointer gap-2 hover:text-purple-800 text-sm"
            >
            See All
          </Button>
          <EllipsisVertical className="cursor-pointer"/>
            </div>
        </CardHeader>
        <CardContent
          ref={contentRef}
          className={`h-full py-4 ${isHorizontal ? "overflow-x-auto overflow-y-hidden" : "overflow-y-auto"} scrollbar-hide`}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {content}
        </CardContent>
      </Card>
    );
  }
);

DashboardWidget.displayName = "DashboardWidget";

export default DashboardWidget;