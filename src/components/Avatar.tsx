// src/components/Avatar.tsx
import { FC } from 'react';
import Image from 'next/image';

type AvatarSize = 'sm' | 'md' | 'lg';

interface AvatarProps {
  src: string;
  alt: string;
  size?: AvatarSize;
  status?: 'online' | 'away' | 'offline' | 'busy' | null;
}

const Avatar: FC<AvatarProps> = ({ src, alt, size = 'md', status = null }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const statusColors = {
    online: 'bg-green-400',
    away: 'bg-yellow-400',
    offline: 'bg-gray-400',
    busy: 'bg-red-400',
  };

  return (
    <div className="relative">
      <div className={`${sizeClasses[size]} rounded-full overflow-hidden`}>
        <Image
          src={src}
          alt={alt}
          width={size === 'lg' ? 48 : size === 'md' ? 32 : 24}
          height={size === 'lg' ? 48 : size === 'md' ? 32 : 24}
          className="object-cover"
        />
      </div>
      {status && (
        <span 
          className={`absolute bottom-0 right-0 block rounded-full ring-2 ring-white ${statusColors[status]}`}
          style={{ 
            width: size === 'lg' ? '12px' : size === 'md' ? '10px' : '8px', 
            height: size === 'lg' ? '12px' : size === 'md' ? '10px' : '8px' 
          }}
        />
      )}
    </div>
  );
};

export default Avatar;