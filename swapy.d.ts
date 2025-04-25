import React from 'react';

export interface DraggableComponentProps {
  dragHandleRef?: React.RefObject<HTMLDivElement>;
  dragHandleListeners?: {
    [key: string]: unknown;
    onMouseDown?: (event: React.MouseEvent) => void;
    onKeyDown?: (event: React.KeyboardEvent) => void;
    tabIndex?: number;
    role?: string;
    "aria-describedby"?: string;
  };
}

// Add a type guard for checking if a prop is a valid object
export function isObject(value: unknown): value is { [key: string]: unknown } {
  return typeof value === 'object' && value !== null;
}