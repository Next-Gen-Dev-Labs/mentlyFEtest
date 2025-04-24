// components/ui/Badge.jsx
import clsx from 'clsx';

export default function Badge({ children, variant = 'default', size = 'sm', className }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center font-medium rounded-full',
        {
          // Variants
          'bg-gray-100 text-gray-800': variant === 'default',
          'bg-primary-light/10 text-primary-dark': variant === 'primary',
          'bg-green-100 text-green-800': variant === 'success',
          'bg-red-100 text-red-800': variant === 'danger',
          'bg-yellow-100 text-yellow-800': variant === 'warning',
          'bg-blue-100 text-blue-800': variant === 'info',
          
          // Sizes
          'px-2 py-0.5 text-xs': size === 'sm',
          'px-2.5 py-1 text-sm': size === 'md',
        },
        className
      )}
    >
      {children}
    </span>
  );
}