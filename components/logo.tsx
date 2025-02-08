import { Icons } from "@/constants/icons";
import { images } from "@/constants/image";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  linkClassName?: string;
  showText?: boolean;
  href: string;
}

export function Logo({
  className,
  linkClassName,
  showText = true,
  href,
}: LogoProps) {
  return (
    <Link
      href={href}
      className={cn("flex w-full items-center gap-2", linkClassName)}
    >
      <Image
        src={images.logo}
        alt="logo"
        width={32}
        height={32}
        className={cn("object-contain", className)}
      />
      {showText && <Icons.logoText />}
    </Link>
  );
}
