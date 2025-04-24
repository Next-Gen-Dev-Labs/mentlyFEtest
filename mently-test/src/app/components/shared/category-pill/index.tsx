import { CategoryBadgeProps } from '@/app/types';
import React from 'react';



export default function CategoryBadge({
  label,
  textColor = 'text-green-800',
  bgColor = 'bg-green-100',
}: CategoryBadgeProps) {
  return (
    <span
      className={`inline-flex my-2 items-center gap-2 px-2 py-[1px] text-[10px] font-semibold rounded-full ${textColor} ${bgColor}`}
    >
      <span className={`w-2 h-2 rounded-full ${textColor} bg-current`} />
      {label}
    </span>
  );
}
