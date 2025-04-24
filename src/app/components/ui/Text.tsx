import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string | undefined;
  size?: "2xs" | "xs" |"sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  color?: string;
  fontStyle?: string;
}

export const Text = ({
  children,
  as: Tag = "p",
  className,
  size = "base",
  weight = "normal",
  color = "text-neutral-900",
  fontStyle = 'font-chivo'
}: TextProps) => {
  
  const font = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  }

  const textSize = {
    '2xs': 'text-[10px]',
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg:'text-lg',
    xl:'text-xl',
    '2xl':'text-2xl',
    '3xl':'text-3xl',
    '4xl':'text-4xl',
    '5xl':'text-5xl',
    '6xl':'text-6xl',

  }

  return (
    <Tag className={`${textSize[size]} ${font[weight]} ${color} ${fontStyle} ${className}`}>
      {children}
    </Tag>
  );
};
