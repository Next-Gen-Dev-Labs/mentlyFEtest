import { ReactNode } from "react";

interface SelectTagProps {
  children: ReactNode;
  className?: string;
}
export default function SelectTag({
  children,
  className,
}: SelectTagProps) {
  return (
    <>
      <div className="relative inline-block">
        <select
          className={`border-(--Grey-100) border-[1px] rounded-[3px] text-sm font-semibold text-(--Grey-200) focus:outline-none appearance-none pr-7 ${className}`}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-2 pt-[3px] flex items-center">
          <svg
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.88627 2.58032C4.31071 3.00476 4.99887 3.00476 5.42331 2.58032L7.72912 0.274506C8.01204 -0.00841169 8.47074 -0.00841199 8.75366 0.274506C9.03658 0.557424 9.03658 1.01612 8.75366 1.29904L5.42331 4.6294C4.99887 5.05384 4.31071 5.05384 3.88627 4.6294L0.555915 1.29904C0.272997 1.01613 0.272996 0.557424 0.555914 0.274506C0.838832 -0.00841234 1.29753 -0.00841246 1.58045 0.274506L3.88627 2.58032Z"
              fill="#595564"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
