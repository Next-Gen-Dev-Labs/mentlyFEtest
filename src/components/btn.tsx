interface BtnProps {
  className?: string;
  text?: string;
}

export default function Btn({ className, text }: BtnProps) {
  return (
    <>
      <button className={`lg:h-[22px] lg:w-[65px] w-[100px] text-[12px] h-[32px] rounded-[2px] lg:text-[8px] font-[400] ${className}`}>
        {text}
      </button>
    </>
  );
}
