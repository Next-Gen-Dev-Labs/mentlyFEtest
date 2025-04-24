import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

type OrgCardProps = {
  name: string;
  role: string;
  logoSrc: string;
};

export default function UserCard({ name, role, logoSrc }: OrgCardProps) {
  return (
    <div className="flex items-center justify-between gap-4 w-full max-w-[460px]">
      {/* logo */}
      <div className="flex-shrink-0 rounded-full bg-black flex items-center justify-center overflow-hidden">
        <Image
          src={logoSrc}
          alt={`${name} logo`}
          width={44}
          height={44}
          className="object-contain"
        />
      </div>

      {/* name + role */}
      <div className="min-w-0">
        <p className="font-medium text-sm text-[#404040] truncate">
          {name.length > 16 ? `${name.slice(0, 16)}...` : name}
        </p>
        <p className="text-xs text-[#53547B]">{role}</p>
      </div>

      <button
        aria-label="Open organisation menu"
        className="flex-shrink-0 w-6 h-6 rounded-[6px] bg-[#6500e4] grid place-items-center hover:bg-[#5700c5] transition"
      >
        <ChevronDown className="w-6 h-6 stroke-[2.5] text-neutral-300" />
      </button>
    </div>
  );
}
