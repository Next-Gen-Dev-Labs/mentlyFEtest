// components/ui/Avatar.jsx
import Image from 'next/image';
import clsx from 'clsx';

export default function Avatar({ src, alt, size = 'md', className }) {
  const dimensions = {
    'sm': 'w-6 h-6',
    'md': 'w-8 h-8',
    'lg': 'w-10 h-10',
    'xl': 'w-12 h-12',
  };

  return (
    <div className={clsx(
      'relative rounded-full overflow-hidden bg-gray-200',
      dimensions[size],
      className
    )}>
      <Image 
        src={src || "/avatar-placeholder.svg"} 
        alt={alt || "Avatar"} 
        fill 
        className="object-cover"
      />
    </div>
  );
}