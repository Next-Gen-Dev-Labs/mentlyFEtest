interface BtnProps {
  className?: string;
  text?: string;
}

export default function Button({ className, text }: BtnProps) {
  return (
    <>
      <button
        className={`h-[31px] w-[81px] rounded-[6px] text-[9px] font-[500] leading-[100%] ${className}`}
      >
        {text}
      </button>
    </>
  );
}
