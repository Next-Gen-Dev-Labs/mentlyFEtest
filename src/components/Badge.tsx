// src/components/Badge.tsx
import { FC, ReactNode } from 'react';

type BadgeType = 'success' | 'warning' | 'error' | 'info' | 'default';

interface BadgeProps {
  type?: BadgeType;
  children: ReactNode;
}

const Badge: FC<BadgeProps> = ({ type = 'default', children }) => {
  const colors = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
    default: 'bg-gray-100 text-gray-800',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[type]}`}>
      {children}
    </span>
  );
};

export default Badge;