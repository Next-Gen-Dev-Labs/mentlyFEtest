// components/ui/Button.jsx
import clsx from 'clsx';

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) {
    return (
        <button
            className={clsx(
                'rounded font-medium transition-colors',
                {
                    // Variants
                    'bg-primary text-white hover:bg-primary-dark': variant === 'primary',
                    'bg-white text-primary border border-primary hover:bg-gray-50': variant === 'outline',
                    'bg-red-50 text-red-600 hover:bg-red-100': variant === 'danger',
                    'bg-gray-100 text-gray-800 hover:bg-gray-200': variant === 'secondary',

                    // Sizes
                    'px-6 py-2.5 text-sm': size === 'md',
                    'px-4 py-2 text-xs': size === 'sm',
                    'px-8 py-3 text-base': size === 'lg',
                },
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}