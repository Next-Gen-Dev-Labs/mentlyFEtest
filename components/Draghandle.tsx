"use client";

import React from "react";
import { GripVertical } from "lucide-react";

interface DragHandleProps {
     listeners?: React.SVGAttributes<SVGSVGElement> & {
          onMouseDown?: (event: React.MouseEvent<SVGSVGElement>) => void;
          onKeyDown?: (event: React.KeyboardEvent<SVGSVGElement>) => void;
          onTouchStart?: (event: React.TouchEvent<SVGSVGElement>) => void;
     };
}

const DragHandle: React.FC<DragHandleProps> = ({ listeners }) => {
     const { onMouseDown, onKeyDown, onTouchStart, role, tabIndex, ...otherListeners } =
          listeners || {};
     return (
          <GripVertical
               className="h-5 w-5 text-gray-800 cursor-grab"
               onMouseDown={onMouseDown}
               onKeyDown={onKeyDown}
               onTouchStart={onTouchStart}
               role={role}
               tabIndex={tabIndex}
               {...otherListeners}
          />
     );
};

export default DragHandle;